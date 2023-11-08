import React,{Component} from "react";
export class Listrender extends Component{
    employees=[
        {"id":101,"name":"rahul","sal":34500},
        {"id":102,"name":"sonia","sal":54500},
        {"id":103,"name":"priya","sal":74500}
    ]

    

    render(){
        return(
            <>
            <h2>List rendering</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>EMP ID</th>
                        <th>EMP NAME</th>
                        <th>EMP SAL</th>
                    </tr>

                </thead>
                <tbody>
                    
                    {
                        this.employees.map(function(emp){
                        return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                        </tr>
                            
                        
                        })
                    }
                    
                </tbody>
            </table>
            </>
        )
        
    }
}
export default Listrender;