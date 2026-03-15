"use client";

import React, { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const RouteLoaderEvents = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Basic detection of route change
    // Since we can't easily hook into "start" of transition in App Router without custom wrappers,
    // we show the loader when the pathname/searchParams change, or on initial load.
    
    if (isFirstRender) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsFirstRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {children}
    </>
  );
};

export default function RouteLoader({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RouteLoaderEvents>{children}</RouteLoaderEvents>
    </Suspense>
  );
}
