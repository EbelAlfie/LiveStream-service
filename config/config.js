module.exports = {
    authToken: '2RpDZxq76iJ5adVa7dcUcqHZyX0_4dg5Q5ppWzGnxXMScTkjH',  
    rtmp: {
        proto:'tcp',
        addr: 1935,
        configPath: './config/ngrok.yml' 
    },
    hls: {
        proto: 'http',
        addr: 9090,
        configPath: './config/ngrok.yml' 
    },
    api: {
        proto: 'http',
        hostname: '1dcd6b126c49-12390209840656915252.ngrok-free.app',
        addr: 3001,
        configPath: './config/ngrok.yml' 
    }
};