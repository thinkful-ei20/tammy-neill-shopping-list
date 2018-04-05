'use strict';

function createHtml(entry) {
  return `
      <li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}

function main() {
  console.log('DOM ready...');
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const entry = $(this).find('input[name="shopping-list-entry"]').val();

    $('.js-shopping-list-entry').val('');

    const html = createHtml(entry);

    $('.shopping-list').append(html);
    $('#js-shopping-list-entry').val('New');
    console.log(`Entry: ${entry}`);
  });
  $(this).find('input[name="shopping-list-entry"]').val();

  // item check toggle

  // $('shopping-list-item').on('click', '.shopping-item', function(event) {
  //   $('shopping-item').toggleClass('shopping-item__checked')});

  $('.shopping-item-toggle').click(function(event) {
    event.preventDefault();

    console.log('Button press');

    $('.shopping-item').toggleClass('.shopping-item .shopping-item__checked');
  });

}


$(main);

console.log('I am working.');