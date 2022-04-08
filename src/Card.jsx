import React from "react";

const Card = () => {
  return (
    <div className="Container" style={{ paddingBottom: "50px" }}>
      <div className="card" style={{ width: "300px", margin: "50px" }}>
        <h5
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "gray",
            color: "white",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center"
          }}
        >
          Thumbnail
        </h5>
        <div className="card-body">
          <p className="card-text" style={{ textAlign: "justify" }}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div
            className="btn-group me-2"
            role="group"
            aria-label="First group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <button type="button" className="btn btn-outline-secondary">
                View
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Edit
              </button>
            </div>
            <div>
              <p>9 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
