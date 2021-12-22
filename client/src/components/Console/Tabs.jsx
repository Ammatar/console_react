import React from 'react';
import { observer } from 'mobx-react-lite';

const Tabs = observer(({ store, setActiveTabId }) => {
  return (
    <div className='tabs--container'>
      {store.tabs.map((el) => {
        return (
          <div
            key={el.id}
            className='tab--item'
            onClick={() => setActiveTabId(el.id)}
          >
            <h2>{el.tabName}</h2>
          </div>
        );
      })}
      <h2 onClick={() => store.addTab()}>+</h2>
    </div>
  );
});

export default Tabs;
