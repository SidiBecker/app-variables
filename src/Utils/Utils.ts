import { toast } from 'react-toastify';
import { ColorsEnum } from './ColorsEnum';

function RGBToHex(rgb: any) {
  // Choose correct separator
  let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(')')[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length === 1) r = '0' + r;
  if (g.length === 1) g = '0' + g;
  if (b.length === 1) b = '0' + b;

  return '#' + r + g + b;
}

function HexToRGB(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  const rgb = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;

  return rgb ? `rgb(${rgb?.r}, ${rgb?.g}, ${rgb.b})` : '';
}

function getColorVariable(variable: string): string {
  let color = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()
    .toUpperCase();

  if (color.includes('#')) {
    color = validateOnly3Chars(color);
    return color;
  }

  return RGBToHex(color);
}

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function copyVariables(colors: Array<any>) {
  let ret = '';

  colors.forEach((colorObj) => {
    if (colorObj.enabled) {
      let color = getComputedStyle(document.documentElement)
        .getPropertyValue(colorObj.variable)
        .trim()
        .toUpperCase();

      color = validateOnly3Chars(color);

      if (colorObj.type.toUpperCase() === 'RGB' && color.includes('#')) {
        color = HexToRGB(color) || '';
      }

      if (
        colorObj.type.toUpperCase() === 'HEX' &&
        color.toUpperCase().includes('RGB')
      ) {
        color = RGBToHex(color) || '';
      }

      color = color.toUpperCase();

      if (color.includes('RGB')) {
        color = color.replace('RGB(', '').replace(')', '');
      }

      if (colorObj.type.toUpperCase() === 'HEX' && !colorObj.hashtag) {
        color = color.replace('#', '');
      }

      ret += `"${colorObj.config}": "${color}",\r\n`;

      if (colorObj.variable === ColorsEnum.SECONDARY.variable) {
        debugger;
        color = HexToRGB(color).toUpperCase();

        color = color.replace('RGB(', '').replace(')', '');

        ret += `"COLOR_SECONDARY_RGB": "${color}",\r\n`;
      }
    }
  });

  copyToClipboard(ret);

  toast.success('Copiado para a área de transferência!', { autoClose: 3000 });
}

function setColorVariable({ name, color }: any) {
  if (color != null) {
    document.documentElement.style.setProperty(name, color);

    if (name === ColorsEnum.OUTLINE_COLOR.variable) {
      if (isColor(color) && color.includes('#')) {
        color = HexToRGB(color);
      }
      setColorVariable({
        name: '--outline-color-opacity',
        color: color
          .replace('rgb', 'rgba')
          .substring(0, color.length)
          .concat(', 0.3)'),
      });
    }
  }
}

function isColor(value: string) {
  const hexRegex = /[#]+[A-Z|a-z|0-9]{6}/;
  var rgbRegex = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;

  return hexRegex.test(value) || rgbRegex.test(value);
}

function validateOnly3Chars(color: string) {
  const regex = /#([A-Z|a-z|0-9])\1{2}/;

  if (regex.test(color) && color.length === 4) {
    color = color + color.substring(1, 4);
  }

  return color;
}
export interface Color {
  name: string;
  color: string;
}

export {
  RGBToHex,
  HexToRGB,
  copyToClipboard,
  copyVariables,
  getColorVariable,
  setColorVariable,
  isColor,
};
