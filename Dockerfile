# Stage 1: Build the Angular application
FROM node:alpine AS build

# Setup the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy other files and folders to the working directory
COPY . .

# Build Angular application in production mode
RUN npm run build --prod

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy built Angular app files to Nginx HTML folder
COPY --from=build /usr/src/app/dist/laboratory /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/
COPY ./ssl/ssl.crt /etc/nginx/lab.exertive.local.crt
COPY ./ssl/ssl.key /etc/nginx/lab.exertive.local.key


# Expose port 80
EXPOSE 8445

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
