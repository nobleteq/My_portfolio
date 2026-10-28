// import { Profile, Experience, Education, Certification } from '../types';

// export const profile: Profile = {
//   name: 'Emmanuel Ifeanyi Nneji',
//   tagline: 'Software for real-world problems.',
//   bio: 'I build practical web, desktop, and mobile applications with Python, React, and Flutter, turning everyday challenges into thoughtful digital tools.',
//   email: 'manuelnneji1@gmail.com',
//   github: 'https://github.com/nobleteq',
//   location: 'Nigeria',
//   cvUrl: '/cv/Emmanuel_Nneji_CV.pdf'
// };

// export const experience: Experience[] = [];

// export const education: Education[] = [];

// export const certifications: Certification[] = [];

import { Profile, Experience, Education, Certification } from '../types';

export const profile: Profile = {
  name: 'Emmanuel Ifeanyi Nneji',
  tagline: 'Software for real-world problems.',
  bio: 'I build practical web, desktop, and mobile applications with Python, React, and Flutter, turning everyday challenges into thoughtful digital tools.',
  email: 'manuelnneji1@gmail.com',
  github: 'https://github.com/nobleteq',
  location: 'Nigeria',
  cvUrl: `${import.meta.env.BASE_URL}cv/Emmanuel_Nneji_CV.pdf`
};

export const experience: Experience[] = [];

export const education: Education[] = [];

export const certifications: Certification[] = [];
