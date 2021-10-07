import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { color, typography } from './styles';

export const GlobalStyle = createGlobalStyle`
  ${reset}
`;
