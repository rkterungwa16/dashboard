import PropTypes from 'prop-types';


export const NavbarContainer = (props) => {
  return (
    <nav>
      <NavbarLeftSubContainer>
        <CompanyLogo />
        <NavbarSearchItem>
          <SearchIcon />
          <SearchInput />
        </NavbarSearchItem>
      </NavbarLeftSubContainer>
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
              width: 100vw;
              background: #FFFFFF;
              box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
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
          `
        }
      </style>
    </div>
  )
}

NavbarLeftSubContainer.propTypes = {
  children: PropTypes.node
}

export const NavbarRightSubContainer = () => {
  return (
    <div>
      <style jsx>
        {
          `
            {
              margin-right: 30px;
              display: flex;
            }
          `
        }
      </style>
    </div>
  )
}

export const CompanyLogo = () => {
  return (
    <img
      src="https://res.cloudinary.com/doy0uyv63/image/upload/v1598122068/TransMonitor_pttgid.png"
      alt="Logo"
    />
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
    <img
      width="10px"
      height="10px"
      src="https://res.cloudinary.com/doy0uyv63/image/upload/v1598122745/Search_mvacgp.png"
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
