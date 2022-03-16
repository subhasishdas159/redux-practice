import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {
  const account = useSelector((state) => state.account);
  console.log('account', account);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return (
    <div className="App">
      <header className="App-header">
        {account}
        <button
          style={{ fontSize: '2rem', marginTop: '1rem' }}
          onClick={() => depositMoney(1)}
        >
          deposit
        </button>
        <button
          style={{ fontSize: '2rem', marginTop: '1rem' }}
          onClick={() => withdrawMoney(1)}
        >
          withdraw
        </button>
      </header>
    </div>
  );
}

export default App;
