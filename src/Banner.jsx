import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <div className="Container">
      <div className="jumbotron">
        <h1 className="display-4">Album example</h1>
        <p>
          Something short and leading about the collection below--its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginRight: "5px" }}
        >
          Main call to action
        </button>

        <button type="button" class="btn btn-secondary">
          Secondary action
        </button>
      </div>
    </div>
  );
};

export default Banner;
