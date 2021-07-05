import React from 'react';
import BrowserOnly from "@docusaurus/core/lib/client/exports/BrowserOnly";
export default function Home() {
  document.location = "/docs/index"

  return (
      <BrowserOnly/>
  );
}
