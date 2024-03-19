const { Pool } = require('pg')

const pool = new Pool ({
    connectionString: "postgresql://postgres:syeNnJsyuCMsLMwUkcPzsftYUVKmmkzi@roundhouse.proxy.rlwy.net:57643/railway"
})

module.exports = pool
