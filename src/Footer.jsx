import React from "react";

const Footer = () => {
  return (
    <div className="foot">
      <div className="Container">
        <footer className="bg-light text-center text-lg-start">
          <div
            className="text-center p-3"
            style={{
              backgroundColor: "white",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "150px",
              marginRight: "150px"
            }}
          >
            <p style={{ textAlign: "justify" }}>
              Album example is @ Bootstrap, but please download and customize it
              for yourself
              <br />
              New to Bootstrap?{" "}
              <a href="https://getbootstrap.com/docs/4.0/examples/">
                Visit the homepage
              </a>
              or read our{" "}
              <a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/">
                getting started guide.
              </a>
            </p>
            {/* <a href="">Back to top</a> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
