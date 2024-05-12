import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import DashBoard from './components/DashBoard';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
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
            return status
                ? console.log(user)
                : (removeCookie("token"), navigate("/login"));
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };

    // State to store user data
    const [userData, setUserData] = useState(null);
    // State to track loading state
    const [loading, setLoading] = useState(true);
    // State to track error
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch user data
        const fetchUserData = async () => {
            try {
                setLoading(true);
                setError(null);
                // Make a GET request to fetch user data by username
                const response = await axios.get(`https://cognizanthackathon-1.onrender.com/api/users/${username}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching user data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]); // Run the effect whenever the username changes

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <DashBoard />
            <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
                <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                <div className="mb-4">
                    <p className="text-gray-700 my-4"><span className="font-bold">Email:</span> {userData.email}</p>
                    <p className="text-gray-700 my-4"><span className="font-bold">Username:</span> {userData.username}</p>
                    <p className="text-gray-700 my-4"><span className="font-bold">Created At:</span> {new Date(userData.createdAt).toLocaleString()}</p>
                </div>
            </div>
        </>
    );
};

export default Profile;