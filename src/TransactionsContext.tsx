import React, { ReactNode } from "react";
import { createContext } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export const TransactionsProvider = ({ children }: TransactionProviderProps) => {
    const [transactions, setTransactions] = React.useState<Transaction[]>([]);

    React.useEffect(() => {
        api.get("http://localhost:3000/api/transactions").then(({ data }) => setTransactions(data.transactions));
    }, []);

    return <TransactionContext.Provider value={transactions}>{children}</TransactionContext.Provider>;
};
