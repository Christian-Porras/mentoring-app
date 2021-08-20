/* eslint-disable no-undef */
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  input ItemInput {
    name: String!
    perishable: Boolean!
  }

  type Item {
    name: String!
    perishable: Boolean!
  }

  type Query {
    getItems: [Item]
  }

  type Mutation {
    saveItems(input: [ItemInput]): [Item]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  getItems: () => {
    return [
      {
        name: 'Bread',
        perishable: false,
      },
      {
        name: 'Milk',
        perishable: true,
      },
      {
        name: 'Eggs',
        perishable: true,
      },
    ]
  },

  saveItems: (itemInputs) => {
    const returnValue = itemInputs.input;
    return returnValue;
  }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');