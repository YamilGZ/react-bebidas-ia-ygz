import type { FormEvent } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function GenerateAI() {

    const showNotification = useAppStore(state => state.showNotification)
    const generateRecipe = useAppStore(state => state.generateRecipe)
    const recipe = useAppStore(state => state.recipe)
    const isGenerating = useAppStore(state => state.isGenerating)
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const form = new FormData(e.currentTarget)
        const prompt = form.get('prompt') as string

        if (prompt.trim() === '') {
            showNotification({
                text: 'La Búsqueda no puede ir vacia',
                error: true
            })
            return
        }
        await generateRecipe(prompt)

    }
  
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4 sm:px-0">Generar Receta con IA</h1>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <form  
          onSubmit={handleSubmit}
          className='flex flex-col space-y-3 py-6 sm:py-8 md:py-10'
        >
          <div className="relative">
            <input 
              name="prompt" 
              id="prompt" 
              className="border bg-white p-3 sm:p-4 rounded-lg w-full border-slate-800 text-sm sm:text-base pr-12 sm:pr-16" 
              placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
            />
            <button 
              type="submit" 
              aria-label="Enviar"
              className={`cursor-pointer absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 ${isGenerating ? ' cursor-not-allowed pointer-events-none opacity-50' : ''}`}
              disabled={isGenerating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </form>

        {isGenerating && <p className="text-center animate-blink text-sm sm:text-base">Generando...</p>}
        <div className="py-6 sm:py-8 md:py-10 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
            {recipe}
        </div>
      </div>

    </> 
  )
}