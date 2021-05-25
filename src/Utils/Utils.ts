import { toast } from 'react-toastify';
import { AllColors, ColorsEnum } from './ColorsEnum';

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

  return rgb ? `rgb(${rgb?.r}, ${rgb?.g}, ${rgb.b})` : null;
}

function getColorVariable(variable: string): string {
  let color = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

  if (color.includes('#')) {
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

function copyVariables() {
  let ret = '';
  AllColors.forEach((colorObj) => {
    let color = getComputedStyle(document.documentElement)
      .getPropertyValue(colorObj.variable)
      .trim();

    if (colorObj.type === 'rgb' && color.includes('#')) {
      color = HexToRGB(color) || '';
    }

    ret += colorObj.config + ': ' + color.toUpperCase() + '\r\n';

    if (colorObj.variable === ColorsEnum.SECONDARY.variable) {
      ret += 'COLOR_SECONDARY_RGB: ' + HexToRGB(color) + '\r\n';
    }
  });

  copyToClipboard(ret);

  toast.success('Copiado para a área de transferência!', { autoClose: 3000 });
}

export interface Color {
  name: string;
  color: string;
}

export { RGBToHex, HexToRGB, copyToClipboard, copyVariables, getColorVariable };
