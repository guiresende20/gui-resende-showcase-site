
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: string;
  link?: string;
  iframe?: string;
}

export interface ModalContent {
  title: string;
  iframe?: string;
  link?: string;
}
