import React from "react";
import CalculateEarn from "@/components/earn/CalculateEarn";
import Makeup from "@/components/earn/Makeup";
import SkinCare from "@/components/earn/SkinCare";
import Perfumes from "@/components/earn/Perfumes";
import Deodorants from "@/components/earn/Deodorants";
import BodyLotion from "@/components/earn/BodyLotion";
import Hair from "@/components/earn/Hair";
import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";

const EarnPage = () => {
  const seoData = {
    title: "Consultoria Natura e Avon - Earn",
    description: "Consultoria Natura e Avon - Earn",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <CalculateEarn />
      <Makeup />
      <SkinCare />
      <Perfumes />
      <Deodorants />
      <BodyLotion />
      <Hair />
      <Footer />
    </>
  );
};

export default EarnPage;
