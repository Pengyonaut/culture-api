const expess = require("express");
const router = expess.Router();


const dates = [

    {
        "date": "1900-01-01",
        "title": "Start of the 20th century",
        "description": "The year 1900 marks the beginning of the 20th century, a century filled with significant historical events.",
        "id": 0
    },
    {
        "date": "1901-01-22",
        "title": "Queen Victoria's death",
        "description": "Queen Victoria, who reigned over the British Empire for 63 years, passed away on this date.",
        "id": 1
    },
    {
        "date": "1903-12-17",
        "title": "Wright brothers' first powered flight",
        "description": "Orville and Wilbur Wright successfully flew the first powered, controlled, sustained flight in Kitty Hawk, North Carolina.",
        "id": 2
    },
    {
        "date": "1904-02-08",
        "title": "The Russo-Japanese War begins",
        "description": "The Russo-Japanese War started as both nations sought to expand their territorial influence in Asia.",
        "id": 3
    },
    {
        "date": "1905-06-30",
        "title": "Albert Einstein's theory of relativity",
        "description": "Albert Einstein published his special theory of relativity, introducing revolutionary ideas about time, space, and energy.",
        "id": 4
    },
    {
        "date": "1907-06-15",
        "title": "Pablo Picasso paints 'Les Demoiselles d'Avignon'",
        "description": "Picasso's painting 'Les Demoiselles d'Avignon' is considered a pioneering work of modern art, marking the advent of cubism.",
        "id": 5
    },
    {
        "date": "1908-10-01",
        "title": "Ford's Model T car introduced",
        "description": "Henry Ford's Model T, the first affordable automobile, was introduced and revolutionized the automotive industry.",
        "id": 6
    },
    {
        "date": "1912-04-15",
        "title": "The Titanic sinks",
        "description": "The RMS Titanic, the 'unsinkable' luxury ocean liner, struck an iceberg and sank during its maiden voyage.",
        "id": 7
    },
    {
        "date": "1914-07-28",
        "title": "World War I begins",
        "description": "The assassination of Archduke Franz Ferdinand of Austria-Hungary led to the outbreak of World War I.",
        "id": 8
    },
    {
        "date": "1915-11-25",
        "title": "Albert Einstein's theory of general relativity",
        "description": "Einstein presented his general theory of relativity, expanding on his earlier work and providing a new understanding of gravity.",
        "id": 9
    },
    {
        "date": "1916-07-01",
        "title": "Battle of the Somme",
        "description": "One of the bloodiest battles of World War I, the Battle of the Somme, began in France with heavy casualties on both sides.",
        "id": 10
    },
    {
        "date": "1917-10-25",
        "title": "Russian Revolution",
        "description": "The Bolsheviks, led by Vladimir Lenin, seized power in Petrograd, leading to the Russian Revolution and the eventual establishment of the Soviet Union.",
        "id": 11
    },
    {
        "date": "1918-11-11",
        "title": "End of World War I",
        "description": "World War I officially ended with the signing of the Armistice of Compiègne, leading to the Treaty of Versailles.",
        "id": 12
    },
    {
        "date": "1919-06-28",
        "title": "Treaty of Versailles signed",
        "description": "The Treaty of Versailles was signed, officially ending World War I and imposing terms on Germany.",
        "id": 13
    },
    {
        "date": "1920-08-18",
        "title": "Women's suffrage in the United States",
        "description": "The 19th Amendment to the U.S. Constitution was ratified, granting women the right to vote.",
        "id": 14
    },
    {
        "date": "1922-02-28",
        "title": "Egypt gains independence from Britain",
        "description": "Egypt was granted partial independence from British rule, although British influence continued in the country.",
        "id": 15
    },
    {
        "date": "1923-11-08",
        "title": "Adolf Hitler's failed Beer Hall Putsch",
        "description": "Hitler's attempt to overthrow the Weimar government in Munich failed, leading to his arrest and imprisonment.",
        "id": 16
    },
    {
        "date": "1924-01-25",
        "title": "First Winter Olympics held in Chamonix, France",
        "description": "The first Winter Olympics took place, featuring various winter sports competitions.",
        "id": 17
    },
    {
        "date": "1925-04-10",
        "title": "F. Scott Fitzgerald publishes 'The Great Gatsby'",
        "description": "F. Scott Fitzgerald's iconic novel 'The Great Gatsby' was first published, becoming a classic of American literature.",
        "id": 18
    },
    {
        "date": "1926-05-21",
        "title": "Airship Norge's polar expedition",
        "description": "The airship Norge, led by Roald Amundsen, made the first verified flight over the North Pole.",
        "id": 19
    },
    {
        "date": "1927-05-20",
        "title": "Charles Lindbergh's solo transatlantic flight",
        "description": "Charles Lindbergh completed the first solo non-stop transatlantic flight from New York to Paris in the 'Spirit of St. Louis.'",
        "id": 20
    },
    {
        "date": "1928-09-15",
        "title": "Alexander Fleming discovers penicillin",
        "description": "Alexander Fleming discovered the antibiotic properties of penicillin, a breakthrough in the history of medicine.",
        "id": 21
    },
    {
        "date": "1929-10-29",
        "title": "Stock market crash leading to the Great Depression",
        "description": "The Wall Street Crash of 1929 marked the beginning of the Great Depression, a severe worldwide economic downturn.",
        "id": 22
    },
    {
        "date": "1930-03-12",
        "title": "Mahatma Gandhi's Salt March in India",
        "description": "Mahatma Gandhi led the Salt March to protest British salt taxes, becoming a symbol of civil disobedience.",
        "id": 23
    },
    {
        "date": "1931-05-01",
        "title": "The Empire State Building completed",
        "description": "The iconic Empire State Building in New York City was officially completed, becoming the world's tallest building.",
        "id": 24
    },
    {
        "date": "1932-11-08",
        "title": "Franklin D. Roosevelt elected U.S. president",
        "description": "Franklin D. Roosevelt was elected as the 32nd President of the United States during the Great Depression.",
        "id": 25
    },
    {
        "date": "1933-12-05",
        "title": "Prohibition in the United States ends",
        "description": "The 21st Amendment was ratified, repealing the 18th Amendment and ending the Prohibition era in the U.S.",
        "id": 26
    },
    {
        "date": "1934-08-14",
        "title": "The Great Depression continues",
        "description": "The Great Depression persisted with high unemployment and economic hardships worldwide.",
        "id": 27
    },
    {
        "date": "1935-08-19",
        "title": "Social Security Act passed in the U.S.",
        "description": "The Social Security Act was signed into law, establishing a social insurance program in the United States.",
        "id": 28
    },
    {
        "date": "1936-08-01",
        "title": "Berlin Olympics and Jesse Owens' victories",
        "description": "The Berlin Olympics took place, and Jesse Owens, an African American athlete, won four gold medals, defying Nazi ideology.",
        "id": 29
    },
    {
        "date": "1937-05-06",
        "title": "The Hindenburg disaster",
        "description": "The German airship LZ 129 Hindenburg caught fire and was destroyed while attempting to land in Lakehurst, New Jersey.",
        "id": 30
    },
    {
        "date": "1938-09-29",
        "title": "Munich Agreement and the lead-up to World War II",
        "description": "The Munich Agreement allowed Nazi Germany to annex the Sudetenland, escalating tensions that led to World War II.",
        "id": 31
    },
    {
        "date": "1939-09-01",
        "title": "World War II begins with the invasion of Poland",
        "description": "Germany invaded Poland, leading to the formal beginning of World War II.",
        "id": 32
    },
    {
        "date": "1940-05-10",
        "title": "Winston Churchill becomes British Prime Minister",
        "description": "Winston Churchill became Prime Minister of the United Kingdom during World War II.",
        "id": 33
    },
    {
        "date": "1941-12-07",
        "title": "Attack on Pearl Harbor",
        "description": "Japan's surprise attack on Pearl Harbor, Hawaii, led to the United States' entry into World War II.",
        "id": 34
    },
    {
        "date": "1942-09-02",
        "title": "Battle of Stalingrad",
        "description": "The Battle of Stalingrad began, one of the bloodiest battles in history, leading to a Soviet victory.",
        "id": 35
    },
    {
        "date": "1943-09-03",
        "title": "Allied invasion of Italy",
        "description": "Allied forces landed in Italy, leading to the Italian campaign during World War II.",
        "id": 36
    },
    {
        "date": "1944-06-06",
        "title": "D-Day and the Normandy landings",
        "description": "Allied forces launched Operation Overlord, landing in Normandy, France, a pivotal moment in World War II.",
        "id": 37
    },
    {
        "date": "1945-08-06",
        "title": "Atomic bombs dropped on Hiroshima and Nagasaki",
        "description": "The United States dropped atomic bombs on Hiroshima and Nagasaki, leading to Japan's surrender and the end of World War II.",
        "id": 38
    },
    {
        "date": "1946-10-24",
        "title": "United Nations founded",
        "description": "The United Nations was established to promote international cooperation and prevent future conflicts.",
        "id": 39
    },
    {
        "date": "1947-08-15",
        "title": "India gains independence from Britain",
        "description": "India achieved independence from British colonial rule, marking a significant moment in its history.",
        "id": 40
    },
    {
        "date": "1948-05-14",
        "title": "State of Israel established",
        "description": "The State of Israel was established, following the United Nations' recognition of the Israeli Declaration of Independence.",
        "id": 41
    },
    {
        "date": "1949-04-04",
        "title": "NATO founded",
        "description": "The North Atlantic Treaty Organization (NATO) was formed to provide collective defense against aggression.",
        "id": 42
    },
    {
        "date": "1950-06-25",
        "title": "Korean War begins",
        "description": "The Korean War commenced with the North Korean invasion of South Korea, leading to a conflict that lasted several years.",
        "id": 43
    },
    {
        "date": "1951-06-19",
        "title": "The Rosenbergs executed for espionage",
        "description": "Julius and Ethel Rosenberg, American citizens, were executed for their involvement in passing atomic secrets to the Soviet Union.",
        "id": 44
    },
    {
        "date": "1952-02-06",
        "title": "Queen Elizabeth II's accession to the throne",
        "description": "Queen Elizabeth II became the queen of the United Kingdom and other Commonwealth realms following the death of her father, King George VI.",
        "id": 45
    },
    {
        "date": "1953-04-25",
        "title": "Discovery of DNA structure by Watson and Crick",
        "description": "James Watson and Francis Crick published their groundbreaking paper on the structure of DNA, revealing the double helix model.",
        "id": 46
    },
    {
        "date": "1954-05-17",
        "title": "Brown v. Board of Education decision in the U.S.",
        "description": "The U.S. Supreme Court's decision in Brown v. Board of Education declared racial segregation in public schools unconstitutional.",
        "id": 47
    },
    {
        "date": "1955-12-01",
        "title": "Rosa Parks and the Montgomery Bus Boycott",
        "description": "Rosa Parks, an African American woman, refused to give up her bus seat, leading to the Montgomery Bus Boycott and civil rights movement.",
        "id": 48
    },
    {
        "date": "1956-10-29",
        "title": "Suez Crisis",
        "description": "The Suez Crisis began when Egypt nationalized the Suez Canal, leading to a crisis involving Britain, France, and Israel.",
        "id": 49
    },
    {
        "date": "1957-10-04",
        "title": "Launch of Sputnik, the first artificial satellite",
        "description": "The Soviet Union launched Sputnik 1, the world's first artificial satellite, initiating the space race with the United States.",
        "id": 50
    },
    {
        "date": "1958-01-31",
        "title": "Explorer 1 launched",
        "description": "The United States launched Explorer 1, the first successful American satellite, marking the beginning of the U.S. space program.",
        "id": 51
    },
    {
        "date": "1959-01-01",
        "title": "Cuban Revolution",
        "description": "Fidel Castro's revolutionary forces overthrew the Cuban government, leading to the establishment of a socialist state in Cuba.",
        "id": 52
    },
    {
        "date": "1960-12-11",
        "title": "Birth control pill approved",
        "description": "The U.S. Food and Drug Administration (FDA) approved the birth control pill, a significant development in reproductive health.",
        "id": 53
    },
    {
        "date": "1961-04-12",
        "title": "Yuri Gagarin's spaceflight",
        "description": "Yuri Gagarin, a Soviet cosmonaut, became the first human to travel into space and orbit the Earth.",
        "id": 54
    },
    {
        "date": "1962-10-22",
        "title": "Cuban Missile Crisis",
        "description": "The Cuban Missile Crisis brought the United States and the Soviet Union to the brink of nuclear war over the presence of nuclear missiles in Cuba.",
        "id": 55
    },
    {
        "date": "1963-08-28",
        "title": "March on Washington for Jobs and Freedom",
        "description": "The March on Washington, led by Martin Luther King Jr., culminated in his famous 'I Have a Dream' speech, advocating civil rights and equality.",
        "id": 56
    },
    {
        "date": "1964-02-09",
        "title": "The Beatles on The Ed Sullivan Show",
        "description": "The Beatles made their first appearance on The Ed Sullivan Show, launching 'Beatlemania' in the United States.",
        "id": 57
    },
    {
        "date": "1965-03-07",
        "title": "Bloody Sunday in Selma",
        "description": "Civil rights activists were brutally attacked by police during a march from Selma to Montgomery, Alabama, leading to the Voting Rights Act of 1965.",
        "id": 58
    },
    {
        "date": "1966-07-30",
        "title": "England wins the FIFA World Cup",
        "description": "The England national football team won the FIFA World Cup, hosted in England, for the first and only time to date.",
        "id": 59
    },
    {
        "date": "1967-06-05",
        "title": "Six-Day War",
        "description": "Israel defeated several Arab nations in the Six-Day War, resulting in significant territorial changes in the Middle East.",
        "id": 60
    },
    {
        "date": "1969-07-20",
        "title": "Apollo 11 moon landing",
        "description": "Apollo 11, with astronauts Neil Armstrong and Buzz Aldrin, landed on the moon, with Armstrong becoming the first human to walk on the lunar surface.",
        "id": 61
    },
    {
        "date": "1970-04-22",
        "title": "First Earth Day",
        "description": "The first Earth Day was celebrated, raising awareness about environmental issues and promoting environmental protection.",
        "id": 62
    },
    {
        "date": "1971-12-11",
        "title": "Bangladesh Liberation War",
        "description": "The Bangladesh Liberation War began, leading to the independence of Bangladesh from Pakistan.",
        "id": 63
    },
    {
        "date": "1972-06-17",
        "title": "Watergate break-in",
        "description": "The Watergate break-in at the Democratic National Committee headquarters eventually led to the Watergate scandal and President Nixon's resignation.",
        "id": 64
    },
    {
        "date": "1973-01-22",
        "title": "Roe v. Wade decision",
        "description": "The U.S. Supreme Court's Roe v. Wade decision legalized abortion, setting a significant legal precedent.",
        "id": 65
    },
    {
        "date": "1974-08-08",
        "title": "Resignation of President Nixon",
        "description": "Richard Nixon became the first U.S. President to resign from office, due to the Watergate scandal.",
        "id": 66
    },
    {
        "date": "1975-04-30",
        "title": "End of the Vietnam War",
        "description": "The fall of Saigon marked the end of the Vietnam War, leading to the reunification of North and South Vietnam.",
        "id": 67
    },
    {
        "date": "1976-07-04",
        "title": "U.S. Bicentennial",
        "description": "The United States celebrated its bicentennial with events and festivities across the country, marking 200 years since the Declaration of Independence.",
        "id": 68
    },
    {
        "date": "1977-05-25",
        "title": "Star Wars released",
        "description": "The original Star Wars film was released, becoming a massive pop culture phenomenon.",
        "id": 69
    },
    {
        "date": "1978-11-18",
        "title": "Jonestown Massacre",
        "description": "The Jonestown Massacre occurred in Guyana, where more than 900 followers of Jim Jones died in a mass murder-suicide.",
        "id": 70
    },
    {
        "date": "1979-11-04",
        "title": "Iran Hostage Crisis",
        "description": "Iranian militants seized the U.S. Embassy in Tehran, leading to the hostage crisis that lasted for 444 days.",
        "id": 71
    },
    {
        "date": "1980-07-19",
        "title": "Summer Olympics boycott",
        "description": "The U.S. and several other countries boycotted the Summer Olympics in Moscow to protest the Soviet invasion of Afghanistan.",
        "id": 72
    },
    {
        "date": "1981-01-20",
        "title": "Inauguration of President Ronald Reagan",
        "description": "Ronald Reagan was inaugurated as the 40th President of the United States.",
        "id": 73
    },
    {
        "date": "1982-04-02",
        "title": "Falklands War",
        "description": "The Falklands War began as the United Kingdom and Argentina clashed over control of the Falkland Islands.",
        "id": 74
    },
    {
        "date": "1983-09-01",
        "title": "Korean Air Flight 007 incident",
        "description": "Korean Air Flight 007 was shot down by the Soviet Union after straying into Soviet airspace, leading to international tensions.",
        "id": 75
    },
    {
        "date": "1984-06-05",
        "title": "Operation Blue Star",
        "description": "The Indian Army conducted Operation Blue Star, an operation to remove Sikh militants from the Golden Temple in Amritsar.",
        "id": 76
    },
    {
        "date": "1985-03-11",
        "title": "Mikhail Gorbachev becomes Soviet leader",
        "description": "Mikhail Gorbachev became the General Secretary of the Communist Party of the Soviet Union, introducing significant reforms.",
        "id": 77
    },
    {
        "date": "1986-01-28",
        "title": "Challenger disaster",
        "description": "Space Shuttle Challenger disintegrated shortly after liftoff, resulting in the deaths of all seven astronauts on board.",
        "id": 78
    },
    {
        "date": "1989-11-09",
        "title": "Fall of the Berlin Wall",
        "description": "The Berlin Wall, which separated East and West Berlin, fell, symbolizing the end of the Cold War.",
        "id": 79
    },
    {
        "date": "1990-08-02",
        "title": "Iraq invades Kuwait",
        "description": "Iraq, led by Saddam Hussein, invaded Kuwait, leading to the Gulf War.",
        "id": 80
    },
    {
        "date": "1991-08-19",
        "title": "Soviet coup attempt",
        "description": "Hardline members of the Soviet government attempted a coup against Mikhail Gorbachev, which ultimately failed.",
        "id": 81
    },
    {
        "date": "1992-04-29",
        "title": "Los Angeles riots",
        "description": "The Los Angeles riots erupted after the acquittal of police officers involved in the beating of Rodney King.",
        "id": 82
    },
    {
        "date": "1993-09-13",
        "title": "Oslo Accords",
        "description": "The Oslo Accords were signed, outlining a framework for peace between Israel and Palestine.",
        "id": 83
    },
    {
        "date": "1994-04-06",
        "title": "Rwandan Genocide",
        "description": "The Rwandan Genocide began, resulting in the mass killing of an estimated 800,000 people.",
        "id": 84
    },
    {
        "date": "1995-11-21",
        "title": "Dayton Agreement",
        "description": "The Dayton Agreement was reached, ending the Bosnian War and establishing peace in Bosnia and Herzegovina.",
        "id": 85
    },
    {
        "date": "1996-07-27",
        "title": "Centennial Olympic Park bombing",
        "description": "A bombing at Centennial Olympic Park in Atlanta during the 1996 Summer Olympics killed two people and injured many.",
        "id": 86
    },
    {
        "date": "1997-07-01",
        "title": "Handover of Hong Kong",
        "description": "The United Kingdom handed over sovereignty of Hong Kong to China, ending British colonial rule.",
        "id": 87
    },
    {
        "date": "1998-09-04",
        "title": "Google founded",
        "description": "Larry Page and Sergey Brin founded Google, a company that would become one of the world's most influential tech giants.",
        "id": 88
    },
    {
        "date": "1999-06-10",
        "title": "NATO intervention in Kosovo",
        "description": "NATO began a military intervention in Kosovo to end the conflict between Serb forces and ethnic Albanians.",
        "id": 89
    },
    {
        "date": "2000-11-07",
        "title": "U.S. presidential election controversy",
        "description": "The U.S. presidential election between George W. Bush and Al Gore was marred by controversy over the Florida vote recount.",
        "id": 90
    },
    {
        "date": "2001-09-11",
        "title": "September 11 attacks",
        "description": "Terrorists hijacked and crashed commercial airliners into the World Trade Center in New York City and the Pentagon in Arlington, Virginia, killing nearly 3,000 people.",
        "id": 91
    },
    {
        "date": "2003-03-20",
        "title": "Invasion of Iraq",
        "description": "A coalition of U.S. and allied forces launched an invasion of Iraq, leading to the overthrow of Saddam Hussein's regime.",
        "id": 92
    },
    {
        "date": "2004-12-26",
        "title": "Indian Ocean tsunami",
        "description": "A massive undersea earthquake triggered a tsunami that affected multiple countries around the Indian Ocean, resulting in a significant loss of life.",
        "id": 93
    },
    {
        "date": "2007-06-29",
        "title": "Release of the first iPhone",
        "description": "Apple released the first iPhone, revolutionizing the smartphone industry and consumer technology.",
        "id": 94
    },
    {
        "date": "2008-09-15",
        "title": "Lehman Brothers bankruptcy",
        "description": "The bankruptcy of Lehman Brothers marked the start of a global financial crisis and economic downturn.",
        "id": 95
    },
    {
        "date": "2010-04-20",
        "title": "Deepwater Horizon oil spill",
        "description": "The Deepwater Horizon offshore drilling rig exploded and caused a massive oil spill in the Gulf of Mexico, one of the largest environmental disasters in U.S. history.",
        "id": 96
    },
    {
        "date": "2011-12-17",
        "title": "End of the Iraq War",
        "description": "The United States officially withdrew its troops from Iraq, marking the end of the Iraq War.",
        "id": 97
    },
    {
        "date": "2011-12-17",
        "title": "Arab Spring uprisings",
        "description": "The Arab Spring protests and uprisings began, leading to significant political changes in several Middle Eastern and North African countries.",
        "id": 98
    },
    {
        "date": "2013-03-13",
        "title": "Election of Pope Francis",
        "description": "Jorge Mario Bergoglio was elected as Pope Francis, becoming the first pope from the Americas and the Southern Hemisphere.",
        "id": 99
    },
    {
        "date": "2014-03-08",
        "title": "Flight MH370 disappearance",
        "description": "Malaysia Airlines Flight MH370 disappeared en route from Kuala Lumpur to Beijing, sparking a massive and ongoing search effort.",
        "id": 100
    },
    {
        "date": "2015-11-13",
        "title": "Paris terrorist attacks",
        "description": "Multiple coordinated terrorist attacks took place in Paris, France, resulting in a large number of casualties.",
        "id": 101
    },
    {
        "date": "2016-06-23",
        "title": "Brexit referendum",
        "description": "The United Kingdom held a referendum in which voters chose to leave the European Union, leading to the process known as 'Brexit.'",
        "id": 102
    },
    {
        "date": "2020-01-03",
        "title": "Killing of Qasem Soleimani",
        "description": "Qasem Soleimani, an Iranian military commander, was killed in a U.S. drone strike in Iraq, escalating tensions between the U.S. and Iran.",
        "id": 103
    },
    {
        "date": "2020-12-31",
        "title": "COVID-19 pandemic begins",
        "description": "The COVID-19 pandemic, caused by the novel coronavirus SARS-CoV-2, was first reported in Wuhan, China, and quickly spread globally, leading to widespread illness and significant societal disruptions.",
        "id": 104
    },
    {
        "date": "2021-01-06",
        "title": "Capitol riot",
        "description": "Protesters breached the U.S. Capitol in Washington, D.C., during the certification of the 2020 presidential election results, leading to violence and deaths.",
        "id": 105
    },
    {
        "date": "2021-07-20",
        "title": "Blue Origin's first crewed suborbital flight",
        "description": "Blue Origin's New Shepard spacecraft completed its first crewed suborbital spaceflight, with Jeff Bezos among the passengers.",
        "id": 106
    },
    {
        "date": "2022-02-04",
        "title": "Winter Olympics in Beijing",
        "description": "The 2022 Winter Olympics were held in Beijing, China, with a focus on winter sports and international competition.",
        "id": 107
    }
]


router.get("/dates", (req, res) => {
    res.send(dates);
});




router.get("/dates/:id", (req, res) => {
    const dateId = parseInt(req.params.id);
    const singledate = dates.find((item) => item.id === dateId);
  
    if (!dateId) {
      return res.status(404).json({ message: "Single date data was not found" });
    }
    res.json(singledate);
  });

  module.exports = router;