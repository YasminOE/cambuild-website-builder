import { create } from 'zustand';
import { SectionData, SectionType, BuilderState, BuilderActions } from '@/types/builder';

interface BuilderStore extends BuilderState, BuilderActions {}

export const useBuilderStore = create<BuilderStore>((set, get) => ({
  sections: [],
  selectedSectionId: null,
  isPreviewMode: false,

  addSection: (type: SectionType) => {
    const { sections } = get();
    const newSection: SectionData = {
      id: `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      props: getDefaultProps(type),
      order: sections.length,
    };
    
    set((state) => ({
      sections: [...state.sections, newSection],
      selectedSectionId: newSection.id,
    }));
  },

  updateSection: (id: string, props: Record<string, string | number | boolean>) => {
    set((state) => ({
      sections: state.sections.map((section) =>
        section.id === id ? { ...section, props: { ...section.props, ...props } } : section
      ),
    }));
  },

  deleteSection: (id: string) => {
    set((state) => ({
      sections: state.sections.filter((section) => section.id !== id),
      selectedSectionId: state.selectedSectionId === id ? null : state.selectedSectionId,
    }));
  },

  reorderSections: (fromIndex: number, toIndex: number) => {
    set((state) => {
      const newSections = [...state.sections];
      const [movedSection] = newSections.splice(fromIndex, 1);
      newSections.splice(toIndex, 0, movedSection);
      
      // Update order property
      const updatedSections = newSections.map((section, index) => ({
        ...section,
        order: index,
      }));
      
      return { sections: updatedSections };
    });
  },

  selectSection: (id: string | null) => {
    set({ selectedSectionId: id });
  },

  togglePreviewMode: () => {
    set((state) => ({ isPreviewMode: !state.isPreviewMode }));
  },

  importConfig: (config: string) => {
    try {
      const parsedConfig = JSON.parse(config);
      if (parsedConfig.sections && Array.isArray(parsedConfig.sections)) {
        set({
          sections: parsedConfig.sections,
          selectedSectionId: null,
          isPreviewMode: false,
        });
      }
    } catch (error) {
      console.error('Failed to import config:', error);
    }
  },

  exportConfig: () => {
    const { sections } = get();
    return JSON.stringify({ sections }, null, 2);
  },
}));

function getDefaultProps(type: SectionType): Record<string, string | number | boolean> {
  switch (type) {
    case 'header':
      return {
        title: 'My Website',
        showNav: true,
        backgroundColor: '#ffffff',
      };
    case 'hero':
      return {
        title: 'Welcome to Our Site',
        subtitle: 'Create something amazing with our website builder',
        buttonText: 'Get Started',
        buttonUrl: '#',
        backgroundImage: '',
        backgroundColor: '#f8fafc',
      };
    case 'features':
      return {
        title: 'Our Features',
        subtitle: 'Discover what makes us special',
        feature1Title: 'Feature 1',
        feature1Description: 'Description for feature 1',
        feature2Title: 'Feature 2',
        feature2Description: 'Description for feature 2',
        feature3Title: 'Feature 3',
        feature3Description: 'Description for feature 3',
        backgroundColor: '#ffffff',
      };
    case 'about':
      return {
        title: 'About Us',
        content: 'We are a passionate team dedicated to creating amazing experiences.',
        imageUrl: '',
        backgroundColor: '#f8fafc',
      };
    case 'contact':
      return {
        title: 'Contact Us',
        subtitle: 'Get in touch with us',
        email: 'contact@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, City, State 12345',
        backgroundColor: '#ffffff',
      };
    case 'footer':
      return {
        copyright: '© 2024 My Website. All rights reserved.',
        backgroundColor: '#1f2937',
        textColor: '#ffffff',
      };
    default:
      return {};
  }
} 