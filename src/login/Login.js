import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../primitives/FormInput';
import Header from '../primitives/Header';


const Login = ({ history }) => {
    const goToWishlist = () => history.push('/wishlist');

    return (
        <div className="login row align-items-center">
           <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">

               <Header title="Movie WishList" />

               <main>
                   <form>
                       <div className="card bg-light">
                            <div className="card-header">
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">
                                <fieldset>
                                    <FormInput
                                        id="username"
                                        type="text"
                                        name="username"
                                        label="Username"
                                    />
                                    <FormInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        label="Password"
                                        helperText="Passwords are case sensitive"
                                    />
                                </fieldset>
                                <button type="button" className="btn btn-dark" onClick={goToWishlist}>Login</button>
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
