import Head from "next/head";
import React from "react";

const PageSEO = ({ seoData }) => {
  const { title, description } = seoData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={`${title}`} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/assets/meta-img.png" />

        <meta property="twitter:card" content="/assets/meta-img.png" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content={`${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/assets/meta-img.png" />
      </Head>
    </>
  );
};

export default PageSEO;
