import express from 'express';
import { graphqlHTTP } from "express-graphql";
import cors from 'cors';
import { createConnection } from "typeorm";
import { schema } from './Schema'
import { Users } from './Entities/Users'

const main = async () => {
  await createConnection({
    type: 'mysql',
    host: "",
    database: "cafeteria",
    username: 'admin',
    password: "",
    logging: true,
    synchronize: true,
    entities: [Users],
  });

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
  })
}

main().catch((err) => {
  console.log(err);
})