import React, { memo } from 'react'
import './App.css'
import { Layout, BackTop } from 'antd'
import routes from './router'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'

export default memo(function App() {

  return (
    <div className="App">
      <BackTop />
      <Layout>
        <Router>
          {renderRoutes(routes)}
        </Router>
      </Layout>
    </div>
  )
})


