import { Sparkles, Clock, Gift } from "lucide-react";

const items = [
  { icon: Sparkles, text: "Now Open in Katraj, Pune" },
  { icon: Clock, text: "Mon – Sat • 10:00 AM – 8:00 PM" },
  { icon: Gift, text: "Free First Consultation This Month" },
  { icon: Sparkles, text: "EMI starts at ₹999/month" },
];

export function AnnouncementBar() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="relative bg-royal text-ice/90 py-2 overflow-hidden border-b border-ice/10">
      <div className="flex animate-ticker whitespace-nowrap">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-8 text-[11px] font-medium tracking-wide"
          >
            <item.icon className="size-3.5 text-sky" />
            <span>{item.text}</span>
            <span className="text-ice/30 ml-6">●</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-royal to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-royal to-transparent pointer-events-none" />
    </div>
  );
}
