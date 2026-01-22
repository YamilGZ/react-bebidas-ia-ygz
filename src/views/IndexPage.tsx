import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

  const drinks = useAppStore((state) => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length , [drinks])

  return (
    <>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4 sm:px-0">Recetas</h1>

        {hasDrinks ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-6 sm:my-8 md:my-10 gap-6 sm:gap-8 md:gap-10">
            {drinks.drinks.map((drink) => (
              <DrinkCard 
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </div>
        ) : (
          <p className="my-6 sm:my-8 md:my-10 text-center text-lg sm:text-xl md:text-2xl px-4">
            No hay resultados aún, utiliza el formulario para buscar recetas
          </p>
        )}

    </>
  )
}