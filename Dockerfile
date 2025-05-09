# IMAGE
FROM node:22-alpine

ARG PORT=80
ARG HOST=0.0.0.0
ARG EVN=production

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . ./

# Install dependencies & build the project
RUN corepack enable && \
    pnpm install --prod && \
    pnpm run build

# Change the port and host
ENV PORT=$PORT
ENV HOST=$HOST
ENV NODE_ENV=$EVN

EXPOSE $PORT

CMD ["node", "/app/.output/server/index.mjs"]
