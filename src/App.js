import Home from "./pages/Home";
import About from "./pages/About";
import CreateAcc from "./pages/CreateAcc";
import PersonalDetails from "./pages/PersonalDetails";
import styles from "./sass/wrapper.module.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/createaccount" element={<CreateAcc />} />
          <Route path="/personaldetails" element={<PersonalDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
