interface RateLimit {
    endpoint: string
    strategy: string
    limit: string
    window: string
}

export const RateLimits: RateLimit[] = [
  { endpoint: "/register", strategy: "IP-only", limit: "5", window: "1 hour" },
  { endpoint: "/login", strategy: "IP-only", limit: "20", window: "15 min" },
  { endpoint: "/login", strategy: "Email+IP", limit: "5", window: "1 hour" },
  { endpoint: "/refresh-token", strategy: "IP-only", limit: "20", window: "15 min" },
  { endpoint: "/forget-password", strategy: "Email+IP", limit: "5", window: "15 min" },
  { endpoint: "/verify-reset-otp", strategy: "Email+IP", limit: "10", window: "15 min" },
  { endpoint: "/reset-password", strategy: "Email+IP", limit: "10", window: "15 min" },
];