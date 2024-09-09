import React from "react";
import Table from "../components/Table";
import Filters from "../components/Filters";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filters />
      <Table />
    </section>
  );
};

export default Crypto;
