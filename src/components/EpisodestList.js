import React from "react";

const EpisodesList = (props) => {
  const { episodes, toggleFavAction, favourites, state } = props;

  return episodes.map(episode => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={!!episode.image ? episode.image.medium : ""}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() =>
              toggleFavAction(episode, state.state, state.dispatch)
            }
          >
            {favourites.find(fav => fav.id === episode.id) ? "Unfav" : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}

export default EpisodesList;