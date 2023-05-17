import React from 'react';
import styles from '@/styles/Home.module.scss';
import { Button, Upload, UploadFile, notification } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

import * as Api from '@/api';

export const UploadButton: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      await Api.files.uploadFile(options);

      setFileList([]);

      window.location.reload();
    } catch (err) {
      notification.error({
        message: 'Error!',
        description: 'Failed to upload file...',
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}>
      <Button type="primary" icon={<CloudUploadOutlined />} size="large">
        Upload file
      </Button>
    </Upload>
  );
};
