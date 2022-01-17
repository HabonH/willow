import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function LinkWrapper({ link }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal'>
      <div className='button'>
        <Button variant='primary' onClick={handleShow}>
          Book
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <iframe
            src={link}
            style={{ width: "100%", height: "400px", border: "none" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className='button'>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
