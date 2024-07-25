import { Container, Typography } from "@mui/material";

function TaxReport({ taxData }) {
  return (
    <Container style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Typography variant="h5">Relatório de Impostos</Typography>
      <Typography variant="body1">
        Nome:
        {` ${taxData.name}`}
      </Typography>
      <Typography variant="body1">
        Idade:
        {` ${taxData.age} anos`}
      </Typography>
      <Typography variant="body1">
        Renda:
        {` ${parseFloat(taxData.income).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}
      </Typography>
      <Typography variant="body1">
        Imposto a Pagar:
        {` ${parseFloat(taxData.tax).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}
      </Typography>
    </Container>
  );
}

export default TaxReport;
