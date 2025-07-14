import { Component } from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  error: boolean;
}

export class ErrorBoundary extends Component <Props, State>{

  constructor(props: Props) {
  super(props);
  this.state = { error: false };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  public static getDerivedStateFromError(): State {
     return { error: true };
   }

 render() {
    if (this.state.error) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}