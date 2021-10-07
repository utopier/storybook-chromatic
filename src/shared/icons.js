// Icon paths
export const icons = {
  arrow_drop_down: 'M14 20L24 30L34 20H14Z',
  arrow_drop_up: 'M14 28L24 18L34 28H14Z',
  arrow_upward: 'M8 24L10.82 26.82L22 15.66V40H26V15.66L37.16 26.84L40 24L24 8L8 24Z',
  arrow_forward: 'M24 8L21.18 10.82L32.34 22H8V26H32.34L21.18 37.18L24 40L40 24L24 8Z',
  arrow_downward: 'M40 24L37.18 21.18L26 32.34V8H22V32.34L10.84 21.16L8 24L24 40L40 24Z',
  arrow_back: 'M40 22H15.66L26.84 10.82L24 8L8 24L24 40L26.82 37.18L15.66 26H40V22Z',
  keyboard_arrow_up: 'M14.82 30.82L24 21.66L33.18 30.82L36 28L24 16L12 28L14.82 30.82Z',
  keyboard_arrow_right: 'M17.18 33.18L26.34 24L17.18 14.82L20 12L32 24L20 36L17.18 33.18Z',
  keyboard_arrow_left: 'M30.82 33.18L21.66 24L30.82 14.82L28 12L16 24L28 36L30.82 33.18Z',
  add: 'M38 26H26V38H22V26H10V22H22V10H26V22H38V26Z',
  add_circle_outline:
    'M26 14H22V22H14V26H22V34H26V26H34V22H26V14ZM24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40Z',
  remove: 'M38 26H10V22H38V26Z',
  remove_circle_outline:
    'M14 22V26H34V22H14ZM24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40Z',
  close:
    'M38 12.82L35.18 10L24 21.18L12.82 10L10 12.82L21.18 24L10 35.18L12.82 38L24 26.82L35.18 38L38 35.18L26.82 24L38 12.82Z',
  event:
    'M34 24H24V34H34V24ZM32 2V6H16V2H12V6H10C7.78 6 6.02 7.8 6.02 10L6 38C6 40.2 7.78 42 10 42H38C40.2 42 42 40.2 42 38V10C42 7.8 40.2 6 38 6H36V2H32ZM38 38H10V16H38V38Z',
  star_border:
    'M44 18.48L29.62 17.24L24 4L18.38 17.26L4 18.48L14.92 27.94L11.64 42L24 34.54L36.36 42L33.1 27.94L44 18.48ZM24 30.8L16.48 35.34L18.48 26.78L11.84 21.02L20.6 20.26L24 12.2L27.42 20.28L36.18 21.04L29.54 26.8L31.54 35.36L24 30.8Z',
  star: 'M24 34.54L36.36 42L33.08 27.94L44 18.48L29.62 17.26L24 4L18.38 17.26L4 18.48L14.92 27.94L11.64 42L24 34.54Z',
  search:
    'M31 28H29.42L28.86 27.46C30.82 25.18 32 22.22 32 19C32 11.82 26.18 6 19 6C11.82 6 6 11.82 6 19C6 26.18 11.82 32 19 32C22.22 32 25.18 30.82 27.46 28.86L28 29.42V31L38 40.98L40.98 38L31 28ZM19 28C14.02 28 10 23.98 10 19C10 14.02 14.02 10 19 10C23.98 10 28 14.02 28 19C28 23.98 23.98 28 19 28Z',
  profile:
    'M24 11.8C26.32 11.8 28.2 13.68 28.2 16C28.2 18.32 26.32 20.2 24 20.2C21.68 20.2 19.8 18.32 19.8 16C19.8 13.68 21.68 11.8 24 11.8ZM24 29.8C29.94 29.8 36.2 32.72 36.2 34V36.2H11.8V34C11.8 32.72 18.06 29.8 24 29.8ZM24 8C19.58 8 16 11.58 16 16C16 20.42 19.58 24 24 24C28.42 24 32 20.42 32 16C32 11.58 28.42 8 24 8ZM24 26C18.66 26 8 28.68 8 34V40H40V34C40 28.68 29.34 26 24 26Z',
  twitch:
    'M11.1094 8L9 13.492V35.94H16.4993V40H20.7181L24.7027 35.94H30.7966L39 27.5813V8H11.1094V8ZM36.1866 26.1493L31.4993 30.9253H24L20.0154 34.9853V30.9253H13.6873V10.8653H36.1866V26.1493ZM31.4993 16.3587V24.708H28.6873V16.3587H31.4993ZM24 16.3587V24.708H21.1879V16.3587H24Z',
  purchase:
    'M36 12H32C32 7.58 28.42 4 24 4C19.58 4 16 7.58 16 12H12C9.8 12 8 13.8 8 16V40C8 42.2 9.8 44 12 44H36C38.2 44 40 42.2 40 40V16C40 13.8 38.2 12 36 12ZM24 8C26.2 8 28 9.8 28 12H20C20 9.8 21.8 8 24 8ZM36 40H12V16H16V20C16 21.1 16.9 22 18 22C19.1 22 20 21.1 20 20V16H28V20C28 21.1 28.9 22 30 22C31.1 22 32 21.1 32 20V16H36V40Z'
};
