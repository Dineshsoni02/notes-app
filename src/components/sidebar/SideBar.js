import React, { useState } from "react";
import "./SideBar.scss";
const SideBar = (props) => {
  const colors = ["#e7feff", "#a6e7ff", "#e8f4f7", "#ecf1ec", "#a4f4f9"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img
        src="https://img.icons8.com/ios-filled/50/000000/add--v1.png"
        className="sidebar_img"
        alt="add"
        onClick={() => setListOpen(!listOpen)}
      />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_items"
            style={{ background: item }}
            onClick={() => props.addNotes(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
