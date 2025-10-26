import React, { type ReactElement } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  content: ReactElement;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  isLoading?: boolean;
  disabledConfirm?: boolean;
  description?: string;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  disabledConfirm = false,
  description,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col items-center rounded-lg bg-gradient-cards-fill px-12 text-white sm:max-w-md">
        <DialogHeader className="">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="sr-only">
            {description}
          </DialogDescription>
        </DialogHeader>
        {content}
        <div className="mt-4 flex w-full items-center justify-center gap-4">
          <button
            onClick={onClose}
            className="py-2! px-6! border rounded-md! text-sm md:text-md font-medium  transition-all cursor-pointer border-[#9d76b7] text-[#9d76b7]"
          >
            {cancelText}
          </button>
          <button
            className="p-2! border rounded-md! text-sm font-medium transition-all! cursor-pointer border-[#9d76b7] text-[#9d76b7] hover:bg-[#9d76b7] hover:text-white"
            onClick={onConfirm}
            disabled={disabledConfirm}
          >
            {confirmText}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
