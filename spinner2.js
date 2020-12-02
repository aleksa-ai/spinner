const characters = ['|', '/', '-', '\\', '|']

const spinner = function (characters) {
  timeout = 100
  for(const character of characters) {
    setTimeout(() => {
      process.stdout.write('\r' + character + '   ');
    }, timeout+=200);
  }
}

spinner(characters);