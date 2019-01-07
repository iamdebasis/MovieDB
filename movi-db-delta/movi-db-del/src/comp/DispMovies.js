import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DispMovies.css'

class DispMovies extends Component {

    constructor(){
        super();
        this.state={
           
        }
      
    }

    notify(title){toast(title +"   deleted")}  ///show toast

    deleteMovie(title){
        this.props.onDelete(title)
        this.notify(title)              //show toast
    }

  render() {
//console.log(this.props.db)

let singleItem=this.props.db.map(emo=>{
    let x = Math.floor(Math.random() * (500 - 300) + 300);
    var url='https://picsum.photos/200/'+x     //image url
    
    return(
        <div key ={emo.id}  >
        <div className="outLine">
        
            <div className="imgSt">
               <img className="img2" src={url} alt="Pineapple" width="120" height="170"/>
            </div>
    
            <div className="content"> 

                Title: {emo.title}          <br/>
                genre: {emo.genre}          <br/>
                Year of release:{emo.year}    <br/>
                Plot:{emo.plot}              <br/>
                Actors:{emo.actors}           <br/>
                producer:{emo.producer}       <br/>

            </div>
            <a href="#" onClick={this.deleteMovie.bind(this,emo.title)}  style={{textDecoration:'none'}}>X</a>
        </div><br/><br/>


        
        </div>
      
    );
  })

    return (          //style={{width:'900px'}}
      <div >      
          <div ><h1>Movies List from the Database:</h1></div>  
          <div >{singleItem}</div>
      </div>
    );
  }
}

export default DispMovies;
