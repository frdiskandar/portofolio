# Stage 1: Build the React application
FROM node:26-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build --force

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine AS production

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration (SPA fallback for client-side routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
