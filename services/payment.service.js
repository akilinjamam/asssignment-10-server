const Payment = require("../models/payment");

module.exports.savePaymentService = async (data) => {
    await Payment.create(data);

}

module.exports.getPaymentService = async () => {
    const result = await Payment.find();
    return result;
}

module.exports.updatePaymentService = async (id, data) => {
    const result = await Payment.updateOne({ _id: id }, { $set: data }, { runValidators: true });

    return result;
}