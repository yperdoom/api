import Logger from '../../../library/function/Logger.js'
import database from '../../../database/postgres/createConnection.js'

export default async (body) => {
  const client = await database.connect()
  if (!client) {
    return null
  }

  let res = {}

  try {
    const query = {
      text: `INSERT INTO 
        users(name, document, created_at, updated_at)
        VALUES($1, $2, $4, $5)
        RETURNING *`,
      values: [
        body.name,
        body.document,
        body.created_at,
        body.updated_at
      ]
    }

    res = await client.query(query)
  } catch (error) {
    await client.query(`
      CREATE TABLE IF NOT EXISTS wallet (
        wallet_id int NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 999999999 CACHE 1 ),
        name varchar(50) NOT NULL,
        document varchar(15),
        created_at timestamp NOT NULL,
        updated_at timestamp NOT NULL,
        PRIMARY KEY (wallet_id)
      );`
    )

    res = await client.query(query)

    Logger.error({
      error,
      type: 'database-error',
      local: 'postgre-create-user-service'
    })
  }

  client.release()
  await database.close()

  if (res.rowCount >= 1) {
    return res.rows
  }
  return null
}