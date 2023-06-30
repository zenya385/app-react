// import React from 'react';
import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
