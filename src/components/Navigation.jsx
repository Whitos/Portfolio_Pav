import React from "react";
import PropTypes from "prop-types";

export const Navigation = ({ as: Component = "nav", className, children }) => {
  return <Component className={className}>{children}</Component>;
};

Navigation.List = function NavigationList({ as: Component = "ul", className, children }) {
  return <Component className={className}>{children}</Component>;
};

Navigation.Item = function NavigationItem({ as: Component = "li", children, onActivated }) {
  const [isActive, setIsActive] = React.useState(false);

  const handleActivate = () => {
    setIsActive(true);
    onActivated?.();
  };

  return (
    <Component>
      {typeof children === "function"
        ? children({
            setActive: handleActivate,
            isActive,
          })
        : null}
    </Component>
  );
};

// Adding display names for better debugging
Navigation.List.displayName = "NavigationList";
Navigation.Item.displayName = "NavigationItem";

Navigation.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

Navigation.List.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

Navigation.Item.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.func.isRequired, // Ensure it's a function
  onActivated: PropTypes.func,
};
