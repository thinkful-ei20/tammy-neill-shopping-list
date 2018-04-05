'use strict';

function main() {
  console.log('DOM ready...');
  $('form').on('submit', event => {
    event.preventDefault();
    const entry = $('#js-shopping-list-form').val();
    // const fizzResults = fizzbuzzer(number);
    // [ 1, 2, 'fizz', 4, 'buzz' ]
    const html = '<p> Hello world. </p>';
    // resultsToHtml(fizzResults);
    // [ '<div>1</div>', '<div>fizz</div>' ]
    $('.shopping-list').append(html);
    $('#js-shopping-list-entry').val('New');
  });

}

$(main);

console.log("I am working.");