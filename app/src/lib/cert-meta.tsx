/**
 * Shared certification metadata — icons, descriptions, and color classes.
 *
 * Single source of truth consumed by the homepage, practice-tests catalog,
 * and questions library. Keeps cert branding consistent and DRY.
 */

import { Play, Shield, Users, Bot } from "lucide-react";
import type { CertificationType } from "./questions";

export interface CertMeta {
  colorClass: string;
  icon: React.ReactNode;
}

export const CERT_META: Record<CertificationType, CertMeta> = {
  actions: {
    colorClass: "bg-cert-actions",
    icon: <Play className="text-primary-foreground" />,
  },
  foundations: {
    colorClass: "bg-cert-foundations",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary-foreground"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 13h4" />
      </svg>
    ),
  },
  advanced_security: {
    colorClass: "bg-cert-advanced-security",
    icon: <Shield className="text-primary-foreground" />,
  },
  admin: {
    colorClass: "bg-cert-admin",
    icon: <Users className="text-primary-foreground" />,
  },
  copilot: {
    colorClass: "bg-cert-copilot",
    icon: <Bot className="text-primary-foreground" />,
  },
};
