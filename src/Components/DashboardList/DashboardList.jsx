import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import styles from './DashboardList.module.scss';
import DashboardListItem from "../DashboardListItem/DashboardListItem";
//import dashboardOperations from "../../Redux/dashboard/dashboard-operations";
//import dashboardsSelectors from "../../Redux/dashboard/dashboard-selectors";
/**
const mapStateToProps = (state) => ({
    dashboard: dashboardsSelectors.getVisibleDashboards(state)
}
);
const mapDispatchToProps = dispatch => ({
  onRemoveDashboard: (id) => dispatch(dashboardOperations.deleteDashboard(id)),
});
*/
export default function DashboardList() {
  // const dispatch = useDispatch();
  //const dashboards = useSelector(dashboardsSelectors.getVisibleDashboards);
  return (<>
    
          <DashboardListItem className={styles.item}>
          </DashboardListItem>
       
    </>
  );
}
/**title={title} id={id} data={data} onClick={() => dispatch(dashboardOperations.deleteDashboard(id))} */
  /*{dashboards.length > 0 && 
      {dashboards.map(({ title, id, data }) => (        
        ))
      }
    } */
DashboardList.defaultProps = {
  dashboards: [],
};

DashboardList.propTypes = {
  dashboards: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string.isRequired
  }
  ))
};