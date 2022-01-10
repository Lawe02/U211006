exports.data = (req, res ) => {
    const data = require('../public/data/cars.json');

    res.json(data);
};

exports.anka = (x, y) => {
    y.sendfile('public/data/index.html');
};

exports.quack = (x, y) => {
   y.sendfile('public/data/cars.html')
     
};