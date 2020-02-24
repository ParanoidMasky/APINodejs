"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = __importDefault(require("../models/post"));
var mongoose_1 = __importDefault(require("mongoose"));
//need to import commentaries
var commentary_1 = require("../models/commentary");
//need to import User
var user_1 = __importDefault(require("../models/user"));
//func to save post
var savePost = function (body, email) { return __awaiter(void 0, void 0, void 0, function () {
    var author, newPost, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                author = user_1.default.findOne({ email: email });
                _a = post_1.default.bind;
                _b = {
                    _id: new mongoose_1.default.Types.ObjectId(),
                    title: body.title,
                    date: body.date
                };
                return [4 /*yield*/, author];
            case 1:
                newPost = new (_a.apply(post_1.default, [void 0, (_b.author = (_c.sent())._id,
                        _b.comments = [],
                        _b.totalComments = body.totalComments,
                        _b.content = body.content,
                        _b)]))();
                return [4 /*yield*/, newPost.save()];
            case 2: return [2 /*return*/, _c.sent()];
        }
    });
}); };
//func to find post by id
var findById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, post_1.default.findById(id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//func to find post by id and modify it
var findbyIdnModify = function (id, body) { return __awaiter(void 0, void 0, void 0, function () {
    var post;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, findById(id)];
            case 1:
                post = (_a.sent());
                post.title = body.title;
                post.content = body.content;
                return [4 /*yield*/, post.save()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//func to find post by id and delete it
var findByIdnDel = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, post_1.default.findByIdAndDelete(id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//func to leave a comment inside post
var leaveCommentOnPost = function (id, body, email) { return __awaiter(void 0, void 0, void 0, function () {
    var post, author, newComent, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, findById(id)];
            case 1:
                post = (_c.sent());
                author = user_1.default.findOne({ email: email });
                _a = commentary_1.Commentary.bind;
                _b = {
                    _id: new mongoose_1.default.Types.ObjectId(),
                    comment: body.comment
                };
                return [4 /*yield*/, author];
            case 2:
                newComent = new (_a.apply(commentary_1.Commentary, [void 0, (_b.author = (_c.sent()).id,
                        _b.date = body.date,
                        _b)]))();
                post.comments.push(newComent);
                post.totalComments += 1;
                newComent.save();
                return [2 /*return*/, post.save()];
        }
    });
}); };
//export funcs
exports.default = {
    findById: findById,
    findByIdnDel: findByIdnDel,
    findbyIdnModify: findbyIdnModify,
    leaveCommentOnPost: leaveCommentOnPost,
    savePost: savePost
};
//# sourceMappingURL=postRepository.js.map