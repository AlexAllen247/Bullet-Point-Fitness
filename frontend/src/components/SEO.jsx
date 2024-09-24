import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}

    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
    <meta property="og:type" content={ogType} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {ogImage && <meta name="twitter:image" content={ogImage} />}
  </Helmet>
);

export default SEO;
