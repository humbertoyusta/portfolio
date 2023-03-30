import Welcome from "@/components/Welcome";
import { sdk } from "@/graphql/client";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsList from "@/components/SkillsList";

export default async function Home() {
    // get positions and skill categories from the server in only one promise
    const [{ aboutMes }, { positions }, { projects }, { skillCategories }] =
        await Promise.all([
            sdk.getAboutMe(),
            sdk.getPositions(),
            sdk.getProjects(),
            sdk.getSkillCategories(),
        ]);

    return (
        <>
            <Welcome />
            <main>
                <Navbar />
                <AboutMe aboutMe={aboutMes[0]} />
                <Experience positions={positions} />
                <Projects projects={projects} />
                <SkillsList skillCategories={skillCategories} />
            </main>
        </>
    );
}
