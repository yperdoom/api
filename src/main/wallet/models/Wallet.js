import database from '../../../../database/postgres/createConnection'

export default createTable = async () => {
  const client = await database.connect()
  if (!client) {
    return null
  }

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
  client.release()
  await database.close()
}