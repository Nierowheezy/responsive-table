import React, { Fragment, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

const App = () => {
  const [Data, setData] = useState();

  return (
    <Fragment>
      <Header title="Dynamic &amp; Responsive Table" />
      <div className="split">
        <div className="table-flex">
          <Table setData={setData} Data={Data} />
        </div>
        {Data && <Form Data={Data} />}
      </div>
    </Fragment>
  );
};

export default App;
