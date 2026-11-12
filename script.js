// ==========================================
// CYBERSAFE QUIZ – SCRIPT.JS
// 90 frågor: 30 Lätt, 30 Medel, 30 Avancerad
// ==========================================

"use strict";

const REQUIRED_PERCENTAGE = 70;
const STORAGE_KEY = "cybersafeQuizProgress_v6";
const LEVELS = ["easy", "medium", "advanced"];

const LEVEL_INFO = {
    easy: {
        title: "🟢 Lätt",
        description: "Grundläggande begrepp och säkra vardagsvanor."
    },
    medium: {
        title: "🟡 Medel",
        description: "Tillämpa kunskap och bedöma säkerhetsrisker."
    },
    advanced: {
        title: "🔴 Avancerad",
        description: "Analysera scenarier och säkerhetsprinciper."
    }
};

// Kortare format för att göra frågebanken lättare att underhålla.
function Q(question, type, options, correct, explanation) {
    return { question, type, options, correct, explanation };
}

const questions = {
  // ==========================================
  // LÄTT – 30 FRÅGOR
  // ==========================================
 easy: [
    Q("Varför bör du använda olika lösenord på olika webbplatser?",
      "single",
      [
        "För att ett läckt lösenord inte automatiskt ska ge tillgång till dina andra konton",
        "För att webbplatser annars raderar ditt konto",
        "För att olika lösenord gör internetanslutningen snabbare",
        "För att lösenord bara får användas en gång"
      ], [0],
      "Om du återanvänder ett lösenord kan någon testa det på flera tjänster. Unika lösenord begränsar skadan om ett konto drabbas."),

    Q("Vilket lösenord är bäst att använda som exempel på ett starkt lösenord?",
      "single",
      [
        "Azka2008",
        "Sommar2026!",
        "Katt1234",
        "En lång, unik lösenfras som inte går att koppla till dig"
      ], [3],
      "Ett långt och unikt lösenord eller en lösenfras är ofta svårare att gissa. Undvik personuppgifter och vanliga mönster."),

    Q("Vad innebär multifaktorautentisering (MFA)?",
      "single",
      [
        "Att du byter lösenord varje gång du loggar in",
        "Att du behöver verifiera din identitet med minst två olika typer av faktorer",
        "Att två personer måste dela samma konto",
        "Att du använder två olika webbläsare"
      ], [1],
      "MFA kombinerar olika faktortyper, exempelvis något du vet och något du har. Två lösenord räknas inte som två olika faktortyper."),

    Q("Du får ett mejl från en okänd avsändare med en bilaga du inte väntar dig. Vad bör du göra?",
      "single",
      [
        "Öppna den om filnamnet ser professionellt ut",
        "Vidarebefordra den till några vänner för att fråga",
        "Kontrollera avsändaren och rapportera eller radera mejlet om det verkar misstänkt",
        "Ladda ner bilagan och kontrollera den efteråt"
      ], [2],
      "Oväntade bilagor kan innehålla skadlig kod. Kontrollera med avsändaren via en separat, betrodd kanal om du är osäker."),

    Q("Vad är phishing (nätfiske)?",
      "single",
      [
        "En metod för att lura människor att avslöja information eller utföra en handling",
        "Ett program som automatiskt uppdaterar datorn",
        "En teknik som alltid krypterar alla filer",
        "Ett verktyg för att förbättra internethastigheten"
      ], [0],
      "Nätfiske försöker ofta lura mottagaren att lämna ut lösenord, betalningsuppgifter eller annan känslig information."),

    Q("Vad är den säkraste platsen att hämta en app från?",
      "single",
      [
        "En nedladdningslänk i en okänd kommentar",
        "En webbplats som erbjuder appen gratis utan information",
        "En länk som skickas av en främling",
        "En officiell appbutik eller utvecklarens verifierade webbplats"
      ], [3],
      "Officiella källor minskar risken för manipulerade appar, men kontrollera ändå utvecklare, behörigheter och recensioner."),

    Q("Varför är programuppdateringar viktiga för säkerheten?",
      "single",
      [
        "De gör att du aldrig behöver ett lösenord",
        "De kan åtgärda säkerhetsbrister som angripare annars kan utnyttja",
        "De hindrar alla typer av bedrägerier",
        "De gör automatiskt alla filer privata"
      ], [1],
      "Uppdateringar kan täppa till kända säkerhetshål. De ersätter dock inte andra säkerhetsåtgärder."),

    Q("Vad bör du göra om en webbplats ber dig logga in via en oväntad länk i ett sms?",
      "single",
      [
        "Logga in snabbt innan länken slutar fungera",
        "Svara på sms:et med ditt användarnamn",
        "Öppna tjänsten genom dess officiella app eller genom att själv skriva in adressen",
        "Använd samma länk men byt webbläsare"
      ], [2],
      "Gå själv till tjänsten via en betrodd väg. Då minskar risken att hamna på en falsk inloggningssida."),

    Q("Vad gör ett antivirus- eller säkerhetsprogram?",
      "single",
      [
        "Kan hjälpa till att upptäcka och blockera vissa hot",
        "Garanterar att ingen kan lura dig",
        "Gör alla nedladdningar säkra automatiskt",
        "Ersätter behovet av uppdateringar"
      ], [0],
      "Säkerhetsprogram kan upptäcka många hot, men inget program kan garantera fullständigt skydd."),

    Q("Vad är skadlig kod (malware)?",
      "single",
      [
        "En metod för att organisera mappar",
        "En säkerhetskopia av en fil",
        "Ett program som alltid förbättrar datorns prestanda",
        "Programvara som är utformad för att skada, spionera eller få obehörig åtkomst"
      ], [3],
      "Malware är ett samlingsnamn för exempelvis virus, trojaner, spionprogram och ransomware."),

    Q("Du ska använda ett offentligt Wi-Fi. Vilket beteende är klokast?",
      "single",
      [
        "Stänga av enhetens skärmlås",
        "Kontrollera nätverkets namn och undvika känsliga aktiviteter på nätverk du inte litar på",
        "Dela filer med alla enheter i närheten",
        "Stänga av alla säkerhetsuppdateringar"
      ], [1],
      "Falska nätverk kan försöka fånga upp information. Använd betrodda nätverk och säkra anslutningar, särskilt vid känsliga ärenden."),

    Q("Vad innebär en säkerhetskopia (backup)?",
      "single",
      [
        "En kopia som kan användas för att återställa data om originalet försvinner eller skadas",
        "Ett extra lösenord till e-posten",
        "En inställning som blockerar alla virus",
        "En kopia som måste sparas på samma enhet som originalet"
      ], [0],
      "Säkerhetskopior kan hjälpa dig att återställa filer efter exempelvis fel, stöld eller ransomware."),

    Q("Vilken information bör du vara försiktig med att publicera öppet på sociala medier?",
      "single",
      [
        "En allmän rekommendation av en bok",
        "En offentlig nyhet från en myndighet",
        "Din hemadress, lösenord eller detaljer som avslöjar när bostaden är tom",
        "En allmän fråga om ett skolämne"
      ], [2],
      "Känsliga uppgifter och detaljer om dina rutiner kan missbrukas. Tänk på vem som kan se inlägget och sprida det vidare."),

    Q("Vad är en lösenordshanterare till för?",
      "single",
      [
        "Att publicera dina lösenord så att du inte glömmer dem",
        "Att skapa och lagra lösenord på ett skyddat sätt",
        "Att stänga av multifaktorautentisering",
        "Att dela samma lösenord mellan alla appar"
      ], [1],
      "En lösenordshanterare kan hjälpa dig att använda långa, unika lösenord utan att behöva memorera alla."),

    Q("En app vill ha tillgång till din mikrofon trots att funktionen inte verkar behöva den. Vad är bäst?",
      "single",
      [
        "Godkänna allt för att undvika problem",
        "Ge appen alla behörigheter permanent",
        "Stänga av telefonens låskod",
        "Granska varför behörigheten behövs och neka den om den inte är motiverad"
      ], [3],
      "Ge appar bara de behörigheter som behövs. Du kan ofta ändra behörigheter senare i enhetens inställningar."),

    Q("Vad betyder det att låsa skärmen när du lämnar datorn?",
      "single",
      [
        "Att datorn alltid stängs av helt",
        "Att alla filer raderas från minnet",
        "Att andra inte lika enkelt kan använda din öppna session",
        "Att nätverket blir omöjligt att angripa"
      ], [2],
      "Skärmlås minskar risken för att någon i närheten använder ditt konto medan du är borta."),

    Q("Vad är en trojan inom cybersäkerhet?",
      "single",
      [
        "Skadlig programvara som utger sig för att vara något legitimt",
        "Ett verktyg som alltid krypterar dina säkerhetskopior säkert",
        "En metod för att återställa glömda lösenord",
        "Ett system för att verifiera webbplatsers certifikat"
      ], [0],
      "En trojan försöker lura användaren att köra eller installera programmet genom att framstå som legitimt."),

    Q("Varför bör du granska sekretessinställningarna på sociala medier?",
      "single",
      [
        "För att alla inlägg då försvinner efter en dag",
        "För att bara dina följare kan ta skärmbilder",
        "För att tjänsten automatiskt raderar gamla konton",
        "För att kunna styra vem som kan se information om dig"
      ], [3],
      "Sekretessinställningar hjälper dig att begränsa synligheten, men hindrar inte alltid mottagare från att kopiera innehåll."),

    Q("Du får en inloggningskod som du inte själv har begärt. Vad bör du göra?",
      "single",
      [
        "Skicka koden till den som frågar efter den",
        "Dela koden med en vän som kan kontrollera den",
        "Inte dela koden och kontrollera kontot via den officiella tjänsten",
        "Publicera koden för att varna andra"
      ], [2],
      "En oväntad kod kan betyda att någon försöker logga in. Dela aldrig verifieringskoder med någon annan."),

    Q("Vad är en brandväggs vanliga uppgift?",
      "single",
      [
        "Att göra alla lösenord omöjliga att gissa",
        "Att kontrollera och filtrera nätverkstrafik enligt regler",
        "Att skapa säkerhetskopior av alla dokument",
        "Att avgöra om alla mejl är sanna"
      ], [1],
      "En brandvägg kan tillåta eller blockera nätverkstrafik enligt regler, men kan inte ensam stoppa alla hot."),

    Q("Vad bör du göra innan du säljer eller lämnar bort din gamla mobil?",
      "single",
      [
        "Säkerhetskopiera det du behöver, logga ut från konton och återställa enheten enligt tillverkarens instruktioner",
        "Bara radera bilderna från startskärmen",
        "Låta alla konton vara inloggade för nästa ägare",
        "Skicka dina lösenord till köparen"
      ], [0],
      "Förbered enheten genom att spara det du behöver, ta bort kontokopplingar och utföra en fabriksåterställning enligt instruktionerna."),

    Q("Vilket är ett exempel på personuppgifter?",
      "single",
      [
        "En allmän beskrivning av vädret",
        "En lista över offentliga webbplatser",
        "En uppgift som kan kopplas till en identifierad eller identifierbar person, exempelvis telefonnummer",
        "En slumpmässig siffra utan koppling till någon"
      ], [2],
      "Personuppgifter är information som direkt eller indirekt kan kopplas till en person."),

    Q("Vad är en säkerhetsbrist?",
      "single",
      [
        "En fil som har ett långt namn",
        "Ett lösenord som innehåller siffror",
        "En säkerhetskopia som har verifierats",
        "En svaghet i ett system som kan påverka dess säkerhet"
      ], [3],
      "En säkerhetsbrist kan exempelvis göra det möjligt att läsa data, ta över konton eller störa en tjänst."),

    Q("Vilket är det bästa sättet att kontrollera om en oväntad betalningsbegäran från en bekant är äkta?",
      "single",
      [
        "Betala direkt eftersom namnet verkar bekant",
        "Fråga efter personens lösenord",
        "Kontakta personen via en annan, redan känd kontaktväg",
        "Klicka på alla länkar i meddelandet"
      ], [2],
      "Ett konto kan ha kapats eller ett meddelande kan vara förfalskat. Verifiera begäran via en separat kontaktväg."),

    Q("Vilket av följande är en biometrisk autentiseringsmetod?",
      "single",
      [
        "Fingeravtryck",
        "Ett användarnamn",
        "En säkerhetskopia",
        "En PIN-kod som delas med andra"
      ], [0],
      "Biometri bygger på fysiska eller beteendemässiga egenskaper, exempelvis fingeravtryck eller ansiktsigenkänning."),

    Q("Varför bör du inte använda en dator du inte litar på för känsliga inloggningar?",
      "single",
      [
        "Alla andra datorer har långsammare internet",
        "Datorn kan vara felkonfigurerad eller ha program som fångar upp information",
        "Webbplatser fungerar bara på din egen dator",
        "Inloggningar blir automatiskt offentliga efter en timme"
      ], [1],
      "En okänd dator kan ha skadlig programvara eller spara inloggningsuppgifter. Använd en betrodd enhet för känsliga konton."),

    Q("Vad bör du göra om du råkar publicera en uppgift som du inte ville dela?",
      "single",
      [
        "Låta den ligga kvar eftersom ingen kan kopiera den",
        "Skapa fler inlägg med samma information",
        "Byta användarnamn och anta att problemet är löst",
        "Ta bort eller begränsa inlägget och bedöma om fler åtgärder behövs"
      ], [3],
      "Ta bort eller begränsa informationen så snabbt som möjligt. Tänk på att andra kan ha hunnit spara eller kopiera den."),

    Q("Vilket påstående om säkerhetskopior är bäst?",
      "single",
      [
        "En säkerhetskopia är användbar även om den aldrig går att återställa",
        "Det räcker alltid att kopiera filerna till samma mapp",
        "Säkerhetskopior bör skyddas och återställning bör testas",
        "Säkerhetskopior behövs bara för bilder"
      ], [2],
      "En fungerande backup behöver vara tillgänglig när den behövs och skyddad från exempelvis fel, stöld och skadlig kod."),

    Q("Vad är det klokaste första steget om du misstänker att ditt konto har kapats?",
      "single",
      [
        "Ignorera alla säkerhetsvarningar",
        "Använd en betrodd enhet för att säkra kontot, byta lösenord och kontrollera aktiva sessioner",
        "Dela din verifieringskod med supporten via ett privat meddelande",
        "Återanvänd lösenordet på andra konton"
      ], [1],
      "Säkra kontot via tjänstens officiella väg. Byt till ett unikt lösenord, kontrollera sessioner och aktivera MFA om möjligt."),

    Q("Vilka två handlingar bidrar till bättre kontosäkerhet? Välj båda.",
      "multiple",
      [
        "Använda unika lösenord för olika konton",
        "Dela inloggningskoder med personer som säger att de arbetar med support",
        "Aktivera MFA där det finns",
        "Spara lösenord i en offentlig anteckning"
      ], [0, 2],
      "Unika lösenord och MFA gör det svårare för någon att ta över konton, även om ett lösenord röjs.")
],


  // ==========================================
  // MEDEL – 30 FRÅGOR
  // ==========================================
  medium: [
    Q("Du får ett mejl som säger att ditt konto stängs om 15 minuter. Länken går till en adress som nästan liknar tjänstens riktiga domän. Vad är bäst?",
      "single",
      [
        "Logga in via länken eftersom meddelandet innehåller en tidsfrist",
        "Svara på mejlet och be avsändaren bekräfta sitt namn",
        "Gå till tjänsten via den officiella appen eller adressen och kontrollera meddelandet där",
        "Öppna länken i privat läge så blir den säker"
      ], [2],
      "Brådska och en snarlik domän är varningssignaler. Kontrollera kontot genom en oberoende, betrodd väg."),

    Q("En kollega skickar en fil från en adress som verkar riktig, men meddelandet är oväntat. Vad är ett bra nästa steg?",
      "single",
      [
        "Verifiera med kollegan via en separat kontaktväg innan du öppnar filen",
        "Öppna filen eftersom avsändarens adress ser korrekt ut",
        "Vidarebefordra filen till hela arbetsgruppen",
        "Byt filens namn innan du öppnar den"
      ], [0],
      "Avsändarkonton kan kapas och adresser kan förfalskas. Oväntade filer bör verifieras innan de öppnas."),

    Q("En lösenordshanterare skapar unika lösenord åt dig. Vad behöver du fortfarande skydda särskilt väl?",
      "single",
      [
        "Namnet på lösenordshanterarens ikon",
        "Webbläsarens bakgrundsbild",
        "Ordningen på dina bokmärken",
        "Huvudlösenordet och återställningsmetoderna till lösenordshanteraren"
      ], [3],
      "Om någon får tillgång till lösenordshanterarens huvudlösenord eller återställningsmetoder kan många konton påverkas."),

    Q("Din kompis får ett meddelande från ditt konto där du ber om pengar, men du har inte skickat det. Vad bör du göra?",
      "single",
      [
        "Radera bara meddelandet hos kompisen",
        "Säkra kontot, kontrollera inloggningar och återställningsuppgifter samt varna berörda kontakter",
        "Skicka pengar till dig själv för att testa",
        "Låta kontot vara öppet tills du får fler meddelanden"
      ], [1],
      "Meddelandet kan tyda på att kontot har kapats. Säkra kontot och varna andra så att de inte luras."),

    Q("Vad är den viktigaste skillnaden mellan kryptering och en säkerhetskopia?",
      "single",
      [
        "Kryptering är till för att snabba upp nätverk, medan backup blockerar virus",
        "De betyder samma sak",
        "Kryptering gör information svårare att läsa utan rätt nyckel, medan backup hjälper till att återställa data",
        "Backup skyddar alltid information bättre än kryptering"
      ], [2],
      "Kryptering skyddar informationens läsbarhet. Säkerhetskopiering handlar om att kunna återställa information."),

    Q("Varför är det riskabelt att installera ett webbläsartillägg utan att kontrollera dess utvecklare och behörigheter?",
      "single",
      [
        "Tillägg kan få åtkomst till mer information än du förväntar dig",
        "Alla tillägg stänger av webbläsarens uppdateringar",
        "Ett tillägg kan bara påverka färger och typsnitt",
        "Tillägg kan aldrig tas bort efter installation"
      ], [0],
      "Vissa tillägg kan läsa eller ändra webbplatsdata. Granska utvecklare, behörigheter och om tillägget verkligen behövs."),

    Q("En dator visar ett meddelande om att dina filer har låsts och kräver betalning. Vad beskriver situationen bäst?",
      "single",
      [
        "Vanlig systemoptimering",
        "Ett säkert sätt att uppdatera filer",
        "Ett normalt meddelande från säkerhetskopieringen",
        "Möjlig ransomware, där data kan ha krypterats för utpressning"
      ], [3],
      "Ransomware kan låsa eller kryptera data och kräva betalning. Följ organisationens incidentrutiner och undvik att agera förhastat."),

    Q("Varför är det bra att ha en säkerhetskopia som inte alltid är ansluten till datorn?",
      "single",
      [
        "Den gör datorn snabbare när den är frånkopplad",
        "Den kan vara svårare för skadlig kod att nå och förstöra samtidigt som originalfilerna",
        "Den behöver aldrig kontrolleras",
        "Den gör att kryptering inte längre behövs"
      ], [1],
      "En frånkopplad eller separat skyddad backup kan minska risken att samma angrepp påverkar både original och kopia."),

    Q("En app begär administratörsrättigheter trots att den bara ska visa en enkel textfil. Vad är klokast?",
      "single",
      [
        "Godkänna eftersom alla appar behöver full behörighet",
        "Stänga av datorns säkerhetsfunktioner",
        "Avbryta och kontrollera appens ursprung och varför behörigheten behövs",
        "Ge behörigheten och undersöka saken efteråt"
      ], [2],
      "Onödigt höga behörigheter ökar konsekvenserna om appen är skadlig eller komprometterad."),

    Q("Vad innebär principen om minsta privilegium?",
      "single",
      [
        "Användare och program får bara de behörigheter de behöver för sina uppgifter",
        "Alla användare ska ha administratörsrättigheter",
        "Alla konton ska ha samma lösenord",
        "Behörigheter ska aldrig ändras"
      ], [0],
      "Minsta privilegium begränsar åtkomst och minskar konsekvenserna av misstag eller komprometterade konton."),

    Q("Du får en MFA-begäran i mobilen trots att du inte försöker logga in. Vad bör du göra?",
      "single",
      [
        "Godkänna den för att undvika att kontot låses",
        "Avvisa begäran och kontrollera kontot via tjänstens officiella väg",
        "Skicka en skärmbild av begäran till en okänd person",
        "Stänga av MFA permanent"
      ], [1],
      "Oväntade MFA-begäranden kan tyda på att någon försöker logga in. Godkänn inte en inloggning du inte själv startat."),

    Q("Vilket är det bästa exemplet på social engineering?",
      "single",
      [
        "En brandvägg filtrerar inkommande trafik",
        "Ett program installerar en officiell uppdatering",
        "En säkerhetskopia kontrolleras automatiskt",
        "En person utger sig för att vara IT-support och försöker övertala dig att lämna ut en kod"
      ], [3],
      "Social engineering utnyttjar förtroende, stress eller andra mänskliga faktorer för att få någon att göra något osäkert."),

    Q("Vad är en botnet?",
      "single",
      [
        "Ett nätverk av säkerhetskopior som inte är anslutna",
        "En lista över betrodda webbplatser",
        "Ett nätverk av enheter som har komprometterats och kan fjärrstyras",
        "En teknik för att skapa långa lösenord"
      ], [2],
      "En botnet består av komprometterade enheter som kan styras gemensamt, exempelvis för att skicka stora mängder trafik."),

    Q("Varför kan en DDoS-attack göra en webbplats otillgänglig?",
      "single",
      [
        "Den överbelastar tjänsten eller dess nätverksresurser med trafik eller förfrågningar",
        "Den byter automatiskt alla användares lösenord",
        "Den raderar alltid webbplatsens databas",
        "Den gör att alla webbläsare slutar fungera permanent"
      ], [0],
      "En distribuerad överbelastningsattack försöker förbruka resurser så att legitima användare får svårt att nå tjänsten."),

    Q("Vad är ett bra sätt att minska risken att en stulen mobil ger åtkomst till dina konton?",
      "single",
      [
        "Använda samma PIN-kod som till alla bankkonton",
        "Ha ett starkt skärmlås, uppdatera enheten och använda funktioner för att hitta eller fjärrlåsa den",
        "Stänga av automatisk låsning",
        "Låta alla appar vara inloggade utan skärmlås"
      ], [1],
      "Skärmlås, uppdateringar och fjärrhantering kan minska risken för obehörig åtkomst om mobilen försvinner."),

    Q("Du måste skicka en fil med känsliga personuppgifter till en kollega. Vad bör du först kontrollera?",
      "single",
      [
        "Att filnamnet är kort",
        "Att mottagaren har samma operativsystem",
        "Att filen kan skickas till en privat e-postadress",
        "Att mottagaren är rätt, att överföringsmetoden är godkänd och att åtkomsten begränsas"
      ], [3],
      "Känsliga uppgifter ska skickas genom en lämplig, godkänd kanal till rätt mottagare och med begränsad åtkomst."),

    Q("Varför kan det vara farligt att återanvända ett lösenord som har läckt från en annan tjänst?",
      "single",
      [
        "Lösenordet kan automatiskt stänga av MFA",
        "Läckta lösenord blir alltid ogiltiga överallt",
        "Angripare kan testa det på andra tjänster där du har ett konto",
        "Andra tjänster kan inte lagra lösenord"
      ], [2],
      "Credential stuffing innebär att angripare testar läckta användarnamn och lösenord på andra tjänster."),

    Q("Vad är en sårbarhet som ännu inte har en tillgänglig säkerhetsuppdatering ibland kallad?",
      "single",
      [
        "Zero-day-sårbarhet",
        "Säkerhetskopia",
        "Brandväggsregel",
        "Krypteringsnyckel"
      ], [0],
      "En zero-day-sårbarhet är en brist som angripare kan utnyttja innan en fungerande korrigering finns tillgänglig eller hunnit införas."),

    Q("Vilken kombination ger bäst skydd för ett viktigt konto?",
      "multiple",
      [
        "Ett unikt lösenord",
        "Samma lösenord på alla tjänster",
        "MFA med en lämplig metod",
        "Att dela återställningskoder med en vän"
      ], [0, 2],
      "Unika lösenord och MFA kompletterar varandra. Återställningskoder ska förvaras säkert och inte delas."),

    Q("Varför bör en organisation begränsa vilka användare som får installera program?",
      "single",
      [
        "För att alla program annars raderas varje vecka",
        "För att minska risken att obehöriga eller skadliga program installeras",
        "För att lösenord då inte längre behövs",
        "För att förhindra att användare öppnar dokument"
      ], [1],
      "Begränsade installationsrättigheter minskar möjligheten att installera skadlig kod eller oönskad programvara."),

    Q("Du får en varning från webbläsaren om att webbplatsens säkerhetscertifikat inte kan verifieras. Vad bör du göra?",
      "single",
      [
        "Ignorera varningen om sidan ser professionell ut",
        "Skriva in dina uppgifter och kontrollera efteråt",
        "Stänga av certifikatkontrollen permanent",
        "Avbryta och kontrollera adressen och anslutningen innan du fortsätter"
      ], [3],
      "Certifikatvarningar kan bero på felkonfiguration eller ett möjligt säkerhetsproblem. Fortsätt inte slentrianmässigt till känsliga tjänster."),

    Q("Vad är skillnaden mellan autentisering och auktorisering?",
      "single",
      [
        "Autentisering krypterar filer; auktorisering skapar säkerhetskopior",
        "De betyder alltid samma sak",
        "Autentisering kontrollerar vem du är; auktorisering avgör vad du får göra",
        "Auktorisering används bara på mobiltelefoner"
      ], [2],
      "Autentisering verifierar identiteten. Auktorisering bestämmer vilka resurser och handlingar den verifierade identiteten får använda."),

    Q("Varför är det viktigt att logga ut från ett konto på en delad dator?",
      "single",
      [
        "För att minska risken att nästa användare får åtkomst till din session",
        "För att datorn ska kunna uppdatera sin bakgrundsbild",
        "För att alla sparade filer då krypteras automatiskt",
        "För att ditt lösenord ska bytas automatiskt"
      ], [0],
      "Att logga ut avslutar sessionen på ett säkrare sätt än att bara stänga fliken, särskilt på delade enheter."),

    Q("En vän skickar en tävling där du måste ange lösenordet till ditt sociala konto för att få priset. Vad visar detta främst?",
      "single",
      [
        "Att alla tävlingar kräver lösenord",
        "Att ett legitimt pris alltid kräver kontoåtkomst",
        "Att lösenord är samma sak som kontaktuppgifter",
        "Att begäran är en stark varningssignal eftersom lösenord inte behövs för att bekräfta ett pris"
      ], [3],
      "Lämna aldrig ut lösenord för att få ett pris. Kontrollera tävlingar genom arrangörens officiella kanaler."),

    Q("Vilket är det bästa sättet att hantera en gammal användares konto när personen lämnar en organisation?",
      "single",
      [
        "Behålla kontot aktivt för säkerhets skull",
        "Avsluta eller inaktivera åtkomsten enligt rutiner och överföra nödvändiga arbetsresurser på rätt sätt",
        "Byta kontots visningsnamn och dela lösenordet",
        "Ge kontot till en ny anställd utan ändringar"
      ], [1],
      "Åtkomst ska tas bort när den inte längre behövs. Arbetsresurser hanteras genom godkända processer, inte genom delade konton."),

    Q("Vad är syftet med nätverkssegmentering?",
      "single",
      [
        "Att göra alla enheter synliga för alla andra",
        "Att använda ett enda lösenord på hela nätverket",
        "Att dela upp nätverket i separata delar för att begränsa åtkomst och spridning av problem",
        "Att ersätta alla säkerhetskopior"
      ], [2],
      "Segmentering kan begränsa hur långt en angripare eller skadlig kod kan röra sig mellan system."),

    Q("Vilket är ett bra tecken på att en app kan samla in mer data än nödvändigt?",
      "single",
      [
        "Den begär platsåtkomst trots att dess funktion inte verkar behöva platsinformation",
        "Den har en tydlig integritetspolicy",
        "Den erbjuder inställningar för datadelning",
        "Den låter dig neka valfria behörigheter"
      ], [0],
      "Behörigheter bör stå i rimlig relation till appens funktion. Granska varför uppgifterna behövs och hur de används."),

    Q("Du får ett säkerhetslarm om en inloggning från en plats du inte känner igen. Vad är bäst?",
      "single",
      [
        "Klicka på första länken i larmet utan att kontrollera avsändaren",
        "Radera larmet och anta att det är falskt",
        "Svara med din MFA-kod så att supporten kan undersöka",
        "Öppna tjänsten via dess officiella app eller adress och kontrollera aktivitet och sessioner"
      ], [3],
      "Larm kan vara äkta eller falska. Kontrollera kontot via en betrodd väg och säkra det om aktiviteten verkar obehörig."),

    Q("Vad bör du göra med en säkerhetskopia efter att du ändrat viktiga filer?",
      "single",
      [
        "Anta att den alltid uppdateras utan att kontrollera inställningarna",
        "Kontrollera att kopieringen lyckades och att det går att återställa filerna vid behov",
        "Radera alla tidigare kopior omedelbart",
        "Lägga kopian i en mapp som alla kan redigera"
      ], [1],
      "Kontroll av kopieringen och återställningstester hjälper dig att upptäcka problem innan data går förlorade."),

    Q("Vilka två åtgärder är lämpliga efter att du upptäckt att en arbetsdator kan vara infekterad? Välj båda.",
      "multiple",
      [
        "Följa organisationens incidentrutiner och kontakta ansvarig IT- eller säkerhetspersonal",
        "Radera alla loggar för att frigöra utrymme",
        "Sprida misstänkta filer till andra datorer för att jämföra",
        "Begränsa anslutningen enligt organisationens instruktioner för att minska eventuell spridning"
      ], [0, 3],
      "Följ etablerade rutiner, rapportera snabbt och begränsa eventuell spridning på ett kontrollerat sätt. Försök inte dölja händelsen.")
  ],

  // ==========================================
  // AVANCERAD – 30 FRÅGOR
  // ==========================================
  advanced: [
    Q("En medarbetare får ett mejl som ser ut att komma från företagets chef. Mejlet ber om en brådskande överföring och säger att ingen annan får informeras. Vilken bedömning är bäst?",
      "single",
      [
        "Det är säkert eftersom mejlet känner till chefens namn",
        "Det bör hanteras som en möjlig riktad nätfiske- eller bedrägerihändelse och verifieras via en separat godkänd kanal",
        "Det är bara ett problem om stavningen är fel",
        "Överföringen bör göras först och verifieras efteråt"
      ], [1],
      "Brådska, sekretesskrav och ekonomiska instruktioner är vanliga varningssignaler. Verifiera via en oberoende kanal och följ godkännandeprocessen."),

    Q("En webbapplikation kontrollerar behörigheter i gränssnittet men inte på servern. Varför är det en allvarlig brist?",
      "single",
      [
        "Användaren kan inte ändra storleken på texten",
        "Webbplatsen laddas alltid långsammare",
        "En angripare kan kringgå gränssnittet och skicka egna förfrågningar direkt till servern",
        "Servern kommer automatiskt att radera databasen"
      ], [2],
      "Säkerhetskontroller måste göras på servern. Gränssnittet kan manipuleras och får inte vara den enda kontrollen av åtkomst."),

    Q("En organisation upptäcker att ett konto har använts från en obekant enhet. Vad bör göras först enligt en välplanerad incidenthantering?",
      "single",
      [
        "Bekräfta och bedöma larmet, säkra kontot enligt rutiner och bevara relevant information",
        "Radera all loggdata för att undvika falska larm",
        "Stänga hela organisationens nätverk permanent",
        "Publicera kontouppgifterna så att andra kan kontrollera dem"
      ], [0],
      "En strukturerad hantering börjar med att bedöma händelsen, begränsa risk och bevara relevant bevisning enligt rutiner."),

    Q("En server har en känd sårbarhet, men en uppdatering kan påverka en kritisk verksamhet. Vad är det mest ansvarsfulla arbetssättet?",
      "single",
      [
        "Ignorera sårbarheten eftersom systemet är viktigt",
        "Installera uppdateringen direkt i produktion utan test eller plan",
        "Avinstallera övervakningen för att minska antalet larm",
        "Bedöma risk och exponering, testa korrigeringen, planera införandet och använda tillfälliga skydd vid behov"
      ], [3],
      "Patchhantering kräver riskbedömning och kontrollerat införande. Om en uppdatering dröjer kan kompenserande skydd minska exponeringen."),

    Q("Vad beskriver bäst principen Zero Trust?",
      "single",
      [
        "Alla interna enheter är automatiskt betrodda",
        "Åtkomst ska verifieras och begränsas utifrån identitet, sammanhang och policy, även i interna nätverk",
        "Alla användare ska nekas all åtkomst permanent",
        "Ett lösenord räcker för att godkänna varje framtida förfrågan"
      ], [1],
      "Zero Trust utgår inte från att något är säkert bara för att det finns på insidan av nätverket. Åtkomst bedöms kontinuerligt utifrån policy och risk."),

    Q("Ett företag vill minska risken att en angripare rör sig från en komprometterad kontorsdator till produktionssystem. Vilken åtgärd är mest direkt relevant?",
      "single",
      [
        "Byta bakgrundsbild på kontorsdatorerna",
        "Låta alla system använda samma administratörskonto",
        "Segmentera nätverket och begränsa kommunikation mellan kontor och produktionssystem",
        "Stänga av alla säkerhetsloggar"
      ], [2],
      "Segmentering och restriktiva nätverksregler kan begränsa lateral förflyttning mellan olika miljöer."),

    Q("Ett företag upptäcker många misslyckade inloggningar följt av en lyckad inloggning på samma konto. Vad är den mest rimliga slutsatsen?",
      "single",
      [
        "Kontot kan vara utsatt för lösenordsgissning eller annan obehörig inloggning och bör undersökas",
        "Det bevisar att användaren har installerat ransomware",
        "Det visar säkert att nätverket fungerar normalt",
        "Det bevisar att lösenordet är starkt"
      ], [0],
      "Mönstret kan tyda på ett försök att gissa eller testa uppgifter. Kontrollera sammanhang, MFA, enhet, plats och efterföljande aktivitet."),

    Q("Varför kan en fysisk säkerhetsnyckel vara ett starkt skydd mot nätfiske jämfört med en kod som användaren själv skriver in?",
      "single",
      [
        "Den tar bort behovet av att kontrollera webbplatsens adress i alla situationer",
        "Den gör alla enheter immuna mot skadlig kod",
        "Den garanterar att kontot aldrig kan återställas av en angripare",
        "Den kan binda autentiseringen till den legitima webbplatsens ursprung och därmed motstå många falska inloggningssidor"
      ], [3],
      "FIDO-baserade säkerhetsnycklar kan knyta autentiseringen till webbplatsens ursprung, vilket gör dem motståndskraftiga mot många nätfiskeupplägg."),

    Q("En organisation får en varning om ovanlig utgående trafik från en server. Vilken kombination av undersökningar är mest användbar?",
      "multiple",
      [
        "Jämföra trafiken med normal aktivitet och granska relevanta loggar",
        "Radera loggarna innan någon hinner läsa dem",
        "Kontrollera vilka processer och anslutningar som är aktiva på servern",
        "Stänga av all övervakning för att minska belastningen"
      ], [0, 2],
      "Jämför med normal trafik och undersök processer och loggar. Bevara information och följ incidentrutiner innan större förändringar görs."),

    Q("Vilken beskrivning skiljer bäst en hotaktör från en sårbarhet?",
      "single",
      [
        "En hotaktör är en säkerhetskopia; en sårbarhet är ett lösenord",
        "En hotaktör är en möjlig källa till skada; en sårbarhet är en svaghet som kan utnyttjas",
        "En hotaktör är alltid en dator; en sårbarhet är alltid en person",
        "Begreppen betyder samma sak"
      ], [1],
      "Hotaktörer kan vara personer eller grupper. Sårbarheter är svagheter i teknik, processer eller människor som kan utnyttjas."),

    Q("En angripare får tillgång till ett vanligt användarkonto på en server. Vilken kontroll begränsar bäst vad angriparen kan göra därefter?",
      "single",
      [
        "Ge kontot fler rättigheter så att aktivitet blir lättare att spåra",
        "Använda samma konto för alla administratörer",
        "Tillämpa minsta privilegium och separera administrativa konton från vanliga användarkonton",
        "Stänga av åtkomstkontroller för att undvika låsningar"
      ], [2],
      "Separata konton och minsta privilegium begränsar vilka resurser en komprometterad identitet kan nå."),

    Q("En webbserver innehåller personuppgifter och blir angripen. Vilken åtgärd hjälper mest till att minska risken att angriparen kan läsa data från en annan tjänst?",
      "single",
      [
        "Begränsa tjänsternas åtkomst, separera behörigheter och lagra endast nödvändiga uppgifter",
        "Ge alla tjänster full åtkomst till samma databas",
        "Använda samma administratörslösenord i varje system",
        "Dölja databasens namn men lämna åtkomsten oförändrad"
      ], [0],
      "Separering, begränsad åtkomst och dataminimering kan minska både sannolikheten för obehörig åtkomst och konsekvenserna."),

    Q("Vad är den huvudsakliga säkerhetsrisken med att lagra lösenord i klartext i en databas?",
      "single",
      [
        "Databasen blir alltid större än planerat",
        "Lösenorden kan inte användas vid inloggning",
        "Användarna måste byta webbläsare",
        "Den som får tillgång till databasen kan läsa lösenorden direkt"
      ], [3],
      "Lösenord ska inte lagras i klartext. Tjänster använder normalt en lämplig, långsam lösenordshashning med unikt salt för varje lösenord."),

    Q("En applikation bygger SQL-frågor genom att direkt lägga in användarens text i frågesträngen. Vilken risk uppstår främst?",
      "single",
      [
        "Skärmen kan få fel upplösning",
        "SQL-injektion, där indata kan påverka frågans avsedda struktur",
        "Datorns batteri laddas ur snabbare",
        "Användaren kan automatiskt ändra serverns fysiska placering"
      ], [1],
      "Använd parametriserade frågor i stället för att sammanfoga osäker indata direkt med SQL-kod."),

    Q("Ett företag får många larm samtidigt, men säkerhetsteamet kan inte utreda alla direkt. Vad är ett bra sätt att prioritera?",
      "single",
      [
        "Utreda larmen i alfabetisk ordning efter användarnamn",
        "Bara hantera larm som ser enklast ut",
        "Prioritera efter allvarlighetsgrad, tillgångens betydelse, tecken på pågående intrång och möjlig påverkan",
        "Stänga av alla larm som återkommer"
      ], [2],
      "Prioritering bör väga in risk, påverkan, kontext och om aktiviteten tyder på ett pågående angrepp."),

    Q("Vad innebär CIA-triadens konfidentialitet?",
      "single",
      [
        "Att information endast är tillgänglig för behöriga",
        "Att data alltid är säkerhetskopierad",
        "Att alla användare kan ändra data",
        "Att en tjänst aldrig kan bli långsam"
      ], [0],
      "Konfidentialitet innebär att information skyddas mot obehörig åtkomst eller utlämning."),

    Q("Vad innebär integritet i CIA-triaden?",
      "single",
      [
        "Att alla användare kan läsa information",
        "Att informationen alltid går att nå från internet",
        "Att lösenord aldrig behöver ändras",
        "Att information är korrekt och skyddad mot obehöriga eller oavsiktliga ändringar"
      ], [3],
      "Integritet handlar om att data förblir korrekt och fullständig samt att förändringar kan kontrolleras."),

    Q("Vad innebär tillgänglighet i CIA-triaden?",
      "single",
      [
        "Att information aldrig krypteras",
        "Att behöriga användare kan komma åt system och information när det behövs",
        "Att all information publiceras öppet",
        "Att alla användare får administratörsrättigheter"
      ], [1],
      "Tillgänglighet handlar om att system och data fungerar och går att använda när behöriga behöver dem."),

    Q("En organisation har kryptering, MFA och brandvägg men saknar säkerhetskopior och återställningsplan. Vad är den tydligaste bristen?",
      "single",
      [
        "Organisationen behöver ta bort all kryptering",
        "Organisationen måste använda samma lösenord i alla system",
        "Organisationen har otillräcklig beredskap för dataförlust och avbrott",
        "Organisationen behöver stänga av alla nätverksanslutningar permanent"
      ], [2],
      "Förebyggande skydd minskar vissa risker, men säkerhetskopior och testad återställning behövs för att återhämta sig efter incidenter."),

    Q("Vad är ett viktigt skäl att testa en säkerhetskopia genom faktisk återställning?",
      "single",
      [
        "Att säkerställa att data går att återställa och att processen fungerar inom rimlig tid",
        "Att göra alla filer offentliga",
        "Att bevisa att inga framtida angrepp kan inträffa",
        "Att ersätta behovet av åtkomstkontroll"
      ], [0],
      "En backup som inte går att återställa ger falsk trygghet. Tester visar om data och återställningsrutiner fungerar."),

    Q("En mobiloperatör luras att flytta ett offers telefonnummer till ett SIM-kort som angriparen kontrollerar. Vad är den främsta risken?",
      "single",
      [
        "Att telefonens skärm får permanent lägre ljusstyrka",
        "Att alla filer krypteras automatiskt av operatören",
        "Att offrets lösenord blir synliga för alla på internet",
        "Att angriparen kan ta emot sms-baserade verifieringskoder och försöka återställa konton"
      ], [3],
      "SIM-swapping kan ge angriparen kontroll över sms till numret. Därför är det bra att inte enbart förlita sig på sms för viktiga konton."),

    Q("Ett företag upptäcker att en anställd har skickat en fil med personuppgifter till fel mottagare. Vad bör organisationen göra?",
      "single",
      [
        "Ignorera händelsen om filen skickades av misstag",
        "Rapportera händelsen internt enligt rutiner, begränsa exponeringen och bedöma om vidare anmälan krävs",
        "Radera all dokumentation om händelsen",
        "Publicera filen så att mottagaren kan identifieras"
      ], [1],
      "En felaktig delning kan vara en personuppgiftsincident. Organisationen behöver bedöma påverkan och följa tillämpliga rutiner och tidsfrister."),

    Q("Varför kan en till synes legitim programuppdatering vara farlig om den kommer från en manipulerad källa?",
      "single",
      [
        "Uppdateringar kan aldrig innehålla körbar kod",
        "En manipulerad uppdatering påverkar bara programmets färger",
        "Angriparen kan distribuera skadlig kod som användaren eller systemet litar på",
        "Alla uppdateringar stänger automatiskt av brandväggen"
      ], [2],
      "En komprometterad leveranskedja kan göra att skadlig kod distribueras genom en källa som normalt anses betrodd."),

    Q("Vad är den främsta fördelen med central logginsamling för en organisation?",
      "single",
      [
        "Den gör att alla händelser automatiskt blir ofarliga",
        "Den eliminerar behovet av behörigheter",
        "Den hindrar alla användare från att göra misstag",
        "Den gör det lättare att korrelera händelser från flera system och upptäcka mönster"
      ], [3],
      "Centraliserade loggar kan ge bättre överblick och hjälpa utredare att koppla samman händelser över flera system."),

    Q("En utvecklare upptäcker att en API-nyckel har publicerats i ett öppet kodarkiv. Vad bör göras först?",
      "single",
      [
        "Återkalla eller rotera nyckeln, undersöka eventuell användning och ta bort exponeringen",
        "Bara byta namn på variabeln i koden",
        "Låta nyckeln ligga kvar om ingen har kommenterat den",
        "Göra kodarkivet ännu mer synligt så att fler kan kontrollera det"
      ], [0],
      "En publicerad hemlighet ska betraktas som exponerad. Återkalla eller rotera den och kontrollera loggar och eventuell påverkan."),

    Q("Vilken metod minskar bäst risken att utvecklingshemligheter hamnar i versionshantering?",
      "multiple",
      [
        "Lagra hemligheter i godkänd hemlighetshantering eller säkra miljövariabler",
        "Lägga nycklar i källkoden men byta filnamn",
        "Använda granskning och automatiska kontroller för att upptäcka hemligheter",
        "Dela samma API-nyckel offentligt mellan alla projekt"
      ], [0, 2],
      "Hemligheter bör hanteras utanför källkoden och kontrolleras med granskning och verktyg. Om en hemlighet exponeras ska den roteras."),

    Q("En organisation vill minska mängden personuppgifter som kan läcka vid ett intrång. Vilken strategi är mest direkt relevant?",
      "single",
      [
        "Spara alla uppgifter på obestämd tid för framtida bruk",
        "Samla in och behålla endast uppgifter som verkligen behövs, med tydliga gallringsrutiner",
        "Kopiera alla uppgifter till fler system",
        "Ge alla anställda läsrättighet till databasen"
      ], [1],
      "Dataminimering och gallring minskar mängden information som kan exponeras vid en incident."),

    Q("Ett system visar en ovanlig administratörsinloggning, följd av ändringar i säkerhetsinställningar. Vad är den mest rimliga nästa åtgärden?",
      "single",
      [
        "Utgå från att det är legitimt eftersom kontot är administrativt",
        "Ta bort loggarna för att undvika onödigt arbete",
        "Undersöka händelsekedjan, verifiera om aktiviteten var godkänd och vid behov begränsa kontot enligt incidentrutiner",
        "Dela administratörskontots lösenord med hela teamet"
      ], [2],
      "En privilegierad inloggning följd av säkerhetsändringar kan innebära hög risk. Undersök sammanhanget och agera enligt incidentprocessen."),

    Q("Ett företag måste välja mellan att åtgärda en allvarlig sårbarhet på en internetexponerad server och en mindre brist på en isolerad testdator. Vad är bäst?",
      "single",
      [
        "Prioritera efter faktisk risk, exponering, möjliga konsekvenser och tillgångens betydelse",
        "Alltid åtgärda den brist som upptäcktes först",
        "Alltid åtgärda testdatorn eftersom den är enklare",
        "Ignorera båda tills en incident inträffar"
      ], [0],
      "Riskbaserad prioritering väger in hur lätt bristen kan utnyttjas, hur exponerat systemet är och vilken påverkan ett angrepp kan få."),

    Q("Efter ett intrång har organisationen återställt systemen från säkerhetskopior. Vad är viktigt innan systemen anses säkra att använda igen?",
      "multiple",
      [
        "Kontrollera att intrångsvägen är åtgärdad och att systemen är tillräckligt säkra",
        "Återansluta allt omedelbart utan kontroller",
        "Verifiera systemens integritet och testa viktiga funktioner",
        "Radera incidentdokumentationen"
      ], [0, 2],
      "Återställning bör ske kontrollerat. Åtgärda grundorsaken, verifiera systemens integritet och testa innan full drift återupptas.")
  ]
};


