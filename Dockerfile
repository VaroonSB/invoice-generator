# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Install required dependencies
RUN apk add libreoffice \
    openjdk11-jre \
    bash \
    curl \
    fontconfig \
    ttf-freefont \
    ttf-liberation

# Install PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml before installing dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "dev"]
