import { Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import Popular from "./pages/Popular";
import Recent from "./pages/Recent";
import MyBlog from "./pages/MyBlog";
import GameUpload from "./pages/GameUpload";
import Community from "./pages/Community";
import Help from "./pages/Help";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage/>} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/populr" element={<Populr />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/my_blog" element={<MyBlog />} />
        <Route path="/upload" element={<GameUpload />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Help" element={<Help />} />
      </Route>
    </Routes>
  );
}

export default App;
