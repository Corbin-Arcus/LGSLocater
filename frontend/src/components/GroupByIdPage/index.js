import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from '../../store/groups'
import * as sessionActions from '../../store/session'
import { useParams } from 'react-router-dom';
import styles from '../../css-modules/GroupByIdPage.module.css'

function GroupByIdPage() {
  const dispatch = useDispatch();
  const { id } = useParams()
  const group = useSelector(state => state.groups)
  const currentUser = useSelector(state => state.session.user)
  const sessionUser = useSelector(state => state.session.user);
  // const user = useSelector(state => state.user)
  const joinGroupButton = () => {
    const groupId = group.id
    const userId = currentUser.id
    return dispatch(groupActions.joinAGroup({ userId, groupId }))
  }
  useEffect(() => {
    dispatch(groupActions.getOneGroup(id))
    // dispatch(userActions.getUser(user.id))
  }, [dispatch])

  // const userArr = Object.values(group.Users)
  const users = group.Users
  console.log(users)
  return(
  <div className={styles.outer}>
    <div className={styles.container}>
      <h1>{group.groupName}</h1>
      <h2>Users:</h2>
      {users?.map(user => <h3 key={user.id}>{user.username}</h3>)}
      {sessionUser &&
        <button onClick={joinGroupButton}>Join this Group!</button>
      }
    </div>
  </div>
  )
}

export default GroupByIdPage;
