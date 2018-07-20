const port=8081

const dev = {
    OPEN_API_URL : `http://localhost:${port}/oapi`,
    API_URL:  `http://localhost:${port}/api`,
}

const prod = {
    OPEN_API_URL : `http://computadorcasa.ddns.net:${port}/oapi`,
    API_URL: `http://computadorcasa.ddns.net:${port}/api`,
}

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
    ...config
}