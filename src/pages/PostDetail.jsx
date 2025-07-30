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
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""})
    console.log(post);

    return (
        <>
        <h1>Post Detail</h1>
        <p>{post.description}</p>
        </>
    )

}

export default PostDetail

