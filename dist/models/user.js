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
var userSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    email: String,
    password: {
        type: String,
        minlength: 5
    }
});
var User = mongoose_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map