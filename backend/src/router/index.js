// router setting file
const express = require("express");
const router = express.Router();

const route = [
    {
        router: require("./auth/index"),
        path: "/auth",
    },
];

route.forEach((routeObj) => {
    router.use(routeObj.path, routeObj.router);
});

module.exports = router;
