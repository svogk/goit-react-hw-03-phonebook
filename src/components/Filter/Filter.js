import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <p className={s.filter}>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
