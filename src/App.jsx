import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetail from './pages/PostDetail'
import { Link } from 'react-router-dom'


const App = () => {

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts />
    },
    {
      path:"/edit/:id",
      element: <EditPost />
    },
    {
      path:"/new",
      element: < CreatePost />
    },
    {
      path:"/detail/:id",
      element: < PostDetail />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Party Creator</h1>
        <Link to="/"><button className="headerBtn"> View Gang  </button></Link>
        <Link to="/new"><button className="headerBtn"> Add New </button></Link>
      </div>
        {element}
    </div>
    

  )
}

export default App
