/*
 * @Author: your name
 * @Date: 2020-10-28 15:27:55
 * @LastEditTime: 2020-11-08 12:19:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/router/routes.ts
 */
import loadable, { LoadableComponent } from "@loadable/component";
import { RouteComponentProps } from "react-router";
import system from "./routes_list/routes_list";


const router = loadable(() => import("./Router"));
const login = loadable(() => import("@@/pages/login/login"));
const role = loadable(() => import("@@/pages/role/role"));
const index = loadable(() => import("@@/pages/index/index"));


export const getRouterConfigPage: RouteConfigType[] = [
    {
        path: "/",
        title: "首页",
        excat: true,
        components: router,
        children: [
            
        ]
    },
    {
        path: "/role",
        title: "登录",
        excat: true,
        components: role
    },
    {
        path: "/home",
        title: "登录",
        excat: true,
        components: index
    },
    {
        path: "/login",
        title: "登录",
        excat: true,
        components: login,
    },
];

export interface RouteConfigType {
    path: string;
    title: string;
    excat: boolean;
    components: LoadableComponent<any >,
    children?: Array<{
        path: string;
        title: string;
        excat: boolean;
        components: LoadableComponent<RouteComponentProps>,
    }>
}

export default getRouterConfigPage.concat(system);