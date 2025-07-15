import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  // Automatically trigger confirmation after a delay using a timer
  useEffect(() => {
    // Start a timeout to call onConfirm after TIMER milliseconds
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      // Clear the timeout if the component unmounts or onConfirm changes
      clearTimeout(timer);
    };
  }, [onConfirm]);

  // Render the confirmation UI with a message and action buttons
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* Visual countdown for auto-confirm using ProgressBar */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}
