import { getNowData } from "@/lib/firebase";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site-config";
import NowPageClient from "../../components/now/now-page-client";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Now",
    description: `What ${siteConfig.name} is currently focused on, building, and reading right now.`,
};

export default async function NowPage() {
    if(!siteConfig.features.showNowSection){
        notFound();
    }

    const nowData = await getNowData();

    return <NowPageClient data={nowData} />;
}
