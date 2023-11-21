# Stage 1: Build the Angular application
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

COPY . .

# Use the Angular CLI to build the project
RUN npx ng build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/final-swe642-project /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
