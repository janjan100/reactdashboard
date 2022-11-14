import logo from "./logo.svg";
import "./App.css";
import About from "./pages/about/about";
import Info from "./pages/info/info";
import Home from "./pages/home/home";
import Intro from "./pages/intro/intro";
import Navigation from "./components/navigation";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  console.log("current URL 👉️", window.location.href);
  console.log("current Pathname 👉️", window.location.pathname);

  // 👇️ with React router
  const location = useLocation();
  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);
  return (
    <div className="App">
      {location.pathname !== "/" ? <Navigation></Navigation> : ""}
      <Routes>
        {/* <Route path="/" element={<Dashboard />}>
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route> */}
        <Route path="/" element={<Intro />}></Route>
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
