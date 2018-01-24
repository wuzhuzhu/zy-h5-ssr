import app from '../conf/get-dva-app'
import { connect } from 'dva-no-router';
import { get } from 'lodash'

import IndexModel from '../models/index-page/index'

@connect(mapStateToProps)
class Container extends React.Component {
  render() {
    return  <div>从index修改而来的内容：{this.props.example}</div>
  }
}

function mapStateToProps(state) {
  return {
    example: get(state, 'example.example'),
  };
}

export default function () {
  app.router(() => {
    return <Container />;
  });

  try {
    app.model(IndexModel)
  }
  catch(e) {}

  const Component = app.start();
  return (
    <Component />
  );
}
