import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Hero from "../../componenet/hero";
import HeroShowcase from "../../componenet/hero-showcase";
import PracticeAreas from "../../componenet/practice-areas";
import About from "../../componenet/about";
import AboutTwo from "../../componenet/about-two";
import AboutThree from "../../componenet/about-three";
import StatsCounter from "../../componenet/stats-counter";
import Testimonials from "../../componenet/testimonials";
import OverviewCards from "../../componenet/overview-cards";
import FounderMessage from "../../componenet/founder-message";
import GlobalPresenceMap from "../../componenet/global-presence-map";
import Faq from "../../componenet/faq";
import Cta from "../../componenet/cta";
import FreeCaseReview from "../../componenet/free-case-review";

function Index() {
    return (
        <>
            <Header />
            <Hero />
            <PracticeAreas />
            <HeroShowcase />
            <OverviewCards />
            <About />
            <AboutTwo />
            <StatsCounter />
            <Testimonials />
            <AboutThree />
            <Cta />
            <FounderMessage />
            <GlobalPresenceMap />
            <Faq />
            <FreeCaseReview />
            <Footer />
        </>
    );
}

export default Index;