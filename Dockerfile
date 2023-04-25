# Step 1. Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /var/www/app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
      elif [ -f package-lock.json ]; then npm ci; \
      elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
      else echo "Lockfile not found." && exit 1; \
  fi


COPY . .

# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Step 2. Production image, copy all the files and run next
FROM node:16-alpine AS runner

WORKDIR /var/www/app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /var/www/app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /var/www/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /var/www/app/.next/static ./.next/static


# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

CMD node server.js