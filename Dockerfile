# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY landing-page/package.json landing-page/package-lock.json* ./
RUN npm install --no-audit --no-fund

COPY landing-page/ ./

RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine

COPY landing-page/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY landing-page/og-image.png /usr/share/nginx/html/og-image.png

EXPOSE 8080
