import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import styles from "@/app.module.scss";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
