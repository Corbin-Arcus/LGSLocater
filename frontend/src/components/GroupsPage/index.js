import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as groupActions from '../../store/groups'
import { Link } from 'react-router-dom'
import styles from '../../css-modules/GroupPage.module.css'



function GroupPage() {
  const dispatch = useDispatch()
  const groups = useSelector(state => state.groups)
  const groupsArr = Object.values(groups)
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(groupActions.getAllGroups())
  }, [dispatch])

  const sendId = async (group) => {
    await dispatch(groupActions.deleteOneGroup(group.id))
    dispatch(groupActions.getAllGroups())
  }

  const refresh = () => {
    dispatch(groupActions.getAllGroups())
  }


  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <h1>Groups:</h1>
        {groupsArr?.map(group =>
          <div className={styles.groupContainer}>
            <h1 key={group.id}><Link to={`/groups/${group.id}`}>{group.groupName}</Link></h1>
            {sessionUser &&
            <>
            <Link to={`/groups/${group.id}/editGroup`}><button onClick={() => refresh()}>Edit Group</button></Link>
            <button onClick={() => sendId(group)}>Delete Group</button>
            </>
            }
          </div>
          )}
      </div>
    </div>
  )
}

export default GroupPage;
