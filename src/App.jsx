import { useState } from "react";
import "./App.css";
import ShowButton from "./components/ShowButton";
import Tabwrapper from "./components/TabWrapper";
const tabData = [
  {
    id: 1,
    tabTitle: "ITEM 1",
    tabContent: "Authorize user validation",
  },
  {
    id: 2,
    tabTitle: "ITEM 2",
    tabContent: "Go to shopping Cart",
  },
  {
    id: 3,
    tabTitle: "ITEM 3",
    tabContent: "Go to user dashboard",
  },
];
const App = () => {
  function setActiveButton(tab) {
    setActiveTab(tab);
  }
  function showBtnHandler() {
    setShow(!show);
    console.log(show);
  }
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(true);

  let result = (
    <>
        <Tabwrapper
          setActiveButton={setActiveButton}
          activeTab={activeTab}
          tabData={tabData}
        />
    </>
  );
  return (
    <>
      <ShowButton onClick={showBtnHandler} show={show} />
      {show == true ? result : (result = <></>)}
    </>
  );
};

export default App;
