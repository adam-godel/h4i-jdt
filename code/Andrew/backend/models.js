const pool = require('./db')

exports.getAll = async () => {
    const { rows } = await pool.query(`SELECT * FROM tweets`)
    return rows
}

exports.create = async ({username, content, created_at}) => {
    const { rows } = await pool.query(
        `INSERT INTO tweets (username, content, created_at)
        VALUES ($1, $2, $3) RETURNING *`, [username, content, created_at]
    );
    return rows[0]
}

exports.deletePostById = async (id) => {
    const { rows } = await pool.query(`DELETE FROM tweets WHERE id=$1`, [id])
}