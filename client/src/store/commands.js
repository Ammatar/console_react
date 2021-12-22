export const commands = {
  help(id, tabs) {
    tabs[0].content.push(
      <>
        <p>List of commands: </p>
        <ul>
          <li>help - for commands list </li>
          <li>addTab - to add new Tab</li>
          <li>clear - to clear console</li>
        </ul>
      </>
    );
  },
  addTab(tabs) {
    tabs.push({ tabName: 'New tab', id: Math.random(), content: [] });
  },
  notFound(id, tabs) {
    tabs.map((el) => {
      return el.id === id ? el.content.push('command not found') : el;
    });
  },
};
