/**
 * Created by Galina on 06.07.2017.
 */
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db) {
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('todo').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
}