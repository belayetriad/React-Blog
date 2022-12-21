import axios from 'axios';
import { useEffect, useState } from 'react';
import './post.style.css';

export default function AdminPostComponent(){
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/post', config)
        .then(function (response) {
            // handle success
            console.log(response);
            setPosts(response.data.result) 
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }, [])
    
    return(
        <>  
        {/* <!-- Main Content--> */}
        <main className="mt-83">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-12 col-lg-12 col-xl-12">
                        <h2>All Posts</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Publish Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                posts.map((post, index)=> {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{post.name}</td>
                                            <td>{post.status}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}