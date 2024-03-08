import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";
import CreativeProfileSlider from "@/components/version/creative-profile/CreativeProfileSlider";
import PerfilCriativo from "@/components/version/creative-profile/PerfilCriativo";
import BtnPart from "@/components/version/versatile/BtnPart";
import React from "react";

const ProfileCreativePage = () => {
  const seoData = {
    title: "Consultoria Natura e Avon - Profile Test",
    description: "Consultoria Natura e Avon - Profile Test",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <PerfilCriativo />
      <CreativeProfileSlider />
      <BtnPart />
      <Footer />
    </>
  );
};

export default ProfileCreativePage;
