import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anas Daud | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Anas',
  subtitle: 'I am a Full-Stack Java Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Anas Mohamad Daud. I currently live in Columbus, Ohio.',
  paragraphTwo: '',
  paragraphThree: 'Feel free to contact me via email.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Revature Swag Shop',
    info: '',
    info2: '',
    url: '', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Rental App',
    info: '',
    info2: '',
    url: 'https://github.com/jpark1914/home-rentals', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: "I'm Sorry Wilson Social Network",
    info: '',
    info2: '',
    url: 'https://github.com/anas-md/Im_Sorry_Wilson_Repo', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ready as ever to get in touch',
  btn: "Email Me",
  email: 'anasdaud196@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/anas-md',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anas-md',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
