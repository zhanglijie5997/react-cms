import { LoginType } from "@@/http/loginHttp/loginHttp";
import { createAction } from "redux-actions"

export enum HandleActionEnum {
    changeToken = "changeToken",
    changeRefreshToken = "refreshToken",
    changeUserMsg = "changeUserMsg"
};



export type changeUserMsgType = Omit<LoginType, "code" | "message">;

export interface UseSelectType {
    changeToken: string;
    changeRefreshToken: string;
    changeUserMsg: changeUserMsgType;
}

// 更改token
export const changeToken = createAction(HandleActionEnum.changeToken, (state: string) => state);

// 更改refreshtoken
export const changeRefreshToken = createAction(HandleActionEnum.changeRefreshToken, (state: string) => state);

// 更改用户信息
export const changeUserMsg = createAction(HandleActionEnum.changeUserMsg, (state: changeUserMsgType) => state);