export const ColorsEnum = {
  BACKGROUND: {
    variable: '--phone-background',
    name: 'Background',
    config: 'BACKGROUND_COLOR',
  },

  PRIMARY: {
    variable: '--primary',
    name: 'Primária',
    config: 'COLOR_PRIMARY',
  },
  SECONDARY: {
    variable: '--secondary',
    name: 'Secundária',
    config: 'COLOR_SECONDARY',
  },
  TERTIARY: {
    variable: '--tertiary',
    name: 'Terciária',
    config: 'COLOR_TERTIARY',
  },
  OUTLINE_COLOR: {
    variable: '--outline-color',
    name: 'Outline Color',
    config: 'OUTLINE_COLOR',
  },
  OUTLINE_COLOR_BUTTON: {
    variable: '--outline-color-button',
    name: 'Outline Color - Button',
    config: 'OUTLINE_COLOR_BUTTON',
  },
  LOGIN_BUTTON_COLOR: {
    variable: '--login-button-color',
    name: 'Entrar - Cor Botão',
    config: 'LOGIN_BUTTON_COLOR',
  },
  LOGIN_TEXT_COLOR: {
    variable: '--login-text-color',
    name: 'Entrar - Cor Texto',
    config: 'LOGIN_TEXT_COLOR',
  },
  WARNING: {
    variable: '--warning-color',
    name: 'Aviso',
    config: 'WARNING_BUTTON',
  },
};

export const AllColors = [
  ColorsEnum.BACKGROUND,
  ColorsEnum.PRIMARY,
  ColorsEnum.TERTIARY,
  ColorsEnum.OUTLINE_COLOR,
  ColorsEnum.OUTLINE_COLOR_BUTTON,
  ColorsEnum.LOGIN_BUTTON_COLOR,
  ColorsEnum.LOGIN_TEXT_COLOR,
  ColorsEnum.WARNING,
];
