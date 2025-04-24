"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Services = dynamic(() => import("../screens/Services"), {
  ssr: false,
});

const ServicesPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Services />
    </Suspense>
  );
};

export default ServicesPage;

