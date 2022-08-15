import React, { useState, useEffect } from "react";

import "./AddIssue.css";

function AddIssue() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="add-issue">
      <form>
        <label>
          Description
          <input type="text" placeholder="Description of issue..." />
        </label>
        <label>
          Assign To
          <select name="forDev" id="forDev">
            <option value="Caleb">Caleb</option>
            <option value="Jason">Jason</option>
            <option value="Metody">Metody</option>
            <option value="Renee">Renee</option>
            <option value="Jack">Jack</option>
          </select>
        </label>
        <label>
          Priority
          <select name="priority" id="priority">
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="Not">Not Important</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
