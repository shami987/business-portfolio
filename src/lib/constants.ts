import { Service, Project, Testimonial, BlogPost, PricingPackage, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'High-performance business websites and landing pages optimized for conversion.',
    icon: 'Globe',
    features: ['Business websites', 'Company websites', 'Landing pages', 'SEO Optimization']
  },
  {
    id: 'web-app',
    title: 'Web Application Development',
    description: 'Custom web systems, dashboards, and complex business platforms.',
    icon: 'Layout',
    features: ['Custom systems', 'Dashboards', 'Business platforms', 'API Integration']
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    description: 'Scalable online stores with seamless payment integrations.',
    icon: 'ShoppingBag',
    features: ['Online stores', 'Payment integration', 'Inventory management', 'User accounts']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'Smartphone',
    features: ['Android apps', 'iOS apps', 'Cross-platform solutions', 'App Store deployment']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful interfaces designed for the best user experience.',
    icon: 'Palette',
    features: ['Website design', 'Interface improvements', 'Prototyping', 'User research']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Smart Local Commerce Platform',
    client: '',
    description: 'A digital system that connects local businesses, customers, and service providers through technology to enable buying and selling within a specific community or city.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: '/images/local-commerce.png',
    link: 'https://smart-local-commerce-8th6.vercel.app/'
  },
  {
    id: '2',
    name: 'Personal Finance Tracker',
    client: '',
    description: 'This is a system that helps users monitor income, expenses, and savings to manage their money effectively.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind', 'PostgreSQL'],
    image: '/images/finance-tracker.png',
    link: 'https://finance-tracker-iota-neon.vercel.app/'

  },
  {
    id: '3',
    name: 'Gisozi Carpentry',
    client: '',
    description: 'This is a website that shows the woodwork services offered by a carpenter or carpentry company.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind', 'PostgreSQL'],
    image: '/images/carpentry.png',
    link: 'https://carpentry-eight.vercel.app/'
  },
  {
    id: '4',
    name: 'FertiTerra',
    client: 'in progress ...',
    description: 'The FertiTerra App is a mobile application designed to help people track their fertility, menstrual cycle, and reproductive health using digital tools and AI insights.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind', 'PostgreSQL'],
    image: '/images/fertiterra.gif'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Gatesi',
    role: 'CEO',
    company: 'TechStart',
    content: 'NovaSoft built a professional website for our company and delivered on time. Their attention to detail is unmatched.',
    avatar: 'https://www.refinery29.com/images/11776683.jpg'
  },
  {
    id: '2',
    name: 'Sandra Mizero',
    role: 'Founder',
    company: 'EduLearn',
    content: 'The custom dashboard they developed has transformed how we manage our student data. Highly recommended!',
    avatar: 'https://news.cornell.edu/sites/default/files/styles/breakout/public/2020-05/0521_abebegates.jpg?itok=OdW8otpB'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Tips for a High-Converting Website',
    excerpt: 'Learn the essential elements that turn visitors into loyal customers.',
    content: [
      'A high-converting website is more than just good looks — it is a strategic tool that guides visitors toward taking action.',
      '1. Clear Value Proposition — Your headline should immediately communicate what you do and why it matters. Visitors decide within seconds whether to stay or leave.',
      '2. Fast Load Times — Every second of delay reduces conversions by up to 7%. Optimize images, use a CDN, and minimize unnecessary scripts.',
      '3. Strong Call-to-Action (CTA) — Every page needs a clear, compelling CTA. Use action-oriented language like "Get Started", "Book a Free Call", or "See Pricing".',
      '4. Mobile-First Design — Over 60% of web traffic comes from mobile devices. A responsive, mobile-optimized layout is non-negotiable.',
      '5. Trust Signals — Display testimonials, client logos, certifications, and case studies prominently. Social proof builds credibility fast.',
      '6. Simple Navigation — Reduce cognitive load. A clean menu with 5–7 items helps users find what they need without frustration.',
      '7. Compelling Visuals — Use high-quality images and videos that reflect your brand. Avoid generic stock photos that feel impersonal.',
      '8. SEO Optimization — Optimize meta titles, descriptions, headings, and content for relevant keywords so the right audience finds you organically.',
      '9. Live Chat or Contact Options — Make it easy for visitors to reach you. A visible chat widget or contact button reduces friction and increases leads.',
      '10. Analytics & A/B Testing — Track user behavior with tools like Google Analytics. Continuously test headlines, CTAs, and layouts to improve performance over time.',
    ],
    date: 'March 5, 2024',
    category: 'Website Tips',
    image: 'https://fastly.picsum.photos/id/39/600/400.jpg?hmac=0ww5IBEh8CZm-Ql7LdHCqTC7ef_W3sxbh-blIduySoo'
  },
  {
    id: '2',
    title: 'The Future of Digital Transformation',
    excerpt: 'How businesses are evolving in the age of AI and cloud computing.',
    content: [
      'Digital transformation is no longer optional — it is the baseline for survival in a competitive market.',
      'Artificial Intelligence & Automation — AI is moving from experimental to essential. Businesses are using it for customer service chatbots, predictive analytics, personalized marketing, and process automation.',
      'Cloud-First Infrastructure — The shift to cloud computing enables businesses to scale rapidly, reduce IT costs, and access powerful tools without heavy upfront investment.',
      'Data-Driven Decision Making — Organizations are investing heavily in data pipelines and business intelligence tools. Real-time dashboards allow leaders to make faster, more informed decisions.',
      'Customer Experience as a Differentiator — Businesses that use technology to deliver seamless, personalized experiences across all touchpoints are winning market share.',
      'Cybersecurity at the Core — As digital footprints expand, so do attack surfaces. Forward-thinking companies embed security into every layer of their digital strategy.',
      'The businesses that thrive will be those that embrace change, invest in the right technologies, and build agile teams capable of continuous adaptation.',
    ],
    date: 'February 28, 2024',
    category: 'Trends',
    image: 'https://picsum.photos/seed/trends/600/400'
  }
];

