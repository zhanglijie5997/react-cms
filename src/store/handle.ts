import { handleActions, Action } from "redux-actions";
import { token, refreshToken, userMsg } from "./state";
import { changeUserMsgType, HandleActionEnum } from "./actions";

const changeToken = handleActions<string>({
    [HandleActionEnum.changeToken]: (state: string, action: Action<string>) => { 
       console.log(11)
        // 需要持久保留的状态存在localStorage里， 不需要持久保存的存在sessionStorage里;
       sessionStorage.setItem("token", action.payload)
       return action.payload;
    }
}, token);


const changeRefreshToken = handleActions<string>({
    [HandleActionEnum.changeRefreshToken]: (state: string, action: Action<string>) => { 
       console.log(11)
        // 需要持久保留的状态存在localStorage里， 不需要持久保存的存在sessionStorage里;
       sessionStorage.setItem("refreshToken", action.payload)
       return action.payload;
    }
}, refreshToken);


const changeUserMsg = handleActions<changeUserMsgType>({
    [HandleActionEnum.changeUserMsg]: (state: changeUserMsgType, action: Action<changeUserMsgType>) => { 
       console.log(action.payload)
        // 需要持久保留的状态存在localStorage里， 不需要持久保存的存在sessionStorage里;
       sessionStorage.setItem("userMsg", JSON.stringify(action.payload))
       return action.payload;
    }
}, userMsg);

export default {
    changeToken,
    changeRefreshToken,
    changeUserMsg
}
