import { useSelector } from 'react-redux'

const Notification = () => {
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

  if (!notification) return null
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification