"use client";

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
      <a
        href="#registrazione"
        className="flex w-full items-center justify-center rounded-xl bg-brand-red px-4 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#1a4a7a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
      >
        Registrati all&apos;Open Day
      </a>
    </div>
  );
}
