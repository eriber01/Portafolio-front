import React from 'react'
import { Button, CardBody } from 'reactstrap'

interface Props {
  item: {
    id: number | null
    enabled: boolean
  }
  getUnique: (id: number) => void
  deleted: (id: number) => void
  enabled: (id: number) => void
}

const EditButtons = ({ item, deleted, getUnique, enabled }: Props) => {
  return (
    <div>
      <CardBody className='border-top mt-3'>
        <Button
          className='btn btn-info m-1 mt-3 text-white'
          onClick={() => getUnique(item?.id || 0)}
        >
          Update
        </Button>
        <Button
          className='btn btn-danger m-1 mt-3'
          onClick={() => deleted(item?.id || 0)}
        >
          Delete
        </Button>

        <Button
          className={`btn m-1 mt-3 ${item.enabled ? 'btn-success' : 'btn-danger'}`}
          onClick={() => enabled(item?.id || 0)}
        >
          {item.enabled ? 'Enable' : 'Disable'}
        </Button>
      </CardBody>
    </div>
  )
}

export default EditButtons