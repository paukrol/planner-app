import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GiLindenLeaf } from "react-icons/gi";
import { useEffect } from "react/cjs/react.development";
import Input from "./Input";

const EditPlan = ({ allPlans, setAllPlans }) => {
  const { id } = useParams();
  const history = useHistory();

  const [editDay, setEditDay] = useState("");
  const [editMonth, setEditMonth] = useState("");
  const [editYear, setEditYear] = useState("");

  const [editTop1, setEditTop1] = useState("");
  const [editTop2, setEditTop2] = useState("");
  const [editTop3, setEditTop3] = useState("");

  const [editAfternoon1, setEditAfternoon1] = useState("");
  const [editAfternoon2, setEditAfternoon2] = useState("");
  const [editAfternoon3, setEditAfternoon3] = useState("");
  const [editAfternoon4, setEditAfternoon4] = useState("");
  const [editAfternoon5, setEditAfternoon5] = useState("");
  const [editAfternoon6, setEditAfternoon6] = useState("");
  const [editAfternoon7, setEditAfternoon7] = useState("");
  const [editAfternoon8, setEditAfternoon8] = useState("");

  const [editMorning1, setEditMorning1] = useState("");
  const [editMorning2, setEditMorning2] = useState("");
  const [editMorning3, setEditMorning3] = useState("");
  const [editMorning4, setEditMorning4] = useState("");
  const [editMorning5, setEditMorning5] = useState("");
  const [editMorning6, setEditMorning6] = useState("");
  const [editMorning7, setEditMorning7] = useState("");
  const [editMorning8, setEditMorning8] = useState("");

  const [editEvening1, setEditEvening1] = useState("");
  const [editEvening2, setEditEvening2] = useState("");
  const [editEvening3, setEditEvening3] = useState("");
  const [editEvening4, setEditEvening4] = useState("");
  const [editEvening5, setEditEvening5] = useState("");

  const editPlan = allPlans.find((plan) => plan.id.toString() === id);

  useEffect(() => {
    if (editPlan) {
      setEditDay(editPlan.date[0]);
      setEditMonth(editPlan.date[1]);
      setEditYear(editPlan.date[2]);

      setEditTop1(editPlan.topThree[0]);
      setEditTop2(editPlan.topThree[1]);
      setEditTop3(editPlan.topThree[2]);

      setEditAfternoon1(editPlan.afternoon[0].item);
      setEditAfternoon2(editPlan.afternoon[1].item);
      setEditAfternoon3(editPlan.afternoon[2].item);
      setEditAfternoon4(editPlan.afternoon[3].item);
      setEditAfternoon5(editPlan.afternoon[4].item);
      setEditAfternoon6(editPlan.afternoon[5].item);
      setEditAfternoon7(editPlan.afternoon[6].item);
      setEditAfternoon8(editPlan.afternoon[7].item);

      setEditMorning1(editPlan.morning[0].item);
      setEditMorning2(editPlan.morning[1].item);
      setEditMorning3(editPlan.morning[2].item);
      setEditMorning4(editPlan.morning[3].item);
      setEditMorning5(editPlan.morning[4].item);
      setEditMorning6(editPlan.morning[5].item);
      setEditMorning7(editPlan.morning[6].item);
      setEditMorning8(editPlan.morning[7].item);

      setEditEvening1(editPlan.evening[0].item);
      setEditEvening2(editPlan.evening[1].item);
      setEditEvening3(editPlan.evening[2].item);
      setEditEvening4(editPlan.evening[3].item);
      setEditEvening5(editPlan.evening[4].item);
    }
  }, [editPlan]);

  const handleEdit = (e) => {
    e.preventDefault();

    // const id = allPlans.length ? allPlans.length + 1 : 1;
    const updatedPlan = {
      ...editPlan,
      date: [editDay, editMonth, editYear],
      topThree: [editTop1.trim(), editTop2.trim(), editTop3.trim()].sort(
        (a, b) => (a === "") - (b === "")
      ),
      afternoon: [
        {
          checked: editPlan.afternoon[0].checked ? true : false,
          item: editAfternoon1,
        },
        {
          checked: editPlan.afternoon[1].checked ? true : false,
          item: editAfternoon2,
        },
        {
          checked: editPlan.afternoon[2].checked ? true : false,
          item: editAfternoon3,
        },
        {
          checked: editPlan.afternoon[3].checked ? true : false,
          item: editAfternoon4,
        },
        {
          checked: editPlan.afternoon[4].checked ? true : false,
          item: editAfternoon5,
        },
        {
          checked: editPlan.afternoon[5].checked ? true : false,
          item: editAfternoon6,
        },
        {
          checked: editPlan.afternoon[6].checked ? true : false,
          item: editAfternoon7,
        },
        {
          checked: editPlan.afternoon[7].checked ? true : false,
          item: editAfternoon8,
        },
      ].sort((a, b) => (a.item === "") - (b.item === "")),
      morning: [
        {
          checked: editPlan.morning[0].checked ? true : false,
          item: editMorning1,
        },
        {
          checked: editPlan.morning[1].checked ? true : false,
          item: editMorning2,
        },
        {
          checked: editPlan.morning[2].checked ? true : false,
          item: editMorning3,
        },
        {
          checked: editPlan.morning[3].checked ? true : false,
          item: editMorning4,
        },
        {
          checked: editPlan.morning[4].checked ? true : false,
          item: editMorning5,
        },
        {
          checked: editPlan.morning[5].checked ? true : false,
          item: editMorning6,
        },
        {
          checked: editPlan.morning[6].checked ? true : false,
          item: editMorning7,
        },
        {
          checked: editPlan.morning[7].checked ? true : false,
          item: editMorning8,
        },
      ].sort((a, b) => (a.item === "") - (b.item === "")),
      evening: [
        {
          checked: editPlan.evening[0].checked ? true : false,
          item: editEvening1,
        },
        {
          checked: editPlan.evening[1].checked ? true : false,
          item: editEvening2,
        },
        {
          checked: editPlan.evening[2].checked ? true : false,
          item: editEvening3,
        },
        {
          checked: editPlan.evening[3].checked ? true : false,
          item: editEvening4,
        },
        {
          checked: editPlan.evening[4].checked ? true : false,
          item: editEvening5,
        },
      ].sort((a, b) => (a.item === "") - (b.item === "")),
    };

    setTimeout(() => {
      setAllPlans(
        allPlans.map((plan) =>
          plan.id.toString() === id ? { ...updatedPlan } : plan
        )
      );
      history.push("/");
    }, 1000);
  };

  return (
    <div className="create-plan edit-plan">
      <h1>Edit a plan!</h1>
      <form className="create-form" onSubmit={handleEdit}>
        <div className="form-container">
          <div className="left">
            <div className="date">
              <GiLindenLeaf className="leaf-icon" />
              <input
                type="text"
                className="date-day"
                placeholder="dd"
                maxLength={2}
                value={editDay}
                onChange={(e) => setEditDay(e.target.value)}
              />
              <p>/</p>
              <input
                type="text"
                className="date-month"
                placeholder="mm"
                maxLength={2}
                value={editMonth}
                onChange={(e) => setEditMonth(e.target.value)}
              />
              <p>/</p>
              <input
                type="text"
                className="date-year"
                placeholder="yyyy"
                maxLength={4}
                value={editYear}
                onChange={(e) => setEditYear(e.target.value)}
              />
            </div>
            <div className="top-three">
              <h2>Top Three Prorities</h2>
              <div className="top top1">
                <label className="label-top">1. </label>
                <input
                  type="text"
                  value={editTop1}
                  onChange={(e) => setEditTop1(e.target.value)}
                />
              </div>
              <div className="top top2">
                <label className="label-top">2. </label>
                <input
                  type="text"
                  value={editTop2}
                  onChange={(e) => setEditTop2(e.target.value)}
                />
              </div>
              <div className="top top3">
                <label className="label-top">3. </label>
                <input
                  type="text"
                  value={editTop3}
                  onChange={(e) => setEditTop3(e.target.value)}
                />
              </div>
            </div>
            <div className="morning">
              <h2>Morning</h2>
              <Input
                className="morning-item"
                value={editMorning1}
                setValue={setEditMorning1}
              />
              <Input
                className="morning-item"
                value={editMorning2}
                setValue={setEditMorning2}
              />
              <Input
                className="morning-item"
                value={editMorning3}
                setValue={setEditMorning3}
              />
              <Input
                className="morning-item"
                value={editMorning4}
                setValue={setEditMorning4}
              />
              <Input
                className="morning-item"
                value={editMorning5}
                setValue={setEditMorning5}
              />
              <Input
                className="morning-item"
                value={editMorning6}
                setValue={setEditMorning6}
              />
              <Input
                className="morning-item"
                value={editMorning7}
                setValue={setEditMorning7}
              />
              <Input
                className="morning-item"
                value={editMorning8}
                setValue={setEditMorning8}
              />
            </div>
          </div>
          <div className="right">
            <div className="afternoon">
              <h2>Afternoon</h2>
              <Input
                className="afternoon-item"
                value={editAfternoon1}
                setValue={setEditAfternoon1}
              />
              <Input
                className="afternoon-item"
                value={editAfternoon2}
                setValue={setEditAfternoon2}
              />
              <Input
                className="afternoon-item"
                value={editAfternoon3}
                setValue={setEditAfternoon3}
              />
              <Input
                className="afternoon-item"
                value={editAfternoon4}
                setValue={setEditAfternoon4}
              />
              <Input
                className="afternoon-item"
                value={editAfternoon5}
                setValue={setEditAfternoon5}
              />
              <Input
                className="afternoon-item"
                value={editAfternoon6}
                setValue={setEditAfternoon6}
              />
              <Input
                className="afternoon-item"
                value={editAfternoon7}
                setValue={setEditAfternoon7}
              />
              <Input
                className="afternoon-item"
                value={editAfternoon8}
                setValue={setEditAfternoon8}
              />
            </div>

            <div className="evening">
              <h2>Evening</h2>
              <Input
                className="evening-item"
                value={editEvening1}
                setValue={setEditEvening1}
              />
              <Input
                className="evening-item"
                value={editEvening2}
                setValue={setEditEvening2}
              />
              <Input
                className="evening-item"
                value={editEvening3}
                setValue={setEditEvening3}
              />
              <Input
                className="evening-item"
                value={editEvening4}
                setValue={setEditEvening4}
              />
              <Input
                className="evening-item"
                value={editEvening5}
                setValue={setEditEvening5}
              />
            </div>
          </div>
        </div>

        <button className="btn edit-btn">Edit!</button>
      </form>
    </div>
  );
};

export default EditPlan;
