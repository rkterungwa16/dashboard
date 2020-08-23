import {
  MainContainer,
  TransactionStatsContainer,
  TodaysStat,
  PaymentsWrapper,
  PaymentTitle,
  PaymentTable
} from "../components/layout/main/";

export const Main = () => (
  <MainContainer>
    <TransactionStatsContainer />
    <TodaysStat />
    <PaymentTitle />
    <PaymentsWrapper />
    <PaymentTable />
  </MainContainer>
)
