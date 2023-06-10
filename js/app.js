/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const myFirstSection = document.querySelector('#section1');
const mySecondSection = document.querySelector('#section2');
const myThirdSection = document.querySelector('#section3');
const myFourthSection = document.createElement('section');
const mainDocument = document.querySelector('main');
const navBar = document.querySelector('#navbar__list');

// Build menu 
myFirstSection.innerHTML = `<div class="section1">
<h2>Section 1</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>`;
mySecondSection.innerHTML = ` <div class="section2">
<h2>Section 2</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>`;
myThirdSection.innerHTML = `
<div class="section3">
<h2>Section 3</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>`;

myFourthSection.innerHTML = `<section id="section4" data-nav="Section 4"> 
<div class="section4">
<h2>Section 4</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`;


mainDocument.appendChild(myFourthSection);

// build the nav
const allSections = document.querySelectorAll('section');
const totalCount = allSections.length;

for (let i = 1; i < totalCount; i++) {
    const navElement = document.createElement('li');
    navElement.innerHTML = `<li class = "menu__link" id ="section${i}"> <a href="#section${i}">Section${i}</a></li>`;
    navBar.appendChild(navElement);
}

//add eventlistener on the navbar
const navSection = document.querySelectorAll('li')
for (let y = 0; y < navSection.length; y++)
{
  console.log(navSection.length + " this is the length of the node list navSection")
  navSection[y].addEventListener('click',function(event){
  event.preventDefault();
  const section1 = document.getElementById('section1')
  const section2 = document.getElementById('section2')
  const section3 = document.getElementById('section3')
  const section4 = document.getElementById('section4')
  console.log(section1.getAttribute('id') + " this is the id for section1")
  console.log(myFirstSection.getAttribute('id') + " this is the id for myFirstSection")
  console.log(navSection[y].getAttribute('id') + " this is the id of the current navsection")
    if (section1.getAttribute('id')  === myFirstSection.getAttribute('id'))
      {
           myFirstSection.scrollIntoView({
           behavior: 'smooth'
        });
     }
     else if (section2.getAttribute('id') === mySecondSection.getAttribute('id'))
       {
          mySecondSection.scrollIntoView({
          behavior: 'smooth'
        })
        }
      else if (section3.getAttribute('id')  === myThirdSection.getAttribute('id'))
        {
          myThirdSection.scrollIntoView({
          behavior: 'smooth'
         })
       }
       else if (section4.getAttribute('id')  === myFourthSection.getAttribute('id'))
       {
          myFourthSection.scrollIntoView({
          behavior: 'smooth'
         
           });
        }

})
}; 


// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of allSections) {
      const box = section.getBoundingClientRect();
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 150 && box.bottom >= 150) {
        // Apply active state on the current section and the corresponding Nav link.
        section.className ='your-active-class';
      } else {
        // Remove active state from other section and corresponding Nav link.
        section.className ='';
      }
    }
  }

  // Make sections active
 document.addEventListener("scroll", function() {
 makeActive();
 console.log('The scroll function to make active is called')
  });


  //https://www.w3docs.com/snippets/javascript/how-to-create-smooth-scrolling-when-clicking-an-anchor-link.html

  // mySecondSection.scrollIntoView({
  //   block: 'start',
  //   behavior: 'smooth',
  //   inline: 'start'
  // });
  // myThirdSection.scrollIntoView({
  //   block: 'start',
  //   behavior: 'smooth',
  //   inline: 'start'
  // });
  // myFourthSection.scrollIntoView({
  //   block: 'start',
  //   behavior: 'smooth',
  //   inline: 'start'
  // });