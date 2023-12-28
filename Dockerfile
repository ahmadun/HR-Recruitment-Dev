# # Use an official Node.js runtime as a base image
# FROM node:latest

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the container
# COPY build/package*.json ./

# # Copy the application code to the container
# COPY build/src/ .

# # Install the application dependencies
# RUN npm install


# # Expose the port your app runs on
# EXPOSE 3000

# # Specify the command to run on container start
# CMD ["npm", "start"]

FROM node:latest 

WORKDIR /usr/src/app  
# Copies the contents of the current directory into the working directory inside the # docker container
COPY build/. .

RUN npm install  

# Runs the npm install command to install dependencies


# Provides the command required to run the application
CMD ["npm", "start"]