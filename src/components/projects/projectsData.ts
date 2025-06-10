
import { Project } from './types';

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    title: t('projects.museuvr.title'),
    description: t('projects.museuvr.description'),
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=250&fit=crop",
    technologies: ["Unity", "VR", "C#", "Interação Natural"],
    type: "Pesquisa",
    link: "https://youtu.be/JV1fSU26OI8"
  },
  {
    title: t('projects.semear.title'),
    description: t('projects.semear.description'),
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop",
    technologies: ["UX Strategy", "Service Design", "Governança", "Inovação"],
    type: "Profissional",
    link: "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:4887118c-3eca-3a20-ba15-09492d48bd71"
  },
  {
    title: t('projects.aula360.title'),
    description: t('projects.aula360.description'),
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
    technologies: ["VR", "Educação", "Unity", "Design Educacional"],
    type: "Educacional",
    iframe: "https://player.vimeo.com/video/53293573"
  },
  {
    title: t('projects.mobiteste.title'),
    description: t('projects.mobiteste.description'),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    technologies: ["UX Research", "Usabilidade", "Mobile UX", "Educação"],
    type: "Pesquisa",
    link: "https://lume.ufrgs.br/handle/10183/159288"
  },
  {
    title: t('projects.ebook.title'),
    description: t('projects.ebook.description'),
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    technologies: ["Design Editorial", "UX", "Educação", "Digital Publishing"],
    type: "Editorial",
    iframe: "https://player.vimeo.com/video/140704714?h=d93163f478"
  },
  {
    title: t('projects.digitalizacao.title'),
    description: t('projects.digitalizacao.description'),
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
    technologies: ["AR", "Patrimônio Cultural", "Preservação", "Research"],
    type: "Pesquisa",
    link: "https://www.ufrgs.br/ldsm/3d/"
  }
];
