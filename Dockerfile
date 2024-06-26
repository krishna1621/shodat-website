FROM node:18-alpine
WORKDIR /shodat-website
ENV PATH="/shodat-website/node_modules/.bin:$PATH"
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]