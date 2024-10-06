import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

function Home() {
  const response = useFetch('https://fakestoreapi.com/products');
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlistReducer);

  const handleWishlist = (item) => {
    const isItemInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);

    if (isItemInWishlist) {
      dispatch(removeFromWishList(item.id)); // If the item is in the wishlist, remove it
    } else {
      dispatch(addToWishList(item)); // If the item is not in the wishlist, add it
    }
  };

  return (
    <>
      <Row className="m-5">
        {response?.length > 0 ?  
          response.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3} className="mb-3" key={item.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} style={{height:'200px'}} className="p-3" />
                <Card.Body>
                  <Card.Title>{item.title.slice(0,20)}...</Card.Title>
                  <Card.Text>
                    <p>{item.description.slice(0,50)}...</p>
                    <p className="fw-bolder">Price : &#x20b9; {item.price}</p>
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                  <Button 
                        variant="link" 
                        onClick={() => handleWishlist(item)}
                      >
                        <i 
                          className={`fa-2x fa-heart ${ wishlistItems.some(wishlistItem => wishlistItem.id === item.id) ? 'fa-solid' : 'fa-regular'}`} 
                          style={{ color:'#ff0000'}} 
                        />
                    </Button>
                    <Button variant="link" onClick={() => dispatch(addToCart(item))}>
                        <i className="fa-2x fa-solid fa-cart-shopping" style={{ color:'green'}}></i>
                      </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        :
          <div><p>No item Found</p></div>
        }
      </Row>
    </>
  );
}

export default Home;
