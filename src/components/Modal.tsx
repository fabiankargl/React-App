import { useRef, useEffect, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="bg-white p-6 rounded-xl shadow-2xl w-3/4  mx-auto relative transition-transform transform-gpu"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-red-500 hover:text-red-600 font-semibold transition-colors duration-200"
      >
        Close
      </button>
      <div className="flex flex-col items-center space-y-4">{children}</div>
    </dialog>
  );
};
