import React from "react";

export default function BackgroundPattern() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[600px] -z-10" aria-hidden>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-gray-50 dark:to-blue-700" />
      <div className={`bg-background-pattern w-full h-full opacity-10`} />
    </div>
  );
}
