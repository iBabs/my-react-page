// import firstCake from "./img/baked-goods-ge5b1bc9ec_1920.jpg"

const Main = (props) => {
    console.log(props)
    return ( 
        <div className="card">
            <div className="card-body">
        <img src={props.img} alt="a cake" className="cake" />
        <h2>
            {props.cakeName}
        </h2><p>
        {props.cakeDes}
        </p>
        <button> Order Now </button>
        </div>
        </div>
     );
}
 
export default Main;