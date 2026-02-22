type RateLimitStore = {
  count: number;
  resetTime: number;
};

export class RateLimiter {
  private store: Map<string, RateLimitStore>;
  private limit: number;
  private windowMs: number;

  constructor(limit: number, windowMs: number) {
    this.store = new Map();
    this.limit = limit;
    this.windowMs = windowMs;
  }

  public check(ip: string): boolean {
    const now = Date.now();
    const record = this.store.get(ip);

    // Clean up expired entry if it exists
    if (record && now > record.resetTime) {
      this.store.delete(ip);
    }

    // Check again after potential cleanup
    const currentRecord = this.store.get(ip);

    if (!currentRecord) {
      this.store.set(ip, { count: 1, resetTime: now + this.windowMs });
      return true;
    }

    if (currentRecord.count >= this.limit) {
      return false;
    }

    currentRecord.count += 1;
    return true;
  }
}

// Create a singleton instance
// 3 requests per hour
export const rateLimiter = new RateLimiter(3, 60 * 60 * 1000);
