import React from "react";

const Content = () => {
  return (
    <>
      <div className="content bg-none row d-flex px- pt-5 w-100 container-fluid  mx-0">
        <div className="col content-left-side">
          <h2 className="my-4 text-primary-emphasis">
            Get
            <span className="text-primary">
              {" "}
              unlimited cash back {''}
            </span>
            on your favorite brands
          </h2>
          <span className="text-secondary save">
            Save as many cash back1 offers as you want. Earn 2, 3, 4,
            5%and more after you check out with PayPal. Check
            offers for details.{" "}
            <a className="fw-semibold">Terms and exclusions apply</a>
          </span>
          <br></br>
          <button className="check btn-lg btn col rounded-5 mt-3 px-4 py-2 text-white mt-2 fw-bold fs-6">
            Check Out the Offers
          </button>
        </div>
        <div className="col content-right-side me-5 ">
          <img
            src="https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Uncookied/mkt--US_page--Homepage_%20size--all_Component--Split-section-01.png?quality=75&width=1500&format=webp"
            alt=""
            width={500}
          />
        </div>
      </div>
    </>
  );
};
export default Content;
