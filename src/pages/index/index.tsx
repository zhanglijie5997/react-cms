import React, { Component,  useRef, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom';
import {  RouteComponentProps } from 'react-router';



class Test extends Component {
    node: HTMLElement;
    constructor(props: any) {
        super(props);
        this.node = document.createElement("div");
        document.body.appendChild(this.node);
    }
    render() {
        return createPortal(this.props.children, this.node);
    }
}

class XSearch extends HTMLElement {
    
}

customElements.define('x-search', XSearch);
const Index = (props: RouteComponentProps) => {
    const three = useRef<HTMLDivElement>(null);
    const [getV, setV] = useState<boolean>();

    useLayoutEffect(() => {
        initDom()
        console.log(123);
    }, [])


    const initDom = async () => {
        if( window.Notification) {
            const _ = await window.Notification.requestPermission()
            console.log(_, '.....');
            new window.Notification("test", {
                body: "..."
            });
        }
    }
    const creates = () => {
        setV(true);
        console.log(`传送门`);
        // window.addEventListener("install")
        // ReactDOM.render(<Test />, document.getElementById("test"))
        // createPortal(<Test></Test>, document.getElementById("root")!)
    }
    return (
        <div className="three" ref={three} onClick={() =>creates()}>
            {/* @ts-ignore */}
            { getV ? <Test><x-search>123</x-search> </Test> : null}
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


