function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      console.log('Button clicked');
    });
  }
  const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  })

  afterEach(function() {
    sinon.restore(); // Restore the original method after each test
  });

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
    expect(input.addEventListener.calledWith('click')).to.be.true;
  });
});

