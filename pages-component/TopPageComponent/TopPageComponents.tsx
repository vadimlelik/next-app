import Card from "../../components/Card/Card";
import HhData from "../../components/HhData/HhData";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import { TopPageComponentProps } from "./TopPage.component.props";
import styles from "./TopPageComponent.module.css";

const TopPageComponents = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="medium">
            {products.length}
          </Tag>
        )}
        <span>Sorted</span>
      </div>
      <div className={styles.product}>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2"> Вакансии {page.category}</Htag>
        {products && (
          <Tag color="red" size="medium">
            hh.ru
          </Tag>
        )}
      </div>
      <HhData {...page.hh} />
    </div>
  );
};

export default TopPageComponents;
