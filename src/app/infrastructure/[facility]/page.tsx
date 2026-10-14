import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { infrastructureFacilities } from "@/content/infrastructure";

export default async function Page({
  params,
}: {
  params: Promise<{ facility: string }>;
}) {
  const { facility } = await params;
  const match = infrastructureFacilities.find((item) => item.slug === facility);

  if (!match) {
    notFound();
  }

  return (
    <PlaceholderPage
      eyebrow="Infrastructure"
      title={match.title}
      description={match.description}
    />
  );
}
