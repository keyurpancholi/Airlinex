import React from "react";
import "./Features.css";
import Card from "../../Components/Card/Card";


const Features = () => {
  return (
    <>
      <div className="featureLayout">
        <div className="featureCard">
          <Card>
            <div className="featureCardRow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="featureSVG"
              >
                <path d="M256 0c-35 0-64 59.5-64 93.7v84.6L8.1 283.4c-5 2.8-8.1 8.2-8.1 13.9v65.5c0 10.6 10.2 18.3 20.4 15.4l171.6-49 0 70.9-57.6 43.2c-4 3-6.4 7.8-6.4 12.8v42c0 7.8 6.3 14 14 14c1.3 0 2.6-.2 3.9-.5L256 480l110.1 31.5c1.3 .4 2.6 .5 3.9 .5c6 0 11.1-3.7 13.1-9C344.5 470.7 320 422.2 320 368c0-60.6 30.6-114 77.1-145.6L320 178.3V93.7C320 59.5 292 0 256 0zM640 368c0-79.5-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
              </svg>
            </div>
            <div><h4>Hassle-free flight booking</h4></div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt illo odit nobis veritatis labore dicta dignissimos
                architecto ipsa quidem asperiores? Sint dolorem similique,
                dolore a provident dolorum natus officia est?
              </p>
            </div>
          </Card>
        </div>
        <div className="featureCard">
          <Card>
            <div className="featureCardRow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="featureSVG">
                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16c0-79.5-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
              </svg>
            </div>
            <div><h4>Hotel accomodations</h4></div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt illo odit nobis veritatis labore dicta dignissimos
                architecto ipsa quidem asperiores? Sint dolorem similique,
                dolore a provident dolorum natus officia est?
              </p>
            </div>
          </Card>
        </div>
        <div className="featureCard">
          <Card>
            <div className="featureCardRow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="featureSVG">
                <path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8h39.1c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5h47.1c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8h39.1c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8H279.6zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5H200.5c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8H129.3c5.3-31.4 25.8-57.6 53.7-70.8zM352 192c0-70.7-57.3-128-128-128S96 121.3 96 192s57.3 128 128 128s128-57.3 128-128zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z" />
              </svg>
            </div>
            <div><h4>Global recognition</h4></div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt illo odit nobis veritatis labore dicta dignissimos
                architecto ipsa quidem asperiores? Sint dolorem similique,
                dolore a provident dolorum natus officia est?
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Features;
