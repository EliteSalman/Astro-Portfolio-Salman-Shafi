interface RateLimitConfig {
  limit: number;
  windowMs: number;
}

interface RateLimitEntry {
  count: number;
  lastReset: number;
}

export class RateLimiter {
  private requestCounts: Map<string, RateLimitEntry>;
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.requestCounts = new Map();
    this.config = config;
  }

  check(key: string): boolean {
    const now = Date.now();
    const record = this.requestCounts.get(key);

    if (!record) {
      this.requestCounts.set(key, { count: 1, lastReset: now });
      // Perform opportunistic cleanup occasionally to prevent memory leaks
      if (this.requestCounts.size > 10000) {
        this.cleanup();
      }
      return true;
    }

    if (now - record.lastReset > this.config.windowMs) {
      // Reset limit
      record.count = 1;
      record.lastReset = now;
      return true;
    }

    if (record.count >= this.config.limit) {
      return false;
    }

    record.count++;
    return true;
  }

  cleanup() {
    const now = Date.now();
    for (const [key, record] of this.requestCounts.entries()) {
      if (now - record.lastReset > this.config.windowMs) {
        this.requestCounts.delete(key);
      }
    }
  }
}

// 3 requests per hour per IP
export const contactFormRateLimiter = new RateLimiter({
  limit: 3,
  windowMs: 60 * 60 * 1000,
});
