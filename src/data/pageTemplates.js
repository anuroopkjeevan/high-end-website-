// src/data/pageTemplates.js
// More dynamic approach - automatically creates templates from routes

// Import all your page components
import Home from "../pages/HomePage";
import About from "../pages/about";
import Services from "../pages/Services";
import Blog from "../pages/blog";

// Define the structure of each page based on your actual components
const pageDefinitions = [
  {
    id: 'home',
    title: 'Home Page',
    slug: '/',
    component: Home,
    sections: [
      { type: 'hero', editable: ['heading', 'subheading', 'ctaText'] },
      { type: 'services-grid', editable: ['title', 'services'] },
      { type: 'portfolio', editable: ['title', 'items'] },
      { type: 'contact', editable: ['title', 'email', 'phone'] }
    ]
  },
  {
    id: 'about',
    title: 'About Us',
    slug: '/about',
    component: About,
    sections: [
      { type: 'hero', editable: ['heading', 'subheading'] },
      { type: 'text-block', editable: ['title', 'paragraphs'] },
      { type: 'team-grid', editable: ['title', 'members'] },
      { type: 'values-grid', editable: ['title', 'values'] }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    slug: '/services',
    component: Services,
    sections: [
      { type: 'hero', editable: ['heading', 'subheading'] },
      { type: 'service-details', editable: ['title', 'services'] },
      { type: 'process-timeline', editable: ['title', 'steps'] }
    ]
  },
  {
    id: 'blog',
    title: 'Blog',
    slug: '/blog',
    component: Blog,
    sections: [
      { type: 'hero', editable: ['heading', 'subheading'] },
      { type: 'blog-grid', editable: ['title', 'posts'] },
      { type: 'newsletter-signup', editable: ['title', 'description'] }
    ]
  }
];

// Generate default content for each section type
const getDefaultContent = (sectionType) => {
  const defaults = {
    hero: {
      heading: 'Default Heading',
      subheading: 'Default subheading text',
      ctaText: 'Learn More',
      backgroundImage: '/images/default-bg.jpg'
    },
    'services-grid': {
      title: 'Our Services',
      services: [
        { name: 'Service 1', description: 'Description 1' },
        { name: 'Service 2', description: 'Description 2' }
      ]
    },
    'text-block': {
      title: 'Text Section',
      paragraphs: ['Paragraph 1', 'Paragraph 2']
    },
    'team-grid': {
      title: 'Our Team',
      members: [
        { name: 'Member 1', role: 'Role 1', image: '/team/member1.jpg' },
        { name: 'Member 2', role: 'Role 2', image: '/team/member2.jpg' }
      ]
    },
    'portfolio': {
      title: 'Our Work',
      items: [
        { title: 'Project 1', category: 'Category 1' },
        { title: 'Project 2', category: 'Category 2' }
      ]
    },
    'contact': {
      title: 'Contact Us',
      email: 'info@example.com',
      phone: '+1234567890'
    },
    'service-details': {
      title: 'Our Services',
      services: [
        { name: 'Service 1', description: 'Description', price: '$499', features: ['Feature 1'] }
      ]
    },
    'process-timeline': {
      title: 'Our Process',
      steps: [
        { number: 1, title: 'Step 1', description: 'Description' }
      ]
    },
    'blog-grid': {
      title: 'Recent Posts',
      posts: [
        { title: 'Post 1', excerpt: 'Excerpt', date: '2025-01-01', author: 'Admin' }
      ]
    },
    'newsletter-signup': {
      title: 'Newsletter',
      description: 'Subscribe for updates'
    },
    'values-grid': {
      title: 'Our Values',
      values: [
        { title: 'Value 1', description: 'Description' }
      ]
    }
  };

  return defaults[sectionType] || {};
};

// Generate the actual page templates
export const pageTemplates = pageDefinitions.reduce((acc, def) => {
  acc[def.id] = {
    id: def.id,
    title: def.title,
    slug: def.slug,
    status: 'published',
    lastEdited: new Date().toISOString().split('T')[0],
    author: 'Admin',
    visibility: 'public',
    component: def.component,
    content: {
      sections: def.sections.map((section, index) => ({
        id: `${def.id}-${section.type}-${index}`,
        type: section.type,
        editable: section.editable,
        content: getDefaultContent(section.type)
      }))
    }
  };
  return acc;
}, {});

// Export all pages
export const getAllPages = () => Object.values(pageTemplates);