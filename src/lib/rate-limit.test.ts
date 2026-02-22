import { RateLimiter } from './rate-limit';
import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';

describe('RateLimiter', () => {
  let limiter: RateLimiter;

  beforeEach(() => {
    // 3 requests per 100ms for faster testing
    limiter = new RateLimiter({ limit: 3, windowMs: 100 });
  });

  it('should allow requests under the limit', () => {
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
  });

  it('should block requests over the limit', () => {
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), false);
  });

  it('should track different keys independently', () => {
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), false);

    assert.strictEqual(limiter.check('ip2'), true);
  });

  it('should reset after window', async () => {
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), true);
    assert.strictEqual(limiter.check('ip1'), false);

    // Wait for window to expire (100ms window + buffer)
    await new Promise(resolve => setTimeout(resolve, 150));

    assert.strictEqual(limiter.check('ip1'), true);
  });
});
