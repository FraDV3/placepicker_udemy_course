import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// Create a reference to access the <dialog> DOM element
function Modal({ open, children, onClose }) {
  const dialog = useRef();

  // Automatically show or close the dialog when `open` prop changes
  useEffect(() => {
    // Open the dialog when `open` is true
    if (open) {
      dialog.current.showModal();
    } else {
      // Close the dialog when `open` is false
      dialog.current.close();
    }
  }, [open]);

  // Render the <dialog> element into the DOM node with id="modal" using a React portal
  return createPortal(
    // This <dialog> element will be controlled using the `open` prop
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* Render children only when the modal is open */}
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
