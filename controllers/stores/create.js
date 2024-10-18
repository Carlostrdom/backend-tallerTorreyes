import Store from "../../models/Store.js";

let createStore = async (req, res) => {
    try {
        let StoreA = req.body;
        let newStore = await Store.create(StoreA);
        return res.status(200).json({
            response: newStore
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};


let createStores = async (req, res) => {
    try {
        let createStores = req.body;
        let newStores = await Store.insertMany(createStores);
        return res.status(200).json({
            response: newStores
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};



export { createStore, createStores };