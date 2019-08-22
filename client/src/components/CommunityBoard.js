import React, {useEffect} from 'react';
import {ListGroup, Card, Container, Row, Col} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllComments} from '../actions/commentActions.js';
import CommentModal from './CommentModal';
import EditModal from './EditModal'

const CommunityBoard = ({comments, userId, getAllComments}) => {
  useEffect(() => {
    getAllComments();
  });

  return (
    <div>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>

              <Card style={{marginTop: '25px', marginBottom: '15px'}}>
                <Card.Img variant="top" src="/assets/dumping.jpg" />
                <Card.Body>
                  <Card.Title>
                    Contribute to the Nichols knowledge!
                  </Card.Title>
                  <CommentModal />
                </Card.Body>
              </Card>

              <ListGroup>
                {comments.map(({user, text, userName, _id}) => (
                  <ListGroup.Item key={_id}>
                    {text}
                    <br />
                    <i>{userName}</i>

                    {(userId === user) &&
                      <EditModal commentId={_id} commentText={text}/>
                    }
                  </ListGroup.Item>
                ))}
              </ListGroup>

            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comm.comments,
  userId: state.auth.user._id
});

const mapDispatchToProps = {
  getAllComments
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunityBoard);
