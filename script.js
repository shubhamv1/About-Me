const messages = [
  'Hello! I am Shubham Verma 🙋',
  'I am a Frontend Web developer ',
  'Pursuing Fullstack Web Development course in Acciojob 📝',
  'My Technical Skills: HTML,CSS, JavaScript,Java 💻',
  'Hobbies:Book reading, Photography, Videography  🎨 📸 📚',
  'Passion: Coding,  💻 👩‍🏫'
];



const images = [
  'image1.jpg',
  'https://i.gifer.com/2n0B.gif',
  'https://i.gifer.com/BnqM.gif',
  'https://i.gifer.com/JXA0.gif',
  'https://i.gifer.com/XHXn.gif',
  'https://i.gifer.com/5eKX.gif',
  'https://i.gifer.com/5eKX.gif'
];

let index = 0;

function generateMessage() {
  let current = messages[index];
  let currentImage = images[index];
  index++;

  if (index >= messages.length) {
    index = 0;
  }

  let img = document.createElement('img');
  img.src = currentImage;
  img.classList.add('image');
  document.body.appendChild(img);

  return current;
}



const heading = document.getElementById('heading');
const message = document.getElementById('message');
const cursor = document.getElementById('cursor');
const button = document.getElementById('button');


function handleClick() {
  let msg = generateMessage();
  message.textContent = '';
  cursor.style.display = 'block';
  button.disabled = true;
  let i = 0;
  let intervalId = setInterval(() => {
    if (i >= msg.length) {
      clearInterval(intervalId);
      cursor.style.display = 'none';
      button.disabled = false;
      button.textContent = 'Click Again';
      document.querySelectorAll('.image').forEach((img) => {
        img.remove();
      });

      if (i === messages.length) {
        document.querySelectorAll('.image').forEach((img) => {
          img.remove();
        });
      }

      return;
    }
    message.textContent += msg.charAt(i);
    button.textContent = 'Wait...';
    button.disabled = true;
    i++;
    return;
  }, 100);

  if (i === messages.length) {
    document.querySelectorAll('.image').forEach((img) => {
      img.remove();
    });
  }
}



button.addEventListener('click', handleClick);



