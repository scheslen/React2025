import './Modal.css';

interface IModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}
export function Modal({ children, title, onClose }: IModalProps) {
  return (
    <>
      <div className="modal-back" onClick={onClose}></div>
      <div className="modal-window">
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
}
