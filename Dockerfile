
# This version of the Docker file configures a Docker Container that exposes
# the Exertive Angular Laboratory Web App for http on Port 8080. It has been
# tested and runs correctly on a local Windows 11 machine running Docker Desktop.

# Use the official Node.js image for building Angular

FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install Angular dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Build the Angular Web App using the Docker configuration. This effectively
# builds the web app in Development Mode but can be configured to build
# for Production Mode by editing the configuration in angular.json.
RUN npm run build-docker

# Use Nginx (Alpine slim) to serve the built Angular app
FROM nginx:1-alpine-slim

# Copy the custom Nginx configuration file to the container in the
# default location
COPY .config/nginx/nginx.http.conf /etc/nginx/nginx.conf

# Copy the build output to the default Nginx folder
COPY --from=0 /app/dist/exertive-angular-laboratory /usr/share/nginx/html

# Expose Port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

