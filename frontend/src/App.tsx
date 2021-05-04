import Navbar from "assets/css/Componets/Navbar";
import DataTable from "assets/Componets/DataTable/indes";
import Footer from "assets/Componets/Footer";



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Hellow world</h1>
      </div>

      <DataTable />
      <Footer />
      
    </>
  );
}

export default App;
