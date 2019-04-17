import React, {Component} from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Ajouter from './Ajouter'
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
              
              
             <div id="affichage"> 
             <Ajouter/>
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
                            <form method="POST" action="http://localhost:9400/list?_method=PUT" encType="application/x-www-form-urlencoded">
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
                             <span>confirmer supression<br/>{item.nom + ' '+item.prenom}</span>
                             <br/><br/>
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