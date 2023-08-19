import { useState } from "react";
import "./App.css";
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
  function showBtnHandler(){
    setShow(!show)
    console.log(show)
  }
  const [activeTab, setActiveTab] = useState(1);
  const [show,setShow] = useState(true)

  let result = 
  <>
        <div className="wrapper">
        <div className="tabWrapper">
          {tabData.map((tab) => {
            return (
              <button
                onClick={() => setActiveButton(tab.id)}
                className={`tabButton ${activeTab == tab.id ? "active" : ""}`}
                key={tab.id}
              >
                <span>{tab.tabTitle}</span>
                <span className="tabIndicator"></span>
              </button>
            );
          })}
        </div>
        <p className="tab-content">{tabData[activeTab - 1].tabContent}</p>
      </div>
  </>
  return (
    <>
{show == true ? result : result = <></>}
<button onClick={showBtnHandler} className="show-btn">{show == true ? "hide" : "show"}</button>
    </>
  );
};

export default App;
