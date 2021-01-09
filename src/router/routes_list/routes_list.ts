import { RouteConfigType } from "@@/router/routes";
import loadable from "@loadable/component";
const roleList = loadable(() => import("@@/pages/role/role"))
const index = loadable(() => import("@@/pages/index/index"));
const login = loadable(() => import("@@/pages/login/login"));


const system: RouteConfigType[] = [
    { 
        path: "/roleList",
        title: "系统",
        excat: true,
        components: roleList
    },
    { 
        path: "/index",
        title: "首页",
        excat: true,
        components: index
    },
    { 
        path: "/login",
        title: "首页",
        excat: true,
        components: login
    }
];

export default system;