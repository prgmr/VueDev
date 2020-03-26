const myOpenWeatherId = '289205f5cb26ba8e0fe5b78e4074eb2c'

export const API = {

    //     http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    //     http://api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
    //     http://api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}
    //     api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}

    // List of city ID city.list.json.gz can be downloaded here
    // http://bulk.openweathermap.org/sample/

    //     http://api.openweathermap.org/data/2.5/weather?q=Rome,Italy&appid=289205f5cb26ba8e0fe5b78e4074eb2c
    //     http://api.openweathermap.org/data/2.5/weather?q=Perm&units=metric&appid=289205f5cb26ba8e0fe5b78e4074eb2c
    //     http://api.openweathermap.org/data/2.5/weather?q=Perm&units=imperial&appid=289205f5cb26ba8e0fe5b78e4074eb2c
    //     http://api.openweathermap.org/data/2.5/weather?id=511196&units=metric&appid=289205f5cb26ba8e0fe5b78e4074eb2c


    async getPermWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Perm&units=metric&appid=${myOpenWeatherId}`)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    },

    generateRandomCityIds(idCount = 10) {
        const ids = []

        for (let i = 0; i < idCount; i++) {
            let id = Math.floor(Math.random() * Date.now()).toString().substring(0, 7)
            ids.push(id)
        }
        return ids.map(el => parseInt(el))
    },

    select100RandomsIds() {
        return [
            // 74167, 74185, 74499, 74785, 74906, 74938, 75000, 75034, 75133, 75334, 75337, 86049, 87204, 87205, 88319,
            // 88380, 88533, 88635, 88903, 89055, 89087, 89113, 89341, 89570, 89693, 94220, 94298, 94589, 94930, 94931,
            // 94932, 94964, 95308, 95445, 95446, 95788, 96165, 96205, 96269, 96309, 96965, 96966, 96994, 97019, 97270,
            // 97417, 97572, 97783, 97990, 102985, 103012, 103369, 103533, 103630, 103665, 103922, 104269, 104270,
            // 104308, 104376, 104514, 104515, 104625, 105072, 105298, 105299, 105343, 106261, 116667, 116996, 117067,
            // 117392, 117656, 117793, 132938, 132961, 133037, 133964, 134217, 134460, 134518, 146114, 146137, 146150,
            // 146154, 146175, 146183, 146187, 146189, 146192, 146198, 146204, 149437, 149512, 149581, 149590, 149768,
            // 149775, 149792, 149812
            292968, 344979, 2507480, 2759794, 264371, 162183, 98182, 587084, 1609350, 276781, 2950159, 2661552, 1528675,
            3688689, 3469058, 3060972, 2800866, 3054643, 683506, 3435910, 3042030, 756135, 5815135, 2761369, 593116,
            3553478, 170654, 1273294, 1642911, 290030, 2964574, 1221874, 616052, 281184, 1176615, 1138958, 360630,
            2172517, 3646738, 1283240, 703448, 3489854, 2314302, 618426, 2618425, 3936456, 2267057, 2643743, 2240449,
            3196359, 2960316, 3117735, 1701668, 3530597, 625144, 2993458, 524901, 3143244, 6094817, 3703443, 2988507,
            1816670, 3067696, 964137, 1871859, 3413829, 456172, 3169070, 3871336, 3191281, 1835848, 1880252, 727011,
            2673730, 588409, 1512569, 611717, 112931, 1850147, 2210247, 2464470, 1581130, 658225, 108410
        ]
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
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myOpenWeatherId}`)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    },

    async getWeatherByCityCountry(city, country) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${myOpenWeatherId}`)
        console.log(response)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    },

    async getWeatherByCityId(id) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${myOpenWeatherId}`)
        if (!response.ok)
            throw new Error('Не удалось получить данные')
        return response.json()
    }
}