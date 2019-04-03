import React, {Component} from 'react'
//import { Route} from 'react-router-dom';
class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8050/test")
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
      const { error, isLoaded} = this.state;
      if (error) {
        return <div>{console.log(error.message)}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
              <button type="button" onClick={()=>{
                 let aff = document.getElementById('affichage')
                console.log(this.state.items)
                for(let i = 0; i<this.state.items.length; i++){   
                  aff.innerHTML += this.state.items[i].nom +' ' + this.state.items[i].prenom +'<br>'
                 } 
              }}>Lister</button>
             <p id="affichage"></p> 
          </div>
        );
      }
    }
  }
  export default Test