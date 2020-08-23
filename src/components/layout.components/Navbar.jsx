import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';

import { Icon } from '../shared.components/Icon';

export const NavbarContainer = (props) => {
  return (
    <nav>
      <BarsIcon />
      <CompanyLogoMobile />
      <UserImageMobile />
      <NavbarLeftSubContainer>
        <CompanyLogo />
        <NavbarSearchItem>
          <SearchIcon />
          <SearchInput />
        </NavbarSearchItem>
      </NavbarLeftSubContainer>

      <NavbarRightSubContainer>
        <Text content="Support" />
        <Text content="FAQ" />
        <NotificationWrapper>
          <NotificationIcon />
          <NotificationText />
        </NotificationWrapper>
        <NavbarUserItem>
          <UserTexts>
            <GreetingText />
            <FullnameText />
          </UserTexts>
          <UserImage />
        </NavbarUserItem>
      </NavbarRightSubContainer>
      <style jsx>
        {
          `
            {
              box-sizing: border-box;
              height: 44px;
              top: 0;
              position: fixed;
              z-index: 999;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              background: #FFFFFF;
              box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
            }
            @media screen and (max-width: 600px) {
              {
                justify-content: space-around;
              }
            }
          `
        }
      </style>
    </nav>
  )
}

NavbarContainer.propTypes = {
  children: PropTypes.node
}

export const NavbarLeftSubContainer = (props) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {
          `
            {
              margin-left: 30px;
              display: flex;
            }
            @media screen and (max-width: 600px) {
              { display: none; }
            }
          `
        }
      </style>
    </div>
  )
}

NavbarLeftSubContainer.propTypes = {
  children: PropTypes.node
}

export const CompanyLogo = () => {
  return (
    <img
      src="https://res.cloudinary.com/doy0uyv63/image/upload/v1598122068/TransMonitor_pttgid.png"
      alt="Logo"
    />
  )
}

export const CompanyLogoMobile = () => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/doy0uyv63/image/upload/v1598122068/TransMonitor_pttgid.png"
        alt="Logo"
      />
      <style jsx>
        {
          `
            {
              display: none;
            }
            @media screen and (max-width: 600px) {
              { display: block; }
            }
          `
        }
      </style>
    </>
  )
}

export const NavbarSearchItem = (props) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {
          `
            {
              display: flex;
              align-items: center;
              margin-left: 100px;
            }
            @media screen and (max-width: 600px) {
              { display: none; }
            }
          `
        }
      </style>
    </div>
  )
}

NavbarSearchItem.propTypes = {
  children: PropTypes.node
}

export const SearchIcon = () => {
  return (
    <Icon
      width="10px"
      height="10px"
      url="https://res.cloudinary.com/doy0uyv63/image/upload/v1598122745/Search_mvacgp.png"
      alt="Logo"
    />
  )
}

export const SearchInput = () => {
  return (
    <>
      <input placeholder="Search" />
      <style jsx>
        {
          `
            {
              border: none;
              outline: none;
              margin-left: 7px;
            }
            ::placeholder {
              font-family: Segoe UI;
              font-size: 12px;
              line-height: 16px;
              color: #979797;
            }
          `
        }
      </style>
    </>
  )
}

export const NavbarRightSubContainer = (props) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {
          `
            {
              margin-right: 30px;
              display: flex;
              width: 40%;
              align-items: center;
              justify-content: space-around;
            }

            @media screen and (max-width: 600px) {
              { display: none; }
            }
          `
        }
      </style>
    </div>
  )
}

NavbarRightSubContainer.propTypes = {
  children: PropTypes.node
}

export const Text = (props) => {
  return (
    <span>
      {props.content}
      <style jsx>
        {
          `
            {
              font-family: Segoe UI;
              font-size: 14px;
              line-height: 19px;
              color: #647787;
            }
          `
        }
      </style>
    </span>
  )
}

Text.propTypes = {
  content: PropTypes.string
}

export const NotificationWrapper = (props) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {
          `
            {

            }
          `
        }
      </style>
    </div>
  )
}

NotificationWrapper.propTypes = {
  children: PropTypes.node
}

export const NotificationIcon = () => {
  return (
    <Icon
      url="https://res.cloudinary.com/doy0uyv63/image/upload/v1598129001/bell-53_hswl85.png"
      alt="Notification"
    />
  )
}

export const NotificationText = () => {
  return (
    <span>
      8
      <style jsx>
        {
          `
          {
            position: absolute;
            font-family: Segoe UI;
            line-height: 13px;
            display: flex;
            align-items: flex-end;
            text-align: center;
            background-color: #1860EC;
            color: #FCFDFF;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            font-size: 9px;
            display: flex;
            justify-content: center;
            right: 307px;
            top: 10px;
          }
        `
        }
      </style>
    </span>
  )
}

export const NavbarUserItem = (props) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {
          `
            {
              display: flex;
            }
          `
        }
      </style>
    </div>
  )
}

NavbarUserItem.propTypes = {
  children: PropTypes.node
}

export const UserTexts = props => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            flex-direction: column;
            margin-right: 5px;
          }
        `
      }
    </style>
  </div>
);

UserTexts.propTypes = {
  children: PropTypes.node
}

export const UserImage = () => (
  <>
    <img
      height="40px"
      width="40px"
      src="https://res.cloudinary.com/doy0uyv63/image/upload/v1598130902/IMG-20180413-WA0005_1_oab7jz.png"
      alt="User"
    />
    <style jsx>
      {
        `
        {
          border-radius: 50%;
        }
      `
      }
    </style>
  </>
)

export const UserImageMobile = () => (
  <>
    <img
      height="40px"
      width="40px"
      src="https://res.cloudinary.com/doy0uyv63/image/upload/v1598130902/IMG-20180413-WA0005_1_oab7jz.png"
      alt="UserMobile"
    />
    <style jsx>
      {
        `
        {
          display: none;
        }
        @media screen and (max-width: 600px) {
          {
            display: block;
            border-radius: 50%;
          }
        }
      `
      }
    </style>
  </>
)

export const GreetingText = () => (
  <span>
    Hello
    <style jsx>
      {

        `
        {
          font-family: Segoe UI;
          font-size: 10px;
          line-height: 13px;
          text-align: center;
          display: flex;
          justify-content: flex-end;
          color: #647787;
        }
        `
      }
    </style>
  </span>
)

export const FullnameText = () => (
  <span>
    Oluwaleke Ojo
    <style jsx>
      {

        `
        {
          font-family: Segoe UI;
          font-size: 14px;
          line-height: 19px;

          display: flex;
          justify-content: flex-end;
          text-align: center;
          color: #647787;
        }
        `
      }
    </style>
  </span>
)

export const BarsIcon = () => (
  <span>
    <FaBars />
    <style jsx>
      {
        `
          {
            display: none
          }
          @media screen and (max-width: 600px) {
            { display: block; }
          }
        `
      }
    </style>
  </span>
)
