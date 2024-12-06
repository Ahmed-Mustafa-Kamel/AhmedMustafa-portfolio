/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

// primary button
const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden={true}>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return <button className={"btn btn-primary " + classes}>{label}</button>;
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

// outlined button
const ButtonOutLine = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outlined " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden={true}>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return <button className={"btn btn-outlined " + classes}>{label}</button>;
  }
};

ButtonOutLine.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutLine };
