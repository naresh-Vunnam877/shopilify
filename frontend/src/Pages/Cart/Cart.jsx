import React from "react";
import AnchorLink from "../../Components/common/Link";

function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <div className="flex flex-row items-center justify-center ">
        <h4 className="title-font sm:text-1xl text-1xl mb-4 font-medium text-white flex flex-row ">
          Don't have account.
          <AnchorLink path={"cart/status"} name={"Cart Status"} />{" "}
        </h4>
      </div>
    </div>
  );
}

export default Cart;
