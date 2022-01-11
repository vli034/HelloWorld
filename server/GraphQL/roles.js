const { gql } = require('apollo-server-express')
const db = require('../config/database');

// in Type Role we added the user type because we want to let gql know to request a user 
typeDefs = gql`
    extend type Query {
        roles: [Role]
        role(id: ID!): Role
    }
    type Role {
        id: ID!
        role: String
        user_id: Int
        user: User
    }
   
`
 resolvers = {
    Query: {
        roles: async () => db.roles.findAll(),
        role: async (obj, args, context, info) => db.roles.findByPk(args.id)
    }, 
    Role: {
        user: async (obj, args, context, info) => db.users.findByPk(obj.user_id)  
        //  this will resolve user inside of the role - the key is Role and this is how we request a type inside another type - user is inside the role type
    }

}


module.exports = {typeDefs, resolvers}