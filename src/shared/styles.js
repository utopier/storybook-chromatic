// color
// typeface
// sacle

// EDS-universal
// 1. Color Theme : 10-level gradiant (900,800,700,600,500,400,300,200,100,50)
// 2. Typeface
//    - EN : title (Poppins), body(Lato)
//    - KO : title(Poppins, Noto Sans KR), body(Noto Sans KR)
//    - JA : title(M PLUS Rounded 1c), body(Noto Sans JP)
// 3. Scale
//    - Display or Scale

// EDS for Studio
// 1. Typography
// 2. Grid
// 3. Elevation
export const color = {
  mint: {
    900: '#36C2D5',
    800: '#58C9D8',
    700: '#71CFDB',
    600: '#86D6DF',
    500: '#9ADCE3',
    400: '#ADE3E7',
    300: '#BFE9EC',
    200: '#D0F0F1',
    100: '#E1F6F6',
    50: '#F2FCFC'
  },
  mojito: {
    900: '#2BDCA8',
    800: '#4CE1B5',
    700: '#66E5C1',
    600: '#7DE9CC',
    500: '#92EDD6',
    400: '#A7F1E0',
    300: '#BBF5E9',
    200: '#CFF8F0',
    100: '#E3FBF7',
    50: '#F7FEFD'
  },
  gray: {
    900: '#192827',
    800: '#2E3C3B',
    700: '#445150',
    600: '#5B6767',
    500: '#747E7E',
    400: '#8D9695',
    300: '#A7AEAE',
    200: '#C2C7C7',
    100: '#E5E9E9',
    50: '#F5F7F7'
  },
  lemon: {
    900: '#F3D455',
    800: '#F2D968',
    700: '#F2DE7A',
    600: '#F2E28C',
    500: '#F2E79D',
    400: '#F2EBAE',
    300: '#F3EFBF',
    200: '#F5F2CF',
    100: '#F7F6E0',
    50: '#F9F9F0'
  },
  tangerine: {
    900: '#F27F6C',
    800: '#F58C7A',
    700: '#F89989',
    600: '#F9A598',
    500: '#FBB2A6',
    400: '#FCBFB5',
    300: '#FCCBC4',
    200: '#FBD8D2',
    100: '#FAE4E1',
    50: '#FDF6F5'
  },
  blueberry: {
    900: '#4B7AF3',
    800: '#6287F5',
    700: '#7795F7',
    600: '#8AA3F9',
    500: '#9CB0FA',
    400: '#AEBEFB',
    300: '#BFCCFC',
    200: '#D1DAFD',
    100: '#E2E8FD',
    50: '#F4F6FD'
  },
  gray_opacity: {
    900: '#192827',
    800: '#475352',
    700: '#5E6868',
    600: '#7A8282',
    500: '#A0A7A6',
    400: '#AAAFAF',
    300: '#D8DBDA',
    200: '#E9E9E9',
    100: '#F1F2F2',
    50: '#FAFBFB'
  },
  black: '#000000',
  white: '#FFFFFF'
};

export const scale = {
  size: {
    h1: '64px',
    h2: '48px',
    h3: '32px',
    h4: '28px',
    h5: '20px',
    h6: '16px',
    body1: '16px',
    body2: '14px',
    body3: '12px',
    body4: '10px'
  },
  weight: {
    bold: 700,
    semibold: 600,
    regular: 400,
    demilight: 300
  }
};

export const elevation = {
  1: '0px 1px 2px rgba(68, 81, 80, 0.16)',
  2: '0px 2px 4px rgba(68, 81, 80, 0.16)',
  3: '0px 4px 8px rgba(68, 81, 80, 0.16)',
  4: '0px 6px 12px rgba(68, 81, 80, 0.16)',
  5: '0px 8px 16px rgba(68, 81, 80, 0.16)',
  6: '0px 12px 24px rgba(68, 81, 80, 0.16)'
};
