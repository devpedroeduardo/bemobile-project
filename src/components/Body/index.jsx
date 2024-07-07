import React, { useState, useEffect } from "react";
import { Table } from "../Table";
import { Accordion } from "../Accordion";

export const Body = ({ data = [] }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth > 800 ? <Table data={data} /> : <Accordion data={data} />;
};
