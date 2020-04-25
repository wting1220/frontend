import React, { memo, Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import jwt_decode from 'jwt-decode'

export default memo(function White({ route }:any) {

  return (
    <Fragment>
      {renderRoutes(route.routes)}
    </Fragment>
  )
})