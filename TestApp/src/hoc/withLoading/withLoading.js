import React from 'react';
import Spinner from '../../components/Spinner/Spinner';

function withLoading(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
      };
    }

    setLoadingState = isComponentLoading => {
      this.setState({isLoading: isComponentLoading});
    };
    render() {
      return (
        <>
          {this.state.isLoading && <Spinner isLoading={this.state.isLoading} />}
          <WrappedComponent {...this.props} setLoading={this.setLoadingState} />
        </>
      );
    }
  };
}

export default withLoading;
