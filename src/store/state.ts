import { changeUserMsgType } from "./actions";

export const token =  sessionStorage.getItem("token") ?? "";

export const refreshToken = sessionStorage.getItem("refreshToken") ?? "";

export const userMsg: changeUserMsgType = JSON.parse(sessionStorage.getItem("userMsg")!)  ?? {
    data: {
        refreshToken: "",
        token: "",
        sysUser: {
            email: "",
            phoneNum: "",
            trueName: ""
        }
    }
};