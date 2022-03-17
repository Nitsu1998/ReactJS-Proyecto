import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailCointainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/Cart" />
          <Route path="/Species/:specie" element={<ItemListContainer/>}/>
          <Route path="/Status/:status" element={<ItemListContainer/>}/>
          <Route path="/Item/:id" element={<ItemDetailCointainer/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}