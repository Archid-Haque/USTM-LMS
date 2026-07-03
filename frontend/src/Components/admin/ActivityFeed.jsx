import React from "react";

const ActivityFeed = () => {
  return (
    <div
      style={{
        background: "#fff",
        marginTop: "25px",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h3>🔔 Recent Activities</h3>

      <p>Rahul enrolled in Data Science.</p>
      <p>New course Machine Learning added.</p>
      <p>Teacher uploaded lecture notes.</p>
      <p>25 assignments submitted.</p>
      <p>Database backup completed.</p>
    </div>
  );
};

export default ActivityFeed;