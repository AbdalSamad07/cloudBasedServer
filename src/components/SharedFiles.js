import React from 'react';

const SharedFiles = ({ files }) => {
    return (
        <div className="shared-files">
            <h2>Shared Family Documents</h2>
            <ul>
                {files.map((file, index) => (
                    <li key={index}><a href={file.link}>{file.name}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default SharedFiles;
