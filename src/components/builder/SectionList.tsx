'use client';

import { useBuilderStore } from '@/store/builder-store';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GripVertical, Trash2, Settings } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableSectionItemProps {
  section: any;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

function SortableSectionItem({ section, isSelected, onSelect, onDelete }: SortableSectionItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`cursor-pointer transition-all duration-200 bg-[#FFFBEB] ${
        isSelected ? 'ring-2 ring-[#B1AD9A] bg-[#FFFBEB]' : 'hover:bg-[#FFFBEB]'
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div
              {...attributes}
              {...listeners}
              className="cursor-grab hover:cursor-grabbing text-[#B1AD9A] hover:text-[#B1AD9A]"
            >
              <GripVertical className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-gray-900 capitalize">{section.type}</h4>
                <Badge variant="secondary" className="text-xs bg-[#B1AD9A] text-[#FFFBEB]">
                  {section.order + 1}
                </Badge>
              </div>
              <p className="text-sm text-gray-500">
                {Object.keys(section.props).length} properties
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className="text-[#B1AD9A] hover:text-[#B1AD9A]"
            >
              <Settings className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="text-red-400 hover:text-red-600"
            >
              <Trash2 className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SectionList() {
  const { sections, selectedSectionId, selectSection, deleteSection, reorderSections } = useBuilderStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex(section => section.id === active.id);
      const newIndex = sections.findIndex(section => section.id === over?.id);
      
      reorderSections(oldIndex, newIndex);
    }
  };

  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4 ">
        <h3 className="text-2xl font-semibold text-gray-900">Page Sections</h3>
        <Badge variant="secondary" className='bg-[#B1AD9A] text-[#FFFBEB] font-light'>{sections.length} sections</Badge>
      </div>
      
      {sections.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-2">📄</div>
          <p className="text-md text-[#FFFBEB]">No sections added yet</p>
        </div>
      ) : (
        <ScrollArea className="h-[calc(100vh-200px)]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sortedSections.map(section => section.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4 flex flex-col">
                {sortedSections.map((section) => (
                  <SortableSectionItem
                    key={section.id}
                    section={section}
                    isSelected={selectedSectionId === section.id}
                    onSelect={() => selectSection(section.id)}
                    onDelete={() => deleteSection(section.id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </ScrollArea>
      )}
    </div>
  );
} 