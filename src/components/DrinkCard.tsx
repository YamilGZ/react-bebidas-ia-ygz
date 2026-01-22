import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div className=" border shadow-lg rounded-lg overflow-hidden">
            <div className=" overflow-hidden">
                <img 
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                    className=" w-full h-48 sm:h-56 object-cover hover:scale-125 transition-transform hover:rotate-2"
                />
            </div>
            <div className="p-4 sm:p-5">
                <h2 className=" text-xl sm:text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    type="button"
                    className=" bg-orange-400 hover:bg-orange-500 mt-4 sm:mt-5 w-full p-2.5 sm:p-3 font-bold text-white text-base sm:text-lg rounded-lg cursor-pointer transition-colors"
                    onClick={() => selectRecipe(drink.idDrink)}
                >Ver Receta</button>
            </div>
        </div>
    )
}
