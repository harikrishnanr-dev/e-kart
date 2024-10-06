import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { removeFromWishList } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const dispatch = useDispatch()
  const wishlistItems = useSelector((state) => state.wishlistReducer)
  console.log("wishlistItems");
  console.log(wishlistItems);


  
  const handleWishlist = (item) => {
    dispatch(addToCart(item))
    dispatch(removeFromWishList(item.id))
  }

  return <>
        <button className="btn btn-success mt-4 ms-4 rounded"><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Back To Home</Link></button>

  <Row className="m-5">
{
wishlistItems?.length>0 ?  
  wishlistItems.map((item) => (

    <Col sm={12} md={6} lg={4} xl={3} className="mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} style={{height:'200px'}} className="p-3" />
      <Card.Body>
          <Card.Title>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
            <p>{item.description.slice(0,50)}...</p>
            <p className="fw-bolder">Price : &#x20b9; {item.price}</p>
            </Card.Text>
            <div className="d-flex align-items-center justify-content-between">

        <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishList(item?.id))}><i class="fa-solid fa-trash"></i></Button>
        <Button variant="outline-success" onClick={()=>handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
            </div>
          </Card.Body>
          </Card>
      </Col>
  ))
      :
          <div style={{ height: '100vh' }} className="d-flex  align-items-center flex-column">
            <img src='https://cdn-icons-png.flaticon.com/512/2762/2762885.png' height='300px' alt='no'/>
            <h3  className="text-danger fw-bolder">No item Found</h3>
          </div>
        
  }
 </Row>

  
  </>;
}

export default Wishlist;
