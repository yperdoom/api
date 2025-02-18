const database = require('../../../../database/postgres/createConnection')

module.exports.createTable = async () => {
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

"clube"
"temporada"
"quantidade_jogos"
"quantidade_gols"
"quantidade_assistencias"
"quantidade_melhor_campo"
"quantidade_selecao_semana"
"quantidade_melhor_mes"
"posicao_final_liga"
"classificacao_copa_pais"
"classificacao_copa_liga"
"classificacao_supercopa_pais"
"classificacao_supercopa_uefa"
"classificacao_champions_league"
"classificacao_europa_league"
"classificacao_libertadores"