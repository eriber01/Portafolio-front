import React, { useState } from 'react'
import SubNavDashboard from '../../components/SubNavDashboard/subNavsDashboard'
import Created from './tabs/created'
import UpdateAndDelete from './tabs/updateAndDelete'

const ExperienceDashboard = () => {
  const [activeTab, setActiveTab] = useState('1')

  return (
    <div>
      <SubNavDashboard activeTab={activeTab} setActiveTab={setActiveTab} />

      {
        activeTab === "1" && <Created />
      }
      {
        activeTab === "2" && <UpdateAndDelete />
      }

    </div>
  )
}

export default ExperienceDashboard