/**
 * Created by Galina on 06.07.2017.
 */
const noteRoutes = require('./actions');

module.exports = function(app, db) {
    noteRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};