// ==========================================
// VALIDERING AV FRÅGEBANKEN
// Stoppar körningen om ett facit är ogiltigt.
// ==========================================

LEVELS.forEach(level => {
    if (questions[level].length !== 30) {
        throw new Error(
            `Fel antal frågor i ${level}: ${questions[level].length}. Förväntat 30.`
        );
    }

    questions[level].forEach((q, index) => {
        if (!q.question || !q.explanation || !q.options.length || !q.correct.length) {
            throw new Error(`Ofullständig fråga: ${level}, fråga ${index + 1}`);
        }

        if (q.type === "single" && q.correct.length !== 1) {
            throw new Error(`Envalsfråga har fel facit: ${level}, fråga ${index + 1}`);
        }

        if (!q.correct.every(i => Number.isInteger(i) && i >= 0 && i < q.options.length)) {
            throw new Error(`Ogiltigt svarsalternativ: ${level}, fråga ${index + 1}`);
        }
    });
});

// ==========================================
// HTML-ELEMENT
// ==========================================

const questionContainer = document.getElementById("question-container");
const questionNumber = document.getElementById("question-number");
const feedback = document.getElementById("feedback");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const scoreText = document.getElementById("score-text");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");
const progress = document.getElementById("progress");

if (
    !questionContainer || !questionNumber || !feedback ||
    !answerButton || !nextButton || !backButton ||
    !resultContainer || !quizContainer || !scoreText ||
    !resultMessage || !restartButton || !progress
) {
    throw new Error(
        "CyberSafe: Ett eller flera HTML-element saknas. Kontrollera quiz.html."
    );
}

