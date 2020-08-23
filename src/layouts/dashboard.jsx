import { NavbarContainer } from "../components/layout.components/Navbar";
import { Sidebar } from "../views/Sidebar";

export const Dashboard = () => {
  return (
    <div>
      <NavbarContainer />
      <Sidebar />
      <style jsx>
        {
          `
            {
              width: 100vw;
            }
          `
        }
      </style>
    </div>
  )
}
