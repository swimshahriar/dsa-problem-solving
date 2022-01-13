console.clear();
class Search {
  #dictionary = {};
  #suggestionsLimit = 5;

  insert(word) {
    let currDictionary = this.#dictionary;

    for (let char of word) {
      if (currDictionary[char] === undefined) {
        currDictionary[char] = { next: { wordList: new Set() } };
      }
      const wordList = currDictionary[char]['next']['wordList'];
      wordList?.size < #suggestionsLimit && wordList.add(word);
      currDictionary = currDictionary[char]['next'];
    }

    currDictionary['done'] = true;
  }

  find(word) {
    let currDictionary = this.#dictionary;

    for (let char of word) {
      if (currDictionary[char] === undefined) {
        return false;
      } else {
        currDictionary = currDictionary[char]['next'];
      }
    }

    return currDictionary['done'] || false;
  }

  search(queryString) {
    let currDictionary = this.#dictionary;
    let suggestions = {};

    for (let char of queryString) {
      if (currDictionary[char] !== undefined) {
        currDictionary = currDictionary[char]['next'];
        suggestions = currDictionary['wordList'];
      }
    }

    return suggestions;
  }

  delete(word) {
    let currDictionary = this.#dictionary;

    for (let char of word) {
      if (currDictionary[char]['next'] !== undefined) {
        currDictionary = currDictionary[char]['next'];
        currDictionary['wordList']?.delete(word);
      } else {
        return console.log('Word is not in dictionary.');
      }
    }
    delete currDictionary['done'];
  }

  get data() {
    return this.#dictionary;
  }

  set suggestionWordLimit(number) {
    this.#suggestionsLimit = number;
  }
}

const s = new Search();
s.insert('hi');
s.insert('hie');
s.insert('hei');
// s.delete('hi');
// console.log(s.find('hie'));
console.log(s.search('hi'));
// console.log(s.data);
