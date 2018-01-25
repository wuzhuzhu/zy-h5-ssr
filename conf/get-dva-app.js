import dva from 'dva-no-router';
// redux persist
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

const persistConfig = {
  key: 'root',
  storage: storage,
}

// 1. Initialize
const app = dva({
  onError(error) {
    // console.error(error)
    Toast.fail(error.message)
  },
  onReducer: reducer => {   // persist reducer enhencer
    return (state, action) => {
      return persistReducer(persistConfig, reducer)(state, action);
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

  // let persistor = persistStore(app._store)

  app.router(() => {
    return (
        <PageContainer />
    );
  });

  return app.start();
}