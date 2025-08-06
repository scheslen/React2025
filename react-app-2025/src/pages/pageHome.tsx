import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary.tsx";

export const PageHome = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </>
  );
};
