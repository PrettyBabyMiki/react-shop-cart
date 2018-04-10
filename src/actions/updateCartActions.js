import { UPDATE_CART} from "./types";



export const updateCart = (cartProducts) => dispatch => {
  let productQuantity = cartProducts.reduce( (sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let installments = cartProducts.reduce((greater, p) => {
    greater = p.installments > greater ? p.installments : greater;
    return greater;
  }, 0);
  

  let cartTotals = {
    productQuantity,
    installments,
    totalPrice
  }


  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  dispatch({
    type: UPDATE_CART,
    payload: cartTotals
  });

}
