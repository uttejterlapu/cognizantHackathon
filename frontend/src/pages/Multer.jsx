import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Multer = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                navigate("/login");
            }
            const { data } = await axios.post(
                "https://cognizanthackathon-1.onrender.com",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            setUsername(user);
        };
        verifyCookie();
    }, [cookies, navigate,removeCookie]);


    const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post('https://cognizanthackathon-1.onrender.com/api/upload', formdata)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log(file);
    }

    useEffect(() => {
        axios.get('https://cognizanthackathon-1.onrender.com/api/getImage')
            .then(res => setImage(res.data[0].image))
            .catch(err => console.log(err))
        // console.log(image)
    }, [])
    return (
        <div>
            <input type='file' onChange={e => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <img src={`https://cognizanthackathon-1.onrender.com/api/images/${image}`} alt='' />
        </div>
    );
};

export default Multer;