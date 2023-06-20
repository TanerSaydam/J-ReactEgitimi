import {useState} from 'react'
import './MyStyle.css'

function App(){
    const [game,setGame] =  useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    function setDivMark(i){
        const newGame = game.map((val,index)=> {
            if(index == i) return "X";
            else return val
        });

        setGame(newGame);
    }
   
    return(
        <div className="container" style={{marginTop: "20px"}}>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                       {game.map((val,index)=> 
                            <div key={index} 
                                 className="col-4 game"
                                 onClick={()=> setDivMark(index)}>
                                {val}
                            </div> 
                       )}                   
                    </div>
                </div>
                <div className="col-4">
                    <h1>Sıradaki: X</h1>
                    <hr/>
                    <button 
                    className="btn btn-primary w-100">
                        Yeni Oyun
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;