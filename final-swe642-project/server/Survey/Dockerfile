# Group Members: Brian Zhang, Nicholas Harvey

# Start with a base image that contains Java and Maven
FROM maven:3.8.4-openjdk-17-slim as build

# Set the current working directory inside the image
WORKDIR /app

# Copy the pom.xml file and source code
COPY pom.xml .
COPY src ./src

# Package the application using Maven
RUN mvn package -DskipTests

# For the actual image, start with a JDK 17 slim image
FROM openjdk:17-slim

# Copy the JAR from the build stage to the /app directory
COPY --from=build /app/target/*.jar /app/app.jar

# Expose the port your app runs on
EXPOSE 8080

# Add environment variables for MySQL connection
ENV SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/survey_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC
ENV SPRING_DATASOURCE_USERNAME=root
# Need to enter password
ENV SPRING_DATASOURCE_PASSWORD= 


# Run the jar file
ENTRYPOINT ["java","-jar","/app/app.jar"]
