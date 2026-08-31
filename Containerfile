# Astro portfolio container
FROM registry.access.redhat.com/ubi10/nodejs-24 AS builder
WORKDIR /opt/app-root/src
USER root
RUN npm install -g corepack && corepack enable
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install --immutable
COPY . .
RUN yarn build

FROM registry.access.redhat.com/ubi10/nodejs-24-minimal
WORKDIR /opt/app-root/src
ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    PORT=4321
USER root
COPY --from=builder --chown=1001:0 /opt/app-root/src/dist ./dist
COPY --from=builder --chown=1001:0 /opt/app-root/src/node_modules ./node_modules
COPY --from=builder --chown=1001:0 /opt/app-root/src/package.json ./package.json
COPY --from=builder --chown=1001:0 /opt/app-root/src/public ./public
COPY --from=builder --chown=1001:0 /opt/app-root/src/healthcheck.sh /usr/local/bin/healthcheck.sh
RUN chmod +x /usr/local/bin/healthcheck.sh && microdnf clean all
USER 1001
EXPOSE 4321
HEALTHCHECK --interval=10s --timeout=5s --start-period=30s --retries=3 \
    CMD ["/usr/local/bin/healthcheck.sh"]
CMD ["node", "dist/server/entry.mjs"]