// Skapa knappar om de inte finns i HTML.
function getOrCreateButton(id, text) {
    let button = document.getElementById(id);

    if (!button) {
        button = document.createElement("button");
        button.id = id;
        button.type = "button";
        button.textContent = text;
        resultContainer.appendChild(button);
    }

    return button;
}

const nextLevelButton = getOrCreateButton(
    "nextlevelButton",
    "Nästa nivå"
);

const menuButton = getOrCreateButton(
    "level-menu-button",
    "Till nivåmenyn"
);

const fullRestartButton = getOrCreateButton(
    "full-restart-button",
    "🔄 Gör hela quizet igen"
);

// ==========================================
// TILLSTÅND
// ==========================================

let currentLevel = "easy";
let currentQuestion = 0;
let answered = false;

let questionResults = {
    easy: [],
    medium: [],
    advanced: []
};

let savedAnswers = {
    easy: [],
    medium: [],
    advanced: []
};

let questionOrder = {
    easy: [],
    medium: [],
    advanced: []
};

let unlockedLevels = {
    easy: true,
    medium: false,
    advanced: false
};

let completedLevels = {
    easy: false,
    medium: false,
    advanced: false
};

// ==========================================
// HJÄLPFUNKTIONER
// ==========================================

function shuffleArray(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function clearElement(element) {
    element.replaceChildren();
}

function getOriginalIndex() {
    return questionOrder[currentLevel][currentQuestion];
}

function getCurrentQuestion() {
    return questions[currentLevel][getOriginalIndex()];
}

function getLevelName(level) {
    return LEVEL_INFO[level].title;
}

function makeQuestionOrder(level) {
    questionOrder[level] = shuffleArray(
        questions[level].map((_, index) => index)
    );
}

function clearLevelProgress(level) {
    questionResults[level] = [];
    savedAnswers[level] = [];
}

// ==========================================
// SPARA OCH LÄS FRAMSTEG
// ==========================================

function saveProgress() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            questionResults,
            savedAnswers,
            questionOrder,
            unlockedLevels,
            completedLevels
        }));
    } catch (error) {
        console.warn("CyberSafe kunde inte spara framsteg.", error);
    }
}

