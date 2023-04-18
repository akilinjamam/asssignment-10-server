const UserCart = require("../models/userCart")

module.exports.saveUserCartService = async (data) => {

    const result = await UserCart.create(data);
    return result;
};

module.exports.getUserCartDataService = async () => {
    const result = await UserCart.find({});
    return result;
}

module.exports.getUserCartByEmailService = async (queryEmail) => {
    const result = await UserCart.find(queryEmail);
    return result;
};
module.exports.getUserCartByIdService = async (id) => {
    const result = await UserCart.findById({ _id: id });
    return result;
};

module.exports.updateUserCartByIdService = async (data) => {
    const result = await UserCart.updateMany({ _id: data.ids }, data.data, { runValidators: true });
    return result;
};

module.exports.deleteUserCartByBulkService = async (ids) => {
    const result = await UserCart.deleteMany({ _id: ids });
    return result;
};

module.exports.updateUserByOnlyIdService = async (id, data) => {
    const result = await UserCart.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    return result;
};
module.exports.deleteUserCartByOnlyIdService = async (id) => {
    const result = await UserCart.deleteOne({ _id: id });
    return result;
};

