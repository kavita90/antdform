import React from "react";
import { RouteProps } from "react-router";


interface ILayoutProps {
  location: RouteProps["location"];
   children: React.ReactNode ;
}


const Layout1: React.FC<ILayoutProps> = (props: ILayoutProps) => {
   return <div>{props.children}</div>;
};

export { Layout1 };

