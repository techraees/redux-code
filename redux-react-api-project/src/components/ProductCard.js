import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getAllProduct } from "../store/cartSlice";
import { useEffect } from "react";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3 gy-5">
          {items.map((item) => (
            <MDBCol key={item.id} size="md">
              <MDBCard style={{ width: "400px", height: "1000px" }}>
                <MDBCardImage src={item.image} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBCardText>{item.description}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
