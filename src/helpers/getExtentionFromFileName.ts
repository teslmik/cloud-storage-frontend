import { Extention } from "./getColorByExtention";

const getExtentionFromFileName = (filename: string) => {
  return filename.split('.').pop() as Extention;
}

export { getExtentionFromFileName };
