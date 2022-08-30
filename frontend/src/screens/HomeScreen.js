import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Carousel from '../components/Carousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import { Container, Image, Button } from 'react-bootstrap';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <Carousel />

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />

          {/* Category section */}

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
                    First time customers get a 10% discount on their first
                    purchase & they get a 50$ Gift Card from our store.
                  </p>
                  <Button variant='dark'>See all the offers</Button>
                </Col>
              </Col>
              <Col md='5'>
                <Image src='../../../uploads/banner4.jpg' fluid />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
