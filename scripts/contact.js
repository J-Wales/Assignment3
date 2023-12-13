// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submitButton = document.getElementById('submit-button');

function changeContent() {
    let msg = document.getElementById('contact-page');
    msg.innerHTML='<p>Thank you for your message</p>';
    msg.classList.add('large-text');
}

submitButton.addEventListener('click',changeContent);