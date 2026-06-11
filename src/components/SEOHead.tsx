import { useEffect } from "react";

/**
 * SEOHead - Injects JSON-LD structured data into the page for Google rich results.
 * This helps Google understand the business, products, and FAQs — leading to:
 * - Rich snippets (star ratings, prices in search results)
 * - Google Knowledge Panel (business info box)
 * - Local pack results (Google Maps)
 * - FAQ search snippets
 */
export const SEOHead = () => {
  useEffect(() => {
    // LocalBusiness + Organization schema
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://www.royalmabati.co.ke/#organization",
      name: "Royal Mabati Factory Ltd",
      alternateName: "Royal Mabati",
      description:
        "Kenya's #1 supplier of premium roofing sheets — Box Profile, Corrugated, Tile Profile, IBR, Stone-Coated and more. Best mabati prices in Kenya with free nationwide delivery and 25-year warranty.",
      url: "https://www.royalmabati.co.ke",
      telephone: "+254762235510",
      email: "salesroyalmabatii@gmail.com",
      image: "https://www.royalmabati.co.ke/logos/royal-mabati-logo.png",
      logo: "https://www.royalmabati.co.ke/logos/royal-mabati-logo.png",
      priceRange: "KSh 430 - KSh 950 per meter",
      currenciesAccepted: "KES",
      paymentAccepted: "Cash, M-Pesa, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mombasa Road",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.303,
        longitude: 36.8516,
      },
      areaServed: {
        "@type": "Country",
        name: "Kenya",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      sameAs: ["https://www.facebook.com/share/1AMKUYhVgU/"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "450",
        reviewCount: "320",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing Sheets & Accessories",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Roofing Sheets",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Box Profile Roofing Sheet",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Corrugated Roofing Sheet",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Tile Profile Roofing Sheet",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "IBR Profile Roofing Sheet",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Stone-Coated Steel Roofing",
                },
              },
            ],
          },
        ],
      },
    };

    // Product schema for each product
    const productsSchema = [
      {
        name: "Box Profile Roofing Sheet",
        description:
          "Premium box profile roofing sheet with glossy finish and high durability for modern homes and commercial buildings in Kenya. Galvanized and color-coated options available.",
        price: "470",
        originalPrice: "520",
        sku: "RM-BP-001",
      },
      {
        name: "Corrugated Roofing Sheet",
        description:
          "Traditional corrugated iron roofing sheet (mabati) with excellent strength and weather resistance. Most popular roofing option in Kenya.",
        price: "430",
        originalPrice: "480",
        sku: "RM-CR-001",
      },
      {
        name: "Tile Profile Roofing Sheet",
        description:
          "Elegant tile profile roofing sheet for upscale residential projects in Kenya. Premium tile-like finish with superior durability.",
        price: "520",
        originalPrice: "580",
        sku: "RM-TP-001",
      },
      {
        name: "IBR Profile Roofing Sheet",
        description:
          "Inverted Box Rib (IBR) profile roofing sheet with superior industrial strength. Perfect for commercial and industrial buildings in Kenya.",
        price: "490",
        originalPrice: "540",
        sku: "RM-IBR-001",
      },
      {
        name: "Stone-Coated Steel Roofing",
        description:
          "Luxury stone-coated steel roofing with exceptional aesthetics and 50-year lifespan. Premium roofing solution for Kenya's finest homes.",
        price: "850",
        originalPrice: "950",
        sku: "RM-SC-001",
      },
      {
        name: "Klip-Lok Standing Seam Roofing",
        description:
          "Concealed fix standing seam roofing system for modern architectural applications in Kenya. Sleek and contemporary design.",
        price: "650",
        originalPrice: "720",
        sku: "RM-KL-001",
      },
      {
        name: "Longspan Roofing Profile",
        description:
          "Wide coverage longspan roofing profile for fast installation. Ideal for warehouses and large commercial buildings in Kenya.",
        price: "540",
        originalPrice: "600",
        sku: "RM-LS-001",
      },
    ].map((product) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      sku: product.sku,
      brand: {
        "@type": "Brand",
        name: "Royal Mabati",
      },
      manufacturer: {
        "@type": "Organization",
        name: "Royal Mabati Factory Ltd",
      },
      image: "https://www.royalmabati.co.ke/logos/royal-mabati-logo.png",
      offers: {
        "@type": "Offer",
        url: "https://www.royalmabati.co.ke/#products",
        priceCurrency: "KES",
        price: product.price,
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Royal Mabati Factory Ltd",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "KES",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "KE",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: "1",
              maxValue: "3",
              unitCode: "d",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: "1",
              maxValue: "5",
              unitCode: "d",
            },
          },
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        reviewCount: "120",
      },
    }));

    // FAQ Schema - helps win FAQ snippets in Google search
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best roofing sheets in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best roofing sheets in Kenya include Box Profile, Corrugated (Mabati), Tile Profile, IBR, and Stone-Coated steel roofing. Royal Mabati Factory Ltd offers all these types with a 25-year warranty and free nationwide delivery. Our most popular options are Box Profile (KSh 470/meter) and Corrugated sheets (KSh 430/meter).",
          },
        },
        {
          "@type": "Question",
          name: "How much do roofing sheets cost in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roofing sheet prices in Kenya range from KSh 430 to KSh 950 per meter depending on the type. Corrugated sheets start at KSh 430/meter, Box Profile at KSh 470/meter, Tile Profile at KSh 520/meter, IBR at KSh 490/meter, and Stone-Coated at KSh 850/meter. Royal Mabati Factory offers competitive wholesale and retail pricing with free delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Does Royal Mabati Factory deliver roofing sheets nationwide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Royal Mabati Factory Ltd offers free nationwide delivery across all 47 counties in Kenya for qualifying orders. We deliver to Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and all other major towns. Contact us at 0762235510 for delivery details.",
          },
        },
        {
          "@type": "Question",
          name: "What warranty do Royal Mabati roofing sheets come with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All Royal Mabati roofing sheets come with a comprehensive 25-year warranty. Our products are ISO certified for quality assurance. Coatings carry their own guarantees depending on the finish selected — galvanized, color-coated, or aluzinc.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Royal Mabati Factory located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Royal Mabati Factory Ltd is located on Mombasa Road, Nairobi, Kenya. You can visit our showroom or contact us at 0762235510 or email salesroyalmabatii@gmail.com. We serve all 47 counties in Kenya with free delivery.",
          },
        },
        {
          "@type": "Question",
          name: "What types of roofing profiles does Royal Mabati offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Royal Mabati offers 7 types of roofing profiles: Box Profile, Corrugated (traditional mabati), Tile Profile, IBR (Inverted Box Rib), Stone-Coated Steel, Klip-Lok Standing Seam, and Longspan profiles. All are available in multiple gauges, colors, and finishes including galvanized, color-coated, and aluzinc.",
          },
        },
      ],
    };

    // WebSite schema for sitelinks search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Royal Mabati Factory Ltd",
      url: "https://www.royalmabati.co.ke",
      description:
        "Kenya's leading supplier of premium roofing sheets and building materials.",
      publisher: {
        "@type": "Organization",
        name: "Royal Mabati Factory Ltd",
      },
    };

    // BreadcrumbList schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.royalmabati.co.ke",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.royalmabati.co.ke/#products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: "https://www.royalmabati.co.ke/#services",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: "https://www.royalmabati.co.ke/#contact",
        },
      ],
    };

    // Inject all schemas into the page
    const schemas = [
      businessSchema,
      ...productsSchema,
      faqSchema,
      websiteSchema,
      breadcrumbSchema,
    ];

    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `seo-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup on unmount
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null; // This component only injects scripts, no visible UI
};
