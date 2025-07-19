'use client';

import React from 'react';
import Image from 'next/image';

const PDFViewer = () => {
  return (
    <div className="mt-4">
      <div className="text-sm font-semibold text-[#DDA853] mb-2">Ustav (PDF)</div>
      <a
        href="/documents/docums.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded overflow-hidden hover:opacity-80 transition"
      >
        <Image
          src="/images/docums.png" // bu yerga preview image joylashtiriladi
          alt="Ustav PDF"
          width={100}
          height={200}
          className="rounded shadow-md"
        />
      </a>
    </div>
  );
};

export default PDFViewer;
