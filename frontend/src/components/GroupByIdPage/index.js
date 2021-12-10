import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from '../../store/groups'
import { useParams } from 'react-router-dom';


function GroupByIdPage() {
  const dispatch = useDispatch();
  const { id } = useParams()
  const group = useSelector(state => state.groups)
  const user = useSelector(state => state.session.user)
  const joinGroupButton = () => {
    const groupId = group.id
    const userId = user.id
    return dispatch(groupActions.joinAGroup({ userId, groupId }))
  }
  useEffect(() => {
    dispatch(groupActions.getOneGroup(id))
  }, [dispatch])

  return(
  <div>
    <div>
      <h1>{group.groupName}</h1>
      <h2></h2>
      <button onClick={joinGroupButton}>Join this Group!</button>
    </div>
  </div>
  )
}

export default GroupByIdPage;
