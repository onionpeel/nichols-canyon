import React, {useState} from 'react';
import {Button, Modal, Form, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addComment} from '../actions/commentActions';

const CommentModal = ({addComment, error, errorStatus}) => {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      text: comment
    };
    if(comment.length > 0) {
      addComment(newComment);
    };

    setComment('');
    handleClose();
  };

  const handleOnChange = e => {
    setComment(e.target.value);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add your wisdom
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Shakespeare jealous</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Open up and say, "Blah"</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Blah, blah, blah..."
                  value={comment}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Immortalize your words
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  error: state.err,
  errorStatus: state.err.errorStatus
});

const mapDispatchToProps = {
  addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal);
