import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorDescription,
} from "./error-boundary.styles";
import ErroImg from '../../assets/error-boundary.png'

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={ErroImg} />
          <ErrorImageText>This Page is Not on the Map</ErrorImageText>
          <ErrorDescription>
            You told your friends you weren’t bringing your phone, to try and
            experience what travel was like back in the day. You bought a map
            and a bottle of water and carried your camera for the money shot.
            But the map was from 2005 and the landscape had changed. So here you
            are, in the middle of a large field, that the map continues to claim
            is a local grocer.
          </ErrorDescription>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
