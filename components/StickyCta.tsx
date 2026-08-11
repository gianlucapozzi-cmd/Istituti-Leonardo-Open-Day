"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const form = document.getElementById("registrazione");
      if (!form) {
        setVisible(window.scrollY > 320);
        return;
      }
      const rect = form.getBoundingClientRect();
      const formInView = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(window.scrollY > 280 && !formInView);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <button
        type="button"
        onClick={() => {
          document
            .getElementById("registrazione")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-blue px-4 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#c41c23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
      >
        <Image
          src="/logo.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          aria-hidden
        />
        Registrati all&apos;Open Day
      </button>
    </div>
  );
}
