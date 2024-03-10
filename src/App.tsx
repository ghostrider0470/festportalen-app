import './App.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import RouteProvider from "./routes/RouteProvider.tsx";

function App() {

  return (
      <>
        <Provider store={store}>
                <RouteProvider/>
        </Provider>
      </>
  )
}

export default App
