import { RecoilRoot } from "recoil";
import { TrackerCard } from "./components/TrackerCard";

function App(){
  return(
    <div className="p-6 flex flex-col items-center">
      <div className="text-center text-2xl font-semibold">Expense Tracker</div>
      <RecoilRoot>
        <TrackerCard/>
      </RecoilRoot>
    </div>
  )
}

export default App;