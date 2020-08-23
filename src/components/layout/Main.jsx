
import PropTypes from 'prop-types';

export const MainContainer = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            width: 100%;
            padding-top: 74px;
            padding-left: 30px;
            padding-right: 50px;
            height: 100vh;
            position: relative;
            border-left: 1px solid #ededed;
            background: inherit;
            display: flex;
            flex-direction: column;
          }
          @media screen and (max-width: 600px) {
            {

            }
          }

        `
      }
    </style>
  </div>
)
MainContainer.propTypes = {
  children: PropTypes.node
}
