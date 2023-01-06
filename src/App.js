import Home from "./pages/Home";
import About from "./pages/About";
import CreateAcc from "./pages/CreateAcc";
import AreaInfo from "./pages/AreaInfo";
import Login from "./pages/Login";
import PersonalDetails from "./pages/PersonalDetails";
import BuildFeed from "./pages/buildFeed/BuildFeed";
import BestForFamily from "./pages/BestForFamily";
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
          <Route path="/login" element={<Login />} />
          <Route path="/personaldetails" element={<PersonalDetails />} />
          <Route path="/buildfeed" element={<BuildFeed />} />
          <Route path="/bestforfamily" element={<BestForFamily />} />
          <Route path="/areainfo/:id" element={<AreaInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
