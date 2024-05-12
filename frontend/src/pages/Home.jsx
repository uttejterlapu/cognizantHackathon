import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ username }) => {
    return (
        <div>
            <h1 className="text-3xl">
                {" "}
                Welcome <span className="text-4xl">{username}</span>
            </h1>
            <div className="my-5 flex flex-wrap justify-center gap-4">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="h-64 w-full object-cover" src="https://source.unsplash.com/random/300×300/?DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <Link to={`/course/CSEN1071`}>CSEN1071</Link><br />Data Communications
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Home;