export interface SectionData {
  id: string;
  type: SectionType;
  props: Record<string, string | number | boolean>;
  order: number;
}

export type SectionType = 
  | 'header'
  | 'hero'
  | 'features'
  | 'about'
  | 'contact'
  | 'footer';

export interface SectionTemplate {
  type: SectionType;
  name: string;
  description: string;
  icon: string;
  defaultProps: Record<string, string | number | boolean>;
}

export interface BuilderState {
  sections: SectionData[];
  selectedSectionId: string | null;
  isPreviewMode: boolean;
}

export interface BuilderActions {
  addSection: (type: SectionType) => void;
  updateSection: (id: string, props: Record<string, string | number | boolean>) => void;
  deleteSection: (id: string) => void;
  reorderSections: (fromIndex: number, toIndex: number) => void;
  selectSection: (id: string | null) => void;
  togglePreviewMode: () => void;
  importConfig: (config: string) => void;
  exportConfig: () => string;
} 