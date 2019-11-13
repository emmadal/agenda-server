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
    categories: Categories!
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
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: Cover!
  }

  type Party {
    id: ID
    expiration_date: String!
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: Cover!
  }

  type Society {
    id: ID
    expiration_date: String!
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: Cover!
  }

  enum Categories{
    RELIGIOUS
    ENTERPRISE
    PARTY
    SOCIETY
  }

  input EventCover {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input EventReligious {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: EventCover!
  }

  input EventEnterprise {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: EventCover!
  }

  input EventParty {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    expiration_date: String!
    cover: EventCover!
  }

  input EventSociety {
    title: String!
    categories: Categories!
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
