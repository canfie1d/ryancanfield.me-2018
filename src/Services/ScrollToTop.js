import React from "react";
import { withRouter } from "react-router";

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration.
export var ScrollToTop = withRouter(
  class ScrollToTopWithoutRouter extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        document.getElementById('scrollArea').scrollTo(0, 0);
      }
    }

    render() {
      return null;
    }
  }
);
