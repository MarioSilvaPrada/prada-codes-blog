import React, { memo } from 'react';
import './Switch.css';

import { FaMoon, FaSun } from 'react-icons/fa';

const SwitchToggle = ({ checked, onChange }) => (
  <label className="switch" htmlFor="check">
    <FaMoon className="icon dark" />
    <FaSun className="icon light" />
    <input type="checkbox" id="check" checked={checked} onChange={onChange} />
    <span className="slider round" />
  </label>
);

export default memo(SwitchToggle);
