import React, { Component, useCallback, useEffect, useMemo, useState } from 'react';
import { Dropdown, Layout, Menu, Tag } from "antd";
import router_config, { SubListType } from '@@static/js/router_config';
import { AppstoreOutlined, DownOutlined, MailOutlined } from "@ant-design/icons";
import {  } from "react-router-dom";
import { Link, Route, RouteComponentProps, Switch, withRouter  } from "react-router-dom";
import { useSelector } from 'react-redux';
import { UseSelectType } from '@@/store/actions';
import getRouterConfigPage, { RouteConfigType } from './routes';
import system from './routes_list/routes_list';
import Index from '@@/pages/index';
import Role from '@@/pages/role/role';
import { Player } from 'video-react';
import Login from '@@pages/login/login';
import Routers from '../router/Router';
import styles from "./router.module.scss";
const { Sider, Header, Content } = Layout;

const { SubMenu } = Menu;
export interface MenuInfo {
    key: React.Key;
    keyPath: React.Key[];
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement>;
}

export interface TagsType {
    path: string;
    title: string;
    id: number;
}

type MenuListType = Omit<TagsType, "path">;

const Router = (props: RouteComponentProps) => {

    const menuList: MenuListType[] = [
        { title: "修改密码", id: 0 },
        { title: "退出登录", id: 1 },
    ];

    const [getHeaderSelect] = useState<string[]>(["0"]);

    const [getSelectHeader, setSelectHeader] = useState<number>(0); // 选中的头部导航

    const [getSiderSelect, setSiderSelect] = useState<string[]>(["-1"]);

    const [getSiderList, setSiderList] = useState<SubListType[]>();

    const [getTags, setTags] = useState<TagsType[]>([
        { path: "/index", title: "首页", id: 0 }
    ])

    const [getSelectTag, setSelectTag] = useState<number>(0); // 选中的tag

    const userMsg = useSelector((state: UseSelectType) =>  state.changeUserMsg);


    useEffect(() => {
        setSiderList(router_config[0].subList);
        console.log(props);
    }, [])

    const changeSelect = useCallback((e: MenuInfo) => {
        if(+e.key !== getSelectHeader) {
            setSiderSelect(["-1"]);
        }
        setSelectHeader(+e.key);
        setSiderList(router_config[+e.key].subList);
    }, [getSelectHeader])

    const headerTab = router_config.map((_, i: number) => <Menu.Item key={i} onClick={(e) => changeSelect(e)}>
        { _.title }
    </Menu.Item>);

    const changeSider = (e: MenuInfo, _: SubListType) => {
        const index = router_config.findIndex((__) => __.subList.includes(_));
        setSelectHeader(index);
        setSiderSelect([`${e.key}`]);
    } 

    // 跳转路由
    const goPath = (v: any) => {
        console.log(v);
        props.history.push(v);
    }

    const siderTab = useMemo(() => getSiderList?.map((_, i: number) => <SubMenu key={i} title={_.label}>
            {
                _.subs?.map(v => <Menu.Item key={v.index} onClick={() => goPath(v)} selectedKeys={getSiderSelect} >
                                    {v.title}
                                 </Menu.Item>)
            } 
    </SubMenu>) , [getSiderList, getSiderSelect])

    const tags = useMemo(() => getTags.map((_) => <Tag key={_.id} className="point" color={getSelectTag === _.id ? "blue" : ""} closable={true}>
                                                    {_.title}
                                                  </Tag>), [getTags, getSelectTag])

    const menu = menuList.map(_ => <Menu.Item key={_.id} >
        { _.title }
    </Menu.Item>)

    const onOpenChange = useCallback((openKeys: any) => {
        console.log(getSiderSelect, 'getSiderSelect', openKeys, 'openKeys');
        const lastOpenKey = openKeys.find((key: string) => getSiderSelect.indexOf(key) === -1);
        console.log(lastOpenKey, 'lastOpenKey');
        setSiderSelect([lastOpenKey])
    }, [getSiderSelect])

    return (
        <div className={`router ${styles.body}`} >
            123456666
            <Link to="/roleList">列表</Link>
            <Link to="/home">home</Link>
            <div >
                <Switch>
                    <Route path="/roleList" render={p => {
                        return <Role {...p}></Role>
                    }}>

                    </Route>
                </Switch>
            </div>
           {/* <Player width={'100px'} poster="https://video-react.js.org/assets/poster.png">
            <source
                src="https://heybooks-www.oss-cn-shenzhen.aliyuncs.com/img/home/audio/publicity.mp4"
                type="video/mp4"
                />
           </Player> */}
        </div>
    );
}

export default (Router);
