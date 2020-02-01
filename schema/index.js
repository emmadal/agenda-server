import {gql} from "apollo-server";

export const typeDefs = gql `
  type Query {
    eventReligious: [Religious]!
    eventEnterprise: [Enterprise]!
    eventParty: [Party]!
    eventSociety: [Society]!
    eventSport: [Sport]!
    eventPolitics: [Politics]!
    oneReligious(id: ID!): Religious!
    oneEnterprise(id: String!): Enterprise!
    oneSociety(id: String!): Society!
    oneParty(id: String!): Party!
    oneSport(id: String!): Sport!
    onePolitics(id: String!): Politics!
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Religious {
    id: ID!
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: File!
  }

  type Sport {
    id: ID!
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: File!
  }

  type Politics {
    id: ID!
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: File!
  }

  type Enterprise {
    id: ID
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: File!
  }

  type Party {
    id: ID
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: File!
  }

  type Society {
    id: ID
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    cover: File!
  }

  enum Categories {
    Religieux
    Entreprise
    Divertissement
    Societe
    Sport
    Politique
  }

  input EventReligious {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    cover: Upload!
  }

  input EventPolitic {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    cover: Upload!
  }

  input EventSport {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    cover: Upload!
  }

  input EventEnterprise {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    cover: Upload
  }

  input EventParty {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    cover: Upload!
  }

  input EventSociety {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    cover: Upload!
  }

  type Mutation {
    addEventReligious(input: EventReligious): Religious!
    addEventEnterprise(input: EventEnterprise): Enterprise!
    addEventParty(input: EventParty): Party!
    addEventSociety(input: EventSociety): Society!
    addEventSport(input: EventSport): Sport!
    addEventPolitic(input: EventPolitic): Politics!

    delEventReligious(id: ID!): [Religious]!
    delEventEnterprise(id: ID!): [Enterprise]!
    delEventParty(id: ID!): [Party]!
    delEventSociety(id: ID!): [Society]!
    delEventSport(id: ID!): [Sport]!
    delEventPolitic(id: ID!): [Politics]!

    updateEventReligious(id: ID!, input: EventReligious): [Religious]!
    updateEventEnterprise(id: ID!, input: EventEnterprise): [Enterprise]!
    updateEventParty(id: ID!, input: EventParty): [Party]!
    updateEventSociety(id: ID!, input: EventSociety): [Society]!
    updateEventPolitic(id: ID!, input: EventPolitic): [Politics]!
    updateEventSport(id: ID!, input: EventSport): [Sport]!


  }
`;
