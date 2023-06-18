import React, { useState } from "react";
import Faq from "./Faq";
import faqData from "../../data";

function Faqs() {
  const [faqs, setFaqs] = useState(faqData);
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card text-center bg-white w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-lg-4 text-start">
              <h3>FAQ Chapter</h3>
            </div>
            <div className="col-sm-12 col-lg-8">
              {faqs.map((faq) => {
                return <Faq key={faq.id} {...faq} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
