import React from 'react';
import { Store } from "../store/Store";
import { toggleFavAction } from '../store/Action';

const EpisodesList = React.lazy(() => import("../components/EpisodestList"));

const FavPage = () => {
  const { state, dispatch } = React.useContext(Store);

  const props = {
    episodes: state.favourites,
    favourites: state.favourites,
    state: { state, dispatch },
    toggleFavAction,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props } />
      </div>
    </React.Suspense>
  );
}

export default FavPage;