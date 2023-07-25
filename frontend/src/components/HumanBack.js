import React, { useState } from "react";

const HumanBody = () => {
  const [body, setBody] = useState({
    x1: null,
    x2: null,
    x3: null,
    x4: null,
    x5: null,
    x6: null,
    x7: null,
    x8: null,
    x9: null,
    x10: null,
    x11: null,
    x12: null,
    x13: null,
    x14: null,
    x15: null,
    x16: null,
    x17: null,
    x18: null,
    x19: null,
    x20: null,
    x21: null,
    x22: null,
    x23: null,
    x24: null,
    x25: null,
    x26: null,
    x27: null,
    x28: null,
    x29: null,
    x30: null,
    x31: null,
    x32: null,
    x33: null,
    x34: null,
    x35: null,
    x36: null,
    x37: null,
    x38: null,
    x39: null,
    x40: null,
    x41: null,
    x42: null,
    x43: null,
    x44: null,
  });

  const handleBodyClick = (xKey) => {
    setBody((prevBody) => ({ ...prevBody, [xKey]: xKey }));
  };

  return (
    <div>
      {/* Human Body */}
      <div className="human-back">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1172 909"
          style={{ enableBackground: "new 0 0 1172 909" }}
          xmlSpace="preserve"
        >
          <path className="st0" />
          <line className="st1" x1="1728.7" y1="489.1" x2="1653.7" y2="399.6" />
          <polygon
            onClick={() => handleBodyClick("x1")}
            className="st1"
            points="531.2,211.9 538.3,143.9 533.2,143.9 530.1,169 488.8,201.6"
          />
          <polygon
            onClick={() => handleBodyClick("x2")}
            className="st1"
            points="597,201.6 551.9,169 548.6,143.9 543,143.9 550.8,211.9 "
          />
          <polygon
            onClick={() => handleBodyClick("x3")}
            className="st1"
            points="463.2,211.9 488.8,221.6 503.6,261.4 531.7,285.4 531.7,224.1 488.8,207.3 "
          />
          <polygon
            onClick={() => handleBodyClick("x4")}
            className="st1"
            points="614.4,211.9 589.7,221.6 575.4,261.4 548.2,285.4 548.2,224.1 589.7,207.3 "
          />
          <polygon
            onClick={() => handleBodyClick("x5")}
            className="st1"
            points="431.6,246.3 451,217 475.5,223.1 438.2,265.5 "
          />
          <polygon
            onClick={() => handleBodyClick("x6")}
            className="st1"
            points="649.6,246.3 629.7,217 604.5,223.1 642.8,265.5 "
          />
          <polygon
            onClick={() => handleBodyClick("x7")}
            className="st1"
            points="459.2,249.6 475.5,232.3 482.1,232.3 497.5,269.6 459.2,265.5 "
          />
          <polygon
            onClick={() => handleBodyClick("x8")}
            className="st1"
            points="624.4,249.6 606,232.3 598.5,232.3 581.3,269.6 624.4,265.5 "
          />
        </svg>
      </div>
      {/*// Human Body */}
      <div>
        {Object.entries(body).map(([key, value]) => (
          <div key={key} onClick={() => handleBodyClick(key)}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanBody;
