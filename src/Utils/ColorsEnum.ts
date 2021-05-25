export const ColorsEnum = {
  BACKGROUND: {
    variable: '--phone-background',
    name: 'Background',
    config: 'BACKGROUND_COLOR',
    type: 'hex',
    optional: false,
  },

  PRIMARY: {
    variable: '--primary',
    name: 'Primária',
    config: 'COLOR_PRIMARY',
    type: 'hex',
    optional: false,
  },
  SECONDARY: {
    variable: '--secondary',
    name: 'Secundária',
    config: 'COLOR_SECONDARY',
    type: 'hex',
    optional: false,
  },
  TERTIARY: {
    variable: '--tertiary',
    name: 'Terciária',
    config: 'COLOR_TERTIARY',
    type: 'hex',
    optional: false,
  },
  OUTLINE_COLOR: {
    variable: '--outline-color',
    name: 'Outline Color',
    config: 'OUTLINE_COLOR',
    type: 'rgb',
    optional: false,
  },
  OUTLINE_COLOR_BUTTON: {
    variable: '--outline-color-button',
    name: 'Outline Color - Button',
    config: 'OUTLINE_COLOR_BUTTON',
    type: 'hex',
    optional: false,
  },
  WARNING: {
    variable: '--warning-color',
    name: 'Aviso',
    config: 'WARNING_BUTTON',
    type: 'hex',
    optional: false,
  },
  LOGIN_BUTTON_COLOR: {
    variable: '--login-button-color',
    name: 'Entrar - Cor Botão',
    config: 'LOGIN_BUTTON_COLOR',
    type: 'hex',
    optional: true,
  },
  LOGIN_TEXT_COLOR: {
    variable: '--login-text-color',
    name: 'Entrar - Cor Texto',
    config: 'LOGIN_TEXT_COLOR',
    type: 'rgb',
    optional: true,
  },
};

export const AllColors = [
  ColorsEnum.BACKGROUND,
  ColorsEnum.PRIMARY,
  ColorsEnum.SECONDARY,
  ColorsEnum.TERTIARY,
  ColorsEnum.OUTLINE_COLOR,
  ColorsEnum.OUTLINE_COLOR_BUTTON,
  ColorsEnum.LOGIN_BUTTON_COLOR,
  ColorsEnum.LOGIN_TEXT_COLOR,
  ColorsEnum.WARNING,
];
