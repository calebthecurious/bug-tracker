import React, { useState, useEffect } from "react";

import "./CurrentIssue.css";

function CurrentIssue() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="current-issues">
      <div className="single-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assign <span>Username</span>{" "}
        </p>

        <p>
          Priority <span>High</span>
        </p>
        <p>Description</p>
        <p className="description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quaerat consequatur ex nihil perferendis suscipit corporis unde
          reprehenderit iusto veritatis neque doloribus quasi repudiandae ad
          ullam tempora sit quibusdam, libero, asperiores cumque? Placeat
          corrupti molestiae autem beatae blanditiis ex nam.
        </p>
        <hr />
      </div>
      <div className="single-issue">
        <p className="close-issue">Close Issue</p>
        <p>
          Assign <span>Username</span>{" "}
        </p>

        <p>
          Priority <span>High</span>
        </p>
        <p>Description</p>
        <p className="description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quaerat consequatur ex nihil perferendis suscipit corporis unde
          reprehenderit iusto veritatis neque doloribus quasi repudiandae ad
          ullam tempora sit quibusdam, libero, asperiores cumque? Placeat
          corrupti molestiae autem beatae blanditiis ex nam.
        </p>
        <hr />
      </div>
    </div>
  );
}

export default CurrentIssue;
