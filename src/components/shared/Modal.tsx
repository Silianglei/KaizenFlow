import React, { useEffect, useRef, ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}

function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-lg' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (modalRef.current) {
        const viewportHeight = window.innerHeight;
        const modalHeight = modalRef.current.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const top = Math.max(0, scrollTop + (viewportHeight - modalHeight) / 2);
        modalRef.current.style.top = `${top}px`;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] overflow-hidden">
      <div 
        ref={modalRef}
        className={`fixed left-1/2 -translate-x-1/2 bg-brand-dark w-full ${maxWidth} mx-4 rounded-xl shadow-glow border-2 border-brand-primary/20`}
      >
        <div className="flex items-center justify-between p-4 border-b border-brand-primary/20">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-brand-light hover:text-brand-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;