import Navbar from "./components/Navbar";
import PlannerList from "./components/PlannerList";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import PlanDetails from "./components/PlanDetails";
import EditPlan from "./components/EditPlan";
import loader from "./img/loader.gif";
import Footer from "./components/Footer";

function App() {
  const [allPlans, setAllPlans] = useState(
    JSON.parse(localStorage.getItem("plannerList")) || []
  );

  const [isLoading, setIsLoading] = useState(false);

  const addPlan = (plan) => {
    setAllPlans([plan, ...allPlans]);
  };

  const handleCheck = (id, indexArr) => {
    const findCurrPlan = allPlans.find((plan) => plan.id.toString() === id);

    const findAft = findCurrPlan.afternoon.map((item, id) =>
      id === indexArr ? { ...item, checked: !item.checked } : item
    );

    const listPlans = allPlans.map((plan) => {
      return plan.id.toString() === id ? { ...plan, afternoon: findAft } : plan;
    });

    setAllPlans(listPlans);

    // do API
    // const myItem = listPlans.filter((item) => item.id.toString() === id);
    // // console.log(myItem);
    // const updateOptions = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ afternoon: myItem[0].afternoon }),
    // };
    // const reqUrl = `${API_URL}/${id}`;
    // const result = await apiRequest(reqUrl, updateOptions);
  };

  const handleCheckMorning = (id, indexArr) => {
    const findCurrPlan = allPlans.find((plan) => plan.id.toString() === id);

    const findMorning = findCurrPlan.morning.map((item, id) =>
      id === indexArr ? { ...item, checked: !item.checked } : item
    );

    const listPlans = allPlans.map((plan) => {
      return plan.id.toString() === id
        ? { ...plan, morning: findMorning }
        : plan;
    });

    setAllPlans(listPlans);
  };

  const handleCheckEvening = (id, indexArr) => {
    const findCurrPlan = allPlans.find((plan) => plan.id.toString() === id);
    const findEvening = findCurrPlan.evening.map((item, id) =>
      id === indexArr ? { ...item, checked: !item.checked } : item
    );

    const listPlans = allPlans.map((plan) =>
      plan.id.toString() === id ? { ...plan, evening: findEvening } : plan
    );

    setAllPlans(listPlans);
  };

  useEffect(() => {
    allPlans.length ? setIsLoading(true) : setIsLoading(false);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [allPlans]);

  useEffect(() => {
    localStorage.setItem("plannerList", JSON.stringify(allPlans));
  }, [allPlans]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <div className="planner-list">
                <h2>My plans</h2>
                {isLoading && (
                  <div className="loader-container">
                    <img src={loader} className="loader-img"></img>
                  </div>
                )}
                {!isLoading && <PlannerList allPlans={allPlans} />}
              </div>
            </Route>
            <Route path="/create">
              <Create addPlan={addPlan} allPlans={allPlans} />
            </Route>
            <Route path="/plans/:id">
              <PlanDetails
                allPlans={allPlans}
                setAllPlans={setAllPlans}
                handleCheck={handleCheck}
                handleCheckMorning={handleCheckMorning}
                handleCheckEvening={handleCheckEvening}
              />
            </Route>
            <Route path="/edit/:id">
              <EditPlan allPlans={allPlans} setAllPlans={setAllPlans} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
