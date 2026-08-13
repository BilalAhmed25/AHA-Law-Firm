import Header from "../../layout/header";
import Footer from "../../layout/footer";
import ContactHero from "../../componenet/contact-hero";
import OfficeLocations from "../../componenet/office-locations";
import ContactForm from "../../componenet/contact-form";
import Faq from "../../componenet/faq";

function ContactPage() {
    return (
        <>
            <Header />
            <ContactHero />
            <OfficeLocations />
            <ContactForm />
            <Faq />
            <Footer />
        </>
    );
}

export default ContactPage;
