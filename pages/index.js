import app from '../conf/get-dva-app'
import { connect } from 'dva-no-router';

// page component and model
import IndexPage from '../components/pages/index'
import IndexModel from '../models/index-page/index'

// import actions
import { addString } from '../models/index-page/actions'
import { get } from 'lodash'

// container part
@connect(mapStateToProps, {
  addString,
})
class Container extends React.Component {
  render() {
    return <IndexPage {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    example: get(state, 'example.example'),
  };
}

// registe model and start dva.
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
