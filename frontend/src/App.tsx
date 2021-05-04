
import BarChart from "Componets/BarChart";
import DataTable from "Componets/DataTable";
import DonutChart from "Componets/DonutChart";
import Footer from "Componets/Footer";
import Navbar from "Componets/Navbar";
import React from "react";



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard De Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>
        <DataTable/>
        </div>

        <Footer />
        

    </>
  );
}

export default App;
