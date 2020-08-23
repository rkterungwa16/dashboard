import { useState } from 'react';
import PropTypes from 'prop-types';

import { NavbarContainer } from "../components/layout/Navbar";
import { Sidebar } from "../views/Sidebar";
import { Main } from "../views/Main";

export const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <NavbarContainer openSideBar={() => {
        setOpen(!isOpen)
      }} />
      <ViewContainer>
        <Sidebar isOpen={isOpen} />
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
