import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, elevation } from '../../shared/styles';

export const Button = ({ type, Type, size, text, onClick, ...props }) => {
  return (
    <ButtonContainer>
      <ButtonComponent type={type} Type={Type} size={size} onClick={onClick} {...props}>
        {text}
      </ButtonComponent>
    </ButtonContainer>
  );
};

// [TODO] : Apply size props primitive value
Button.propTypes = {
  /**
   * type props
   */
  type: PropTypes.oneOf(['default', 'link', 'text']),
  /**
   * Type props
   */
  Type: PropTypes.oneOf(['primary', 'secondary', 'basic']),
  /**
   * size props
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * text props
   */
  text: PropTypes.string,
  /**
   * onClick props
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'default',
  Type: 'primary',
  size: 'medium',
  text: 'ButtonText',
  onClick: undefined
};

const ButtonContainer = styled.div``;

const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 24px;
  &:hover {
    background-color: ${color.mint[700]};
    box-shadow: 0px 2px 4px;
  }
  &:disabled {
    background: white;
    color: ${color.gray[100]};
    border: 1px solid ${color.gray[100]};
  }
  ${({ Type }) => {
    switch (Type) {
      case 'primary':
        return `background-color: ${color.mint[900]}; color: ${color.white};`;
      case 'secondary':
        return `background-color: ${color.white}; color: ${color.mint[900]}; border: 1px solid ${color.mint[900]};`;
      case 'basic':
        return `background-color: ${color.gray[50]}; color: ${color.gray[500]};`;
      default:
        return 'width: 220px; height: 48px;';
    }
  }}
  ${({ size }) => {
    switch (size) {
      case 'large':
        return 'width: 139px; height: 48px;';
      case 'medium':
        return 'width: 126px; height: 40px;';
      case 'small':
        return 'width: 99px; height: 34px;';
      default:
        return 'width: 220px; height: 48px;';
    }
  }}
    ${({ type }) => {
    switch (type) {
      case 'link':
        return `text-decoration-line: underline; background-color:${color.white}; color:${color.mint[900]}; width: fit-content; height: fit-content;`;
      case 'text':
        return `background-color:${color.white}; color:${color.mint[900]}; width: fit-content; height: fit-content;`;
      default:
        return;
    }
  }}
`;
