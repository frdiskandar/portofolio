import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion as M } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { myProjects } from "../constants/data";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const PortofolioDetailPage = () => {
  const { id } = useParams();
  const project = myProjects.find((item) => item.id === Number(id));

  useEffect(() => {
    const previousTitle = document.title;
    document.title = project
      ? `${project.title} | FRD_DEV`
      : "Project Not Found | FRD_DEV";
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) return <Navigate to="/portofolio" replace />;

  const { title, description, subDescription, image, tags, href } = project;
  const isGitHub = href.includes("github.com");

  return (
    <section className="c-space section-spacing pb-24">
      <Link
        to="/portofolio"
        className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-200 hover:text-white hover-animation"
      >
        <ArrowLeft className="size-4" />
        Back to Portofolio
      </Link>

      <M.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
          <img
            src={image}
            alt={title}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-heading mt-8">{title}</h1>
        <p className="mt-4 max-w-3xl text-base text-neutral-300 md:text-lg">
          {description}
        </p>
      </M.div>

      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-10 h-px w-full" />

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">Overview</h2>
          <ul className="mt-5 space-y-4">
            {subDescription.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aqua" />
                <span className="text-sm leading-relaxed text-neutral-400 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                variant="outline"
                className="h-8 gap-2 border-white/10 bg-white/5 px-3 text-xs text-neutral-200"
              >
                <img src={tag.path} alt="" className="size-4" />
                {tag.name}
              </Badge>
            ))}
          </div>

          <Button
            asChild
            className="mt-8 h-10 w-full bg-aqua px-5 text-primary hover:bg-aqua/90"
          >
            <a href={href} target="_blank" rel="noreferrer">
              {isGitHub ? "View Source Code" : "Visit Project"}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortofolioDetailPage;
