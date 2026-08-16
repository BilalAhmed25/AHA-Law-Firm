import Header from "../../layout/header";
import Footer from "../../layout/footer";
import ContactHero from "../../componenet/contact-hero";
import OfficeLocations from "../../componenet/office-locations";
import ContactForm from "../../componenet/contact-form";
import GlobalPresenceMap from "../../componenet/global-presence-map";
import Faq from "../../componenet/faq";

function ContactPage() {
    return (
        <>
            <Header />
            <ContactHero />
            <OfficeLocations />
            <ContactForm />
            <GlobalPresenceMap />
            <Faq />
            <Footer />
        </>
    );
}

export default ContactPage;
