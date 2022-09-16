import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import logo from "../../assets/logo.png";
import "./index.scss";
export default function Layout() {
  return (
    <div className="layout-content-flex">
      <header>
        <div className="layout-center-flex">
          <div className="img-flex">
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
      <div className="layout-main-flex">
        <nav className="layout-main-left">
          <Sidebar></Sidebar>
        </nav>
        <main className="layout-main-center">
          <div className="content">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
