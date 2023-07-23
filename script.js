document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
  
    // Fade in the logo after a short delay (you can adjust the delay as needed)
    setTimeout(() => {
      logo.style.opacity = "1";
    }, 1000);
  });

  function toggleMenu() {
    var menu = document.getElementById('navMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

// Add an event listener to each link in the navigation menu
var links = document.querySelectorAll('.navigation-menu a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    var menu = document.getElementById('navMenu');
    menu.style.display = 'none'; // Hide the menu when a link is clicked
  });
}

// TIMELINE
function showMovieInfo(film) {
  var movieDetails = document.getElementById(film + '-details');
  var allMovieDetails = document.querySelectorAll('.movie-details');

  // Hide all other movie details
  allMovieDetails.forEach(function (details) {
    details.style.display = 'none';
  });

  // Show the selected movie details
  movieDetails.style.display = 'block';
}

// FOOTERS
function openModal(imageUrl) {
  console.log(imageUrl);
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');

  // Set the image source and show the modal
  modalImage.src = imageUrl;
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal');

  // Hide the modal
  modal.style.display = 'none';
}

var SidneyBiography;
SidneyBiography = "Sidney Prescott was not a victim by choice. For over twenty five years she was targeted by nine Ghostface killers all hell bent on getting revenge against or seeking fame through her. Starting in 1996, Sidney was targeted by Billy Loomis and Stu Macher with Billy primarily seeking revenge against Sidney due to her mother's actions.<br><Br>A year later, Sidney enrolled at Windsor College and was targeted by a new pair of Ghostface killers. One of these being the mother of Billy, Nancy Loomis and an accomplice named Mickey Altieri. Nancy sought revenge against Sidney for killing her son and Mickey was seeking fame going on trial for being a killer.<br><Br>Following the Windsor College murders, Sidney went into hiding in the Monterey mountain ranges taking a job as a phone operator for a Women's Crisis Hotline. She was lured out of hiding by a new Ghostface killer who began killing off members of the cast of <I>Stab 3: Return to Woodsboro</I> and the killer was unmasked as her long-lost half-brother, Roman Bridger, who was also the director of Stab 3.<br><br>For the next twelve years life was peaceful for Sidney. She wrote a self help book called <I>Out of Darkness</I> and married LAPD officer Mark Kincaid. In 2011, Sidney returned to Woodsboro on the last stop of her book tour where her demented cousin, Jill Roberts, and Woodsboro High School student, Charlie Walker, staged the first 21st century Ghostface killing spree, determined to get fame through the murders.<br><br>Following these murders, Sidney's life continued in peace for another 11 years until she was brought back to Woodsboro following the murder of Dewey Riley. She joined forces with new final girl, Samantha Carpenter to kill the new Ghostface killers and returned home with Mark and her three daughters. Sidney finally got her happy ending and opted to stay away when Ghostface struck in New York City.<br><br><center><img src='assets/final-girls/sidney-prescott.jpg' width=250px></center>";

var GaleBiography;
GaleBiography = "Gale Weathers started out as a reporter for Top Story. Following the murder of Maureen Prescott she gained nationwide stardom after writing a book called <I>Wrongly Accused: the Maureen Prescott Murder</I> which received mixed reviews. Gale returned to Woodsboro in 1996 following the murder of Casey Becker where she helped stop the Ghostface killings. She wrote another book called <I>The Woodsboro Murders</I> which was turned into the film <I>Stab</I>.<br><br>Gale arrived at Windsor College in 1997 following the murders at the premiere of Stab and joined forces once again with Woodsboro Police Officer, Dewey Riley, to stop the murders. The two formed a romantic relationship however after a period of time together Gale and Dewey split with Gale going to Hollywood to join the team at Total Entertainment. She also published another book called <I>College Terror</I>.<br><br>After stopping Roman Bridger in Hollywood, Gale and Dewey got engaged and moved to Woodsboro together. Gale lived a somewhat unhappy life in Woodsboro but got her rush again when a new killing spree happened in 2011. Following these murders, Gale and Dewey stayed together for another couple of years before Gale wanted to try her luck in New York.<br><br>The move took a toll on their marriage and Dewey left New York in the middle of the night after staying for a month. It was here that their marriage ended and Gale became the host of her own morning show. Gale was called back to Woodsboro in 2022 by Dewey Riley and had one final reunion with him before he was murdered. She got her revenge by setting his killer, Amber Freeman, alight.<br><br>Gale returned to New York following the 2022 Woodsboro Murders and one year later found herself mentoring the Carpenter sisters as they faced their second round of Ghostface killings. With Sidney in hiding, Gale took the lead and was close to meeting her maker. Being Gale, she held on to fight another day.<br><br><center><img src='assets/final-girls/gale-weathers.jpg' width=250px></center>";

