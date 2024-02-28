import SideBar from '../Components/SideBar'
import Main from '../Components/Main'


 function Home(){
  return (
    <div>
      <SideBar/>
      <div className='ml-[80px]'>
      <Main/>
      </div>
      
    </div>
  )
}
export default Home