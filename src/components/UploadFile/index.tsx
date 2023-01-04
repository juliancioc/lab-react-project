import React, { useState } from 'react';

import * as S from './styles';
import { FileProps, UploadFileProps, Event } from './types';

export const UploadFile = ({ title }: UploadFileProps) => {
  const [file, setFile] = useState<FileProps>({ name: '', url: '' });

  const handleUploadFile = (e: Event<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) {
      return alert('invalid file');
    }

    const newFile = e.target.files[0];
    const fileURL = URL.createObjectURL(newFile);

    validFileSize(newFile.size);
    validFileExtension(newFile.name);
    setFile({ ...file, name: newFile.name, url: fileURL });
  };

  const validFileSize = (size: number) => {
    const convertToMB = size / 1048576;
    const limitFileSizeInMB = 5;

    if (convertToMB > limitFileSizeInMB) {
      return alert(`limit file size is ${limitFileSizeInMB}MB`);
    }
  };

  const validFileExtension = (fileName: string) => {
    const index = fileName.indexOf('.');
    const extension = fileName.substring(index);

    if (extension !== '.xlsx') {
      return alert('invalid file');
    }
  };

  return (
    <S.Container>
      <button type="submit">
        <label htmlFor="files">{title}</label>
      </button>
      <input
        id="files"
        style={{ visibility: 'hidden' }}
        type="file"
        accept=".xlsx"
        onChange={handleUploadFile}
      />
      <a download href={file.url}>
        {file.name}
      </a>
    </S.Container>
  );
};
