const express = require("express");
const mysql = require("mysql");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const winston = require("winston");
const path = require("path");
const { combine, timestamp, printf } = winston.format;
require("dotenv").config();
const app = express();
const port = 8000;

app.use(cors());

app.use(bodyParser.json());

// Configure Winston logger
const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp(),
    printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, "combined.log"),
    }),
    new winston.transports.File({
      filename: path.join(__dirname, "error.log"),
      level: "error",
    }),
  ],
});
// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  res.status(500).json({ error: err.message });
});
// MySQL database configuration
const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const db = mysql.createConnection(mysqlConfig);
db.connect((err) => {
  if (err) {
    logger.error("Error connecting to MySQL database:", err.stack);
    return;
  }
  logger.info("Connected to MySQL database");
});

//Sender Mail Configuration
const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

sender.verify(function (error, success) {
  if (error) {
    logger.error("Error verifying email transporter:", error);
  } else {
    logger.info("Email transporter is ready");
  }
});

function sendEmailToAdmin(subject, html) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: subject,
      html: html,
    };

    sender.sendMail(mailOptions, function (error, info) {
      if (error) {
        logger.error("Error sending email to admin:", error);
        reject(error);
      } else {
        logger.info("Email sent to admin:", info.response);
        resolve(info.response);
      }
    });
  });
}
function sendEmailToUser(email, subject, html) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: subject,
      html: html,
    };
    sender.sendMail(mailOptions, function (error, info) {
      if (error) {
        logger.error("Error sending email to admin:", error);
        reject(error);
      } else {
        logger.info("Email sent to user:", info.response);
        resolve(info.response);
      }
    });
  });
}

function sendMeetingScheduledEmailToUser(email, name) {
  const content = process.env.MEETING_SCHEDULED_EMAIL_CONTENT.replace(
    /{name}/g,
    name
  );
  sendEmailToUser(email, process.env.MEETING_SCHEDULED_SUBJECT, content)
    .then(() => {
      logger.info(`Meeting scheduled email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error sending meeting scheduled email to ${email}:`, error);
      throw error; // Propagate error for error handling middleware
    });
}
function sendNewMeetingScheduledEmailToAdmin(
  name,
  mobile,
  email,
  company,
  message
) {
  let content = process.env.NEW_MEETING_SCHEDULED_EMAIL_CONTENT.replace(
    /{name}/g,
    name
  );
  content = content.replace(/{mobile}/g, mobile);
  content = content.replace(/{email}/g, email);
  content = content.replace(/{company}/g, company);
  content = content.replace(/{message}/g, message);
  sendEmailToAdmin(process.env.NEW_MEETING_SCHEDULED_SUBJECT, content)
    .then(() => {
      logger.info(`Meeting scheduled email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error sending meeting scheduled email to ${email}:`, error);
      throw error;
    });
}
function sendMessageReceivedEmailToUser(email) {
  sendEmailToUser(
    email,
    process.env.MEETING_SCHEDULED_SUBJECT,
    process.env.MESSAGE_RECEIVED_EMAIL_CONTENT
  )
    .then(() => {
      logger.info(`Message Received email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error Message Received email to ${email}:`, error);
      throw error;
    });
}
function sendNewMessageScheduledEmailToAdmin(
  name,
  meetingType,
  email,
  company,
  mobile,
  message
) {
  let content = process.env.NEW_MESSAGE_SCHEDULED_EMAIL_CONTENT.replace(
    /{name}/g,
    name
  );
  content = content.replace(/{meetingType}/g, meetingType);
  content = content.replace(/{email}/g, email);
  content = content.replace(/{company}/g, company);
  content = content.replace(/{mobile}/g, mobile);
  content = content.replace(/{message}/g, message);
  sendEmailToAdmin(process.env.NEW_MESSAGE_SCHEDULED_SUBJECT, content)
    .then(() => {
      logger.info(`Message Received email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error Message Received email to ${email}:`, error);
      throw error;
    });
}
function sendSubscriptionConfirmationEmailToUser(email) {
  sendEmailToUser(
    email,
    process.env.SUBSCRIPTION_CONFIRMATION_SUBJECT,
    process.env.SUBSCRIPTION_CONFIRMATION_EMAIL_CONTENT
  )
    .then(() => {
      logger.info(`Subscription Confirmation email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error Subscription Confirmation email to ${email}:`, error);
      throw error;
    });
}
function sendNewSubscriptionEmailToAdmin(email) {
  const content = process.env.NEW_SUBSCRIPTION_EMAIL_CONTENT.replace(
    /{email}/g,
    email
  );
  sendEmailToAdmin(process.env.NEW_SUBSCRIPTION_SUBJECT, content)
    .then(() => {
      logger.info(`New Subscription email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error New Subscription email to ${email}:`, error);
      throw error;
    });
}

app.post("/api/schedule-meeting", async (req, res, next) => {
  const { name, mobile, email, company, message } = req.body;
  const query =
    "INSERT INTO meetings (name, mobile, email, company, message) VALUES (?, ?, ?, ?, ?)";
  const values = [name, mobile, email, company, message];
  db.query(query, values, async (err, result) => {
    if (err) {
      logger.error("Error inserting into meetings table:", err);
      return next(err);
    }

    try {
      await sendMeetingScheduledEmailToUser(email, name);
      await sendNewMeetingScheduledEmailToAdmin(
        name,
        mobile,
        email,
        company,
        message
      );
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      next(error);
    }
  });
});

app.post("/api/message", async (req, res, next) => {
  const { meetingType, name, email, company, mobile, message } = req.body;
  const query =
    "INSERT INTO message (meetingType, name, email, company, mobile, message) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [meetingType, name, email, company, mobile, message];
  db.query(query, values, async (err, result) => {
    if (err) {
      logger.error("Error inserting into message table:", err);
      return next(err);
    }
    try {
      await sendMessageReceivedEmailToUser(email);
      await sendNewMessageScheduledEmailToAdmin(
        name,
        meetingType,
        email,
        company,
        mobile,
        message
      );
      return res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      next(error);
    }
  });
});

app.post("/api/business_email", async (req, res, next) => {
  const { email } = req.body;
  const query = "INSERT INTO email (email) VALUES (?)";
  const values = [email];
  db.query(query, values, async (err, result) => {
    if (err) {
      logger.error("Error inserting into email table:", err);
      return next(err);
    }
    try {
      await sendSubscriptionConfirmationEmailToUser(email);
      await sendNewSubscriptionEmailToAdmin(email);

      return res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      next(error);
    }
  });
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
