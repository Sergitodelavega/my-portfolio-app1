"use client";

import React from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Navbar from './Navbar'
import Footer from './Footer';



interface ContainerBlockProps {
    children: React.ReactNode;
    [key: string]: unknown; // Allow for additional custom meta properties
}

export default function ContainerBlock({ children, ...customMeta }: ContainerBlockProps) {
    const router = useRouter();

    const meta = {
        title: "My Awesome Website",
        description: "Welcome to my awesome website built with Next.js",
        image: "https://example.com/default-image.png",
        type: "website",
        date: customMeta.date || undefined, // Add date property
        ...customMeta,
    };


  return (
    <div>
        <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={meta.description} />
            {/* <meta property="og:url" content={`https://example.com${router.asPath}`} /> */}
            {/* <link rel="canonical" href={`https://example.com${router.asPath}`} /> */}

            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Sergio Lissanou" />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mannupaaji" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {meta.date && (
                <meta property="article:published_time" content={meta.date ? meta.date.toString() : ''} />
            )}
        </Head> 
        <main className="dark:bg-gray-900 w-full">
            <Navbar />
            <div>{children}</div>
            <Footer />
        </main>
    </div>
  );
}