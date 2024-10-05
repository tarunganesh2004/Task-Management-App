# Use Node.js 16 Alpine for smaller image size
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install both production and development dependencies (including nodemon and dotenv)
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the app in development mode using nodemon
CMD ["npm", "run", "dev"]
