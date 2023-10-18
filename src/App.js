import DashboardDetail from "./components/CustomerOverallSummary/DashboardDetail";
import React from "react";
import CustomerDataSummary from "./components/CustomerDataSummary";
import "./Style.css";
function App() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2 h-100 container-fluid" style={{ backgroundColor: "#4040c2" }}>
            <CustomerDataSummary />
          </div>
          <div className="col-10 h-100">
            <DashboardDetail />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
