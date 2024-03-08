import CalculationProvider from "@/contexts/CalculationProvider";
import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/version.css";
import "swiper/swiper-bundle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileTestProvider from "@/contexts/ProfileTestProvider";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script src="/hotjar-init.js" async /> */}
      <CalculationProvider>
        <ProfileTestProvider>
          <Component {...pageProps} />
        </ProfileTestProvider>
      </CalculationProvider>
    </>
  );
}
