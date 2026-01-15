/**
 * OFFICIËLE VERKEERSBORDEN DATABASE - RVV 2026
 *
 * Bron: Bijlage 1 & 2 - Reglement verkeersregels en verkeerstekens 1990 (RVV 1990)
 * URL: https://wetten.overheid.nl/BWBR0004825/2026-01-01
 *
 * Focus: DREMPELS & SNELHEIDSBEGRENZING
 * Datum: 2026-01-14
 *
 * Database structuur per bord:
 * - code: Officiële bordcode (bijv. "A1", "J38")
 * - naam: Officiële Nederlandse naam
 * - betekenis: Volledige betekenis en toepassing
 * - categorie: Type bord (snelheid, waarschuwing, verbod, gebod, etc.)
 * - vorm: Visuele vorm (cirkel, driehoek, rechthoek, etc.)
 * - kleur: Primaire kleur(en) van het bord
 * - verplicht: true = verplicht, false = advies
 * - boete: Indicatie of overtreding boete oplevert
 * - relatie: Gerelateerde borden
 * - bron: Wettelijke basis
 */

const verkeersbordenDatabaseOfficieel = [

    // ==========================================
    // A-SERIE: SNELHEIDSBORDEN (VERPLICHT)
    // ==========================================

    {
        code: 'A1-30',
        naam: 'Maximumsnelheid 30 km/u',
        betekenis: 'Verplichte maximumsnelheid van 30 kilometer per uur. Vaak gebruikt in woonwijken, schoolzones en bij speelplaatsen. Meestal gecombineerd met verkeersdrempels.',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '30',
        verplicht: true,
        boete: true,
        relatie: ['J38', 'J21', 'E9', 'A2-30'],
        combinatie: 'Vaak met J38 (drempel) en J21 (kinderen)',
        toepassing: 'Schoolzones, woonwijken, speelplaatsen',
        bron: 'RVV 1990, Artikel 20-21, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '30', 'zone', 'school', 'wijk']
    },

    {
        code: 'A1-50',
        naam: 'Maximumsnelheid 50 km/u',
        betekenis: 'Verplichte maximumsnelheid van 50 kilometer per uur. Dit is de standaardsnelheid binnen de bebouwde kom in Nederland, maar wordt soms expliciet aangegeven.',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '50',
        verplicht: true,
        boete: true,
        relatie: ['L1', 'A2-50'],
        toepassing: 'Bebouwde kom, verduidelijking standaardlimiet',
        bron: 'RVV 1990, Artikel 20, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '50', 'bebouwde kom']
    },

    {
        code: 'A1-60',
        naam: 'Maximumsnelheid 60 km/u',
        betekenis: 'Verplichte maximumsnelheid van 60 kilometer per uur. Wordt gebruikt als tussenlimiet tussen 50 en 80 km/u, vaak op doorgaande wegen in bebouwde kom.',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '60',
        verplicht: true,
        boete: true,
        relatie: ['E11', 'A2-60'],
        toepassing: 'Doorgaande wegen, overgangsgebieden',
        bron: 'RVV 1990, Artikel 20-21, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '60']
    },

    {
        code: 'A1-70',
        naam: 'Maximumsnelheid 70 km/u',
        betekenis: 'Verplichte maximumsnelheid van 70 kilometer per uur. Gebruikt op provinciale wegen en als tussenlimiet.',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '70',
        verplicht: true,
        boete: true,
        relatie: ['A2-70'],
        toepassing: 'Provinciale wegen, overgangsgebieden',
        bron: 'RVV 1990, Artikel 20-21, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '70']
    },

    {
        code: 'A1-80',
        naam: 'Maximumsnelheid 80 km/u',
        betekenis: 'Verplichte maximumsnelheid van 80 kilometer per uur. Dit is de standaardsnelheid buiten de bebouwde kom in Nederland op gewone wegen.',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '80',
        verplicht: true,
        boete: true,
        relatie: ['L2', 'A2-80'],
        toepassing: 'Buiten bebouwde kom, standaardlimiet gewone wegen',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '80', 'buiten bebouwde kom']
    },

    {
        code: 'A1-100',
        naam: 'Maximumsnelheid 100 km/u',
        betekenis: 'Verplichte maximumsnelheid van 100 kilometer per uur. Standaardlimiet op autowegen. Ook vaak overdag op snelwegen vanwege luchtkwaliteit.',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '100',
        verplicht: true,
        boete: true,
        relatie: ['A2-100'],
        toepassing: 'Autowegen, snelwegen overdag (06:00-19:00)',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '100', 'autoweg', 'snelweg']
    },

    {
        code: 'A1-120',
        naam: 'Maximumsnelheid 120 km/u',
        betekenis: 'Verplichte maximumsnelheid van 120 kilometer per uur. Gebruikt op sommige snelwegen als tussenlimiet.',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '120',
        verplicht: true,
        boete: true,
        relatie: ['A2-120'],
        toepassing: 'Autosnelwegen (selectief)',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '120', 'snelweg']
    },

    {
        code: 'A1-130',
        naam: 'Maximumsnelheid 130 km/u',
        betekenis: 'Verplichte maximumsnelheid van 130 kilometer per uur. De maximale toegestane snelheid op Nederlandse snelwegen, meestal alleen \'s avonds en \'s nachts (19:00-06:00).',
        categorie: 'snelheid',
        subcategorie: 'maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood',
        symbool: '130',
        verplicht: true,
        boete: true,
        relatie: ['A2-130', 'A1-100'],
        toepassing: 'Autosnelwegen (meestal \'s avonds/nachts)',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A1',
        tags: ['snelheid', 'maximum', '130', 'snelweg', 'maximaal']
    },

    // ==========================================
    // A2-SERIE: EINDE MAXIMUMSNELHEID
    // ==========================================

    {
        code: 'A2-30',
        naam: 'Einde maximumsnelheid 30 km/u',
        betekenis: 'Einde van de 30 km/u zone. Na dit bord geldt de standaardsnelheid voor het wegtype (meestal 50 km/u binnen bebouwde kom).',
        categorie: 'snelheid',
        subcategorie: 'einde-maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood-streep',
        symbool: '30',
        verplicht: true,
        boete: false,
        relatie: ['A1-30', 'E10'],
        toepassing: 'Einde 30-zone, overgang naar 50 km/u',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A2',
        tags: ['snelheid', 'einde', '30', 'zone']
    },

    {
        code: 'A2-50',
        naam: 'Einde maximumsnelheid 50 km/u',
        betekenis: 'Einde van de 50 km/u limiet. Standaardsnelheid voor wegtype gaat gelden (vaak 80 km/u buiten bebouwde kom).',
        categorie: 'snelheid',
        subcategorie: 'einde-maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood-streep',
        symbool: '50',
        verplicht: true,
        boete: false,
        relatie: ['A1-50', 'L2'],
        toepassing: 'Einde bebouwde kom met expliciet 50 km/u bord',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A2',
        tags: ['snelheid', 'einde', '50']
    },

    {
        code: 'A2-80',
        naam: 'Einde maximumsnelheid 80 km/u',
        betekenis: 'Einde van de 80 km/u limiet. Vaak overgang naar 100 of 130 km/u op autowegen/snelwegen.',
        categorie: 'snelheid',
        subcategorie: 'einde-maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood-streep',
        symbool: '80',
        verplicht: true,
        boete: false,
        relatie: ['A1-80'],
        toepassing: 'Overgang naar hogere snelheid',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A2',
        tags: ['snelheid', 'einde', '80']
    },

    {
        code: 'A2-100',
        naam: 'Einde maximumsnelheid 100 km/u',
        betekenis: 'Einde van de 100 km/u limiet. Vaak \'s avonds op snelwegen wanneer 130 km/u weer geldt.',
        categorie: 'snelheid',
        subcategorie: 'einde-maximum',
        vorm: 'cirkel',
        kleur: 'wit-rood-streep',
        symbool: '100',
        verplicht: true,
        boete: false,
        relatie: ['A1-100', 'A1-130'],
        toepassing: 'Overgang naar 130 km/u (avond/nacht)',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model A2',
        tags: ['snelheid', 'einde', '100', 'snelweg']
    },

    // ==========================================
    // A3: ELEKTRONISCH SIGNALERINGSBORD
    // ==========================================

    {
        code: 'A3',
        naam: 'Maximumsnelheid op elektronisch signaleringsbord',
        betekenis: 'Dynamische snelheidsaanduiding op LED-bord. De snelheid varieert afhankelijk van verkeerssituatie, weer en drukte. Wordt bestuurd vanuit verkeerscentrales.',
        categorie: 'snelheid',
        subcategorie: 'dynamisch',
        vorm: 'elektronisch',
        kleur: 'variabel',
        symbool: 'LED',
        verplicht: true,
        boete: true,
        relatie: ['A1'],
        toepassing: 'Snelwegen met dynamisch verkeersmanagement',
        technologie: 'LED-display, real-time verkeersinformatie',
        bron: 'RVV 1990, Artikel 21a, Bijlage 1 Model A3',
        tags: ['snelheid', 'dynamisch', 'elektronisch', 'LED', 'smart']
    },

    // ==========================================
    // A4/A5: ADVIESSNELHEID (NIET VERPLICHT)
    // ==========================================

    {
        code: 'A4-30',
        naam: 'Adviessnelheid 30 km/u',
        betekenis: 'Aanbevolen maximumsnelheid van 30 km/u. Niet verplicht, maar sterk aangeraden voor veilig rijden. Vaak bij gevaarlijke situaties of wegomstandigheden.',
        categorie: 'snelheid',
        subcategorie: 'advies',
        vorm: 'rechthoek',
        kleur: 'wit-blauw',
        symbool: '30',
        verplicht: false,
        boete: false,
        relatie: ['A5', 'J38'],
        waarschuwing: 'Ongeval bij te hoge snelheid kan leiden tot eigen risico verzekering',
        toepassing: 'Gevaarlijke bochten, drempels, slechte zichtbaarheid',
        bron: 'RVV 1990, Artikel 25, Bijlage 1 Model A4',
        tags: ['snelheid', 'advies', '30', 'aanbevolen']
    },

    {
        code: 'A4-40',
        naam: 'Adviessnelheid 40 km/u',
        betekenis: 'Aanbevolen maximumsnelheid van 40 km/u. Vaak bij scherpe bochten of afgaande afritten.',
        categorie: 'snelheid',
        subcategorie: 'advies',
        vorm: 'rechthoek',
        kleur: 'wit-blauw',
        symbool: '40',
        verplicht: false,
        boete: false,
        relatie: ['A5'],
        toepassing: 'Scherpe bochten, afritten, onoverzichtelijke situaties',
        bron: 'RVV 1990, Artikel 25, Bijlage 1 Model A4',
        tags: ['snelheid', 'advies', '40', 'bocht']
    },

    {
        code: 'A4-50',
        naam: 'Adviessnelheid 50 km/u',
        betekenis: 'Aanbevolen maximumsnelheid van 50 km/u. Gebruikt bij afgaande ramps of bij slechte weersomstandigheden.',
        categorie: 'snelheid',
        subcategorie: 'advies',
        vorm: 'rechthoek',
        kleur: 'wit-blauw',
        symbool: '50',
        verplicht: false,
        boete: false,
        relatie: ['A5'],
        toepassing: 'Afritten snelweg, slecht weer',
        bron: 'RVV 1990, Artikel 25, Bijlage 1 Model A4',
        tags: ['snelheid', 'advies', '50', 'afrit']
    },

    {
        code: 'A4-60',
        naam: 'Adviessnelheid 60 km/u',
        betekenis: 'Aanbevolen maximumsnelheid van 60 km/u. Vaak bij matige bochten of verhoogd gevaar.',
        categorie: 'snelheid',
        subcategorie: 'advies',
        vorm: 'rechthoek',
        kleur: 'wit-blauw',
        symbool: '60',
        verplicht: false,
        boete: false,
        relatie: ['A5'],
        toepassing: 'Bochten, verhoogd gevaar',
        bron: 'RVV 1990, Artikel 25, Bijlage 1 Model A4',
        tags: ['snelheid', 'advies', '60']
    },

    {
        code: 'A5',
        naam: 'Einde adviessnelheid',
        betekenis: 'Einde van de aanbevolen snelheid. Het gevaarlijke weggedeelte is voorbij.',
        categorie: 'snelheid',
        subcategorie: 'einde-advies',
        vorm: 'rechthoek',
        kleur: 'wit-blauw-streep',
        symbool: 'streep',
        verplicht: false,
        boete: false,
        relatie: ['A4'],
        toepassing: 'Einde gevaarlijk weggedeelte',
        bron: 'RVV 1990, Artikel 25, Bijlage 1 Model A5',
        tags: ['snelheid', 'einde', 'advies']
    },

    // ==========================================
    // J-SERIE: WAARSCHUWINGSBORDEN (DREMPELS)
    // ==========================================

    {
        code: 'J38',
        naam: 'Vooraanduiding verkeersdrempel',
        betekenis: 'Waarschuwing voor een naderende verkeersdrempel of verkeersheuvel. Verminder je snelheid om schade aan voertuig te voorkomen en voor comfort. Vaak gecombineerd met onderbord dat afstand aangeeft (50m, 100m).',
        categorie: 'waarschuwing',
        subcategorie: 'drempel',
        vorm: 'driehoek',
        kleur: 'wit-rood',
        symbool: '⚠️',
        icoon: 'drempel',
        verplicht: false,
        boete: false,
        relatie: ['A1-30', 'E9', 'J21'],
        afstand: 'Meestal 50-150 meter voor drempel',
        onderbord: 'Vaak met afstandsaanduiding (OB51)',
        doel: 'Verkeersveiligheid, snelheidsremming',
        toepassing: '30 km/u zones, woonwijken, schoolzones, woonerven',
        typen_drempels: [
            'Plateau-drempel (meest voorkomend)',
            'Ronde drempel (klassiek)',
            'Verkeersheuvel (15-20m lang)',
            'Snelheidsremmende vernauwing'
        ],
        technisch: {
            hoogte: '10-14 cm',
            lengte: '3-25 meter (afhankelijk van type)',
            helling: 'Max 1:10 (30 km/u) tot 1:20 (50 km/u)'
        },
        bron: 'RVV 1990, Bijlage 1 Model J38',
        tags: ['waarschuwing', 'drempel', 'verkeersheuvel', 'hobbel', 'speed bump', '30-zone']
    },

    {
        code: 'J16',
        naam: 'Werk in uitvoering',
        betekenis: 'Waarschuwing voor wegwerkzaamheden. Let op: werknemers op de weg, tijdelijke omleidingen, versmalde rijbaan of aangepaste verkeerssituatie. Verminder snelheid en wees extra alert.',
        categorie: 'waarschuwing',
        subcategorie: 'wegwerkzaamheden',
        vorm: 'driehoek',
        kleur: 'wit-rood',
        symbool: '⚠️',
        icoon: '🚧',
        verplicht: false,
        boete: false,
        relatie: ['A4', 'C16'],
        toepassing: 'Wegwerkzaamheden, onderhoud, aanleg',
        gevaar: 'Werknemers, omleidingen, versmalde rijbaan, wisselende verkeerssituatie',
        bron: 'RVV 1990, Bijlage 1 Model J16',
        tags: ['waarschuwing', 'werk', 'wegwerkzaamheden', 'onderhoud', 'bouw']
    },

    {
        code: 'J17',
        naam: 'Rijbaanversmalling',
        betekenis: 'Waarschuwing dat de rijbaan smaller wordt. Let op: minder ruimte, mogelijk inhalen niet mogelijk, samenvoegen nodig. Verminder snelheid en wees voorbereid.',
        categorie: 'waarschuwing',
        subcategorie: 'wegverloop',
        vorm: 'driehoek',
        kleur: 'wit-rood',
        symbool: '⚠️',
        icoon: '◄►',
        verplicht: false,
        boete: false,
        relatie: ['J18', 'J19'],
        toepassing: 'Versmallende wegen, bruggen, tunnels',
        gevaar: 'Verminderde ruimte, inhaalgevaar, samenvoegen',
        bron: 'RVV 1990, Bijlage 1 Model J17',
        tags: ['waarschuwing', 'versmalling', 'smaller', 'weg']
    },

    {
        code: 'J21',
        naam: 'Spelende kinderen',
        betekenis: 'Waarschuwing voor spelende of overstekende kinderen. Verminder snelheid en wees extra alert. Vaak gecombineerd met 30 km/u limiet en verkeersdrempels.',
        categorie: 'waarschuwing',
        subcategorie: 'kwetsbare-verkeersdeelnemers',
        vorm: 'driehoek',
        kleur: 'wit-rood',
        symbool: '⚠️',
        icoon: '👶',
        verplicht: false,
        boete: false,
        relatie: ['A1-30', 'J38', 'E9'],
        toepassing: 'Schoolzones, speelplaatsen, woonwijken, parken',
        extra_alert: 'Kinderen zijn onvoorspelbaar en kunnen plotseling oversteken',
        bron: 'RVV 1990, Bijlage 1 Model J21',
        tags: ['waarschuwing', 'kinderen', 'school', 'spelen', 'veiligheid']
    },

    {
        code: 'J22',
        naam: 'Vooraanduiding oversteekplaats voetgangers',
        betekenis: 'Waarschuwing voor zebrapad of oversteekplaats. Meestal 50-100 meter voor het zebrapad. Verminder snelheid en wees voorbereid om te stoppen voor overstekende voetgangers.',
        categorie: 'waarschuwing',
        subcategorie: 'kwetsbare-verkeersdeelnemers',
        vorm: 'driehoek',
        kleur: 'wit-rood',
        symbool: '⚠️',
        icoon: '🚶',
        verplicht: false,
        boete: false,
        relatie: ['A4', 'J38'],
        toepassing: 'Voor zebrapaden, drukke oversteekplaatsen',
        regel: 'Voetgangers op zebrapad hebben ALTIJD voorrang',
        bron: 'RVV 1990, Bijlage 1 Model J22',
        tags: ['waarschuwing', 'voetgangers', 'zebrapad', 'oversteekplaats']
    },

    // ==========================================
    // E-SERIE: ZONE-BORDEN
    // ==========================================

    {
        code: 'E1',
        naam: 'Woonerf',
        betekenis: 'Begin van woonerf. Speciale zone waar voetgangers voorrang hebben en de hele weg mogen gebruiken. Auto\'s zijn te gast. Maximale snelheid: stapvoets (ca. 15 km/u). Parkeren alleen op aangewezen plaatsen.',
        categorie: 'zone',
        subcategorie: 'woonerf',
        vorm: 'rechthoek',
        kleur: 'blauw-wit',
        symbool: 'woonerf-pictogram',
        verplicht: true,
        boete: true,
        snelheid: '15 km/u (stapvoets)',
        relatie: ['E2', 'J38'],
        regels: [
            'Stapvoets rijden (ca. 15 km/u)',
            'Voetgangers hebben voorrang',
            'Voetgangers mogen hele weg gebruiken',
            'Parkeren alleen op aangewezen plaatsen',
            'Auto\'s zijn te gast'
        ],
        kenmerken: 'Vaak meerdere drempels, vernauwingen, slingerconstructies',
        bron: 'RVV 1990, Artikel 88, Bijlage 1 Model E1',
        tags: ['zone', 'woonerf', 'woonstraat', 'stapvoets', '15']
    },

    {
        code: 'E2',
        naam: 'Einde woonerf',
        betekenis: 'Einde van het woonerf. Normale verkeersregels gaan weer gelden.',
        categorie: 'zone',
        subcategorie: 'woonerf',
        vorm: 'rechthoek',
        kleur: 'blauw-wit-rood',
        symbool: 'woonerf-doorstreept',
        verplicht: true,
        boete: false,
        relatie: ['E1'],
        bron: 'RVV 1990, Artikel 88, Bijlage 1 Model E2',
        tags: ['zone', 'einde', 'woonerf']
    },

    {
        code: 'E9',
        naam: 'Zone 30',
        betekenis: 'Begin van 30 km/u zone. Binnen deze zone geldt op alle wegen maximaal 30 km/u, tenzij anders aangegeven. Vaak met voorrang rechts. Typisch meerdere verkeersdrempels.',
        categorie: 'zone',
        subcategorie: '30-zone',
        vorm: 'rechthoek',
        kleur: 'wit-rood',
        symbool: 'ZONE 30',
        verplicht: true,
        boete: true,
        snelheid: '30 km/u',
        relatie: ['E10', 'J38', 'A1-30'],
        kenmerken: [
            'Meerdere drempels (elke 50-100m)',
            'Vaak voorrang rechts',
            'Woonwijken, schoolomgevingen',
            'Verhoogde verkeersveiligheid'
        ],
        toepassing: 'Woonwijken, schoolzones, centrumgebieden',
        bron: 'RVV 1990, Bijlage 1 Model E9',
        tags: ['zone', '30', 'woonwijk', 'school', 'veiligheid']
    },

    {
        code: 'E10',
        naam: 'Einde zone 30',
        betekenis: 'Einde van 30 km/u zone. Standaardsnelheid voor wegtype gaat gelden (meestal 50 km/u binnen bebouwde kom).',
        categorie: 'zone',
        subcategorie: '30-zone',
        vorm: 'rechthoek',
        kleur: 'wit-rood-streep',
        symbool: 'ZONE 30 doorstreept',
        verplicht: true,
        boete: false,
        relatie: ['E9'],
        bron: 'RVV 1990, Bijlage 1 Model E10',
        tags: ['zone', 'einde', '30']
    },

    {
        code: 'E11',
        naam: 'Zone 60',
        betekenis: 'Begin van 60 km/u zone. Binnen deze zone geldt op alle wegen maximaal 60 km/u, tenzij anders aangegeven.',
        categorie: 'zone',
        subcategorie: '60-zone',
        vorm: 'rechthoek',
        kleur: 'wit-rood',
        symbool: 'ZONE 60',
        verplicht: true,
        boete: true,
        snelheid: '60 km/u',
        relatie: ['E12', 'A1-60'],
        toepassing: 'Doorgaande wegen in bebouwde kom',
        bron: 'RVV 1990, Bijlage 1 Model E11',
        tags: ['zone', '60']
    },

    {
        code: 'E12',
        naam: 'Einde zone 60',
        betekenis: 'Einde van 60 km/u zone.',
        categorie: 'zone',
        subcategorie: '60-zone',
        vorm: 'rechthoek',
        kleur: 'wit-rood-streep',
        symbool: 'ZONE 60 doorstreept',
        verplicht: true,
        boete: false,
        relatie: ['E11'],
        bron: 'RVV 1990, Bijlage 1 Model E12',
        tags: ['zone', 'einde', '60']
    },

    // ==========================================
    // L-SERIE: PLAATS & BEBOUWING
    // ==========================================

    {
        code: 'L1',
        naam: 'Bebouwde kom (plaatsnaambord)',
        betekenis: 'Begin van bebouwde kom. Vanaf hier geldt binnen de bebouwde kom maximaal 50 km/u (tenzij anders aangegeven). Wit bord met plaatsnaam.',
        categorie: 'aanwijzing',
        subcategorie: 'bebouwing',
        vorm: 'rechthoek',
        kleur: 'wit-zwart',
        symbool: 'plaatsnaam',
        verplicht: true,
        boete: false,
        snelheid: '50 km/u (standaard)',
        relatie: ['L2', 'A1-50'],
        toepassing: 'Bij ingang van stad/dorp/wijk',
        bron: 'RVV 1990, Artikel 20, Bijlage 1 Model L1',
        tags: ['bebouwde kom', 'plaats', '50', 'stad', 'dorp']
    },

    {
        code: 'L2',
        naam: 'Einde bebouwde kom',
        betekenis: 'Einde van bebouwde kom. Vanaf hier geldt buiten de bebouwde kom maximaal 80 km/u op gewone wegen (tenzij anders aangegeven). Wit bord met plaatsnaam doorstreept.',
        categorie: 'aanwijzing',
        subcategorie: 'bebouwing',
        vorm: 'rechthoek',
        kleur: 'wit-zwart-rood',
        symbool: 'plaatsnaam-doorstreept',
        verplicht: true,
        boete: false,
        snelheid: '80 km/u (standaard buiten bebouwde kom)',
        relatie: ['L1', 'A1-80'],
        toepassing: 'Bij uitgang van stad/dorp',
        bron: 'RVV 1990, Artikel 21, Bijlage 1 Model L2',
        tags: ['einde', 'bebouwde kom', '80', 'buiten']
    }
];

