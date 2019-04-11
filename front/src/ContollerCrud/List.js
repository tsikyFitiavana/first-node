import React, {Component} from 'react'

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
      fetch("http://localhost:9200/list")
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
                  aff.innerHTML +='<p id="floater">Nom : ' + this.state.items[i].nom +'<br/> Prenom : ' + this.state.items[i].prenom +'</p><br/>'
                  
                  console.log(this.state.items[0].image)
                 } 
              }}>Lister</button>
              
             <div id="affichage"></div> 
          </div>
        );
      }
    }
  }
  export default List