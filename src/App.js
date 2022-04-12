import { useEffect } from "react";
import "./App.css";
import { LandingSection } from "./Components/LandingSection";
import { About } from "./Components/About/About";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Navbar } from "./Components/Projects/Navbar";



export default function App() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="App">
            <div>
                <Navbar />
                <LandingSection />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}