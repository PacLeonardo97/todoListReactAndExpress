import React from 'react';
import GlobalStyle from './styles';
import TodoList from './pages/todoList';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './ducks';
function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={<p>loading</p>} persistor={persistor}>
        <GlobalStyle />
        <TodoList />
      </PersistGate>
    </Provider>
  );
}

export default App;
