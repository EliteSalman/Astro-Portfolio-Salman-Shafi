FROM registry.access.redhat.com/ubi10/nodejs-24 AS builder
WORKDIR /opt/app-root/src
USER root
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM registry.access.redhat.com/ubi10/nodejs-24-minimal
WORKDIR /opt/app-root/src
ENV NODE_ENV=production
ENV HOSTNAME=::
ENV PORT=3000
USER root
COPY --from=builder /opt/app-root/src/.next/standalone ./
COPY --from=builder /opt/app-root/src/.next/static ./.next/static
COPY --from=builder /opt/app-root/src/public ./public
RUN chgrp -R 0 /opt/app-root/src && \
    chmod -R g+rwX /opt/app-root/src
USER 1001
EXPOSE 3000
CMD ["node", "server.js"]
