import React from 'react';
import Content from './Console/Content';
import Controls from './Console/Controls';
import Tabs from './Console/Tabs';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const MainWindow = observer(() => {
  const [tabs, setTabs] = React.useState([...store.tabs]);
  const [activeTabId, setActiveTabId] = React.useState(0);
  const [data, setData] = React.useState('Initial data');

  return (
    <>
      <Tabs
        tabs={tabs}
        store={store}
        setTabs={setTabs}
        setActiveTabId={setActiveTabId}
      />
      <Content
        data={data}
        store={store}
        tabs={tabs}
        activeTabId={activeTabId}
      />
      <Controls setData={setData} store={store} activeTabId={activeTabId} />
    </>
  );
});

export default MainWindow;
