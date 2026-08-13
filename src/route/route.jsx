import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

const rootdata = [
    { path: "/", element: <Index /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "*", element: <Index /> },
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