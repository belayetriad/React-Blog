export default function PageHeaderComponent({title, subTitle, bgImage}){
    return (
        <>
            {/* <!-- Page Header--> */}
            <header className="masthead" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                {
                                    title && <h1>{title}</h1>
                                }
                                
                                {
                                    subTitle && <span className="subheading">{subTitle}</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}