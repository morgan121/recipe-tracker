module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'recipetracker',
    user: process.env.DB_USER || 'recipetracker',
    password: process.env.DB_PASSWORD || 'recipetracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './recipetracker.sqlite'
    }
  }
}
