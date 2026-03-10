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
    name: 'EduStream Pro',
    client: 'Global Education Group',
    description: 'A comprehensive school management system with real-time tracking.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/edu/800/600'
  },
  {
    id: '2',
    name: 'StockFlow',
    client: 'Retail Solutions Inc.',
    description: 'Advanced stock management system with automated reordering.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind'],
    image: 'https://picsum.photos/seed/stock/800/600'
  },
  {
    id: '3',
    name: 'VogueStore',
    client: 'Fashion Forward',
    description: 'High-end e-commerce platform with AR try-on features.',
    technologies: ['React', 'Shopify', 'Three.js'],
    image: 'https://picsum.photos/seed/fashion/800/600'
  },
  {
    id: '4',
    name: 'TechInsights',
    client: 'Self-Project',
    description: 'A modern blog platform for technology enthusiasts.',
    technologies: ['React', 'Sanity.io', 'Tailwind'],
    image: 'https://picsum.photos/seed/blog/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart',
    content: 'NovaSoft built a professional website for our company and delivered on time. Their attention to detail is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'EduLearn',
    content: 'The custom dashboard they developed has transformed how we manage our student data. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Tips for a High-Converting Website',
    excerpt: 'Learn the essential elements that turn visitors into loyal customers.',
    date: 'March 5, 2024',
    category: 'Website Tips',
    image: 'https://picsum.photos/seed/tips/600/400'
  },
  {
    id: '2',
    title: 'The Future of Digital Transformation',
    excerpt: 'How businesses are evolving in the age of AI and cloud computing.',
    date: 'February 28, 2024',
    category: 'Trends',
    image: 'https://picsum.photos/seed/trends/600/400'
  }
];

export const PRICING: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '$999',
    description: 'Perfect for small businesses getting started.',
    features: ['5 pages', 'Responsive design', 'Contact form', 'Basic SEO', '1 Month Support']
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '$2,499',
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
    answer: 'Costs vary based on complexity. Our starter packages begin at $999, while custom enterprise solutions are quoted based on specific needs.'
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
