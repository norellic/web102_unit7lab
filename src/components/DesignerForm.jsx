import './DesignerForm.css';

const DesignerForm = ({post, setPost, handleChange}) => {

    return (
        <div className="formContainer">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} />
                <br/>

                <label htmlFor="author">Author:</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description:</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea><br/>
                <br/>
                
                <label htmlFor="image">Image:</label><br />
                <input type="text" id="image" name="image" value={post.image} onChange={handleChange} /><br />
                <br/>

                <div className="expLvlMoney">
                    <label htmlFor="experience">Experience:</label><br />
                    <input type="number" id="experience" name="experience" value={post.experience} onChange={handleChange}></input>

                    <label htmlFor="level">Level:</label><br />
                    <input type="number" id="level" name="level" value={post.level} onChange={handleChange}></input>

                    <label htmlFor="money">Money:</label><br />
                    <input type="number" id="money" name="money" value={post.money} onChange={handleChange}></input>
                </div>
                <br/>

                <div className="colorClass">
                    <label htmlFor="color">Color:</label><br />
                    <input type="color" id="color" name="color" value={post.color} onChange={handleChange} /><br />
                    <br/>

                    <label htmlFor="class">Class:</label><br />
                    <select name="class" id="class" value={post.class} onChange={handleChange}> <option value="Rouge">Rouge</option>
                    <option value="Warrior">Warrior</option>
                    <option value="Mage">Mage</option> 
                    </select>
                </div>
                <br/>

            </form>
        </div>
    )
}

export default DesignerForm