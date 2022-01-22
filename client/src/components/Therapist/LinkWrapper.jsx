import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";

export default function LinkWrapper({ link }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal'>
      <div>
        <Button variant='contained' color='primary' onClick={handleShow}>
          <h4>Book</h4>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} className='modal-show'>
        <iframe
          seamless
          src={link}
          style={{ width: "100%", height: "800px", border: "none" }}
        />
        <Modal.Footer>
          <div className='modal-close-button'>
            <Button variant='contained' color='primary' onClick={handleClose}>
              <h4>Close</h4>
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
