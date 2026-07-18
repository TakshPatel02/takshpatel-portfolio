interface SecurityHighlight {
    text: string
    bold?: string
}

export const SecurityHighlights: SecurityHighlight[] = [
  {
    text: "Passwords hashed with **bcrypt** (10 salt rounds)",
    bold: "bcrypt",
  },
  {
    text: 'Refresh tokens in Secure, HttpOnly, SameSite: Strict cookies',
  },
  {
    text: "**Token rotation** — old refresh token invalidated on every refresh",
    bold: "Token rotation",
  },
  {
    text: "**OTP brute-force protection** — max 5 attempts, then OTP is deleted",
    bold: "OTP brute-force protection",
  },
  {
    text: "**Dual-layer rate limiting** on login (IP + Email), single-layer on every other sensitive endpoint",
    bold: "Dual-layer rate limiting",
  },
  {
    text: "**Single-use reset tokens** via unique jti claim",
    bold: "Single-use reset tokens",
  },
  {
    text: "**Timing-safe forgot-password response** — same response whether or not email exists (prevents enumeration)",
    bold: "Timing-safe forgot-password response",
  },
];