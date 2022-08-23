import React from 'react'
import ImageSlider from './ImageSlider'
import Navbar from './Navbar'


function Sidebar() {
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="/" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="/AddProduct" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">AddProduct</span></a>
                                </li>
                                <li>
                                    <a href="/ViewProducts" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">ViewProduct</span></a>
                                </li>


                                <li>
                                    <a href="/ViewUser" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">ViewCustomers</span> </a>
                                </li>
                            </ul>
                            <hr />


                        </div>

                    </div>
                    <div className="col py-3">
                        <h3>welcome to Fashion Fcatory</h3>
                        <p className="lead">
                            Fashion refers to anything that becomes a rage among the masses. Fashion is a popular aesthetic expression. Most Noteworthy, it is something that is in vogue. Fashion appears in clothing, footwear, accessories, makeup, hairstyles, lifestyle, and body proportions.
                        </p>
                        <ImageSlider/>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Sidebar