function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) return;

        const data = JSON.parse(raw);

        LEVELS.forEach(level => {
            if (
                Array.isArray(data.questionResults?.[level]) &&
                data.questionResults[level].length <= 30
            ) {
                questionResults[level] = data.questionResults[level];
            }

            if (
                Array.isArray(data.savedAnswers?.[level]) &&
                data.savedAnswers[level].length <= 30
            ) {
                savedAnswers[level] = data.savedAnswers[level];
            }

            const order = data.questionOrder?.[level];

            if (
                Array.isArray(order) &&
                order.length === 30 &&
                order.every(i => Number.isInteger(i) && i >= 0 && i < 30) &&
                new Set(order).size === 30
            ) {
                questionOrder[level] = order;
            }
        });

        completedLevels = {
            easy: data.completedLevels?.easy === true,
            medium: data.completedLevels?.medium === true,
            advanced: data.completedLevels?.advanced === true
        };

        // En nivå räknas som avklarad bara om resultatet faktiskt når 70 %.
        LEVELS.forEach(level => {
            const score = questionResults[level].filter(v => v === true).length;
            const count = questionResults[level].filter(v => typeof v === "boolean").length;

            if (count === 30 && score / 30 * 100 >= REQUIRED_PERCENTAGE) {
                completedLevels[level] = true;
            } else {
                completedLevels[level] = false;
            }
        });

        // Upplåsningar räknas fram från avklarade nivåer.
        unlockedLevels = {
            easy: true,
            medium: completedLevels.easy,
            advanced: completedLevels.medium
        };

        // Säkerställ att alla nivåer har en giltig ordning.
        LEVELS.forEach(level => {
            if (questionOrder[level].length !== 30) {
                makeQuestionOrder(level);
            }
        });
    } catch (error) {
        console.warn("CyberSafe kunde inte läsa sparade framsteg.", error);
    }
}

