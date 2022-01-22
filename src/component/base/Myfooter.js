import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer container-fluid bg-dark text-white py-3 position-relative bottom-0 ">
                <div className="row">
                    <div className="col-md-5">
                        <p className="fw-bold">About us</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae reiciendis rem alias iusto, odit atque doloremque quia excepturi maxime, nobis velit facilis
                        sapiente eligendi praesentium asperiores. Amet accusantium similique optio.
                    </div>

                    <div className="col-md-4 border-end border-start">
                        <p className="fw-bold">Contact us</p>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                <b>address</b>: 24, Edo innovation Hub Benin city
                            </li>
                            <li className='list-group-item'>
                                <b>Phone</b>: +234 090 545 4657
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <p className="fw-bold">Subscribe</p>
                        <form action="">
                            <input type="text" className="form-control" />
                            <input type="submit" className="mt-3 btn btn-primary" value='subscribe' />
                        </form>
                    </div>
                </div>
            </footer>
        </div>);
}

export default Footer;