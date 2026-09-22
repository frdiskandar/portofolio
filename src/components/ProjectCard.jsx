import { motion as M } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project, index = 0 }) => {
  const { id, title, description, image, tags } = project;

  return (
    <M.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        to={`/portofolio/${id}`}
        className="group block h-full focus-visible:outline-none"
        aria-label={`View details of ${title}`}
      >
        <Card className="h-full flex-col gap-0 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-midnight to-navy p-0 ring-0 [--card-spacing:0px] transition-all duration-300 hover:-translate-y-1 hover:border-aqua/40 hover:shadow-2xl hover:shadow-aqua/10">
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-transparent to-transparent" />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-4 md:p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
                {title}
              </h3>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-neutral-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aqua" />
            </div>
            <p className="line-clamp-2 text-xs leading-relaxed text-neutral-400 md:text-sm">
              {description}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">
              {tags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="outline"
                  className="gap-1.5 border-white/10 bg-white/5 text-neutral-300"
                >
                  <img src={tag.path} alt="" className="size-3.5" />
                  <span className="hidden lg:inline">{tag.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </M.div>
  );
};

export default ProjectCard;