// ==========================================
// NIVEÅMENY
// ==========================================

function showLevelMenu() {
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";

    clearElement(questionContainer);
    feedback.textContent = "";
    questionNumber.textContent = "";
    progress.style.width = "0%";

    answerButton.style.display = "none";
    nextButton.style.display = "none";
    backButton.style.display = "none";

    const menu = document.createElement("div");
    menu.id = "level-menu";

    const title = document.createElement("h2");
    title.textContent = "🎯 Välj nivå";
    menu.appendChild(title);

    const intro = document.createElement("p");
    intro.textContent = `Klara minst ${REQUIRED_PERCENTAGE} % för att låsa upp nästa nivå.`;
    menu.appendChild(intro);

    LEVELS.forEach(level => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "level-button";

        if (!unlockedLevels[level]) {
            button.textContent = `${getLevelName(level)} 🔒`;
            button.disabled = true;
            button.classList.add("level-locked");
        } else if (completedLevels[level]) {
            button.textContent = `${getLevelName(level)} ✓`;
            button.disabled = false;
            button.classList.add("level-completed");
        } else {
            button.textContent = `${getLevelName(level)} ▶️`;
            button.disabled = false;
            button.classList.add("level-available");
        }

        button.addEventListener("click", () => startLevel(level));

        const description = document.createElement("p");
        description.textContent = LEVEL_INFO[level].description;

        menu.append(button, description);
    });

    const restartAll = document.createElement("button");
    restartAll.type = "button";
    restartAll.className = "full-restart-menu-button";
    restartAll.textContent = "🔄 Börja om hela quizet";
    restartAll.addEventListener("click", restartEntireQuiz);

    menu.appendChild(restartAll);
    questionContainer.appendChild(menu);
}

