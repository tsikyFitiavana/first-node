import React, { Component } from 'react'

class Ajouter extends Component {

    render() {
        return (
            <div className="container">
                <form action = "http://localhost:9400/list" method = "POST" className="row">
                <div className="col-md-4">
                <label>Nom</label><input type="text" name = "nom"/>
                </div>
                <div className="col-md-4">
                <label>Prenom</label><input type="text" name = "prenom"/>
                </div>
                <div className="col-md-4">
                <button className="btn btn-info">Ajouter</button>
                </div>
                    
                    
                    
                </form>

            </div>
        )
    }
}
export default Ajouter