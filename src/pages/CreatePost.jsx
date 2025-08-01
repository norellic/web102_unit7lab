import { useState } from 'react'
import './CreatePost.css'
import { supabase } from "../client.js"

import DesignerForm from '../components/DesignerForm.jsx';

const CreatePost = () => {

    const createPost = async (event) => {
        event.preventDefault()

        await supabase
        .from ('Posts')
        .insert({ name: post.name, author: post.author,  description: post.description, exp: post.experience, level: post.level, money: post.money, color: post.color, class: post.class, image: post.image })
        .select()

        window.location = "/";
    }

    const [post, setPost] = useState({name: "", author: "", description: "", exp: 0, level: 0, money: 0, color: "", class: "", image: ""})

    const handleChange = (event) => {
        //console.log(post)
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

            <input type="submit" value="Submit" onClick={createPost} />
           
        </div>
    )
}

export default CreatePost