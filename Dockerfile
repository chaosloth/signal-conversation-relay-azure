# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.19.0
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
ARG PNPM_VERSION=10.12.1
RUN npm install -g pnpm@$PNPM_VERSION


# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package-lock.json package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Copy application code
COPY . .

# Build application
RUN pnpm run build

# Remove development dependencies
RUN pnpm prune --prod

# Build the UI
RUN pnpm run ui-install
RUN pnpm run ui:build


# Final stage for app image
FROM base

# Install required dependencies and Azure CLI
RUN apt-get update && \
    apt-get install -y ca-certificates curl apt-transport-https lsb-release gnupg && \
    curl -sL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
    install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ && \
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $(lsb_release -cs) main" \
      > /etc/apt/sources.list.d/azure-cli.list && \
    apt-get update && \
    apt-get install -y azure-cli && \
    rm -f microsoft.gpg

# Copy login script
COPY azure-login.sh /azure-login.sh
RUN chmod +x /azure-login.sh

# # Set environment variables for Azure login (use build args for security)
# ARG AZURE_CLIENT_ID
# ARG AZURE_CLIENT_SECRET
# ARG AZURE_TENANT_ID
# ARG AZURE_SUBSCRIPTION_ID

# ENV AZURE_CLIENT_ID=$AZURE_CLIENT_ID
# ENV AZURE_CLIENT_SECRET=$AZURE_CLIENT_SECRET
# ENV AZURE_TENANT_ID=$AZURE_TENANT_ID
# ENV AZURE_SUBSCRIPTION_ID=$AZURE_SUBSCRIPTION_ID

# # Perform silent Azure CLI login
# RUN az login --service-principal \
#     --username $AZURE_CLIENT_ID \
#     --password $AZURE_CLIENT_SECRET \
#     --tenant $AZURE_TENANT_ID && \
#     az account set --subscription $AZURE_SUBSCRIPTION_ID

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3333
CMD ["/bin/bash", "-c", "pnpm run start & /azure-login.sh && wait"]
# CMD [ "pnpm", "run", "start" ]
