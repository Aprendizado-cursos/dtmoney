import React, { createContext, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
    children: ReactNode;
}
interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
    const [transactions, setTransactions] = React.useState<Transaction[]>([]);

    React.useEffect(() => {
        api.get("http://localhost:3000/api/transactions").then(({ data }) => setTransactions(data.transactions));
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post("/transactions", transaction);
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};
