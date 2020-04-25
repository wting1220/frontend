import React, { Fragment, memo, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MainHeader from "../components/header/header";
import { renderRoutes } from "react-router-config";
import "../scss/main.scss";

export default memo(
  withRouter(function Main(props: any) {
    const [headerHidden, setHeaderHidden] = useState<any>(true);

    useEffect(() => {
      props.location.pathname === "/article"
        ? setHeaderHidden(false)
        : setHeaderHidden(true);
    }, [props.location.pathname]);

    return (
      <Fragment>
        {headerHidden && <MainHeader />}
        <div className={headerHidden ? 'main-container' : ''}>{renderRoutes(props.route.routes)}</div>
      </Fragment>
    );
  })
);
