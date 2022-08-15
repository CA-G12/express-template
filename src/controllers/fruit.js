const path = require('path');
// handle '/fruit' get and post requests
const getFruit = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'fruit.html'));
  };

  const postFruit = (req, res) => {
    console.log(req.body.name, req.body.image_url);
    res.redirect('/fruit');
  };

  module.exports = {getFruit, postFruit};