var KirbyBiography;
KirbyBiography = "Kirby Reed was a final girl of the 2011 Woodsboro Murders when she was betrayed by her friends Jill Roberts and Charlie Walker. She was stabbed twice by Charlie Walker and was left for dead, legally dying for two minutes before being revived. After recovering, Kirby joined the FBI in Atlanta where she would take a keen interest in Ghostface Killings. When Ghostface came to New York in 2023, so did Kirby. She joined forces with the NYPD and the Carpenter sisters to find the new killer.<br><br><center><img src='assets/final-girls/kirby-reed.jpg' width=250px></center>"

var SamBiography;
SamBiography = "Samantha Carpenter was born to Christina Carpenter and Billy Loomis although for much of her life she believed her real father was Mr. Carpenter, the father of her sister, Tara. When Sam was 13, she went snooping through the family attic and found Christina's old diaries which revealed her real father was Billy Loomis. For the next five years, Sam coped with the news that her real father was a serial killer by getting addicted to drugs. When the pain became too much, she left Woodsboro when she turned 18.<br><br>For the next five years she remained distant from her family, only returning to Woodsboro in 2022 when Tara was attacked by Ghostface. Sam's past was slowly unraveled and she later discovered that her boyfriend, Richie Kirsch, was the killer along with Tara's best friend, Amber Freeman. Sam allowed her inner Loomis to take hold and she stabbed Richie to death and then slit his throat.<br><br>Sam's relationship with her mother completely ended when she was cut off which resulted in Sam following Tara to New York where she was attending college. Sam became the victim of a subreddit which pinned her as the mastermind of the Woodsboro murders. At the same time, a new Ghostface descended on New York with the killer being unmasked as Richie's father, brother and sister, all seeking revenge for Sam killing Richie.<br><br><center><img src='assets/final-girls/samantha-carpenter.jpg' width=250px></center>"

