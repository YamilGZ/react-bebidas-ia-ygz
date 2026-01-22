import type { StateCreator } from "zustand";
import AIService from "../services/AIService";
import type { NotificationSliceType } from "./notificationSlice";

export type AISlice = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice & NotificationSliceType, [], [], AISlice> = (set, get) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) => {

        set({recipe: '',isGenerating: true})

        try {
            const data = await AIService.generateRecipe(prompt)

            for await (const textPart of data) {
                set((state => ({
                    recipe: state.recipe + textPart
                })))
            }
        } catch (error: any) {
            console.error('Error generando receta:', error);
            
            let errorMessage = 'Error al generar la receta. Por favor, intenta de nuevo.';
            
            // Manejo específico de errores de OpenRouter
            if (error?.message?.includes('No endpoints found matching your data policy')) {
                errorMessage = 'Error de configuración: En https://openrouter.ai/settings/privacy habilita "Enable free endpoints that may train on inputs" Y "Enable free endpoints that may publish prompts"';
            } else if (error?.message?.includes('404') || error?.message?.includes('Not Found')) {
                errorMessage = 'Modelo no disponible. Verifica la configuración de privacidad en OpenRouter o intenta con otro modelo.';
            } else if (error?.message?.includes('API key') || error?.message?.includes('401') || error?.message?.includes('403')) {
                errorMessage = 'Error con la API key. Verifica que VITE_OPENROUTER_KEY esté correctamente configurada en tu archivo .env';
            }
            
            get().showNotification({
                text: errorMessage,
                error: true
            });
        } finally {
            set({ isGenerating: false})
        }

    }
})