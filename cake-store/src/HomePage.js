import {useState} from 'react';
import Main from './main';

const HomePage = () => {

  const date = new Date()

  const [week, setWeek] = useState(`${date.getFullYear()} / ${date.getMonth() +1} / ${date.getDate()}`)
  const clickMessage =()=>{
    setWeek(`${date.toDateString()}`)
  }
  // const [ cake, setCake] = useState([
  //   {img: "atl", cakeName: "Kulikuli", cakeDes:" akulikuli alata rodo", id:1}
  // ])
   return (  
    <>
      <div className="Home">
        <Main
         img={require("./img/baked-goods-ge5b1bc9ec_1920.jpg")}
         cakeName = "CAKE 1"
         cakeDes= "One of our most beautiful. Fluffy taste with an impecable feel. Share this cake with your soulmate and they look no other person but you"
         />
         <Main
         img={require("./img/muffins-gbe26ddbe8_1920.jpg")}
         cakeName = "CAKE 2"
         cakeDes= "One of our most beautiful. Fluffy taste with an impecable feel. Share this cake with your soulmate and they look no other person but you"
         />
         <Main
         img={require("./img/cakes-gc528f4c16_1920.jpg")}
         cakeName = "CAKE 3"
         cakeDes= "One of our most beautiful. Fluffy taste with an impecable feel. Share this cake with your soulmate and they look no other person but you"
         />
         <Main
         img={require("./img/cupcakes-g5d8fbb211_1920.jpg")}
         cakeName = "CAKE 4"
         cakeDes= "One of our most beautiful. Fluffy taste with an impecable feel. Share this cake with your soulmate and they look no other person but you"
         />
         <Main
         img={require("./img/eclair-g4aed3718d_1920.jpg")}
         cakeName = "CAKE 5"
         cakeDes= "One of our most beautiful. Fluffy taste with an impecable feel. Share this cake with your soulmate and they look no other person but you"
         />
         <Main
         img={require("./img/happy-birthday-gf6377cd0c_1920.jpg")}
         cakeName = "CAKE 6"
         cakeDes= "One of our most beautiful. Fluffy taste with an impecable feel. Share this cake with your soulmate and they look no other person but you"
         />
        
    </div>
    <div className='sdhus'>
        <h1>{week}</h1>
        <button onClick={clickMessage}>
          Click Me
        </button>
        </div>
       {/* <div>
        <Main cake={cake}/>
       </div> */}
    </>
    );
}
 
export default HomePage;