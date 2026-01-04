import React, { useState } from 'react';

const ImageGallery = ({ img, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
        onClick={toggleModal}
      />

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={toggleModal}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-orange-500 transition-colors"
            onClick={toggleModal}
          >
            &times;
          </button>
          <img
            src={img}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;

