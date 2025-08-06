import { SectionTemplate } from '@/types/builder';

export const sectionTemplates: SectionTemplate[] = [
  {
    type: 'header',
    name: 'Header',
    description: 'Navigation header with logo and menu',
    icon: 'Layout',
    defaultProps: {
      title: 'My Website',
      showNav: true,
      backgroundColor: '#ffffff',
    },
  },
  {
    type: 'hero',
    name: 'Hero Section',
    description: 'Eye-catching hero with call-to-action',
    icon: 'Star',
    defaultProps: {
      title: 'Welcome to Our Site',
      subtitle: 'Create something amazing with our website builder',
      buttonText: 'Get Started',
      buttonUrl: '#',
      backgroundImage: '',
      backgroundColor: '#f8fafc',
    },
  },
  {
    type: 'features',
    name: 'Features',
    description: 'Showcase your key features or services',
    icon: 'Zap',
    defaultProps: {
      title: 'Our Features',
      subtitle: 'Discover what makes us special',
      feature1Title: 'Feature 1',
      feature1Description: 'Description for feature 1',
      feature2Title: 'Feature 2',
      feature2Description: 'Description for feature 2',
      feature3Title: 'Feature 3',
      feature3Description: 'Description for feature 3',
      backgroundColor: '#ffffff',
    },
  },
  {
    type: 'about',
    name: 'About',
    description: 'Tell your story and mission',
    icon: 'Users',
    defaultProps: {
      title: 'About Us',
      content: 'We are a passionate team dedicated to creating amazing experiences.',
      imageUrl: '',
      backgroundColor: '#f8fafc',
    },
  },
  {
    type: 'contact',
    name: 'Contact',
    description: 'Contact information and form',
    icon: 'Mail',
    defaultProps: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us',
      email: 'contact@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main St, City, State 12345',
      backgroundColor: '#ffffff',
    },
  },
  {
    type: 'footer',
    name: 'Footer',
    description: 'Footer with links and copyright',
    icon: 'Layout',
    defaultProps: {
      copyright: '© 2024 My Website. All rights reserved.',
      backgroundColor: '#1f2937',
      textColor: '#ffffff',
    },
  },
]; 