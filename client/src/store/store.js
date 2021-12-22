import { makeAutoObservable } from 'mobx';
import { commands } from './commands';

class MainStore {
  //initial state
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
}

const store = new MainStore();
export default store;
