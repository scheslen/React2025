import './Modal.css';
import ReactDom from 'react-dom';

interface IModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}
export function Modal({ children, title, onClose }: IModalProps) {
  return ReactDom.createPortal(
    <>
      <div className="modal-back" onClick={onClose}></div>
      <div className="modal-window">
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </>,
    document.getElementById('portal')!
  );
}
