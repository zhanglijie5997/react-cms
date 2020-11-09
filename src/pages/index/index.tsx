import { getRouterConfigPage, RouteConfigType } from '@@/router/routes';
import React, { Component, useEffect, useRef, useState } from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router';
import { BoxGeometry, LineBasicMaterial, Vector3, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
const Index = (props: RouteComponentProps) => {
    const three = useRef<HTMLDivElement>(null);
    const [getV, setV] = useState<string>('');
    useEffect(() => {
        // init();
        console.log(getV);
    }, [getV])
    return (
        <div className="three" ref={three}>
            {/* {
            getRouterConfigPage.map((item: RouteConfigType, index: number) => {
                return <Route path={item.path} exact={item.excat} key={index} render={(itemProps: RouteComponentProps) => {
                    if (item.path) {
                        document.title = item.title;
                        return <item.components {...itemProps} />
                    }
                    // return <item.component {...itemProps} />
                    return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                }} />
            })
          } */}
          123jjjjfff
        </div>
    )
}

export default Index;


