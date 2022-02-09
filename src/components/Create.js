import { useState } from "react";
import { GiLindenLeaf } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import Input from "./Input";

const Create = ({ addPlan, allPlans }) => {
  const history = useHistory();

  const [day, setDay] = useState({
    value: "",
    isActive: false,
  });

  const [month, setMonth] = useState({
    value: "",
    isActive: false,
  });

  const [year, setYear] = useState({
    value: "",
    isActive: false,
  });

  const [top1, setTop1] = useState("");
  const [top2, setTop2] = useState("");
  const [top3, setTop3] = useState("");

  const [afternoon1, setAfternoon1] = useState("");
  const [afternoon2, setAfternoon2] = useState("");
  const [afternoon3, setAfternoon3] = useState("");
  const [afternoon4, setAfternoon4] = useState("");
  const [afternoon5, setAfternoon5] = useState("");
  const [afternoon6, setAfternoon6] = useState("");
  const [afternoon7, setAfternoon7] = useState("");
  const [afternoon8, setAfternoon8] = useState("");

  const [morning1, setMorning1] = useState("");
  const [morning2, setMorning2] = useState("");
  const [morning3, setMorning3] = useState("");
  const [morning4, setMorning4] = useState("");
  const [morning5, setMorning5] = useState("");
  const [morning6, setMorning6] = useState("");
  const [morning7, setMorning7] = useState("");
  const [morning8, setMorning8] = useState("");

  const [evening1, setEvening1] = useState("");
  const [evening2, setEvening2] = useState("");
  const [evening3, setEvening3] = useState("");
  const [evening4, setEvening4] = useState("");
  const [evening5, setEvening5] = useState("");

  const [isFinish, setIsFinish] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const checkDate = (e) => {
    if (e.target.className.includes("day")) {
      setDay({ ...day, value: e.target.value.slice(0, 2) });

      if (e.target.value.length === 2) {
        if (e.target.value > "31") {
          setDay({ ...day, value: String(31) });
        }
      }
    } else if (e.target.className.includes("month")) {
      setMonth({ ...month, value: e.target.value.slice(0, 2) });
      if (e.target.value.length === 2) {
        if (e.target.value > "12") {
          setMonth({ ...month, value: String(12) });
        }
      }
    } else if (e.target.className.includes("year")) {
      setYear({ ...year, value: e.target.value.slice(0, 4) });

      if (e.target.value.length === 4) {
        if (e.target.value >= new Date().getFullYear().toString()) {
          setYear({ ...year, value: e.target.value.slice(0, 4) });
        } else {
          setYear({ ...year, value: new Date().getFullYear().toString() });
        }
      }
    }
  };

  const handleFocusOut = (e) => {
    if (e.target.className.includes("day")) {
      if (day.value.length === 0 || day.value === "0") {
        setDay({ ...day, isActive: true });
      } else if (day.value.length === 1 && day.value !== "0") {
        setDay({ value: `0${e.target.value}`, isActive: false });
      } else {
        setDay({ ...day, isActive: false });
      }
    }

    if (e.target.className.includes("month")) {
      if (month.value.length === 0 || month.value === "0") {
        setMonth({ ...month, isActive: true });
      } else if (month.value.length === 1 && month.value !== "0") {
        setMonth({ value: `0${e.target.value}`, isActive: false });
      } else {
        setMonth({ ...month, isActive: false });
      }
    }

    if (e.target.className.includes("year")) {
      if (year.value.length !== 4) {
        setYear({ ...year, isActive: true });
      } else {
        setYear({ ...year, isActive: false });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = allPlans.length ? allPlans.length + 1 : 1;

    if (
      day.value.length === 2 &&
      month.value.length === 2 &&
      year.value.length === 4
    ) {
      setIsPending(true);
      setIsFinish(true);
    } else {
      if (day.value.length !== 2) {
        setDay({ ...day, isActive: true });
      } else {
        setDay({ ...day, isActive: false });
      }

      if (month.value.length !== 2) {
        setMonth({ ...month, isActive: true });
      } else {
        setMonth({ ...month, isActive: false });
      }

      if (year.value.length !== 4) {
        setYear({ ...year, isActive: true });
      } else {
        setYear({ ...year, isActive: false });
      }

      setIsFinish(false);
      setIsPending(false);

      setTimeout(() => {
        setIsFinish(true);
      }, 2000);
      return;
    }

    const newPlan = {
      id,
      backgroundId: Math.floor(Math.random() * 9),
      date: [day.value, month.value, year.value],
      topThree: [top1.trim(), top2.trim(), top3.trim()].sort(
        (a, b) => (a === "") - (b === "")
      ),
      afternoon: [
        { checked: false, item: afternoon1 },
        { checked: false, item: afternoon2 },
        { checked: false, item: afternoon3 },
        { checked: false, item: afternoon4 },
        { checked: false, item: afternoon5 },
        { checked: false, item: afternoon6 },
        { checked: false, item: afternoon7 },
        { checked: false, item: afternoon8 },
      ].sort((a, b) => (a.item === "") - (b.item === "")),
      morning: [
        { checked: false, item: morning1 },
        { checked: false, item: morning2 },
        { checked: false, item: morning3 },
        { checked: false, item: morning4 },
        { checked: false, item: morning5 },
        { checked: false, item: morning6 },
        { checked: false, item: morning7 },
        { checked: false, item: morning8 },
      ].sort((a, b) => (a.item === "") - (b.item === "")),
      evening: [
        { checked: false, item: evening1 },
        { checked: false, item: evening2 },
        { checked: false, item: evening3 },
        { checked: false, item: evening4 },
        { checked: false, item: evening5 },
      ].sort((a, b) => (a.item === "") - (b.item === "")),
    };

    setTimeout(() => {
      addPlan(newPlan); // tutaj wykonuje się kod z App()
      setIsPending(false);
      history.push("/");
    }, 1500);
  };

  return (
    <div className="create-plan">
      <h1>to do!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="left">
            <div className="date">
              <GiLindenLeaf className="leaf-icon" />
              <input
                type="number"
                className={`date-day ${day.isActive ? "date-red" : ""}`}
                placeholder="dd"
                maxLength={2}
                value={day.value}
                onChange={(e) => checkDate(e)}
                onBlur={handleFocusOut}
              />
              <p>/</p>
              <input
                type="text"
                className={`date-month ${month.isActive ? "date-red" : ""}`}
                placeholder="mm"
                maxLength={2}
                value={month.value}
                onChange={(e) => checkDate(e)}
                onBlur={handleFocusOut}
              />
              <p>/</p>
              <input
                type="text"
                className={`date-year ${year.isActive ? "date-red" : ""}`}
                placeholder="yyyy"
                maxLength={4}
                value={year.value}
                onChange={(e) => checkDate(e)}
                onBlur={handleFocusOut}
              />
            </div>
            <div className="top-three">
              <h2>Top Three Prorities</h2>
              <div className="top top1">
                <label className="label-top">1. </label>
                <input
                  type="text"
                  value={top1}
                  onChange={(e) => setTop1(e.target.value)}
                />
              </div>
              <div className="top top2">
                <label className="label-top">2. </label>
                <input
                  type="text"
                  value={top2}
                  onChange={(e) => setTop2(e.target.value)}
                />
              </div>
              <div className="top top3">
                <label className="label-top">3. </label>
                <input
                  type="text"
                  value={top3}
                  onChange={(e) => setTop3(e.target.value)}
                />
              </div>
            </div>
            <div className="morning">
              <h2>Morning</h2>
              <Input
                className="morning-item"
                value={morning1}
                setValue={setMorning1}
              />
              <Input
                className="morning-item"
                value={morning2}
                setValue={setMorning2}
              />
              <Input
                className="morning-item"
                value={morning3}
                setValue={setMorning3}
              />
              <Input
                className="morning-item"
                value={morning4}
                setValue={setMorning4}
              />
              <Input
                className="morning-item"
                value={morning5}
                setValue={setMorning5}
              />
              <Input
                className="morning-item"
                value={morning6}
                setValue={setMorning6}
              />
              <Input
                className="morning-item"
                value={morning7}
                setValue={setMorning7}
              />
              <Input
                className="morning-item"
                value={morning8}
                setValue={setMorning8}
              />
            </div>
          </div>
          <div className="right">
            <div className="afternoon">
              <h2>Afternoon</h2>
              <Input
                className="afternoon-item"
                value={afternoon1}
                setValue={setAfternoon1}
              />
              <Input
                className="afternoon-item"
                value={afternoon2}
                setValue={setAfternoon2}
              />
              <Input
                className="afternoon-item"
                value={afternoon3}
                setValue={setAfternoon3}
              />
              <Input
                className="afternoon-item"
                value={afternoon4}
                setValue={setAfternoon4}
              />
              <Input
                className="afternoon-item"
                value={afternoon5}
                setValue={setAfternoon5}
              />
              <Input
                className="afternoon-item"
                value={afternoon6}
                setValue={setAfternoon6}
              />
              <Input
                className="afternoon-item"
                value={afternoon7}
                setValue={setAfternoon7}
              />
              <Input
                className="afternoon-item"
                value={afternoon8}
                setValue={setAfternoon8}
              />
            </div>
            <div className="evening">
              <h2>Evening</h2>
              <Input
                className="evening-item"
                value={evening1}
                setValue={setEvening1}
              />
              <Input
                className="evening-item"
                value={evening2}
                setValue={setEvening2}
              />
              <Input
                className="evening-item"
                value={evening3}
                setValue={setEvening3}
              />
              <Input
                className="evening-item"
                value={evening4}
                setValue={setEvening4}
              />
              <Input
                className="evening-item"
                value={evening5}
                setValue={setEvening5}
              />
            </div>
          </div>
        </div>

        <button
          className={`btn create-btn ${!isPending ? "btn-hover" : ""}`}
          disabled={isPending ? true : false}
        >
          {isPending ? "Added..." : "Add!"}
        </button>

        <div className={`error-msg ${!isFinish ? "hidden" : ""}`}>
          <h2>Input correct data, please.</h2>
        </div>
      </form>
    </div>
  );
};

export default Create;
