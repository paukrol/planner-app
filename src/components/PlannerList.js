import { useEffect } from "react";
import { Link } from "react-router-dom";

const PlannerList = ({ allPlans }) => {
  const backgroundUrl = [
    require("../img/note_1.png"),
    require("../img/note_2.png"),
    require("../img/note_3.png"),
    require("../img/note_4.png"),
    require("../img/note_5.png"),
    require("../img/note_6.png"),
    require("../img/note_7.png"),
    require("../img/note_8.png"),
    require("../img/note_9.png"),
  ];

  return (
    <>
      {allPlans.length ? (
        <div className="planner-list-container">
          {allPlans.map((plan) => (
            <div
              className="planner-preview"
              onm
              key={plan.id}
              style={{
                backgroundImage: `url(${backgroundUrl[plan.backgroundId]})`,
                backgroundSize: "cover",
              }}
            >
              <Link to={`/plans/${plan.id}`} className="planner-link">
                <p>
                  {plan.date[0]}.{plan.date[1]}
                </p>
                <p className="year">{plan.date[2]}r.</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="planner-list-empty">You have no plans yet.</p>
      )}
    </>
  );
};

export default PlannerList;
