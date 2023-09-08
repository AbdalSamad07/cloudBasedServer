// FileSharing.js

import React, { useState } from 'react';

import '../fileSharing.css';

const FileSharing = () => {
    const [files, setFiles] = useState([]); // Store the list of uploaded files

    const handleFileChange = (event) => {
        // Append the selected files to the existing files array
        setFiles([...files, ...event.target.files]);
    };

    const renderFileList = () => {
        return files.map((file, index) => (
            <li key={index}>
                {file.name} ({file.size} bytes)
            </li>
        ));
    };

    return (
        <div className="file-sharing-container">
            <h2>Files</h2>

            <div className="upload-section">
                <label htmlFor="file-upload" className="custom-file-upload">
                    Upload File
                </label>
                <input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                />
            </div>

            <div className="file-list-section">
                <h3>Uploaded Files</h3>
                <ul>
                    {renderFileList()}
                </ul>
            </div>
        </div>
    );
};

export default FileSharing;