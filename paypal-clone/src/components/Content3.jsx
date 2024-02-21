import React from 'react'

const Content3 = () => {
  return (
    <>
    <div className="content bg-none row d-flex px- pt-5 w-100 container-fluid  mx-0">
        <div className="col content-left-side">
          <h2 className="my-4 text-primary-emphasis">
          Watch it
            <span className="text-primary">
              {" "}
              grow {''}
            </span>
          </h2>
          <span className="text-secondary save">
          Roll all that cash back into a high-yield PayPal Savings account. You could earn 4.30% APY.5 That's earning cash on cash back.
          </span>
          <br></br>
          <button className="check btn-lg btn col rounded-5 mt-3 mb-2 px-4 py-2 text-white fw-bold fs-6">
          Sign Up For PayPal Savings
          </button><br />
          <span className="text-secondary balance">
          PayPal Balance account is required to use PayPal Savings. PayPal is a financial technology company, not a bank. Banking services provided by Synchrony Bank, Member FDIC.
          </span>
        </div>
        <div className="col content-right-side me-5 ">
          <img
            src="https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Uncookied/mkt--US_page--Homepage_%20size--all_Component--Split-section-03.jpg?quality=75&width=1500&format=webp"
            alt=""
            width={500}
          />
        </div>
      </div>
    </>
  )
}

export default Content3