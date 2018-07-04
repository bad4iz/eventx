const button = document.getElementById('button');

button.addEventListener('click', () => {
  console.log('click');

  triggerEvent(button, 'start', {url: 'my-url'});

});


function triggerEvent(target, eventType, eventDetail) {
  const event = new CustomEvent(eventType, {
    detail: eventDetail,
    'bubbles': true,
    'cancelable': true
  });
  target.dispatchEvent(event);
}
