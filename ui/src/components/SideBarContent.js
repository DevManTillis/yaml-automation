import React from 'react'
import PropTypes from 'prop-types'
import SideBarPanel from './SideBarPanel'
import { Link } from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  }
}

const SidebarContent = (props) => {
  const { toggleSidebar } = props
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar

  const tabs = [
    { to: '/projects', title: 'Projects' },
    { to: '/hosts', title: 'Hosts' },
    { to: '/roles', title: 'Roles' },
    { to: '/playbooks', title: 'Playbooks' },
    { to: '/configs', title: 'Configs' },
    { to: '/commands', title: 'Commands' }
  ];

  return (
    <SideBarPanel title={'CRUD'} style={style}>
      <div style={styles.content}>
        { tabs && tabs.map((tab, idx) => (
          <Link key={idx} to={tab.to} style={styles.sidebarLink} onClick={toggleSidebar}>{tab.title}</Link>
        ))}
      </div>
    </SideBarPanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object
}

export default SidebarContent
