import AreYouInDoubt from "@/components/AreYouInDoubt";
import EarnPoint from "@/components/EarnPoint";
import Faq from "@/components/Faq";
import HomeHero from "@/components/HomeHero";
import SimulateHowMuchEarn from "@/components/SimulateHowMuchEarn";
import SuccessfulStory from "@/components/SuccessfulStory";
import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";

import ReactGA4 from 'react-ga4';
const TRACKING_ID = "G-3HBNYV13NJ"; // OUR_TRACKING_ID
ReactGA4.initialize(TRACKING_ID);

import Hotjar from '@hotjar/browser';

const siteId = 3777897;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default function HomePage() {
  const seoData = {
    title: "Consultoria Natura e Avon - Home",
    description: "Consultoria Natura e Avon - Home",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <HomeHero />
      <SimulateHowMuchEarn />
      <AreYouInDoubt />
      <EarnPoint />
      <SuccessfulStory />
      <Faq />
      <Footer />
    </>
  );
}
