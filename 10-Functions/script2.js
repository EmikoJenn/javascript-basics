'use strict';

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3:C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const selectedOption = +prompt(
      `${this.question}\n${this.options.join('\n')}\n(write option number)`
    );
    typeof selectedOption === 'number' &&
      selectedOption < this.options.length &&
      this.answers[selectedOption]++;

    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
