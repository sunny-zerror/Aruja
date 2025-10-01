import React from "react";
import { Const } from "@/utils/Constants";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: Const.Brand,
    url: Const?.ClientLink || "",
    logo: {
      "@type": "ImageObject",
      url: `${Const?.ClientLink || ""}/logo.png`, 
      width: 160,
      height: 90,
    },
    description:
      "Studio AKTO is a design-led interior architecture practice specializing in contemporary, proportion-driven spaces.",
    sameAs: [
      "https://www.linkedin.com/company/studio-arujak",
      "https://www.instagram.com/arujak?igsh=djZua2NuaGo1YTE5&utm_source=qr",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8130070663",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default OrganizationSchema;
