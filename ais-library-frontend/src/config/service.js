const getENV = () => {
  switch (process.env.REACT_APP_BACKEND_URL) {
    case 'production': {
      return 'YOUR API';
    }
    case 'dev': {
      return 'http://localhost:9191';
    }
    default:
      return 'http://localhost:9191';
  }
};

export const BACKEND_API = getENV();
