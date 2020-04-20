import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

export default memo(function User({ route }:any) {
    return (
      <div className='usercontainer'>
        {renderRoutes(route.routes)}
      </div>
    )
})
 