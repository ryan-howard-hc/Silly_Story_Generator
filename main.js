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


  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace ('Bob', name);
  }

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  console.log (document.getElementById("uk").checked)
  console.log (`${Math.round(2.112)} stone`)
  
//  if(document.getElementById("uk").checked) {
//    const weight = Math.round.concat(`21.4286, "stone"`);
//    const temperature =  Math.round.concat(`34.4444, "centigrade"`); }
  
   if (document.getElementById("uk").checked) {
      const weight = `${Math.round(300*0.0714286)} stone`;
      const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }
    
  {
    story.textContent = newStory ;
    story.style.visibility = 'visible';
  }
}

