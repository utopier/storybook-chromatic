import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Component summary title.
 */
export const Basic = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};

Basic.propTypes = {
  /**
   * primary props description
   */
  primary: PropTypes.bool,
  /**
   * backgroundColor props description
   */
  backgroundColor: PropTypes.string,
  /**
   * size props description
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * label props description
   */
  label: PropTypes.string.isRequired,
  /**
   * onClick props description
   */
  onClick: PropTypes.func
};

// Component props default value
Basic.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'large',
  onClick: undefined
};

const Button = styled.button``;
