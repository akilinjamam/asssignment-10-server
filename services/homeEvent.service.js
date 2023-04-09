const HomeEvent = require('../models/eventHome');


module.exports.saveHomeEventService = async (data) => {
    const homeEvent = await HomeEvent.create(data);
    return homeEvent;
}

module.exports.getHomeEventService = async () => {
    const homeEvent = await HomeEvent.find({});
    return homeEvent;
}

module.exports.getHomeEventByIdService = async (id) => {
    const result = await HomeEvent.findById(id);
    return result;
}

module.exports.deleteHomeEventByIdService = async (id) => {
    const result = await HomeEvent.deleteOne({ _id: id });
    return result;
}
module.exports.updateHomeEventByIdService = async (id, data) => {
    const result = await HomeEvent.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    return result;
}

