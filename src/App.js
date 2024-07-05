import { Suspense } from "react";
import PublicRoute from "./routes/PublicRouter";

function App() {
  return (
    <div className="App">
      <Suspense fallback={'Loding...'}>
        <PublicRoute />
      </Suspense>
    </div>
  );
}

export default App;
