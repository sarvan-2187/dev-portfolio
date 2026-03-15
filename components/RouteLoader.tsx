"use client";

import React, { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import { AnimatePresence } from "framer-motion";

const RouteLoaderEvents = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
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
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="route-loader" />}
      </AnimatePresence>
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
