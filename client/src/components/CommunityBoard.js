import React, {useEffect} from 'react';
import {ListGroup, Card, Container, Row, Col} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllComments} from '../actions/commentActions.js';

const CommunityBoard = ({comments, getAllComments}) => {
  useEffect(() => {
    getAllComments();
  });

  return (
    <div>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card style={{marginTop: '25px'}}>
                <Card.Img variant="top" src="/assets/dumping.jpg" />
                <Card.Body>
                  <Card.Title>
                    Get advice or share your expertise!
                  </Card.Title>
                </Card.Body>
              </Card>

              <ListGroup>
                {comments.map(({_id, text, userName}) => (
                  <ListGroup.Item key={_id}>
                    <b>{text}</b>
                    <br />
                    {userName}
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
  comments: state.comm.comments
});

const mapDispatchToProps = {
  getAllComments
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunityBoard);
