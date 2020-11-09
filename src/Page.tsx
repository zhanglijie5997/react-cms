import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Switch, Route } from "react-router-dom";
import { getRouterConfigPage } from './router/routes';
import { UseSelectType } from './store/actions';
const Page = (props: any) => {
    const storeToken = useSelector((state: UseSelectType) => state.changeToken);
    useEffect(() => {
        console.log(props);
    }, [storeToken, props.hidtory])
    return (
        <HashRouter>
            <Switch>
                <Route path="/index" exact={true}  component={getRouterConfigPage[0].components}>
                    {/* <Switch>
                        <Route path="/role" exact={true}  component={getRouterConfigPage[2].components} />
                    </Switch> */}
                </Route>
                <Route path="/login" exact={true} component={getRouterConfigPage[1].components}></Route>
            </Switch>
        </HashRouter>
    );
}

export default Page;
