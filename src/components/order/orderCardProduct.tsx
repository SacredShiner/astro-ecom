interface Props {
  product: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  });
  status: string;
  address: string;
  email: string;
  phoneNumber: string;
}

export default function OrderCardProduct({
  product,
  status,
  address,
  email,
  phoneNumber
}: Props) {

  let widthClass = "";

  switch (status) {
    case "Order Placed":
      widthClass = " w-5"
      break;
    case "Processed":
      widthClass = " w-40"
      break;
    case "Shipped":
      widthClass = " w-70"
      break;
    case "Delivered":
      widthClass = " w-100"
      break;
  }

  return (
    <>
      <div className="card shadow-xs border p-4 mb-4">
        <div className="row border-bottom pb-4">
          <div className="col-2">
            <img className="w-100 rounded-3 shadow-xs" src={product.thumb_src} alt={product.thumb_alt} />
          </div>
          <div className="col-5">
            <h5 className="text-base">{product.title}</h5>
            <h6 className="text-sm font-weight-bold">${product.price.toFixed(2)}</h6>
            <p className="text-sm mb-0 opacity-8">{product.description}</p>
            <p className="text-dark text-sm mt-2"><b>Qty:</b> 3</p>
          </div>
          <div className="col-3">
            <h5 className="text-base">Delivery Address</h5>
            <p className="text-sm mb-0 opacity-8 pe-7">{address}</p>
          </div>
          <div className="col-2">
            <h5 className="text-base">Shipping updates</h5>
            <p className="text-sm mb-2 opacity-8">{email}</p>
            <p className="text-sm opacity-8">{phoneNumber}</p>
            <a className="text-sm text-primary font-weight-bold" href="#">Edit</a>
          </div>
        </div>
        <div className="mt-4">
          <h6>Preparing to ship on March 24, 2021</h6>
          <div className="progress my-4">
            <div className={`progress-bar bg-primary` + widthClass} role="progressbar"></div>
          </div>
          <div className="d-flex justify-content-between">
            <p className="font-weight-semibold text-primary">Order placed</p>
            {status == "Order Placed" && 
            <>
              <p className="font-weight-semibold">Processed</p>
              <p className="font-weight-semibold">Shipped</p>
              <p className="font-weight-semibold">Delivered</p>
            </>
            }
            {status == "Processed" && 
            <>
              <p className="font-weight-semibold text-primary">Processed</p>
              <p className="font-weight-semibold">Shipped</p>
              <p className="font-weight-semibold">Delivered</p>
            </>
            }
            {status == "Shipped" && 
            <>
              <p className="font-weight-semibold text-primary">Processed</p>
              <p className="font-weight-semibold text-primary">Shipped</p>
              <p className="font-weight-semibold">Delivered</p>
            </>
            }
            {status == "Delivered" && 
            <>
              <p className="font-weight-semibold text-primary">Processed</p>
              <p className="font-weight-semibold text-primary">Shipped</p>
              <p className="font-weight-semibold text-primary">Delivered</p>
            </>
            }
          </div>
        </div>
      </div>
    </>
  );
}