import React, {Component} from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
class List extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:9400/list")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });         
            console.log(result)
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    
  
    render() {
      const { error,items} = this.state;
      if (error) {
        return <div>{console.log(error.message)}</div>;
      }else {
        return (
          <div>
              <button type="button" onClick={()=>{
                let aff = document.getElementById('affichage')
                aff.style.display = 'block'
                /*  console.log(this.state.items)
                for(let i = 0; i<this.state.items.length; i++){   
                  aff.innerHTML +='<p id="floater">Nom : ' + this.state.items[i].nom +'<br/> Prenom : ' + this.state.items[i].prenom +'</p><button id = "update"></button><br/>'
                  console.log(this.state.items[0].image)
                 } 
              */

              }}>Lister</button>
              
             <div id="affichage" style={{display:'none'}}> 
             <table>
               <tbody>
                 { (items.length > 0)? items.map(item =>(
                   <tr key={item.id}>
                   <td>{item.nom}</td>
                   <td>{item.prenom}</td>
                   <td><button onClick = {()=>{
                     confirmAlert({
                      customUI: ({ onClose }) => {
                        return (
                          <div className='custom-ui'>
                            <form method="POST" action="http://localhost:9400/list?_method=PUT" enctype="application/x-www-form-urlencoded">
                              <input type="hidden" name="_method" value="PUT"/>
                              <input type="text" name="nom" placeholder={item.nom}/><br/><br/>
                              <input type="text" name="prenom" placeholder={item.prenom}/><br/><br/>
                              <input type="hidden" name="id" value={item.id}/>
                            <button onClick={onClose}>Cancel</button>
                            <button>
                              Edit
                            </button>
                            </form>
                          </div>
                        );
                      }
                    });
                   }}>Update</button>
                   <button onClick = {()=>{
                    confirmAlert({
                     customUI: ({ onClose }) => {
                       return (
                         <div className='custom-ui'>
                           <form method="POST" action="http://localhost:9400/list?_method=DELETE" enctype="application/x-www-form-urlencoded">
                             <input type="hidden" name="_method" value="DELETE"/>
                             <input type="hidden" name="id" value={item.id}/>
                           <button onClick={onClose}>Cancel</button>
                           <button>
                             Delete
                           </button>
                           </form>
                         </div>
                       );
                     }
                   });
                  }}>Delete</button></td>
                   </tr>
                 )):(<tr></tr>)}
               </tbody>
             </table>
             </div> 
          </div>
        );
      }
    }
  }
  export default List