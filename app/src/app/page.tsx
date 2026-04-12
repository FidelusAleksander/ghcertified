import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/locales";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}/`);
}
