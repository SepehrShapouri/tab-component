const TabWrapper = ({ setActiveButton, activeTab, tabData}) => {
  return (
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
  );
};

export default TabWrapper;
