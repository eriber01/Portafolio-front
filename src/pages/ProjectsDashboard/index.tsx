
import SubNavDashboard from '../../components/SubNavDashboard/subNavsDashboard'
import Created from './tabs/created';
import UpdateAndDelete from './tabs/updateAndDelete';
import { useActions } from './useActions';

function ProjectsDashboard() {
  const [{ state }, actions] = useActions()

  console.log('state: ', state);

  return (
    <div>
      <SubNavDashboard activeTab={state?.activeTab} setActiveTab={actions.onChange} />
      {
        state?.activeTab === "1" &&
        <Created
          onSave={actions.onSave}
          addTechs={actions.addTechs}
          techSelected={state.techSelected}
          state={state?.project}
          tech={state.techs}
          onChange={actions.onChange}
          deleteTechs={actions.deleteTechs}
        />
      }
      {
        state?.activeTab === "2" &&
        <UpdateAndDelete
          enabledProject={actions.enabledProject}
          deleteProject={actions.deleteProject}
          getUnique={actions.getProjectUnique}
        />
      }
    </div>
  )
}

export default ProjectsDashboard