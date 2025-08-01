import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './EditPost.css'
import {supabase} from '../client.js'

import DesignerForm from '../components/DesignerForm.jsx';

const EditPost = () => {

    useEffect(() => {
        const fetchPostDetail = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .eq('id', id); 

            if (data && data.length > 0) {
                setPost(data[0])
            }
        }

        fetchPostDetail()
    }, [])

    const updatePost = async (event) => {
        event.preventDefault()

        await supabase
        .from('Posts')
        .update({ name: post.name, author: post.author,  description: post.description, exp: post.experience, level: post.level, money: post.money, color: post.color, class: post.class })
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
    const [post, setPost] = useState({name: "", author: "", description: "", exp: 0, level: 0, money: 0, color: "", class: "" })

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(post)
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