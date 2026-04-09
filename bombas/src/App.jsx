import { useContext } from "react";
import { GameContext, GameProvider } from "./GameContext";
import Game from "./Game";
import Menu from "./Menu";

// 👇 Este componente decide qué mostrar
function AppContent() {
  const { pantalla } = useContext(GameContext);

  return (
    <>
      {pantalla === "menu" && <Menu />}
      {pantalla === "game" && <Game />}
    </>
  );
}

// 👇 Este envuelve toda la app con el Context
function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
