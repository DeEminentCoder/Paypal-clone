import React from "react";

const Content4 = () => {
  return (
    <>
      <div className="content bg-none row d-flex px- pt-5 w-100 container-fluid bg-body-secondary  mx-0">
        <div className="col content-left-side">
          <h2 className="my-4 text-primary-emphasis">
            Pay it
            <span className="text-primary"> safe {""}</span>
          </h2>
          <span className="text-secondary save">
          Your transactions are encrypted, helping to keep your identity and financial info safe.
          </span>
          <br></br>
          <button className="check btn-lg btn col rounded-5 mt-3 mb-2 px-4 py-2 text-white fw-bold fs-6">
          Shop Confidently with PayPal
          </button>
        </div>
        <div className="col content-right-side me-5 ">
          <img
            src="https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Uncookied/mkt-US-page-Homepage-size-Table-up-Component-security.png?quality=75&width=1500&format=webp"
            alt=""
            width={500}
          />
        </div>
      </div>
    </>
  );
};

export default Content4;
