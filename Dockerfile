# Stage 0
FROM node:12.16 AS builder

# Install dependencies
WORKDIR /app
COPY package*.json /app/
COPY yarn.lock /app/
RUN yarn

# Copy all source code
COPY . .

# And build
ENV NODE_ENV=production
RUN yarn build
RUN yarn cache clean && yarn

# Stage 1
FROM node:12.16-slim

# Running on non-root user
RUN useradd -ms /app app -U
WORKDIR /app

# Copy build
COPY package*.json /app/
COPY yarn.lock /app/
COPY next.config.js /app/

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules
RUN chown app:app /app/.next -R

# Run on non-root user and expose port
USER app
EXPOSE 3000

# Entrypoint
CMD ["yarn", "start"]
