// Images are paths under /public (e.g. "/images/profile.jpg") or full URLs.
export type Image = string;

export interface PageInfo {
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology {
  _id: string;
  image: Image;
  title: string;
}

export interface Skill {
  _id: string;
  image: Image;
  progress: number;
  title: string;
}

export interface Experience {
  _id: string;
  company: string;
  companyImage: Image;
  dateStarted: string;
  dateEnded?: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project {
  _id: string;
  title: string;
  linkToBuild: string;
  sourceLink?: string;
  image: Image;
  summary: string;
  technologies: Technology[];
}

export interface Social {
  _id: string;
  title: string;
  url: string;
}
