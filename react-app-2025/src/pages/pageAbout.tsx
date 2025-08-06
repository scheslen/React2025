import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary.tsx";

export const PageAbout = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
    </>
  );
};
