'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="w-12 h-12 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin"></div>
    </div>
  ),
});

const Map = () => {
  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#DDA853]">Buxoro vagon deposi joylashuvi xaritada</h2>
      </div>

      <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
        <LeafletMap />
      </div>
    </section>
  );
};

export default Map;
