import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import InsightsPage from "../pages/insights";
import InsightDetailsPage from "../pages/insights/details";
import JudgementsPage from "../pages/judgements";
import ServicesPage from "../pages/services";
import TeamPage from "../pages/team";
import PrivacyPolicyPage from "../pages/privacy-policy";
import TermsConditionsPage from "../pages/terms-conditions";
import NotFoundPage from "../pages/error-404";

const rootdata = [
    { path: "/", element: <Index /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/team", element: <TeamPage /> },
    { path: "/our-team", element: <TeamPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/services-details", element: <ServicesPage /> },
    { path: "/our-blog", element: <InsightsPage /> },
    { path: "/insights", element: <InsightsPage /> },
    { path: "/our-blog/:id", element: <InsightDetailsPage /> },
    { path: "/insights/:id", element: <InsightDetailsPage /> },
    { path: "/our-blog-details", element: <InsightDetailsPage /> },
    { path: "/judgements", element: <JudgementsPage /> },
    { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
    { path: "/terms-conditions", element: <TermsConditionsPage /> },
    { path: "/404", element: <NotFoundPage /> },
    { path: "*", element: <NotFoundPage /> },
];

function Root() {
    return (
        <BrowserRouter>
            <Routes>
                {rootdata.map((data, i) => (
                    <Route key={i} path={data.path} element={data.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
export default Root;