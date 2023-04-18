const UserControll = require("../models/userControll")

module.exports.saveUserControllService = async (data) => {
    const result = await UserControll.create(data);
    return result;
}
module.exports.getUserControllService = async () => {
    const result = await UserControll.find({});
    return result;
}
module.exports.updateUserControllByIdService = async (id, data) => {
    const result = await UserControll.updateOne({ _id: id }, { $set: data }, { runValidators: true })
    return result;
}