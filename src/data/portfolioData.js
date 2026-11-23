/**
 * Single source of truth for all portfolio content.
 * Everything below comes from Kamali's resume. Edit this file to update the site.
 * Optional fields (duration, repo, demo, image) are simply hidden when left empty.
 */

export const profile = {
  name: 'Kamali M',
  initials: 'KM',
  title: 'Full-Stack Developer',
  roles: [
    'Full-Stack Developer',
    'Software Development Intern',
    'AI / Software Development Intern',
    'Computer Science Engineering Student',
    'Problem Solver',
  ],
  intro:
    'Computer Science student who builds full-stack applications with React, Spring Boot and FastAPI, and enjoys turning real-world problems into working software.',
  status: 'B.E. Computer Science · Class of 2028',
  email: 'kamalimurugesan1204@gmail.com',
  github: 'https://github.com/Kamalimurugesan12',
  linkedin: 'https://www.linkedin.com/in/kamali-murugesan-1b294b32b',
  resume: '/resume/Kamali_M_Resume.pdf',
  resumeFileName: 'Kamali_M_Resume.pdf',
  photo: {
    webp: '/images/profile-900.webp',
    webpSmall: '/images/profile-480.webp',
    jpg: '/images/profile-900.jpg',
    alt: 'Portrait of Kamali M wearing a navy blazer and a white shirt',
  },
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const footerLinks = [...navLinks.slice(0, 6), { id: 'education', label: 'Education' }, navLinks[6]];

export const heroStats = [
  { value: 8.6, decimals: 1, suffix: '', label: 'Current CGPA' },
  { value: 300, decimals: 0, suffix: '+', label: 'LeetCode problems' },
  { value: 2, decimals: 0, suffix: '', label: 'Internships' },
];

export const about = {
  paragraphs: [
    'I am a Computer Science and Engineering student at Sri Krishna College of Engineering and Technology (expected graduation 2028) with a current CGPA of 8.6.',
    'I have worked as a Software Development Intern at Tactive Software, where I built a full-stack WhatsApp Alert System with Spring Boot and React.js, and as an AI/Software Development Intern at Infosys Springboard, where I contributed to an AI-powered healthcare communication assistant for rural communities using FastAPI.',
    'I strengthen my problem-solving with Data Structures and Algorithms, and I have solved 300+ problems on LeetCode.',
  ],
  cards: [
    {
      icon: 'cap',
      title: 'Academic background',
      text: 'B.E. Computer Science and Engineering, CGPA 8.6. Scored 95.3% in Class XII and 94.6% in Class X.',
    },
    {
      icon: 'layers',
      title: 'Development experience',
      text: 'Two internships spanning Spring Boot, React.js, REST APIs, relational databases and FastAPI.',
    },
    {
      icon: 'puzzle',
      title: 'Problem solving',
      text: '300+ LeetCode problems solved, plus a Gold star in C++ and a Silver star in Python on HackerRank.',
    },
    {
      icon: 'compass',
      title: 'Technical interests',
      text: 'Full-stack web development, AI-assisted applications and OCR, and clean backend design with RESTful APIs.',
    },
  ],
  highlights: [
    'Winner, Zenith Ideathon (college level)',
    'Led a team designing a smart-shoe concept for visually impaired people',
    'Completed NPTEL courses',
  ],
};

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'C++', badge: 'C++' },
      { name: 'Java', badge: 'Jv' },
      { name: 'Python', badge: 'Py' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'layout',
    skills: [
      { name: 'React.js', badge: 'Re' },
      { name: 'JavaScript', badge: 'JS' },
      { name: 'HTML', badge: 'H5' },
      { name: 'CSS', badge: 'C3' },
      { name: 'Responsive Web Development', badge: 'Rw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'server',
    skills: [
      { name: 'Spring Boot', badge: 'Sb' },
      { name: 'FastAPI', badge: 'Fa' },
      { name: 'RESTful APIs', badge: 'Ap' },
      { name: 'WhatsApp Business API', badge: 'Wa' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: [
      { name: 'MySQL', badge: 'My' },
      { name: 'PostgreSQL', badge: 'Pg' },
      { name: 'Relational Databases', badge: 'Db' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: 'tool',
    skills: [
      { name: 'Git', badge: 'Gt' },
      { name: 'GitHub', badge: 'Gh' },
      { name: 'VS Code', badge: 'Vs' },
      { name: 'Vercel', badge: 'Ve' },
      { name: 'Render', badge: 'Rn' },
      { name: 'Neon', badge: 'Ne' },
    ],
  },
  {
    id: 'other',
    title: 'Other Technical Skills',
    icon: 'spark',
    skills: [
      { name: 'Data Structures & Algorithms', badge: 'DS' },
      { name: 'Object-Oriented Programming', badge: 'OO' },
      { name: 'Software Development', badge: 'Sd' },
      { name: 'Testing & Debugging', badge: 'Td' },
      { name: 'OCR & AI-assisted features', badge: 'AI' },
      { name: 'Microsoft Excel, Word, PowerPoint', badge: 'Ms' },
    ],
  },
];

export const professionalSkills = [
  'Written and Verbal Communication',
  'Teamwork and Collaboration',
  'Problem-Solving',
  'Leadership',
];

export const experiences = [
  {
    id: 'tactive',
    organization: 'Tactive Software',
    role: 'Software Development Intern',
    duration: '', // Add your internship dates here, e.g. 'Jun 2025 - Aug 2025'. Hidden while empty.
    summary:
      'Built a full-stack WhatsApp Alert System spanning the React.js interface, Spring Boot services and the database.',
    tech: ['Spring Boot', 'React.js', 'RESTful APIs', 'Relational Database', 'OOP'],
    responsibilities: [
      'Developed a full-stack WhatsApp Alert System using Spring Boot (backend) and React.js (frontend).',
      'Designed and implemented RESTful APIs enabling seamless communication between frontend and backend services.',
      'Integrated a relational database to store and manage message history, alert logs, and system records.',
    ],
    contributions: [
      'Built full-stack features spanning UI design, backend services and database operations, applying Object-Oriented Programming principles.',
      'Tested, debugged and optimized application performance to improve system reliability and user experience.',
    ],
  },
  {
    id: 'infosys',
    organization: 'Infosys Springboard',
    role: 'AI/Software Development Intern',
    duration: '',
    summary:
      'Contributed to an AI-powered healthcare communication assistant designed for rural communities.',
    tech: ['FastAPI', 'AI', 'OCR', 'React'],
    responsibilities: [
      'Contributed to the AI-Powered Healthcare Communication Assistant for Rural Communities project.',
    ],
    contributions: [
      'Gained hands-on experience in FastAPI backend development and AI-assisted application features.',
    ],
  },
];

/**
 * Projects. `repo` and `demo` are only shown when set. `image` is optional:
 * set it to a path like '/images/projects/my-shot.webp' to replace the generated artwork.
 * `art` picks the built-in illustration. `size` controls the bento grid span.
 */
export const projects = [
  {
    id: 'whatsapp-alert',
    title: 'WhatsApp Alert System',
    description:
      'A full-stack system that fetches employee records from MySQL through Spring Boot REST APIs, so HR, managers and CEOs can customize and send bulk WhatsApp alerts to all fetched employees. The React.js interface is integrated with the backend and the Meta WhatsApp Business API to deliver notifications.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'WhatsApp Business API'],
    repo: 'https://github.com/Kamalimurugesan12/Watsapp_Alert_System',
    demo: '',
    image: '',
    art: 'chat',
    size: 'large',
  },
  {
    id: 'healthcare-assistant',
    title: 'AI-Powered Healthcare Communication Assistant',
    description:
      'A multilingual healthcare assistant that uses AI and OCR to simplify medical documents. The React frontend is deployed on Vercel, the FastAPI backend on Render, and the PostgreSQL database on Neon.',
    tech: ['FastAPI', 'React', 'OCR', 'AI', 'PostgreSQL'],
    repo: 'https://github.com/Kamalimurugesan12/AI-Powered-Healthcare-Communication-Assistance-for-rural-areas',
    demo: 'https://ai-powered-healthcare-communication.vercel.app',
    image: '',
    art: 'scan',
    size: 'large',
  },
  {
    id: 'travel-itinerary',
    title: 'Travel Itinerary Management System',
    description:
      'A centralized full-stack system for managing travel itineraries, activities and hotel bookings, with database integration and role-based access control to manage user permissions.',
    tech: ['Full-Stack', 'Database', 'Role-Based Access'],
    repo: 'https://github.com/Kamalimurugesan12/Travel-Itinerary-Management',
    demo: '',
    image: '',
    art: 'route',
    size: 'medium',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'A full-stack portfolio app with a responsive React UI and a Spring Boot backend integrated via REST APIs, showcasing projects, skills and contact features.',
    tech: ['React', 'Spring Boot', 'REST APIs'],
    repo: '',
    demo: '',
    image: '',
    art: 'browser',
    size: 'medium',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracking System',
    description:
      'A fitness tracking web app with workout tracking, progress monitoring and a user-friendly dashboard, using state management and dynamic UI updates in React.',
    tech: ['React', 'JavaScript'],
    repo: 'https://github.com/Kamalimurugesan12/Fitness_Course_Management_System',
    demo: '',
    image: '',
    art: 'chart',
    size: 'medium',
  },
  {
    id: 'tanjore-tourism',
    title: 'Thanjore Tourism Website',
    description:
      "A responsive, user-friendly website highlighting Tanjore's heritage, culture and major attractions.",
    tech: ['HTML', 'CSS'],
    repo: 'https://github.com/Kamalimurugesan12/Tanjore_tourism',
    demo: '',
    image: '',
    art: 'temple',
    size: 'medium',
  },
];

export const achievements = [
  {
    icon: 'trophy',
    title: 'Winner, Zenith Ideathon',
    tag: 'College level',
    text: 'Led and collaborated with a team to design a smart-shoe concept using embedded sensors and alerts to help visually impaired individuals navigate safely.',
  },
  {
    icon: 'code',
    title: '300+ LeetCode problems solved',
    tag: 'Problem solving',
    text: 'Strengthened Data Structures and Algorithms and problem-solving skills.',
  },
  {
    icon: 'star',
    title: 'HackerRank stars',
    tag: 'Coding',
    text: 'Gold star in C++ and Silver star in Python.',
  },
  {
    icon: 'badge',
    title: 'Professional certifications',
    tag: 'Infosys Springboard, Coursera',
    text: 'Professional courses in programming and problem-solving on Infosys Springboard and Coursera.',
  },
  {
    icon: 'book',
    title: 'NPTEL courses',
    tag: 'Certification',
    text: 'Completed NPTEL courses.',
  },
  {
    icon: 'cap',
    title: 'Academic excellence',
    tag: 'Academics',
    text: 'CGPA 8.6 in B.E. Computer Science and Engineering, with 95.3% in Class XII and 94.6% in Class X.',
  },
];

export const education = [
  {
    id: 'college',
    institution: 'Sri Krishna College of Engineering and Technology',
    degree: 'Bachelor of Engineering, Computer Science and Engineering',
    period: 'Expected graduation: 2028',
    score: 'Current CGPA: 8.6',
    current: true,
  },
  {
    id: 'school',
    institution: 'Vivekananda Vidyalaya Matric Hr. Sec. School, Muthur',
    degree: 'Higher Secondary (Class XII) and SSLC (Class X)',
    period: '',
    score: 'Class XII: 95.3%  |  Class X: 94.6%',
    current: false,
  },
];
