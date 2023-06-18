import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function Faq({ id, question, answer }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="card shadow mb-2">
      <div className="card-body">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title text-start">{question}</h5>
            <button
              className="btn btn-outline-dark"
              onClick={() => setShowInfo(!showInfo)}
            >
              {showInfo ? (
                <AiFillMinusCircle className="fs-3" />
              ) : (
                <AiFillPlusCircle className="fs-3" />
              )}
            </button>
          </div>
          {showInfo && <p className="card-text text-start w-75">{answer}</p>}
        </div>
      </div>
    </div>
  );
}

export default Faq;
