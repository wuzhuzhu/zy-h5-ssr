import dva from 'dva-no-router';

const app = dva({
  onError(error) {
    // console.error(error)
    Toast.fail(error.message)
  },
});

export default app