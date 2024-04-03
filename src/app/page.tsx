import styles from "./page.module.css";
import Dashboard from "@/app/dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";

export default function Home() {
  return (
    <main className={styles.main}>
     <Header />
     <SideMenu />
     <Dashboard />
    </main>
  );
}
