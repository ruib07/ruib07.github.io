import { ElementType } from "react";

export interface IProject {
  title: string;
  description: string;
  techStack: ElementType[];
  imageSrc: string;
  sourceLinks: {
    label: string;
    url: string;
  }[];
}

export interface IProjectCardProps {
  project: IProject;
}
