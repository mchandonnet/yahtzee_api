const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  active: {
    type: Boolean
  },
  ones: {
    type: Number
  },
  twos: {
    type: Number
  },
  threes: {
    type: Number
  },
  fours: {
    type: Number
  },
  fives: {
    type: Number
  },
  sixes: {
    type: Number
  },
  top_sub: {
    type: Number
  },
  bonus: {
    type: Number
  },
  top_total: {
    type: Number
  },
  three_k: {
    type: Number
  },
  four_k: {
    type: Number
  },
  full_house: {
    type: Number
  },
  small_straight: {
    type: Number
  },
  large_straight: {
    type: Number
  },
  yahtzee: {
    type: Number
  },
  chance: {
    type: Number
  },
  lower_total: {
    type: Number
  },
  grand_total: {
    type: Number
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
