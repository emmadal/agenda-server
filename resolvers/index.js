// @ts-nocheck
import { enterpriseModel as enterprise } from "../db/models/enterprise";
import { partyModel as party } from "../db/models/party";
import { religiousModel as religious } from "../db/models/religious";
import { societyModel as society } from "../db/models/society";

export const resolvers = {
  Query: {
    eventReligious: () => religious.find().sort({ date: -1 }),
    eventEnterprise: () => enterprise.find().sort({ name: 1 }),
    eventParty: () => party.find().sort({ name: 1 }),
    eventSociety: () => society.find().sort({ name: 1 }),
    oneReligious: (_, { id }) => religious.findById(id),
    oneEnterprise: (_, { id }) => enterprise.findById(id),
    oneSociety: (_, { id }) => society.findById(id),
    oneParty: (_, { id }) => party.findById(id)
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
     delEventReligious: async (_, { id }) => {
      await religious.deleteOne({ _id: id });
      return religious.find().sort({ date: -1 });
    },
    delEventEnterprise: async (_, { id }) => {
      await enterprise.deleteOne({ _id: id });
      return enterprise.find().sort({ date: -1 });
    },
    delEventEventParty: async (_, { id }) => {
      await party.deleteOne({ _id: id });
      return party.find().sort({ date: -1 });
    },
    delEventSociety: async (_, { id }) => {
      await society.deleteOne({ _id: id });
      return society.find().sort({ date: -1 });
    },
  }
};
