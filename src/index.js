import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import RulesRedirect from './views/rules-redirect'
import NotFound from './views/not-found'
import HowToInstallJavaForFabricMods from './views/how-to-install-java-for-fabric-mods'
import SetupAndInstallation from './views/setup-and-installation'
import HowToInstallTheFabricLoader from './views/how-to-install-the-fabric-loader'
import Rules from './views/rules'
import FAQ from './views/faq'
import Resources from './views/resources'
import HowToInstallupdateTheModPack from './views/how-to-installupdate-the-mod-pack'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={RulesRedirect} exact path="/rules-redirect-signup" />
        <Route component={NotFound} exact path="/404" />
        <Route
          component={HowToInstallJavaForFabricMods}
          exact
          path="/article-001"
        />
        <Route
          component={SetupAndInstallation}
          exact
          path="/setupandinstallation"
        />
        <Route
          component={HowToInstallTheFabricLoader}
          exact
          path="/article-002"
        />
        <Route component={Rules} exact path="/rules" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={Resources} exact path="/resources" />
        <Route
          component={HowToInstallupdateTheModPack}
          exact
          path="/article-003"
        />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
