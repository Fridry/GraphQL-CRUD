const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    year: Int!
    rating: Float!
  }

  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
  }

  type Mutation {
    addMovie(name: String!, year: Int!, rating: Float!): Movie
    updateMovie(id: ID!, name: String!, year: Int!, rating: Float!): Movie
    deleteMovie(id: ID!): Boolean
  }
`;
module.exports = typeDefs;
