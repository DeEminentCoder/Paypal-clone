import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero row d-flex p-5 w-100 container-fluid gap-2 m-0">
        <div className="col left-hero-side my-3">
          <button className="btn btn-lg bg-body-secondary border rounded-5 p-1 row d-flex">
            <button className="btn- bg-white btn col rounded-5 px-4 py-1 fw-bold">
              Personal
            </button>
            <button className="btn- bg-body-secondary btn col rounded-5 px-4 py-1 fw-bold">
              Business
            </button>
          </button>
          <h1 className="text-white mt-4">
            There's a <span className="text-primary ">plus side</span>
            <br></br>to every purchase<br></br>you make with<br></br>PayPal.
          </h1>
          <h5 className="text-white mt-3">And it really adds up.</h5>
          <button className="btn-lg bg-white btn col rounded-5 px-4 py-2 text-primary-emphasis mt-2 fw-bold">
            Get the App
          </button>
        </div>
        <div className="col right-hero-side">
            <img src="ew.gif" alt="" width={330} className="m-1"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
