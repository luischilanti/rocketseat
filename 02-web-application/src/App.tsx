import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransaction } from "./components/NewTransaction";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransaction isOpen={isOpen} onRequestClose={handleCloseModal} />
      <GlobalStyle />
    </>
  );
}
