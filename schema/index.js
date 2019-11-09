import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    eventReligious: [Religious]!
    eventEnterprise: [Enterprise]!
    eventParty: [Party]!
    eventSociety: [Society]!
  }

  type Cover {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Religious {
    id: ID
    title: String!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: Cover!
  }

  type Enterprise {
    id: ID
    expiration_date: String!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: Cover!
  }

  type Party {
    id: ID
    expiration_date: String!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: Cover!
  }

  type Society {
    id: ID
    expiration_date: String!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: Cover!
  }

  input EventCover {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input EventReligious {
    title: String!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: EventCover!
  }

  input EventEnterprise {
    title: String!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: EventCover!
  }

  input EventParty {
    title: String!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: EventCover!
  }

  input EventSociety {
    title: String!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: EventCover!
  }

  type Mutation {
    addEventReligious(input: EventReligious): Religious!
    addEventEnterprise(input: EventEnterprise): Enterprise!
    addEventParty(input: EventParty): Party!
    addEventSociety(input: EventSociety): Society!
  }
`;
