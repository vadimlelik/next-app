import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [raiting, setRaiting] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Тут будет текс</Htag>
      <Htag tag="h2">Тут будет текс</Htag>
      <Htag tag="h3">Тут будет текс</Htag>
      <Button appearence="primary" arrow="left">
        Button primary
      </Button>
      <Button appearence="primary" arrow="left">
        Button primary
      </Button>
      <Button appearence="ghost" arrow="left">
        Button
      </Button>

      <P size="small"> small</P>
      <P size="large"> large</P>
      <P size="middle"> large</P>
      <Tag size="medium" color="primary">
        tag
      </Tag>
      <Tag size="small" color="green">
        tag
      </Tag>
      <Tag size="small" color="red">
        tag
      </Tag>
      <Rating raiting={raiting} isEditable={true} setRaiting={setRaiting} />
      <ul>
        {menu.map((item) => (
          <li>{item._id.secondCategory} </li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
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

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
