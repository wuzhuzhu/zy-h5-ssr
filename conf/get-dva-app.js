import dva from 'dva-no-router';

const isServer = typeof window === 'undefined'

// 1. Initialize
const app = dva({
  initialState: isServer ? undefined : window.initState,
  onError(error) {
    // console.error(error)
    Toast.fail(error.message)
  },
  onReducer: reducer => {   // persist reducer enhencer
    return (state, action) => {
      const newState = reducer(state, action);
      if (!isServer) {
        window.initState = newState
      }
      return newState
      // 由于 dva 同步了 routing 数据，所以需要把这部分还原
    }
  },
});

// 2. Plugins
// app.use({});

// 3. Model



export default (PageContainer, pageModel) => {
  try {
    app.model(pageModel)
  }
  catch(e) {}

  app.router(() => {
    return (
        <PageContainer />
    );
  });

  return app.start();
}