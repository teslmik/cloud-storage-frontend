import React from 'react';
import { Button, notification, Upload, UploadFile } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

import * as Api from '@/api';

import styles from '@/styles/Home.module.scss';

const UploadButton: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options);
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to upload file...',
        duration: 2,
      });
    }
  }

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({fileList}) => setFileList(fileList)}
      className={styles.upload} >
      <Button type='primary' icon={<CloudDownloadOutlined />} size='large' >
        Upload file
      </Button>
    </Upload>
  )
}

export { UploadButton };