// ==========================================
// HELPER FUNCTIES
// ==========================================

/**
 * Zoek borden op code
 */
function zoekOpCode(code) {
    return verkeersbordenDatabaseOfficieel.filter(bord =>
        bord.code.toLowerCase().includes(code.toLowerCase())
    );
}

/**
 * Zoek borden op categorie
 */
function zoekOpCategorie(categorie) {
    return verkeersbordenDatabaseOfficieel.filter(bord =>
        bord.categorie.toLowerCase() === categorie.toLowerCase()
    );
}

/**
 * Zoek borden op betekenis/naam
 */
function zoekOpTekst(zoekterm) {
    const term = zoekterm.toLowerCase();
    return verkeersbordenDatabaseOfficieel.filter(bord =>
        bord.naam.toLowerCase().includes(term) ||
        bord.betekenis.toLowerCase().includes(term) ||
        bord.tags.some(tag => tag.includes(term))
    );
}

/**
 * Haal alle borden gerelateerd aan drempels
 */
function getAlleDrempelBorden() {
    return verkeersbordenDatabaseOfficieel.filter(bord =>
        bord.tags.includes('drempel') ||
        bord.relatie.includes('J38') ||
        bord.subcategorie === 'drempel'
    );
}

/**
 * Haal alle snelheidsborden
 */
function getAlleSnelheidsBorden() {
    return verkeersbordenDatabaseOfficieel.filter(bord =>
        bord.categorie === 'snelheid'
    );
}

/**
 * Statistieken
 */
function getStatistieken() {
    return {
        totaal: verkeersbordenDatabaseOfficieel.length,
        snelheid: getAlleSnelheidsBorden().length,
        drempels: getAlleDrempelBorden().length,
        verplicht: verkeersbordenDatabaseOfficieel.filter(b => b.verplicht).length,
        advies: verkeersbordenDatabaseOfficieel.filter(b => !b.verplicht).length,
        metBoete: verkeersbordenDatabaseOfficieel.filter(b => b.boete).length
    };
}

// Export voor gebruik
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        verkeersbordenDatabaseOfficieel,
        zoekOpCode,
        zoekOpCategorie,
        zoekOpTekst,
        getAlleDrempelBorden,
        getAlleSnelheidsBorden,
        getStatistieken
    };
}
