import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ size = 64, className = "", priority = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt="Istituti Leonardo Milano"
      width={size}
      height={size}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
