import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website', schemaMarkup }) => {
    const siteName = 'Globalytics Digital';
    const defaultTitle = 'Globalytics Digital - Leading Digital Marketing Agency & Academy';
    const fullTitle = `${title} | ${siteName}`;
    const defaultDescription = 'Globalytics Digital - India\'s premier digital marketing agency and academy. We provide expert SEO, Google Ads, Meta Ads, and professional training courses.';
    const defaultKeywords = 'digital marketing agency, digital marketing course, seo services, google ads agency, social media marketing, Globalytics Digital, Globalytics Academy';
    const defaultImage = '/brand.webp';
    const siteUrl = 'https://globalyticsdigital.in'; 

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`} />

            {/* Canonical Link */}
            <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

            {/* Schema Markup */}
            {schemaMarkup && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
