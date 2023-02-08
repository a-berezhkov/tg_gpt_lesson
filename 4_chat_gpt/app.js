import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({
    apiKey: "Код_API_openAi_тут"
})

async function makeQueryToGpt(message) {
    const res = await api.sendMessage(message)
    console.log(res.text)
    return res
}


makeQueryToGpt('Write code for chat bot telegram on js')