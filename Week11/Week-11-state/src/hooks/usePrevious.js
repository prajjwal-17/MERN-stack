import { useRef, useEffect } from "react";

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // Update the ref with the current value
  }, [value]); // Only run the effect when the value changes

  return ref.current; // Return the previous value (before the update)
}
