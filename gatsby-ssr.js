import React from "react";
import Layout from "./src/component/Layout";

export const wrapRootElement = ({ element, props }, pluginOptions) => (
  <Layout {...props} features={pluginOptions.features}>
    {element}
  </Layout>
);
