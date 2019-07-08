import React from 'react';
import {Container, Row, Col, Jumbotron, Image, Card, Navbar} from 'react-bootstrap';
import Footer from './Footer';
import styles from '../css/home.module.css';

const Home = () => {
  return (
    <div>
      <Jumbotron className={styles.jumboImg} fluid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Jumbotron>

      <Container>
        <Jumbotron className={styles.jumboText}>
          <div className="text-center">
            <h5>Discover why the ancients lived by one mantra:</h5>
            <br />
            <h3>If you haven't ridden up Nichols Canyon, you haven't ridden.</h3>
          </div>
        </Jumbotron>
      </Container>

      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Lush subtropics</Card.Title>
                  <Card.Text>
                    Enjoy the deep purple and blue hues that only nature can provide
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="/assets/recycleBin.jpg" />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Towering high country ridges</Card.Title>
                  <Card.Text>
                    Gaze up at pristine power lines and majestic human dwellings
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="/assets/ridgeline.jpg" />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>The summit</Card.Title>
                  <Card.Text>
                    Few have dared to tread at an altitude so extreme that clouds
                    cannot form
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="/assets/runyonCanyon.jpg" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={{marginTop: "25px"}}>
              <Card.Body>
                <Card.Title>Few dare to enter Nichols Canyon.</Card.Title>
                <Card.Title>Even fewer dare to enter this website.</Card.Title>
                <br />
                <Card.Subtitle className="mb-2 text-muted">
                  This is the closest you can get to riding Nichols Canyon without
                  sweating profusely, elevating your pulse to 140 beats per minute
                  and having your legs scream at you for the next four days.
                </Card.Subtitle>
                <Card.Text>
                  Sign up or log in to get access.
                </Card.Text>
                <Card.Text>
                  <b>It's free. </b>  Just like the air you will be sucking when you peddle
                  up the canyon.
                </Card.Text>
                <Card.Text>
                  <b>And it's secure. </b>  Your privacy is protected here.  However, the
                  same can't be said when you ride the real thing.
                </Card.Text>
                <Card.Link href="/signup">Sign up</Card.Link>
                <Card.Link href="/login">Login</Card.Link>
              </Card.Body>
            </Card>

            <Card style={{marginTop: "25px"}}>
              <Card.Title>LA's path of cycling enlightenment</Card.Title>
              <Card.Img variant="top" src="/assets/nicholsStar.jpg" />
              <Card.Body>
                <Card.Text>
                  With 820 feet of vertical climb, you will soon understand why this
                  is regarded as the real Grand Canyon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{marginTop: "25px"}}>
              <Card.Header>Testimonies</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Compared to Nichols Canyon, the Pyrenees and Alps are a breeze.
                    Anyone who rides it deserves a yellow jersey.  I cracked
                    every time I attempted it.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    <i>Lance A.</i>
                  </footer>
                </blockquote>
                <br />
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    The canyon is unforgiving.  It hunts you down and says, "
                    Hasta la vista, you flabby weakling."{' '}
                  </p>
                  <footer className="blockquote-footer">
                    <i>Arnold S.</i>
                  </footer>
                </blockquote>
                <br />
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Before touring Nichols Canyon, I always tour <i>Le Tour de
                    Nichols</i>.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    <i>Serena W.</i>
                  </footer>
                </blockquote>
                <br />
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Don't enter the canyon without taking safety precautions.
                    Goggles are a must.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    <i>Kareem A-J.</i>
                  </footer>
                </blockquote>
                <br />
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    I fully expect Nichols Canyon one day to receive the Nobel
                    Prize in bicycle climbs.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    <i>Albert E.</i>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
