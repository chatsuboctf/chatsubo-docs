import React from 'react';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Home() {
  return (
    <BrowserOnly
      fallback={<div></div>}>
      {() => {
        window.location=`docs/welcome`
      }}
    </BrowserOnly>
  );

}
