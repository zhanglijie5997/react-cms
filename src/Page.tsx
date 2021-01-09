import React from 'react';
// import { useSelector } from 'react-redux';
import { HashRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import { getRouterConfigPage } from './router/routes';
// import { UseSelectType } from './store/actions';
const Page = (props: RouteComponentProps) => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/index" exact={true} component={getRouterConfigPage[0].components}>
                    {/* <Switch>
                        <Route path="/role" exact={true}  component={getRouterConfigPage[2].components} />
                    </Switch> */}
                </Route>
                <Route path="/login" exact={true} component={getRouterConfigPage[1].components}></Route>
            </Switch>
        </HashRouter>
    );
};

export default Page;
