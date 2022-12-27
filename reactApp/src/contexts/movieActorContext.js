import React, { useState } from "react";

export const MovieActorContext = React.createContext(null);

const MovieActorContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] ) 

  const addToFavourites = (actors) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actors.id)) {
      newFavourites.push(actors.id);
    }
    setFavourites(newFavourites);
    console.log(newFavourites)
  };

   // We will use this function in a later section
   const removeFromFavourites = (actors) => {
    setFavourites( favourites.filter(
      (mId) => mId !== actors.id
    ) )
  };


 return (
    <MovieActorContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </MovieActorContext.Provider>
  );
};

export default MovieActorContextProvider;