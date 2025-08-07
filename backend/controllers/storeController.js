const { json } = require("body-parser");
const config = require("../utils/config");
const logger = require("../utils/logger");
const Store = require("../models/StoreSchema");
const Plan = require("../models/PricePlanSchema")


const addStore = async(req, res, next) =>{
    const {store_location, currency, tax_percentage, premium_items} = req.body;

    const store = await Store.findOne({"store_location": store_location});
    console.log(store);
    if(store)
        return res.status(400).json({message : "Store with this location already exists"});

    await Store.insertOne({store_location, currency, tax_percentage, premium_items});
    return res.status(200).json({message: "Store Added Successfully"});
};

const updateStore = async(req, res, next) =>{
    const {store_location} = req.params;
    const store = req.body;
    await Store.findOneAndUpdate({store_location : store_location}, store);
    return res.status(200).json({message : "Store updated Sucessfully."})
};


const addPlan = async(req, res, next) =>{
    const {store_location, valid_from, valid_to, items} = req.body;
    const plan = await Plan.insertOne({valid_from, valid_to, items});
    return res.status(200).json({message : "Plan Created Sucessfully", store_location:store_location, plan_id : plan.pid});

};

const getPlan = async(req, res, next) =>{
    const {plan_id} = req.params;
    const plan = await Plan.findById(plan_id);
    return res.status(200).json({plan : plan});
};

module.exports = {addStore, updateStore, addPlan, getPlan};