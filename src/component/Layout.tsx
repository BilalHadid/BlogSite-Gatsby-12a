import React, { ReactNode } from "react";
type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return <div>{children}</div>;
};

export default Layout;
