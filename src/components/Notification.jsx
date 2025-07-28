import { useContext } from 'react'
import NotiContext, { rmNoti } from '../contexts/NotificationContext'

const Notification = () => {
  const [notification, dispatch] = useContext(NotiContext)

  const style = {
    backgroundColor: 'whiteSmoke',
    border: '1px solid black',
    padding: '10px',
    position: 'absolute',
    top: '35px',
    left: '5%',
    width: '90%',
  }

  if (!notification) return null
  else {
    setTimeout(() => {
      dispatch(rmNoti())
    }, 5000)
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
