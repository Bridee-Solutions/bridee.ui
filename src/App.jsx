import "./App.css";
import "./index.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import TelaInicial from "./pages/TelaInicial/TelaInicial";
import Cadastro from "./pages/Cadastro/Cadastro";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import ReenviarEmail from "./pages/ReenviarEmail/ReenviarEmail";
import Error from "./pages/Error/Error";
import Painel from "./pages/Painel/Painel";
import Calculadora from "./pages/Calculadora/Calculadora";
import ListaConvidados from "./pages/ListaConvidados/ListaConvidados";
import PlanejadorAssentos from "./pages/PlanejadorAssentos/PlanejadorAssentos";
import ListaTarefas from "./pages/ListaTarefas/ListaTarefas";
import { CircularProgress, Stack, Box, Typography } from "@mui/material";

import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Mostra "Carregando" quando a página inicial é carregada ou a rota muda
    const timer = setTimeout(() => setIsLoading(false), 1000); // ajuste o tempo conforme necessário

    return () => clearTimeout(timer); // Limpa o timeout ao desmontar o componente
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Stack
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
       
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress sx={{ color: "#EB9B9A" }} size="8rem" />
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: "black", 
              fontFamily: "Playfair Display", 
              marginBottom: "2rem", 
              fontSize: "1.5rem",
            }}
          >
            Carregando...
          </Typography>
        </Stack>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tela-inicial" element={<TelaInicial />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/reenviar-email" element={<ReenviarEmail />} />
          <Route path="*" element={<Error />} />
          <Route path="/painel" element={<Painel />} />
          <Route path="/calculadora-financeira" element={<Calculadora />} />
          <Route path="/lista-convidados" element={<ListaConvidados />} />
          <Route path="/planejador-assentos" element={<PlanejadorAssentos />} />
          <Route path="/lista-tarefas" element={<ListaTarefas />} />
        </Routes>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
