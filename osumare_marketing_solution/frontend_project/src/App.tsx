import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";

function App() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Navbar />
      <Hero openForm={() => setOpenForm(true)} />
      <Features />
      <Testimonials />
      <Footer />

      {openForm && <PopupForm close={() => setOpenForm(false)} />}
    </>
  );
}

export default App;
