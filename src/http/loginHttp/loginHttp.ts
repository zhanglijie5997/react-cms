import { post, PublicType } from "../http";

export enum LoginEnum {
    login = "/admin/login"
}


export interface LoginType extends PublicType {
    data: {
        refreshToken: string; // 刷新token
        token: string; // token
        sysUser: {
            email: string; // 邮箱
            phoneNum: string; // 电话
            trueName: string; // 真实姓名
        }
    }
}
/**
 * 登录
 * @param userName 用户名
 * @param password 密码
 */
export const login = (userName: string, password: string): Promise<LoginType> => post(LoginEnum.login, {
    userName, password
});