import { getNowData } from "@/lib/firebase";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site-config";
import NowPageClient from "../../components/now/now-page-client";

export const metadata: Metadata = {
    title: "Now",
    description: `What ${siteConfig.name} is currently focused on, building, and reading right now.`,
};

export default async function NowPage() {
    const nowData = await getNowData();

    return <NowPageClient data={nowData} />;
}
