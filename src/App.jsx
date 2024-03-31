import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
//import About from "./Pages/About";
//import Contact from "./Pages/Contact";
//import Consulting from "./Pages/Consulting";
import Consult from "./Pages/Consult";
import ExercisePage from "./Pages/ExercisePage"; // Import ExercisePage component
import StarsCanvas from "./components/Stars";
import Navbar from "./components/navbar/navbar"; // Import Navbar component
import Footer from "./components/footer/footer";
//import StarsCanvas from "./components/Stars";
//import Consulting from "./Pages/Consulting";
//import Contact from "  ./Pages/Contact";
//import Singleex from "./Pages/Singleex";

function App() {
  return (
    <Router>
      <StarsCanvas />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/ExercisePage" element={<ExercisePage />} />
        <Route path="/Consult" element={<Consult />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <Switch>
//           <Route path="/ExercisePage" component={ExercisePage} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// export default function App() {
//   return (
//     <main>
//       React ⚛️ + Vite ⚡ + Replit
//     </main>
//   )
// }
