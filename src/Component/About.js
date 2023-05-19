import React, { useState } from "react";

const About = () => {
  const [mystyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const togglestyle = () => {
    if (mystyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      })
      setBtnText("Enable Dark Mode");
    } else{
          setMyStyle({
                color: "white",
                backgroundColor: "black",
            })
            setBtnText("Enable Light Mode");
      };
}

  return (
    <>
      <div className="container m-5" style={mystyle}>
        <h1 className="my-3">About us</h1>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={mystyle}
                >
                  Collapsible Group Item #1
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
              style={mystyle}
            >
              <div className="card-body" style={mystyle}>
                Some placeholder content for the first accordion panel. This
                panel is shown by default, thanks to the <code>.show</code>{" "}
                class.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={mystyle}
                >
                  Collapsible Group Item #2
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
              style={mystyle}
            >
              <div className="card-body" style={mystyle}>
                Some placeholder content for the second accordion panel. This
                panel is hidden by default.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={mystyle}
                >
                  Collapsible Group Item #3
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={mystyle}>
                And lastly, the placeholder content for the third and final
                accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={togglestyle}
          type="button"
          className="btn btn-primary"
        >
          {btntext}
        </button>
      </div>
      {/* <div className="container my-3">
      </div> */}
    </>
  );
};

export default About;