export const PRICING: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: 'Contact Us',
    description: 'Perfect for small businesses getting started.',
    features: ['5 pages', 'Responsive design', 'Contact form', 'Basic SEO', '1 Month Support']
  },
  {
    id: 'business',
    name: 'Business Website',
    price: 'Contact Us',
    description: 'Comprehensive solution for growing companies.',
    features: ['10+ pages', 'SEO optimization', 'CMS integration', 'Blog section', '3 Months Support'],
    recommended: true
  },
  {
    id: 'custom',
    name: 'Custom Software',
    price: 'Custom',
    description: 'Tailored systems built for your specific needs.',
    features: ['Tailored systems', 'Dashboard', 'Database integration', 'API development', 'Ongoing Support']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How long does it take to build a website?',
    answer: 'A standard business website typically takes 2-4 weeks, while complex web applications can take 2-4 months depending on the requirements.'
  },
  {
    id: '2',
    question: 'How much does a website cost?',
    answer: 'Costs vary based on complexity. Our starter packages begin at flexible price, while custom enterprise solutions are quoted based on specific needs.'
  },
  {
    id: '3',
    question: 'Do you provide maintenance?',
    answer: 'Yes, we offer various maintenance and support packages to ensure your digital solutions stay secure and up-to-date.'
  }
];

export const INDUSTRIES = [
  'Schools', 'Small Businesses', 'Retail Stores', 'Startups', 'NGOs', 'Government Institutions'
];

export const PROCESS = [
  { title: 'Consultation', description: 'We start by understanding your unique business needs and goals.' },
  { title: 'Planning', description: 'Our team designs a strategic solution tailored to your requirements.' },
  { title: 'Development', description: 'We build your system using the latest technologies and best practices.' },
  { title: 'Testing', description: 'Rigorous quality assurance to ensure a bug-free and smooth experience.' },
  { title: 'Launch', description: 'We deploy your website or application to the production environment.' },
  { title: 'Support', description: 'Ongoing maintenance and updates to keep your system performing at its best.' }
];