// ==========================================
// STARTA NIVÅ
// ==========================================

function startLevel(level) {
    if (!LEVELS.includes(level) || !unlockedLevels[level]) return;

    currentLevel = level;
    currentQuestion = 0;
    answered = false;

    // Behåll tidigare försök om nivån redan är besvarad.
    // Om den inte har någon ordning skapas en ny slumpad.
    if (questionOrder[level].length !== 30) {
        makeQuestionOrder(level);
    }

    quizContainer.style.display = "block";
    resultContainer.style.display = "none";

    saveProgress();
    showQuestion();
}

// ==========================================
// VISA FRÅGA
// ==========================================

function showQuestion() {
    const list = questions[currentLevel];

    if (currentQuestion < 0 || currentQuestion >= list.length) {
        finishLevel();
        return;
    }

    const originalIndex = getOriginalIndex();
    const question = list[originalIndex];
    const previousAnswer = savedAnswers[currentLevel][originalIndex];
    const previousResult = questionResults[currentLevel][originalIndex];

    clearElement(questionContainer);
    clearElement(feedback);

    questionNumber.textContent =
        `Fråga ${currentQuestion + 1} av ${list.length}`;

    progress.style.width =
        `${((currentQuestion + 1) / list.length) * 100}%`;

    const title = document.createElement("h2");
    title.textContent = question.question;
    questionContainer.appendChild(title);

    const hint = document.createElement("p");
    hint.className = "question-type-hint";
    hint.textContent = question.type === "multiple"
        ? "☑️ Välj alla svar som stämmer."
        : "🔘 Välj ett svar.";
    questionContainer.appendChild(hint);

    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "quiz-option";

        const input = document.createElement("input");
        input.type = question.type === "multiple" ? "checkbox" : "radio";
        input.name = "answer";
        input.value = String(index);

        if (Array.isArray(previousAnswer) && previousAnswer.includes(index)) {
            input.checked = true;
        }

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = option;

        label.append(input, text);

        if (typeof previousResult === "boolean") {
            input.disabled = true;

            if (question.correct.includes(index)) {
                label.classList.add("correct-answer");
            }

            if (
                Array.isArray(previousAnswer) &&
                previousAnswer.includes(index) &&
                !question.correct.includes(index)
            ) {
                label.classList.add("wrong-answer");
            }
        }

        questionContainer.appendChild(label);
    });

    answered = typeof previousResult === "boolean";

    if (answered) {
        showFeedback(previousResult, question.explanation);
        answerButton.style.display = "none";
        nextButton.style.display = "inline-block";
    } else {
        answerButton.style.display = "inline-block";
        nextButton.style.display = "none";
    }

    backButton.style.display = currentQuestion > 0 ? "inline-block" : "none";
}

