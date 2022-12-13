import { GetStaticPaths } from "next";
import React from "react";
import { firstLevelMenu } from "../../helpers/helpers";
import { withLayout } from "../../layout/Layout";

const Type = (): JSX.Element => {
  return <div>Search</div>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => "/" + m.route),
    fallback: true,
  };
};
