const myOpenWeatherId = '289205f5cb26ba8e0fe5b78e4074eb2c'

export const API = {

    //     http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    //     http://api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
    // http://api.openweathermap.org/data/2.5/weather?q=Rome,Italy&appid=289205f5cb26ba8e0fe5b78e4074eb2c
    //     http://api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

    // List of city ID city.list.json.gz can be downloaded here http://bulk.openweathermap.org/sample/
    //     api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}


    async getPermWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Perm&appid=${myOpenWeatherId}`)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    },

    getAllCities() {
        // const response = fetch('')
        // if (!response.ok)
        //     throw new Error('Не удалось получить данные')
        // // return response.json()
        return [
            {id: 511196, city: 'Perm', country: 'Russia', temperature: 20},
            {id: 524901, city: 'Moscow', country: 'Russia', temperature: 25},
            {id: 491422, city: 'Sochi', country: 'Russia', temperature: 30},
            {id: 2643743, city: 'London', country: 'GB', temperature: 22},
            {id: 2988507, city: 'Paris', country: 'France', temperature: 25},
            {id: 3169070, city: 'Rome', country: 'Italy', temperature: 35},
            {id: 5128581, city: 'New York', country: 'US', temperature: 23},
            {id: 1816670, city: 'Pekin', country: 'China', temperature: 28},
            {id: 1850147, city: 'Tokio', country: 'Japan', temperature: 27},
            {id: 3117735, city: 'Madrid', country: 'Spain', temperature: 33},
        ]
    },

    async getWeatherByCityName(city) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myOpenWeatherId}`)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    },

    async getWeatherByCityCountry(city, country) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${myOpenWeatherId}`)
        console.log(response)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    },

    async getWeatherByCityId(id) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${myOpenWeatherId}`)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    }
}