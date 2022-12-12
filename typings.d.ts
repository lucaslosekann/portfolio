interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface HomeInfo extends SanityBody {
  _type: "homeInfo";
  email: string;
  heroImage: Image;
  phoneNumber: string;
  presentation: string[];
  role: string;
  socials: string[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  role: string;
  company: string;
  from: Date;
  to: Date;
  description: string;
  working: boolean;
}

export interface SoftSkill extends SanityBody {
  _type: "softSkill";
  title: string;
  description: string;
}

export interface TechSkill extends SanityBody {
  _type: "techSkill";
  photo: Image;
  name: string;
}

export interface About extends SanityBody {
  _type: "about";
  abouteMe: string;
  photo: Image;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  photos: {
    _key: string,
    _type: "PhotoInfo",
    alt: string,
    photo: Image
  }[];
  projectDescription: string;
  projectTitle: string;
  repo?: string;
  visit?: string;
  tags: string[]
}

