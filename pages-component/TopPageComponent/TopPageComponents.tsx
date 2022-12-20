import { TopPageComponentProps } from "./TopPage.component.props";

const TopPageComponents = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};

export default TopPageComponents;
