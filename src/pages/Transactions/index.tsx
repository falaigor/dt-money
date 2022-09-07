import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styled";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Categoria</td>
              <td>07/09/2022</td>
            </tr>

            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 100,00</PriceHighlight>
              </td>
              <td>Alimentacao</td>
              <td>07/09/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
