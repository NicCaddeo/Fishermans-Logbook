import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
// --------------------------------------------------------------
// Define the props for the AnimatedModal component
type Props = {
  isOpen: boolean; // Flag to determine if the modal is open
  mainContainerClassName?: string; // Optional class name for the main container
  backdropClassName?: string; // Optional class name for the backdrop
  scalingContainerClassName?: string; // Optional class name for the scaling container
  children: ReactNode; // The content to be rendered inside the modal
};

// Define styles for the modal
const Styles = {
  mainContainer: "fixed top-0 left-0 h-screen w-full -z-10", // Style for the main container
  backdrop:
    "h-full w-full flex items-center justify-center bg-black duration-500 ease-in-out", // Style for the backdrop
  scalingContainer: "duration-500 ease-in-out max-h-[650px] overflow-auto", // Style for the scaling container
};

// --------------------------------------------------------------
// AnimatedModal component definition
const AnimatedModal = ({
  isOpen,
  mainContainerClassName,
  backdropClassName,
  scalingContainerClassName,
  children,
}: Props) => {
  return (
    <div
      className={twMerge(
        Styles.mainContainer,
        mainContainerClassName,
        isOpen && "!z-[99]"
      )}
    >
      <div
        className={twMerge(
          Styles.backdrop,
          backdropClassName,
          isOpen ? "bg-opacity-40" : "bg-opacity-0"
        )}
      >
        <div
          className={twMerge(
            Styles.scalingContainer,
            scalingContainerClassName,
            isOpen ? "scale-1" : "scale-0"
          )}
        >
          {!!isOpen && children} {/* Render children if modal is open */}
        </div>
      </div>
    </div>
  );
};

export default AnimatedModal;
