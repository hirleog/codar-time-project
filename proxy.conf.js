const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: "http://localhost:3000/user",
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
    }
]

module.exports = PROXY_CONFIG;