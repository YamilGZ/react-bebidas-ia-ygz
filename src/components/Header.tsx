import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

    const [ searchFilters, setSearchFilters ] = useState({
        ingredient: '',
        category: ''
    })

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const {pathname} = useLocation()
    
    const isHome = useMemo(() => pathname === '/' ,  [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    const showNotification = useAppStore((state) => state.showNotification)

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories]);

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // validar
        if (Object.values(searchFilters).includes('')) {
            showNotification({
                text: 'todos los campos son obligatorios',
                error: true
            })
            return
        }

        // Consultar las recetas
        searchRecipes(searchFilters)

    }

  return (
    <header className={ isHome ? ' bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-slate-800'}>
        <div className=" mx-auto container px-4 sm:px-5 py-8 sm:py-16">
            <div className=" flex justify-between items-center">
                <div>
                    <img 
                        src="/logo.svg" 
                        alt="logotipo"
                        className="w-24 sm:w-32" 
                    />
                </div>

                {/* Menú Desktop */}
                <nav className="hidden md:flex gap-4">
                    <NavLink 
                        to="/"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }
                    >
                    Inicio</NavLink>
                    <NavLink 
                        to="/favoritos"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }
                    >
                        Favoritos</NavLink>
                    <NavLink 
                        to="/generate"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }
                    >
                        Generar con IA</NavLink>
                </nav>

                {/* Botón Menú Móvil */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menú Móvil */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
                    <NavLink 
                        to="/"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold py-2' : 'text-white uppercase font-bold py-2'
                        }
                    >
                    Inicio</NavLink>
                    <NavLink 
                        to="/favoritos"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold py-2' : 'text-white uppercase font-bold py-2'
                        }
                    >
                        Favoritos</NavLink>
                    <NavLink 
                        to="/generate"
                        className={({isActive}) => 
                            isActive ? 'text-orange-500 uppercase font-bold py-2' : 'text-white uppercase font-bold py-2'
                        }
                    >
                        Generar con IA</NavLink>
                </nav>
            )}
            <div>
                {isHome && (
                    <form
                        className=" md:w-1/2 2xl:w-1/3 bg-orange-400 my-10 sm:my-16 md:my-32 p-6 sm:p-8 md:p-10 rounded-lg shadow space-y-4 sm:space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className=" space-y-4 mt-2" >
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingredientes</label>

                            <input 
                                type="text" 
                                id="ingredient"
                                name="ingredient"
                                className=" p-3 w-full rounded-lg focus:outline-none bg-white"
                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            />

                        </div>
                        <div className=" space-y-4 mt-2" >
                            <label 
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>

                            <select 
                                id="category"
                                name="category"
                                className=" p-3 w-full rounded-lg focus:outline-none bg-white"
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value="">-- Seleccione --</option>
                                {categories.drinks.map( category => (
                                    <option
                                        key={category.strCategory} 
                                        value={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <input 
                            type="submit" 
                            value='Buscar Recetas'
                            className=" cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />

                    </form>
                )}
            </div>
        </div>
    </header>
  )
}
