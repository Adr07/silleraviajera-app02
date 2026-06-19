import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type FavoriteKind = "hotel" | "viaje" | "destino";

export type Favorite = {
  kind: FavoriteKind;
  id: string;
  titulo: string;
  subtitulo?: string;
  imagen?: string | null;
  href?: string;
  addedAt: number;
};

const STORAGE_KEY = "@silleraviajera/favoritos";

type Ctx = {
  favorites: Favorite[];
  isFavorite: (kind: FavoriteKind, id: string) => boolean;
  toggle: (fav: Omit<Favorite, "addedAt">) => void;
  remove: (kind: FavoriteKind, id: string) => void;
  loaded: boolean;
};

const FavoritesContext = createContext<Ctx | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (cancelled) return;
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) setFavorites(parsed);
          } catch {}
        }
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const persist = useCallback((next: Favorite[]) => {
    setFavorites(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const isFavorite = useCallback(
    (kind: FavoriteKind, id: string) => favorites.some((f) => f.kind === kind && f.id === id),
    [favorites],
  );

  const toggle = useCallback(
    (fav: Omit<Favorite, "addedAt">) => {
      const exists = favorites.some((f) => f.kind === fav.kind && f.id === fav.id);
      if (exists) {
        persist(favorites.filter((f) => !(f.kind === fav.kind && f.id === fav.id)));
      } else {
        persist([{ ...fav, addedAt: Date.now() }, ...favorites]);
      }
    },
    [favorites, persist],
  );

  const remove = useCallback(
    (kind: FavoriteKind, id: string) => {
      persist(favorites.filter((f) => !(f.kind === kind && f.id === id)));
    },
    [favorites, persist],
  );

  const value = useMemo<Ctx>(
    () => ({ favorites, isFavorite, toggle, remove, loaded }),
    [favorites, isFavorite, toggle, remove, loaded],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  return ctx;
}
