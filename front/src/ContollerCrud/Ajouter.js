import React, { Component } from 'react'

class Ajouter extends Component {

    render() {
        return (
            <div>
                <form action = "http://localhost:9400/list" method = "POST">
                    <label>Nom</label><input type="text" name = "nom"/>
                    <label>Prenom</label><input type="text" name = "prenom"/>
                    <button>Ajouter</button>
                </form>

            </div>
        )
    }
}
export default Ajouter