// ==========================================
// FEEDBACK
// ==========================================

function showFeedback(isCorrect, explanation) {
    clearElement(feedback);

    feedback.className = isCorrect ? "feedback-correct" : "feedback-wrong";

    const heading = document.createElement("strong");
    heading.textContent = isCorrect ? "✅ Rätt svar!" : "❌ Inte riktigt!";
    feedback.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = explanation;
    feedback.appendChild(paragraph);
}

function markAnswers(selected, correct) {
    const labels = questionContainer.querySelectorAll(".quiz-option");

    labels.forEach((label, index) => {
        label.classList.remove("correct-answer", "wrong-answer");

        if (correct.includes(index)) {
            label.classList.add("correct-answer");
        }

        if (selected.includes(index) && !correct.includes(index)) {
            label.classList.add("wrong-answer");
        }
    });
}

// ==========================================
// KONTROLLERA SVAR
// ==========================================

answerButton.addEventListener("click", () => {
    if (answered) return;

    const question = getCurrentQuestion();
    const originalIndex = getOriginalIndex();

    const selected = Array.from(
        questionContainer.querySelectorAll('input[name="answer"]:checked')
    )
        .map(input => Number(input.value))
        .sort((a, b) => a - b);

    if (selected.length === 0) {
        feedback.className = "feedback-warning";
        feedback.textContent = "⚠️ Välj minst ett svar först.";
        return;
    }

    const correct = [...question.correct].sort((a, b) => a - b);

    const isCorrect =
        JSON.stringify(selected) === JSON.stringify(correct);

    savedAnswers[currentLevel][originalIndex] = selected;
    questionResults[currentLevel][originalIndex] = isCorrect;

    answered = true;

    markAnswers(selected, correct);
    showFeedback(isCorrect, question.explanation);

    answerButton.style.display = "none";
    nextButton.style.display = "inline-block";

    saveProgress();
});

