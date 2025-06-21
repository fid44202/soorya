
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto border-3 border-amber-300/60">
        <div className="flex justify-between items-center p-6 border-b-2 border-amber-300/50 bg-gradient-to-r from-amber-100/80 to-orange-100/80">
          {title && (
            <h3 className="text-2xl font-bold text-amber-900 font-serif">{title}</h3>
          )}
          <button
            onClick={onClose}
            className="text-amber-700 hover:text-amber-900 transition-colors bg-amber-200/80 hover:bg-amber-300/80 rounded-full p-2 shadow-lg hover:shadow-xl transform hover:scale-110 duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 bg-gradient-to-br from-amber-50/90 to-orange-50/90">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
