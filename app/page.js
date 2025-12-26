"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';

export function HomePage() {
  return <div>
    <h1>Home Page</h1>
    <Link href="/about">About Page</Link><br />
    <Link href="/services">Services Page</Link>
  </div>;
}


export default function Testing2 () {
  
  return <div>
      <HomePage />

    </div>
}
