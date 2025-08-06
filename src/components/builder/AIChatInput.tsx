'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Sparkles, X } from 'lucide-react';

export default function AIChatInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Simulate AI response
      console.log('AI Message:', message);
      setMessage('');
      // Here you would typically send the message to an AI service
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#B1AD9A] to-[#9A9685] hover:from-[#9A9685] hover:to-[#8A8675] text-[#FFFBEB] shadow-lg rounded-full px-4 lg:px-6 py-3 flex items-center space-x-2 text-sm lg:text-base"
        >
          <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="hidden sm:inline">Ask AI Assistant</span>
          <span className="sm:hidden">AI</span>
        </Button>
      ) : (
        <div className="bg-gradient-to-br from-[#FFFBEB] to-[#F5F1E0] rounded-lg shadow-xl border border-[#B1AD9A] p-3 lg:p-4 w-[calc(100vw-2rem)] max-w-sm lg:w-96">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-[#B1AD9A] to-[#9A9685] rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFFBEB]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#B1AD9A] text-sm lg:text-base">AI Assistant</h3>
                <p className="text-xs text-[#B1AD9A] opacity-70">Powered by AI</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-[#B1AD9A] hover:text-[#9A9685] hover:bg-[#FFFBEB] p-1 lg:p-2"
            >
              <X className="w-3 h-3 lg:w-4 lg:h-4" />
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-[#B1AD9A] to-[#9A9685] bg-opacity-10 rounded-lg p-2 lg:p-3 mb-3 max-h-24 lg:max-h-32 overflow-y-auto">
            <div className="text-sm text-[#FFFBEB]">
              <p className="mb-1 lg:mb-2 text-xs lg:text-sm">💡 <strong>AI Assistant:</strong></p>
              <p className="text-xs">Hi! I can help you build your website. Try asking me to:</p>
              <ul className="text-xs mt-1 space-y-0.5 lg:space-y-1">
                <li>• &ldquo;Add a hero section with a blue background&rdquo;</li>
                <li>• &ldquo;Change the font to something modern&rdquo;</li>
                <li>• &ldquo;Make the layout more responsive&rdquo;</li>
                <li>• &ldquo;Add animations to buttons&rdquo;</li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything about your website..."
              className="flex-1 text-xs lg:text-sm border-[#B1AD9A] focus:border-[#9A9685] focus:ring-[#B1AD9A] bg-gradient-to-r from-[#FFFBEB] to-[#F5F1E0] text-[#B1AD9A] placeholder-[#B1AD9A] placeholder-opacity-60"
            />
            <Button
              type="submit"
              size="sm"
              className="bg-gradient-to-r from-[#B1AD9A] to-[#9A9685] hover:from-[#9A9685] hover:to-[#8A8675] text-[#FFFBEB] p-2 lg:p-3"
            >
              <Send className="w-3 h-3 lg:w-4 lg:h-4" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
} 