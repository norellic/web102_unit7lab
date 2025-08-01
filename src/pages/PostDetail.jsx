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
            <div className="page_content">
            <h1>{post.name}</h1>
            <h3>by {post.author} at {post.created_at}</h3>
            <p>{post.description}</p>
            <p>{post.exp}</p>
            <p>{post.level}</p>
            <p>{post.money}</p>
            <p>{post.class}</p>

            </div>
        </div>
    )

}

export default PostDetail

