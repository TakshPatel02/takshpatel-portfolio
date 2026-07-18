interface EndPoint {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    auth: boolean;
    rateLimit: string;
    desc: string;
}

export const endpoints: EndPoint[] = [
  { method: "POST", path: "/register", auth: false, rateLimit: "✓ IP", desc: "Register a new user" },
  { method: "POST", path: "/login", auth: false, rateLimit: "✓ IP + Email", desc: "Login and receive tokens" },
  { method: "DELETE", path: "/logout", auth: true, rateLimit: "✗", desc: "Logout and clear refresh token" },
  { method: "POST", path: "/refresh-token", auth: false, rateLimit: "✓ IP", desc: "Rotate access & refresh tokens" },
  { method: "POST", path: "/forget-password", auth: false, rateLimit: "✓ Email+IP", desc: "Send password-reset OTP to email" },
  { method: "POST", path: "/verify-reset-otp", auth: false, rateLimit: "✓ Email+IP", desc: "Verify OTP, receive reset token" },
  { method: "POST", path: "/reset-password", auth: false, rateLimit: "✓ Email+IP", desc: "Reset password using reset token" },
  { method: "GET", path: "/health", auth: false, rateLimit: "✗", desc: 'Health check → { "status": "ok" }' },
];