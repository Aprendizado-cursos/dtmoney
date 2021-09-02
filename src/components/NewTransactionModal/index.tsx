import React, { FormEvent } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { TransactionContext } from "../../TransactionsContext";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = React.useContext(TransactionContext);

    const [type, setType] = React.useState("deposit");
    const [title, setTitle] = React.useState("");
    const [amount, setAmout] = React.useState(0);
    const [category, setCategory] = React.useState("");

    function handleCreateTransaction(event: FormEvent) {
        event.preventDefault();
        createTransaction({
            title,
            amount,
            category,
            type,
        });
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fecha modal"></img>
            </button>
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmout(Number(e.target.value))}
                ></input>
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"></img>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída"></img>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}></input>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
