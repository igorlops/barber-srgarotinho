import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ImageGallery = ({ img, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <img
        src={img}
        alt={alt}
        className="img-thumbnail"
        onClick={handleShow}
      />

      <Modal show={showModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt={alt} style={{ width: '100%', height: 'auto' }} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;
