import PropTypes from 'prop-types';

export const Card = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            background: #FFFFFF;
            border: 1px solid #EEF8FD;
            box-sizing: border-box;
            border-radius: 2px;
            padding: 20px;
            display: flex;
            align-items: center;
          }

          @media screen and (max-width: 600px) {
            {
              width: 100%;
              margin-bottom: 20px;
              justify-content: center;
            }
          }
        `
      }
    </style>
  </div>
)

Card.propTypes = {
  children: PropTypes.node
}
