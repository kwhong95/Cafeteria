import React from "react"
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

const CustomApolloProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default CustomApolloProvider