console.table(posts);

class App extends React.Component{
      state = {
            posts: posts,
            userId: '',
            id: '',
            title: '',
            body: '',
      }

      handleChange = (event) => {
            console.log(event.target.value)
            this.setState( { [event.target.id]: event.target.value  } )
      }
      handleSubmit= (event) => {
            event.preventDefault();
            const newPost = {
                  userId: this.state.userId,
                  title: this.state.title,
                  body: this.state.body,
                  id: this.state.id
            }
      

      this.setState({posts: [newPost, ...this.state.posts],
      
                  userId: '',
                  title: '',
                  body: ''
      
      })
      }
      render() {

            return(
                  <div>
                        {/* Post submission box */}
                        <h1 >Posts</h1>
                              <form className='submissionBox' onSubmit = {this.handleSubmit}>

                                    <label htmlFor='title'>Title: </label>
                                    <input className='titleBox' type= "text" value={this.state.title} id='title' onChange={this.handleChange}/>
                                    <br/>

                                    <label htmlFor='body'>Body: </label>
                                    <input className='bodyBox' type= "text" value={this.state.body} id='body' onChange=
                                    {this.handleChange}/>
                                    <br/>

                                    <label htmlFor='userId'>User ID: </label>
                                    <input className="userIdBox" type= "text" value={this.state.userId} id='userId' onChange={this.handleChange}/>
                                    <br/>

                                    {/* <label htmlFor='id'>Post Id: </label>
                                    <input type= "text" value={this.state.id} id='postId' onChange={this.handleChange}/>
                                    <br/> */}
                                    <input name="Post" type="submit" />
                              </form>
                                    {/* Post Preview */}
                        <div>
                              <h2>Title: {this.state.title}</h2>
                              <h5>Posted by: {this.state.userId}</h5>
                              <h3>Body: {this.state.body}</h3>
                        
                              <h6>Post Id:{this.state.id}</h6>
                        </div>
                                    {/* Displayed Previous Posts */}
                        <ul >
                              <h2>Latest Posts</h2>
                              {this.state.posts.map( post =>(
                                    <ul className="postEntry" key = {post.id}>
                                          <h3 className='titlePost'>Title: {post.title}</h3> 
                                          <h4 className='bodyPost'>Body: {post.body}</h4>
                                          <h5 className='userIdPost'>UserId: {post.userId}</h5>
                                          <h5 className='idPost'>Post Id: {post.id}</h5>
                                          
                                          <br/>
                                    </ul>
                              ))}
                        </ul>





                  </div>
            )
      }
}
      

ReactDOM.render(<App/>,document.getElementById('root'));