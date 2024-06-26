const  { model } = require("mongoose");

const { OrdersShema } = require("../schemas/OrdersSchema");

const OrdersModel = new model ("order", OrdersShema);

module.exports = {OrdersModel};