import React, { useState } from "react";

import "./AddIssue.css";

function AddIssue() {
  const [desc, setDesc] = useState(true);
  const [dev, setDev] = useState(true);
  const [priority, setPriority] = useState(true);

  const addToLocalStorage = () => {
    let newIssue = {
      desc: desc,
      dev: dev,
      priority: priority,
    };

    localStorage.getItem("issues");

    localStorage.setItem("issues", JSON.stringify(newIssue));
  };

  return (
    <div className="add-issue">
      <form>
        <label>
          Description
          <input
            id="description"
            type="text"
            placeholder="Description of issue..."
            onKeyUp={() =>
              setDesc(document.getElementById("description").value)
            }
          />
        </label>
        <label>
          Assign To
          <select
            name="forDev"
            id="forDev"
            onChange={() => setDev(document.getElementById("forDev").value)}
          >
            <option value="Caleb">Caleb</option>
            <option value="Jason">Jason</option>
            <option value="Metody">Metody</option>
            <option value="Renee">Renee</option>
            <option value="Jack">Jack</option>
          </select>
        </label>
        <label>
          Priority
          <select
            name="priority"
            id="priority"
            onChange={() =>
              setPriority(document.getElementById("priority").value)
            }
          >
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="Not">Not Important</option>
          </select>
        </label>
        <button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            addToLocalStorage();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddIssue;
