import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Project from './pages/project/Project'
import ProjectAdd from './pages/project/ProjectAdd'
import ProjectEdit from './pages/project/ProjectEdit'
import Host from './pages/host/Host'
import HostAdd from './pages/host/HostAdd'
import HostEdit from './pages/host/HostEdit'
import Role from './pages/role/Role'
import RoleAdd from './pages/role/RoleAdd'
import RoleEdit from './pages/role/RoleEdit'
import Playbook from './pages/playbook/Playbook'
import PlaybookAdd from './pages/playbook/PlaybookAdd'
import PlaybookEdit from './pages/playbook/PlaybookEdit'
import Config from './pages/config/Config'
import ConfigAdd from './pages/config/ConfigAdd'
import ConfigEdit from './pages/config/ConfigEdit'
import Command from './pages/command/Command'
import CommandAdd from './pages/command/CommandAdd'
import CommandEdit from './pages/command/CommandEdit'

class MainRouter extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/projects" />
          </Route>
          <Route exact path='/projects/:id/edit' component={ProjectEdit}/>
          <Route exact path='/projects/add' component={ProjectAdd}/>
          <Route exact path='/projects' component={Project}/>
          <Route exact path='/hosts/:id/edit' component={HostEdit}/>
          <Route exact path='/hosts/add' component={HostAdd}/>
          <Route exact path='/hosts' component={Host}/>
          <Route exact path='/roles/:id/edit' component={RoleEdit}/>
          <Route exact path='/roles/add' component={RoleAdd}/>
          <Route exact path='/roles' component={Role}/>
          <Route exact path='/playbooks/:id/edit' component={PlaybookEdit}/>
          <Route exact path='/playbooks/add' component={PlaybookAdd}/>
          <Route exact path='/playbooks' component={Playbook}/>
          <Route exact path='/configs/:id/edit' component={ConfigEdit}/>
          <Route exact path='/configs/add' component={ConfigAdd}/>
          <Route exact path='/configs' component={Config}/>
          <Route exact path='/commands/:id/edit' component={CommandEdit}/>
          <Route exact path='/commands/add' component={CommandAdd}/>
          <Route exact path='/commands' component={Command}/>
        </Switch>
      </main>
    )
  }
}

export default MainRouter
