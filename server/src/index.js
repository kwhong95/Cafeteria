const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
	type Query {
		cafeInfo: [CafeInfo]
	}
	type CafeInfo {
		id: Int
		name: String
		region: String
		address: String
		contact: String
	}
`;

const resolvers = {
	Query: {
		cafeInfo: () => database.cafeInfo,
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`)
})