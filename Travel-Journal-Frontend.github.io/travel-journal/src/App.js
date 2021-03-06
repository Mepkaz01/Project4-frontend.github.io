import { Link, Route } from  'react-router-dom'
import Home from "./components/Home.js"
import Login from "./components/user/Login"
import Signup from "./components/user/Signup"
import Profile from "./components/user/Profile"
import About from "./components/admin/About"
import AdminLogin from "./components/admin/AdminLogin"
import AdminSignup from "./components/admin/AdminSignup"
import AdminEdit from "./components/admin/AdminEdit"
import Posts from "./components/posts/Posts"
import AdminPosts from "./components/posts/AdminPosts"
import CreatePost from "./components/posts/CreatePost"
import PostEdit from "./components/posts/PostEdit"
import PostDelete from "./components/posts/PostDelete"
import Search from "./components/Search"


function App() {
    return (
      <div>
       
        <Route path="/" exact render={() => <Home />} /> 

        <Route path="/login" render={(props) => <Login {...props}/>}/>
  
        <Route path="/signup" render={(props) => <Signup {...props}/>}/>
  
        <Route path="/profile/:id" render={(props) => <Profile {...props}/>}/>

        <Route path="/about" render={(props) => <About {...props}/>}/>

        <Route path="/adminlogin" render={(props) => <AdminLogin {...props}/>}/>
  
        <Route path="/adminsignup" render={(props) => <AdminSignup {...props}/>}/>
  
        <Route path="/adminedit/:id" render={(props) => <AdminEdit {...props}/>}/>
          
        <Route path="/posts" exact render={ (props) =><Posts {...props} />}/> 
  
        <Route path="/posts/:id" render={ (props) =><AdminPosts {...props} />}/> 

        <Route path="/newpost" render={(props) => <CreatePost {...props}/>}/> 

        <Route path="/postedit/:indx" render={(props) => <PostEdit {...props}/>}/>
  
        <Route path="/postdelete/:indx" render={ (props) =><PostDelete {...props}/>}/>

        <Route path="/search" render={ () =><Search />}/>
        
      </div>
    );
  }
  
  export default App; 