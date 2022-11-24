interface Props {
  subtotal: number;
  textColor: string
}

export default function OrderSummary({
  subtotal,
  textColor
}: Props) {

  const tax = 7;
  const shipping = (subtotal >= 100) ?  0 : 25;
  let sum = 0;
  sum+=subtotal;

  let variant = "";

  if (textColor) {
    variant = ` text-${textColor}`;
  }
  return (
    <>
      <ul className="list-unstyled">
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Subtotal</p>
            <p className={`fw-bold opacity-8` + variant}>${sum.toFixed(2)}</p>
          </div>
        </li>
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Shipping estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to shipping" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className={`fw-bold opacity-8` + variant}>${shipping.toFixed(2)}</p>
          </div>
        </li>
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Tax estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="This may vary depending on the country you are in" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className={`fw-bold opacity-8` + variant}>${tax.toFixed(2)}</p>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5 className={variant}>Order Total</h5>
            <h5 className={variant}>${(subtotal + shipping + tax).toFixed(2)}</h5>
          </div>
        </li>
      </ul>
    </>
  );
}