"use client";

import TopProgressBar from "@/components/TopProgressbar";

export default function ClientComponents({ children }) {
  return (
    <>
      <TopProgressBar />
      {children}
    </>
  );
}

