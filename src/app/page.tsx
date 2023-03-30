import Welcome from "@/components/Welcome";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsList from "@/components/SkillsList";
import { sdk } from "@/graphql/client";

export default async function Home() {
    const { positions } = await sdk.getPositions();

    return (
        <>
            <Welcome />
            <main>
                <Navbar />
                <AboutMe />
                <Experience positions={positions} />
                <Projects />
                <SkillsList />
            </main>
        </>
    );
}
