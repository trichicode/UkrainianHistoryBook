import {useState} from "react";
import "./index.scss";

const Intro = () => {

    const [isFirstLoad, setIsFirstLoad] = useState(true);

    if ( isFirstLoad ) {
        return (
            <div className="wrapper">
              <div className="image-container">
                <img className="image" src="./assets/imgs/repin-zaporozhcy.jpg"/>
              </div>
              <div className="container">
                <h1> UKRAINIAN HISTORY BOOK</h1>
              </div>
            </div>
        )
    } else return <></>
}

export default Intro;