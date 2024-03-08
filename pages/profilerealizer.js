import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";
import Director from "@/components/version/director/Director";
import DirectorSlider from "@/components/version/director/DirectorSlider";
import BtnPart from "@/components/version/versatile/BtnPart";
import React from "react";

const ProfileRealizerPage = () => {
  const seoData = {
    title: "Consultoria Natura e Avon - Profile Realizer",
    description: "Consultoria Natura e Avon - Profile Realizer",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <Director />
      <DirectorSlider />
      <div className="mb-[72px]">
        <BtnPart />
      </div>
      <Footer />
    </>
  );
};

export default ProfileRealizerPage;
