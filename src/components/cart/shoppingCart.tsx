import CartItem from './productCartItem';
import OrderSummary from './orderSummary';

interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  colors: string[];
  color: string;
  size: string;
  price: number;
  stock: string;
  subtotal: number;
  shipping: number;
  tax: number;
}

export default function ShoppingCart({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price,
  stock,
  subtotal,
  shipping,
  tax

}: Props) {

  return (
    <>
      <div className="container">
        <h2 className="mb-4">Shopping Cart</h2>
        <div className="row">
          <div className="col-12 col-md-7">
            <CartItem
              thumb_src={thumb_src}
              thumb_alt={thumb_alt}
              title={title}
              color={color}
              size={size}
              price={price}
              stock={stock}
            />
            <hr className="horizontal dark mt-4" />
            <div className="d-flex mt-4">
              <img className="w-30 rounded-3" src="https://images.unsplash.com/photo-1581191853005-15f8b24f6302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
              <div className="w-50 pt-2 ps-4">
                <h6 className="text-lg mb-1">The Dirve</h6>
                <div className="d-flex">
                  <p className="pe-3 mb-0">Black</p>
                  <p className="border-start ps-3 mb-0">Medium</p>
                </div>
                <h6 className="mb-1">$99.00</h6>

                <div className="d-flex align-items-center mt-6">
                  <i className="fas fa-check text-lg text-success"></i>
                  <p className="mb-0 ms-2 text-sm">In Stock</p>
                </div>
              </div>
              <div className="w-10">
                <input type="text" className="form-control" placeholder="1" aria-label="amount" />
              </div>
              <div className="w-10 text-end">
                <a href="#">
                  <i className="fas fa-times ms-3"></i>
                </a>
              </div>
            </div>
            <hr className="horizontal dark mt-4" />
            <div className="d-flex mt-4">
              <img className="w-30 rounded-3" src="https://images.unsplash.com/photo-1599824701954-d1d141704de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
              <div className="w-50 pt-2 ps-4">
                <h6 className="text-lg mb-1">The Break</h6>
                <div className="d-flex">
                  <p className="pe-3 mb-0">Black</p>
                  <p className="border-start ps-3 mb-0">Large</p>
                </div>
                <h6 className="mb-1">$99.00</h6>

                <div className="d-flex align-items-center mt-6">
                  <i className="fas fa-check text-lg text-success"></i>
                  <p className="mb-0 ms-2 text-sm">In Stock</p>
                </div>
              </div>
              <div className="w-10">
                <input type="text" className="form-control" placeholder="1" aria-label="amount" />
              </div>
              <div className="w-10 text-end">
                <a href="#">
                  <i className="fas fa-times ms-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Order Summary</h5>
                <OrderSummary 
                  subtotal={subtotal}
                  shipping={shipping}
                  tax={tax}
                />
                <button className="btn btn-primary btn-lg w-100 mb-0">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
