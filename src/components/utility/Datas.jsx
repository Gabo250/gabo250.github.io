import { ConnIcon, HomeIcon, PriceIcon, ServIcon } from "./Icons";

export const menuItems = [
    { name: "Főoldal", href: "#main", icon: <HomeIcon/> }, 
    { name: "Szolgáltatások", href: "#serv", icon: <ServIcon/> },
    { name: "Árak", href: "#price", icon: <PriceIcon/> },
    { name: "Kapcsolat", href: "#conn", icon: <ConnIcon/> }
];

export const priceItems = [
    { name: "Svéd Relaxáló Masszázs", price: {'30 perc': "3 000 Ft", '60 perc': "6 000 Ft", '90 perc': "9 000 Ft"} },
    { name: "Teljes Test - Láb, Hát, Kar, Nyak, Arc", price: {'90 perc': "8 000 Ft"} },
    { name: "Japán Fiatalító Arcmasszázs", price: {'45 perc': "4 000 Ft"} },
    { name: "Metamorf Masszázs", price: {'20 - 60 perc': "5 000 Ft"} },
    { name: "Metamorf Masszázs - Beach Virág terápia és egyéb Kiegészítőkkel", price: {'20 - 60 perc': "10 000 Ft"} },
    { name: "Thai Herbál Labdacs Masszázs", price: {'60 perc': "7 000 Ft"} },
    { name: "Talpcsakra Masszázs", price: {'50 perc': "5 000 Ft"} },
    { name: "Láb - Talpmasszázs", price: {'30 perc': "3 000 Ft"} },
    { name: "Méregtelenítő Reflexzónás Talpmasszázs", price: {'30 perc': "5 000 Ft"} },
    { name: "Cellulit Kezelés Vákum Köpöly", price: {'60 perc': "6 000 Ft"} },
    { name: "Teljes körü Numerológiai Számolás", price: {'Változó': "10 000 Ft"} }
];

export const serviceItems = [
    { 
        name: "Svéd Relaxáló Masszázs", 
        description: `A svéd relaxáló masszázs egy hagyományos masszázstechnika, amely célja a test és az elme mély ellazítása.
                     Finom, simító és gyúró mozdulatokkal dolgozunk az izmokon, enyhítve a feszültséget és csökkentve a stresszt.
                     A kezelés segíti a vérkeringést, lazítja az izmokat és javítja az általános közérzetet.
                     A svéd masszázs gyakran használt módszer a pihenésre és a testi-lelki egyensúly helyreállítására.`,
        img: "./img/swedish_massage.webp",
        alt: "svéd hátmasszázs"
    },

    {
        name: "Thai Herbál Labdacs Masszázs",
        description: `A thai herbál labdacs masszázs egy hagyományos thai terápiás módszer,
                     amely során melegített gyógynövényekkel töltött labdacsokat használunk.
                     A labdacsokat általában gyógynövényekkel, például gyömbérrel, citronellával és kurkumával töltjük meg, majd melegítjük.
                     A meleg labdacsokat különböző mozdulatokkal dörzsöljük, nyomkodjuk a testen,
                     ami segít a gyógynövények illóolajainak felszabadulásában és a test relaxációjában.
                     A Masszázs enyhíti a feszültséget, javítja a vérkeringést, lazítja az izmokat és segíti az energetikai áramlást.
                     A thai herbál labdacs masszázs hozzájárul a test és a lélek harmóniájának eléréséhez,
                     és gyakran alkalmazható stresszkezelésre és általános jóllét javítására.`,
        img: "./img/thai_massage.webp",
        alt: "Thai Labdacs Masszázs"
    },

    {
        name: "Japán Arcmasszázs",
        description: `A japán arcmasszázs egy hagyományos keleti technika, amely az arc és a nyak területét célozza meg.
                     A masszázs során finom és specifikus mozdulatokkal dolgozunk az arcon lévő feszültségeken és blokkokon.
                     Gyengéd mozdulatokkal munkáljuk az arcbőrt, elősegítve a vérkeringést és az izmok ellazulását.
                     Ez a fajta masszázs nem csak az izmokat lazítja, hanem a stresszt is csökkenti, és az arc általános megjelenését is javítja.
                     A japán arcmasszázst gyakran használják a relaxációra, a stressz enyhítésére és az arc revitalizálására.`,
        img: "./img/japan_massage.webp",
        alt: "japán arcmasszázs"
    },

    {
        name: "Köpölyözés",
        description:`A köpölyözés egy hagyományos terápiás módszer, amely során speciális edényeket,
                    köpölyöket használnak a bőrön kifejtett vákuum erejével. A köpölyök által létrehozott vákuum segít a bőr alatti
                    szövetek és izmok stimulálásában, az áramlások javításában. A köpölyök gyógynövényekkel és illóolajokkal vannak átitatva.
                    A kezelés során a köpölyöket a bőrre helyezzük, majd kialakuló vákuum miatt a bőr és a szövetek megemelkednek.
                    Ez a módszer segíthet az izomfeszültség enyhítésében, a vérkeringés serkentésében és a fájdalom csökkentésében.
                    A gyógynövényekből és illóolajokból származó párolgás és az ütögető mozdulatok kombinációja segít ellazítani az izmokat és enyhíteni a feszültséget.
                    `,
        img:"./img/vital_massage.webp",
        alt:"Köpölyök a háton"
    },

    {
        name: "Metamorf Masszázs",
        description: `A metamorf masszázs egy holisztikus terápiás módszer, amely az élet kezdeti időszakának hatását kutatja és enyhíti.
                     A kezelés során finom érintésekkel a reflexzónákat stimuláljuk a lábak, a kéz és a fej területén,
                     amelyek a gerincoszlop mentén helyezkednek el.
                     Az elv az, hogy ezek a területek kapcsolatban állnak az embrió fejlődési időszakával,
                     és az érintés segíthet oldani az ott raktározott blokkokat és feszültségeket.
                     A metamorf masszázs célja az energetikai egyensúly helyreállítása és a lelki, testi és érzelmi feszültségek enyhítése.`,
        img: "./img/metaform_massage.webp",
        alt: "metaform masszázs - láb-kéz-arc"
    },

    {
        name: "Talpcsakra Masszázs",
        description: `A talpcsakra masszázs egy spirituális és energetikai gyakorlat, amely az ayurvéda és a jóga hagyományaiból ered.
                     A talpcsakrák az emberi test alsó részén, a lábak talpánál található energiaközpontok,
                     amelyek kapcsolatban állnak az alapvető életenergiával.
                     Finom érintésekkel és nyomásokkal stimuláljuk ezeket a területeket, segítve az energiák áramlását és a blokkok feloldását.
                     A talpcsakra masszázs célja az energetikai egyensúly helyreállítása, a stressz csökkentése és a test-lélek harmónia elősegítése.`,
        img: "./img/talpcsakra_massage.webp",
        alt: "talpcsakra lábmasszázs"
    },

    {
        name: "Talpmasszázs",
        description: `A talpmasszázs egy terápiás technika, amely a lábak talpán található reflexzónákat stimulálja.
                     A hagyományos kínai és thai gyógyászatban is elterjedt módszer,
                     amely szerint a láb talpa összekapcsolódik a test különböző részeivel és szerveivel.
                     Nyomást, dörzsölést és simítást alkalmazunk a különböző reflexzónákra, segítve a vérkeringést,
                     enyhítve a feszültségeket és javítva az energetikai áramlást a testben.`,
        img: "./img/foot_massage.webp",
        alt: "lábmasszázs"
    }
];