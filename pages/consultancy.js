import Footer from "@/components/common/Footer";
import PageSEO from "@/components/common/PageSEO";
import Consultancy from "@/components/consultancy/Consultancy";

function ConsultancyPage() {
  const seoData = {
    title: "Consultoria Natura e Avon - Consultancy",
    description: "Consultoria Natura e Avon - Consultancy",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <Consultancy />
      <Footer />
    </>
  );
}

export default ConsultancyPage;
