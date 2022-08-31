import { SummaryCard, SummaryContainer } from "./styled";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={23} color="#00b37e" />
        </header>
        <strong> R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={23} color="#F75A68" />
        </header>
        <strong> R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={23} color="#fff" />
        </header>
        <strong> R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
