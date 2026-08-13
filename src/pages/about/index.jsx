import Header from "../../layout/header";
import Footer from "../../layout/footer";
import AboutHero from "../../componenet/about-hero";
import About from "../../componenet/about";
import AboutTwo from "../../componenet/about-two";
import FirmValues from "../../componenet/firm-values";
import FirmHistoryTimeline from "../../componenet/firm-history-timeline";
import StatsCounter from "../../componenet/stats-counter";
import FounderMessage from "../../componenet/founder-message";
import Testimonials from "../../componenet/testimonials";
import Faq from "../../componenet/faq";
import Cta from "../../componenet/cta";

function AboutPage() {
    return (
        <>
            <Header />
            <AboutHero />
            <About />
            <FirmValues />
            <AboutTwo />
            <StatsCounter />
            <FirmHistoryTimeline />
            <FounderMessage />
            <Testimonials />
            <Cta />
            <Faq />
            <Footer />
        </>
    );
}

export default AboutPage;
