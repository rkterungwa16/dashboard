import PropTypes from 'prop-types';

export const Icon = (props) => {
  return (
    <img
      src={props.url}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  )
}

Icon.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

Icon.defaultProps = {
  width: "15px",
  height: "15px"
}
