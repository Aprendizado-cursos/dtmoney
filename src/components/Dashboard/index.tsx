import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";

export function Dashboard() {
    return (
        <Container>
            <Summary></Summary>
            <TransactionTable></TransactionTable>
        </Container>
    );
}
