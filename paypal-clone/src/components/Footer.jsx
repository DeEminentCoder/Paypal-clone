import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer px-5 pt-5 w-100 container-fluid text-white">
        <ol className="">
          <li>Check offers for details. Terms and exclusions apply.</li>
          <li>
            Purchases are subject to credit approval, and the PayPal Cashback
            Mastercard must be used for payment. See Rewards Program Terms for
            details and restrictions.
          </li>
          <li>See Terms and Rates for New Accounts.</li>
          <li>
            Applications are subject to credit approval. You must be at least 18
            years old and reside in the US or its territories to apply. An
            approved PayPal Cashback Mastercard application will result in a
            hard credit inquiry, which may impact your credit score.
          </li>
          <li>
            As of June 07, 2023, the annual percentage yield (APY) for PayPal
            Savings is 4.30%. This is a variable rate and can change at any
            time, including after the account is opened.
          </li>
        </ol>
        <p>
          The PayPal Cashback Mastercard is issued by Synchrony Bank pursuant to
          a license by Mastercard International Incorporated. Mastercard and the
          circles design are registered trademarks of Mastercard International
          Incorporated.
          <br />
          The Contactless Indicator mark, consisting of four graduating arcs, is
          a trademark owned by and used with permission of EMVCo, LLC.
          <br />
          All screen images are for illustrative purposes only.
        </p>
        <div className="dlogo">
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg"
            alt=""
            width={200}
          />
        </div>
        <div className="ul ">
          <ul className="gap-5 d-flex row">
            <li className="col">Help</li>
            <li className="col">Fees</li>
            <li className="col">Contact</li>
            <li className="col">Fees</li>
            <li className="col">Security</li>
            <li className="col">Help</li>
          </ul>
          <hr className="bg-danger border border-white mb-4 bg-white"></hr>

          <ul className="gap-5 d-flex row p-5">
            <li className="col">About</li>
            <li className="col">Neewsroom</li>
            <li className="col">jobs</li>
            <li className="col">Investors</li>
            <li className="col">Value</li>
            <li className="col">Public Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
