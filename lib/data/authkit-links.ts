import { Package, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { type LucideIcon } from "lucide-react";
import { type IconType } from "react-icons";

interface Link {
  label: string;
  url: string;
  icon: LucideIcon | IconType;
  value: string;
}

export const AuthkitLinks: Link[] = [
  {
    label: "npm",
    url: "https://www.npmjs.com/package/create-express-authkit",
    icon: Package,
    value: "npmjs.com/package/create-express-authkit",
  },
  {
    label: "GitHub",
    url: "https://github.com/TakshPatel02/create-express-authkit",
    icon: FaGithub,
    value: "github.com/TakshPatel02/create-express-authkit",
  },
  {
    label: "Author",
    url: "https://github.com/takshpatel02",
    icon: User,
    value: "Taksh Patel",
  },
];