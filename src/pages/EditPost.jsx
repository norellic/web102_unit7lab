import {useState} from 'react'
import { useParams } from 'react-router-dom'
import './EditPost.css'
import {supabase} from '../client.js'

import DesignerForm from '../components/DesignerForm.jsx';

const EditPost = () => {

    const updatePost = async (event) => {
        event.preventDefault()

        await supabase
        .from('Posts')
        .update({ name: post.name, author: post.author,  description: post.description, exp: post.experience})
        .eq('id', id)

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .delete()
          .eq('id', id); 
      
        window.location = "/";
    }

    const {id} = useParams()
    const [post, setPost] = useState({id: null, name: "", author: "", description: "", experience: 0})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <DesignerForm post={post} setPost={setPost} handleChange={handleChange}/>

            <input type="submit" value="Submit" onClick={updatePost}/>
            <button className="deleteButton" onClick={deletePost}>Delete</button>
        </div>
    )
}

export default EditPost