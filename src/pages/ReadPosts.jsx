import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client.js'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', { ascending: true })

            setPosts(data)
        }

        fetchPosts()
    }, [props])
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        name={post.name}
                        author={post.author}
                        description={post.description}
                    />
                ) : <h2>{'The party is elsewhere'}</h2>
            }
        </div>  
    )
}

export default ReadPosts