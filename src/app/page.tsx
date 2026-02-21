import PixelNav from "@/components/PixelNav";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedPrompts from "@/components/FeaturedPrompts";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import PixelFooter from "@/components/PixelFooter";

export default function Home() {
  return (
    <main className="relative">
      <PixelNav />
      <HeroSection />

      {/* Pixel divider */}
      <div className="flex items-center justify-center gap-1 py-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2"
            style={{
              backgroundColor: ["#FFB3D9", "#B3E5FC", "#C8E6C9", "#FFF9C4", "#E1BEE7"][i % 5],
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      <CategorySection />

      {/* Pixel divider */}
      <div className="flex items-center justify-center gap-1 py-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2"
            style={{
              backgroundColor: ["#E1BEE7", "#FFF9C4", "#C8E6C9", "#B3E5FC", "#FFB3D9"][i % 5],
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      <FeaturedPrompts />

      {/* Pixel divider */}
      <div className="flex items-center justify-center gap-1 py-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2"
            style={{
              backgroundColor: ["#B3E5FC", "#FFB3D9", "#FFF9C4", "#E1BEE7", "#C8E6C9"][i % 5],
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      <HowItWorks />
      <CTASection />
      <PixelFooter />
    </main>
  );
}
