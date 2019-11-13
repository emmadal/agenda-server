// @ts-nocheck
import { enterpriseModel as enterprise } from "../db/models/enterprise";
import { partyModel as party } from "../db/models/party";
import { religiousModel as religious } from "../db/models/religious";
import { societyModel as society } from "../db/models/society";

export const resolvers = {
  Query: {
    eventReligious: () => religious.find().sort({ name: 1 }),
    eventEnterprise: () => enterprise.find().sort({ name: 1 }),
    eventParty: () => party.find().sort({ name: 1 }),
    eventSociety: () => society.find().sort({ name: 1 })
  },

  Mutation: {
    addEventReligious: (_, { input }) => {
      return religious(input).save();
    },
    addEventEnterprise: (_, { input }) => {
      return enterprise(input).save();
    },
    addEventSociety: (_, { input }) => {
      return society(input).save();
    },
    addEventParty: (_, { input }) => {
      return party(input).save();
    },
  }
};
