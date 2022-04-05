import{useState} from "react";

function App() {
  // State
  const[message, setMessage] = useState(
    "JavaScript is the best"
    );
  // create an array with two viarable in side. Usestate allows you to hold on to the memory, 
  // setMessage allows to update

  // Action
  function handleClick(){
    setMessage("Some new message saying sth smart");
  }

  // UI What appears on the screen, with Javascript on the top, inject the state
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message</button>
    </div>
  );
}

export default App;

