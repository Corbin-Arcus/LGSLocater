import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as groupActions from '../../store/groups'
import { Link } from 'react-router-dom'



function GroupPage() {
  const dispatch = useDispatch()
  const groups = useSelector(state => state.groups)
  const groupsArr = Object.values(groups)
  useEffect(() => {
    dispatch(groupActions.getAllGroups())
  }, [dispatch])

  return (
    <div>
      <div>
        {groupsArr.map(group =>
          <>
            <h1 key={group.id}><Link to={`/groups/${group.id}`}>{group.groupName}</Link>
            <Link to={`/groups/${group.id}/editGroup`}><button>Edit Group</button></Link>
            <button>Delete Group</button>
            </h1>
          </>
          )}
      </div>
    </div>
  )
}

export default GroupPage;
