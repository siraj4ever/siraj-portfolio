"use client";

import TopProgressBar from "@/components/TopProgressbar";
import AIBackground from "@/components/AIBackground";

export default function ClientComponents({ children }) {
  return (
    <>
      <AIBackground />
      <TopProgressBar />
      {children}
    </>
  );
}

