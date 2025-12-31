const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div>
        <h2>Hello, Mithun Ray 👋</h2>
        <p>What do you want to learn today?</p>
      </div>

      <div className="header-actions">
        <button>Rollover</button>
        <button className="primary">+ Add Your Goal</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
