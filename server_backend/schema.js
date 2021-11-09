const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
tech: {
type: String,
required: true
},
sub: {
type: String,
required: true,
default: false
}
})
const Project = mongoose.model('project', projectSchema)
module.exports = Project