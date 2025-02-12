//import componenti
import Header from "./components/Header";
import Main from "./components/Main";
//import provider
import { ArticleProvider } from "./contexts/ArticleContext";

export default function App() {
  return (
    <>
      <ArticleProvider>
        <Header />
        <Main />
      </ArticleProvider>
    </>
  );
}
