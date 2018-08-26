import React from 'react';

import MovieToolbar from '../primitives/MovieToolbar';
import getActiveElement from '../getActiveElement';


const getMovieActions = (showEditor, setAsWatched, setAsUnwatched, handleRemove) =>
    (movieId, movieTitle, watched) => {
        const watchButtonText = watched ? 'Unwatch' : 'Watched';
        const watchClickHandler = () => watched ? setAsUnwatched(movieId) : setAsWatched(movieId);
        const editClickHandler = () => {
            const currentActiveElement = getActiveElement();

            const onEditorClose = () => {
                if (currentActiveElement) {
                    currentActiveElement.focus();
                }
            };

            showEditor(movieId, onEditorClose);
        };
        const removeClickHandler = () => handleRemove(movieId);

        const movieButtonList = [
            { title: watchButtonText, action: watchClickHandler },
            { title: 'Edit', action: editClickHandler },
            { title: 'Remove', action: removeClickHandler }
        ];

        return (
            <MovieToolbar ariaLabel={`${movieTitle} Actions`} movieTitle={movieTitle} buttonList={movieButtonList}/>
        );
    };

export default getMovieActions;
