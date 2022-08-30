import React from 'react';
import { Jumbotron, Container, Image, Row, Col, Button } from 'react-bootstrap';
import styles from '../About.css';
const AboutScreen = () => {
  return (
    <Jumbotron style={{ backgroundColor: '#ffffff' }} fluid>
      <Container>
        <h1 className={styles.heading}>
          <span className={styles.About}>About</span>&nbsp;
          <span className={styles.Us}>Us</span>
        </h1>
        <Row>
          <Col md={'auto'} lg={7}>
            <Image
              src='https://raw.githubusercontent.com/abdoutony/react-and-redux-ecommerce-website/a231c73747715e7f295181a9505f6a45c87f7807/src/multimedia/images/herobg.png'
              fluid
            />
          </Col>
          <Col md={'auto'} lg={5}>
            <p className={styles.description}>
              What started out as a primarily computer parts store, has grown
              into one of the most trusted Electronic Accessories eRetailer
              store found online. A lot has changed since we started our humble
              business over a decade ago for both us and the consumer. Today we
              offer thousands of different electronic accessories to add style
              and protection to your electronic devices - be that a smartphone,
              tablet, laptop, camera, and more!
              <br />
              <br />
              Electronics-e-shop is indeed a leading consumer electronics
              distributor in the United Kingdom. We ship thousands of orders
              daily from our own warehouse . We offer a vast inventory of
              electronic products and guarantee customer satisfaction. In
              addition, we offer products from your favourite brands at low
              discounted prices.
            </p>
            <br />
            <br />
            <Button variant='dark'>Visit our Blog</Button>
          </Col>
        </Row>
        <h2> Our Promise:</h2>
        <p className={styles.description}>
          Connect8 is dedicated to delivering high quality, new, and innovative
          products. Customer satisfaction and continued support from our loyal
          customers is the driving force behind our team. We take pride in our
          user-friendly and secure website, which allows customers to shop with
          ease from their own home, office, or on the go. Every item listed on
          our website is in stock, ready to ship, and includes a warranty unless
          marked otherwise.
        </p>
        <br />
        <br />

        <h2> We Want To Hear From You!</h2>
        <p className={styles.description}>
          We’ve been upgrading our website and we would like to have your
          feedback! Please feel free to contact us at anytime during regular
          business hours. In addition, if you are a member of the press and
          would like to review a product, please contact us as well.
        </p>
      </Container>
      {/* Banner */}
      <Container className='bannerContainer'>
        <Row>
          <Col
            md='7'
            className='text-white d-flex align-items-center justify-content-center'
          >
            <Col>
              <span>Don't miss the chance</span>
              <h2 className='text-white'>Sales upto 10% off</h2>
              <p>
                First time customers get a 10% discount on their first purchase
                & they get a 50$ Gift Card from our store.
              </p>
              <Button variant='dark'>See all the offers</Button>
            </Col>
          </Col>
          <Col md='5'>
            <Image src='https://raw.githubusercontent.com/abdoutony/react-and-redux-ecommerce-website/a231c73747715e7f295181a9505f6a45c87f7807/src/multimedia/images/manmodelimg-removebg-preview.png' />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default AboutScreen;
