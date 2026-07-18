interface Tech {
    name: string
    category: string
}

export const AuthKitTech: Tech[] = [
  { name: "Express 5", category: "core" },
  { name: "Mongoose", category: "core" },
  { name: "jsonwebtoken", category: "auth" },
  { name: "bcrypt", category: "auth" },
  { name: "Zod", category: "validation" },
  { name: "Nodemailer", category: "email" },
  { name: "express-rate-limit", category: "security" },
  { name: "cookie-parser", category: "utility" },
  { name: "cors", category: "utility" },
  { name: "dotenv", category: "utility" },
];

export const TsAdditions: Tech[] = [
  { name: "tsx", category: "typescript" },
  { name: "typescript", category: "typescript" },
];