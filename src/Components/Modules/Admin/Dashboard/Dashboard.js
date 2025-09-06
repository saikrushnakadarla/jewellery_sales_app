import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../../Pages/Navbar/Navbar";

function Dashboard() {
  // Dummy data
  const customersCount = 120;
  const salespersonsCount = 15;

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Dashboard</h2>
      <div className="row">
        {/* Customers Card */}
        <div className="col-md-6">
          <div className="card shadow-sm text-center p-4">
            <h4 className="card-title">Customers</h4>
            <p className="display-4 fw-bold text-primary">{customersCount}</p>
          </div>
        </div>

        {/* Salespersons Card */}
        <div className="col-md-6">
          <div className="card shadow-sm text-center p-4">
            <h4 className="card-title">Salespersons</h4>
            <p className="display-4 fw-bold text-success">{salespersonsCount}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
