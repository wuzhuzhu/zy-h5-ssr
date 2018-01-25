import dva from 'dva-no-router';

// 1. Initialize
const app = dva({
  onError(error) {
    // console.error(error)
    Toast.fail(error.message)
  },
});

// 2. Plugins
// app.use({});

// 3. Model

export default app