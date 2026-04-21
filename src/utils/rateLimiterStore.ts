import { RateLimitRecord } from "../types/req";

const WINDOW_SIZE = 60 * 1000;

export class RateLimiteStore {
    private store: Map<string, RateLimitRecord> = new Map();

    check(key: string, limit: number): boolean {

        const now = Date.now();

        const record = this.store.get(key);

        if(!record) {
            this.store.set(key, {
                count: 1,
                startTime: now,
            });
            return true;
        }

        // reset window
        if(now - record.startTime > WINDOW_SIZE) {
            this.store.set(key, {
                count: 1,
                startTime: now
            });
            return true;
        }

        // limit exceeded
        if(record.count >= limit) {
            return false;
        }

        record.count += 1;
        return true;
    }
}

export const rateLimiterStore = new RateLimiteStore();