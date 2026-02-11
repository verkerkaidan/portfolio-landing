import ProjectItem from "./ProjectItem";
import type { ProjectItemProps } from "./projectitem.types";

export interface ProjectsListProps {
  projects: ProjectItemProps[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <ul className="space-y-5 md:space-y-6 w-full">
      {projects.map((project) => (
        <ProjectItem key={project.href} {...project} />
      ))}
    </ul>
  );
}
