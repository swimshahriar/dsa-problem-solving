class Search {
  #dictionary = {};

  insert(word) {
    let currDictionary = this.#dictionary;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (currDictionary[char] === undefined) {
        currDictionary[char] = {};
      }
      currDictionary = currDictionary[char];
    }

    currDictionary['done'] = true;
  }

  find(word) {
    let currDictionary = this.#dictionary;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (currDictionary[char] !== undefined) {
        currDictionary = currDictionary[char];
      } else return false;
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
s.insert('hi');
s.insert('hie');
s.insert('bi');
s.delete('be');
console.log(s.data);
