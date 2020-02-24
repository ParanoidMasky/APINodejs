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
var postSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    title: String,
    date: String,
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Comment' }],
    totalComments: Number,
    content: String
});
var Post = mongoose_1.default.model('Post', postSchema);
exports.default = Post;
//# sourceMappingURL=post.js.map