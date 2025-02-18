import { Schema, model } from 'mongoose'

const SeasonSchema = new Schema({
  team: { type: String, required: true },
  nation: { type: String, required: true },
  seasonStartYear: { type: Number, required: true },
  numbers: {
    matches: { type: Number, required: true },
    goals: { type: Number, required: true },
    assistances: { type: Number, required: true }
  },
  individualAwards: {
    bestOfTheMatch: { type: Number, required: true },
    selectionOfTheWeek: { type: Number, required: true },
    bestOfTheMonth: { type: Number, required: true },
    bestPlayerOfTheYear: { type: Boolean, required: true },
  },
  collectiveAwards: {
    leaguePosition: { type: Number, required: true, min: 1, max: 20 },
    leagueCup: { type: String, enum: ['champions', 'final', 'semifinal', 'quarter_finals'] },
    nationCup: { type: String, enum: ['champions', 'final', 'semifinal', 'quarter_finals'] },
    nationSuperCup: { type: String, enum: ['champions', 'final'] },
    uefaSuperCup: { type: String, enum: ['champions', 'final'] },
    championsLeague: { type: String, enum: ['champions', 'final', 'semifinal', 'quarter_finals'] },
    europaLeague: { type: String, enum: ['champions', 'final', 'semifinal', 'quarter_finals'] },
    libertadores: { type: String, enum: ['champions', 'final', 'semifinal', 'quarter_finals'] },
    copaAmerica: { type: String, enum: ['champions', 'final', 'semifinal', 'quarter_finals'] },
    worldCup: { type: String, enum: ['champions', 'final', 'semifinal', 'quarter_finals'] },
  }
}, {
  // timestamps: { createdAt, updatedAt },
  versionKey: false
})

export default model('season', SeasonSchema)