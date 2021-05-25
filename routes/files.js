const {Router} = require("express");
const Stream = require("../model/files");
const route = Router();

route.get('/', async(req, res) => {
    try {
        let results = await Stream.find({});
        res.status(200).send(results);     
    } catch (e) {
        console.log(e)
        
    }
});

route.post('/', async(req, res) => {
    try {
        const data = new Stream({
            uuid: "0001111",
            fileName: "Mr Robot",
            size: 20
        });
        const results = await data.save();
        res.status(200).send(results);     
    } catch (e) {
        res.status(500).send({
            err : [`ohh something wrong happens ${e}`],
        });
    }
});

module.exports = route;