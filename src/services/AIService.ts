import { streamText } from 'ai'
import { openrouter } from '../libs/ai'

/**
 * Servicio para generar recetas usando modelos de IA a través de OpenRouter
 * 
 * IMPORTANTE: Si recibes el error "No endpoints found matching your data policy":
 * 
 * En https://openrouter.ai/settings/privacy, habilita:
 * 1. ✅ "Enable free endpoints that may train on inputs" (debe estar ON)
 * 2. ✅ "Enable free endpoints that may publish prompts" (debe estar ON para modelos gratuitos)
 * 
 * También verifica:
 * - Que tu API key esté correctamente configurada en el archivo .env
 * - Que la API key tenga permisos para usar modelos gratuitos
 * - Que no tengas restricciones de proveedores que bloqueen todos los modelos
 */
export default {
    async generateRecipe(prompt: string) {
        try {
            const result = streamText({
                // Modelos alternativos disponibles (descomenta si el modelo actual no funciona):
                //model:openrouter('meta-llama/llama-3.3-8b-instruct:free'), // Modelo no disponible
                //model:openrouter('meta-llama/llama-3.2-3b-instruct:free'),
                //model:openrouter('meituan/longcat-flash-chat:free'),
                //model:openrouter('deepseek/deepseek-chat-v3.1:free'),
                model:openrouter('openai/gpt-oss-20b:free'),
               // model:openrouter('google/gemma-3n-e2b-it:free'),
                prompt,
                //system: 'Eres un niño de 5 años de edad',
                system: 'Eres un bartender que tiene 50 años de experiencia y le sirvió una bebida a James Bond',
                // configuracion para respuesta random 1 respuesta determinada 0
                //temperature: 1,
            })

            return result.textStream
        } catch (error: any) {
            // Re-lanzar el error con información adicional para que el slice pueda manejarlo
            throw new Error(error?.message || 'Error desconocido al generar la receta')
        }
    }
}