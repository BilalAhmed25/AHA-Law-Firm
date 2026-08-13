import Header from "../../layout/header";
import Footer from "../../layout/footer";
import ServicesHero from "../../componenet/services-hero";
import ServicesGrid from "../../componenet/services-grid";
import PracticeAreas from "../../componenet/practice-areas";
import StatsCounter from "../../componenet/stats-counter";
import Faq from "../../componenet/faq";
import Cta from "../../componenet/cta";
import Testimonials from "../../componenet/testimonials";

function ServicesPage() {
    return (
        <>
            <Header />
            <ServicesHero />
            <ServicesGrid />
            <StatsCounter />
            <PracticeAreas />
            <Faq />
            <Cta />
            <Testimonials />
            <Footer />
        </>
    );
}

export default ServicesPage;
