import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({ eyebrow, title, description }: Props) {
  return (
    <div>
      <Section eyebrow={eyebrow} title={title} description={description}>
        <Card>
          <p className="text-sm leading-7 text-[var(--color-ink-700)]">
            This route is intentionally scaffolded in Phase 0 so the information architecture,
            global navigation, and design system can be validated before full page content is built.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/admissions">Admissions Priority</Button>
            <Button href="/" variant="ghost">
              Back to Home
            </Button>
          </div>
        </Card>
      </Section>
    </div>
  );
}
