# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of your TypeScript source code
COPY . .

# Build your TypeScript code
RUN npm run build

# Command to run when the container starts
CMD ["node", "index.js"]
