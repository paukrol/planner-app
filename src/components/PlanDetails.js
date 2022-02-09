import CheckboxInput from "./CheckboxInput";
import { GiLindenLeaf } from "react-icons/gi";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams, useHistory, Link } from "react-router-dom";

const PlanDetails = ({
  allPlans,
  setAllPlans,
  handleCheck,
  handleCheckMorning,
  handleCheckEvening,
}) => {
  const { id } = useParams();
  const history = useHistory();

  const currentPlan = allPlans.find((plan) => plan.id.toString() === id);

  const handleDelete = (id) => {
    const listPlans = allPlans.filter((item) => item.id !== id);

    setAllPlans(listPlans);
    history.push("/");
  };

  return (
    <div className="plan-details-container">
      <div className="plan-date">
        <div className="plan-leaf-container">
          <GiLindenLeaf className="leaf-icon" />
          <GiLindenLeaf className="leaf-icon" />
          <GiLindenLeaf className="leaf-icon" />
          <GiLindenLeaf className="leaf-icon" />
        </div>

        <h1>
          {currentPlan.date[0]}.{currentPlan.date[1]}.{currentPlan.date[2]}r.
        </h1>
      </div>
      <p></p>
      <div className="plan-details">
        <div className="plan-details-main">
          <div className="left">
            <div className="top-three">
              <h2>Top Three Prorities</h2>
              {currentPlan.topThree.map((item, index) => (
                <div className="top" key={index}>
                  <p className="plan-number">{index + 1}.</p>
                  <div className="plan-dotted">
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="leaf-border">
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
              <GiLindenLeaf className="leaf-icon" />
            </div>
            <div className="morning">
              <h2>Morning</h2>
              {currentPlan.morning.map((item, index) => (
                <CheckboxInput
                  keyName="morning"
                  index={index}
                  item={item}
                  handleCheck={handleCheckMorning}
                  id={id}
                  key={index + 1}
                />
              ))}
            </div>
          </div>
          <div className="right">
            <div className="afternoon">
              <h2>Afternoon</h2>
              {currentPlan.afternoon.map((item, index) => (
                <CheckboxInput
                  keyName="afternoon"
                  index={index}
                  item={item}
                  handleCheck={handleCheck}
                  id={id}
                  key={index + 1}
                />
              ))}
            </div>
            <div className="evening">
              <h2>Evening</h2>
              {currentPlan.evening.map((item, index) => (
                <CheckboxInput
                  keyName="evening"
                  index={index}
                  item={item}
                  handleCheck={handleCheckEvening}
                  id={id}
                  key={index + 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="btn-container">
          <Link to={`/edit/${currentPlan.id}`}>
            <button className="btn edit-btn">
              <AiOutlineEdit className="btn-icon" />
            </button>
          </Link>
          <button
            className="btn delete-btn"
            onClick={() => handleDelete(currentPlan.id)}
          >
            <AiFillDelete className="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
