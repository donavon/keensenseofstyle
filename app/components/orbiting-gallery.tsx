import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const RADIUS_X = 390;
const RADIUS_Y = 155;
const ORBIT_DURATION = 28000; // ms per full orbit
const PHOTO_SIZE = 125;

type Photo = {
  src: string;
  alt: string;
};

type OrbitingPhotoProps = {
  photo: Photo;
  index: number;
  total: number;
};

function OrbitingPhoto({ photo, index, total }: OrbitingPhotoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const phaseOffset = (index / total) * Math.PI * 2;

  useAnimationFrame((time) => {
    if (!ref.current) return;
    const angle = (time / ORBIT_DURATION) * Math.PI * 2 + phaseOffset;
    const x = RADIUS_X * Math.cos(angle);
    const y = RADIUS_Y * Math.sin(angle);

    // depth: -1 = top of ellipse (behind), +1 = bottom (in front)
    const depth = Math.sin(angle);
    const normalized = (depth + 1) / 2; // 0 to 1
    const scale = 0.6 + 0.55 * normalized; // 0.6 → 1.15
    const opacity = 0.25 + 0.75 * normalized; // 0.25 → 1.0
    const zIndex = depth > 0 ? 30 : 5; // in front of or behind the logo text

    ref.current.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    ref.current.style.opacity = String(opacity);
    ref.current.style.zIndex = String(zIndex);
  });

  return (
    <div
      ref={ref}
      className="absolute"
      style={{
        width: PHOTO_SIZE,
        height: PHOTO_SIZE,
        marginLeft: -PHOTO_SIZE / 2,
        marginTop: -PHOTO_SIZE / 2,
        willChange: "transform, opacity",
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover rounded-sm shadow-2xl"
        draggable={false}
        style={{ userSelect: "none", pointerEvents: "none" }}
      />
    </div>
  );
}

type Props = {
  photos: Photo[];
};

export function OrbitingGallery({ photos }: Props) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ pointerEvents: "none" }}
    >
      <div className="relative" style={{ width: 0, height: 0 }}>
        {photos.map((photo, index) => (
          <OrbitingPhoto
            key={photo.src}
            photo={photo}
            index={index}
            total={photos.length}
          />
        ))}
      </div>
    </div>
  );
}
