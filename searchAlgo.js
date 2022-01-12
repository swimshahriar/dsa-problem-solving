class Search {
  #dictionary = {};

  insert(word) {
    let currDictionary = this.#dictionary;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (currDictionary['next'] === undefined) {
        currDictionary['next'] = {};
        currDictionary['next'][char] = {};
      } else {
        if (currDictionary['next'][char] === undefined) {
          currDictionary['next'][char] = {};
        }
      }

      currDictionary = currDictionary['next'][char];
    }

    currDictionary['done'] = true;
  }

  find(word) {
    let currDictionary = this.#dictionary;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currDictionary['next'] || !currDictionary['next'][char]) {
        return false;
      } else {
        currDictionary = currDictionary['next'][char];
      }
    }

    return currDictionary['done'] || false;
  }

  delete(word) {
    let currDictionary = this.#dictionary;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (currDictionary[char] !== undefined) {
        currDictionary = currDictionary[char];
      } else return console.log('Word is not in dictionary.');
    }
    delete currDictionary['done'];
  }

  get data() {
    return JSON.stringify(this.#dictionary, null, 2);
  }
}

const s = new Search();
s.insert('hello');
s.insert('hie');
console.log(s.find('hie'));
// s.insert('bi');
// s.delete('be');
// console.log(s.data);
