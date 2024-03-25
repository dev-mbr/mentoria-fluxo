import { PropsWithChildren, forwardRef } from "react";


interface Props {
  transitions?:
    | "top-to-bottom"
    | "bottom-to-top"
    | "right-to-left"
    | "left-to-right";
}

// eslint-disable-next-line react/display-name
const Dialog = forwardRef(
  ({ transitions = "left-to-right", children }: PropsWithChildren<Props>, ref: any) => {
    return (
      <dialog
        ref={ref}
        className={`fixed lg:top-0 top-auto h-[38rem] lg:w-[30rem] w-full dialog overflow-x-hidden rounded-xl ${transitions}`}
      >
        {children}
                
      </dialog>
    );
  }
);

export default Dialog;