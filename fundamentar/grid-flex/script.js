const BASE_URL = 'https://achei-servicos-server.vercel.app'

const data = {
    email: 'visitante@email.com',
    password: '123456'
}

fetch(`${BASE_URL}/login`, {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.text()).then(data=>{
    console.log('Fetch response: ' ,data)
}).catch(e=>{
    console.log('Fetch error: ' ,e)
})

//axios
axios.post(`${BASE_URL}/login`, data).then(res=>{
    console.log('Axios response: ',res.data)
}).catch(e=>{
    console.log('Axios error: ', e)
})

