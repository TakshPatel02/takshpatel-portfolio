interface Example {
    id: string;
    title: string;
    request?: {
        label: string;
        code: string;
    };
    response?: {
        label: string;
        statusColor?: string;
        code: string;
    };
    note?: string;
    steps?: Array<{
        stepLabel: string;
        request: {
            label: string;
            code: string;
        };
        response: {
            label: string;
            statusColor?: string;
            code: string;
        };
    }>;
}

export const ApiExamples: Example[] = [
    {
        id: "register",
        title: "Register",
        request: {
            label: "POST /api/v1/users/register",
            code: `{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}`,
        },
        response: {
            label: "201 Response",
            statusColor: "#59d499",
            code: `{
  "success": true,
  "message": "User registered successfully",
  "userId": "665f..."
}`,
        },
    },
    {
        id: "login",
        title: "Login",
        request: {
            label: "POST /api/v1/users/login",
            code: `{
  "email": "john@example.com",
  "password": "securePassword123"
}`,
        },
        response: {
            label: "200 Response",
            statusColor: "#59d499",
            code: `{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOi..."
}`,
        },
        note: "Refresh token is set automatically as an HTTP-only cookie.",
    },
    {
        id: "forgot-password",
        title: "Forgot Password Flow",
        steps: [
            {
                stepLabel: "Step 1 — Request OTP",
                request: {
                    label: "POST /api/v1/users/forget-password",
                    code: `{ "email": "john@example.com" }`,
                },
                response: {
                    label: "200 Response",
                    statusColor: "#59d499",
                    code: `{
  "success": true,
  "message": "If this email exists, an OTP has been sent."
}`,
                },
            },
            {
                stepLabel: "Step 2 — Verify OTP",
                request: {
                    label: "POST /api/v1/users/verify-reset-otp",
                    code: `{ "email": "john@example.com", "otp": "482910" }`,
                },
                response: {
                    label: "200 Response",
                    statusColor: "#59d499",
                    code: `{
  "success": true,
  "data": { "resetToken": "eyJhbGciOi..." }
}`,
                },
            },
            {
                stepLabel: "Step 3 — Reset Password",
                request: {
                    label: "POST /api/v1/users/reset-password",
                    code: `Authorization: Bearer <resetToken>\n{ "newPassword": "newSecurePassword456" }`,
                },
                response: {
                    label: "200 Response",
                    statusColor: "#59d499",
                    code: `{
  "success": true,
  "message": "Password reset successfully. Please log in with your new password."
}`,
                },
            },
        ],
    },
];