import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client.js'
import './PostDetail.css'

const PostDetail = ({data}) => {

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

    const {id} = useParams()
    const [post, setPost] = useState({id: null, name: "", author: "", description: ""})
    console.log(post);

    return (
        <div className="whole_page">
            <img src={post.image} />

            <div className="page_content">
            <h1 style={{ color: post.color }}>{post.name} the {post.class}</h1>
            <h3>by {post.author} at {post.created_at}</h3>
            <p>{post.description}</p>
            <p>Experience: {post.exp}</p>
            <p>Level {post.level}</p>
            <p>Money: ${post.money}.00</p>
            <p></p>
            </div>
        </div>
    )

}

export default PostDetail

