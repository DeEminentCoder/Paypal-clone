import React from "react";

const Content2 = () => {
  return (
    <>
      <div className="content bg-none row d-flex px-5 w-100 container-fluid mx-0">
        <div className="col content2-left-side order-2">
          <h2 className="my-4 text-primary-emphasis">
            Add another<br></br>
            <span className="text-primary"> 3% on top</span>
          </h2>
          <span className="text-secondary put">
            Put it on your PayPal Cashback Mastercard®. You'll earn unlimited 3%
            cash back2 on your PayPal purchases. And you'll earn unlimited 2%
            cash back on all of your other purchases. No rotating categories. No
            annual fee.3 Just unlimited cash back. Plus, no impact to your
            credit score if you're declined4.
          </span>
          <button className="check btn-lg btn col rounded-5 mt-3 mb-2 px-4 py-2 text-white fw-bold fs-6">
          Learn About the Card
          </button><br />
          <span className="text-secondary put">Subject to credit approval.</span>
        </div>
        <div className="col content2-right-side me-5 order-1">
          <img
            src="https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Cookied/mkt-US-page-Homepage-size-Table-up-Component-creditcard.png?quality=75&width=1500&format=webp"
            alt=""
            width={500}
          />
        </div>
      </div>
    </>
  );
};

export default Content2;
