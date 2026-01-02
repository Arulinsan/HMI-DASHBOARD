import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

export type CarouselItem = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  items: CarouselItem[];
  className?: string;
};

export default function ImageCarousel({ items, className }: Props) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (safeItems.length === 0) return null;

  const active = safeItems[Math.min(activeIndex, safeItems.length - 1)];

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + safeItems.length) % safeItems.length);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % safeItems.length);

  return (
    <div className={className}>
      <div className="relative bg-white rounded-2xl shadow-lg border border-accent-green1/10 overflow-hidden">
        <div className="aspect-[16/10] sm:aspect-[16/9] bg-soft-beige">
          <img
            src={active.src}
            alt={active.alt}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-primary-dark shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-primary-dark shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {active.caption ? (
          <div className="px-4 sm:px-6 py-4 border-t border-accent-green1/10">
            <p className="text-sm text-gray-700">{active.caption}</p>
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {safeItems.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to image ${idx + 1}`}
            className={
              "h-2.5 rounded-full transition-all " +
              (idx === activeIndex
                ? "w-6 bg-accent-green2"
                : "w-2.5 bg-accent-green1/30 hover:bg-accent-green1/50")
            }
          />
        ))}
      </div>
    </div>
  );
}
