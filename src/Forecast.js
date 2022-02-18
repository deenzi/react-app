import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <h4>MO☀</h4>
        </div>
        <div className="col-2">
          <h4>TUE☀</h4>
        </div>
        <div className="col-2">
          <h4>WED☀</h4>
        </div>
        <div className="col-2">
          <h4>THU☀</h4>
        </div>
        <div className="col-2">
          <h4>FRI☀</h4>
        </div>
      </div>
    </div>
  );
}
