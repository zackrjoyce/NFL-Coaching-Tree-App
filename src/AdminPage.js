import React from 'react';
import './AdminPage.css'; // Import the CSS file

const AdminPage = () => {
    return (
        <div>
            <h1>Select file to upload to database</h1>
            <div>
                <input type="file" id="fileInput" accept=".xlsx, .xls" /> {/* Restrict to Excel files */}
                <button>Upload</button>
            </div>
        </div>
    );
};

export default AdminPage;