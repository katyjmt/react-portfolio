import '../styles/ProfilePic.css'
import { ReactComponent as ProfileImg } from '../assets/blob.svg'

export default function ProfilePic() {
  return (
    <>
      <div className='profile-pic'>
        <img><ProfileImg /></img>
      </div>
    </>
  )
}