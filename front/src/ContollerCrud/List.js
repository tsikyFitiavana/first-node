import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import Ajouter from './Ajouter'
import './cssGlobal.css'
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:9400/list")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            items: result
          });
          console.log(result)
        },
        (error) => {
          this.setState({
            loading: true,
            error
          });
        }
      )
  }


  render() {
    const { items, loading } = this.state;
    if (loading) {
      return <div>
        <div className='sweet-loading' id="loadded">
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
      </div>;
    } else {
      return (
        <div>
          <div className="container contoneurParents">


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
                      <td><center><p>{item.id}</p></center></td>
                      <td><center><p id="nameToLower">{item.nom}</p></center></td>
                      <td><center><p>{item.prenom}</p></center></td>
                      <td>
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-6 delete">
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
                                          <button className="btn btn-danger btn-sm">
                                            OUI
                                      </button>
                                          <button onClick={onClose} className="btn btn-secondary btn-sm BtnPopUpMargin" >NON</button>

                                        </form>
                                      </div>
                                    );
                                  }
                                });
                              }} className="btn btn-danger btn-sm">x</button>
                            </div>
                            <div className="col-md-6">
                              <button onClick={() => {
                                confirmAlert({
                                  customUI: ({ onClose }) => {
                                    return (
                                      <div className='custom-ui' id="pop-Up1">
                                        <form method="POST" action="http://localhost:9400/list?_method=PUT" encType="application/x-www-form-urlencoded" className="form-group">
                                          <input type="hidden" name="_method" value="PUT" />
                                          <table>
                                            <thead></thead>
                                            <tbody>
                                              <tr>
                                                <td><label>Nom</label></td>
                                                <td><input type="text" name="nom" placeholder={item.nom} className="form-control" /></td>
                                              </tr>
                                              <tr>
                                                <td><label>Prenom</label></td>
                                                <td><input type="text" name="prenom" placeholder={item.prenom} className="form-control" /></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <br /><br />
                                          <input type="hidden" name="id" value={item.id} />
                                          <button className="btn btn-success btn-sm">
                                            OK
                                        </button>
                                          <button onClick={onClose} className="btn btn-secondary btn-sm BtnPopUpMargin">Annuler</button>
                                        </form>
                                      </div>
                                    );
                                  }
                                });
                              }} className="btn btn-success btn-sm">Edit</button>
                            </div>

                          </div>
                        </div>
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