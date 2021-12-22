import React from 'react';

const Controls = ({ store, activeTabId, commands, setData }) => {
  const [inputString, setInputString] = React.useState('');

  return (
    <div className='controls--container'>
      <form
        className='controls--form'
        onSubmit={(e) => {
          e.preventDefault();
          store.commandSend(activeTabId, inputString);
          setInputString('');
        }}
      >
        <input
          type='text'
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            store.commandSend(activeTabId, inputString);
            setInputString('');
          }}
        >
          Send
        </button>
        <button onClick={() => store.commandClear(activeTabId)}>Clear</button>
      </form>
    </div>
  );
};

export default Controls;
