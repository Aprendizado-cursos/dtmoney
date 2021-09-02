import React from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
    const transactions = React.useContext(TransactionContext);
    console.log(transactions);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt=""></img>
                </header>

                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt=""></img>
                </header>

                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=""></img>
                </header>

                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}
