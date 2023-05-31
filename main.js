const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);



  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace ('Bob', name);
  }

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(document.getElementById("uk").checked) {
    let weight = Math.round.concat(21.4286, "stone");
    let temperature =  Math.round.concat(34.4444, "centigrade");
  } else {
      let weight = Math.round.concat(300, "pounds");
      let temperature = Math.round.concat(94, "Fahrenheit");
    }
  

  {
    story.textContent = newStory ;
    story.style.visibility = 'visible';
  }
}

