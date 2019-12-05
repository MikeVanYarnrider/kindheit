const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const parentUserSchema = new Schema({
  username: String,
  password: String,
  type: String,
  email: String,
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Child"
    }
  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const ParentUser = mongoose.model('ParentUser', parentUserSchema);
module.exports = ParentUser;
