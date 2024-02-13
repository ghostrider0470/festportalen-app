import './App.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import RouteProvider from "./routes/RouteProvider.tsx";
import {AppThemeProvider} from "./theme";
function App() {

  return (
      <>
        <Provider store={store}>
            <AppThemeProvider>
                <RouteProvider/>
            </AppThemeProvider>
        </Provider>
      </>
  )
}

export default App
