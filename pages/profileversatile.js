import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";
import BtnPart from "@/components/version/versatile/BtnPart";
import Versatile from "@/components/version/versatile/Versatile";
import VersatileSlider from "@/components/version/versatile/VersatileSlider";
import React from "react";

const ProfileVersatilePage = () => {
  const seoData = {
    title: "Consultoria Natura e Avon - Profile Versatile",
    description: "Consultoria Natura e Avon - Profile Versatile",
  };
  return (
    <>
      <PageSEO seoData={seoData} />
      <Versatile />
      <VersatileSlider />
      <div className="mb-[78px]">
        <BtnPart />
      </div>
      <Footer />
    </>
  );
};

export default ProfileVersatilePage;
