import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { academicLevels } from "@/content/academics";

export default async function Page({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const match = academicLevels.find((item) => item.slug === level);

  if (!match) {
    notFound();
  }

  return (
    <PlaceholderPage
      eyebrow="Academic Level"
      title={match.title}
      description={match.description}
    />
  );
}
