import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";
import Hero from "@/components/form/Hero";
import TestComponent from "@/components/form/TestComponent";
import React from "react";

function ProfileTestPage() {
  const seoData = {
    title: "Consultoria Natura e Avon - Profile Test",
    description: "Consultoria Natura e Avon - Profile Test",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <Hero />
      <TestComponent />
      <Footer />
    </>
  );
}

export default ProfileTestPage;
