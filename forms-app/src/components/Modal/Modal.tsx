import './Modal.css';
import ReactDom from 'react-dom';
import { useEffect } from 'react';

interface IModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: IModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose(); // Call the function to close the modal
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const pPortal = document.getElementById('portal');
  if (!pPortal) {
    console.error('Portal not found');
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="modal-back" onClick={onClose}></div>
      <div className="modal-window">
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </>,
    pPortal
  );
}
