import React from 'react';

function Modal({ open, onClose, children }: any) {
  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center items-center transition-all ${open ? 'visible bg-black/20 backdrop-blur-md' : 'invisible'} duration-200 ease-in`}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
