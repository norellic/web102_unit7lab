
const DesignerForm = ({post, setPost, handleChange}) => {

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>

                <label htmlFor="experience">Experience</label><br />
                <input type="number" id="experience" name="experience" value={post.experience} onChange={handleChange}></input>

                <label htmlFor="level">Level</label><br />
                <input type="number" id="level" name="level" value={post.level} onChange={handleChange}></input>

                <label htmlFor="money">Money</label><br />
                <input type="number" id="money" name="money" value={post.money} onChange={handleChange}></input>

                <label htmlFor="color">Color</label><br />
                <input type="color" id="color" name="color" value={post.color} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="class">Class</label><br />
                <input type="number" id="class" name="class" value={post.class} onChange={handleChange}></input>

            </form>
        </div>
    )
}

export default DesignerForm