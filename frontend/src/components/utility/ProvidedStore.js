import { Component } from 'react';
import { connect } from 'react-redux';
import { getUserAction } from 'store/user/userActions';
import { setAuthorizationHeader } from 'services/api';

// this component is used to perform high level interactions with state
class ProvidedStore extends Component {
  componentDidMount () {
    console.log(this.props);
    const { accessToken } = this.props;
    setAuthorizationHeader(accessToken);
    if (accessToken) {
      this.props.getUserAction();
    }
  }

  render () {
    return this.props.children;
  }
}

const mapStateToProps = state => ({
  accessToken: state.user.accessToken
});

const mapDispatchToProps = {
  getUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ProvidedStore);
