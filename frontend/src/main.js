"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
require("./style.css");
var App_vue_1 = require("./App.vue");
var Home_vue_1 = require("./pages/Home.vue");
var Item_vue_1 = require("./pages/Item.vue");
var vue_router_1 = require("vue-router");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: [{
            path: "/",
            component: Home_vue_1.default
        },
        {
            path: "/item/:id",
            component: Item_vue_1.default
        }]
});
var app = (0, vue_1.createApp)(App_vue_1.default);
app.use(router);
app.mount('#app');
