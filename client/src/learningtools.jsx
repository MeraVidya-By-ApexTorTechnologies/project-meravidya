import React, { useState } from 'react';

function LearningTools() {
  const [files, setFiles] = useState([]);
  const [fileInput, setFileInput] = useState('');
  const [accessControl, setAccessControl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const newFile = {
        name: fileInput || selectedFile.name,
        access: accessControl,
        url: URL.createObjectURL(selectedFile),
        type: selectedFile.type,
      };
      setFiles([...files, newFile]);
      setFileInput('');
      setAccessControl('');
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Learning Tools</h2>
          <p className="text-gray-700 mb-8 text-center">
            Use this area to upload files you wish to share with your users. You can manage who has access to your files and what they can do, such as view & download, upload items, and more.
          </p>
          <form onSubmit={handleFileUpload} className="mb-8">
            <div className="mb-4">
              <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700">
                File Name
              </label>
              <input
                id="fileInput"
                type="text"
                name="fileInput"
                value={fileInput}
                onChange={(e) => setFileInput(e.target.value)}
                className="mt-1 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">
                Choose File
              </label>
              <input
                id="fileUpload"
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-900 border rounded-md cursor-pointer focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="accessControl" className="block text-sm font-medium text-gray-700">
                Access Control
              </label>
              <select
                id="accessControl"
                name="accessControl"
                value={accessControl}
                onChange={(e) => setAccessControl(e.target.value)}
                required
                className="mt-1 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Access</option>
                <option value="view">View & Download</option>
                <option value="upload">Upload Items</option>
                <option value="manage">Manage</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Upload File
              </button>
            </div>
          </form>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Uploaded Files</h3>
            <ul className="space-y-4">
              {files.map((file, index) => (
                <li key={index} className="bg-gray-200 rounded-md p-4 flex flex-col">
                  <span className="mb-2 text-black font-semibold">{file.name}</span>
                  {file.type.startsWith('image/') && (
                    <img src={file.url} alt={file.name} className="w-full h-auto mb-2 rounded-md" />
                  )}
                  {file.type === 'application/pdf' && (
                    <embed src={file.url} type="application/pdf" className="w-full h-64 mb-2 rounded-md" />
                  )}
                  <span className="text-gray-600">{file.access}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningTools;
