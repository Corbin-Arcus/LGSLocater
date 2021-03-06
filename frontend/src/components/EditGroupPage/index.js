import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from '../../store/groups'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import styles from '../../css-modules/editGroupPage.module.css'


function EditGroupPage() {
  const dispatch = useDispatch()
  const [groupName, setGroupName] = useState("")
  const [groupId, setGroupId] = useState(0)
  const [errors, setErrors] = useState([])

  const { id } = useParams()

  useEffect(() => {
    setGroupId(id)
  })

  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(groupName.length < 5 || groupName.length > 100){
      setErrors(['Group name must be between 5 and 100 characters'])
    }
    else{
      setErrors([])
      history.push('/groups')
      return dispatch(groupActions.editOneGroup({ groupId, groupName }))
        .catch(async (res) => {
          const data = await res.json();
          if(data && data.errors) setErrors(data.errors)
        })
    }
  };

  return (
    <div className={styles.outer}>
    <div className={styles.container}>
      <div className={styles.editGroupForm}>
          <form onSubmit={handleSubmit}>
            <h1>Edit Group:</h1>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <input
            type='hidden'
            value={groupId}>
            </input>
            <label>
              Event Name
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
              />
            </label>\
            <button type="submit">Edit Event</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditGroupPage;

