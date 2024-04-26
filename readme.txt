# Introduction
# This is a README file for a NestJS application. It provides an overview of the project structure, installation instructions, and other relevant information...

# Prerequisites
# Node.js (version 20.9.0 or higher)
# yarn (version 1.22.19 or higher)
# MySQL (you need to set up a MySQL database for the project)

# Installation
# Clone the repository to your local machine:
# git clone https://github.com/Ruchit1101/Finmo_Assignment_Backup.git
# Navigate to the project directory:
# cd Finmo_Assig
# Install dependencies using yarn:
# yarn install
# Configure environment variables by creating a .env file in the project root and specifying the necessary configuration parameters:
# makefile
# MY_PORT=8001  
# API_KEY=X80D35JH9CSO10E5
# DB_HOST=localhost
# DB_PORT=3306
# DB_USERNAME=root
# DB_PASSWORD=
# DB_NAME=my_database
# Before starting the application, you need to set up the MySQL server with the provided configuration variables.

# Start the application
# yarn start:dev

# Usage
# Once the application is running, you can access the API endpoints using a tool like Postman or cURL. The base URL for the API is typically http://localhost:8001.

# Project Structure
# The project structure follows the recommended layout for NestJS applications:
# src/                
#   |- account/       
#      |- account.controller.ts
#      |- account.module.ts
#      |- account.service.ts
#      |- account.entity.ts
#      |- balance.entity.ts
#   |- fx-rates/      
#      |- fx-rates.controller.ts
#      |- fx-rates.module.ts
#      |- fx-rates.service.ts
#   |- fx-conversion/ 
#      |- fx-conversion.controller.ts
#      |- fx-conversion.module.ts
#      |- fx-conversion.service.ts
#   |- fx-rate-fetch/ 
#      |- fx-rate-fetch.controller.ts
#      |- fx-rate-fetch.module.ts
#      |- fx-rate-fetch.service.ts
#   |- app.controller.ts
#   |- app.module.ts
#   |- app.service.ts
#   |- main.ts               
# test/               
# .env                
# package.json        
# tsconfig.json       

# Configuration
# The application uses environment variables for configuration. These variables can be set in a .env file in the project root or provided as system environment variables.
