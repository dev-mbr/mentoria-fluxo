import React, { forwardRef, useContext } from 'react';

interface Props {
  transitions?:
    | 'top-to-bottom'
    | 'bottom-to-top'
    | 'right-to-left'
    | 'left-to-right',
    activeEmbedId: string
}

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ transitions = 'left-to-right', activeEmbedId }, ref) => {
    return (
      <dialog
        ref={ref}
        className={`fixed top-0 lg:w-[50rem] rounded-md w-full dialog ${transitions}`}
      >
        <div className="w-full bg-white ">
          {/* <button className="absolute right-0 w-9 h-9 rounded-full bg-black text-white text-[1.5rem] font-bold uppercase ">
              x
          </button> */}
          <iframe
            className='w-full lg:h-[28rem] sm:h-[15rem] rounded-md'
            src={`https://www.youtube.com/embed/${activeEmbedId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </dialog>
    );
  }
);

export default Dialog;
