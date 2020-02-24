"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var commentarySchema = new mongoose_1.default.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    comment: String,
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    date: String
});
exports.Commentary = mongoose_1.default.model('Comment', commentarySchema);
//# sourceMappingURL=commentary.js.map