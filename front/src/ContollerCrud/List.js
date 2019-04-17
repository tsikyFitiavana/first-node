import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Ajouter from './Ajouter'
import './cssGlobal.css'
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
    const { error, items } = this.state;
    if (error) {
      return <div>{console.log(error.message)}</div>;
    } else {
      return (
        <div>
          <div className="container">


            <div className="table-responsive">
              <Ajouter />
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th><center>ID</center></th>
                    <th><center>Nom</center></th>
                    <th><center>Prénom</center></th>
                    <th><center>Actions</center></th>
                  </tr>
                </thead>
                <tbody>
                  {(items.length > 0) ? items.map(item => (
                    <tr key={item.id}>
                      <td><center>{item.id}</center></td>
                      <td><center>{item.nom}</center></td>
                      <td><center>{item.prenom}</center></td>
                      <td>
                        <center>
                          <button onClick={(e) => {
                            e.preventDefault()
                            confirmAlert({
                              customUI: ({ onClose }) => {
                                return (
                                  <div className='custom-ui' id="pop-Up">
                                  
                                    <form method="POST" action="http://localhost:9400/list?_method=DELETE" enctype="application/x-www-form-urlencoded">
                                      <input type="hidden" name="_method" value="DELETE" />

                                      <input type="hidden" name="id" value={item.id} />
                                      <span>confirmer supression<br />{item.nom + ' ' + item.prenom}</span>
                                      <br /><br />
                                      <button className="btn btn-danger">
                                        OUI
                                      </button>
                                      <button onClick={onClose} className="btn btn-secondary">NON</button>
                                      
                                    </form>
                                  </div>
                                );
                              }
                            });
                          }} className="btn btn-danger">x</button>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          <button onClick={() => {
                            confirmAlert({
                              customUI: ({ onClose }) => {
                                return (
                                  <div className='custom-ui' id="pop-Up1">
                                    <form method="POST" action="http://localhost:9400/list?_method=PUT" encType="application/x-www-form-urlencoded">
                                      <input type="hidden" name="_method" value="PUT" />
                                      <label>Nom</label><input type="text" name="nom" placeholder={item.nom}/><br /><br />
                                      <label>Prenom</label><input type="text" name="prenom" placeholder={item.prenom}/><br /><br />
                                      <input type="hidden" name="id" value={item.id} />
                                      <button className="btn btn-success">
                                        OK
                                      </button>
                                      <button onClick={onClose} className="btn btn-secondary">Annuler</button>
                                      
                                    </form>
                                  </div>
                                );
                              }
                            });
                          }} className="btn btn-success">Edit</button>
                        </center>
                      </td>
                    </tr>
                  )) : (<tr></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default List