import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuiten-name">
          <p className="p__cormorant" style={{ color: "#dcca87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuiten-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#aaa" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
