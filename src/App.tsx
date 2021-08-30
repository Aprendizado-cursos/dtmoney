import { Header } from "./components/Header";
import { createServer } from "miragejs";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root")

createServer({
    routes() {
        this.namespace = "api";
        this.get("/transactions", () => {
            return [
                {
                    id: 1,
                    title: "Transaction 1",
                    amount: 400,
                    type: "deposit",
                    category: "Food",
                    createAt: new Date(),
                },
            ];
        });
    },
});

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}></Header>
            <Dashboard></Dashboard>
            <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                <h2>Cadastrar Transação</h2>
            </Modal>
            <GlobalStyle></GlobalStyle>
        </>
    );
}
