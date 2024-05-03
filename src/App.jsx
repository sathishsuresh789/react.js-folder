
import{BrowserRouter,Routes,Route} from 'react-router-dom'



import TeacherLogin from './Teacher login'
import TeacherPage from './Teacher page'
import StudentLogin from './Student login'
import StudentPage from './Student page'
import AdminLogin from './Adminlogin'
import AdminPage from './Adminpage'
import Home from './Home'
import Login from './Login'







function App() {
 
  return (
    <>
    <BrowserRouter>

    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Loginogin/>}/>

     <Route path="/Teacherlogin" element={<TeacherLogin/>}/>
     <Route path="/teacherpage" element={<TeacherPage/>}/>
     <Route path="/studentlogin" element={<StudentLogin/>}/>
     <Route path="/studentpage" element={<StudentPage/>}/>
     <Route path="/adminlogin" element={<AdminLogin/>}/>
     <Route path="/adminpage" element={<AdminPage/>}/>
     
    
    
  
   
     
    </Routes>
    
    </BrowserRouter>
    
    </>
     )
}

export default App