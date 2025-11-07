# Builder stage
FROM node:20-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install exact dependencies
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Copy rest of the sources
COPY . .

# Build the Next.js app
RUN npm run build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy production node_modules and built files from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# Copy any config files needed at runtime
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/next-env.d.ts ./next-env.d.ts

# Expose default Next.js port
EXPOSE 3000

# Use a non-root user for security (optional)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Start the Next.js server in production
CMD ["npm", "run", "start"]
