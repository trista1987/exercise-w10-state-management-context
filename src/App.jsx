import { UseToggler } from "./context/TogglerContext";
import { Mode } from "./components/Mode";
export const App = () => {
  return (
    <>
    <div className="App">Hello Coders!</div>
  <UseToggler>
    <Mode />
  </UseToggler>
    </>
  )
};
