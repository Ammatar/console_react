import React from 'react';
import { observer } from 'mobx-react-lite';

const Content = observer(({ store, activeTabId }) => {
  return (
    <div className='content'>
      <h2>Content</h2>
      <div>
        {store.tabs.map((el) => {
          return el.id === activeTabId ? (
            <div key={Math.random()}>
              {el.content.map((el) => {
                return <div key={Math.random()}>{el}</div>;
              })}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
});

export default Content;
