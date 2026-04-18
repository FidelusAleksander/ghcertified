/**
 * Shared certification metadata — icons, descriptions, and color classes.
 *
 * Single source of truth consumed by the homepage, practice-tests catalog,
 * and questions library. Keeps cert branding consistent and DRY.
 *
 * Icons use GitHub's Octicons (primer/octicons-react) for brand consistency.
 */

import {
  WorkflowIcon,
  MortarBoardIcon,
  ShieldLockIcon,
  OrganizationIcon,
  CopilotIcon,
} from "@primer/octicons-react";
import type { CertificationType } from "./questions";

export interface CertMeta {
  colorClass: string;
  borderClass: string;
  textClass: string;
  icon: React.ReactNode;
}

export const CERT_META: Record<CertificationType, CertMeta> = {
  actions: {
    colorClass: "bg-cert-actions",
    borderClass: "border-cert-actions",
    textClass: "text-cert-actions",
    icon: <WorkflowIcon size={24} className="text-primary-foreground" />,
  },
  foundations: {
    colorClass: "bg-cert-foundations",
    borderClass: "border-cert-foundations",
    textClass: "text-cert-foundations",
    icon: <MortarBoardIcon size={24} className="text-primary-foreground" />,
  },
  advanced_security: {
    colorClass: "bg-cert-advanced-security",
    borderClass: "border-cert-advanced-security",
    textClass: "text-cert-advanced-security",
    icon: <ShieldLockIcon size={24} className="text-primary-foreground" />,
  },
  admin: {
    colorClass: "bg-cert-admin",
    borderClass: "border-cert-admin",
    textClass: "text-cert-admin",
    icon: <OrganizationIcon size={24} className="text-primary-foreground" />,
  },
  copilot: {
    colorClass: "bg-cert-copilot",
    borderClass: "border-cert-copilot",
    textClass: "text-cert-copilot",
    icon: <CopilotIcon size={24} className="text-primary-foreground" />,
  },
};
