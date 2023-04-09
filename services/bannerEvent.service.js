const BannerEvent = require("../models/eventBanner")


module.exports.saveBannerEventService = async (data) => {
    const result = await BannerEvent.create(data);
    return result;
}
module.exports.getBannerEventService = async (data) => {
    const result = await BannerEvent.find({});
    return result;
}

module.exports.deleteBannerEventService = async (id) => {
    const result = await BannerEvent.deleteOne({ _id: id })
    return result;
}

module.exports.updateBannerEventService = async (id, data) => {
    const result = await BannerEvent.updateOne({ _id: id }, { $set: data }, { runValidators: true })
    return result;
}

