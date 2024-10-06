import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer)
  console.log("Cart Items");
  console.log(cartItems);
  const dispatch = useDispatch();
  //hook used to navigate a particular path or page
  const navigate = useNavigate()

  const [total, setTotal] = useState(0)
  const getTotal = () => {
    let sum = 0;
    cartItems.forEach(item => {
      sum = sum + item.price;
    });
    setTotal(sum)
  }
  useEffect(() => {
    getTotal();
  }, [cartItems])
  

  const handleCart = () => {
    alert("Thank you");
    dispatch(emptyCart());
    navigate('/')
  }
  return <>
    <button className="btn btn-success mt-4 ms-4 rounded"><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Back To Home</Link></button>
    <div style={{ marginTop: '20px' }}>
        {

          cartItems?.length > 0 ?
           <div className="row w-100">
            <div className="col-lg-6 m-5">
              <div className="table  shadow  table-hover">
                <thead>
                  <tr>
                    <th className="theadcolor  text-white" >#</th>
                    <th className="theadcolor  text-white" >Product</th>
                    <th className="theadcolor  text-white" >Price</th>
                    <th className="theadcolor  text-white" >Qty</th>
                    <th className="theadcolor  text-white" >Actions</th>
                  </tr>
                </thead>
                <tbody>


                  {cartItems?.map((item, index) => (
                    <tr key={index}>
                      <td className="align-middle">{index + 1}</td>
                      <td className="align-middle" style={{ width: '600px', whiteSpace: 'normal' }}><img variant="top" src={item.image} style={{ height: '80px' }} className="p-3" />
                        <span>{item.title.slice(0, 30)}...</span></td>
                      <td className="align-middle">₹{item.price}</td>
                      <td className="align-middle">1</td>
                      <td className="align-middle"><Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item?.id))}><i class="fa-solid fa-trash"></i></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>
          <div className="col-lg-4 mt-5">
              <div className="border shadow p-5">
                <h3>Cart Summary</h3>
                <h6>Total Number of Products :<span className="text-warning fw-bolder">{cartItems?.length}</span></h6>
                <h6>Total Price :<span className="text-warning fw-bolder">{total}</span></h6>
                <button className="btn btn-dark rounded w-100" onClick={handleCart}>Checkout</button>
              </div>   
          </div>
          </div>
            :
            <div style={{ height: '100vh' }} className="d-flex  align-items-center flex-column">
              <img src='https://cdn-icons-png.flaticon.com/512/2762/2762885.png' height='300px' alt='no' />
              <h3 className="text-danger fw-bolder">No item Found in Cart</h3>
            </div>
        }
    </div >
  </>;
}

export default Cart;
