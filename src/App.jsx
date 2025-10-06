import { Header } from "./Components/Header";
import { AllRoutes } from "./Routes/AllRoutes";
import { Footer } from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="mx-10 my-5">
        <AllRoutes />
        <Footer />
      </section>

      
    </>
  );
}

export default App;
