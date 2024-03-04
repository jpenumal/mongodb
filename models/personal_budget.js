const m = require('mongoose')
const Personalbudget_schema = new m.Schema({
    title:{
        type: String,
        required: true,
    },
    budget:{
        type: Number,
        required: true,
    },
    color:{
        type: String,
        required: true,
        match: /^#[0-9A-Fa-f]{6}$/,
    }
},{collection: 'budget'})

module.exports = m.model('Mybudget', Personalbudget_schema)