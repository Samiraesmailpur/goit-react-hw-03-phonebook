import React from 'react';
import PropTypes from 'prop-types';
import { LabelBtn, InputFilter } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <LabelBtn>
      Find contacts by name
      <InputFilter type="text" value={filter} onChange={onChange} />
    </LabelBtn>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
