import Modal from "react-modal";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
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
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransaction isOpen={isOpen} onRequestClose={handleCloseModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
