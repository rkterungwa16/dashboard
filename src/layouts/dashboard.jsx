import PropTypes from 'prop-types';

import { NavbarContainer } from "../components/layout.components/Navbar";
import { Sidebar } from "../views/Sidebar";
import { Main } from "../views/Main";

export const Dashboard = () => {
  return (
    <div>
      <NavbarContainer />
      <ViewContainer>
        <Sidebar />
        <Main />
      </ViewContainer>
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

export const ViewContainer = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            width: 100vw;
            display: flex;
          }
        `
      }
    </style>
  </div>
)

ViewContainer.propTypes = {
  children: PropTypes.node
}
