import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"


export default function FavoritesPage() {

  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length , [favorites])

  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4 sm:px-0">Favoritos</h1>

      {hasFavorites ? ( 
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-6 sm:my-8 md:my-10 gap-6 sm:gap-8 md:gap-10">
            {favorites.map( drink => (
              <DrinkCard 
                key={drink.idDrink}
                drink={drink}
              />
            ))}
        </div>
      ) : (
        <p className="my-6 sm:my-8 md:my-10 text-center text-lg sm:text-xl md:text-2xl px-4">
          Los Favoritos se mostrarán aquí
        </p>
      )}

    </>
  )
}