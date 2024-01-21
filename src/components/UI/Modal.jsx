import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, ...props }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => {
      modal.close();
    };
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      {...props}
      className=" bg-rose-200 py-4 px-2 rounded-md w-1/3"
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
