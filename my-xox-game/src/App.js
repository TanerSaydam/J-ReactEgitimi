import {useState} from 'react'

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
    ])
    const style = {
        height: "100px",
        backgroundColor: "red",
        border: "1px solid white"
    }
    return(
        <div className="container" style={{marginTop: "20px"}}>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <div className="col-4" style={style}>
                        </div>                        
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