import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  const isInitialMount = useRef(true);
  
  useEffect(() => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      document.getElementById("inH1").innerHTML = "clicked";
      document.getElementById("inH1").style.backgroundColor = bgColor;
    }
  }, [props.headerSpan]);

  return (
    <header className="headerStyle">
      <h1>Simple Todo App <span id="inH1"></span></h1>
      <p>Please add to-dos item(s) through the input field</p>
    </header>
  );
};

Header.propTypes = {
  /** Value doesn't matter, change does as it calls useEffect if it's not the first mount */
  headerSpan: PropTypes.bool.isRequired,
};

export default Header;
