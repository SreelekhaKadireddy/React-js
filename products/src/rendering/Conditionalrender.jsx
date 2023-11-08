import React,{Component} from "react";
export class Conditionalrender extends Component{
    state = {
        isLogin:true
      }
      updateHandler = ()=>{
        this.setState({
            isLogin:! this.state.isLogin
    
        })
      }
      render() {
        return (
          <div>
            <h2>Conditional rendering</h2>
            <pre>{JSON.stringify(this.state)}</pre>
            {
             this.state.isLogin ?<> <button onClick={this.updateHandler}>Login</button> </>:
                                  <><button onClick={this.updateHandler}>Logout</button> </>
            }
          </div>
        )
      }
}
export default Conditionalrender