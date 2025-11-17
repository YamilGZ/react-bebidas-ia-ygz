import { streamText } from 'ai'
import { openrouter } from '../libs/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
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

    }
}