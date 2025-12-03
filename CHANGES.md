# DTU Sundhedsressourcer App - Ændringer

## Oversigt over opdateringer

### ✅ Sprog: Oversat til Dansk
Alle tekster i applikationen er nu på dansk:
- Forsiden (Home page)
- Detaljesider (Detail pages)
- Navigation og knapper
- Kategorier
- Beskeder og fejlmeddelelser

### ✅ Tilmeldingsknapper
Tilføjet tilmeldingsfunktionalitet for:
1. **Vaccinationsservice** - Direkte tilmeldingsknap til vaccination
2. **Sundhedstjek** - Direkte tilmeldingsknap til sundhedstjek

Disse ressourcer viser nu en fremhævet "📝 Tilmeld dig nu" knap i stedet for den almindelige hjemmeside-knap.

### ✅ SRG - Studenterrådgivningen
Mental sundhedstjenesten er nu korrekt navngivet som:
- **SRG - Studenterrådgivningen**
- ID ændret fra 'student-counseling' til 'srg'
- Forbedret beskrivelse på dansk

### ✅ Kategorier (Dansk)
- Alle (tidligere "All")
- Medicinsk (tidligere "Medical")
- Mental Sundhed (tidligere "Mental Health")
- Akademisk Støtte (tidligere "Academic Support")
- Særlig Støtte (tidligere "Special Support")
- Fysisk Sundhed (tidligere "Physical Health")
- Socialt (tidligere "Social")

## Sundhedsressourcer i appen

### 1. Vaccinationsservice 💉
- **Kategori**: Medicinsk
- **Lokation**: Sundhedsrum, Ballerup Campus
- **Åbningstider**: Mandag-Fredag: 9:00-15:00
- **✅ HAR TILMELDINGSKNAP**

### 2. Sundhedstjek 🏥
- **Kategori**: Medicinsk
- **Lokation**: DTU Sundhedscenter, Bygning 101
- **Åbningstider**: Mandag-Torsdag: 10:00-16:00, Fredag: 10:00-14:00
- **✅ HAR TILMELDINGSKNAP**

### 3. SRG - Studenterrådgivningen 🗣️
- **Kategori**: Mental Sundhed
- **Lokation**: Bygning 101, Stueetage
- **Kontakt**: studraad@dtu.dk | +45 45 25 20 00
- **Åbningstider**: Mandag-Fredag: 9:00-16:00 (tidsbestilling påkrævet)

### 4. Studievejledning 📚
- **Kategori**: Akademisk Støtte
- **Lokation**: Bygning 101A
- **Åbningstider**: Mandag-Fredag: 10:00-15:00 (drop-in: 12:00-14:00)

### 5. SPS - Særlig Studiestøtte ♿
- **Kategori**: Særlig Støtte
- **Lokation**: Bygning 101A, Rum 026
- **Kontakt**: sps@dtu.dk | +45 45 25 73 00
- **Åbningstider**: Mandag-Torsdag: 10:00-15:00, Fredag: 10:00-14:00

### 6. DTU Fitnesscenter 💪
- **Kategori**: Fysisk Sundhed
- **Lokation**: Bygning 220, Sportscenter
- **Åbningstider**: Mandag-Fredag: 6:00-22:00, Weekend: 8:00-20:00

### 7. DTU Klubber & Aktiviteter 🎯
- **Kategori**: Socialt
- **Lokation**: Forskellige lokationer på campus

### 8. Mental Sundhed Ressourcer 🧠
- **Kategori**: Mental Sundhed
- **Krisehotline**: 70 201 201 (døgnet rundt)
- **Tilgængelighed**: Støtte tilgængelig døgnet rundt

## Tekniske detaljer

### Nye felter i data struktur:
```javascript
{
  hasRegistration: true,  // Angiver om ressourcen har tilmelding
  registrationLink: 'url' // Link til tilmeldingsside
}
```

### Opdaterede komponenter:
- `src/data/healthResources.js` - Alle data oversat til dansk
- `src/pages/Home.jsx` - UI oversat til dansk
- `src/pages/ResourceDetail.jsx` - UI oversat + tilmeldingsknap logik

## Verifikation
✅ Alle tekster er på dansk
✅ Tilmeldingsknapper virker for vaccination og sundhedstjek
✅ SRG er korrekt navngivet
✅ Kategorier filtrering virker
✅ Ingen konsolefejl
✅ Hot module reload fungerer
✅ Mobil-responsive design bevaret

## Næste skridt (valgfrit)
- Opdater tilmeldingslinks til faktiske DTU registreringssider
- Tilføj billeder eller ikoner for hver ressource
- Implementer søgefunktion
- Tilføj dansk/engelsk sprog-skift knap
