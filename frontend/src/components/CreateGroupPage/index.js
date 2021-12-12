import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from '../../store/groups'
import { useHistory } from 'react-router';
import styles from '../../css-modules/CreateGroupPage.module.css'

function CreateGroupPage() {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [groupId, setGroupId] = useState(0)
  const [errors, setErrors] = useState([])


  let history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(groupName.length < 5 || groupName.length > 100){
      setErrors(['Group name must be between 5 and 100 characters'])
    }

    else{
      setErrors([])
      history.push('/groups')
      return dispatch(groupActions.createOneGroup({ groupName }))
        .catch(async (res) => {
          const data = await res.json();
          if(data && data.errors) setErrors(data.errors)
        })

    }
  };
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.createGroupForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h1>Create a group!</h1>
            <label>
              Group Name
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
                className={styles.groupName}
              />
            </label>
            <button type="submit">Create Group</button>
          </form>
        </div>
      </div>
    </div>
  );
}




export default CreateGroupPage;

