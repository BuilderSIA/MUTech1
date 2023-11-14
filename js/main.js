const API = "https://v6.exchangerate-api.com/v6/535fe59874edae50ebf21184/latest/USD"

const getData = (resource) => {
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            console.log(request)
        })

        request.open("GET", resource)
        request.send()
    })
}

getData(API)