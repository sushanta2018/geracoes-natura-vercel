import Footer from "@/components/common/Footer";
import LoadingScreenConsulty from "@/components/common/LoadingScreenConsulty";
import PageSEO from "@/components/common/PageSEO";

const TestAnalyzingPage = () => {
  const seoData = {
    title: "Consultoria Natura e Avon - Test Analyzing",
    description: "Consultoria Natura e Avon - Test Analyzing",
  };

  return (
    <>
      <PageSEO seoData={seoData} />
      <div className="h-full md:h-screen">
        <LoadingScreenConsulty />
        <Footer />
      </div>
    </>
  );
};

export default TestAnalyzingPage;
