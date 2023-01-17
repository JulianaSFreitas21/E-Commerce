export function Products(){
    return(
        <div className="products containerWidth">
            <div className="container">
                <div className="topDiv d_flex">
                    <h1>Products</h1>
                    <button><i className="fa fa-plus"></i></button>
                </div>
                <div className="content d_flex">
                    <div className="box">
                        <h3>Name</h3>
                        <p>Price</p>
                        <img src="./images/top/category-1.png" alt="test" />
                    </div>
                    <div className="box">
                        <h3>Name</h3>
                        <p>Price</p>
                        <img src="./images/top/category-2.png" alt="test" />
                    </div>
                </div>
            </div>
        </div>
    )
}