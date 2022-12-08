import React, { useContext } from "react";
import { AppContext } from "../../context/app.Context";

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((item) => (
          <li>{item._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
