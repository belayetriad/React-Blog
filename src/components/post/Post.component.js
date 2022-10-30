import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PageHeaderComponent from "../shared/pageHeader/PageHeader.component";

export default function PostComponent(){
    const [post, setPost] = useState();
    const params = useParams(); 
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(function (response) {
        // handle success
        // console.log(response);
        setPost(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

    if (!post) return null;

    return(
        <>
        {/* <!-- Page Header--> */}
        <PageHeaderComponent 
            title={post?.title}  
            bgImage={'/assets/img/about-bg.jpg'}
            type={'post'} 
            postInfo={{
                postAuthor: post?.userId,
                postAuthorUrl: post?.userId,
                postDate: 'August 24, 2022'
            }}
        /> 

        {/* <!-- Main Content--> */}
        <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>{post?.body}</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    ) 
}