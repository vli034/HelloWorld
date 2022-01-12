const { gql } = require('apollo-server-express');
const db = require('../config/database');


// gql variables lets us write tyep definitions that are readable to the package
// User Type describes what the user is composed of which mirrors the database model
typeDefs = gql`
    extend type Query {
        user(username: String!, password: String!): User
        users: [User]
     
        
    }
    type User {
        id: ID!
        username: String
        password: String
    } 
`
// resolvers are the logic to resolve a request from a user / reflect our type we defined above
resolvers = {
    Query: {
        users: async () => db.users.findAll(),
        user: async (root, args, context, info) => {
           return await db.users.findAll({
                where: {
                    username: args.username,
                    password: args.password
                }             
            }).then(data => {
                console.log('USERS ----', data[0])
                return data[0]
            })
          
        }
    }
}

module.exports = {typeDefs, resolvers}