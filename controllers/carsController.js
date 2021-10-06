exports.anka = (req, res ) => {
    const data = require('../public/data/cars.json');

    res.json(data);
};

exports.quack = (x,y) => {
    y.sendefile('public/data/cars.html');
};