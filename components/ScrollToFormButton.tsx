"use client";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "blue";
};

export function ScrollToFormButton({
  children,
  className = "",
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-brand-red text-white shadow-md hover:bg-[#c41c23] focus-visible:ring-brand-red"
      : variant === "blue"
        ? "bg-brand-blue text-white shadow-md hover:bg-[#1a4a7a] focus-visible:ring-brand-blue"
        : "border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white";

  return (
    <a href="#registrazione" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
