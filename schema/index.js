import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    eventReligious: [Religious]!
    eventEnterprise: [Enterprise]!
    eventParty: [Party]!
    eventSociety: [Society]!
  }

  type File {
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
    # cover: File!
  }

  type Enterprise {
    id: ID
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    # cover: File!
  }

  type Party {
    id: ID
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    # cover: File!
  }

  type Society {
    id: ID
    categories: Categories!
    title: String!
    hour: String!
    place: String!
    date: String!
    # cover: File!
  }

  enum Categories{
    Religieux
    Entreprise
    Divertissement
    Societe
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
    # cover: EventCover!
  }

  input EventEnterprise {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    # cover: EventCover!
  }

  input EventParty {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    # cover: EventCover!
  }

  input EventSociety {
    title: String!
    categories: Categories!
    hour: String!
    place: String!
    date: String!
    # cover: EventCover!
  }

  type Mutation {
    addEventReligious(input: EventReligious): Religious!
    addEventEnterprise(input: EventEnterprise): Enterprise!
    addEventParty(input: EventParty): Party!
    addEventSociety(input: EventSociety): Society!
  }
`;
