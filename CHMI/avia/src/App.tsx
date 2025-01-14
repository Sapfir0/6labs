import React from 'react';
import { MainPage } from "./Components/Pages/MainPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { ClientRoutes } from "./Config/Config";
import { RunCompany } from "./Components/Pages/RunCompany";
import { GroupCompany } from "./Components/Pages/GroupCompany";
import { PersonalCompany } from "./Components/Pages/PersonalCompany";
import { CompanyParticipants } from "./Components/Pages/CompanyParticipants";
import "./App.css"
import { CompanySettings } from "./Components/Pages/CompanySettings";
import { ArchiveCompany } from "./Components/Pages/ArchiveCompany";
import { MainHeader } from './Components/Header';


function App() {
    return (
        <>
            <Router>
                <MainHeader />

                <Switch>
                    <Route component={ArchiveCompany} path={ClientRoutes.archiveCompany} />
                    <Route component={CompanyParticipants} path={ClientRoutes.companyParticipants.template} />
                    <Route component={GroupCompany} path={ClientRoutes.groupCompany.template} />
                    <Route component={PersonalCompany} path={ClientRoutes.company.template} />
                    <Route component={CompanySettings} path={ClientRoutes.settings.template} />
                    <Route component={RunCompany} path={ClientRoutes.runCompany} />
                    <Route component={MainPage} path={ClientRoutes.index} />

                    <Redirect to={ClientRoutes.index} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
