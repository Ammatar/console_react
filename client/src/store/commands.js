export const commands = {
  help(id, tabs) {
    tabs[0].content.push(
      <>
        <p>List of commands: </p>
        <ul>
          <li>help - for commands list </li>
          <li>addTab - to add new Tab</li>
          <li>clear - to clear console</li>
          <li>login %username% - set user</li>
          <li>logoff - unset user</li>
        </ul>
      </>
    );
  },
  addTab(tabs) {
    tabs.push({ tabName: 'New tab', id: Math.random(), content: [] });
  },
  login(isLogged, id, tabs, username, newUsername) {
    if (isLogged) {
      tabs.map((el) => {
        return el.id === id
          ? el.content.push(`Alredy logged as ${username}`)
          : el;
      });
    } else {
      username = newUsername;
      isLogged = !isLogged;
      tabs.map((el) => {
        return el.id === id ? el.content.push(`Logged as ${username}`) : el;
      });
    }

    // console.log(isLogged);
    return { isLogged, username };
  },
  notFound(id, tabs) {
    tabs.map((el) => {
      return el.id === id ? el.content.push('command not found') : el;
    });
  },
};
