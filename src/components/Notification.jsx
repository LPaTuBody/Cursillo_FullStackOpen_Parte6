import { useSelector, useDispatch } from 'react-redux'
import { rmNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)

  const style = {
    backgroundColor: 'whiteSmoke',
    border: '1px solid black',
    padding: '10px',
    position: 'absolute',
    top: '35px',
    left: '5%',
    width: '90%',
  }

  if (notification) setTimeout(() => {
    dispatch(rmNotification())
  }, 5000)
  else return null
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification