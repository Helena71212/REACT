import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../router/routeNames";
import capitalize from 'lodash/capitalize'
import  startCase from "lodash/startCase";

import styles from "./index.module.css";

const Header = () => {
  return (
    <div>
      {Object.entries(ROUTE_NAMES).map(([page, path]) => (
        <Link className={styles.menuItem} key={path} to={path}>
          {startCase(capitalize(page))}
        </Link>
      ))}
    </div>
  );
};

export default Header;
