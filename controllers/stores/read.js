import Store from "../../models/Store.js";

// See all stores
let allStores = async (req, res, next) => {
    try {
        const all = await Store.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error);
    }
};

// View a store based on its address
let storeByAddress = async (req, res, next) => {
    try {
        let address = req.params.address;
        let store = await Store.findOne({ address: address });

        return res.status(200).json({ response: store });
    } catch (error) {
        next(error);
    }
};

// View a store by name
let storeByName = async (req, res, next) => {
    try {
        let name = req.params.name;
        let store = await Store.findOne({ name: name });

        return res.status(200).json({ response: store });
    } catch (error) {
        next(error);
    }
};

export { allStores, storeByAddress, storeByName };