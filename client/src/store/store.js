import { makeAutoObservable } from 'mobx';
import { commands } from './commands';

class MainStore {
  //initial state
  isLogged = false;
  username;
  commands;
  tabs = [
    {
      tabName: 'Main',
      id: 0,
      content: ['Type "help" for commands list'],
    },
    { tabName: 'Second', id: 1, content: ['Type "help" for commands list'] },
  ];
  constructor() {
    makeAutoObservable(this);
    this.commands = commands;
  }

  commandSend(id, command) {
    let commandSplit = null;
    if (command.length > 0) {
      commandSplit = command.split(' ');
      switch (commandSplit[0]) {
        case 'help':
          commands.help(id, this.tabs);
          break;
        case 'addTab':
          commands.addTab(this.tabs);
          break;
        case 'clear':
          this.commandClear(id);
          break;
        case 'login':
          if (commandSplit[1]) {
            const user = commands.login(
              this.isLogged,
              id,
              this.tabs,
              this.username,
              commandSplit[1]
            );
            this.isLogged = user.isLogged;
            this.username = user.username ? user.username : null;
          }
          break;
        case 'logoff':
          this.isLogged = false;
          this.username = null;
          break;
        default:
          commands.notFound(id, this.tabs);
          break;
      }
    }
  }
  commandClear(id) {
    this.tabs.map((el) => {
      return el.id === id
        ? (el.content = ['Type "help" for commands list'])
        : el;
    });
  }
  toggleLogged() {
    this.isLogged = !this.isLogged;
  }
}

const store = new MainStore();
export default store;
