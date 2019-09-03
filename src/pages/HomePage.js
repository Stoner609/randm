import React from 'react'
import { Store } from '../store/Store';
import { fetchDataAction, toggleFavAction } from '../store/Action'

const EpisodesList = React.lazy(() => import("../components/EpisodestList"));

const HomePage = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    const initFetchData = async () => {
      const objData = state.episodes.length === 0 && await fetchDataAction(); 
      dispatch(objData);
    }
    initFetchData();
    }, [dispatch, state]);

  const props = {
    episodes: state.episodes,
    favourites: state.favourites,
    state: { state, dispatch },
    toggleFavAction,
  };

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="episode-layout">
          <EpisodesList {...props} />
        </div>
      </React.Suspense>
    </>
  );
}

export default HomePage;