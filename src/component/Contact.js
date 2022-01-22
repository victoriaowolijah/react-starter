import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto my-5">
                    <form className="form-group">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder='name' />
                            
                        </div>
                        <div className="input-group">
                            <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder='name'></textarea>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-success">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;