import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Hero from "../../componenet/hero";
import PracticeAreas from "../../componenet/practice-areas";
import About from "../../componenet/about";
import AboutTwo from "../../componenet/about-two";
import AboutThree from "../../componenet/about-three";
import StatsCounter from "../../componenet/stats-counter";
import Testimonials from "../../componenet/testimonials";
import OverviewCards from "../../componenet/overview-cards";
import FounderMessage from "../../componenet/founder-message";
import Faq from "../../componenet/faq";
import Cta from "../../componenet/cta";

function Index() {
    return (
        <>
            <Header />
            <Hero />
            <PracticeAreas />
            <OverviewCards />
            <About />
            <AboutTwo />
            <StatsCounter />
            <Testimonials />
            <AboutThree />
            <Cta />
            <FounderMessage />
            <Faq />
            <Footer />
        </>
    );
}

export default Index;