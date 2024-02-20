import React from "react";

const Content = () => {
  return (
    <>
      <div className="content bg-none row d-flex p-5 w-100 container-fluid gap-2 my-5  mx-0">
        <div className="col left-hero-side my-3">
          <h2 className="my-4 text-primary-emphasis">
            Get {' '}
            <span className="text-primary">
              unlimited cash<br></br>back
            </span>
            on your favorite<br></br>brands
          </h2>
          <span className="text-secondary">
            Save as many cash back1 offers as you want. Earn 2, 3, 4, 5%<br></br>and
            more after you check out with PayPal. Check<br></br>offers for details.<a>Terms and exclusions apply</a>
          </span>
          <button className="btn-lg bg-white btn col rounded-5 px-4 py-2 text-primary-emphasis mt-2 fw-bold">
            Get the App
          </button>
        </div>
        <div className="col right-hero-side">
          <img src="ew.gif" alt="" width={330} className="m-1" />
        </div>
      </div>
    </>
  );
};
export default Content;
