import { Header } from "./components/Header";
import { createServer, Model } from "miragejs";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import React from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

createServer({
    models: {
        transactions: Model,
    },
    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: "Freelancer de website",
                    type: "deposit",
                    category:"dev",
                    amount:6000,
                    createdAt: new Date()
                },
                {
                    id: 2,
                    title: "Aluguel",
                    type: "withdraw",
                    category:"Casa",
                    amount:1000,
                    createdAt: new Date()
                },
                {
                    id: 3,
                    title: "Salário",
                    type: "deposit",
                    category:"CLT",
                    amount:3000,
                    createdAt: new Date()
                },
            ],
        });
    },
    routes() {
        this.namespace = "api";
        this.get("/transactions", () => {
            return this.schema.all("transactions");
        });
        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create("transactions", data);
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
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            ></NewTransactionModal>
            <GlobalStyle></GlobalStyle>
        </>
    );
}
