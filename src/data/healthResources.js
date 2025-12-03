export const healthResources = [
  {
    id: 'vaccination',
    title: 'Vaccinationsservice',
    category: 'Medicinsk',
    icon: '💉',
    shortDescription: 'Få dine vaccinationer på DTU',
    description: 'DTU tilbyder vaccinationsservice til studerende og medarbejdere. Vaccinationsservicen er flyttet til sundhedsrummet i Ballerup.',
    location: 'Sundhedsrum, Ballerup Campus',
    contact: 'Kontakt: health@dtu.dk',
    hours: 'Mandag-Fredag: 9:00-15:00',
    link: 'https://www.dtu.dk',
    registrationLink: 'https://www.dtu.dk/vaccination-tilmelding',
    hasRegistration: true
  },
  {
    id: 'health-checkup',
    title: 'Sundhedstjek',
    category: 'Medicinsk',
    icon: '🏥',
    shortDescription: 'Regelmæssig sundhedsovervågning',
    description: 'DTU tilbyder omfattende sundhedstjek inklusiv blodtryksmåling, BMI-målinger og fitnesstests for at hjælpe dig med at holde dig sund.',
    location: 'DTU Sundhedscenter, Bygning 101',
    contact: 'Book tid: health@dtu.dk eller ring +45 45 25 25 25',
    hours: 'Mandag-Torsdag: 10:00-16:00, Fredag: 10:00-14:00',
    link: 'https://www.dtu.dk',
    registrationLink: 'https://www.dtu.dk/sundhedstjek-tilmelding',
    hasRegistration: true
  },
  {
    id: 'srg',
    title: 'SRG - Studenterrådgivningen',
    category: 'Mental Sundhed',
    icon: '🗣️',
    shortDescription: 'Professionel rådgivning og støtte',
    description: 'Studenterrådgivningen (SRG) tilbyder professionel rådgivning til studerende, der oplever personlige, akademiske eller sociale udfordringer. Vi er her for at lytte og hjælpe dig.',
    location: 'Bygning 101, Stueetage',
    contact: 'Email: studraad@dtu.dk | Telefon: +45 45 25 20 00',
    hours: 'Mandag-Fredag: 9:00-16:00 (tidsbestilling påkrævet)',
    link: 'https://www.dtu.dk/studraadgivning',
    hasRegistration: false
  },
  {
    id: 'study-guidance',
    title: 'Studievejledning',
    category: 'Akademisk Støtte',
    icon: '📚',
    shortDescription: 'Akademisk planlægning og støtte',
    description: 'Studievejledningen tilbyder vejledning om studieplanlægning, fagvalg og akademisk fremgang for at hjælpe dig med at lykkes i dine studier.',
    location: 'Bygning 101A',
    contact: 'Email: studievejledning@dtu.dk',
    hours: 'Mandag-Fredag: 10:00-15:00 (drop-in: 12:00-14:00)',
    link: 'https://www.dtu.dk/studievejledning',
    hasRegistration: false
  },
  {
    id: 'sps',
    title: 'SPS - Særlig Studiestøtte',
    category: 'Særlig Støtte',
    icon: '♿',
    shortDescription: 'Støtte til studerende med særlige behov',
    description: 'Særlig Studiestøtte (SPS) yder hjælp til studerende med handicap, kroniske sygdomme eller andre særlige uddannelsesbehov.',
    location: 'Bygning 101A, Rum 026',
    contact: 'Email: sps@dtu.dk | Telefon: +45 45 25 73 00',
    hours: 'Mandag-Torsdag: 10:00-15:00, Fredag: 10:00-14:00',
    link: 'https://www.dtu.dk/sps',
    hasRegistration: false
  },
  {
    id: 'fitness-center',
    title: 'DTU Fitnesscenter',
    category: 'Fysisk Sundhed',
    icon: '💪',
    shortDescription: 'Moderne træningsfaciliteter',
    description: 'DTU Fitnesscenter tilbyder moderne træningsudstyr, holdtræning og personlig træning for at holde dig aktiv og sund.',
    location: 'Bygning 220, Sportscenter',
    contact: 'Email: fitness@dtu.dk | Telefon: +45 45 25 28 70',
    hours: 'Mandag-Fredag: 6:00-22:00, Weekend: 8:00-20:00',
    link: 'https://www.dtu.dk/fitness',
    hasRegistration: false
  },
  {
    id: 'clubs',
    title: 'DTU Klubber & Aktiviteter',
    category: 'Socialt',
    icon: '🎯',
    shortDescription: 'Bliv medlem af sports- og sociale klubber',
    description: 'DTU tilbyder et bredt udvalg af klubber og aktiviteter, herunder sportshold, kulturelle grupper og hobbyklubber for at hjælpe dig med at møde andre studerende.',
    location: 'Forskellige lokationer på campus',
    contact: 'Email: clubs@dtu.dk',
    hours: 'Varierer efter klub',
    link: 'https://www.dtu.dk/clubs',
    hasRegistration: false
  },
  {
    id: 'mental-health',
    title: 'Mental Sundhed Ressourcer',
    category: 'Mental Sundhed',
    icon: '🧠',
    shortDescription: 'Støtte til mental trivsel',
    description: 'DTU tilbyder forskellige mentale sundhedsressourcer, herunder krisetjenester, stresshåndtering workshops og adgang til professionel hjælp.',
    location: 'Flere adgangspunkter',
    contact: 'Krisehotline: 70 201 201 (døgnet rundt) | Email: mental@dtu.dk',
    hours: 'Støtte tilgængelig døgnet rundt',
    link: 'https://www.dtu.dk/mental-sundhed',
    hasRegistration: false
  }
];

export const categories = [
  'Alle',
  'Medicinsk',
  'Mental Sundhed',
  'Akademisk Støtte',
  'Særlig Støtte',
  'Fysisk Sundhed',
  'Socialt'
];
