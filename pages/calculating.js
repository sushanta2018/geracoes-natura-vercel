import Footer from "@/components/common/Footer";
import LoadingScreenSimulator from "@/components/common/LoadingScreenSimulator";
import PageSEO from "@/components/common/PageSEO";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CalculatingPage = () => {
  const router = useRouter();
  const seoData = {
    title: "Consultoria Natura e Avon - Calculating",
    description: "Consultoria Natura e Avon - Calculating",
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/result");
    }, 3000);
  }, [router]);

  return (
    <>
      <PageSEO seoData={seoData} />
      <div className="h-full md:h-screen">
        <LoadingScreenSimulator />
        <Footer />
      </div>
    </>
  );
};

export default CalculatingPage;
