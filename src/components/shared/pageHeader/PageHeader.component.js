import { Link } from "react-router-dom"

export default function PageHeaderComponent({
    title, 
    subTitle, 
    bgImage, 
    type= 'page', 
    postInfo = {postAuthor: '', postAuthorUrl: '#', postDate:  ''}
}){
    console.log() 
    return (
        <>
            {/* <!-- Page Header--> */}
            <header className="masthead" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className={`${type}-heading`}>
                                {
                                    !!title && <h1>{title}</h1>
                                }
                                
                                {
                                   !!subTitle && <span className="subheading">{subTitle}</span>
                                }

                                {
                                    type === 'post' && 
                                    <span className="meta">
                                        Posted by{' '}
                                        <Link to={postInfo.postAuthorUrl}>{postInfo.postAuthor}</Link>
                                        {' '}on {postInfo.postDate}
                                    </span>
                                } 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}