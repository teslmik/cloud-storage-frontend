import React from 'react';
import { FileTextOutlined } from '@ant-design/icons';

import { getColorByExtention } from '@/helpers/getColorByExtention';
import { getExtentionFromFileName } from '@/helpers/getExtentionFromFileName';
import { isImage } from '@/helpers/isImage';

import styles from './FileCard.module.scss';

interface FileCardProps {
  filename: string;
  originalName: string;
}

const FileCard: React.FC<FileCardProps> = ({ filename, originalName }) => {
  const ext = getExtentionFromFileName(filename);
  const imageUlr = ext && isImage(ext) ? 'http://localhost:4000/uploads/' + filename : '';
  const color = getColorByExtention(ext);
  const classColor = styles[color];

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.image} src={imageUlr} alt="File" />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};

export { FileCard };
