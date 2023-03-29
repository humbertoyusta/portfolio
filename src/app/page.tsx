import Welcome from "@/components/Welcome";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <>
            <Welcome />
            <main>
                <Navbar />
                <AboutMe />
                <Experience />
            </main>
        </>
    );
}
