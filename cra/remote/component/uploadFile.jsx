import React from 'react';
import * as LR from '@uploadcare/blocks';
import blocksStyles from '@uploadcare/blocks/web/lr-file-uploader-regular.min.css?url';

LR.registerBlocks(LR);

function UploadFile() {
  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="d06058dc13f8dcc4e028"
      />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.32.1/web/lr-file-uploader-regular.min.css">
      </lr-file-uploader-regular>
    </div>
  );
}

export default UploadFile;