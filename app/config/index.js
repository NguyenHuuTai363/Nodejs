const config = {
    app: {
        port: process.env.port || 8080,
    },

    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://nhtai363:huutai12345@cluster0.akfoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
};

module.exports = config;