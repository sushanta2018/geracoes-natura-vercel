import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";
import CreativeVersatileEntrepreneur from "@/components/result/CreativeVersatileEntrepreneur";
import LetsStart from "@/components/result/LetsStart";
import ResultHero from "@/components/result/ResultHero";
import React from "react";

function ResultPage() {
  const seoData = {
    title: "Consultoria Natura e Avon - Result",
    description: "Consultoria Natura e Avon - Result",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <ResultHero />
      <LetsStart />
      <CreativeVersatileEntrepreneur />
      <Footer />
    </>
  );
}

export default ResultPage;
