import './index.css';
import './App.css';



const Slotm = (props) =>{
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if(x===y && y===z){
    return(
       <div className="slot_inner">
      <h1>{x} {y} {z}</h1>
      <h1>Matching</h1>
      {/* <hr/> */}
    </div>
    )
   
  }
 else{
  return(
     <div className="slot_inner">
      <h1>{x} {y} {z}</h1>
      <h1>Not Matching</h1>
      {/* <hr/> */}
    </div>
  )
   
  }
}

function App() {

    let icons = ["😃", "👏", "🎨" , "🎨" , "🎨"];

  return (
   <>
   <h1 className="heading_style">🎰 welcome to <spam style={{fontWeight:"bold"}}>Slot Machine Game 🎰</spam></h1>
   <div className="slotmachine">
   
    
  
    
   <Slotm x={icons[Math.floor(Math.random() * icons.length)]} y={icons[Math.floor(Math.random() * icons.length)]}z={icons[Math.floor(Math.random() * icons.length)]}/>
   <Slotm x={icons[Math.floor(Math.random() * icons.length)]} y={icons[Math.floor(Math.random() * icons.length)]}z={icons[Math.floor(Math.random() * icons.length)]}/>
   <Slotm x={icons[Math.floor(Math.random() * icons.length)]} y={icons[Math.floor(Math.random() * icons.length)]}z={icons[Math.floor(Math.random() * icons.length)]}/>
   <Slotm x={icons[Math.floor(Math.random() * icons.length)]} y={icons[Math.floor(Math.random() * icons.length)]}z={icons[Math.floor(Math.random() * icons.length)]}/>
   
   
   </div>

   </>
  );
}

export default App;
