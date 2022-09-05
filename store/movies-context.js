import { createContext, useContext, useState } from "react";

export const MoviesContext = createContext({});

export function useMoviesContext() {
  return useContext(MoviesContext);
}
