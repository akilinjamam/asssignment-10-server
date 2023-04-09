const GlobalEvent = require("../models/eventGlobal")



module.exports.saveGlobalEventService = async (data) => {
    const result = await GlobalEvent.create(data);
    return result;
}

module.exports.getGlobalEventService = async () => {
    const result = await GlobalEvent.find({});
    return result;
}
module.exports.getGlobalEventByIdService = async (id) => {
    const result = await GlobalEvent.findById(id);
    return result;
}
module.exports.deleteGlobalEventByIdService = async (id) => {
    const result = await GlobalEvent.deleteOne({ _id: id });
    return result;
}
module.exports.updateGlobalEventByIdService = async (id, data) => {
    const result = await GlobalEvent.updateOne({ _id: id }, { $set: data }, { runValidators: true })
    return result
}