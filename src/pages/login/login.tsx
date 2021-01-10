import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Card, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDebounce } from '@@/utils/utils';
// import { useDispatch } from 'react-redux';
// import { changeRefreshToken, changeToken, changeUserMsg } from "@@/store/actions";
// interface LoginFormType {
//     username: string;
//     password: string;
//     remember: boolean
// }

const Login = (props: RouteComponentProps) => {
    // const dispatch = useDispatch();

    useEffect(() => {
        console.log(props);
    }, [props])

    const onFinish = useDebounce(async (e: any) => { 
        // if(!e) {
        //     console.log(e);
        //     return;
        // }
        // const data = e as LoginFormType;
        // const _ =  await login(data.username, data.password);
        // console.log(_);
        // dispatch(changeToken(_.data.token));
        // dispatch(changeRefreshToken(_.data.refreshToken));
        // dispatch(changeUserMsg({data: _.data}));
        props.history.replace("/");
    }, 1000);
    return (
        <div className="flexCenter" >
            <Card title="欢迎登录速百读管理后台" className=" boxShow" style={{ width: "300px", height: "300px", textAlign: "center" }}>
                <Form
                    name="normal_login"
                    className="login-form "
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        style={{ textAlign: "left" }}
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item
                        style={{ textAlign: "left" }}
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请输入密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Login;
