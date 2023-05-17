const extColor = {
  pdf: 'purple',
  xls: 'green',
  doc: 'blue',
  txt: 'blue',
  png: 'orange',
  jpg: 'orange',
  jpeg: 'orange',
  zip: 'red',
} as const;

export type Extention = keyof typeof extColor;
export type Color = typeof extColor[Extention];

export const getColorByExtention = (ext: Extention): Color => {
  return extColor[ext];
}