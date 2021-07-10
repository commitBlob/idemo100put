import { ThingsToDo } from './things-to-do.interface';
import { GlobalVariables } from '../../../globals';

export const todoContent: ThingsToDo[] = [
  {
    language: 'eng',
    header: 'Lokrum Island',
    subHeader: 'Special forest reserve',
    shortDescription: 'Lokrum is a beautiful, forested island, and an ideal escape from urban Dubrovnik.',
    content: '<p>Lush Lokrum is a beautiful, forested island full of holm oaks, black ash pines ' +
      'and olive trees, and it’s an ideal escape from urban Dubrovnik. It\'s a popular swimming spot ' +
      'despite the rocky beaches. The island’s small saltwater lake, known as the Dead Sea, is also ' +
      'a popular tourist destination well worth a visit.</p> <p>The island\'s main hub is its large ' +
      'medieval Benedictine monastery, which houses a restaurant and a display on the island\'s ' +
      'history, as well as the famous TV show Game of Thrones, which was partly filmed in Dubrovnik. ' +
      'This is your chance to pose imperiously in on the Iron Throne.</p> <p>Lokrum is only a ' +
      '15-minutes ferry ride from Dubrovnik\'s Old Harbour. Boats leave roughly every hour during ' +
      'summer, and every half an hour in July and August. The public boat ticket price includes the ' +
      'entrance fee to the nature reserve (Lokrum island).  Please note, that overnight stay and ' +
      'smoking is not permitted on the island.</p>',
    shortName: 'lokrum',
    image: `${GlobalVariables.imagesPath}/things_to_do/lokrum.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Otok Lokrum',
    subHeader: 'Posebni rezervat šumske vegetacije',
    shortDescription: 'Lokrum je idealno mjesto za pobijeći od gužve i odmorit dušu.',
    content: '<p>Lokrum je maleni šumoviti otok udaljen svega 15 minuta vožnje od stare Gradske luke.</p>' +
      ' <p>Idealno je mjesto za pobijeći od urbanog Dubrovnika. Lokrum je također popularno mjesto za ' +
      'kupanje premda su plaže stijenovite. Na Lokrumu se može okupati u slanom jezeru poznatom kao Mrtvo ' +
      'More. Na otoku se također nalazi benediktinski samostan, restoran, i muzej o povijesti lokruma ali ' +
      'i TV serije Igre Prijestolja koje su snimane u Dubrovniku. Na Lokrumu ćete imat priliku sjediti na ' +
      'Željeznom Prijestolju koje je korišteno prilikom snimanja. Na Lokrum se nalazi i Botanićki vrt a ' +
      'ulazna karta je uključena u brodsku kartu.</p> <p>Tijekom srpnja i kolovoza brod za Lokrum polazi ' +
      'svakih 30 minuta, dok tijekom ostalih mjeseci turističke sezone polazi svaki sat. Pušenje na Lokrumu' +
      ' je zabranjeno kao i kampiranje i nočenje.</p>',
    shortName: 'lokrum',
    image:`${GlobalVariables.imagesPath}/things_to_do/lokrum.png`,
    visible: true
  },
  {
    language: 'eng',
    header: 'Cavtat',
    subHeader: 'Charming Little City',
    shortDescription: 'Without Cavtat, there’d be no Dubrovnik, as it was refugees from the original Cavtat ' +
      'who established the city of Dubrovnik in 614.',
    content: '<p>Cavtat is a perfect getaway from touristy Dubrovnik, an interesting and cosy little place ' +
      'with its own charm. Wrapped around a pretty harbour that’s bordered by beaches and backed by a curtain' +
      ' of imposing hills, the setting is lovely.</p> <p>Cobbled streets with traditional red-roofed brownstone' +
      ' houses climb back from the blue of the waterfront. The narrow stairways between the opposite sides of ' +
      'each street are smothered in clouds of white, mauve and pink blossoms. In the fruit and vegetable market,' +
      ' by the bus station, crates of green and red peppers, purple aubergines and green figs are piled high ' +
      'beside trestle-tables laden with a golden blaze of fruits: bananas, papayas, enormous melons and the ' +
      'gorgeous knobbly lemons that also drip from the surrounding trees like blobs of yellow candle wax.</p>' +
      '<p>The celebrated Croatian painter Vlaho Bukovac (1855-1922) remains Cavtat\'s most famous son.</p>',
    shortName: 'cavtat',
    image:`${GlobalVariables.imagesPath}/things_to_do/cavtat.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Cavtat',
    subHeader: 'Da nije Cavtata ne bi bilo Dubrovnika',
    shortDescription: 'Šarmantan i ugodan gradić, bogat prirodnim ljepotama, povijesnim nasljeđem, i ' +
      'širokom turističkom ponudom.',
    content: '<p>Cavtat je gradić uldajen 19km jugositočno od Dubrovnika, smješten na poluotoku Rat.</p>' +
      ' <p>U njegovoj skladnoj arhitekturi lako je nazrijeti stoljetnu prirodnu, duhovnu i materijalnu ' +
      'pripadnost Dubrovačkoj Republici.</p> <p>Rijetka su mjesta poput Cavtata koja na tako malom ' +
      'prostoru pružaju posjetitelju tako mnogo. Prirodne ljepote, bogato kulturno i povijesno nasljeđe,' +
      ' te ostali standardi turističke ponude usklađeni sa zahtjevima današnjih turista, čine ga jednom ' +
      'od najatraktivnijih destinacija na Jadranu. Naslonjen na magični Dubrovnik i prelijepe Konavle u ' +
      'kojima još i danas možete osluhnuti duh minulih vremena i doživjeti stoljetne tradicije naših ' +
      'predaka, Cavtat čine idealnim mjestom za odmor, gdje svatko može pronaći ono što želi: uživati u ' +
      'miru skrovitih uvala i dugih šetnji uz more ili provoditi aktivan odmor uz brojne sportsko-rekreacijske' +
      ', zabavne i kulturne programe koji se nude.</p>',
    shortName: 'cavtat',
    image:`${GlobalVariables.imagesPath}/things_to_do/cavtat.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Pelješac',
    subHeader: 'Raj za ljubitelje vina',
    shortDescription: 'Vino, sol, ekstra djevičansko maslinovo ulje, i kamenice istinski su užitak za gurmane. ' +
      'Mirisi i okusi Mediterana su dio naše tradicije.',
    content: '<p>Okićen stijenovitim planinama, raskošnim dolinama, idiličnim uvalama, i izvrsnim vinima, ' +
      'Pelješac je nepropustiv jednodnevni izlet.</p> <p>Ston i Mali Ston smješteni su 50km sjeverozapadno ' +
      'od Dubrovnika na mjestu gdje se Pelješki poluotok povezuje s kopnom. Zbog svoje pozicije i gospodarske ' +
      'važnosti za Dubrovnik (i tada Dubrovačku Republiku) 1333. su opasani zidinama dugim 5,5km. Postavši ' +
      'jedna od najdužih utvrda u Europi.</p> <p>Posjetiti Pelješac, a ne vidjeti poznate vinograde i vinske ' +
      'ceste, i probati vrhunska vina, kao što su Dingač i Postup, bio bi veliki propust.</p> <p>Malostonske ' +
      'kamenice i vrhunsko maslinovo ulje su delicije koje bi svaki ljubitelj hrane i garstronomije trebao provati.</p>',
    shortName: 'peljesac',
    image:`${GlobalVariables.imagesPath}/things_to_do/peljesac.png`,
    visible: true
  },
  {
    language: 'eng',
    header: 'Peljesac Peninsula',
    subHeader: 'Wine Lovers Paradise',
    shortDescription: 'Pelješac is an ideal day trip, widely known for its red wine, oysters from the Mali Ston bay, ' +
      'and highest quality extra virgin olive oil.',
    content: '<p>Blessed with craggy mountains, sweeping valleys, idyllic coves and fine wines, Pelješac is a ' +
      'glorious place to visit. Two historic towns - Ston and Orebić – bookend the peninsula, and the slow, ' +
      'winding drive between them is a very pleasant one indeed; allow an hour, or longer if you stop for wine ' +
      'tastings along the way.</p> <p>Ston and its little buddy Mali Ston sit 50 km northwest of Dubrovnik on an ' +
      'isthmus that connects the Pelješac Peninsula with the mainland. Ston was, and it still is an important ' +
      'salt-producing town. Its economic importance to Dubrovnik led, in 1333, to the construction of a 5.5 km ' +
      'wall, one of the longest fortifications in Europe.</p> <p>Pelješac Peninsula is known as Croatia\'s finest ' +
      'wine region. Wines grown on Pelješac are primarily red wines with Dingač being the most famous one. Another' +
      ' premium quality wine is Postup, sometimes called the younger brother of Dingač.</p> <p>Red wine, oysters ' +
      'from the Mali Ston bay and highest quality extra virgin olive oil are must taste products for every visitor.</p>',
    shortName: 'peljesac',
    image:`${GlobalVariables.imagesPath}/things_to_do/peljesac.png`,
    visible: true
  },
  {
    language: 'eng',
    header: 'Mljet Island',
    subHeader: 'Mythical oasis of tranquillity',
    shortDescription: 'Untouched nature, the island\'s mysticism, olive groves, vineyards and rich forests are ideal ' +
      'places to peacefully enjoy the pristine beauty of the natural surroundings.',
    content: '<p>Mljet is one of the most seductive of all the Adriatic islands, an unspoilt oasis of tranquillity, that ' +
      'according to legend, captivated Odysseus for seven years.</p> <p>Much of the island is covered by forests, and the' +
      ' rest is dotted with fields, vineyards, and small villages. The western tip contains Mljet National Park, where you' +
      ' will find the lush vegetation, pine forests and spectacular saltwater lakes exceptionally scenic.</p>',
    shortName: 'mljet',
    image:`${GlobalVariables.imagesPath}/things_to_do/mljet.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Otok Mljet',
    subHeader: 'Najzeleniji hrvatski otok',
    shortDescription: 'Okružen misticizmom, maslinicima, vinogradima i bogatim šumama. Mljet je idealno mjesto za mirno ' +
      'uživanje u netaknutoj ljepoti prirodnog okoliša.',
    content: '<p>Mljet je jedan od najatraktivnijih otoka na Mediteranu.</p><p>Velik dio otoka prekriven je šumama, a ' +
      'ostatak je obilježen poljima, vinogradima i malim selima. Zapadni vrh sadrži Nacionalni park Mljet, gdje su bujna ' +
      'vegetacija, borove šume i spektakularna morska jezera iznimno slikovita. To je netaknuta oaza mira koja je, prema ' +
      'legendi, osvojila Odiseja sedam godina.</p>',
    shortName: '',
    image:`${GlobalVariables.imagesPath}/things_to_do/mljet`,
    visible: true
  },
  {
    language: 'eng',
    header: 'Korčula Island',
    subHeader: 'Sandy beaches, quiet coves and olive groves',
    shortDescription: 'Korčula enchants the senses with its timeless beauty and casts an everlasting spell of wonder on those who tread ' +
      'upon its ancient stones.',
    content: '<p>Rich in vineyards, olive groves and small villages, the island of Korčula, harbouring a glorious old town, ' +
      'is the sixth-largest Adriatic island, stretching nearly 47 km in length. Dense woods led the original Greek settlers ' +
      'to call the island Korkyra Melaina (Black Korčula).</p><p>Traditions are still alive on Korčula, with age-old religious' +
      ' ceremonies, folk music and dances still being performed to the delight of an ever-growing influx of tourists. Moreška ' +
      'is a must-see performance of sword dance.</p><p>Arguably, the best of all Croatian white wines are produced from pošip' +
      ' grapes, which are only grown here.</p><p>It is also to believe, that one of the greatest explorers, Marco Polo was born in Korčula.</p>',
    shortName: 'korcula',
    image:`${GlobalVariables.imagesPath}/things_to_do/korcula.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Otok Korčula',
    subHeader: 'Vino, plaže, i tradicija',
    shortDescription: 'Korčula očarava bezvremenskom ljepotom, minula vremena utisnula su trag u kamenu koji priča. ' +
      'Korčula se diči živim tradicijama koje njeguje.',
    content: '<p>Obogaćen vinogradima, maslinicima i malim selima, te sa prekrasnim starim gradom, otok Korčula je šesti po ' +
      'veličini jadranski otok koji se proteže duž gotovo 47 km. Gusta šuma navela je izvorne grčke doseljenike da nazovu ' +
      'otok Korkyra Melaina (crna Korčula). </p><p>Tradicija je i dalje živa na Korčuli, sa starim vjerskim obredima, ' +
      'narodnom glazbom i plesovima koji se još uvijek izvode na užitak sve većeg priljeva turista. </p><p>Vjerojatno ' +
      'najbolje od svih hrvatskih bijelih vina proizvodi se od grožđa Pošipa koje se ovdje uzgaja. </p><p>Također treba ' +
      'vjerovati da je na Korčuli rođen Marko Polo, jedan od najvećih istraživača.</p>',
    shortName: 'korcula',
    image:`${GlobalVariables.imagesPath}/things_to_do/korcula.png`,
    visible: true
  },
  {
    language: 'eng',
    header: 'Elafiti Islands',
    subHeader: 'A magical corner of the Adriatic',
    shortDescription: 'The islands’ lush vegetation paired with the blue of the sea and the sky makes for the most beautiful' +
      ' and unique locations with preserved nature.',
    content: '<p>A day trip to one of the islands in this archipelago northwest of Dubrovnik makes a perfect escape from the ' +
      'summer crowds. Only the three largest – Koločep, Lopud and Šipan – are permanently inhabited.</p><p>The islands get ' +
      'their name from the Greek word <i>elafos</i>, meaning deer, due to the large deer population the islands were home ' +
      'to in ancient times. The islands are also famous for the most skilful mariners caming from here.</p><p>All the islands' +
      ' are unique, some have sandy beaches, one is completely uninhabited, while another one treasures a blue cave, but ' +
      'they all have one thing in common - exceptional beauty.</p><hr /> <p class="small_header">For timetable please visit ' +
      'folowing link <a href="http://www.jadrolinija.hr/en/sailing-schedule/" target="_blank">Jadrolinija Sailing Schedule</a></p>',
    shortName: 'elafiti',
    image:`${GlobalVariables.imagesPath}/things_to_do/elafiti.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Elafiti',
    subHeader: 'Tihe uvale, maslinici, i pješčane plaže',
    shortDescription: 'Otoci neviđene ljepote, vječni stražari dubrovačkog mora i obala, otoci neustrašivih kapetana ' +
      'i pomoraca Dubrovačke Republike i Dubrovnika.',
    content: '<p>Jednodnevni izlet na jedan od otoka ovog arhipelaga sjeverozapadno od Dubrovnika je savršen bijeg od ljetnih ' +
      'gužva.</p><p>Samo su tri najveća - Koločep, Lopud i Šipan - trajno nastanjeni.</p><p>Otoci su dobili svoje ime od ' +
      'grčke riječi <i> elafos </i>, što znači jelen. U davna vremena otoci su imali veliku populaciju jelena.</p><p>Elafiti ' +
      'su posebno poznati po najsposobnijim pomorcima koji potijeću odavde.</p><p>Svi otoci imaju jednu zajedničku stvar - ' +
      'iznimnu ljepotu.</p>',
    shortName: 'elafiti',
    image:`${GlobalVariables.imagesPath}/things_to_do/elafiti.png`,
    visible: true
  },
  {
    language: 'eng',
    header: 'Konavle',
    subHeader: '“The Golden Valley” of Dubrovnik',
    shortDescription: 'Konavle is a region with particular natural beauties and contrasts: mountain and valley, green ' +
      'hills and naked stones.',
    content: '<p>In hidden nook between the Bosnian and Montenegrin borders, east of Cavtat, the mountains have taken half a ' +
      'step back, providing a dramatic backdrop to the fertile agricultural region.</p><p>The name Konavle derives from the ' +
      'Latin word "canale", "canalis", in the local dialect "konali", "kanali", what is connected with the viaduct, which, ' +
      'in the times of the Romans, carried water from Vodovađa to Epidaurum, today\'s Cavtat.</p><p>Konavle was of specific ' +
      'importance for the Dubrovnik Republic, not only due to agriculture, stock farming and seafaring, but also because of ' +
      'its strategic value. </p><p>Those who want to experience the authenticity of the Konavle region with its people, and ' +
      'those, who want to experience the idyllic rural life inside Konavle, will certainly find many features of rural tourism ' +
      'that will enable them, at least for a second, to escape from the city noise and revive forgotten images of their childhood.</p>',
    shortName: 'konavle',
    image:`${GlobalVariables.imagesPath}/things_to_do/konavle.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Konavle',
    subHeader: 'Zlatna dolina dubrovnika',
    shortDescription: 'Konavle je područje s posebnim prirodnim ljepotama i kontrastima: planine i doline, zelenih brežuljaka i golog kamena.',
    content: '<p>U skrivenom kutu između BiH i Crnogorske granice, istočno od Cavtata i južno od planina, smještena je plodna ' +
      'poljoprivredna regija Konavle.</p><p>Riječ Konavle potječe od latinske riječi "canale", "canalis" u lokalnom dijalektu ' +
      '"konali" ili "kanali" što znaći vijadukt koji je Rimljanima vodio vodu od Vodovađe do Epidauruma, današnjeg Cavtata</p><p>' +
      'U povijesti Konavle je bilo od posebne važnosti za Dubrovačku Republiku, ne samo zbog poljoprivrede, stočarstva i pomorstva,' +
      ' već i zbog svoje strateške vrijednosti. </p><p>Oni koji žele doživjeti autentičnost Konavala i Konavljanina i oni koji ' +
      'žele doživjeti idilični seoski život u Konavlima sigurno će pronaći mnoge značajke ruralnog turizma koje će im omogućiti, ' +
      'barem na trenutak, pobjeći iz gradske buke i oživjeti zaboravljene slike djetinjstva.</p>',
    shortName: 'konavle',
    image:`${GlobalVariables.imagesPath}/things_to_do/konavle.png`,
    visible: true
  },
  {
    language: 'eng',
    header: 'Mostar',
    subHeader: 'Where eastern and western worlds collide',
    shortDescription: 'World-famous Stari Most (Old Bridge) is Mostar\'s indisputable visual focus. But Mostar has more to offer...',
    content: '<p>At dusk, the lights of numerous mill house restaurants twinkle across gushing streamlets. Narrow ' +
      'Kujundžiluk (\'gold alley\') bustles joyously with trinket sellers. And in between, the Balkans\' most ' +
      'celebrated bridge forms a majestic stone arc between reincarnated medieval towers. It\'s an enchanting ' +
      'scene.</p><p>The Ottoman influence is evident: the smell of shisha, Turkish cafés/restaurants and even the ' +
      'alleys of Kujundžiluk bazaar selling all kinds of metalwork, clothes and jewellery. Then there are some western ' +
      'medieval trademarks like the charming Shire-like houses with wooden balconies, adorned by the round black and ' +
      'white pebbles of the streets and walls.</p><p>The clash of western and eastern worlds, is one of the most ' +
      'interesting features of the city, which one must experience strolling through the city’s narrow little streets.</p>',
    shortName: 'mostar',
    image:`${GlobalVariables.imagesPath}/things_to_do/mostar.png`,
    visible: true
  },
  {
    language: 'cro',
    header: 'Mostar',
    subHeader: 'Gdje se istočni i zapadni svijet susreću',
    shortDescription: 'Svijetski poznati Stari Most glavna je atrakcija. Ali Mostar ima još stvari za ponudit...',
    content: '<p>U sutonu, svijetlja brojnih restorana i mlinica obasjavaju grad.</p><p>Gdje se Kujundžiluk (zlatna ulica) ' +
      'okitila brojnim prodavačima nakita i raznih metala, a najpoznatiji most na Balkanu oblikuje veličanstveni kameni luk ' +
      'spajajući istok sa zapadom.</p><p>Sukob zapadnih i istočnih svjetova jedan je od najzanimljivijih obilježja grada, ' +
      'koje se mora doživjeti šetajući uskim gradskim uličicama.</p>',
    shortName: 'mostar',
    image:`${GlobalVariables.imagesPath}/things_to_do/mostar.png`,
    visible: true
  }
];
