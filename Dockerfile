# Use an official Node runtime as a base image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents to the container at /app
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 5173

# Run npm start when the container launches
CMD ["npm","run","dev"]
