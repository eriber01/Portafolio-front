import SubNavDashboard from '../../components/SubNavDashboard/subNavsDashboard'
import Created from './tabs/created'
import UpdateAndDelete from './tabs/updateAndDelete'
import { useActions } from './useActions'

const TechDashboard = () => {
  const [{ state }, actions] = useActions()

  console.log('state index: ', state);


  return (
    <div>
      <SubNavDashboard activeTab={state?.activeTab} setActiveTab={actions.onChange} />

      {
        state?.activeTab === "1" &&
        <Created
          state={state.tech}
          onChange={actions.onChange}
          onSave={actions.onSave}
        />
      }
      {
        state?.activeTab === "2" &&
        <UpdateAndDelete
          state={state.tech}
          deleteTech={actions.deleteTech}
          getTechUnique={actions.getTechUnique}
          enabledTech={actions.enabledTech}
        />
      }

    </div>
  )
}

export default TechDashboard