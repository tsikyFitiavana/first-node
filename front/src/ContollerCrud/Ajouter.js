import React, { Component } from 'react'
import './cssGlobal.css'
class Ajouter extends Component {

    render() {
        return (
            <div className="container withoutMargeAndPading" id="Ajouter">
                
                <form action="http://localhost:9400/list" method="POST">
                <div  className="row" id="formRow">
                    <div className="col-md-5 col-sm-12 col-xs-12 ">
                        <div className="row form-group">
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <label className="labelNoMarge">Nom</label>
                            </div>
                            <div className="col-md-9 col-sm-12 col-xs-12 ">
                                <input type="text" name="nom" required="required" className="form-control"/>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12 ">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <label className="labelNoMarge">Prénom</label>
                            </div>
                            <div className="col-md-9 col-sm-12 col-xs-12">
                                <input type="text" name="prenom" required="required" className="form-control"/>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12 " id="dernierDiv">
                        <button className="btn btn-info" >Ajouter</button>
                    </div>
                    </div>
                </form>
               

            </div>
        )
    }
}
export default Ajouter