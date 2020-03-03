const mongoose = require('mongoose');
const Network = mongoose.model('Network');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {
  all(request, response) {
    // find all
    Network.find()
      .then((networks) => {
        response.json({ networks: networks });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Network.findById(request.params.id)
      .then((network) => {
        response.json({ network: network });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Network.create(request.body)
      .then((newNetwork) => {
        response.json({ network: newNetwork });
      })
      .catch((errors) => {
        response.json({ errors: flattenErrorsToArr(errors) });
      });
  },

  delete(request, response) {
    Network.findByIdAndDelete(request.params.id)
      .then((deletedNetwork) => {
        response.json({ network: deletedNetwork });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Network.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedNetwork) => {
        response.json({ network: updatedNetwork });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}