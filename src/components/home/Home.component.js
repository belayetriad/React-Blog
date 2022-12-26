import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeaderComponent from "../shared/pageHeader/PageHeader.component";
import './Home.style.css';

export default function HomeComponent() { 
    const [posts, setPosts] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        // handle success
        // console.log(response);
        setPosts(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

    
    const [toggle, setToggle] = useState(true);

    


    return(
        <>
            {/* <!-- Page Header--> */}
            <PageHeaderComponent title={'Welcome to React Blog'} subTitle={'This is our first React Blog'} bgImage={'/assets/img/home-bg.jpg'} component={
                <button className="button" onClick={()=> {
                    setToggle(!toggle)
                }}>
                    {toggle? 'Hide': 'Show'}
                </button>
            } />

            {/* <!-- Main Content--> */}
            {
                toggle && 
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            {/*  <!-- Post preview--> */}
                            {
                                posts.map((post, index)=> {
                                    return (
                                        <div className="post-preview" key={index}>
                                            <Link to={`/post/${post.id}`}>
                                                <h2 className="post-title">{post.title}</h2>
                                                <h3 className="post-subtitle">{post.body}</h3>
                                            </Link>
                                            <p className="post-meta">
                                                Posted by{' '}
                                                <Link to={'#'}>{post.userId}</Link>
                                                {' '}on September 24, 2022
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        
                            
                            {/* <!-- Divider--> */}
                            <hr className="my-4" />
                            {/* <!-- Pager--> */}
                            <div className="d-flex justify-content-end mb-4">
                                <Link className="btn btn-primary text-uppercase" to="#!">Older Posts →</Link></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}