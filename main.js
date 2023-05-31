const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${Bob} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
var insertX = ("Willy the Goblin", "Big Daddy", "Father Christmas");
var insertY = ("the soup kitchen", "Disneyland", "the White House");
var insertZ = ("spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away");

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const Bob = customName.value;
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round.concat(21.4286, "stone");
    const temperature =  Math.round.concat(34.4444, "centigrade");
  } else {
      const weight = Math.round.concat(300, "pounds");
      const temperature = Math.round.concat(94, "Fahrenheit")
    }
  

  {
    story.textContent = newStory ;
    story.style.visibility = 'visible';
  }
}


newStory = storyText
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);