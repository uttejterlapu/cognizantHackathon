import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios for making HTTP requests

const Pdf = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('pdf', selectedFile);

        try {
            const response = await axios.post('https://cognizanthackathon-1.onrender.com/upload-pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            // Handle success, e.g., show a message or redirect
        } catch (error) {
            console.error(error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="application/pdf" onChange={handleFileChange} />
                <button type="submit">Upload PDF</button>
            </form>
        </div>
    );
};

export default Pdf;