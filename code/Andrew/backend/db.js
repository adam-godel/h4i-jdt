const { Pool } = require('pg')

const pool = new Pool ({
    connectionString: "postgresql://postgres:TmytEcuevyeEgrtAjdFzDTBVchBZpZuv@roundhouse.proxy.rlwy.net:46768/railway" // "postgresql://postgres:syeNnJsyuCMsLMwUkcPzsftYUVKmmkzi@roundhouse.proxy.rlwy.net:57643/railway"
})

module.exports = pool
