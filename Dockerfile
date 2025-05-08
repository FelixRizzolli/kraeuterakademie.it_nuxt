# BASE IMAGE
FROM node:22-alpine AS base

ARG PORT=80
ARG HOST=0.0.0.0
ARG EVN=production

WORKDIR /app

# BUILD AND RUN IMAGE
FROM base

RUN corepack enable

# Copy package.json and your lockfile, here we add pnpm-lock.yaml for illustration
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies
RUN pnpm i

# Copy the entire project
COPY . ./

# Build the project
RUN pnpm run build

# Change the port and host
ENV PORT=$PORT
ENV HOST=$HOST
ENV NODE_ENV=$EVN

EXPOSE $PORT

CMD ["node", "/app/.output/server/index.mjs"]
