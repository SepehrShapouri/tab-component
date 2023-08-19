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
    setCount(count+1)
  }
  function showBtnHandler() {
    setShow(!show);
  }
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(true);
  const [count,setCount] = useState(0)
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
    <aside className="essentials">
    <ShowButton onClick={showBtnHandler} show={show} />
      <p className="count">{count}</p>
    </aside>
      {show == true ? result : (result = <></>)}
    </>
  );
};

export default App;
