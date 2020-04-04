"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var appRouter = express_promise_router_1.default();
appRouter.get('/test', function () { return console.log('test works'); });
var app = express_1.default();
app.use(appRouter);
app.listen(3000);
