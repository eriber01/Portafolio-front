import React from 'react'
import './style.css'
interface subNavDashboardProps {
  activeTab?: string
  setActiveTab: (value: string, path: string, type: string) => void
}

const SubNavDashboard = ({ activeTab, setActiveTab }: subNavDashboardProps) => {

  console.log(activeTab);

  return (
    <div className='sub-nav-dashboard-container'>
      <nav className='sub-nav-dashboard text-black'>
        <ul>
          <li className={`${activeTab === '1' ? 'tap-active' : ''}`}
            onClick={() => setActiveTab('1', 'activeTab', 'tap')}
          >
            Created
          </li>
          <li
            className={`${activeTab === '2' ? 'tap-active' : ''}`}
            onClick={() => setActiveTab('2', 'activeTab', 'tap')}
          >
            Updated and Delete
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SubNavDashboard