import { useEffect } from "react";
import { myProjects } from "../constants/data";
import ProjectCard from "../components/ProjectCard";

const PortofolioPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Portofolio | FRD_DEV";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className="c-space section-spacing cv-auto pb-24">
      <h1 className="text-heading">My Portofolio</h1>
      <p className="subtext mt-3 max-w-2xl">
        A selection of projects I&apos;ve built — click a card to see the
        details, tech stack, and live demo.
      </p>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-8 h-px w-full" />
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {myProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PortofolioPage;