/* Character Modal */
function openCharacterModal(characterName, characterImage) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');
  var killerName = document.getElementById('killer-name');
  var biography = document.getElementById('biography');

  // Set the source for Name and Image
  killerName.innerHTML = characterName;
  //modalImage.src = characterImage;

  // Assign biography
  if (characterName == 'Billy Loomis') {
    biography.innerHTML = 'The first Ghostface killer. Billy Loomis sought revenge against Maureen Prescott for sleeping with his father and causing his family to break up. After teaming up with friend Stu Macher, Billy murdered Maureen, framing Cotton Weary in the process, and then turned his sights on girlfriend Sidney Prescott one year later. Billy is also the father of Samantha Carpenter, the new face of the Stab franchise.<br><br><center><img src="assets/portraits/billy-loomis.jpg" width=250px></center>';
  }
  else if (characterName == 'Stu Macher') {
    biography.innerHTML = 'The second Ghostface killer. Stu Macher teamed up with Billy Loomis, possibly due to unconfirmed homosexual feelings towards Billy, to murder Maureen Prescott and target her daughter Sidney a year later. Stu claimed his motives for becoming Ghost Face was peer pressure, being far too sensitive.<br><br><center><img src="assets/portraits/stu-macher.jpg" width=250px></center>';
  }
  else if (characterName == 'Nancy Loomis') {
    biography.innerHTML = 'The fourth Ghostface killer. Nancy Loomis posed as reporter Debbie Salt to stalk and get close to Sidney Prescott and Gale Weathers at Windsor College. Still pent up with rage towards Maureen Prescott for breaking up her marriage, Nancy sought revenge against Sidney for murdering Billy.<br><br><center><img src="assets/portraits/nancy-loomis.jpg" width=250px></center>';
  }
  else if (characterName == 'Mickey Altieri') {
    biography.innerHTML = 'The third Ghostface killer. Mickey Altieri was fascinated with the Woodsboro Murders and sought to create a real life sequel to the murders. After being financed by Nancy Loomis, Mickey enrolled at Windsor College to get close to Randy Meeks in order to get close to the survivors of the Woodsboro Murders.<br><br><center><img src="assets/portraits/mickey-altieri.jpg" width=250px></center>';
  }
  else if (characterName == 'Roman Bridger') {
    biography.innerHTML = 'The fifth and only sole Ghostface killer. Roman Bridger was contracted to direct <i>Stab 3: Return to Woodsboro</i>, replacing original director Fred Rifkin. Roman used his power in the hierarchy of the production crew to find his long-lost sister, Sidney Prescott. Seeking revenge against her for getting a better life to his.<br><br><center><img src="assets/portraits/roman-bridger.jpg" width=250px></center>';
  }
  else if (characterName == 'Charlie Walker') {
    biography.innerHTML = 'The sixth Ghostface killer. Charlie sought fame and wanted to be the next Randy Meeks. Teaming up with fellow student, Jill Roberts, they instigated a 21st century Ghostface killing spree, attempting to fool people into believing the killer was anyone but them. Charlie was betrayed by Jill and stabbed in the heart.<br><br><center><img src="assets/portraits/charlie-walker.jpg" width=250px></center>';
  }
  else if (characterName == 'Jill Roberts') {
    biography.innerHTML = 'The seventh Ghostface killer. Jill sought fame after becoming jealous of her cousin, Sidney Prescott. On the weekend Sidney was due back to Woodsboro, Jill teamed up with student Charlie Walker to stage a new killing spree, pinning herself as the victim in order to get her 15 minutes of fame.<br><br><center><img src="assets/portraits/jill-roberts.jpg" width=250px></center>';
  }
  else if (characterName == 'Richie Kirsch') {
    biography.innerHTML = 'Richie was a <i>Stab</i> superfan. As a result for his hatred of <i>Stab</i> (2021), Richie found and groomed teenager Amber Freeman into staging a new killing spree to provide new source material for a new <i>Stab</i> film. Richie however opted to not get his hands dirty much, allowing Amber to be the muscle of the operation. The pair chose Samantha Carpenter as their new final girl after discovering her connection to Billy Loomis.<br><br><center><img src="assets/portraits/richie-kirsch.jpg" width=250px></center>';
  }
  else if (characterName == 'Amber Freeman') {
    biography.innerHTML = "Amber became a <i>Stab</i> superfan after her parents purchased Stu Macher's old home at 261 Turner Lane. After meeting Richie Kirsch on the <i>Stab</i> subreddit, the two planned a new killing spree to provide source material for a new <i>Stab</i> movie after their hatred for the latest <i>Stab</i> increased.<br><br><center><img src='assets/portraits/amber-freeman.jpg' width=250px></center>";
  }
  else if (characterName == 'Wayne Bailey') {
    biography.innerHTML = "Following the murder of his son, Richie, Wayne sought revenge against Samantha and Tara Carpenter. Along with his youngest children, Wayne moved to New York City where the Carpenter sisters were living and staged another round of Ghostface murders, this time wearing the masks of all of the old Ghostface killers. The true name of the family is not known. It is likely that both Kirsch and Bailey were false identities.<br><br><center><img src='assets/portraits/wayne-bailey.jpg' width=250px></center>";
  }
  else if (characterName == 'Quinn Bailey') {
    biography.innerHTML = "Following the murder of her brother, Richie, Quinn sought revenge against Samantha and Tara Carpenter. Along with her father, Wayne, and brother, Ethan, Quinn moved to New York City where the Carpenter sisters were living and staged another round of Ghostface murders, this time wearing the masks of all of the old Ghostface killers. Quinn discovered an anonymous ad to become roommates with the Carpenter sisters and successfully moved in with them in order to get close to the Core Four. The true name of the family is not known. It is likely that both Kirsch and Bailey were false identities.<br><br><center><img src='assets/portraits/quinn-bailey.jpg' width=250px></center>";
  }
  else if (characterName == 'Ethan Landry') {
    biography.innerHTML = "Following the murder of his brother, Richie, Ethan sought revenge against Samantha and Tara Carpenter. Along with his father, Wayne, and sister, Quinn, Ethan moved to New York City where the Carpenter sisters were living and staged another round of Ghostface murders, this time wearing the masks of all of the old Ghostface killers. Ethan duped the roommate lottery in order to become roommates with Chad Meeks-Martin so he could get close to the Core Four. The true name of the family is not known. It is likely that both Kirsch and Bailey were false identities.<br><br><center><img src='assets/portraits/ethan-landry.jpg' width=250px'></center>";
  }
  else if (characterName == 'Sidney Prescott') {
    biography.innerHTML = SidneyBiography;
  }
  else if (characterName == 'Gale Weathers') {
    biography.innerHTML = GaleBiography;
  }
  else if (characterName == 'Kirby Reed') {
    biography.innerHTML = KirbyBiography;
  }
  else if (characterName == "Samantha Carpenter") {
    biography.innerHTML = SamBiography;
  }
  else if (characterName == 'Tara Carpenter') {
    biography.innerHTML = "<center><img src='assets/final-girls/tara-carpenter.jpg' width=250px></center>";
  }

  modal.style.display = 'block';
}