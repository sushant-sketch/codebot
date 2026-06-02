import { createFileRoute } from "@tanstack/react-router";
import { EventGrid } from "@/components/event-grid";
import { PageFade, Reveal } from "@/components/reveal";

export const Route = createFileRoute("/events/")({
  head: () => ({ meta: [{ title: "All Events · Code Bot Championship 2026" }] }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageFade className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] tracking-[0.35em] text-[#FF7A2F]">CHAMPIONSHIP EVENTS</div>
          <h1 className="font-display mt-3 text-4xl sm:text-6xl font-black">Six Arenas. <span className="gradient-text">One Title.</span></h1>
          <p className="mt-5 text-white/65">Pick your battlefield. Build your bot. Bring your code. Every event has its own arena, rules and champions.</p>
        </Reveal>
        <EventGrid />
      </div>
    </PageFade>
  );
}
