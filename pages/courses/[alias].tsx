import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";

function Course({ menu, firstCategory }: CourseProps): JSX.Element {
  const [raiting, setRaiting] = useState<number>(4);
  return (
    <>
      <span> тут будет текст </span>
    </>
  );
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  const { data: page } = await axios.post<MenuItem[]>(
    process.env.NEEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
