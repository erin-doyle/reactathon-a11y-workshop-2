import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import movies from '../movies';
import Header from '../primitives/Header';
import TabList from '../primitives/TabList';

import BrowseList from './BrowseList';
import getBrowseActions from './getBrowseActions';


const MovieBrowser = ({
    history,
    match,
    wishlist,
    addToWishlist,
    removeFromWishlist
}) => {
    const selectedGenre = match.params.genre;
    const goToWishlist = () => history.push('/wishlist');

    // NOTE: name value should match :genre path in linkTo URL
    // since we're using match.params.genre to identify the activeTab
    const tabList = [
        { name: "action", linkTo: "/browse/action", title: "Action" },
        { name: "drama", linkTo: "/browse/drama", title: "Drama" },
        { name: "comedy", linkTo: "/browse/comedy", title: "Comedy" },
        { name: "scifi", linkTo: "/browse/scifi", title: "Sci Fi" },
        { name: "fantasy", linkTo: "/browse/fantasy", title: "Fantasy" }
    ];
    const movieActions = getBrowseActions(addToWishlist, removeFromWishlist);
    const moviesInGenre = movies[selectedGenre];

    return (
        <Fragment>
            <Header
                title="Browse Movies"
                buttonOptions={{
                    text: "< Back",
                    label: "Back to Wish List",
                    handleClick: goToWishlist
                }}
            />

            <main>
                <TabList ariaLabel="Select a Movie Genre to Browse" tabList={tabList} doFocus />

                <div
                    id={`${selectedGenre}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${selectedGenre}-tab`}
                    tabIndex="0"
                >
                    <BrowseList
                        movieList={moviesInGenre}
                        wishlist={wishlist}
                        movieActions={movieActions}
                    />
                </div>
            </main>
        </Fragment>
    );
};

MovieBrowser.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    addToWishlist: PropTypes.func.isRequired,
    removeFromWishlist: PropTypes.func.isRequired
};


export default MovieBrowser;