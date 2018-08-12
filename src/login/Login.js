import React from 'react';
import PropTypes from 'prop-types';


const Login = ({ history }) => {
    const goToWishlist = () => history.push('/wishlist');

    return (
        <div className="login row align-items-center">
           <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">
               <header>
                   <h1>Movie Wishlist</h1>
               </header>
               <main>
                   <form>
                       <div className="card bg-primary">
                            <div className="card-header">
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="username">Username
                                        <input
                                            id="username"
                                            type="text"
                                            name="username"
                                            className="form-control"
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            aria-describedby="passwordDesc"
                                        />
                                    </label>
                                    <small id="passwordDesc" className="form-text text-muted">Passwords are case sensitive</small>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={goToWishlist}>Login</button>
                            </div>
                        </div>
                   </form>
               </main>
            </div>
        </div>
    );
};

Login.propTypes = {
    history: PropTypes.object.isRequired
};


export default Login;
