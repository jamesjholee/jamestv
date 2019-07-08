import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';

import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
  conponentDidMount() {
    this.fetchStream(this.props.match.param.id)
  }

  renderActions() {
    const { id } = this.props.match.params;

    return(
      <>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
        <Link to='/' className="ui button">Cancel</Link>
      </>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you wnat to delete this stream?'
    }
    return `Are you sure you wnat to delete this stream with title: ${this.props.stream.title}?`
  }

  render() {
    return(
        <Modal
          title='Delete Stream'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => {history.push('/')}}
        />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{ fetchStream, deleteStream })(StreamDelete);
