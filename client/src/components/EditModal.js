import React, {useState} from 'react';
import {Button, Modal, Container, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteComment, updateComment} from '../actions/commentActions';

function EditModal({commentId, commentText, deleteComment, updateComment}) {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState(commentText);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = e => {
    setComment(e.target.value);
  };

  const handleDelete = id => {
    deleteComment(id);
    handleClose();
  };

  const onSubmit = e => {
    e.preventDefault();
    const updatedComment = {
      text: comment
    };
    if(comment.length > 0) {
      updateComment(updatedComment, commentId);
    };

    // setComment('');
    handleClose();
  };

  return (
    <>
      <br />
      <Button variant="link" onClick={handleShow}>
        Edit your profundity
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            You can't change Nichols Canyon, but you can change your comment
            about Nichols Canyon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Nobody gets it right the first time</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={comment}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
              <span> </span>
              <Button variant="secondary" onClick={() => handleDelete(commentId)}>
                Delete your masterpiece
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  deleteComment,
  updateComment
};

export default connect(null, mapDispatchToProps)(EditModal);
