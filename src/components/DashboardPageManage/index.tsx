import React from 'react'
import ExperienceDashboard from '../../pages/ExperienceDashboard';
import Profile from '../../pages/Profile';
import ProjectsDashboard from '../../pages/ProjectsDashboard';
import TechDashboard from '../../pages/TechDashboard';

interface props {
  keys: number | undefined
}

const DashboardPageManage = ({ keys }: props) => {
  console.log(keys);

  const manageViews = (key: number | undefined) => {
    switch (key) {
      case 1:
        return (
          <>
            <Profile />
          </>
        );

      case 2:
        return (
          <>
            <ProjectsDashboard />
          </>
        );

      case 3:
        return (
          <>
            <TechDashboard />
          </>
        );

      case 4:
        return (
          <>
            <ExperienceDashboard />
          </>
        );
      default:
        return null;
    }
  }

  return (
    <>
      {manageViews(keys)}
    </>
  )
}

export default DashboardPageManage