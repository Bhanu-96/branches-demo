import Assesments from "./Assesments";
import Attendence from "./Attendence";
import Classes from "./classes";
import Placement from "./Placement";


function App() {
  return (
  
    <h1>
      Kodnest App
      <Classes />
      <Attendence />
      <Placement 
      Assesments />

      </h1>
  );
}

export default App;