// ==========================================
// NÄSTA FRÅGA
// ==========================================

nextButton.addEventListener("click", () => {
    if (!answered) {
        feedback.textContent = "⚠️ Besvara frågan innan du går vidare.";
        return;
    }

    if (currentQuestion < questions[currentLevel].length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        finishLevel();
    }
});

// ==========================================
// TILLBAKA
// ==========================================

backButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

// ==========================================
// POÄNG
// ==========================================

function calculateScore(level = currentLevel) {
    return questionResults[level].filter(result => result === true).length;
}

// ==========================================
// RESULTAT
// ==========================================

function finishLevel() {
    const total = questions[currentLevel].length;
    const score = calculateScore(currentLevel);
    const percentage = Math.round(score / total * 100);
    const passed = percentage >= REQUIRED_PERCENTAGE;

    if (passed) {
        completedLevels[currentLevel] = true;

        if (currentLevel === "easy") {
            unlockedLevels.medium = true;
        }

        if (currentLevel === "medium") {
            unlockedLevels.advanced = true;
        }
    } else {
        completedLevels[currentLevel] = false;

        // En nivå som inte klaras låser inte upp nästa.
        if (currentLevel === "easy") {
            unlockedLevels.medium = false;
            unlockedLevels.advanced = false;
            completedLevels.medium = false;
            completedLevels.advanced = false;
        }

        if (currentLevel === "medium") {
            unlockedLevels.advanced = false;
            completedLevels.advanced = false;
        }
    }

    saveProgress();

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    scoreText.textContent =
        `Du fick ${score} av ${total} rätt (${percentage} %).`;

    if (!passed) {
        resultMessage.textContent =
            `Du behöver minst ${REQUIRED_PERCENTAGE} % för att klara nivån. Gör om nivån och försök igen!`;

        nextLevelButton.style.display = "none";
    } else if (currentLevel === "easy") {
        resultMessage.textContent =
            "🎉 Bra jobbat! Du klarade Lätt och har låst upp Medel.";

        nextLevelButton.textContent = "🟡 Spela Medel";
        nextLevelButton.style.display = "inline-block";
    } else if (currentLevel === "medium") {
        resultMessage.textContent =
            "🔥 Snyggt! Du klarade Medel och har låst upp Avancerad.";

        nextLevelButton.textContent = "🔴 Spela Avancerad";
        nextLevelButton.style.display = "inline-block";
    } else {
        resultMessage.textContent =
            "🏆 Fantastiskt! Du har klarat alla tre nivåerna i CyberSafe!";

        nextLevelButton.style.display = "none";
    }

    menuButton.style.display = "inline-block";
    fullRestartButton.style.display = "inline-block";
    restartButton.style.display = "inline-block";
}

// ==========================================
// NÄSTA NIVÅ
// ==========================================

nextLevelButton.addEventListener("click", () => {
    if (currentLevel === "easy" && unlockedLevels.medium) {
        startLevel("medium");
    } else if (currentLevel === "medium" && unlockedLevels.advanced) {
        startLevel("advanced");
    }
});

// ==========================================
// GÖR OM ENDAST AKTUELL NIVÅ
// ==========================================

restartButton.addEventListener("click", () => {
    clearLevelProgress(currentLevel);
    makeQuestionOrder(currentLevel);

    currentQuestion = 0;
    answered = false;

    // Behåll tidigare upplåsningar när en enskild nivå görs om.
    saveProgress();
    startLevel(currentLevel);
});

// ==========================================
// GÖR OM HELA QUIZET
// Återställ allt, lås nivåer och blanda om.
// ==========================================

function restartEntireQuiz() {
    LEVELS.forEach(level => {
        clearLevelProgress(level);
        makeQuestionOrder(level);
    });

    unlockedLevels = {
        easy: true,
        medium: false,
        advanced: false
    };

    completedLevels = {
        easy: false,
        medium: false,
        advanced: false
    };

    currentLevel = "easy";
    currentQuestion = 0;
    answered = false;

    saveProgress();
    startLevel("easy");
}

fullRestartButton.addEventListener("click", restartEntireQuiz);

// ==========================================
// NIVÅMENY
// ==========================================

menuButton.addEventListener("click", () => {
    showLevelMenu();
});

// START

loadProgress();

// Visa nivåmenyn utan att skapa flera menyer.
showLevelMenu();
