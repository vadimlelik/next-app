import Advantages from "../../components/Advantages/Advantages";
import Card from "../../components/Card/Card";
import HhData from "../../components/HhData/HhData";
import Htag from "../../components/Htag/Htag";
import P from "../../components/P/P";
import Tag from "../../components/Tag/Tag";
import { TopLevelCategory } from "../../interfaces/page.interface";
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
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2"> Преимущества </Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && <P size="small">{page.seoText}</P>}
      <Htag tag="h2"> Получаемые навыки </Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponents;
