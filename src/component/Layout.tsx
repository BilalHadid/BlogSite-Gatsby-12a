import React, { ReactNode, useContext } from "react";

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return <div className="AllOver">{children}</div>;
};

export default Layout;
