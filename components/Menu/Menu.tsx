import React, { useContext } from "react";
import { AppContext } from "../../context/app.Context";
import { FirstLavelMenuItem } from "../../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";

const firstLevelMenu: FirstLavelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: CoursesIcon,
    id: TopLevelCategory.Courses,
  },
  {
    route: "courses",
    name: "Книги",
    icon: BooksIcon,
    id: TopLevelCategory.Books,
  },
  {
    route: "courses",
    name: "Сервисы",
    icon: ServicesIcon,
    id: TopLevelCategory.Services,
  },
  {
    route: "courses",
    name: "Товары",
    icon: ProductsIcon,
    id: TopLevelCategory.Products,
  },
];

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
