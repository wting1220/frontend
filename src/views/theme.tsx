import React, { memo } from 'react'
import '../scss/theme.scss'
import { renderRoutes } from 'react-router-config'

export default memo(function Theme(props:any) {

  return (
    <div className='theme'>
      {renderRoutes(props.route.routes)}
    </div>
  )
})
