import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, largeImage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain',
          width: '700px',
          height: '550px',
        },
      }}
    >
      <button onClick={onRequestClose}>Close❌</button>
      {largeImage && <img src={largeImage} alt="Large view" />}
    </Modal>
  );
};

export default ImageModal;
