(function(root){
const base='https://fishdb.sinica.edu.tw/';
const fish=[
{id:'qili',name:'奇力魚',other:'䱗、䱗條、白條',latin:'Hemiculter leucisculus',min:.04,max:.14,price:11,bounty:0,kind:'湖區紀錄魚種',edible:true,form:'體形細長而側扁，背部青灰，兩側和腹部銀白，尾鰭呈灰黑色。',habitat:'低海拔溪流、湖泊及水庫的上層水域，常成群活動。',diet:'以藻類為主，也攝食植物碎屑、甲殼類與水生昆蟲。',distribution:'臺灣北、中、南部均有紀錄；日月潭常稱其為奇力魚。',food:'小型食用魚，常用油炸方式料理。',source:base+'taxon/381012-fishdb'},
{id:'crucian',name:'鯽魚',other:'鯽、土鯽',latin:'Carassius auratus',min:.15,max:.7,price:13,bounty:0,kind:'湖區紀錄魚種',edible:true,form:'身體側扁，背部較高，體側覆有明顯鱗片，口邊沒有鯉魚那樣的觸鬚。',habitat:'適應力強，生活於池塘、湖泊及河川緩流等淡水環境。',diet:'雜食，攝食藻類及小型水生動物。',distribution:'歐亞大陸常見淡水魚；日月潭管理處將其列為湖泊型代表魚類。',food:'可作食用魚，遊戲中可煮魚湯。',source:'https://ws.moi.gov.tw/001/Upload/OldFile_TJNP/Encyclopedias/20131126175705795527.pdf'},
{id:'carp',name:'鯉魚',other:'鯉、鮘仔',latin:'Cyprinus carpio',min:.5,max:2.8,price:14,bounty:0,kind:'湖區紀錄魚種',edible:true,form:'體形近紡錘狀，口部有兩對觸鬚，是與鯽魚區分時可觀察的特徵。',habitat:'河川深潭、湖泊等水流較緩或靜止的水域。',diet:'雜食；成魚會攝食螺、蜆、水生昆蟲及植物等。',distribution:'日月潭有分布紀錄，也是廣泛養殖的淡水魚。',food:'可作食用魚，遊戲中用於清蒸料理。',source:'https://life.nthu.edu.tw/~labtcs/HKL2001/biology/fish/c0carpio.htm'},
{id:'grass',name:'草魚',other:'鯇、草鰱',latin:'Ctenopharyngodon idella',min:.8,max:3.5,price:15,bounty:0,kind:'引入魚種',edible:true,form:'體形延長，鱗片較大；與鯉魚相比，口部沒有觸鬚。',habitat:'河川、湖泊與水庫等淡水環境。',diet:'成魚主要攝食水生植物，是常見的草食性養殖魚。',distribution:'原分布於東亞大陸，後被引入多地養殖；日月潭有紀錄。',food:'常見食用魚。遊戲本版尚未提供專用菜譜。',source:'https://www.sunmoonlake.gov.tw/guides/ArticlesFull?a=34'},
{id:'silver',name:'白鰱',other:'鰱、竹葉鰱',latin:'Hypophthalmichthys molitrix',min:.6,max:2.5,price:15,bounty:0,kind:'引入魚種',edible:true,form:'身體銀白而側扁，頭較大，眼睛位置偏低；鰓耙構造適合濾食。',habitat:'大型河川及湖泊的上層水域，活動力強，會跳躍。',diet:'主要濾食浮游植物，也攝取有機碎屑。',distribution:'原分布於東亞大陸的大型水體；臺灣曾引入養殖，日月潭有紀錄。',food:'可食用魚肉；魚膽有毒，不可食用。遊戲將捕獲方式簡化為釣獲。',source:base+'taxon/381013-fishdb'},
{id:'culter',name:'總統魚',other:'翹嘴鮊、曲腰魚',latin:'Culter alburnus',min:.4,max:2,price:18,bounty:0,kind:'湖區紀錄魚種',edible:true,form:'身體延長而側扁，下頜明顯向上突出，形成「翹嘴」的外觀。',habitat:'河川中下游、湖泊等開闊水體的中上層。',diet:'成魚捕食小魚與甲殼類；幼魚也攝食水生昆蟲等。',distribution:'東亞大陸多地有分布，臺灣日月潭及曾文水庫有紀錄。',food:'食用魚，常以清蒸方式料理。',source:base+'taxon/381005-fishdb'},
{id:'snakehead',name:'魚虎',other:'小盾鱧、紅鱧',latin:'Channa micropeltes',min:.8,max:5,price:16,bounty:24,kind:'外來入侵種',edible:true,form:'頭形較扁，尾鰭圓。幼魚體側有明顯深色縱帶及橘色區域，成魚的花紋會改變。',habitat:'湖泊、水庫等靜水水域，也能適應較低溶氧環境。',diet:'肉食，捕食小魚及其他水生動物；幼魚常成群活動。',distribution:'原產東南亞；臺灣日月潭、曾文水庫等地已有繁殖族群，會威脅原有水生動物。',food:'原產地會作食用魚，臺灣也有魚虎料理。遊戲提供薑燒魚虎。',source:base+'taxon/395665-fishdb'},
{id:'jaguar',name:'珍珠石斑',other:'花身副麗魚、淡水石斑',latin:'Parachromis managuensis',min:.2,max:1.6,price:15,bounty:23,kind:'外來入侵種',edible:true,form:'體側扁，口大，身上有不規則深色花紋。雖俗稱石斑，分類上屬慈鯛類，並非海水石斑。',habitat:'河川緩流、湖泊與沼澤，常利用水草或其他遮蔽物。',diet:'肉食性，以小魚為主要食物；親魚具有護幼行為。',distribution:'原產中美洲，臺灣曾引入觀賞及養殖。日月潭與曾文水庫均有外來族群紀錄。',food:'臺灣有供食用及料理的紀錄，遊戲提供清蒸珍珠石斑。',source:'https://fishdb.sinica.edu.tw/mobi/species.php?id=395570'},
{id:'blackporgy',name:'黑鯛',other:'黑棘鯛、烏格、黑格',latin:'Acanthopagrus schlegelii',min:.18,max:2.4,price:20,bounty:0,kind:'海水魚種',edible:true,form:'體高而側扁，體色灰黑並帶銀色光澤，身側可見較淡的深色橫帶。',habitat:'沿岸、港灣與砂泥底水域，也會進入河口半淡鹹水。',diet:'攝食甲殼類、軟體動物及多毛類等底棲動物。',distribution:'分布於西太平洋，臺灣各地海域均有紀錄，澎湖內海也有觀察紀錄；也是基隆市魚。',food:'常見食用魚，可鹽烤或紅燒。',source:base+'taxon/382635-fishdb'},
{id:'yellowfin',name:'黃鰭鯛',other:'黃鰭棘鯛、赤翅仔',latin:'Acanthopagrus latus',min:.15,max:1.5,price:19,bounty:0,kind:'海水魚種',edible:true,form:'體側扁，體色灰白，胸鰭、腹鰭與臀鰭帶黃色，身側有金黃色點狀縱帶。',habitat:'沿岸砂泥底與河口，幼魚常在灣內較平緩的半淡鹹水活動。',diet:'攝食多毛類、軟體動物、甲殼類及小魚。',distribution:'分布於印度至西太平洋，臺灣北部、東北部與西部較常見，基隆有標本紀錄。',food:'食用魚，可清蒸、炭烤或煮湯。',source:base+'taxon/382634-fishdb'},
{id:'terapon',name:'花身雞魚',other:'花身鯻、花身仔、三抓仔',latin:'Terapon jarbua',min:.08,max:.65,price:17,bounty:0,kind:'海水魚種',edible:true,form:'身體呈長橢圓形，體側有三條弓形黑色條帶，背鰭硬棘處有明顯黑斑。',habitat:'較淺的沿岸與河口砂泥底水域，可適應鹽度變化。',diet:'肉食性，攝食小魚、甲殼類與底棲無脊椎動物。',distribution:'廣布印度至太平洋；臺灣沿岸與河口均有紀錄，基隆為常見地區之一。',food:'可食用，能以岸邊手釣捕獲。',source:base+'chi/import_already_pic.php?id=222'},
{"id":"bighead","name":"大頭鰱","other":"鱅、黑鰱","latin":"Hypophthalmichthys nobilis","min":0.8,"max":4.5,"price":16,"bounty":0,"kind":"引入魚種","edible":true,"form":"頭部很大，眼睛位置偏低，身體側扁，體側常有不規則暗色斑紋。","habitat":"大型河川、湖泊與水庫的中上層。","diet":"以濾食浮游動物為主。","distribution":"原分布於東亞大陸，臺灣引入養殖；日月潭與曾文水庫有紀錄。","food":"食用魚，可用魚頭或魚肉煮湯。遊戲尚無專用菜譜。","source":"https://kmweb.moa.gov.tw/theme_data.php?id=310&theme=fisheasy","water":"fresh"},
{"id":"blackcarp","name":"青魚","other":"烏鰡、烏溜","latin":"Mylopharyngodon piceus","min":0.8,"max":4.8,"price":17,"bounty":0,"kind":"引入魚種","edible":true,"form":"身體延長，背部及各鰭顏色較深，口邊沒有觸鬚。","habitat":"河川、湖泊與水庫的中下層水域。","diet":"主要攝食螺、蚌等底棲動物。","distribution":"東亞大陸淡水魚，臺灣曾引入養殖；日月潭與曾文水庫有紀錄。","food":"可作食用魚，遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Mylopharyngodon&spe=piceus","water":"fresh"},
{"id":"mudcarp","name":"鯁魚","other":"鯪、土鯪、鯁仔","latin":"Cirrhinus molitorella","min":0.2,"max":1.6,"price":14,"bounty":0,"kind":"引入魚種","edible":true,"form":"體形延長而側扁，背部呈弧形，嘴部位置偏低，適合在底層覓食。","habitat":"溫暖的淡水河川、湖泊與水庫，常在較下層活動。","diet":"攝食附著藻類及底部有機碎屑等。","distribution":"原分布於東亞大陸，臺灣引入養殖；日月潭與曾文水庫有紀錄。","food":"食用魚，遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Cirrhinus&spe=molitorella","water":"fresh"},
{"id":"marbledgoby","name":"筍殼魚","other":"斑駁尖塘鱧、雲斑尖塘鱧","latin":"Oxyeleotris marmorata","min":0.18,"max":1.8,"price":20,"bounty":0,"kind":"引入魚種","edible":true,"form":"頭大而扁，口較大，體色帶不規則褐色斑塊，可融入水底背景。","habitat":"湖泊、水庫與河川緩流處等淡水水域，常貼近底層活動。","diet":"捕食小魚、蝦蟹等水生動物。","distribution":"原產東南亞，臺灣引入後部分水域有野外族群；曾文水庫有紀錄。","food":"食用魚，常以清蒸料理。遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?id=381663","water":"fresh"},
{"id":"bream","name":"武昌魚","other":"團頭魴、細鱗武昌","latin":"Megalobrama amblycephala","min":0.25,"max":2.1,"price":16,"bounty":0,"kind":"引入魚種","edible":true,"form":"體高且明顯側扁，頭部較小，外形接近菱形或橢圓形。","habitat":"湖泊、河川等水草較多的靜水環境中下層。","diet":"成魚以水生植物為重要食物來源。","distribution":"原產東亞大陸，臺灣曾引入養殖；曾文水庫有紀錄。","food":"食用魚，可清蒸或紅燒，遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?id=381015","water":"fresh"},
{"id":"stripedsnakehead","name":"泰國鱧","other":"線鱧、泰國鱧魚","latin":"Channa striata","min":0.3,"max":2.6,"price":17,"bounty":0,"kind":"引入魚種","edible":true,"form":"體形延長，頭較扁，背鰭和臀鰭較長，體側常有深色斑紋。","habitat":"水草較多、底質有淤泥的靜水或緩流水域。","diet":"伏擊小魚及其他水生動物。","distribution":"分布於亞洲熱帶地區，臺灣引入後有野外族群；曾文水庫調查列為外來魚種。","food":"原產地有食用利用，遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?id=395408","water":"fresh"},
{"id":"redfinculter","name":"紅鰭鮊","other":"白魚、曲腰","latin":"Chanodichthys erythropterus","min":0.2,"max":2.3,"price":17,"bounty":0,"kind":"引入魚種","edible":true,"form":"身體延長而側扁，下頜向上突出，成魚部分腹側魚鰭帶淡橘色。","habitat":"湖泊、池塘或河川緩流處等淡水環境。","diet":"以小魚為主，也攝食水生無脊椎動物。","distribution":"原分布於東亞大陸，臺灣部分河川與湖庫有族群；曾文水庫有紀錄。","food":"可清蒸或油炸。遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Chanodichthys&spe=erythropterus","water":"fresh"},
{"id":"girella","name":"瓜子鱲","other":"黑毛、粗鱗黑毛、菜毛","latin":"Girella punctata","min":0.15,"max":1.6,"price":19,"bounty":0,"kind":"海水魚種","edible":true,"form":"身體側扁，體色較深，鱗片排列明顯，常呈灰黑或褐色。","habitat":"沿岸岩礁區，常在近岸有浪花的水域活動。","diet":"以藻類為重要食物，也攝取小型水生動物。","distribution":"西太平洋魚種，臺灣北部與東北部有分布，基隆有標本紀錄。","food":"可作食用魚，遊戲尚無專用菜譜。","source":"https://digiarch.sinica.edu.tw/content/repository/resource_content.jsp?oid=4352879","water":"sea"},
{"id":"rabbitfish","name":"褐臭肚魚","other":"臭肚、褐籃子魚","latin":"Siganus fuscescens","min":0.08,"max":0.9,"price":17,"bounty":0,"kind":"海水魚種","edible":true,"form":"身體長橢圓而側扁，嘴小，體色褐綠，常散布細小淺色斑點。","habitat":"近岸岩礁、淺灣與其他淺水環境，常成群覓食。","diet":"以藻類等植物性食物為主。","distribution":"印度至西太平洋廣泛分布，臺灣北海岸與基隆有紀錄；也是七股潟湖與澎湖大倉灣海草床的優勢魚種。","food":"魚肉可食用；鰭棘具有毒性，處理時須避開刺傷。遊戲尚無專用菜譜。","source":"https://digiarch.sinica.edu.tw/content/repository/resource_content.jsp?oid=16268","water":"sea"},
{"id":"mullet","name":"烏魚","other":"鯔、正烏、青頭仔","latin":"Mugil cephalus","min":0.2,"max":2.2,"price":18,"bounty":0,"kind":"海水魚種","edible":true,"form":"身體延長，頭部背面較扁，背鰭分為前後兩枚，鱗片明顯。","habitat":"沿岸砂泥底、河口與半淡鹹水環境。","diet":"攝取有機碎屑、微藻及小型水生生物。","distribution":"廣泛分布於溫暖海域；臺灣沿岸有族群，基隆有調查與研究紀錄；七股潟湖為台江國家公園所列優勢魚種。","food":"重要食用魚，也有魚卵加工利用。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=93","water":"sea"},
{"id":"pachyhead","name":"粗首鱲","other":"溪哥仔、紅貓、粗首馬口鱲","latin":"Opsariichthys pachycephalus","min":0.02,"max":0.12,"price":12,"bounty":0,"kind":"臺灣特有種","edible":true,"form":"體延長而側扁，頭較大，口斜裂無鬚。繁殖期雄魚體側有藍綠色橫帶，胸鰭與腹鰭偏橘紅，臀鰭延長。","habitat":"河川中下游、溝渠與水庫中水流較緩的潭區或淺灘。","diet":"幼魚雜食，成魚偏肉食，捕食水生昆蟲、小魚與小蝦。","distribution":"臺灣特有種。日月潭管理處與曾文水庫魚類調查均有紀錄。","food":"俗稱溪哥，可油炸食用。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=144","water":"fresh"},
{"id":"candidia","name":"臺灣鬚鱲","other":"臺灣馬口魚、一枝花","latin":"Candidia barbata","min":0.02,"max":0.1,"price":12,"bounty":0,"kind":"臺灣特有種","edible":true,"form":"體延長而側扁，口邊有短鬚，體側中央有一條明顯的深色縱帶。","habitat":"溪流中上游及水質清澈的湖庫沿岸。","diet":"雜食偏肉食，以水生昆蟲、藻類及小型無脊椎動物為食。","distribution":"臺灣特有種；日月潭管理處以「臺灣馬口魚」之名列為湖區魚種。","food":"小型魚，遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Candidia&spe=barbata","water":"fresh"},
{"id":"topmouth","name":"羅漢魚","other":"麥穗魚、尖嘴仔","latin":"Pseudorasbora parva","min":0.005,"max":0.03,"price":10,"bounty":0,"kind":"湖區紀錄魚種","edible":true,"form":"小型魚，體延長，口小而上位，體側有一條暗色縱紋，鱗片後緣色深呈網紋。","habitat":"湖泊、池塘與溝渠等靜水或緩流環境，常在水草間活動。","diet":"雜食，攝食浮游動物、水生昆蟲幼蟲與藻類。","distribution":"東亞淡水魚，臺灣西部低海拔水域常見；日月潭管理處列為湖區魚種。","food":"體型很小，多作為其他魚的餌料魚。遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Pseudorasbora&spe=parva","water":"fresh"},
{"id":"mingtangoby","name":"明潭吻鰕虎","other":"狗甘仔","latin":"Rhinogobius candidianus","min":0.003,"max":0.02,"price":11,"bounty":0,"kind":"臺灣特有種","edible":true,"form":"體延長，前段圓鈍、後段側扁，體被櫛鱗，尾鰭長圓形；腹鰭癒合成吸盤狀。","habitat":"溪流中上游水域，常貼附石頭底部。","diet":"肉食，以水生昆蟲幼蟲等小型底棲動物為食。","distribution":"臺灣特有種，種小名源自日月潭舊稱（Candidius Lake），模式標本採自日月潭。","food":"體型極小，遊戲中僅供圖鑑紀錄。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=139","water":"fresh"},
{"id":"tilapia","name":"吉利吳郭魚","other":"吉利慈鯛、紅腹吳郭魚","latin":"Coptodon zillii","min":0.1,"max":1.2,"price":14,"bounty":0,"kind":"引入魚種","edible":true,"form":"體側扁而高，體色橄欖綠，體側有數條暗色橫帶，背鰭軟條部有一黑色斑點，腹部常帶紅色。","habitat":"湖泊、水庫及河川緩流處，耐汙且適應力強。","diet":"雜食偏草食，以水生植物、藻類與小型無脊椎動物為食。","distribution":"原產非洲，臺灣引入後野外族群廣布；水利署調查列為曾文水庫優勢種之一。","food":"常見食用魚，遊戲尚無專用菜譜。","source":"https://web.wra.gov.tw/swreeis/cp.aspx?n=8143","water":"fresh"},
{"id":"hypsibarbus","name":"高體高鬚魚","other":"高體鯽、泰國鯽","latin":"Hypsibarbus pierrei","min":0.2,"max":2,"price":16,"bounty":0,"kind":"引入魚種","edible":true,"form":"體高而側扁，背部隆起，鱗片大而呈銀色，口邊有鬚。","habitat":"大型河川與湖庫的中下層水域。","diet":"雜食，攝食植物碎屑、藻類與小型底棲動物。","distribution":"原產湄公河流域，臺灣引入後部分水庫有野外族群；曾文水庫調查有紀錄。","food":"東南亞常見食用魚，遊戲尚無專用菜譜。","source":"https://web.wra.gov.tw/swreeis/cp.aspx?n=8143","water":"fresh"},
{"id":"spottedsnakehead","name":"斑鱧","other":"七星鱧、雷魚","latin":"Channa maculata","min":0.3,"max":2.5,"price":18,"bounty":0,"kind":"湖區紀錄魚種","edible":true,"form":"體延長呈圓筒形，頭扁，體側有不規則黑色大斑塊，尾柄常有眼狀斑。","habitat":"水草茂密的池塘、溝渠與湖庫沿岸靜水區，可直接呼吸空氣。","diet":"肉食性，伏擊小魚、蝦與蛙類。","distribution":"分布於中國南部與臺灣；曾文水庫調查有紀錄。","food":"傳統食用魚，常燉湯。遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Channa&spe=maculata","water":"fresh"},
{"id":"pleco","name":"琵琶鼠","other":"豹紋翼甲鯰、琵琶鼠魚","latin":"Pterygoplichthys pardalis","min":0.2,"max":1.5,"price":11,"bounty":17,"kind":"外來入侵種","edible":true,"form":"身體覆蓋骨板，口部特化為吸盤，背鰭高大似帆，體表有豹紋狀斑點。","habitat":"河川、溝渠及湖庫的底層，能耐低溶氧，常在岸邊土壁挖洞產卵。","diet":"以藻類及底部有機碎屑為主食，也會刮食魚卵。","distribution":"原產南美洲，觀賞魚逸出後在臺灣南部河川大量繁殖；曾文水庫調查有紀錄（舊學名 Liposarcus multiradiatus）。","food":"在臺灣少作食用。遊戲中可繳交賞金。","source":"https://web.wra.gov.tw/swreeis/cp.aspx?n=8143","water":"fresh"},
{"id":"loach","name":"泥鰍","other":"鰍、土鰍","latin":"Misgurnus anguillicaudatus","min":0.01,"max":0.08,"price":11,"bounty":0,"kind":"湖區紀錄魚種","edible":true,"form":"體細長呈圓柱形，口邊有五對鬚，體表滑溜且多黏液。","habitat":"稻田、溝渠、池塘及湖庫泥質底層，可用腸道輔助呼吸。","diet":"雜食，攝食底泥中的小型生物、有機碎屑與藻類。","distribution":"東亞廣布，臺灣低海拔水域常見；曾文水庫調查有紀錄。","food":"傳統食用魚，常煮湯或油炸。遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Misgurnus&spe=anguillicaudatus","water":"fresh"},
{"id":"amurcatfish","name":"鯰魚","other":"鯰、土鯰","latin":"Silurus asotus","min":0.3,"max":3,"price":17,"bounty":0,"kind":"湖區紀錄魚種","edible":true,"form":"體延長無鱗，頭扁平而口寬，成魚有兩對鬚；臀鰭很長並與尾鰭相連。","habitat":"河川中下游、湖泊與水庫的底層，夜間較活躍。","diet":"肉食性，夜間捕食小魚、蝦與水生昆蟲。","distribution":"東亞淡水魚，臺灣西部水域有分布；曾文水庫調查有紀錄。","food":"可作食用魚，遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Silurus&spe=asotus","water":"fresh"},
{"id":"giurinus","name":"極樂吻鰕虎","other":"極樂鰕虎、狗甘仔","latin":"Rhinogobius giurinus","min":0.005,"max":0.03,"price":11,"bounty":0,"kind":"湖區紀錄魚種","edible":true,"form":"小型鰕虎，頭部側面有細小的紅褐色斑紋，腹鰭癒合成吸盤狀。","habitat":"河川中下游、湖庫沿岸的砂礫底質。","diet":"肉食，攝食小型底棲無脊椎動物。","distribution":"東亞廣布，臺灣西部低海拔水域常見；曾文水庫調查有紀錄。","food":"體型極小，遊戲中僅供圖鑑紀錄。","source":"https://fishdb.sinica.edu.tw/chi/species.php?gen=Rhinogobius&spe=giurinus","water":"fresh"},
{"id":"scorpionfish","name":"石狗公","other":"石頭魚、虎魚仔","latin":"Sebastiscus marmoratus","min":0.08,"max":0.6,"price":19,"bounty":0,"kind":"海水魚種","edible":true,"form":"體側扁呈長橢圓形，眼大口大，體色淡紅並散布白色不規則斑點，背鰭硬棘發達。","habitat":"近沿海底棲，生活於較淺的岩礁或砂地，遇敵移動迅速。","diet":"肉食性，主要捕食小型魚類。","distribution":"西太平洋魚種；臺灣主要見於東北角基隆、澳底、宜蘭及澎湖。","food":"肉質細緻，常煮湯。鰭棘基部有毒腺，處理時須小心。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=22","water":"sea"},
{"id":"mezina","name":"黃帶瓜子鱲","other":"黑毛","latin":"Girella mezina","min":0.1,"max":1.2,"price":18,"bounty":0,"kind":"海水魚種","edible":true,"form":"體呈長橢圓形而側扁，吻鈍唇厚，體色灰褐至灰黑；幼魚體側有明顯黃色橫帶。","habitat":"近海岩礁區的中表層，幼魚常見於潮池。","diet":"雜食，以藻類及中小型無脊椎動物為食。","distribution":"西太平洋魚種；東北角可見於基隆八斗子與貢寮的潮間帶及近岸海域。","food":"磯釣人氣魚種，可食用。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=19","water":"sea"},
{"id":"sergeant","name":"條紋豆娘魚","other":"厚殼仔、五線雀鯛","latin":"Abudefduf vaigiensis","min":0.05,"max":0.3,"price":14,"bounty":0,"kind":"海水魚種","edible":true,"form":"體呈卵圓形而側扁，體色灰白至淡黃，體側有五條暗色橫帶。","habitat":"沿岸岩礁區淺水域，常成群聚集。","diet":"以浮游動物與藻類為食；繁殖期雄魚會在礁穴建立領域。","distribution":"印度—太平洋廣布；臺灣各地海域及離島的岩礁海岸均有分布。","food":"小型雜魚，可食用。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=47","water":"sea"},
{"id":"russellsnapper","name":"黑星笛鯛","other":"加規、火點","latin":"Lutjanus russellii","min":0.1,"max":1.5,"price":19,"bounty":0,"kind":"海水魚種","edible":true,"form":"體長橢圓形，體側褐至紅褐色，背鰭軟條部下方有一大黑斑，體側有黃褐色縱帶。","habitat":"成魚多在外礁及岩岸礁區，幼魚可見於河口與紅樹林。","diet":"夜間覓食，以魚類及甲殼類為主。","distribution":"印度—西太平洋魚種；臺灣各地海域均有產，列於東北角常見魚類。","food":"重要食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=106","water":"sea"},
{"id":"fourline","name":"四帶牙鯻","other":"四抓仔、四線雞魚","latin":"Pelates quadrilineatus","min":0.05,"max":0.3,"price":15,"bounty":0,"kind":"海水魚種","edible":true,"form":"體高側扁呈長橢圓形，體銀白，體側有四條平行的黃褐色縱帶，背鰭有大黑斑。","habitat":"沿海及河口區的近底層，常成群溯游。","diet":"偏肉食，攝食小型水生昆蟲及底棲無脊椎動物。","distribution":"印度—西太平洋魚種；臺灣西部、北部及南部的沿海與河口有分布，七股潟湖為優勢魚種。","food":"小型食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=131","water":"sea"},
{"id":"puffer","name":"黑點多紀魨","other":"日本河魨、沙規仔","latin":"Takifugu niphobles","min":0.05,"max":0.3,"price":10,"bounty":0,"kind":"海水魚種","edible":false,"form":"體亞圓筒形，前粗後細，背部紅褐至暗綠並有許多淡色小點，體側有一黑色大胸斑。","habitat":"沿海藻類叢生的岩礁區底層，有時進入河口。","diet":"肉食性，以軟體動物、甲殼類、棘皮動物與小魚為食。","distribution":"西北太平洋魚種；臺灣南部、北部、西部及澎湖等海域有分布。","food":"含河魨毒素，不可食用。遊戲中只能低價回收。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=132","water":"sea"},
{"id":"stripey","name":"柴魚","other":"斑馬、條紋蝶","latin":"Microcanthus strigatus","min":0.03,"max":0.2,"price":15,"bounty":0,"kind":"海水魚種","edible":true,"form":"體高而側扁呈長卵形，體色黃，體側有五條微斜的黑色縱帶，吻尖口小。","habitat":"岩岸礁石區、潟湖及潮池。","diet":"雜食，以海藻及底棲動物為食。","distribution":"太平洋反赤道分布魚種；臺灣分布於北部及東北部海域。","food":"常見於觀賞水族，遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=65","water":"sea"},
{"id":"ladyfish","name":"大眼海鰱","other":"肉鰮、四破、竹魚","latin":"Elops machnata","min":0.2,"max":1.5,"price":16,"bounty":0,"kind":"河口魚種","edible":true,"form":"體細長呈圓筒形，銀白色，眼大，尾鰭深叉，外形像小型的鰱魚。","habitat":"河口、潟湖與沿岸淺水，幼魚會進入半淡鹹水。","diet":"肉食，追捕小魚與甲殼類，上鉤後常躍出水面。","distribution":"印度—西太平洋魚種；關渡自然公園魚類名錄有紀錄。","food":"肉多細刺，常作魚丸原料。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"brackish"},
{"id":"tarpon","name":"大海鰱","other":"海庵、大眼鯤","latin":"Megalops cyprinoides","min":0.3,"max":3,"price":17,"bounty":0,"kind":"河口魚種","edible":true,"form":"體側扁，鱗片大而銀亮，下頜突出，背鰭最後一根軟條延長成絲狀。","habitat":"河口、紅樹林與水流平緩的半淡鹹水，可吞空氣耐低溶氧。","diet":"肉食，捕食小魚與蝦類。","distribution":"印度—西太平洋魚種；關渡自然公園魚類名錄有紀錄。","food":"以遊釣為主，肉多刺。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"brackish"},
{"id":"eel","name":"日本鰻鱺","other":"白鰻、鰻仔","latin":"Anguilla japonica","min":0.1,"max":1.2,"price":23,"bounty":0,"kind":"河口魚種","edible":true,"form":"身體細長如蛇，皮膚光滑覆有細小埋入的鱗片，背鰭、尾鰭與臀鰭相連。","habitat":"在海洋產卵，幼鰻溯河進入河川與河口成長，白天多藏身泥穴或石縫。","diet":"夜間覓食，以小魚、蝦蟹與水生昆蟲為食。","distribution":"東亞洄游性魚類；關渡自然公園魚類名錄有紀錄。野生族群已大幅減少。","food":"重要食用魚。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"brackish"},
{"id":"niletilapia","name":"尼羅口孵非鯽","other":"尼羅吳郭魚","latin":"Oreochromis niloticus","min":0.2,"max":2,"price":14,"bounty":0,"kind":"引入魚種","edible":true,"form":"體側扁，體色灰綠，尾鰭有規則的黑色垂直條紋，是辨認重點。","habitat":"河川下游、湖泊、池塘與半淡鹹水，耐汙耐鹽。","diet":"雜食，以藻類、浮游生物與有機碎屑為主。","distribution":"原產非洲，臺灣引入養殖後廣布野外；關渡自然公園列為外來入侵種。","food":"臺灣最常見的養殖食用魚之一。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"fresh"},
{"id":"mangrovejack","name":"銀紋笛鯛","other":"紅槽","latin":"Lutjanus argentimaculatus","min":0.2,"max":3,"price":20,"bounty":0,"kind":"河口魚種","edible":true,"form":"體長橢圓形，體色紅褐至深褐，上頜前端有兩顆大犬齒。","habitat":"廣鹽性，幼魚在河口、紅樹林與河川下游，成魚移往礁區與較深海域。","diet":"主要捕食魚類與甲殼類。","distribution":"印度—西太平洋魚種；臺灣各地河口與紅樹林均有產。關渡自然公園名錄有紀錄。","food":"重要食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=107","water":"brackish"},
{"id":"scat","name":"金錢魚","other":"金鼓、變身苦","latin":"Scatophagus argus","min":0.05,"max":0.6,"price":17,"bounty":0,"kind":"河口魚種","edible":true,"form":"體高而側扁近圓形，體側散布許多圓形黑斑，像一枚枚錢幣。","habitat":"河口、紅樹林與港灣等半淡鹹水。","diet":"雜食，攝食藻類、有機碎屑與小型無脊椎動物。","distribution":"印度—西太平洋魚種；關渡自然公園魚類名錄有紀錄。","food":"可食用；鰭棘有毒，處理時須小心。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"brackish"},
{"id":"mono","name":"銀鱗鯧","other":"金鯧、銀大眼鯧","latin":"Monodactylus argenteus","min":0.03,"max":0.25,"price":14,"bounty":0,"kind":"河口魚種","edible":true,"form":"體極側扁呈菱形，全身銀亮，背鰭與臀鰭前端帶黃色。","habitat":"河口、紅樹林與港灣，常成群活動。","diet":"攝食浮游生物與有機碎屑。","distribution":"印度—西太平洋魚種；關渡自然公園魚類名錄有紀錄。","food":"小型魚，多作觀賞。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"brackish"},
{"id":"twseabream","name":"臺灣棘鯛","other":"臺灣黃鰭鯛","latin":"Acanthopagrus taiwanensis","min":0.15,"max":1.5,"price":19,"bounty":0,"kind":"臺灣特有種","edible":true,"form":"外形接近黃鰭鯛，體色灰銀，腹鰭與臀鰭帶黃色。","habitat":"河口、內灣與沿岸砂泥底。","diet":"雜食，攝食底棲甲殼類、貝類與多毛類。","distribution":"臺灣特有種；關渡自然公園魚類名錄有紀錄。","food":"食用魚，可清蒸或煮湯。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"brackish"},
{"id":"mudskipper","name":"彈塗魚","other":"花跳、跳跳魚","latin":"Periophthalmus modestus","min":0.005,"max":0.03,"price":11,"bounty":0,"kind":"河口魚種","edible":true,"form":"眼睛突出於頭頂，胸鰭特化成附肢狀，可離水在泥灘上跳躍行走。","habitat":"河口泥灘與紅樹林。","diet":"攝食泥灘上的小型無脊椎動物。","distribution":"東亞沿岸魚種；關渡自然公園與東北角河口泥灘均有紀錄。","food":"體型很小，遊戲中僅供圖鑑紀錄。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=138","water":"brackish"},
{"id":"chelon","name":"前鱗龜鮻","other":"豆仔魚、烏仔","latin":"Chelon affinis","min":0.05,"max":0.5,"price":14,"bounty":0,"kind":"河口魚種","edible":true,"form":"體延長呈紡錘形，頭短圓，脂眼瞼發達，背鰭分為兩枚。","habitat":"沿岸砂泥底、河口及紅樹林，常侵入河川下游，成群洄游。","diet":"以底泥有機碎屑與浮游生物為食。","distribution":"西北太平洋魚種；臺灣除東部外各地沿岸或河口均有，關渡名錄有紀錄。","food":"可食用。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=135","water":"brackish"},
{"id":"walkingcatfish","name":"蟾鬍鯰","other":"泰國土虱","latin":"Clarias batrachus","min":0.2,"max":1.5,"price":14,"bounty":21,"kind":"外來入侵種","edible":true,"form":"體延長無鱗，頭扁平覆骨板，口邊有四對鬚，背鰭與臀鰭很長。","habitat":"溝渠、池塘與河川下游泥底，有輔助呼吸器官，可短暫爬上陸地。","diet":"雜食偏肉食，捕食小魚、蝦與昆蟲。","distribution":"原產東南亞，臺灣引入養殖後逸出；關渡自然公園列為外來入侵種。","food":"可食用。遊戲中可繳交賞金。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"fresh"},
{"id":"swampeel","name":"黃鱔","other":"鱔魚","latin":"Monopterus albus","min":0.05,"max":0.5,"price":17,"bounty":0,"kind":"湖區紀錄魚種","edible":true,"form":"身體細長如鰻，沒有胸鰭與腹鰭，體色黃褐並帶暗色斑點。","habitat":"水田、溝渠與池塘的泥底，會鑽洞居住。","diet":"肉食，夜間捕食小魚、蝌蚪與蚯蚓。","distribution":"東亞與東南亞淡水魚；關渡自然公園魚類名錄有紀錄。","food":"傳統食用魚，如鱔魚意麵。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"fresh"},
{"id":"dwarfsnakehead","name":"七星鱧","other":"七星鱸、山斑","latin":"Channa asiatica","min":0.1,"max":0.8,"price":17,"bounty":0,"kind":"湖區紀錄魚種","edible":true,"form":"體延長呈圓筒形，無腹鰭，尾柄有一個帶白邊的眼狀斑，體側有細小白點。","habitat":"水草多的溝渠、池塘與溪流緩流處。","diet":"肉食，伏擊小魚與蝦類。","distribution":"分布於中國南部與臺灣；關渡自然公園魚類名錄有紀錄。","food":"可食用。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"fresh"},
{"id":"whitecrucian","name":"高身鯽","other":"日本鯽、白鯽","latin":"Carassius cuvieri","min":0.2,"max":1.5,"price":14,"bounty":0,"kind":"引入魚種","edible":true,"form":"外形像鯽魚但體更高，體色銀白。","habitat":"湖泊、池塘與河川下游的靜水區。","diet":"以浮游植物為主的濾食性雜食。","distribution":"原產日本，臺灣引入後野外可見；關渡自然公園名錄有紀錄。","food":"可食用。遊戲尚無專用菜譜。","source":"https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf","water":"fresh"},
{"id":"bluespotgrouper","name":"藍點石斑魚","other":"石斑、白目仔、觀音鱠","latin":"Epinephelus coeruleopunctatus","min":0.3,"max":3,"price":24,"bounty":0,"kind":"海水魚種","edible":true,"form":"體灰褐色，頭與身體散布大白點與許多較暗的小白點；胸鰭大而圓。","habitat":"多石或珊瑚的外礁坡與洞穴附近，深度約 2–65 公尺；幼魚常見於潮池。","diet":"肉食，捕食小魚與甲殼類。","distribution":"印度—西太平洋魚種；臺灣各地海域均有分布，基隆八斗子可見。","food":"高價食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=9","water":"sea"},
{"id":"longfingrouper","name":"玳瑁石斑","other":"石斑、黑貓鱠、花鱠","latin":"Epinephelus quoyanus","min":0.1,"max":0.8,"price":22,"bounty":0,"kind":"海水魚種","edible":true,"form":"體長橢圓形，頭、身體與魚鰭布滿圓形至六角形的暗斑。","habitat":"沿岸岩石或珊瑚礁區，幼魚常在潮間帶。","diet":"以甲殼類與小魚為食。","distribution":"印度—太平洋魚種；東北角和平島、八斗子潮間帶常見。","food":"高價食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=10","water":"sea"},
{"id":"squirrelfish","name":"黑帶棘鰭魚","other":"金鱗甲、鐵甲兵","latin":"Sargocentron rubrum","min":0.05,"max":0.3,"price":16,"bounty":0,"kind":"海水魚種","edible":true,"form":"體紅褐與銀白相間成縱帶，眼大，前鰓蓋骨有長棘。","habitat":"岸礁、海灣與港灣，白天藏在岩洞與裂縫中，可能成群出現。","diet":"夜間捕食底棲蟹、蝦與小魚。前鰓蓋骨棘有毒。","distribution":"印度—西太平洋魚種；臺灣東北部、北部、南部及離島均有分布。","food":"可食用，處理時避開毒棘。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=42","water":"sea"},
{"id":"bigeyebream","name":"異黑鯛","other":"大眼黑鯛","latin":"Monotaxis grandoculis","min":0.2,"max":2.5,"price":21,"bounty":0,"kind":"海水魚種","edible":true,"form":"體褐色帶銀色光澤，眼大，唇部橘黃色，尾鰭分叉。","habitat":"岩礁區或珊瑚礁外緣砂泥地，深度 1–100 公尺。","diet":"肉食，以礁區小魚與無脊椎動物為食。","distribution":"印度—太平洋魚種；臺灣四周沿海均有分布。","food":"食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=66","water":"sea"},
{"id":"fusilier","name":"雙帶烏尾冬","other":"烏尾冬仔","latin":"Pterocaesio digramma","min":0.05,"max":0.3,"price":17,"bounty":0,"kind":"海水魚種","edible":true,"form":"背部藍色、腹面粉紅，體側有兩條金黃色縱帶，尾鰭上下葉末端有黑斑。","habitat":"沿岸礁石陡坡外圍，大群在中層水域快速洄游。","diet":"白天在水層中攝食浮游動物。","distribution":"西太平洋魚種；臺灣各地海域及離島均有分布，是數量最多的常見種。","food":"常見食用魚，多油炸或煮湯。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=74","water":"sea"},
{"id":"monocle","name":"白頸赤尾冬","other":"紅海鯽、赤尾冬仔","latin":"Scolopsis vosmeri","min":0.05,"max":0.3,"price":17,"bounty":0,"kind":"海水魚種","edible":true,"form":"體褐紅色，鰓蓋有一條白色寬紋由頭背延伸至頰部。","habitat":"單獨或數尾在礁岩與礁岩外緣砂地活動，一游一停前進。","diet":"捕食小魚、蝦與軟體動物。","distribution":"印度—西太平洋魚種；臺灣南部、東北部、北部與澎湖頗常見。","food":"食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=75","water":"sea"},
{"id":"goatfish","name":"印度海緋鯉","other":"秋姑、鬚哥","latin":"Parupeneus indicus","min":0.1,"max":0.8,"price":19,"bounty":0,"kind":"海水魚種","edible":true,"form":"體延長呈紡錘形，下頜有一對黃色長鬚，側線上有一金黃斑，尾柄有圓黑斑。","habitat":"沿岸暗礁附近有泥沙的淺水處，單獨或成群出現。","diet":"用鬚探尋砂中的蟹、蝦、多毛類與小魚。","distribution":"印度—太平洋魚種；臺灣各地海域包括基隆、澳底、宜蘭均有分布。","food":"食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=6","water":"sea"},
{"id":"tuskfish","name":"藍豬齒魚","other":"石老、四齒仔、寒鯛","latin":"Choerodon azurio","min":0.2,"max":1.5,"price":21,"bounty":0,"kind":"海水魚種","edible":true,"form":"體長卵圓形，頭部輪廓圓凸，上下頜前端有四顆大犬齒。","habitat":"岩岸礁區水深約 7–80 公尺，白天覓食，夜晚藏身岩穴。","diet":"以犬齒咬碎貝類與甲殼類。","distribution":"西太平洋魚種；臺灣以澎湖及北部、東北部較多。","food":"食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=56","water":"sea"},
{"id":"morwong","name":"背帶鷹斑鯛","other":"咬破布、三康、金花","latin":"Cheilodactylus quadricornis","min":0.1,"max":0.8,"price":18,"bounty":0,"kind":"海水魚種","edible":true,"form":"體淡灰褐色，體側與頭部有八條黑色斜帶，胸鰭肥厚、尾鰭深叉。","habitat":"礁砂混合區底部，常停在礁盤上方伺機捕食。","diet":"以延長的胸鰭鰭條探尋底棲甲殼類。","distribution":"西北太平洋魚種；臺灣主要見於北部及東北部礁岸。","food":"食用魚。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=154","water":"sea"},
{"id":"wrasse","name":"雲斑海豬魚","other":"四齒仔、鸚仔","latin":"Halichoeres hortulanus","min":0.05,"max":0.4,"price":16,"bounty":0,"kind":"海水魚種","edible":true,"form":"體延長側扁，吻尖，上頜有四枚犬齒，體色斑斕。","habitat":"沿岸礁區、礁砂混合區與潟湖。","diet":"捕食底棲小型無脊椎動物。","distribution":"印度—太平洋魚種；臺灣東北部、北部及各離島均有分布。","food":"可食用。遊戲尚無專用菜譜。","source":"https://digifish.biodiv.tw/northeast_detail.php?id=24","water":"sea"},
{"id":"largescalemullet","name":"大鱗鮻","other":"豆仔魚、烏仔、粗鱗烏（澎湖）","latin":"Planiliza macrolepis","min":0.05,"max":0.45,"price":14,"bounty":0,"kind":"河口魚種","edible":true,"form":"身體前段圓筒形、後段側扁，吻短口小，體背灰綠、體側銀白，鱗片明顯較大。","habitat":"幼魚在海中成長後移入河口，多棲息於海水與鹹淡水交界處，常成群在水面或淺水處游動。","diet":"以底層淤泥中的有機物與附著藻類為食。","distribution":"印度—西太平洋魚種；臺灣各河川河口均有，澎湖也有紀錄。台江國家公園列為七股潟湖的優勢魚種。","food":"小型鯔科魚類，俗稱豆仔魚，可食用。遊戲尚無專用菜譜。","source":"https://catalog.digitalarchives.tw/item/00/03/4c/31.html","water":"brackish"},
{"id":"greenbackmullet","name":"綠背鮻","other":"綠背龜鮻、豆仔魚","latin":"Planiliza subviridis","min":0.08,"max":0.8,"price":15,"bounty":0,"kind":"河口魚種","edible":true,"form":"身體延長呈紡錘形，背部暗綠、體側銀白，尾鰭邊緣黑色；鱗片隨成長由圓鱗轉為櫛鱗。","habitat":"沿岸砂泥底海域，也常出現在河口、紅樹林等半淡鹹水區並上溯河川下游，群棲洄游。","diet":"以底泥中的有機碎屑及水層浮游生物為食。","distribution":"印度—西太平洋魚種，北至日本南部；臺灣除東部外各地海域均有。台江國家公園列為七股潟湖的優勢魚種。","food":"可食用。遊戲尚無專用菜譜。","source":"https://market.cloud.edu.tw/resources/web/1757200","water":"brackish"},
{"id":"gizzardshad","name":"日本海鰶","other":"扁屏仔、油魚、海鯽仔","latin":"Nematalosa japonica","min":0.02,"max":0.12,"price":12,"bounty":0,"kind":"河口魚種","edible":false,"form":"體側扁而纖細，腹緣有一列稜鱗，下頜向外展開；海鰶屬的背鰭最後一根軟條延長成絲。","habitat":"河口、沿岸與潟湖，水深約 0～20 公尺。","diet":"在大肚溪口是優勢魚種，研究推估產卵期為 2 到 4 月；食性資料待查。","distribution":"日本至南海；臺灣西部、南部、北部及澎湖有紀錄。台江國家公園列為七股潟湖的優勢魚種。","food":"臺灣魚類資料庫同時列有食用與有毒註記，遊戲不設料理。","source":"https://fishdb.sinica.edu.tw/eng/species.php?id=380960","water":"brackish"},
{"id":"redseabream","name":"嘉鱲","other":"嘉鱲魚、加臘、正鯛、真鯛","latin":"Pagrus major","min":0.2,"max":2.5,"price":21,"bounty":0,"kind":"海水魚種","edible":true,"form":"體長橢圓而側扁，上下頜略向前突；體色淡粉紅帶紫褐，體側散布藍色小點，尾鰭後緣黑色。","habitat":"成魚多在水深 30～200 公尺的礁區底層；幼魚生活在淺水的藻場與岩礁，兩三年後才移往深處。","diet":"攝食甲殼類、小魚、貝類與頭足類，強壯的牙齒能咬碎蝦蟹硬殼。","distribution":"西北太平洋，由南海東北部至日本；澎湖海域有觀察紀錄。","food":"高級食用魚，臺灣俗諺「五鮸六嘉鱲」把它列為名貴海魚之一。遊戲尚無專用菜譜。","source":"https://knowledge.taibif.tw/node/844","water":"sea"},
{"id":"sarba","name":"黃錫鯛","other":"平鯛、枋頭、邦頭（澎湖）","latin":"Rhabdosargus sarba","min":0.15,"max":1.8,"price":20,"bounty":0,"kind":"海水魚種","edible":true,"form":"體高側扁的鯛類，頭部與身體銀黑色帶光澤，體側沒有金色縱線。","habitat":"珊瑚礁、沿岸、河口與底層，水深約 1～60 公尺；幼魚成長時會從近岸淺灘移往海草床。","diet":"河口研究顯示幼魚以水生植物與絲狀藻為主，也吃雙殼貝與端足類。","distribution":"印度—西太平洋；臺灣西部、南部、北部及澎湖均有。澎湖縣政府長年放流黃錫鯛魚苗。","food":"澎湖重要的沿岸食用魚。遊戲尚無專用菜譜。","source":"https://fishdb.sinica.edu.tw/eng/species.php?id=382643","water":"sea"},
{"id":"coioides","name":"點帶石斑","other":"點帶石斑魚、紅花、青斑","latin":"Epinephelus coioides","min":0.3,"max":3.5,"price":23,"bounty":0,"kind":"海水魚種","edible":true,"form":"體長橢圓、側扁粗壯，頭背黃褐、腹部較淡，身體與鰭上布滿橘褐或紅色斑點；常與瑪拉巴石斑混淆。","habitat":"偏好水質較混濁的沿岸礁區，幼魚常在沙泥底的河口或沼澤區活動；具雌先熟的性轉變。","diet":"肉食性，以魚類及甲殼類為主。","distribution":"印度—西太平洋，北至日本南部、南至澳洲；臺灣以西南部海域最多，澎湖也有標本紀錄。","food":"重要食用與養殖魚種，人工養殖技術成熟。遊戲尚無專用菜譜。","source":"https://kmweb.moa.gov.tw/subject/subject.php?id=21773","water":"sea"},
{"id":"emperor","name":"青嘴龍占","other":"青嘴、尖嘴仔（澎湖）","latin":"Lethrinus nebulosus","min":0.2,"max":3,"price":21,"bounty":0,"kind":"海水魚種","edible":true,"form":"體長橢圓、吻較尖；成魚淡灰褐色，眼下有三條放射狀藍線，鱗片各有一個藍色小點。幼魚有黃色縱帶，成長後消失。","habitat":"珊瑚礁與岩礁邊緣、紅樹林及海草或藻床，水深約 10～75 公尺，單獨或小群活動。","diet":"攝食軟體動物、甲殼類與小魚。","distribution":"印度—西太平洋，北至日本南部；臺灣沿岸與澎湖海域均有，是大倉灣海草床調查的優勢魚種之一。","food":"澎湖常見的食用魚。遊戲尚無專用菜譜。","source":"https://market.cloud.edu.tw/resources/web/1757108","water":"sea"}
];
const regions=[{id:'sunmoon',name:'日月潭',area:'臺灣・南投',lat:23.856,lon:120.915,water:'淡水湖泊',desc:'日月潭湖區，奇力魚、曲腰魚與多種引入魚類在潭中生活。',pool:{qili:18,crucian:14,carp:11,grass:7,silver:5,culter:5,snakehead:5,jaguar:5,bighead:5,blackcarp:4,mudcarp:5,pachyhead:6,candidia:4,topmouth:4,mingtangoby:2},source:'https://www.sunmoonlake.gov.tw/guides/ArticlesFull?a=34'},
{id:'zengwen',name:'曾文水庫',area:'臺灣・嘉義／臺南',lat:23.269,lon:120.548,water:'曾文溪水系・水庫',desc:'曾文溪上的水庫。包含湖庫中上層與底層魚類，另有引入魚種族群。',pool:{tilapia:12,redfinculter:9,stripedsnakehead:8,snakehead:10,jaguar:7,culter:4,carp:5,crucian:3,grass:3,bighead:4,silver:3,blackcarp:3,mudcarp:3,marbledgoby:3,bream:3,qili:4,pachyhead:3,hypsibarbus:3,spottedsnakehead:2,pleco:4,loach:1,amurcatfish:2,giurinus:1},source:'https://web.wra.gov.tw/swreeis/cp.aspx?n=8143'},
{id:'qigu',name:'七股潟湖',area:'臺灣・臺南七股',lat:23.12,lon:120.08,water:'潟湖・半淡鹹水',desc:'臺灣最大的潟湖，外側沙洲擋住海浪，潟湖內風浪平靜，豆仔魚等鯔科魚群最常見。魚種依台江國家公園所列七股潟湖優勢魚種。',pool:{largescalemullet:19,greenbackmullet:19,gizzardshad:5,fourline:9,rabbitfish:29,mullet:19},source:'https://www.tjnp.gov.tw/ch/sglarticle/cetaceans-and-fish'},
{id:'guandu',name:'關渡',area:'臺灣・臺北',lat:25.118,lon:121.462,water:'河口・半淡鹹水',desc:'淡水河與基隆河交會的河口濕地，淡水、半淡鹹水與海水魚種混雜。',pool:{mullet:8,terapon:8,yellowfin:7,tilapia:6,niletilapia:8,pleco:5,walkingcatfish:4,crucian:3,whitecrucian:2,carp:4,redfinculter:3,chelon:8,ladyfish:4,tarpon:3,eel:2,mangrovejack:3,scat:4,mono:3,twseabream:4,mudskipper:3,swampeel:2,dwarfsnakehead:2,stripedsnakehead:2,giurinus:2},source:'https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf'},
{id:'keelung',name:'基隆沿岸',area:'臺灣・基隆',lat:25.157,lon:121.77,water:'海水沿岸',desc:'基隆近岸海域，涵蓋岩礁、砂泥底與河口環境。',pool:{blackporgy:15,yellowfin:12,terapon:12,girella:8,rabbitfish:10,mullet:7,scorpionfish:8,mezina:6,sergeant:6,russellsnapper:4,fourline:6,puffer:4,stripey:2},source:'https://www.klcg.gov.tw/tw/klcg1/3174.html'},
{id:'penghu',name:'澎湖內海',area:'臺灣・澎湖',lat:23.56,lon:119.58,water:'海水內灣',desc:'馬公、白沙與西嶼環抱的內海，淺灘、海草床與礁岩交錯，鯛類與石斑出沒。',pool:{rabbitfish:66,emperor:10,sarba:11,blackporgy:7,redseabream:3,coioides:3},source:'https://kmweb.moa.gov.tw/subject/subject.php?id=61718'},
{id:'longdong',name:'龍洞岩岸',area:'臺灣・新北貢寮',lat:25.115,lon:121.918,water:'海水岩礁',desc:'東北角的岩岸礁區，水較深、礁體多，石斑與礁岩魚類出沒。',pool:{bluespotgrouper:5,longfingrouper:7,squirrelfish:7,bigeyebream:5,fusilier:9,monocle:8,goatfish:7,tuskfish:4,morwong:6,wrasse:8,russellsnapper:5,scorpionfish:7,mezina:6,sergeant:6,stripey:3,blackporgy:4,puffer:3},source:'https://digifish.biodiv.tw/northeast.php'}];
const baits=[{"id":"dough","name":"麵團","cost":6,"weed":0.12,"desc":"適合草食、雜食與部分濾食魚。"},{"id":"worm","name":"蚯蚓","cost":9,"weed":0.12,"desc":"適合部分淡水魚、淡水蝦，以及吃沙蠶的海灣底棲魚。"},{"id":"shrimp","name":"蝦肉","cost":12,"weed":0.12,"desc":"適合部分河口魚、沿岸魚、頭足類與海蝦，少數淡水魚也適用。"},{"id":"meat","name":"小魚","cost":15,"weed":0.12,"desc":"適合捕食魚、章魚與海蟹。"},{"id":"none","name":"空鉤","cost":0,"free":true,"weed":1,"desc":"不掛魚餌，容易勾起水草。"}];
// 0.13 recipes: real dishes only, sources in SOURCES.md. `fish` is one ID, a list of interchangeable IDs, or '*' for any edible fish.
// Effect follows the cooking method (see cookingMethods); tier sets amount, casts and seasoning, filled in near the end of this file.
const recipes=[
{id:'panfry',name:'煎魚',prefix:'煎',fish:'*',cuisine:'basic',origin:'各地家常',method:'fry',tier:'basic',about:'選用列入料理的魚種，魚身抹鹽、拭乾，下鍋把兩面煎到金黃。'},
{id:'fried',name:'酥炸奇力魚',fish:'qili',cuisine:'taiwan',origin:'臺灣・日月潭',method:'fry',tier:'home',about:'奇力魚體型小，日月潭一帶常整尾裹粉油炸，炸酥後連骨一起吃。'},
{id:'ginger',name:'三杯魚虎',fish:'snakehead',cuisine:'taiwan',origin:'臺灣・日月潭、曾文水庫',method:'fry',tier:'home',about:'日月潭與曾文水庫周邊餐館把移除的魚虎做成料理。魚虎肉質緊實、刺少，業者推薦做三杯或紅燒。'},
{id:'jaguar-steam',name:'清蒸珍珠石斑',fish:'jaguar',cuisine:'taiwan',origin:'臺灣',method:'steam',tier:'home',about:'珍珠石斑在臺灣有食用紀錄，常整尾清蒸，鋪上蔥絲、薑絲。'},
{id:'president-steam',name:'清蒸總統魚',fish:['culter','redfinculter'],cuisine:'taiwan',origin:'臺灣・日月潭',method:'steam',tier:'classic',about:'日月潭湖畔餐館的招牌菜，整尾清蒸，鋪蔥、薑上桌。當地「總統魚」的稱呼可指翹嘴鮊或紅鰭鮊，相傳因蔣中正在日月潭常吃這道魚而得名。'},
{id:'fishhead-pot',name:'砂鍋魚頭',fish:'bighead',cuisine:'taiwan',origin:'臺灣・嘉義',method:'soup',tier:'classic',about:'嘉義名菜。大頭鰱魚頭先油炸，再與沙茶、白菜、豆皮等在砂鍋裡燉煮；傳統用的是曾文水庫的大頭鰱。'},
{id:'marbled-steam',name:'清蒸筍殼魚',fish:'marbledgoby',cuisine:'taiwan',origin:'臺灣',method:'steam',tier:'home',about:'筍殼魚肉質細嫩，臺灣多整尾清蒸，鋪上蔥絲、薑絲；蒸的時間不宜太久，才保得住鮮味。'},
{id:'eel-noodle',name:'鱔魚意麵',fish:'swampeel',cuisine:'taiwan',origin:'臺灣・臺南',method:'fry',tier:'classic',about:'臺南名吃。鱔魚片大火快炒，再和意麵一起勾芡，湯汁酸甜，鱔魚口感爽脆。'},
{id:'soup',name:'鯽魚湯',fish:'crucian',cuisine:'china',origin:'中國各地',method:'soup',tier:'home',about:'鯽魚兩面煎香後加水大火熬煮，湯色轉為奶白，是中國各地常見的家常湯。'},
{id:'steamed',name:'清蒸鯉魚',fish:'carp',cuisine:'china',origin:'中國各地',method:'steam',tier:'home',about:'整尾鯉魚鋪上薑絲、蔥段清蒸，起鍋後淋上熱油與醬油。'},
{id:'sweetsour-carp',name:'糖醋鯉魚',fish:'carp',cuisine:'china',origin:'中國・山東',method:'fry',tier:'classic',about:'魯菜濟南派的代表菜。鯉魚整尾炸到外焦裡嫩，再澆上糖醋汁；以黃河鯉魚為上，正宗做法不用番茄醬。'},
{id:'westlake',name:'西湖醋魚',fish:'grass',cuisine:'china',origin:'中國・杭州',method:'fry',tier:'classic',about:'杭幫菜名菜，以西湖孤山樓外樓的最有名。草魚先餓養去土味，煮熟後澆上糖醋汁，考驗廚師用便宜的草魚做出好味道。'},
{id:'wuchang-steam',name:'清蒸武昌魚',fish:'bream',cuisine:'china',origin:'中國・武漢',method:'steam',tier:'classic',about:'武漢的著名地方菜，以武昌魚為主料，配黃酒、薑絲清蒸。'},
{id:'baoyu',name:'上海爆魚',fish:'blackcarp',cuisine:'china',origin:'中國・上海',method:'fry',tier:'classic',about:'江南的年節菜。青魚切塊醃過後下油鍋炸，再浸入甜鹹滷汁；經過醃、炸、滷，放得比較久，可以冷吃。'},
{id:'stuffed-dace',name:'煎釀鯪魚',fish:'mudcarp',cuisine:'china',origin:'中國・廣東',method:'fry',tier:'classic',about:'廣東菜。取出鯪魚肉剁成魚膠，調味後釀回完整的魚皮裡，再下鍋煎香。'},
{id:'snakehead-soup',name:'生魚湯',fish:'spottedsnakehead',cuisine:'china',origin:'香港・廣東',method:'soup',tier:'home',about:'廣東和香港人把鱧魚叫做「生魚」。生魚用薑煎香後，與瘦肉、蔬果一起煲湯；民間常在術後喝生魚湯進補。'},
{id:'catfish-eggplant',name:'鯰魚燉茄子',fish:'amurcatfish',cuisine:'china',origin:'中國・東北',method:'soup',tier:'home',about:'東北家常燉菜。鯰魚洗去黏液後，和茄子用大醬或豆瓣醬一起燉，民間有「鯰魚燉茄子，撐死老爺子」的說法。'},
{id:'kabayaki',name:'蒲燒鰻',orig:'鰻の蒲焼',fish:'eel',cuisine:'japan',origin:'日本',method:'fry',tier:'classic',about:'鰻魚剖開去骨，串上竹籤，邊烤邊刷以醬油為底的甜鹹醬汁。不刷醬直接烤的叫「白燒」。'},
{id:'yanagawa',name:'柳川鍋',orig:'柳川鍋',fish:'loach',cuisine:'japan',origin:'日本・東京',method:'soup',tier:'classic',about:'江戶時代流傳下來的泥鰍鍋。剖開的泥鰍和削成薄片的牛蒡，用醬油、味醂調成的湯汁煮過，最後淋蛋液收尾。'},
{id:'chinu-shioyaki',name:'鹽烤黑鯛',orig:'クロダイの塩焼き',fish:'blackporgy',cuisine:'japan',origin:'日本',method:'fry',tier:'home',about:'黑鯛在日本關西稱為「チヌ」，生魚片、鹽烤、煮付都常見。鹽烤是整尾抹鹽後直接火烤。'},
{id:'kasago-nitsuke',name:'煮付石狗公',orig:'カサゴの煮付け',fish:'scorpionfish',cuisine:'japan',origin:'日本',method:'soup',tier:'home',about:'石狗公在日本叫カサゴ，白肉緊實。煮付是用醬油、味醂、酒和糖把整尾魚煮到入味；也常煮味噌湯或炸成唐揚。'},
{id:'gurukun-karaage',name:'唐揚烏尾冬',orig:'グルクンの唐揚げ',fish:'fusilier',cuisine:'japan',origin:'日本・沖繩',method:'fry',tier:'home',about:'雙帶烏尾冬就是沖繩縣魚「グルクン」，當地常整尾裹粉油炸，也做生魚片和鹽烤。'},
{id:'taimeshi',name:'鯛魚飯',orig:'鯛めし',fish:'redseabream',cuisine:'japan',origin:'日本',method:'fry',tier:'classic',about:'嘉鱲（真鯛）先烤香，整尾放進米裡，用醬油、酒、昆布高湯一起炊煮，上桌後再拆肉拌飯。'},
{id:'kibinago-sashimi',name:'丁香魚刺身',orig:'キビナゴの刺身',fish:'silversprat',cuisine:'japan',origin:'日本・鹿兒島',method:'fry',tier:'home',about:'鹿兒島的鄉土料理。新鮮的丁香魚用手剖開，排成菊花狀，沾甜味的醋味噌吃。丁香魚很快就不新鮮，多在產地現吃。'},
{id:'pla-pao',name:'泰式鹽烤魚',orig:'ปลาเผา',fish:['stripedsnakehead','niletilapia'],cuisine:'seasia',origin:'泰國',method:'fry',tier:'home',about:'泰國常見的炭烤魚，傳統用鱧魚或吳郭魚。魚腹塞入香茅、檸檬葉，魚身抹上一層鹽殼，烤好後配海鮮沾醬和糯米飯。'},
{id:'pla-duk-fu',name:'涼拌酥炸鯰魚',orig:'ยำปลาดุกฟู',fish:'walkingcatfish',cuisine:'seasia',origin:'泰國',method:'fry',tier:'classic',about:'泰國的下酒菜。鬍鯰烤熟後拆成細絲，下鍋炸成蓬鬆酥脆的魚鬆，配青芒果絲、紅蔥、辣椒和花生一起吃。'},
{id:'kretzer',name:'杏仁奶油煎河鱸',orig:'Kretzerfilet',fish:'perch',cuisine:'europe',origin:'德國・博登湖',method:'fry',tier:'home',about:'博登湖畔餐館的常見菜。河鱸在當地叫 Kretzer、瑞士稱 Egli，魚排煎熟後淋上杏仁奶油，配馬鈴薯。'},
{id:'smoked',name:'煙燻魚',prefix:'煙燻',orig:'Räucherfisch',fish:['herring','browntrout','blaufelchen'],cuisine:'europe',origin:'德國',method:'fry',tier:'classic',about:'德國傳統的魚料理，也是保存魚肉的方法。鯡魚整尾帶頭煙燻就是「Bückling」，鱒魚和博登湖白鮭也常拿來燻。煙燻時魚已經熟了，可以直接冷吃，常配麵包。'},
{id:'forelle-blau',name:'藍煮鱒魚',orig:'Forelle blau',fish:'browntrout',cuisine:'europe',origin:'德語區',method:'steam',tier:'classic',about:'德語區的經典做法。新鮮整尾魚不刮掉表皮黏液，放進加醋的熱湯裡煮，魚皮會轉成藍色，因此得名。'},
{id:'green-herring',name:'煎鮮鯡',orig:'Grüne Heringe gebraten',fish:'herring',cuisine:'europe',origin:'德國・波羅的海沿岸',method:'fry',tier:'home',about:'德國北部把沒有醃漬的新鮮鯡魚叫做「綠鯡魚」。依磨坊主婦式裹麵粉、用奶油煎，配煎馬鈴薯和洋蔥圈。'},
{id:'karpfen-fraenkisch',name:'法蘭肯炸鯉魚',orig:'Karpfen fränkisch',fish:'carp',cuisine:'europe',origin:'德國・法蘭肯',method:'fry',tier:'classic',about:'德國法蘭肯地區的秋冬名菜。鯉魚連頭帶鰭縱剖成兩半，裹上麵粉下油鍋炸，炸酥的魚鰭也能吃。當地習慣在名稱帶 r 的月份（9 月到隔年 4 月）吃鯉魚，艾施谷一帶有自家魚塘的餐館秋天最當令。'},
{id:'quenelle',name:'狗魚丸',orig:'Quenelles de brochet',fish:'pike',cuisine:'europe',origin:'法國・里昂',method:'steam',tier:'classic',about:'法國里昂與南蒂阿的名菜。白斑狗魚肉打成泥，拌入蛋與奶油塑成橢圓，下水煮熟，常配螯蝦醬汁。'}
];
// Upgrade price per level (index = current level). Costs grow ~3x so each tier needs a real fishing session.
const upgrades={rod:{name:'釣竿',costs:[400,1600,5500,16000]},box:{name:'漁獲箱',costs:[300,1200,4000,12000],capacity:[30,60,120,240,360]},sales:{name:'漁獲售價',costs:[200,400,800,1600,3200,6400,12800,25600,51200,102400]}};
// Atlas clues shown before a fish is caught; they never contain the fish's name.
const hints={"qili":"細長銀白的小魚，常成群在湖面上層活動。","crucian":"背部隆起、鱗片明顯，口邊沒有觸鬚的常見湖魚。","carp":"口邊有兩對觸鬚，喜歡在緩流深潭覓食。","grass":"體形延長、鱗片大，成魚幾乎只吃水草。","silver":"頭大眼低，會躍出水面的濾食性大魚。","culter":"下巴明顯上翹，在開闊水域追捕小魚。","snakehead":"幼魚帶橘色縱帶，成魚是湖庫中凶猛的掠食者。","jaguar":"身上有不規則深色花紋，俗名裡帶著海魚的名字卻生活在淡水。","blackporgy":"灰黑色的體高鯛類，是一座港市的市魚。","yellowfin":"胸、腹、臀鰭帶黃色的鯛類，幼魚常在河口出沒。","terapon":"體側有三條弓形黑帶，岸邊手釣就能遇到。","bighead":"頭特別大、身上有暗色斑紋的濾食性大魚。","blackcarp":"體色深暗的大型魚，專挑螺貝來吃。","mudcarp":"嘴巴位置偏低，在水底刮食藻類。","marbledgoby":"頭大而扁，斑駁體色能融入水底。","bream":"外形近菱形的高身魚，喜歡水草多的靜水。","stripedsnakehead":"頭扁、背鰭很長，伏擊在淤泥與水草間。","redfinculter":"下巴上翹，成魚腹側魚鰭帶淡橘色。","girella":"在浪花拍打的岩礁邊啃食藻類的深色魚。","rabbitfish":"嘴小、身上滿是淺色斑點的群游魚，鰭棘有毒。","mullet":"冬季沿岸洄游的魚，魚卵是知名加工品。","pachyhead":"俗稱溪哥，繁殖期雄魚會換上藍綠橫帶與橘紅魚鰭。","candidia":"體側中央有一條深色縱帶的特有小魚。","topmouth":"只有手指大小，口小上位，常躲在水草間。","mingtangoby":"種小名取自湖區舊稱的小型鰕虎，腹鰭像吸盤。","tilapia":"背鰭上有黑色斑點、腹部泛紅，是水庫的優勢種之一。","hypsibarbus":"來自湄公河的高身大鱗魚，口邊有鬚。","spottedsnakehead":"身上布滿黑色大斑塊，躲在水草茂密的靜水區。","pleco":"全身披著骨板、口部像吸盤，在岸邊挖洞產卵。","loach":"滑溜細長，口邊有五對鬚，藏身泥底。","amurcatfish":"無鱗寬口，夜晚才活躍的底層魚。","giurinus":"頭側有紅褐色細紋的小鰕虎，貼在砂礫底上。","scorpionfish":"淡紅色帶白斑、背鰭硬棘帶毒的岩礁底棲魚。","mezina":"幼時身上有一條黃色橫帶，磯釣人常叫牠黑毛。","sergeant":"灰白身體上有五條暗色橫帶的岩礁小魚。","russellsnapper":"背鰭下方有一個大黑斑的笛鯛，夜間覓食。","fourline":"銀白體側有四條平行縱帶，常成群進出河口。","puffer":"受驚會鼓起身體，含有劇毒，不能食用。","stripey":"黃底黑斜紋，像斑馬一樣的潮池小魚。"};
Object.assign(hints,{"largescalemullet":"鱗片特別大的豆仔魚，成群在河口淺水處游動。","greenbackmullet":"背部帶暗綠色、尾鰭鑲黑邊的豆仔魚。","gizzardshad":"身體扁薄，背鰭最後一根軟條拉成細絲的小魚。","redseabream":"粉紅身體散布藍色小點，名列臺灣名貴海魚。","sarba":"銀黑色的鯛類，當地長年放流魚苗。","coioides":"全身布滿橘紅斑點的大型石斑。","emperor":"眼下有三條藍線，常在海草床邊覓食。","ladyfish":"細長銀亮、眼睛很大，上鉤後會躍出水面掙扎。","tarpon":"背鰭最後一根軟條拉成細絲，能吞空氣度過缺氧的水。","eel":"像蛇一樣細長滑溜，生在大海、長在河川。","niletilapia":"尾鰭上有整齊的黑色直條紋，是最常見的養殖魚。","mangrovejack":"紅褐色的掠食者，小時候躲在紅樹林，長大才出海。","scat":"圓圓扁扁，身上散布像錢幣的黑點。","mono":"菱形扁身、通體銀亮，魚鰭前端帶黃。","twseabream":"只產於本島的鯛類，長得很像黃鰭的親戚。","mudskipper":"眼睛長在頭頂，能用胸鰭在泥灘上跳。","chelon":"頭短圓、眼睛蓋著透明脂膜，成群在河口洄游。","walkingcatfish":"口邊四對鬚，能短暫爬上陸地的外來鯰魚。","swampeel":"沒有胸鰭和腹鰭，鑽在水田泥洞裡。","dwarfsnakehead":"尾柄有一個帶白邊的眼狀斑，伏擊在水草間。","whitecrucian":"比常見的鯽更高更白的外來種。","bluespotgrouper":"灰褐身體撒滿大小白點，愛待在礁洞旁。","longfingrouper":"全身布滿六角形暗斑，像玳瑁的花紋。","squirrelfish":"紅白縱帶、大眼睛，鰓蓋上有帶毒的長棘。","bigeyebream":"眼睛很大、嘴唇橘黃的礁區鯛類。","fusilier":"藍背粉腹、兩條金帶，大群在礁外快速巡游。","monocle":"鰓蓋上一道白色寬紋，游一下停一下。","goatfish":"下巴一對黃色長鬚，在砂裡翻找食物。","tuskfish":"嘴前四顆大犬齒，能咬碎貝殼。","morwong":"八條黑色斜帶，胸鰭鰭條像手指般探路。","wrasse":"尖嘴色彩斑斕的礁區小魚，有四枚犬齒。"});
fish.forEach(f=>f.hint=hints[f.id]);
fish.forEach(f=>f.water=f.water||(['blackporgy','yellowfin','terapon'].includes(f.id)?'sea':'fresh'));
// Weather and day-night (0.7). One game day = 60 real minutes; weather changes every 20 minutes per region.
const phases=[{id:'dawn',name:'清晨',from:0},{id:'day',name:'白天',from:10},{id:'dusk',name:'黃昏',from:35},{id:'night',name:'夜晚',from:45}];
const weathers=[{id:'sunny',name:'晴'},{id:'cloudy',name:'陰'},{id:'rain',name:'雨'}];
// Odds in percent for sunny / cloudy / rain; keelung winter uses winterOdds.
const weatherOdds={sunmoon:[50,30,20],zengwen:[50,30,20],guandu:[45,30,25],keelung:[35,30,35],longdong:[35,30,35],qigu:[55,30,15],penghu:[50,35,15]},winterOdds={keelung:[20,30,50]};
// Fish condition multipliers on pool weight. Night-only fish get ×4 at night so the daily average weight stays the same.
const nightOnly={dawn:0,day:0,dusk:0,night:4};
const conditions={eel:{phase:nightOnly,note:'夜晚限定'},amurcatfish:{phase:nightOnly,note:'夜晚限定'},squirrelfish:{phase:nightOnly,note:'夜晚限定'},swampeel:{phase:{night:2},note:'夜晚較常見'},russellsnapper:{phase:{night:2},note:'夜晚較常見'},walkingcatfish:{weather:{rain:2},note:'雨天較常見'},tuskfish:{phase:{night:0},note:'夜晚不出現'},fusilier:{phase:{night:0},note:'夜晚不出現'},mullet:{months:[11,12,1],amount:2,note:'11～1 月較常見'}};
const flavor={
sunmoon:{phase:{dawn:['湖面浮著一層薄霧，對岸的山影還看不清楚。','第一班船還沒開，碼頭邊只有幾個晨跑的人。'],day:['遊湖船來來往往，船尾的浪一路推到岸邊。','陽光照在湖面上，近岸的水草看得一清二楚。'],dusk:['夕陽沉到山後，湖面從金色轉成紫灰。','碼頭的店家開始收攤，湖邊安靜下來。'],night:['四周暗了下來，只剩浮標上的螢光點在水面輕輕晃動。','對岸的燈一盞盞亮起，倒影在湖面拉成長長的光帶。']},weather:{sunny:['雲散開了，湖水透出青綠色。','風很小，湖面平得像一面鏡子。'],cloudy:['雲層壓低，湖面轉成鉛灰色。','天色暗淡，風從湖心吹來，帶點涼意。'],rain:['雨點落在湖面，浮標四周泛起一圈圈細紋。','雨勢不大，撐起傘繼續看著浮標。']},facts:['拉魯島是邵族信仰中最高祖靈的居所，現在不開放登島，遊客只能在周圍的浮橋棧道參觀。','拉魯島在清代稱為珠嶼，日治時期稱玉島，戰後一度改名光華島，後來才恢復邵族名稱。','魚虎等外來魚會吃原生魚的卵和幼魚，南投縣政府每年持續在潭中移除魚虎。','當地漁會曾與清華大學合作，用箱網培育奇力魚等魚苗，再放流回潭中。']},
zengwen:{phase:{dawn:['水庫上方的雲還沒散，山谷裡一片白。','鳥叫聲從對面山坡傳過來，水面還沒有風。'],day:['太陽升高，岸邊裸露的黃土被曬得發白。','湖灣曲折綿長，從釣位看不到水庫的盡頭。'],dusk:['山影慢慢蓋過水面，氣溫降了下來。','白鷺貼著水面飛回山邊。'],night:['山裡的夜很黑，只聽得見水拍岸邊的聲音。','頭燈照出去，只看得到一小圈水面。']},weather:{sunny:['天空很藍，水面映著整片山色。','曬了一陣子，把帽簷再壓低一點。'],cloudy:['雲籠罩著山頭，水色變得更深。','沒有太陽，倒是坐得比較舒服。'],rain:['山區的雨來得急，水面一下子全是雨點。','雨水沿著山坡流進水庫，岸邊的水變得有點濁。']},facts:['曾文水庫位於曾文溪上游，民國五十六年動工，民國六十二年完工。','曾文水庫調節曾文溪的水量，主要供嘉南地區灌溉，也兼顧發電、供水與防洪。','曾文水庫是全臺蓄水量最大的水庫。','2018 年起，曾文水庫的滿水位由 227 公尺調高到 230 公尺。']},
guandu:{phase:{dawn:['天剛亮，關渡大橋的紅色拱還帶著一層霧。','早起的鷺鷥站在紅樹林邊，一動也不動。'],day:['河面寬闊，捷運列車從遠處的高架橋上駛過。','太陽曬在泥灘上，空氣裡有一點鹹味。'],dusk:['夕陽落向觀音山的方向，河面一片橘紅。','下班車潮在對岸的路上排成一串紅燈。'],night:['關渡大橋的燈亮了，倒影隨著水流晃動。','夜裡的河口很安靜，偶爾有魚跳出水面。']},weather:{sunny:['陽光照在水筆仔的葉子上，閃閃發亮。','天氣晴朗，看得到出海口方向的天空。'],cloudy:['雲層很厚，河水和天空變成同一種灰色。','風從出海口吹進來，帶著潮濕的氣味。'],rain:['雨打在河面上，岸邊的泥灘變得更滑。','上游下了雨，河水看起來比剛才濁一些。']},tide:{rising:['開始漲潮了，海水沿著河道往上游推進。','潮水漫過泥灘，紅樹林的根慢慢沒入水中。'],falling:['開始退潮，河水往出海口的方向流去。','潮水退下，泥灘一點一點露了出來。']},facts:['1964 年前後，政府為改善淡水河上游的淹水問題炸開關渡隘口，從此漲潮時海水可以長驅直入。','海水進入後，關渡與五股的灘地鹽化，成了適合紅樹林生長的環境。','1986 年設立關渡自然保留區時，紅樹林只有 3.5 公頃；到 2022 年已擴張到 41.8 公頃。','關渡的水筆仔純林平均樹高五到六公尺。紅樹林讓基隆河河道變窄，臺北市已規劃疏伐臨河的部分。']},
keelung:{phase:{dawn:['漁船陸續回港，碼頭邊開始有人搬貨。','天色微亮，港外的海面還是深藍色。'],day:['貨輪慢慢駛進港口，船尾拖出長長的白浪。','堤岸被太陽曬得發燙，海風吹來倒很涼。'],dusk:['夕陽照著港邊的山坡，住家的窗戶反著光。','海鷗在堤防上空盤旋。'],night:['港區的燈亮了，水面上映著一片黃光。','夜裡的海浪聲變得特別清楚。']},weather:{sunny:['難得的好天氣，海面藍得很乾淨。','陽光照在浪花上，白得刺眼。'],cloudy:['雲層壓在港口上方，海面一片灰。','風大了起來，浪比剛才高了一些。'],rain:['雨又下起來了，雨港果然名不虛傳。','雨水打在堤防上，腳下的水泥變得濕滑。']},facts:['基隆每年仍有將近兩百天下雨，年雨量的氣候平均值約 3,698 毫米。','冬天吹東北季風時，基隆位在迎風面，水氣多，特別容易下雨。','黑鯛是基隆市的市魚。','野生烏魚每年 11 月到隔年 1 月下旬南下洄游到臺灣西南部產卵，冬至前後是旺季。']},
longdong:{phase:{dawn:['晨光從海平面升起，岩壁一點一點亮起來。','清早的海面很平，看得到水下的礁石。'],day:['陽光照進水裡，礁石間的魚群清清楚楚。','岩壁上有人在攀岩，繩子在風裡輕輕擺動。'],dusk:['夕陽把岩壁染成橘色，影子拉得很長。','浮潛的人陸續上岸，海灣安靜下來。'],night:['岩岸一片漆黑，只有浪打在礁石上的聲音。','頭燈照向水面，偶爾閃過一雙發亮的大眼睛。']},weather:{sunny:['海水清澈見底，看得到礁石上的海藻。','天氣很好，遠處的鼻頭角看得很清楚。'],cloudy:['雲層遮住太陽，海水的顏色變深了。','海風一陣陣吹來，浪花打上礁石。'],rain:['雨落在海面上，岩石變得濕滑，換到比較穩的位置。','雨中的海灣霧濛濛的，看不清遠處的岬角。']},facts:['東北角海岸露出的岩層，多是三千多萬年前形成的古老沉積岩。','澳底、龍洞、鼻頭角這幾處海灣有地形遮蔽，比較不受東北季風直接吹襲。','黑帶棘鰭魚白天躲在礁石洞穴裡，入夜後才出來捕食蝦蟹。','雙帶烏尾冬白天成群在水層中吃浮游動物，夜裡躲回礁石間休息。']}};
flavor.qigu={phase:{dawn:['潟湖上的蚵棚還浮在薄霧裡，漁筏慢慢駛出去。','天色剛亮，沙洲那頭傳來海浪的聲音。'],day:['太陽照在潟湖上，一排排蚵棚看得很清楚。','潟湖裡風平浪靜，水面幾乎沒有起伏。'],dusk:['夕陽沉向沙洲外的海面，潟湖一片金黃。','收工的漁筏陸續靠岸，馬達聲漸漸停了。'],night:['潟湖四周很暗，遠處只有幾盞漁寮的燈。','夜裡潮水流過潮口，水聲比白天清楚。']},weather:{sunny:['南部的太陽很烈，潟湖水面亮得睜不開眼。','天空乾淨，看得到遠處的沙洲線。'],cloudy:['雲層遮住太陽，潟湖的水色轉成灰綠。','風從海上吹過沙洲，水面起了細細的波紋。'],rain:['雨落在潟湖上，蚵棚的浮筒被打得叮叮作響。','難得下雨，潟湖上一片霧濛濛。']},tide:{rising:['開始漲潮了，海水從潮口灌進潟湖。','潮水漫上來，蚵棚的竹架慢慢沒入水中。'],falling:['開始退潮，潟湖的水往潮口流出去。','潮水退下，近岸的泥灘露了出來。']},facts:['七股潟湖是臺灣最大的潟湖，外側沙洲擋住了海浪，潟湖內風浪相對平靜。','潟湖留有潮口，仍受潮汐影響；漁民在這裡養蚵、捕魚，蚵棚與定置網排成特別的景觀。','台江國家公園記錄過 798 種魚；鯔科最常見，小型鯔科魚類俗稱豆仔魚。','黑面琵鷺秋冬南下，台江國家公園及周邊濕地是牠們在臺灣度冬的主要棲地。','2013 年，研究團隊在台江地區的河口與紅樹林發現新種魚，命名為台江擬鰕虎。']};
flavor.penghu={phase:{dawn:['內海的水面很平，遠處的跨海大橋還帶著晨霧。','漁船陸續出港，船尾拖出一道道白浪。'],day:['陽光照進淺灘，海草在水底輕輕擺動。','潮間帶上有人彎著腰撿貝，身影小小的。'],dusk:['夕陽落向西嶼的方向，內海染成橘紅。','海鳥成群飛回小島，天色慢慢暗下來。'],night:['內海四周亮起點點燈火，水面映著漁港的燈。','夜裡的海風很涼，浪輕輕拍著岸邊的玄武岩。']},weather:{sunny:['海水清澈，看得到淺灘上的海草床。','天氣很好，內海的水藍得透亮。'],cloudy:['雲層壓低，風一陣一陣從海峽吹來。','天色灰濛，內海的浪比剛才大了一些。'],rain:['雨打在海面上，岸邊的黑色岩石變得濕亮。','澎湖難得下雨，雨絲斜斜地被風吹著。']},facts:['澎湖位在臺灣海峽中央，冬天東北季風增強時，常有強風特報，觀光船也會停駛。','吉貝石滬群與七美雙心石滬都已登錄為文化景觀；石滬是用石塊在潮間帶圍成的捕魚陷阱。','大倉灣海草床的調查在 21 個月裡記錄到 74 種魚，褐臭肚魚最多，超過三成。','澎湖縣政府長年放流黃錫鯛魚苗；2024 年的基因分析顯示，當地漁獲最高約三成可能來自放流魚苗。','青嘴龍占在澎湖相當常見，當地俗稱「青嘴」或「尖嘴仔」。']};
const moods=['收線的手停了一下，想起第一次釣到魚的心情。','不急，今天的時間還很多。','換個姿勢坐好，繼續盯著浮標。','水壺裡的茶已經涼了，喝起來倒也順口。','旁邊的釣客點頭打了招呼，兩人都沒有說話。','有一陣子沒動靜，正好讓腦袋放空。','手機收起來了，現在只看水面。','數了數餌盒，還夠撐到下一次補貨。','一隻蜻蜓停在竿尖上，過一會兒又飛走了。','盤算著這尾魚要賣掉，還是留下來做菜。'];
const world={phases,weathers,weatherOdds,winterOdds,conditions,flavor,moods};
// 0.17 pacing: a cast waits 20–30 s (mean 25 s, ±20%) and each rod level shortens it by 5% of the base.
const economy={travelBase:20,travelStepKm:100,travelStepCost:5,salesStep:.1,castMean:25000,castSpread:.2,rodStep:.05};

// 0.9 additions; stable existing IDs and catalogue positions.
fish.push(...[{"id": "midas", "name": "紅魔麗體魚", "other": "橘色雙冠麗魚、紅魔鬼", "latin": "Amphilophus citrinellus", "min": 0.1, "max": 1.2, "price": 15, "water": "fresh", "form": "體形高而側扁，部分成魚前額隆起，體色可呈橙黃色。", "habitat": "中美洲湖泊與河川等淡水環境。", "diet": "雜食性，攝食植物與小型水生動物。", "distribution": "原產中美洲；日月潭湖區有調查紀錄。", "food": "有觀賞利用；俗稱紅魔鬼的魚可能包含近似種及雜交個體。", "hint": "身體偏高，部分成魚額頭會隆起的外來魚。", "source": "https://fishdb.sinica.edu.tw/taxon/395487-fishdb/occurrence", "edible": false, "bounty": 0, "kind": "引入魚種"}, {"id": "munense", "name": "泰國雙角魚", "other": "泰國角魚", "latin": "Epalzeorhynchos munense", "min": 0.005, "max": 0.03, "price": 10, "water": "fresh", "form": "頭部、身體與臀鰭偏黑，尾鰭鮮紅，背鰭也帶紅色。", "habitat": "東南亞河川中層至底層，會在岩石與巨礫間活動。", "diet": "攝食浮游植物與浮游動物。", "distribution": "原產湄公河等東南亞流域；曾文水庫調查列為外來種。", "food": "原產地有食用及觀賞利用。", "hint": "黑色身體配著鮮紅尾鰭，在石塊間活動的小型魚。", "source": "https://www.fws.gov/sites/default/files/documents/Ecological-Risk-Screening-Summary-Epalzeorhynchos-munense-fish.pdf", "edible": true, "bounty": 0, "kind": "引入魚種"}, {"id": "gourami", "name": "三星鬥魚", "other": "絲鰭毛足鬥魚、藍曼龍、三星仔", "latin": "Trichopodus trichopterus", "min": 0.01, "max": 0.08, "price": 11, "water": "fresh", "form": "體側扁，腹鰭延長成細絲；體側和尾柄的兩個黑斑與眼睛連成一線。", "habitat": "河川緩流、水草茂盛的沼澤及溝渠，能適應低溶氧。", "diet": "攝食浮游動物及昆蟲幼蟲。", "distribution": "原產東南亞，引入觀賞後在多地建立野外族群；曾文水庫有紀錄。", "food": "有食用紀錄，也作觀賞魚。", "hint": "腹下垂著兩根細絲，身上兩個黑斑和眼睛合稱三星。", "source": "https://fishdb.sinica.edu.tw/taxon/382223-fishdb", "edible": true, "bounty": 0, "kind": "引入魚種"}, {"id": "semifasciolatus", "name": "半紋小䰾", "other": "條紋二鬚䰾、紅目猴", "latin": "Barbodes semifasciolatus", "min": 0.003, "max": 0.025, "price": 10, "water": "fresh", "form": "小型側扁魚，口邊一對短鬚，體側有長短不一的深色短橫紋。", "habitat": "平地河川、池沼與溝渠等淡水環境。", "diet": "雜食，攝食絲藻、水生昆蟲及小型無脊椎動物。", "distribution": "臺灣、中國東南部及越南等地有分布；關渡名錄以 Puntius semifasciolatus 記錄。", "food": "小型觀賞魚，並非主要食用魚。", "hint": "身側有深色短紋，體型小巧的河川魚。", "source": "https://fishdb.sinica.edu.tw/chi/species.php?science=Puntius+semifasciolatus", "edible": false, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "glassfish", "name": "大棘雙邊魚", "other": "玻璃魚、大面側仔", "latin": "Ambassis macracanthus", "min": 0.003, "max": 0.03, "price": 10, "water": "brackish", "form": "體側扁而略透明，散布細小黑點，尾鰭深叉。", "habitat": "沿岸、潟湖、沼澤及紅樹林，能進入河川下游。", "diet": "攝食水生昆蟲及小型水生動物。", "distribution": "印度至西太平洋魚類；關渡自然公園魚類名錄有紀錄。", "food": "體型小，通常不作食用魚。", "hint": "身體略透光，尾巴分叉的小型河口魚。", "source": "https://market.cloud.edu.tw/search/kwmap108_result.jsp?btype=&kwcode=4&p=836&sortfield=", "edible": false, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "neondamsel", "name": "霓虹雀鯛", "other": "藍雀鯛、青紺仔", "latin": "Pomacentrus coelestis", "min": 0.003, "max": 0.03, "price": 11, "water": "sea", "form": "背部鮮藍，腹面及尾部帶黃，受驚時體色會轉暗。", "habitat": "近岸礁區及礁旁碎石底，常成群活動。", "diet": "以浮游動物為主，也攝食少量藻類。", "distribution": "臺灣北部礁岸有紀錄，基隆嶼與龍洞均有影像紀錄。", "food": "小型觀賞魚。", "hint": "藍得像亮光，腹部和尾巴帶黃色的礁邊小魚。", "source": "https://catalog.digitalarchives.tw/item/00/00/3d/45.html", "edible": false, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "lemuru", "name": "黃小沙丁魚", "other": "肉鰮仔", "latin": "Sardinella lemuru", "min": 0.03, "max": 0.15, "price": 12, "water": "sea", "form": "體側銀亮，活魚體側下方可見金黃色縱帶，鰓蓋末緣有黑斑。", "habitat": "沿岸水域中的群游小魚。", "diet": "攝食浮游甲殼類等浮游生物。", "distribution": "印度至西太平洋有分布；台江國家公園列為七股潟湖與周邊優勢魚種。", "food": "有食用價值，可加工或料理。", "hint": "銀亮的小魚結成魚群，側面隱約閃著金色縱帶。", "source": "https://www.tjnp.gov.tw/ch/sglarticle/cetaceans-and-fish", "edible": true, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "splendens", "name": "黑邊布氏鰏", "other": "黑邊鰏、碗米仔", "latin": "Eubleekeria splendens", "min": 0.01, "max": 0.08, "price": 11, "water": "sea", "form": "體形卵圓而側扁，銀白色，背鰭硬棘部邊緣帶黑色。", "habitat": "沿海砂泥底、河口及潟湖。", "diet": "攝食小型底棲動物。", "distribution": "印度至西太平洋有分布；七股潟湖與周邊優勢魚名錄有紀錄。", "food": "小型食用魚。", "hint": "身子扁小，背鰭邊緣帶黑色的潟湖魚。", "source": "https://fishdb.sinica.edu.tw/chi/species.php?id=382059", "edible": true, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "porcupine", "name": "六斑刺魨", "other": "六斑二齒魨、刺規、氣球魚", "latin": "Diodon holocanthus", "min": 0.03, "max": 0.3, "price": 10, "water": "sea", "form": "頭部與身體布滿可動硬棘，背側有深色斑塊，腹面較白。", "habitat": "淺海礁區、砂泥底及開放水域。", "diet": "攝食軟體動物、海膽及甲殼類等底棲動物。", "distribution": "熱帶及亞熱帶海域廣泛分布；澎湖大倉灣海草床有調查紀錄。", "food": "尖棘容易刺傷；資料庫未列為食用魚，食藥署手冊註記毒性未明。", "hint": "身上長著硬棘，淺色身體帶有深色斑塊。", "source": "https://fishdb.sinica.edu.tw/chi/species.php?gen=Diodon&spe=holocanthus", "edible": false, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "yellowgoat", "name": "黃帶擬鬚鯛", "other": "黃線擬鬚鯛、秋姑、鬚哥", "latin": "Mulloidichthys flavolineatus", "min": 0.05, "max": 0.7, "price": 18, "water": "sea", "form": "體形延長，側面有黃色縱帶，下頜有一對白鬚。", "habitat": "礁區、潟湖及鄰近砂泥底，常成群活動。", "diet": "用頤鬚尋找甲殼類、軟體動物及多毛類。", "distribution": "印度至太平洋魚類；澎湖大倉灣海草床有調查紀錄。", "food": "食用魚，可煎食或紅燒。", "hint": "側面一道黃帶，下巴兩根鬚在底部探來探去。", "source": "https://digiarch.sinica.edu.tw/content/repository/resource_content.jsp?oid=4353128", "edible": true, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "yellowbarracuda", "name": "黃尾金梭魚", "other": "竹梭、針梭、梭仔", "latin": "Sphyraena flavicauda", "min": 0.1, "max": 1.5, "price": 19, "water": "sea", "form": "體形細長，吻尖，尾鰭深叉而帶黃色。", "habitat": "較近岸的礁區及潟湖，單獨或成小群活動。", "diet": "肉食，追捕小魚。", "distribution": "印度至西太平洋有分布；澎湖大倉灣海草床有紀錄。", "food": "食用魚，可煎、烤或煮湯。", "hint": "身子像梭子，分叉尾鰭帶著黃色。", "source": "https://market.cloud.edu.tw/resources/web/1756388", "edible": true, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "oyena", "name": "奧奈鑽嘴魚", "other": "奧耐鑽嘴魚", "latin": "Gerres oyena", "min": 0.03, "max": 0.3, "price": 15, "water": "sea", "form": "體側扁而銀白，嘴巴可以向前伸出。", "habitat": "沿岸砂泥底、河口、內灣及紅樹林。", "diet": "在底部尋找小型水生動物。", "distribution": "印度至西太平洋有分布；澎湖大倉灣海草床有調查紀錄。", "food": "可作小型食用魚。", "hint": "銀白扁身，嘴巴能向前伸出，在底部找食物。", "source": "https://kmweb.moa.gov.tw/theme_data.php?id=492&theme=fisheasy", "edible": true, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "chinesefilefish", "name": "中國單棘魨", "other": "中華單棘魨、剝皮魚、狄婆", "latin": "Monacanthus chinensis", "min": 0.02, "max": 0.25, "price": 14, "water": "sea", "form": "身體側扁而近菱形，背鰭前方有強硬棘，體色帶褐色斑紋。", "habitat": "近岸礁區、砂泥底及河口。", "diet": "攝食藻類、小型甲殼類及小魚。", "distribution": "印度至西太平洋魚類；澎湖大倉灣海草床有紀錄。", "food": "資料庫列為可食用魚，產量較少。", "hint": "扁扁的身體，背上前端立著一根硬棘。", "source": "https://fishdb.sinica.edu.tw/mobi/species.php?id=382992", "edible": true, "bounty": 0, "kind": "水域紀錄魚種"}, {"id": "silversprat", "name": "日本銀帶鯡", "other": "丁香魚、丁香、針嘴鰮", "latin": "Spratelloides gracilis", "min": 0.003, "max": 0.02, "price": 10, "water": "sea", "form": "體形細長，體側有一條明顯的銀白色縱帶，鱗片容易脫落。", "habitat": "近海水層，常結成魚群。", "diet": "攝食浮游生物。", "distribution": "澎湖俗稱丁香的主要魚種之一；大倉灣海草床有調查紀錄。", "food": "小型食用魚，常製成魚乾。", "hint": "細小銀亮，魚群轉身時像閃過一排細光。", "source": "https://fae.moa.gov.tw/map/food_item.php?id=382&type=AS01", "edible": true, "bounty": 0, "kind": "水域紀錄魚種"}]);
const additions09={"sunmoon": {"midas": 3}, "zengwen": {"munense": 3, "gourami": 3}, "guandu": {"qili": 3, "candidia": 2, "topmouth": 2, "semifasciolatus": 3, "glassfish": 3}, "keelung": {"goatfish": 4, "longfingrouper": 3, "neondamsel": 4}, "longdong": {"rabbitfish": 4, "neondamsel": 4}, "qigu": {"lemuru": 5, "splendens": 4}, "penghu": {"porcupine": 6, "yellowgoat": 6, "yellowbarracuda": 4, "oyena": 5, "chinesefilefish": 4, "silversprat": 5}};
for(const r of regions){const extra=additions09[r.id],budget=100-Object.values(extra).reduce((a,b)=>a+b,0),entries=Object.entries(r.pool),total=entries.reduce((a,[,w])=>a+w,0),scaled=entries.map(([id,w],index)=>({id,index,exact:w/total*budget,value:Math.floor(w/total*budget)}));let remainder=budget-scaled.reduce((a,x)=>a+x.value,0);for(const x of [...scaled].sort((a,b)=>(b.exact-b.value)-(a.exact-a.value)||a.index-b.index)){if(remainder--<=0)break;x.value++}r.pool=Object.fromEntries(scaled.map(x=>[x.id,x.value]));Object.assign(r.pool,extra)}
for(const f of fish){f.food=f.food.replace(/遊戲(?:本版)?(?:中)?尚(?:未提供|無)專用菜譜。?/g,'').replace(/遊戲中僅供圖鑑紀錄。?/g,'').replace('遊戲將捕獲方式簡化為釣獲。','').replace(/[，；]。/g,'。').replace(/[，；]$/,'。').replace(/，?遊戲(?:中)?(?:可煮魚湯|用於清蒸料理|提供薑燒魚虎|提供清蒸珍珠石斑|可繳交賞金|只能低價回收|不設料理)。/g,'。').replace(/。+/g,'。');if(['qili','candidia','topmouth'].includes(f.id))f.distribution+='淡水河流域有紀錄。';if(['goatfish','longfingrouper'].includes(f.id))f.distribution+='基隆沿岸有紀錄。';if(f.id==='rabbitfish')f.distribution+='龍洞有館藏標本紀錄。'}

// 0.11: East Asia batch 2; append IDs to preserve existing encyclopedia numbers.
fish.push(...[{"id": "bigeyetrevally", "name": "六帶鰺", "other": "甘仔魚、紅目瓜仔", "latin": "Caranx sexfasciatus", "min": 0.3, "max": 3, "price": 20, "bounty": 0, "kind": "海水魚種", "water": "sea", "edible": true, "form": "身體側扁、眼大，尾柄有明顯稜鱗；幼魚體側帶五至六條暗色橫帶，長大後逐漸淡去。", "habitat": "沿岸礁區及外緣水域；幼魚也會進入砂泥底淺海與河口。", "diet": "以小魚與甲殼類為食，白天常成群在礁區巡游。", "distribution": "廣布印度—太平洋；墾丁後壁湖的潛水調查及墾丁垂釣報告均有紀錄。", "food": "食用魚，可清蒸、煎食或鹽烤。", "hint": "大眼睛、尾柄有稜鱗，幼時的暗色橫帶長大後逐漸淡去。", "source": "https://fishdb.sinica.edu.tw/taxon/381530-fishdb"}, {"id": "silversillago", "name": "多鱗沙鮻", "other": "沙腸仔、多鱗鱚", "latin": "Sillago sihama", "min": 0.04, "max": 0.25, "price": 17, "bounty": 0, "kind": "河口魚種", "water": "brackish", "edible": true, "form": "體形細長，吻部尖，背部淡褐、腹部近白色；各鰭透明，胸鰭基部沒有黑斑。", "habitat": "內灣、沿岸沙灘與河口的砂泥底，也能進入感潮的半淡鹹水域。", "diet": "在水底攝食多毛類、小蝦與其他小型甲殼類，遇到危險時會埋入沙中。", "distribution": "印度—西太平洋沿岸魚類；香港吐露港淺水採樣在泥灘與沙灘均記錄到幼魚。", "food": "食用魚，也是沙灘釣魚的常見對象，可沾粉油炸。", "hint": "尖吻、細長淡褐色身體，遇到危險會鑽進沙中。", "source": "https://fishdb.sinica.edu.tw/taxon/382631-fishdb"}]);
regions.push(...[{"id": "kenting", "name": "墾丁沿岸", "area": "臺灣・屏東恆春", "lat": 21.945, "lon": 120.77, "water": "海水礁岸", "desc": "恆春半島南部的沿岸海域，礁石、砂地與開闊水層相接，淺礁小魚與巡游魚群交錯。", "pool": {"sergeant": 28, "wrasse": 25, "longfingrouper": 10, "squirrelfish": 8, "fusilier": 19, "bigeyetrevally": 10}, "source": "https://mpa.oca.gov.tw/Files/Knowledge/cdc47203a5ab401184a7764e06266d15.pdf"}, {"id": "tolo", "name": "吐露港", "area": "香港・新界東北", "lat": 22.445, "lon": 114.235, "water": "海灣・半淡鹹水", "desc": "新界東北的內灣，近岸有泥灘、紅樹林與沙灘，是多種海魚幼魚活動的淺水環境。", "pool": {"silversillago": 35, "blackporgy": 13, "yellowfin": 13, "sarba": 8, "mullet": 13, "terapon": 18}, "source": "https://zoolstud.sinica.edu.tw/Journals/49.6/760.pdf"}]);
Object.assign(flavor,{"kenting": {"phase": {"dawn": ["天剛亮，礁岸上的浪花還帶著灰藍色。", "晨光照進淺水，礁石的輪廓慢慢清楚。"], "day": ["陽光穿過水面，魚影從礁石旁一閃而過。", "浪一退，近岸的砂地和礁溝又露了出來。"], "dusk": ["天邊轉成橘紅，礁岸上的人影拉得很長。", "夕光照著浪頭，近岸的水色漸漸暗了。"], "night": ["頭燈照著腳邊的礁石，海上只剩零星燈光。", "浪聲在黑暗裡變得清楚，浮標的亮點輕輕起伏。"]}, "weather": {"sunny": ["陽光很強，帽簷下仍看得到水面的反光。", "風把雲吹開，海面的藍色深淺分明。"], "cloudy": ["雲遮住陽光，礁石旁的水色轉深。", "海風一陣陣吹來，浪花濺上近岸的石面。"], "rain": ["雨點打在海面，礁石被淋得發亮。", "雨絲斜斜掠過水面，遠處的岸線變模糊了。"]}, "facts": ["墾丁的沿岸調查涵蓋礁石、砂地與不同深度的水域，魚群會隨棲地而變。", "條紋豆娘魚常成群在淺礁活動，牠的體側有深色橫帶。", "玳瑁石斑偏好岩礁與珊瑚礁，身上的暗斑能與礁石背景相融。", "雲斑海豬魚在礁砂交界翻找小型無脊椎動物。"]}, "tolo": {"phase": {"dawn": ["灣上的晨霧還沒散，對岸的山影淡淡的。", "天剛亮，岸邊淺水已有小魚聚在一起。"], "day": ["海灣水面映著山色，淺灘邊不時閃過魚影。", "陽光照著近岸，沙地和深色的泥灘分得很清楚。"], "dusk": ["夕光落在灣內，對岸的燈一盞盞亮起來。", "風小了，浮標四周只剩細細的水紋。"], "night": ["灣邊的燈光映在水裡，遠處的山只剩輪廓。", "近岸傳來輕輕的水聲，浮標在燈影外慢慢晃動。"]}, "weather": {"sunny": ["天氣晴朗，隔著海灣看得到對岸的山坡。", "陽光照在淺水上，小魚游過時閃了一下。"], "cloudy": ["雲層壓著山頭，灣內水色成了灰綠。", "一陣海風吹過，水面起了密密的細浪。"], "rain": ["雨落進灣內，對岸的房屋漸漸模糊。", "雨水順著傘緣滴下，近岸的水面滿是小圓圈。"]}, "facts": ["吐露港的淺水岸邊既有紅樹林泥灘，也有沙灘環境。", "研究人員在吐露港的泥灘與沙灘都記錄到多鱗沙鮻幼魚。", "黑鯛、黃鰭鯛與黃錫鯛的幼魚，都曾在吐露港的淺水採樣中出現。", "多鱗沙鮻在砂泥底尋找小蝦和蠕蟲，遇到危險時會鑽進沙中。"]}});
Object.assign(weatherOdds,{kenting:[50,30,20],tolo:[45,35,20]});
for(const id of ["sergeant","wrasse","longfingrouper","squirrelfish","fusilier"])fish.find(f=>f.id===id).distribution+="墾丁海域調查有紀錄。";
for(const id of ["blackporgy","yellowfin","sarba","mullet","terapon"])fish.find(f=>f.id===id).distribution+="香港吐露港淺水採樣有幼魚紀錄。";

// 0.12: Germany batch 6; append IDs to preserve existing encyclopedia numbers. `bream` stays 武昌魚.
const fb='https://www.fishbase.se/summary/';
fish.push(...[
{id:'perch',name:'河鱸',other:'歐洲河鱸',latin:'Perca fluviatilis',min:.08,max:1.2,price:16,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'體色黃綠，體側有五到九條深色橫帶，常呈 Y 字形；第一背鰭後端有一塊黑斑，腹鰭與臀鰭帶黃至紅色。',habitat:'從河口潟湖、各類湖泊到中型溪流都能生活。',diet:'白天覓食，以日出與日落前後最活躍；幼魚吃浮游動物，長到約 12 公分後常捕食小魚。',distribution:'原生於歐洲至西伯利亞，也被引入多地。博登湖職業漁獲中長年僅次於白鮭，格賴夫斯瓦爾德潟湖也有漁獲紀錄。',food:'歐洲重要的食用與遊釣魚。',hint:'體側有深色橫帶，背鰭後端帶一塊黑斑。',source:fb+'Perca-fluviatilis.html'},
{id:'pike',name:'白斑狗魚',other:'狗魚',latin:'Esox lucius',min:.8,max:5,price:18,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'吻部長而扁平，形如鴨嘴；口大，布滿尖銳牙齒，背鰭與臀鰭都長在身體後段。',habitat:'喜歡水草茂密的清澈湖泊與河川緩流處，在波羅的海也會進入半淡鹹水。',diet:'多單獨活動並守住地盤，成魚主要捕食魚類，也吃蛙類和螯蝦。',distribution:'環北極的淡水魚，歐亞大陸與北美都有分布；博登湖與格賴夫斯瓦爾德潟湖均有漁獲紀錄。',food:'商業捕撈與遊釣魚種。',hint:'長扁的鴨嘴狀吻部，背鰭和臀鰭都靠近尾部。',source:fb+'Esox-lucius.html'},
{id:'blaufelchen',name:'博登湖白鮭',other:'',latin:'Coregonus wartmanni',min:.2,max:1,price:20,bounty:0,kind:'博登湖特有種',water:'fresh',edible:true,form:'體形細長，鱗片銀亮；與鮭鱒一樣，在背鰭後方有一枚小脂鰭。',habitat:'生活在湖中開闊水域，夏季多在水深 0～40 公尺。',diet:'以浮游動物與昆蟲為食，夏季也捕食河鱸幼魚。',distribution:'只分布在博登湖。十二月上半水溫降到 7°C 以下時，在深水區上方的水面產卵。2023 年被 IUCN 評為瀕危；漁獲大幅下滑後，2024 年起實施三年禁捕。',food:'過去占博登湖職業漁獲近八成，是當地最具代表性的食用魚。',hint:'只住在一座湖裡的銀色白鮭，成群在開闊水域覓食浮游動物。',source:fb+'Coregonus-wartmanni.html'},
{id:'browntrout',name:'褐鱒',other:'湖鱒',latin:'Salmo trutta',min:.5,max:4,price:22,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'身體呈紡錘形，頭小而尖，口大；體色灰藍，側線上下都有許多斑點，尾柄粗圓。',habitat:'偏好低溫、溶氧高的水域。湖居族群平時在湖中開闊水域活動，產卵時溯入支流與湖泊出口，在水流湍急的礫石底產卵。',diet:'博登湖的湖鱒是體型大的掠食魚。',distribution:'原生於歐洲至西亞，也被引入世界多地。博登湖族群在 1980 年代初幾近滅絕，經保護、放流與拆除河道阻隔後回穩，產卵魚再度溯上萊茵河上游的原產卵場。',food:'商業、養殖與遊釣魚種。',hint:'灰藍的身體布滿斑點，湖中的族群會溯河產卵。',source:fb+'Salmo-trutta.html'},
{id:'commonbream',name:'歐鯿',other:'',latin:'Abramis brama',min:.2,max:2.5,price:14,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'體高而側扁；口部略朝下，可以伸出成管狀，從底泥中吸取食物。',habitat:'棲於湖泊與大中型河川，多在靜水或緩流處成大群活動，也會進入半淡鹹水河口。',diet:'幼魚吃浮游生物，成魚多在底層覓食。',distribution:'歐洲大部分水系至中亞鹹海流域；博登湖的漁獲統計將牠與其他鯉科小魚合併為「白魚類」。',food:'歐洲重要的商業與養殖魚種。',hint:'又高又扁的身體，嘴巴能伸成管子翻找底泥。',source:fb+'Abramis-brama.html'},
{id:'herring',name:'大西洋鯡',other:'鯡魚',latin:'Clupea harengus',min:.05,max:.35,price:12,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體形細長、腹部圓，背部藍至藍綠，腹側銀白，身上與鰭上沒有明顯黑斑。',habitat:'成群在沿岸產卵場、越冬區與外海覓食區之間洄游；成魚白天待在較深處，夜間上浮。',diet:'以浮游動物為主食，食物密度合適時會改用濾食。',distribution:'北大西洋兩岸至波羅的海。格賴夫斯瓦爾德潟湖是西波羅的海春季產卵鯡魚的主要產卵場，魚卵附著在淺水水草上；暖冬使產卵逐年提早。',food:'歐洲極重要的經濟魚種。',hint:'背藍腹銀、身上沒有黑斑，春季大群湧入淺灣產卵。',source:fb+'Clupea-harengus.html'},
{id:'zander',name:'梭鱸',other:'',latin:'Sander lucioperca',min:.5,max:4,price:21,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'體形修長，上下頜前端各有一至二枚特別大的犬齒。',habitat:'棲於大型混濁河川、富營養湖泊、半淡鹹水潟湖與河口，在半淡鹹水覓食的個體會回到淡水產卵。',diet:'主要捕食成群的中上層小魚；在格賴夫斯瓦爾德潟湖的鯡魚產卵季，食物最多有七成是鯡魚。',distribution:'原生於裏海、波羅的海、黑海與鹹海流域及易北河，也被引入多地。',food:'商業、養殖與遊釣魚種。',hint:'修長的身體，嘴前長著特別大的犬齒。',source:fb+'Sander-lucioperca.html'},
{id:'flounder',name:'歐洲川鰈',other:'',latin:'Platichthys flesus',min:.1,max:1.2,price:17,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'比目魚，眼睛多在身體右側；皮膚粗糙，側線及背鰭、臀鰭基部尤其明顯。有眼的一側呈橄欖綠並帶不規則紅斑，無眼側為白色。',habitat:'一年大多待在河口，成魚在淺水泥沙底活動，常進入淡水；冬季退到較深、較暖的水域，春季產卵。',diet:'以底棲的小型甲殼類與多毛類等無脊椎動物為食。',distribution:'東大西洋的沿岸與半淡鹹水，自白海到地中海與黑海；格賴夫斯瓦爾德潟湖有漁獲紀錄。',food:'商業捕撈與遊釣魚種。',hint:'扁平的比目魚，有眼的一側粗糙並帶紅斑。',source:fb+'Platichthys-flesus.html'},
{id:'garfish',name:'細頜針魚',other:'頜針魚',latin:'Belone belone',min:.1,max:.8,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體細長，截面近圓形；上下頜延長成尖嘴，下頜略長，頜齒較大而疏。',habitat:'靠近水面活動，洄游習性與鯖魚相似。',diet:'捕食小魚，特別是鯡科魚類；上鉤後常躍出水面。',distribution:'東大西洋與地中海；格賴夫斯瓦爾德潟湖有漁獲紀錄。',food:'可鮮食或冷凍，適合煎、烤。',hint:'細長如針、嘴又尖又長，上鉤後常跳出水面。',source:fb+'Belone-belone.html'}]);
regions.push(
{id:'bodensee',name:'博登湖',area:'德國・巴登-符騰堡／巴伐利亞',lat:47.6,lon:9.4,water:'深水湖泊・淡水',desc:'阿爾卑斯山北麓的大湖，由德國、奧地利與瑞士三國環繞；湖水深而清，萊茵河從東南方流入。',pool:{perch:28,commonbream:20,carp:17,blaufelchen:15,pike:10,browntrout:10},source:'https://www.schule-bw.de/faecher-und-schularten/gesellschaftswissenschaftliche-und-philosophische-faecher/landeskunde-landesgeschichte/module/epochen/umweltgeschichte/bodensee/ab23.pdf'},
{id:'greifswald',name:'格賴夫斯瓦爾德潟湖',area:'德國・梅克倫堡-前波莫瑞',lat:54.22,lon:13.55,water:'潟湖・半淡鹹水',desc:'波羅的海南岸、呂根島南側的淺水內灣，海水與淡水交會，鹽度比外海低；春季有大群鯡魚入灣產卵。',pool:{herring:30,flounder:18,perch:15,garfish:15,pike:12,zander:10},source:'https://www.lallf.de/fileadmin/media/PDF/fischer/5_Statistik/xFangstatistik_2001Gebiete.pdf'});
Object.assign(flavor,{
bodensee:{phase:{dawn:['湖面還籠著霧，對岸的山影若隱若現。','早班渡輪鳴了一聲笛，慢慢離開碼頭。'],day:['陽光下湖水透出淡綠，遠處的帆船一艘接一艘。','岸邊步道有人騎著單車經過，回頭看了一眼浮標。'],dusk:['夕陽落向湖的西端，水面染成一片橘紅。','港口的燈亮起，漁船陸續靠岸。'],night:['對岸城鎮的燈火映在湖面，像一串細碎的光點。','夜風從湖心吹來，帶著涼意。']},weather:{sunny:['天氣晴朗，南方的阿爾卑斯雪峰清楚可見。','湖面平靜，近岸水底的碎石看得一清二楚。'],cloudy:['雲層壓在湖上，對岸只剩一條灰線。','風轉涼了，湖面起了細碎的波紋。'],rain:['細雨落在湖面，碼頭的木板顏色漸漸變深。','雨不大，躲在遮雨棚下繼續看著浮標。']},facts:['博登湖畔的史前木樁屋遺址，2011 年與阿爾卑斯周邊其他遺址一同列入世界遺產；烏爾丁根的露天博物館重建了 23 棟木樁屋。','白鮭曾占博登湖職業漁獲近八成，近年漁獲驟減，自 2024 年起實施三年禁捕。','博登湖的湖鱒在 1980 年代初幾近滅絕，靠著保護、放流與打通河道，才重新回到萊茵河上游產卵。','博登湖的漁民自 1910 年起就須以書面記錄漁獲，留下一百多年的漁獲統計。']},
greifswald:{phase:{dawn:['天剛亮，海鳥成群從水面掠過。','灣上的霧還沒散，遠處的呂根島只露出一道輪廓。'],day:['海風穩穩地吹，岸邊的蘆葦沙沙作響。','幾艘小漁船停在灣中，船上的人正在整理漁網。'],dusk:['晚風轉了方向，水面泛起長長的波紋。','天色慢慢轉暗，岸邊的蘆葦只剩一片剪影。'],night:['燈塔的光在遠處一明一滅。','四周安靜下來，只聽得到水拍著岸邊的石頭。']},weather:{sunny:['陽光照在淺灣，水色從碧綠漸漸轉成深藍。','天空乾淨得沒有一朵雲，風也停了。'],cloudy:['低雲從海上推過來，天地都是一片灰。','風大了些，浮標在浪裡上下起伏。'],rain:['冷雨斜斜打在臉上，把外套的帽子拉緊。','雨點落在水面，灣裡一片朦朧。']},facts:['這片潟湖被稱為西波羅的海鯡魚的「育嬰房」，德國研究人員在這裡監測鯡魚產卵已近三十年。','鯡魚在水溫約 3.5～4°C 時開始把卵產在淺水水草上；暖冬讓產卵逐年提早，近年二月就能找到魚卵。','2025 年的研究發現，西波羅的海的鯡魚有 56～73% 會回到出生的海域產卵。','2001 年的分區統計中，這片潟湖的職業漁獲超過九成五是鯡魚。']}});
Object.assign(weatherOdds,{bodensee:[35,40,25],greifswald:[30,40,30]});
conditions.herring={months:[2,3,4],amount:2,note:'2～4 月較常見'};
fish.find(f=>f.id==='carp').distribution+='德國博登湖的遊釣漁獲亦有紀錄。';

// 0.16: Japan batch 3 (Lake Biwa, Kasumigaura) and refill batches A, B; append IDs to preserve existing encyclopedia numbers.
// Sources: SOURCES.md「0.16」. Pools of refilled waters keep their old ratios, scaled like the 0.9 additions.
const maff=m=>'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/'+m+'.html',gbifq=n=>'https://www.gbif.org/species/search?q='+encodeURIComponent(n);
const ktReport='https://mpa.oca.gov.tw/Files/Knowledge/cdc47203a5ab401184a7764e06266d15.pdf',toloPaper='https://zoolstud.sinica.edu.tw/Journals/49.6/760.pdf',gdList='https://gd-park.org.tw/sites/gd-park.org.tw/files/att/關渡的魚類_1.pdf',tjnp='https://www.tjnp.gov.tw/ch/sglarticle/cetaceans-and-fish',smReport='https://admin.taiwan.net.tw/fapi/AttFile?id=10571&type=AttFile';
fish.push(...[
{id:'ayu',name:'香魚',other:'小香魚、年魚',latin:'Plecoglossus altivelis',min:.005,max:.05,price:13,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'身體細長、側扁，體色青灰帶黃；背鰭後方有一枚小脂鰭。',habitat:'一般香魚幼年在海中度過，春天溯河，在河床石頭上刮食藻類。琵琶湖的香魚以湖代替海，留在湖中的群體長到約 7 公分就停止生長，稱為「小香魚」。',diet:'幼魚吃浮游動物，溯河後刮食石面藻類。',distribution:'日本、朝鮮半島與中國沿海河川；琵琶湖的小香魚列入「琵琶湖八珍」。',food:'琵琶湖約 5 月到 8 月初捕撈，常做成佃煮、天婦羅或南蠻漬，骨頭軟、可整尾吃。',hint:'細長的小魚，背鰭後面還有一枚小小的脂鰭。',source:maff('koayuno_sanshou_ni_shiga')},
{id:'honmoroko',name:'暗色頜鬚鮈',other:'本諸子',latin:'Gnathopogon caerulescens',min:.005,max:.03,price:15,bounty:0,kind:'琵琶湖特有種',water:'fresh',edible:true,form:'體形細長的小型鯉科魚，體側銀白，口邊有一對短鬚。',habitat:'成群生活在湖的中、上層，春天游到湖岸水草叢與河口產卵。',diet:'以浮游動物為食。',distribution:'琵琶湖特有種，列入「琵琶湖八珍」；埼玉縣等地有人工養殖。',food:'冬季到春季產卵前最肥，帶卵的冬季漁獲尤其珍貴；滋賀縣常素烤或做天婦羅。',hint:'成群的小魚，口邊有一對短鬚。',source:maff('yaki_morokono_dorozu_shiga')},
{id:'nigorobuna',name:'煮頃鮒',other:'似五郎鮒',latin:'Carassius buergeri grandoculis',min:.15,max:1,price:18,bounty:0,kind:'琵琶湖特有種',water:'fresh',edible:true,form:'外形像一般鯽魚，但頭較大、下巴較厚，眼睛也較大。',habitat:'平時在湖的較深處生活，春天到湖岸蘆葦帶產卵。',diet:'以浮游動物和底棲小動物為食。',distribution:'琵琶湖特有亞種。漁獲量近年減少，價格上漲，鮒壽司因此成了高級品。',food:'做鮒壽司的最佳材料，鱗片好刮、內臟好取，帶卵的雌魚最受歡迎。',hint:'像鯽魚，但頭大、下巴厚，是一道發酵料理的主角。',source:maff('funa_zushi_shiga')},
{id:'biwamasu',name:'琵琶鱒',other:'雨之魚',latin:'Oncorhynchus biwaensis',min:.5,max:3,price:24,bounty:0,kind:'琵琶湖特有種',water:'fresh',edible:true,form:'鮭科魚，體色銀白，背鰭後方有脂鰭；體長 30～60 公分。',habitat:'生活在北湖的深水冷層。不會降海，而是在湖中長大三、四年後，秋天溯回出生的河川產卵；雨後河水上漲時最容易溯河，因此叫「雨之魚」。',diet:'以小魚與浮游動物為食。',distribution:'琵琶湖特有種，產卵河川只限北湖的少數支流。過去被歸為馬蘇鉤吻鮭的亞種，2025 年正式命名為新種。',food:'初夏到盛夏油脂最多，滋賀縣的鄉土料理有刺身與炊飯。',hint:'琵琶湖深處的鮭科魚，下雨漲水時會溯河。',source:'https://digitalpr.jp/r/112858'},
{id:'wakasagi',name:'西太公魚',other:'公魚',latin:'Hypomesus nipponensis',min:.003,max:.02,price:14,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'細長的小魚，身體半透明帶銀色縱帶，背鰭後方有脂鰭。',habitat:'可生活在半淡鹹水到淡水湖泊，冬末春初在淺水產卵。',diet:'以浮游動物為食。',distribution:'日本與俄羅斯遠東。霞浦湖以拖網漁業捕撈，主漁期為 7 月 21 日到 12 月 31 日，資源水準低、仍在減少。',food:'做成佃煮、甘露煮、煮干，或油炸、醋漬。',hint:'半透明的小魚，帶著一條銀色縱帶，背上還有脂鰭。',source:'https://www.pref.ibaraki.jp/nourinsuisan/suishi/shigen/documents/2024-r6_wakasagi-kasumi.pdf'},
{id:'icefish',name:'日本銀魚',other:'白魚',latin:'Salangichthys microdon',min:.002,max:.008,price:15,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'身體細長、無鱗，活著時幾乎完全透明，死後轉為白色。',habitat:'一般在沿海與河口生活，春天溯河產卵；霞浦湖的群體終生留在淡水中。',diet:'以浮游動物為食。',distribution:'日本、朝鮮半島與俄羅斯遠東。霞浦湖主要以拖網捕撈，晚秋到冬季的漁獲品質最好，資源水準中等、仍在減少。',food:'多做成白魚乾與佃煮；當地漁協開發的品牌白魚可以生吃。',hint:'全身透明、看得見內臟的細小魚。',source:'https://www.pref.ibaraki.jp/nourinsuisan/suishi/shigen/documents/2023-r5_shirauo-kasumi.pdf'},
{id:'channelcat',name:'斑點叉尾鮰',other:'美國鯰',latin:'Ictalurus punctatus',min:.3,max:3,price:18,bounty:0,kind:'引入魚種',water:'fresh',edible:true,form:'無鱗，口邊有四對鬚，尾鰭深叉；幼魚體側有黑色小斑點。',habitat:'喜歡河川與湖泊的底層，夜間活動。',diet:'什麼都吃，從水生昆蟲、貝類到小魚都是食物。',distribution:'原產北美；日本列為特定外來生物。霞浦湖的監測中，牠占漁獲重量的比例從 31.1% 升到 61.0%。',food:'原產地的常見食用魚，日本各地也有推廣食用以減少數量。',hint:'口邊有四對鬚、尾巴開叉的外來大鯰魚。',source:'https://www.biodic.go.jp/moni1000/findings/newsflash/pdf/freshwaterfishes_2020.pdf'},
{id:'bluegill',name:'藍鰓太陽魚',other:'',latin:'Lepomis macrochirus',min:.03,max:.3,price:12,bounty:0,kind:'引入魚種',water:'fresh',edible:true,form:'體高而側扁，鰓蓋末端有一塊深藍黑色斑，體側有數條暗色橫帶。',habitat:'喜歡水草多的靜水區。',diet:'雜食性，吃水生昆蟲、小蝦、魚卵與水草。',distribution:'原產北美；日本列為特定外來生物，霞浦湖有生息。',food:'可食用。',hint:'圓圓扁扁的外來魚，鰓蓋後緣有一塊深藍色斑。',source:'https://www.pref.ibaraki.jp/nourinsuisan/naisuishi/gyogancho/documents/089_column_1.pdf'},
{id:'fivestripewrasse',name:'五帶錦魚',other:'四齒、青花龍、貓仔魚',latin:'Thalassoma quinquevittatum',min:.03,max:.3,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體形細長的隆頭魚，身體綠色，體側有紅紫色縱紋，頭部也帶紅色花紋。',habitat:'活動於淺礁浪區，白天在礁石間游動。',diet:'以底棲小型無脊椎動物為食。',distribution:'印度—太平洋熱帶淺礁。墾丁國家公園 2017 年垂釣調查記錄 471 尾，數量僅次於條紋豆娘魚。',food:'可食用，但體型小，少作經濟魚。',hint:'綠色身體上畫著紅紫色條紋，是礁岸釣客最常釣到的魚之一。',source:ktReport},
{id:'flagtail',name:'鯔形湯鯉',other:'銀湯鯉、花尾、烏尾冬仔',latin:'Kuhlia mugil',min:.05,max:.4,price:16,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體銀白、側扁，尾鰭上有黑白相間的斜帶。',habitat:'成群出現在浪花拍打的礁岸與潮池附近。',diet:'以浮游甲殼類與小魚為食。',distribution:'印度—太平洋。墾丁 2017 年垂釣調查記錄 267 尾，名列第四。',food:'可食用。',hint:'銀白色的群游魚，尾巴有黑白斜紋。',source:ktReport},
{id:'hawkfish',name:'翼䱵',other:'短嘴格、低眶鷹斑鯛',latin:'Cirrhitus pinnulatus',min:.05,max:.5,price:17,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'頭大、身體粗壯，體色褐綠，散布白色與紅褐色斑點；胸鰭下方的鰭條粗厚、不分支。',habitat:'停在浪打的岩礁上，用粗厚的胸鰭撐住身體。',diet:'伏擊經過的螃蟹、蝦與小魚。',distribution:'印度—太平洋。墾丁 2017 年垂釣調查的十大優勢魚種之一，記錄 153 尾。',food:'可食用。',hint:'用胸鰭撐著停在岩石上，像一隻蹲在礁頂的老鷹。',source:ktReport},
{id:'manybargoatfish',name:'多帶海緋鯉',other:'秋姑、老爺、鬚哥',latin:'Parupeneus multifasciatus',min:.08,max:.6,price:18,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'下巴有一對長鬚，體色紅褐，體側有數條黑色橫帶。',habitat:'在礁區旁的砂地活動。',diet:'用觸鬚翻找底棲的小蝦、蠕蟲。',distribution:'太平洋熱帶淺海。墾丁 2017 年垂釣調查記錄 103 尾。',food:'可食用。',hint:'下巴有一對長鬚，身上有好幾條黑色橫帶。',source:ktReport},
{id:'dottedshad',name:'斑鰶',other:'扁屏仔、油魚、海鯽仔',latin:'Konosirus punctatus',min:.03,max:.2,price:12,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'身體側扁、銀白，背鰭最後一根鰭條延長成絲，鰓蓋後方有一個黑斑，體側有數列小黑點。',habitat:'成群生活在內灣、河口與沿岸淺水。',diet:'濾食浮游生物。',distribution:'西北太平洋。香港吐露港的幼魚採樣中，數量排名第三。遊戲中的日本海鰶是不同的魚。',food:'可食用，刺多；日本壽司店用的小斑鰶稱「小鰭」。',hint:'背鰭最後一根長成細絲，肩上有一個黑點。',source:toloPaper},
{id:'whipfinmojarra',name:'長棘銀鱸',other:'曳絲鑽嘴魚、碗米仔',latin:'Gerres filamentosus',min:.03,max:.25,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體銀白、高而側扁，背鰭第二根硬棘延長成絲；體側有數列暗色斑點，嘴巴可以向前伸出。',habitat:'在內灣與河口的砂泥底活動。',diet:'伸出嘴巴吸食底棲小動物。',distribution:'印度—西太平洋。吐露港兩個採樣站都有幼魚紀錄。',food:'可食用。',hint:'背鰭有一根長長的絲，嘴巴能像吸管一樣伸出。',source:toloPaper},
{id:'alpinechar',name:'阿爾卑斯紅點鮭',other:'',latin:'Salvelinus umbla',min:.2,max:1.5,price:22,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'鮭科魚，背部灰綠帶淡色斑點，腹部在產卵期轉為橙紅；胸鰭、腹鰭前緣有一條白邊。',habitat:'生活在阿爾卑斯周邊深而冷的湖泊。',diet:'以浮游動物與底棲小動物為食，大型個體也吃魚。',distribution:'阿爾卑斯地區的湖泊。博登湖職業漁獲統計列有紅點鮭，2008 年約 13 噸。',food:'高級食用魚，常燻製或香煎。',hint:'腹部帶橙紅色、魚鰭前緣鑲著白邊的冷水鮭魚。',source:gbifq('Salvelinus umbla')},
{id:'roach',name:'擬鯉',other:'',latin:'Rutilus rutilus',min:.05,max:.6,price:12,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'身體銀白、側扁，眼睛虹膜紅色，腹鰭與臀鰭帶紅色。',habitat:'從湖泊、緩流河川到半淡鹹水的潟湖都能生活。',diet:'雜食，吃水生昆蟲、貝類與水草。',distribution:'歐洲至西亞廣泛分布。博登湖與格賴夫斯瓦爾德潟湖都有分布紀錄，博登湖的漁獲統計把牠歸入「白魚類」。',food:'可食用，刺多，多作遊釣魚。',hint:'紅眼睛的銀色小魚，德語名字就叫「紅眼」。',source:gbifq('Rutilus rutilus')},
{id:'tench',name:'丁鱥',other:'',latin:'Tinca tinca',min:.2,max:2,price:16,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'體色橄欖綠，鱗片細小、藏在厚厚的黏液下，眼睛紅色，口角有一對短鬚。',habitat:'喜歡水草茂密的泥底靜水。',diet:'多在黃昏與夜間覓食，吃底棲昆蟲幼蟲與貝類。',distribution:'歐洲至西伯利亞。博登湖有分布紀錄。',food:'可食用，中歐有養殖。',hint:'滑溜溜的橄欖綠魚，鱗片小得幾乎看不見。',source:gbifq('Tinca tinca')},
{id:'burbot',name:'江鱈',other:'',latin:'Lota lota',min:.3,max:2.5,price:19,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'鱈魚家族中唯一生活在淡水的種類；身體細長，皮膚有斑駁花紋，下巴中央有一根鬚。',habitat:'棲息在冷水湖泊與河川的底層，夜間活動，冬天在冰冷的水裡產卵。',diet:'捕食小魚與底棲動物。',distribution:'環北極的淡水魚。博登湖有分布紀錄。',food:'可食用，肝臟特別大。',hint:'住在淡水裡的鱈魚，下巴有一根鬚，喜歡夜裡出沒。',source:gbifq('Lota lota')},
{id:'duskysleeper',name:'褐塘鱧',other:'棕塘鱧',latin:'Eleotris fusca',min:.02,max:.2,price:14,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'身體延長、頭寬扁，體色暗褐；腹鰭左右分開，不像鰕虎那樣合成吸盤。',habitat:'躲在河口與河川下游的石縫、水草與紅樹林根部。',diet:'夜間捕食蝦蟹與小魚。',distribution:'印度—太平洋。關渡自然公園 2017 年魚類名錄有紀錄。',food:'可食用。',hint:'深褐色、頭扁扁的河口魚，腹鰭是分開的兩片。',source:gdList},
{id:'olivegoby',name:'點帶叉舌鰕虎',other:'斑紋舌鰕虎魚',latin:'Glossogobius olivaceus',min:.02,max:.15,price:13,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'頭部扁平，舌頭前端分叉；體側有一列暗色斑點，腹鰭合成吸盤。',habitat:'棲息於河口與河川下游的砂泥底。',diet:'捕食小蝦、小魚。',distribution:'西北太平洋。關渡名錄有紀錄。',food:'可食用。',hint:'沙底上的鰕虎，體側排著一列暗點。',source:gdList},
{id:'duckbillsleeper',name:'花錐脊塘鱧',other:'花錐棘塘鱧',latin:'Butis koilomatodon',min:.005,max:.04,price:11,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'體型小，吻部尖長如鴨嘴，體色灰褐帶暗色橫紋。',habitat:'常在河口、潟湖的泥灘與牡蠣殼間。',diet:'以小型甲殼類為食。',distribution:'印度—西太平洋。關渡名錄有紀錄；台江國家公園列為七股潟湖的優勢魚之一。',food:'體型小，少作食用。',hint:'尖嘴的小塘鱧，躲在泥灘與蚵殼之間。',source:tjnp},
{id:'tanakia',name:'臺灣石鮒',other:'革條田中鰟鮍、牛屎鯽仔',latin:'Tanakia himantegus',min:.003,max:.015,price:10,bounty:0,kind:'臺灣特有種',water:'fresh',edible:false,form:'身體側扁、呈卵圓形，體側中央有一條藍綠色縱帶；繁殖期雄魚的鰭帶紅色。',habitat:'喜歡水草多的緩流與池塘。雌魚會把卵產進淡水貝類的鰓裡，由貝類保護幼魚。',diet:'雜食。',distribution:'臺灣特有種。關渡名錄有紀錄，日月潭潭區調查也有捕獲。',food:'觀賞性小魚，不作食用。',hint:'身上有一條藍綠色帶子，會把卵產在河蚌裡的小魚。',source:smReport},
{id:'rosybitterling',name:'高體鰟鮍',other:'紅目鯽仔、點鱊',latin:'Rhodeus ocellatus',min:.002,max:.01,price:10,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:false,form:'體高而側扁的小魚，繁殖期雄魚體色泛紅紫。',habitat:'棲息於水草茂密的池塘與溝渠，同樣把卵產在淡水貝類體內。',diet:'以藻類與小型無脊椎動物為食。',distribution:'東亞。關渡名錄有紀錄。',food:'觀賞性小魚，不作食用。',hint:'只有手指大的高身小魚，繁殖期全身泛著淡紫紅。',source:gdList},
{id:'pearleartheeater',name:'巴西珠母麗魚',other:'西德藍寶石',latin:'Geophagus brasiliensis',min:.05,max:.4,price:14,bounty:0,kind:'外來入侵種',water:'fresh',edible:true,form:'慈鯛科，體側有閃亮的藍色珠點，鰓蓋附近也有藍點。',habitat:'原產南美洲的河川與湖泊。',diet:'會把砂泥含進嘴裡，篩出其中的小動物來吃。',distribution:'原產巴西；關渡名錄列為外來入侵種。',food:'可食用。',hint:'身上撒滿藍色亮點的外來慈鯛，會含砂篩食。',source:gdList},
{id:'comeshad',name:'環球海鰶',other:'土黃魚',latin:'Nematalosa come',min:.03,max:.2,price:12,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'與日本海鰶相似，身體側扁、銀白，背鰭最後一根鰭條延長成絲。',habitat:'成群出現在沿岸、潟湖與河口。',diet:'濾食浮游生物與有機碎屑。',distribution:'印度—西太平洋。台江國家公園列為七股潟湖優勢魚之一。',food:'可食用，刺多。',hint:'長得很像日本海鰶，也拖著一根細長的背鰭絲。',source:tjnp},
{id:'nuchalponyfish',name:'項斑項鰏',other:'頸斑鰏、金錢仔',latin:'Nuchequula nuchalis',min:.01,max:.06,price:11,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體側扁、銀白，頸背有一塊暗色斑；嘴巴能向下伸出。',habitat:'成群生活在沿岸與河口的砂泥底上層。',diet:'以小型浮游動物為食。',distribution:'西北太平洋。台江國家公園列為七股潟湖優勢魚之一。',food:'小型食用魚，常油炸。',hint:'銀白的小扁魚，脖子後方有一塊暗斑。',source:tjnp},
{id:'tankgoby',name:'叉舌鰕虎',other:'舌鰕虎魚、沙條',latin:'Glossogobius giuris',min:.03,max:.3,price:14,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'頭扁、口大，舌頭前端分叉；體側有數個暗色大斑。',habitat:'棲息於河口與潟湖的砂泥底。',diet:'伏在底層捕食小魚與甲殼類。',distribution:'印度—太平洋。台江國家公園列為七股潟湖優勢魚之一。',food:'可食用。',hint:'體側有一排大暗斑、嘴很大的鰕虎。',source:tjnp},
{id:'frillfingoby',name:'深鰕虎',other:'褐深鰕虎',latin:'Bathygobius fuscus',min:.01,max:.06,price:11,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體型小，體色暗褐；胸鰭最上方幾根鰭條是游離的細絲。',habitat:'住在潮間帶的潮池與石縫。',diet:'以小型甲殼類與蠕蟲為食。',distribution:'印度—太平洋。台江國家公園列為七股潟湖優勢魚之一。',food:'體型小，少作食用。',hint:'潮池裡的深色小鰕虎，胸鰭上端分出細絲。',source:tjnp},
{id:'eelgoby',name:'鰻鰕虎',other:'鬚鰻鰕虎',latin:'Taenioides cirratus',min:.02,max:.15,price:12,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'身體細長如鰻，體色紫紅帶灰，眼睛退化得很小，下巴有短鬚。',habitat:'在河口與潟湖的泥底挖洞居住。',diet:'以小型底棲動物為食。',distribution:'印度—西太平洋。台江國家公園列為七股潟湖優勢魚之一。',food:'可食用。',hint:'像鰻魚一樣細長的鰕虎，眼睛小得幾乎看不見。',source:tjnp},
{id:'milkfish',name:'虱目魚',other:'海草魚、國姓魚、麻虱目',latin:'Chanos chanos',min:.3,max:3,price:18,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'身體延長、銀白，尾鰭深叉，口小而沒有牙齒。',habitat:'在沿海、潟湖與河口活動。',diet:'以藻類、有機碎屑與浮游生物為食。',distribution:'印度—太平洋。台江國家公園稱牠在園區相當常見，是台江地區最具代表性的養殖魚。',food:'臺灣南部最重要的養殖食用魚之一，魚肚、魚皮、魚丸都常見。',hint:'銀亮的長身魚，臺南人早餐常吃牠的魚肚。',source:tjnp},
{id:'convict',name:'九間始麗魚',other:'九間波羅',latin:'Amatitlania nigrofasciata',min:.02,max:.15,price:11,bounty:0,kind:'外來入侵種',water:'fresh',edible:true,form:'小型慈鯛，灰白身體上有八、九條黑色橫帶，「九間」由此而來。',habitat:'在岩石或沉木旁築巢，親魚會守護魚卵與幼魚。',diet:'雜食。',distribution:'原產中美洲；日月潭 2016～2018 年的監測中捕獲 1,385 尾，占潭區漁獲一半以上。調查報告使用舊學名 Archocentrus nigrofasciatus。',food:'體型小，少作食用。',hint:'身上有八、九條黑色直紋的小型外來魚，是潭區最常捕到的魚。',source:smReport},
{id:'redevil',name:'厚唇雙冠麗魚',other:'紅魔鬼、火鶴魚',latin:'Amphilophus labiatus',min:.1,max:1.2,price:15,bounty:0,kind:'外來入侵種',water:'fresh',edible:true,form:'嘴唇特別肥厚，體色多為橘紅或白色；成魚額頭可能隆起。和紅魔麗體魚外形相似，常被混稱「紅魔鬼」。',habitat:'原產尼加拉瓜的湖泊。',diet:'用厚唇在岩縫間吸食螺貝、小蝦與小魚。',distribution:'原產中美洲；日月潭監測中捕獲 800 尾，數量僅次於九間始麗魚。',food:'可食用。',hint:'嘴唇厚得像塗了口紅的橘紅色外來魚。',source:smReport},
{id:'jewelcichlid',name:'雙斑伴麗魚',other:'紅寶石',latin:'Hemichromis bimaculatus',min:.01,max:.08,price:10,bounty:0,kind:'外來入侵種',water:'fresh',edible:true,form:'體色紅色，體側與鰓蓋上各有一塊黑斑，身上散布藍色亮點。',habitat:'原產西非，領域性強。',diet:'以小型無脊椎動物與小魚為食。',distribution:'原產非洲；日月潭本期監測有捕獲。',food:'觀賞魚，體型小，少作食用。',hint:'紅色身體上有兩塊黑斑，閃著藍色亮點。',source:smReport},
{id:'kuhua',name:'臺灣白甲魚',other:'苦花、鯝魚',latin:'Onychostoma barbatulum',min:.05,max:.4,price:17,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'身體延長，下巴前緣有角質的刮緣；成魚口邊有短鬚。',habitat:'原本生活在水質清澈、水流湍急的溪流。',diet:'刮食石面附著藻類，啃食時身體翻轉會露出銀光。',distribution:'臺灣與華南的原生魚；日月潭本期監測在潭區有捕獲。',food:'溪流中的高級食用魚。',hint:'會翻身刮食石頭上藻類、閃出銀光的溪魚。',source:smReport},
{id:'siamglassfish',name:'暹羅副雙邊魚',other:'玻璃魚',latin:'Parambassis siamensis',min:.003,max:.02,price:10,bounty:0,kind:'外來入侵種',water:'fresh',edible:false,form:'身體透明，可以看見骨骼與內臟，背鰭分成前後兩段。',habitat:'原產東南亞，成群生活在靜水中。',diet:'捕食浮游動物與魚卵。',distribution:'原產東南亞。調查報告指出牠入侵日月潭後，奇力魚的族群數量減少許多。',food:'觀賞性小魚，不作食用。',hint:'透明得看得見骨頭的小魚，被認為是奇力魚變少的原因之一。',source:smReport},
{id:'marbledeel',name:'花鰻鱺',other:'鱸鰻、花鰻、土龍',latin:'Anguilla marmorata',min:.5,max:6,price:24,bounty:0,kind:'水域紀錄魚種',water:'fresh',edible:true,form:'大型鰻魚，體色黃褐，全身布滿暗色大理石般的斑紋。',habitat:'在海中出生，幼鰻溯河，成長期生活在河川與湖泊；成熟後回到海中產卵。',diet:'夜間捕食魚、蝦與蟹。',distribution:'印度—太平洋。日月潭潭區調查名單有紀錄。',food:'可食用，臺灣民間視為進補食材。',hint:'全身大理石花紋的大鰻魚，只在夜裡出來。',source:smReport}]);
regions.push(
{id:'biwa',name:'琵琶湖',area:'日本・滋賀',lat:35.25,lon:136.08,water:'淡水湖泊',desc:'日本最大的湖，位於滋賀縣中央，分為深廣的北湖與淺而多水草的南湖；湖中已知的特有生物超過六十種。',pool:{ayu:26,honmoroko:20,carp:16,nigorobuna:16,whitecrucian:14,biwamasu:8},source:'https://www.pref.shiga.lg.jp/ippan/shigotosangyou/suisan/319620.html'},
{id:'kasumigaura',name:'霞浦湖',area:'日本・茨城',lat:36.05,lon:140.38,water:'淡水湖泊',desc:'日本第二大湖，位於茨城縣南部，與北浦經利根川通往太平洋；湖淺而遼闊，過去以白帆張網的帆引船捕魚。湖岸已多改為護岸，沉水植物大多消失。',pool:{wakasagi:28,icefish:18,channelcat:18,carp:16,silver:12,bluegill:8},source:'https://www.pref.ibaraki.jp/nourinsuisan/naisuishi/gyogancho/documents/089_column_1.pdf'});
Object.assign(flavor,{
biwa:{phase:{dawn:['湖面還很安靜，對岸的比良山脈罩在薄霧裡。','早起的漁船從港口出發，船尾拖出一道白線。'],day:['陽光照進淺水，水草在湖底輕輕搖動。','遠處的琵琶湖大橋上，車輛一輛接一輛地過橋。'],dusk:['夕陽沉向西岸的山後，湖面染成一片金紅。','漁船陸續回港，岸邊傳來收網的聲音。'],night:['湖岸城鎮的燈火沿著水邊排成一線。','夜風從北邊吹來，湖水拍岸的聲音變得清楚。']},weather:{sunny:['天氣晴朗，湖水由岸邊的淡綠漸漸轉成深藍。','萬里無雲，對岸的山稜線一清二楚。'],cloudy:['雲層壓得很低，湖面和天空分不出界線。','風轉涼了，湖面起了細碎的波紋。'],rain:['雨點打在湖面，近岸的蘆葦叢沙沙作響。','雨下大了，流進湖裡的小河開始漲水。']},facts:['滋賀縣把八種琵琶湖特產魚介選為「琵琶湖八珍」，取頭一字可以唸成「ビワ・コ・ハ・ホン・ニ・ス・ゴ・イ」。','琵琶鱒長年沒有正確的學名，直到 2025 年才由琵琶湖博物館等團隊正式命名為 Oncorhynchus biwaensis。','鮒壽司是用米飯讓鹽漬的煮頃鮒發酵而成，1998 年被列為滋賀縣無形民俗文化財。','南湖的水草長得太茂盛，滋賀縣 2024 年度一共割除了 4,581 噸水草。']},
kasumigaura:{phase:{dawn:['天剛亮，湖面一片灰白，看不清對岸。','蓮田那邊傳來農機的聲音，早班的工作開始了。'],day:['湖面又寬又平，遠處只看得到一條細細的岸線。','拖網漁船在湖心慢慢來回，後面跟著幾隻水鳥。'],dusk:['夕陽落在筑波山一側，山影映在湖面上。','風停了，湖面平得像一面鏡子。'],night:['岸邊的路燈一盞盞亮起，湖上一片漆黑。','四周很安靜，只聽得到蘆葦叢裡的蟲鳴。']},weather:{sunny:['天氣晴朗，筑波山的雙峰清楚地立在西北方。','陽光很強，湖面反光刺得眼睛瞇了起來。'],cloudy:['雲很厚，湖水看起來比平常更混濁。','湖上起風，浪頭比想像中還要高。'],rain:['雨落在寬闊的湖面，激起一片細密的水花。','雨天沒什麼人，堤岸上只剩自己一個。']},facts:['霞浦湖過去以張著白色大帆的帆引船捕魚，當地的鄉土料理「帆引煮鰻」就是用竹葉擺成帆船的樣子。','霞浦湖與北浦的鯉魚養殖量是日本第一，2021 年收獲 749 噸。','江戶時代霞浦湖做的烤西太公魚曾獻給幕府；這片湖區的佃煮、煮干與釜揚食文化在 2024 年獲選文化廳「百年食物」。','日本銀魚活著的時候全身透明，被稱為「霞浦北浦的鑽石」。']}});
Object.assign(weatherOdds,{biwa:[40,35,25],kasumigaura:[45,35,20]});
Object.assign(conditions,{biwamasu:{weather:{rain:2},note:'雨天較常見'},burbot:{phase:{night:2},note:'夜晚較常見'},marbledeel:{phase:nightOnly,note:'夜晚限定'}});
const additions16={kenting:{rabbitfish:6,mono:5,fivestripewrasse:8,flagtail:6,hawkfish:5,manybargoatfish:5},tolo:{chelon:6,largescalemullet:4,oyena:6,puffer:3,dottedshad:7,whipfinmojarra:5},bodensee:{zander:7,alpinechar:6,roach:10,tench:6,burbot:5},greifswald:{roach:8,commonbream:6,browntrout:5},sunmoon:{convict:6,redevil:5,jewelcichlid:2,kuhua:3,tanakia:2,siamglassfish:3,stripedsnakehead:2,walkingcatfish:2,redfinculter:3,marbledeel:2},guandu:{duskysleeper:3,olivegoby:3,duckbillsleeper:2,tanakia:2,rosybitterling:2,pearleartheeater:3},qigu:{comeshad:6,nuchalponyfish:4,duckbillsleeper:4,tankgoby:3,frillfingoby:3,eelgoby:3,milkfish:6}};
for(const r of regions){const extra=additions16[r.id];if(!extra)continue;const budget=100-Object.values(extra).reduce((a,b)=>a+b,0),entries=Object.entries(r.pool),total=entries.reduce((a,[,w])=>a+w,0),scaled=entries.map(([id,w],index)=>({id,index,exact:w/total*budget,value:Math.floor(w/total*budget)}));let remainder=budget-scaled.reduce((a,x)=>a+x.value,0);for(const x of [...scaled].sort((a,b)=>(b.exact-b.value)-(a.exact-a.value)||a.index-b.index)){if(remainder--<=0)break;x.value++}r.pool=Object.fromEntries(scaled.map(x=>[x.id,x.value]));Object.assign(r.pool,extra)}
const addDistribution=(ids,text)=>ids.forEach(id=>fish.find(f=>f.id===id).distribution+=text);
addDistribution(['carp'],'琵琶湖、霞浦湖均有分布；霞浦湖與北浦的網箱養殖量為日本第一。');
addDistribution(['whitecrucian'],'原產日本琵琶湖，日語名ゲンゴロウブナ，是釣魚用「平鮒」的原種。');
addDistribution(['silver'],'日本在利根川與霞浦湖水系繁殖，2023 年確認在流入霞浦湖的櫻川產卵。');
addDistribution(['rabbitfish','mono'],'墾丁海域垂釣調查有紀錄。');
addDistribution(['chelon','oyena','largescalemullet','puffer'],'香港吐露港淺水採樣有幼魚紀錄。');
addDistribution(['zander'],'博登湖有分布紀錄。');
addDistribution(['commonbream'],'格賴夫斯瓦爾德潟湖有分布紀錄。');
addDistribution(['browntrout'],'降海型稱海鱒，格賴夫斯瓦爾德潟湖有紀錄。');
addDistribution(['redfinculter','stripedsnakehead','walkingcatfish'],'日月潭潭區調查有紀錄。');
fish.find(f=>f.id==='browntrout').other='湖鱒、海鱒';
fish.find(f=>f.id==='midas').other='橘色雙冠麗魚';

// 0.16 refill batch C: Keelung, Longdong, Penghu. Northeast-coast fish follow the NTOU digifish list; Penghu uses GBIF records.
const digifish=n=>'https://digifish.biodiv.tw/northeast_detail.php?id='+n,phGbif='https://www.gbif.org/occurrence/search?taxon_key=587&decimal_latitude=23.5,23.64&decimal_longitude=119.5,119.68';
fish.push(...[
{id:'neglectascorpion',name:'斑鰭石狗公',other:'石狗公',latin:'Scorpaenopsis neglecta',min:.08,max:.6,price:18,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'頭大、多棘，體色斑駁，胸鰭內側有斑紋；背鰭硬棘有毒。',habitat:'生活在 1～30 公尺的礁石區或海草區，靠擬態一動也不動地等候獵物。',diet:'捕食小魚與甲殼類。',distribution:'西太平洋與西印度洋；東北角可見於基隆八斗子、澳底。與遊戲中的石狗公（褐菖鮋）是不同的魚。',food:'可食用，處理時須小心背鰭毒棘。',hint:'和石頭長得一模一樣，背上的硬棘有毒。',source:digifish(23)},
{id:'raccoonbutterfly',name:'月斑蝴蝶魚',other:'月眉蝶、月鯛',latin:'Chaetodon lunula',min:.03,max:.2,price:10,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體色黃色，眼睛周圍有一條黑色寬帶，額頭上方有白帶，像戴著眼罩。',habitat:'夜行性，白天躲在礁石內。',diet:'晚上出來捕食多毛蟲、海葵、珊瑚蟲與藻類。',distribution:'印度洋至太平洋；東北角名錄記「常見於基隆八斗子」。',food:'觀賞魚。',hint:'黃色的蝴蝶魚，眼睛像戴了黑色眼罩。',source:digifish(5)},
{id:'blackeyewrasse',name:'黑腕海豬魚',other:'黑貓仔、黑臂儒艮鯛',latin:'Halichoeres melanochir',min:.03,max:.25,price:14,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'細長的隆頭魚，胸鰭基部有一塊黑斑，像戴著黑色護腕。',habitat:'白天在礁區活動，夜裡鑽進沙中睡覺。',diet:'捕食底棲小動物。',distribution:'西太平洋；臺灣各地岩礁海域皆有，包括基隆、澳底。',food:'可食用。',hint:'胸鰭根部有一塊黑斑，晚上會鑽進沙裡睡覺。',source:digifish(29)},
{id:'yellowfinsurgeon',name:'黃鰭刺尾鯛',other:'倒吊、粗皮仔',latin:'Acanthurus xanthopterus',min:.2,max:1.5,price:17,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體高而側扁，胸鰭外半部黃色；尾柄兩側有像手術刀的硬棘。',habitat:'成魚在較深的礁區與潟湖，幼魚常在潮池。',diet:'以絲狀藻、矽藻與碎屑為食。',distribution:'印度—泛太平洋；臺灣以北部、東北部海域最多。',food:'可食用，處理時須避開尾柄的棘。',hint:'尾巴兩側藏著小刀的吃藻魚。',source:digifish(51)},
{id:'slenderpinjalo',name:'南方擬金眼鯛',other:'三角仔、刀片、水果刀',latin:'Pempheris schwenkii',min:.02,max:.12,price:12,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體側扁、呈刀片般的三角形，眼睛很大，體色帶銅色光澤。',habitat:'典型夜行魚，白天躲在礁盤下方或洞穴。',diet:'夜間成群出來捕食浮游動物與小型甲殼類。',distribution:'印度—西太平洋；東北角貢寮、澳底均可發現。',food:'可食用。',hint:'像一片水果刀的大眼魚，天黑才成群出來。',source:digifish(7)},
{id:'threadfinbutterfly',name:'揚旛蝴蝶魚',other:'人字蝶、白刺蝶',latin:'Chaetodon auriga',min:.03,max:.2,price:10,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體側有人字形的斜紋，背鰭後方延長成一根細絲，末端附近有一個黑色眼斑。',habitat:'從珊瑚礁到藻叢石礫都能生活。',diet:'撕食多毛蟲、海葵與珊瑚蟲。',distribution:'印度洋至太平洋；臺灣各地海域包括基隆、澳底。',food:'觀賞魚。',hint:'背鰭拖著一根細絲，身上畫著人字紋。',source:digifish(3)},
{id:'greenfinwrasse',name:'綠鰭海豬魚',other:'綠鰭儒艮鯛',latin:'Halichoeres marginatus',min:.03,max:.25,price:14,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'雄魚體色深綠帶橘紅細紋，魚鰭有綠色鑲邊；幼魚與雌魚顏色較暗。',habitat:'在岸礁、礁砂混合區與礁坡活動。',diet:'捕食底棲小動物。',distribution:'印度—太平洋；臺灣各地岩礁海域，包括基隆、澳底。',food:'可食用。',hint:'魚鰭鑲著綠邊的海豬魚。',source:digifish(25)},
{id:'chocolatehind',name:'橫紋九刺鮨',other:'橫帶鱠、黑貓仔、竹鱠',latin:'Cephalopholis boenak',min:.08,max:.6,price:20,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'小型石斑，體色暗褐，體側有數條模糊的深色橫帶；鰓蓋上有一個黑斑。',habitat:'棲息在 1～30 公尺的礁區。',diet:'以魚類及甲殼類為食。',distribution:'印度—西太平洋；臺灣北部、東部、南部沿岸較常見，澎湖內海也有不少紀錄。',food:'可食用。',hint:'身上有幾條暗色直紋的小型石斑。',source:digifish(54)},
{id:'sammara',name:'莎姆新東洋金鱗魚',other:'鐵甲、金鱗甲、鐵甲兵',latin:'Neoniphon sammara',min:.05,max:.3,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體色銀紅，鱗片硬而粗，背鰭硬棘部有一塊紅黑色斑；眼睛很大。',habitat:'成群夜行，白天待在珊瑚枝枒或礁穴附近。',diet:'夜裡游出捕食小蝦蟹。',distribution:'印度—太平洋溫熱帶；臺灣東北部、北部、東部、南部與澎湖。',food:'可食用，鱗片堅硬。',hint:'穿著一身硬鱗甲、夜裡才出動的紅色大眼魚。',source:digifish(151)},
{id:'bigeyesnapper',name:'正笛鯛',other:'線紋笛鯛、黃笛鯛、赤筆仔',latin:'Lutjanus lutjanus',min:.08,max:.5,price:18,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體色銀白，體側有一條金黃色縱帶，眼睛大；尾鰭帶黃色。',habitat:'成群在礁區與砂泥底附近活動。',diet:'捕食小魚與甲殼類。',distribution:'印度—西太平洋；澎湖內海一帶有紀錄。',food:'可食用。',hint:'銀白身體上有一條金黃色帶子的大眼笛鯛。',source:phGbif},
{id:'yellowstripescad',name:'金帶細鰺',other:'木葉鰺、目孔',latin:'Selaroides leptolepis',min:.05,max:.3,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體側扁、銀白，體側有一條寬的金黃色縱帶，鰓蓋上緣有一個黑斑。',habitat:'成群出現在沿岸淺海的砂泥底上層。',diet:'捕食浮游甲殼類與小魚。',distribution:'印度—西太平洋；澎湖內海一帶有紀錄。',food:'常見的小型食用魚，多油炸或煎。',hint:'成群游的小鰺魚，身上有一條金黃色帶子。',source:phGbif},
{id:'monogrammonocle',name:'單帶眶棘鱸',other:'黑帶赤尾冬、紅尾冬仔',latin:'Scolopsis monogramma',min:.08,max:.6,price:17,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'眼下有一根向後的小棘，體側有一條暗色縱帶，尾鰭上下葉帶紅色。',habitat:'在礁區旁的砂地活動。',diet:'捕食底棲的蝦、蟹與蠕蟲。',distribution:'印度—西太平洋；澎湖內海一帶有紀錄。遊戲已有的白頸赤尾冬是同屬近親。',food:'可食用。',hint:'眼睛下面藏著小刺、尾巴帶紅邊的赤尾冬。',source:phGbif},
{id:'seagrassparrot',name:'凹尾鸚鯉',other:'凹尾絢鸚嘴魚、臺灣鸚鯉、鸚哥',latin:'Calotomus spinidens',min:.05,max:.4,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'嘴巴像鳥喙，體色斑駁的綠褐色，能隨環境變色。',habitat:'住在海草床與藻叢。',diet:'啃食海草與藻類。',distribution:'印度—西太平洋；澎湖內海一帶有紀錄。',food:'可食用。',hint:'躲在海草床裡、嘴巴像鸚鵡的魚。',source:phGbif}]);
Object.assign(conditions,{slenderpinjalo:{phase:{night:2},note:'夜晚較常見'},sammara:{phase:{night:2},note:'夜晚較常見'}});
const additionsC={keelung:{neglectascorpion:4,blackeyewrasse:3,yellowfinsurgeon:3,flagtail:3,raccoonbutterfly:2},longdong:{slenderpinjalo:4,neglectascorpion:3,greenfinwrasse:3,chocolatehind:3,sammara:3,threadfinbutterfly:2},penghu:{yellowstripescad:6,chocolatehind:5,bigeyesnapper:5,monogrammonocle:5,seagrassparrot:5}};
for(const r of regions){const extra=additionsC[r.id];if(!extra)continue;const budget=100-Object.values(extra).reduce((a,b)=>a+b,0),entries=Object.entries(r.pool),total=entries.reduce((a,[,w])=>a+w,0),scaled=entries.map(([id,w],index)=>({id,index,exact:w/total*budget,value:Math.floor(w/total*budget)}));let remainder=budget-scaled.reduce((a,x)=>a+x.value,0);for(const x of [...scaled].sort((a,b)=>(b.exact-b.value)-(a.exact-a.value)||a.index-b.index)){if(remainder--<=0)break;x.value++}r.pool=Object.fromEntries(scaled.map(x=>[x.id,x.value]));Object.assign(r.pool,extra)}
addDistribution(['flagtail'],'東北角沿岸有紀錄。');

// 0.18: Japanese lake additions. Sources and game values: SOURCES.md, ../歷代更新記錄.md.
fish.push(...[
  {
    "id": "hasu",
    "name": "真馬口鱲",
    "other": "",
    "latin": "Opsariichthys uncirostris",
    "min": 0.08,
    "max": 0.65,
    "price": 17,
    "bounty": 0,
    "kind": "日本湖泊魚種",
    "water": "fresh",
    "edible": true,
    "form": "身體細長、銀白，背部灰綠；口大，口裂從側面看有明顯的彎折，像倒寫的「へ」字。",
    "habitat": "生活在湖泊與相連的河川，會追逐水中成群的小魚。",
    "diet": "肉食性，以小魚為主。琵琶湖中的小香魚是牠的獵物之一。",
    "distribution": "日本琵琶湖、淀川水系與福井縣三方湖原有分布；也隨魚苗放流移入其他水域，霞浦湖已有紀錄。",
    "food": "日本有鹽烤及加工食用的紀錄。",
    "hint": "嘴角有明顯彎折，會追逐小魚的銀色湖魚。",
    "source": "https://www.knsk-osaka.jp/zukan/zukan_database/tansui/6550b2c290c751e/3350b5a40d3ba16.html"
  },
  {
    "id": "isaza",
    "name": "疣舌裸身鰕虎",
    "other": "疣舌裸頭鰕虎魚",
    "latin": "Gymnogobius isaza",
    "min": 0.003,
    "max": 0.012,
    "price": 16,
    "bounty": 0,
    "kind": "琵琶湖特有種",
    "water": "fresh",
    "edible": true,
    "form": "小型鰕虎，頭與眼睛較大，體色淡褐，尾柄細長；背上有兩枚分開的背鰭。",
    "habitat": "平時生活在琵琶湖北湖沖合，春天到岸邊的石礫區產卵，雄魚會守護石下的卵。",
    "diet": "以動物性浮游生物與小型水生動物為食。",
    "distribution": "琵琶湖的特有鰕虎。國立環境研究所收錄多份琵琶湖標本，族群資源需要持續關注。",
    "food": "當地稱「イサザ」，可與大豆同煮，也用於佃煮或鍋物。",
    "hint": "尾柄細長的小鰕虎，春天會到北湖石岸產卵。",
    "source": "https://www.nies.go.jp/biwako_specimens/contents/species.php?spid=8"
  },
  {
    "id": "gigi",
    "name": "叉尾瘋鱨",
    "other": "",
    "latin": "Tachysurus nudiceps",
    "min": 0.04,
    "max": 0.35,
    "price": 15,
    "bounty": 0,
    "kind": "日本湖泊魚種",
    "water": "fresh",
    "edible": true,
    "form": "身體無鱗，呈灰褐色，口邊有四對鬚；背鰭後方有脂鰭，尾鰭深叉，與一般鯰魚不同。",
    "habitat": "棲息在湖泊與河川的砂礫底、石縫及岸邊植物根部，夜間較活躍。",
    "diet": "捕食小魚、甲殼類等水生動物。",
    "distribution": "日本本州、四國與九州部分水系的淡水魚；琵琶湖北湖及周邊水域有標本紀錄。部分地區族群減少。",
    "food": "有食用紀錄；背鰭與胸鰭有尖棘，處理時須留意。",
    "hint": "長著四對鬚，背上有脂鰭、尾巴深叉的灰褐色底棲魚。",
    "source": "https://jmapps.ne.jp/ikimono/det.html?data_id=7963"
  }
]);
const additions18={"biwa":{"hasu":8,"isaza":6,"gigi":4,"topmouth":7,"loach":5,"amurcatfish":3,"eel":3,"bluegill":4},"kasumigaura":{"hasu":8,"topmouth":8,"whitecrucian":7,"loach":6,"eel":3,"amurcatfish":3,"rosybitterling":4,"swampeel":3}};
for(const [rid,extra] of Object.entries(additions18)){const r=regions.find(r=>r.id===rid),budget=100-Object.values(extra).reduce((a,b)=>a+b,0),entries=Object.entries(r.pool),total=entries.reduce((n,[,w])=>n+w,0),scaled=entries.map(([id,w],i)=>({id,i,exact:w/total*budget,w:Math.floor(w/total*budget)}));let left=budget-scaled.reduce((n,x)=>n+x.w,0);for(const x of [...scaled].sort((a,b)=>(b.exact-b.w)-(a.exact-a.w)||a.i-b.i)){if(left--<=0)break;x.w++}r.pool={...Object.fromEntries(scaled.map(x=>[x.id,x.w])),...extra}}
addDistribution(['topmouth','loach','amurcatfish','eel','bluegill'],'琵琶湖亦有紀錄。');
addDistribution(['topmouth','whitecrucian','loach','eel','amurcatfish','rosybitterling','swampeel'],'霞浦湖亦有紀錄。');
Object.assign(conditions,{gigi:{phase:{night:2},note:'夜晚較常見'}});

// 0.21: France, Arcachon Bay. Six fish from Ifremer's 2001 Arcachon small-scale fishery report; sources in SOURCES.md「0.21」.
const ifremerArcachon='https://archimer.ifremer.fr/doc/00000/1660/1293.pdf';
const fish21=[
{id:'europeanseabass',name:'歐洲鱸',other:'歐洲舌齒鱸',latin:'Dicentrarchus labrax',min:.4,max:3.5,price:17,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'身體修長而側扁，背部灰藍，體側銀白；兩枚背鰭分開，胸鰭長如鐮刀，尾鰭分叉，適合快速游動。',habitat:'生活在沿岸淺水，常進出河口與潟湖，偶爾上溯河川；能適應鹽度很低的水。夏季靠近岸邊，天冷時移往外海較深處。',diet:'游速快的掠食魚，捕食小魚與甲殼類，獵物多半整隻吞下。',distribution:'東北大西洋自摩洛哥至挪威，以及地中海與黑海南部。阿卡雄灣的漁民在滿潮前後於水道與海草床放單層刺網捕捉，這種漁法叫「捕狼」（pêche au loup）；灣內捕到的多是幼魚。',food:'歐洲重要的食用魚與養殖魚，也是熱門的遊釣魚種。',hint:'銀灰修長、尾鰭分叉的掠食魚，隨潮水進出潟湖。',source:fb+'Dicentrarchus-labrax.html'},
{id:'gilthead',name:'金頭鯛',other:'',latin:'Sparus aurata',min:.3,max:3,price:16,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體高而側扁，頭部輪廓圓鈍；兩眼之間有一道金色橫帶，鰓蓋上有一塊大黑斑。',habitat:'出沒在海草床、沙底與碎浪帶，多在水深 30 公尺以內，單獨或小群活動；春季常進入半淡鹹水的潟湖與河口。',diet:'以貝類為主食，能咬碎貽貝與牡蠣的硬殼，也吃多毛類、甲殼類與海藻。',distribution:'東大西洋自英倫三島至維德角，以及地中海。幼魚先成熟為雄魚，約三歲後轉為雌魚；比斯開灣的族群在夏末秋初產卵。阿卡雄灣以刺網捕撈，也是遊釣的對象。',food:'地中海與大西洋沿岸的高級食用魚，養殖量很大。',hint:'兩眼之間有一道金帶，牙齒咬得碎貝殼。',source:fb+'Sparus-aurata.html'},
{id:'commonsole',name:'歐洲鰨',other:'鰨、多佛鰨',latin:'Solea solea',min:.15,max:1.5,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'長橢圓形的比目魚，兩眼都在身體右側；有眼的一側褐色帶深色斑，無眼側白色，背鰭與臀鰭沿著身體邊緣長成一圈。',habitat:'多單獨生活，白天鑽進沙泥底；冬季退到較深的水域。幼魚頭兩三年在海灣、河口等沿岸育幼場長大，之後才遷往深水。',diet:'夜間出來覓食蠕蟲、貝類與小型甲殼類。',distribution:'東大西洋自挪威特隆赫姆峽灣向南至塞內加爾，包括北海、西波羅的海與地中海。阿卡雄灣的漁民以三層刺網捕捉。',food:'歐洲重要的食用魚，多以鮮魚上市。',hint:'兩眼都長在右邊，白天把自己埋進沙裡的比目魚。',source:fb+'Solea-solea.html'},
{id:'thicklipmullet',name:'粗唇龜鯔',other:'',latin:'Chelon labrosus',min:.3,max:2.5,price:11,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'紡錘形，頭寬而扁；上唇特別厚，表面布滿小乳突。背部灰藍，體側有數條灰色縱紋。',habitat:'成群在近岸活動，常進入半淡鹹水潟湖，也能進入淡水；夏季隨水溫上升往北移動。',diet:'成魚刮食底泥上的矽藻、附生藻類、小型無脊椎動物與有機碎屑；幼魚只吃浮游動物。',distribution:'東大西洋自冰島、法羅群島與挪威南部至維德角，以及地中海與黑海。阿卡雄灣的鯔類在 1999～2000 年的上岸統計中是量最多的魚，粗唇龜鯔約在四月產卵。',food:'可食用，阿卡雄灣的漁民以刺網大量捕撈。',hint:'上唇又厚又有小突起，成群在潟湖淺處刮食藻類。',source:fb+'Chelon-labrosus.html'},
{id:'redmullet',name:'鬚羊魚',other:'',latin:'Mullus barbatus',min:.05,max:.4,price:12,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體紅色至粉紅，頭部前端輪廓陡直；下頜垂著一對長鬚，用來在底泥裡探找食物。',habitat:'生活在大陸棚的礫石、沙與泥底，水深 10～300 公尺；幼魚夏末來到比斯開灣沿岸。',diet:'用鬚翻找底棲的小型甲殼類、蠕蟲與貝類。',distribution:'東大西洋自蘇格蘭、挪威至塞內加爾，以及地中海與黑海。法文叫 rouget barbet de vase，意思是「泥底的紅鬚魚」，是阿卡雄灣漁業的主要魚種之一。',food:'主要以鮮魚上市。',hint:'紅色的小魚，下巴垂著兩根鬚。',source:fb+'Mullus-barbatus.html'},
{id:'blackseabream',name:'黑椎鯛',other:'灰鯛',latin:'Spondyliosoma cantharus',min:.2,max:1.2,price:13,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體高而側扁，吻部不比眼徑短；體色灰銀，帶有淡淡的縱紋，身上沒有黑斑。',habitat:'出沒在海草床、岩礁與沙底，最深可達 300 公尺；喜歡群居，有時聚成大群。',diet:'雜食性，吃海藻與小型無脊椎動物，尤其是甲殼類。',distribution:'東大西洋自斯堪地那維亞至納米比亞北部，以及地中海與黑海。牠先成熟為雌魚，之後轉為雄魚，和金頭鯛正好相反。法文叫 griset 或 dorade grise（灰鯛），阿卡雄灣有上岸紀錄。',food:'重要的食用魚。',hint:'灰色的鯛魚，身上只有淡淡的縱紋。',source:fb+'Spondyliosoma-cantharus.html'},
{id:'europeaneel',name:'歐洲鰻鱺',other:'歐洲鰻',latin:'Anguilla anguilla',min:.1,max:1.5,price:21,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'身體細長如蛇，前段圓筒形、後段略側扁；下頜比上頜稍長。背鰭、尾鰭與臀鰭連成一條長鰭，背鰭起點遠在胸鰭之後。',habitat:'從溪流、大河到湖岸的各種水底都能生活，但只出現在與海相通的水域；多單獨活動，有地盤性。',diet:'活躍的掠食者，吃小魚、昆蟲與貝類。',distribution:'大西洋東岸自斯堪地那維亞至摩洛哥，以及波羅的海、地中海、黑海與相連的河川。成鰻遠赴西大西洋的馬尾藻海產卵，柳葉狀的幼生隨墨西哥灣流漂回歐洲，在大陸棚變態成透明的玻璃鰻再進入河口；比斯開灣是幼鰻來得最多的地方。2018 年 IUCN 評為極危。',food:'歐洲傳統的食用魚與養殖魚，阿卡雄灣漁民以鰻籠捕撈。',hint:'細長如蛇，背鰭、尾鰭、臀鰭連成一條，出生地在遙遠的大洋。',source:fb+'Anguilla-anguilla.html'},
{id:'goldenmullet',name:'金鮻',other:'',latin:'Chelon auratus',min:.2,max:1.2,price:11,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'紡錘形的鯔魚，胸鰭較長，基部沒有黑斑；鰓蓋上有一塊金色斑，因而得名。',habitat:'成群在近岸活動，會進入潟湖與河口下游，很少進入淡水。幼魚冬季到春季移入沿岸潟湖與河口。',diet:'吃底棲小生物與有機碎屑，偶爾吃昆蟲與浮游生物；幼魚只吃浮游動物。',distribution:'東大西洋自英倫三島、北海至西非外海諸島，以及地中海與黑海。在海中產卵，阿卡雄灣一帶的產卵期在十月至十一月。',food:'商業捕撈與養殖魚種。',hint:'鰓蓋上有一塊金斑的鯔魚。',source:fb+'Chelon-auratus.html'},
{id:'undulateray',name:'波鰩',other:'',latin:'Raja undulata',min:.6,max:3.5,price:14,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'身體扁平成菱形，胸鰭與頭部連成寬大的體盤，後面拖著細長的尾巴；體盤背面有波浪狀的深色花紋。',habitat:'生活在大陸棚的沙底。',diet:'吃各種底棲動物。',distribution:'東大西洋自英倫三島南部至幾內亞比索，以及地中海。卵產在帶有四角尖刺的長方形卵鞘裡，留在沙泥灘上。法文名 raie brunette，是阿卡雄灣上岸量最多的鰩。IUCN 評為近危。',food:'商業捕撈與遊釣魚種。',hint:'扁平的菱形魚，背上布滿波浪狀花紋。',source:fb+'Raja-undulata.html'},
{id:'thornbackray',name:'背棘鰩',other:'',latin:'Raja clavata',min:.8,max:4.5,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'近菱形的體盤，胸鰭外角明顯，吻部短而圓；背面粗糙，從頸部到尾巴有一列 30～50 枚棘刺，大型雌魚連腹面也長小刺。',habitat:'生活在大陸棚與上部陸坡的泥、沙與礫石底，最常見於水深 10～60 公尺的沿岸，能忍受較低的鹽度。夜行性。',diet:'吃各種底棲動物，偏好甲殼類，也吃魚。',distribution:'東大西洋自冰島至馬達加斯加，包括地中海。雌魚比雄魚大，最大可達 18 公斤。法文名 raie bouclée，與波鰩同為阿卡雄灣的主要漁獲鰩類。IUCN 評為近危。',food:'商業捕撈與遊釣魚種。',hint:'扁平的菱形魚，背脊到尾巴排著一列棘刺。',source:fb+'Raja-clavata.html'},
{id:'senegalsole',name:'塞內加爾鰨',other:'',latin:'Solea senegalensis',min:.15,max:1.2,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'卵圓形的比目魚，兩眼在右側；有眼側的胸鰭鰭膜整片為黑色，歐洲鰨則只在胸鰭後端有一塊黑斑，可以據此分辨。',habitat:'主要生活在沿岸水深 100 公尺內的沙泥底，也會進入半淡鹹水的潟湖。',diet:'以底棲無脊椎動物為食。',distribution:'東大西洋自比斯開灣至塞內加爾與安哥拉，在西地中海較少見。阿卡雄灣 1999～2000 年的上岸量比歐洲鰨還多。',food:'商業捕撈魚種，也有試驗性養殖。',hint:'兩眼在右側的比目魚，胸鰭整片是黑色。',source:fb+'Solea-senegalensis.html'},
{id:'conger',name:'歐洲康吉鰻',other:'康吉鰻',latin:'Conger conger',min:.6,max:5,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'鰻形的大型魚，身體粗壯、沒有鱗片，口大；背鰭從胸鰭附近開始，與尾鰭、臀鰭連成一圈。',habitat:'棲息在岩礁與沙底，水深 0～500 公尺；幼魚留在近岸，長大後移往深水。',diet:'夜間出來捕食魚類、甲殼類與頭足類。',distribution:'東大西洋自挪威、冰島至塞內加爾，以及地中海與黑海。一生只繁殖一次，五到十五歲才成熟；全長可達 3 公尺。阿卡雄灣有上岸紀錄。',food:'商業捕撈與遊釣魚種。',hint:'粗壯的大鰻，白天躲在岩縫，夜裡出來覓食。',source:fb+'Conger-conger.html'},
{id:'whiteseabream',name:'沙重牙鯛',other:'',latin:'Diplodus sargus',min:.15,max:1.2,price:13,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'側扁的鯛魚，吻部比眼徑長；銀灰色的身體上有五條黑色與四條灰色的橫帶相間。',habitat:'出沒在沿岸岩礁與海草床，水深 50 公尺以內；和其他鯛科魚一樣很活躍，常在黎明時游進碎浪帶。',diet:'從岩石上啄食貝類與其他底棲無脊椎動物。',distribution:'東大西洋自法國布列塔尼至直布羅陀與馬德拉群島，以及地中海與黑海西南部，向南至南非。法文叫 sar commun，阿卡雄灣 1999～2000 年有上岸紀錄。',food:'小型商業捕撈與養殖魚種，也是遊釣魚。',hint:'銀灰色的鯛魚，身上黑灰橫帶相間。',source:fb+'Diplodus-sargus.html'}];
fish.push(...fish21);
regions.push({id:'arcachon',name:'阿卡雄灣',area:'法國・新阿基坦（吉倫特）',lat:44.7,lon:-1.15,water:'潟湖・海水',desc:'比斯開灣東岸的潟湖，夾在朗德松林與海岸沙丘之間，經西南的水道通往大西洋；滿潮時水面約 174 平方公里，退潮只剩 60 平方公里。灣內是歐洲最大的牡蠣苗產地。',pool:{thicklipmullet:12,blackseabream:11,goldenmullet:9,whiteseabream:6,europeanseabass:9,gilthead:8,commonsole:7,redmullet:7,senegalsole:6,garfish:5,europeaneel:5,undulateray:5,flounder:4,thornbackray:3,conger:3},source:ifremerArcachon});
Object.assign(flavor,{arcachon:{phase:{dawn:['退潮後的灘地露出大片海草，水鳥在泥上踱步。','早班的木造小船駛出港口，引擎聲在灣裡迴盪。'],day:['遠處的沙丘在陽光下發白，那是歐洲最高的皮拉沙丘。','潮水漲進來，浮標慢慢被推向灣內。'],dusk:['夕陽落向費雷角，水面一片金黃。','養蚵人收工回港，船上堆著一袋袋牡蠣。'],night:['對岸城鎮的燈火沿著海岸排成一線。','退潮的灘地傳來細細的水聲，螃蟹在泥上爬動。']},weather:{sunny:['天空晴朗，鳥島上的高腳屋清楚可見。','水色清亮，淺處的海草隨著潮水擺動。'],cloudy:['大西洋吹來的雲壓得很低，沙丘只剩模糊的輪廓。','風轉向西，水道口的浪變大了。'],rain:['細雨落在潟湖上，一排排養蚵的木樁消失在雨霧裡。','雨打在防水外套上，浮標在水面輕輕點頭。']},facts:['阿卡雄灣是歐洲最大的牡蠣苗產地，每年有超過三十億顆幼蠔運往法國其他產區；灣內牡蠣年產約一萬八千公噸。','十九世紀起，蚵農用塗了石灰的瓦片收集牡蠣苗。原生的歐洲牡蠣約在 1920 年消失，1970 年葡萄牙牡蠣又遭疫病，之後改養從日本引進的長牡蠣。','鳥島上的高腳屋建於 1946 與 1948 年；常有人說是用來看守蚵田，其實一直是度假小屋。','灣與大西洋之間每天約有 3.7 億立方公尺的海水進出，水道的位置約以八十年為週期移動。','阿卡雄灣在 2014 年 6 月設立海洋自然公園；注入灣內的萊爾河三角洲於 2012 年列入拉姆薩濕地。','歐洲鰻在遙遠的馬尾藻海出生，幼生隨墨西哥灣流漂回歐洲；比斯開灣是幼鰻來得最多的海域，阿卡雄灣漁民也捕撈透明的玻璃鰻。']}});
Object.assign(weatherOdds,{arcachon:[40,35,25]});
Object.assign(conditions,{commonsole:{phase:{night:2},note:'夜晚較常見'},senegalsole:{phase:{night:2},note:'夜晚較常見'},europeaneel:{phase:nightOnly,note:'夜晚限定'},conger:{phase:{night:2},note:'夜晚較常見'},thornbackray:{phase:{night:2},note:'夜晚較常見'}});
addDistribution(['garfish','flounder'],'法國阿卡雄灣的歷史漁獲紀錄亦有此魚。');
// 0.22: batch 4, Tokyo Bay and Ishikari Bay. Tokyo Bay fish follow the Tokyo inner-bay aquatic survey (FY2011);
// Ishikari Bay fish follow the Ishikari City museum list of common sea fish. Sources in SOURCES.md「0.22」.
const tokyoSurvey='https://www.kankyo.metro.tokyo.lg.jp/documents/d/kankyo/creature-aquatic_creature-files-h23gaiyou',ishikariList='https://www.city.ishikari.hokkaido.jp/museum/1001801/1004573/1004690.html';
const fish22=[
{id:'japaneseseabass',name:'日本花鱸',other:'日本真鱸、七星鱸',latin:'Lateolabrax japonicus',min:.3,max:3.5,price:18,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'身體修長、略側扁，背部灰綠，體側銀白；小魚背上常有黑色小點，長大後逐漸消失。口大，下頜略突出，背鰭分為硬棘與軟條兩部分。',habitat:'出沒在沿岸岩礁、港灣與河口，水流動的地方最多；幼魚會上溯河川，長大後回到海裡產卵。冬季在較深的岩礁或灣內產卵。',diet:'小時候吃浮游動物，長大後捕食小魚與蝦。',distribution:'西太平洋，日本至南海。東京都內灣的水生生物調查中是代表魚之一，成魚與稚魚調查都有採集紀錄。日本隨成長換名，依序叫セイゴ、フッコ、スズキ，是有名的「出世魚」。',food:'重要的食用魚，也是東京灣船釣與岸釣的代表魚。',hint:'銀白修長的掠食魚，常在河口與港灣的水流裡追小魚。',source:fb+'Lateolabrax-japonicus.html'},
{id:'mahaze',name:'黃鰭刺鰕虎',other:'刺鰕虎',latin:'Acanthogobius flavimanus',min:.01,max:.15,price:14,bounty:0,kind:'河口魚種',water:'brackish',edible:true,form:'細長的鰕虎，頭大而略扁，兩眼靠近頭頂；淡褐色的身體上有一列不明顯的暗斑，腹鰭癒合成吸盤狀。',habitat:'住在海灣與河口的泥沙底，從潮間帶到水深約 6 公尺，有時溯入河川。冬天到初春在泥底挖出 Y 字形的巢產卵。',diet:'吃底棲的小型甲殼類、多毛類與貝類。',distribution:'西北太平洋，北海道至九州、朝鮮半島與中國黃渤海。東京都內灣的稚魚調查中常是數量最多的魚，稚魚春夏在干潟長大，秋天長到可以釣的大小。國土交通省的研究所曾發起「江戶前鰕虎復活計畫」調查牠的棲地。',food:'日本叫マハゼ，是東京灣最普及的釣魚對象之一。',hint:'泥底上的褐色鰕虎，兩眼長在頭頂。',source:fb+'Acanthogobius-flavimanus.html'},
{id:'shirogisu',name:'日本沙鮻',other:'少鱗鱚、青沙鮻',latin:'Sillago japonica',min:.02,max:.2,price:16,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'細長而略圓的身體，吻部尖；背部帶灰綠色，頭頂較深，腹部白色，鰭大多透明，尾鰭邊緣較暗。',habitat:'在內灣淺水的沙地成群活動，水深 30 公尺以內。',diet:'在沙底翻找多毛類與小型甲殼類。',distribution:'西北太平洋，日本、朝鮮半島、中國與臺灣。常被誤認成多鱗沙鮻。東京都內灣調查的稚魚地曳網有採集紀錄。',food:'肉質細緻，日本叫シロギス，是江戶前天婦羅常用的魚。',hint:'在淺沙地成群游動的細長小魚。',source:fb+'Sillago-japonica.html'},
{id:'stoneflounder',name:'石鰈',other:'二色鰈',latin:'Kareius bicoloratus',min:.2,max:2.5,price:17,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'兩眼在右側的鰈魚，身體呈卵圓形；有眼側灰褐色，沒有鱗片，背上散布幾排石頭般的硬骨板，因而叫石鰈。',habitat:'沿岸的沙泥底，最深約 150 公尺；能進入河口低鹽的水域。',diet:'吃底棲的多毛類、貝類與小型甲殼類。',distribution:'西北太平洋，庫頁島、千島群島以南至日本、朝鮮半島與中國黃渤海。東京都內灣調查的稚魚地曳網有採集紀錄；石狩市的海水魚名錄也列為石狩灣常見的魚。',food:'日本叫イシガレイ，冬季的食用魚。',hint:'背上長著一排排小石頭般硬骨的比目魚。',source:fb+'Kareius-bicoloratus.html'},
{id:'marbledflounder',name:'橫濱擬鰈',other:'黃蓋鰈',latin:'Pseudopleuronectes yokohamae',min:.1,max:1.2,price:17,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'兩眼在右側，身體寬而短；有眼側褐色，帶有不規則的深淺斑紋，口很小。',habitat:'沿岸的沙泥底，冬季在內灣產卵。',diet:'以多毛類為主食。',distribution:'西北太平洋，北海道南部至黃渤海與東海北部。模式標本採自日本橫濱，東京都內灣調查也有採集紀錄。',food:'日本叫マコガレイ，是東京灣冬季投釣的對象。',hint:'口很小、身上帶著斑紋的比目魚。',source:fb+'Pseudopleuronectes-yokohamae.html'},
{id:'silvercroaker',name:'白姑魚',other:'銀彭納石首魚',latin:'Pennahia argentata',min:.1,max:.8,price:14,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'紡錘形的石首魚，全身銀白，鰓蓋上有一塊黑斑；胸鰭末端長到背鰭硬棘部分的後端。',habitat:'沿岸的沙泥底，多在水深 40 公尺以上的地方。和其他石首魚一樣，能用鰾發出「咕咕」聲。',diet:'吃小魚與無脊椎動物。',distribution:'西北太平洋，香港至黃海，東至日本紀伊半島。東京都內灣調查的小型底拖網有採集紀錄。',food:'以鮮魚或曬乾上市。日本叫シログチ，因為會叫，也叫イシモチ。',hint:'會「咕咕」叫的銀白色魚，鰓蓋上一塊黑斑。',source:fb+'Pennahia-argentata.html'},
{id:'sappa',name:'壽南小沙丁魚',other:'青鱗魚',latin:'Sardinella zunasi',min:.01,max:.05,price:11,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'側扁的小型鯡魚，背部青色，體側銀白，腹緣有一列稜鱗；背鰭起點沒有黑點。',habitat:'在近岸與半封閉的內灣成群活動，喜歡砂泥底的淺海。',diet:'濾食浮游生物。',distribution:'西太平洋，日本南部沿岸至臺灣一帶。東京都內灣調查有採集紀錄。',food:'日本叫サッパ；岡山一帶叫ママカリ，醋漬是當地名菜。',hint:'成群在灣裡閃著銀光的小魚。',source:fb+'Sardinella-zunasi.html'},
{id:'pacificherring',name:'太平洋鯡',other:'',latin:'Clupea pallasii',min:.08,max:.4,price:13,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'流線形的身體，背部深藍到橄欖色，體側銀白，身上沒有明顯的斑點；和大西洋鯡很像，脊椎骨數較少。',habitat:'沿岸成群洄游的魚，成魚在春天靠岸，到長著海草的淺水產卵。幼魚第一年夏天在淺灣成群活動。',diet:'小時候吃甲殼類與魚卵、貝類幼生，長大後吃大型浮游甲殼類與小魚。',distribution:'北極海與北太平洋兩岸，南至日本與朝鮮半島西岸。石狩灣漁業的上岸量僅次於鮭魚，石狩市的海水魚名錄列為常見種。',food:'日本叫ニシン，魚卵醃成「數之子」。北海道以曬乾的身欠鯡做鯡魚漬和鯡魚蕎麥麵。',hint:'背部深藍、成群靠岸產卵的銀色魚。',source:fb+'Clupea-pallasii.html'},
{id:'hokke',name:'遠東多線魚',other:'花魚',latin:'Pleurogrammus azonus',min:.2,max:1.2,price:15,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'紡錘形，體側有五條側線；背鰭長而連續，沒有明顯缺刻，頭頂的骨稜很發達。身上帶黃褐色的斑紋。',habitat:'水深 0～240 公尺；幼魚在表層成大群，成魚轉為底棲。雌魚在水深 20 公尺內的岩縫或礫石產卵，由雄魚守護。',diet:'捕食浮游甲殼類、小魚與魚卵。',distribution:'西北太平洋，俄羅斯沿海州、鄂霍次克海與千島群島至日本茨城、對馬與黃海。石狩市的海水魚名錄列為石狩灣常見種。',food:'日本叫ホッケ，剖開曬成一夜干再烤是居酒屋的定番。',hint:'身上有五條側線的魚，常被剖開曬成一夜干。',source:fb+'Pleurogrammus-azonus.html'},
{id:'greenling',name:'大瀧六線魚',other:'',latin:'Hexagrammos otakii',min:.2,max:2,price:17,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'細長的身體，體色依棲地從黃褐到紅褐；尾鰭後緣平直或稍內凹，背鰭在中段有一個淺凹。',habitat:'沿岸岩礁，水深 4～155 公尺，常聚在人工魚礁周圍。十月到十二月產卵，卵塊黏在小石頭上，由雄魚守著。',diet:'吃底棲的甲殼類、多毛類與小魚。',distribution:'西北太平洋，日本、朝鮮半島南部至黃海與沿海州。北海道叫アブラコ，石狩市的海水魚名錄列為常見種。',food:'日本叫アイナメ，肉質白而帶油脂，煮物、生魚片都受歡迎。',hint:'守著岩礁產卵的褐色長魚。',source:fb+'Hexagrammos-otakii.html'},
{id:'yellowstripedflounder',name:'黃條紋擬鰈',other:'',latin:'Pseudopleuronectes herzensteini',min:.1,max:1,price:16,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'兩眼在右側，身體卵圓形；無眼側靠近背鰭與臀鰭基部各有一條黃色縱帶，因而得名。',habitat:'冷溫性的淺海底棲魚，多在水深 20～40 公尺的沙泥底。',diet:'吃底棲的多毛類與小型甲殼類。',distribution:'西北太平洋，日本海沿岸、千島群島、庫頁島至朝鮮半島東岸與黃渤海。模式標本採自北海道。石狩市的海水魚名錄列為常見種。',food:'日本叫マガレイ，北海道代表性的食用鰈魚。',hint:'翻過來看，背鰭邊有一條黃帶的比目魚。',source:fb+'Pseudopleuronectes-herzensteini.html'},
{id:'cresthead',name:'斯氏擬鰈',other:'',latin:'Pseudopleuronectes schrenki',min:.15,max:1.5,price:17,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'兩眼在右側，與黃條紋擬鰈相似，但頭部顏色較深；日本名的意思就是「黑頭鰈」。',habitat:'溫帶的底棲魚，生活在沿岸的沙泥底。',diet:'吃底棲的多毛類與小型甲殼類。',distribution:'西北太平洋，鄂霍次克海南部與千島群島至朝鮮半島東岸、日本本州北部。石狩市的海水魚名錄列為常見種。',food:'日本叫クロガシラガレイ，北海道春天投釣的人氣對象。',hint:'頭部顏色特別深的比目魚。',source:fb+'Pseudopleuronectes-schrenki.html'},
{id:'chubmackerel',name:'白腹鯖',other:'日本鯖、花飛',latin:'Scomber japonicus',min:.2,max:1.2,price:14,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'紡錘形，背部青綠，帶著彎曲的波浪狀黑紋；太平洋族群的腹部銀白沒有斑紋。第一背鰭與第二背鰭分得很開。',habitat:'沿岸的中上層洄游魚，按體型成群；白天待在近底層，夜裡上浮覓食。',diet:'吃橈足類等甲殼類、小魚與魷魚。',distribution:'印度—太平洋的溫帶海域，南北兩側都有。石狩灣原本以冷水魚為主，對馬暖流把白腹鯖帶進灣內，石狩市的海水魚名錄列為常見種。',food:'日本叫マサバ，鹽烤、味噌煮與醋漬都很常見。',hint:'背上畫著彎曲黑紋的青色快魚。',source:fb+'Scomber-japonicus.html'},
{id:'blackrockfish',name:'許氏平鮋',other:'黑鮶',latin:'Sebastes schlegelii',min:.2,max:2.5,price:18,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'頭大、口大，全身灰黑色，眼下有幾條斜向的暗帶；背鰭硬棘發達。',habitat:'近岸的岩礁底，水深 3～100 公尺；幼魚躲在漂流的海藻底下。卵胎生，母魚直接產下仔魚。',diet:'夜間捕食小魚、蝦與蟹。',distribution:'西北太平洋，日本、朝鮮半島與中國。石狩市的海水魚名錄列為常見種，日本也有養殖。',food:'日本叫クロソイ，生魚片與燉煮都受歡迎。',hint:'灰黑色的大口魚，夜裡從岩礁出來覓食。',source:fb+'Sebastes-schlegelii.html'},
{id:'ezomebaru',name:'邊尾平鮋',other:'',latin:'Sebastes taczanowskii',min:.05,max:.4,price:14,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體高而側扁的小型平鮋，體色暗褐帶斑；眼睛大，背鰭硬棘尖銳。',habitat:'近岸的岩礁與藻場，水深 0～120 公尺，也會進入河口的半淡鹹水；幼魚跟著漂流海藻。卵胎生。',diet:'吃小型甲殼類與小魚。',distribution:'西北太平洋，日本岩手縣與北海道至沿海州，韓國也有紀錄。北海道叫ガヤ，石狩市的海水魚名錄列為常見種。',food:'日本叫エゾメバル，小型的煮魚、炸魚材料。',hint:'成群躲在藻場裡的褐色小魚，北海道叫ガヤ。',source:fb+'Sebastes-taczanowskii.html'},
{id:'chika',name:'日本公魚',other:'',latin:'Hypomesus japonicus',min:.01,max:.12,price:11,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'細長的小魚，和西太公魚很像，背上有一枚小小的脂鰭；眼睛小，體側銀白。',habitat:'沿海的魚，會進入河口；五月到沙灘產卵。',diet:'吃浮游動物。',distribution:'西北太平洋，朝鮮半島與日本北部至千島群島與彼得大帝灣。北海道叫チカ，石狩市的海水魚名錄列為常見種。',food:'北海道港邊常見的小魚，多做成炸物與南蠻漬。',hint:'背上有一枚小脂鰭、在港裡成群的銀色小魚。',source:fb+'Hypomesus-japonicus.html'},
{id:'saffroncod',name:'細身寬突鱈',other:'遠東寬突鱈',latin:'Eleginus gracilis',min:.1,max:.8,price:13,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'有三枚背鰭、兩枚臀鰭的鱈魚，下頜比上頜短，下巴的鬚很短；體色灰褐，帶模糊的暗斑，背鰭與尾鰭有白邊。',habitat:'淺海的沿岸魚，冬天靠岸產卵，夏天到外海覓食；會進入河口，但多半留在有潮汐的範圍。',diet:'吃底棲的小型甲殼類與小魚。',distribution:'北極海與北太平洋，南至朝鮮半島黃海一側與阿拉斯加錫特卡。石狩市的海水魚名錄列為常見種。',food:'日本叫コマイ，北海道常曬成一夜干，烤過後配美乃滋吃。',hint:'有三枚背鰭的灰褐色小鱈魚。',source:fb+'Eleginus-gracilis.html'},
{id:'surfperch',name:'海鯽',other:'',latin:'Ditrema temminckii',min:.05,max:.15,price:13,bounty:0,kind:'海水魚種',water:'sea',edible:true,form:'體高而側扁的魚，像一片銀色的葉子；體色依地方從銀白到紅褐。',habitat:'沙底與岩礁交界處，也住在馬尾藻叢裡。卵胎生，母魚在五、六月產下十多尾小魚。',diet:'吃小型甲殼類等底棲小動物。',distribution:'西北太平洋，日本、韓國與黃海。石狩市的海水魚名錄列為常見種。',food:'日本叫ウミタナゴ，港邊的小物釣對象，煮魚、鹽烤都可以。',hint:'會直接生下小魚的扁平銀色魚。',source:fb+'Ditrema-temminckii.html'}
];
fish.push(...fish22);
regions.push(
{id:'tokyo_bay',name:'東京灣',area:'日本・東京',lat:35.62,lon:139.83,water:'海灣・海水',desc:'被三浦半島與房總半島環抱的內灣，灣口只有約 7 公里寬。灣奧多是填海地與人工海濱，台場、葛西臨海公園與多摩川河口的干潟是鰕虎與花鱸的育幼場。',pool:{mahaze:18,japaneseseabass:9,mullet:9,dottedshad:8,shirogisu:9,blackporgy:5,terapon:5,stoneflounder:6,marbledflounder:7,silvercroaker:6,sappa:10,puffer:8},source:tokyoSurvey},
{id:'ishikari',name:'石狩灣',area:'日本・北海道',lat:43.25,lon:141.25,water:'海灣・海水',desc:'北海道西岸面向日本海的海灣，石狩川在灣東注入。以冷水魚為主，灣內漁業的上岸量以鮭魚最多，其次是鯡魚與鰈魚；冬天石狩濱常被大量的大葉藻沖上岸。',pool:{pacificherring:14,hokke:10,greenling:7,yellowstripedflounder:8,cresthead:7,stoneflounder:5,chubmackerel:8,blackrockfish:5,ezomebaru:9,chika:10,saffroncod:8,surfperch:6,puffer:3},source:ishikariList});
Object.assign(flavor,{
tokyo_bay:{phase:{dawn:['天剛亮，灣岸的工廠煙囪後面透出一點橘色。','早班的屋形船還靠在運河邊，船頭的燈籠沒有點亮。'],day:['貨櫃船慢慢駛過航道，遠處看得到東京灣跨海公路的人工島。','羽田機場的飛機一架接一架從頭頂飛過。'],dusk:['夕陽落到富士山的方向，灣上的天空一片紅。','彩虹大橋的燈一盞一盞亮起來。'],night:['對岸的高樓燈火倒映在水面。','屋形船的燈籠排成一列，在運河口慢慢轉彎。']},weather:{sunny:['天氣晴朗，看得到對岸房總半島的山。','人工海濱上有人帶著孩子撿貝殼。'],cloudy:['雲層低低壓在灣上，遠處的高樓只剩輪廓。','南風吹來，水面泛起細碎的波紋。'],rain:['雨點打在防波堤上，釣客都撐起了傘。','雨中的灣岸一片灰，只聽得到船的汽笛。']},facts:['東京灣的灣口在三浦半島觀音崎與房總半島富津岬之間，寬約 7 公里；灣內面積約 1,380 平方公里。','江戶時代在東京灣捕撈的魚貝稱為「江戶前」，握壽司、天婦羅都是從這些漁獲發展出來的。','日本花鱸隨成長換名，關東依序叫セイゴ、フッコ、スズキ，是日本有名的「出世魚」。','東京都環境局每年在內灣做水生生物調查，2011 年度共記錄黃鰭刺鰕虎、日本花鱸等 39 種魚。','夏天底層海水缺氧時，灣奧的底拖網幾乎撈不到魚，魚會往岸邊淺水避難。']},
ishikari:{phase:{dawn:['天色泛白，海面上的霧被風吹散。','漁港的燈還亮著，早出的漁船正要返航。'],day:['石狩川的河水在灣東和海水交界，看得出一條顏色分界線。','遠處的風力發電機慢慢轉著。'],dusk:['夕陽沉進日本海，水平線一片橘紅。','海鷗成群停在防波堤上，等漁船回港。'],night:['港邊的燈照在海面，偶爾有魚翻起水花。','夜裡的海風很冷，竿尖上掛著細細的水珠。']},weather:{sunny:['天空晴朗，看得到對岸積丹半島的山。','陽光照在沙灘上，石狩濱一路延伸到遠處。'],cloudy:['灰色的雲從日本海飄過來，風開始轉冷。','浪比早上大了些，碎浪一波波打上沙灘。'],rain:['冷雨斜斜打在臉上，海面一片灰白。','雨裡的港口很安靜，只有浮標在浪上起伏。']},facts:['石狩川是北海道最長的河，在石狩灣注入日本海。','明治到昭和初期，北海道日本海沿岸的鯡魚漁業極盛，最多一年捕近一百萬公噸；1950 年代以後鯡魚驟減。','石狩鍋源自石狩川口漁民慶祝豐收的味噌鍋；昭和 20 年代有遊客來看鮭魚的地曳網，當地拿這道鍋招待，才傳遍全國。','石狩灣原本以冷水魚為主，對馬暖流也帶來白腹鯖、馬面魨與黑點多紀魨等暖水魚。','石狩市把 9 月 15 日定為石狩鍋紀念日，日文唸起來像「去吃吧」。']}});
Object.assign(weatherOdds,{tokyo_bay:[45,35,20],ishikari:[30,40,30]});
addDistribution(['blackporgy','mullet','dottedshad','terapon'],'東京都內灣的魚類調查亦有紀錄。');
addDistribution(['puffer'],'東京都內灣調查與石狩市的海水魚名錄亦有紀錄。');

// 0.13 local names, shown only in the atlas: Taiwanese and Hakka (Sixian) from the MOE dictionaries for fish of Taiwan waters,
// Cantonese for Hong Kong waters, German for the German waters. Only exact dictionary or source matches; see SOURCES.md.
const localNames={
carp:[['台語','𩸙仔 tāi-á、鯉魚 lí-hî'],['客語四縣腔','鯉魚 liˊ ngˇ'],['德語','Karpfen']],
crucian:[['台語','鯽仔魚 tsit-á-hî'],['客語四縣腔','鯽魚仔 jidˋ ngˇ eˋ']],
grass:[['台語','草魚 tsháu-hî'],['客語四縣腔','草魚 coˋ ngˇ']],
silver:[['台語','鰱魚 liân-hî']],
bighead:[['台語','鰱魚 liân-hî'],['客語四縣腔','大頭鰱 tai teuˇ lienˇ']],
blackporgy:[['台語','烏格仔 oo-keh-á']],
yellowfin:[['粵語','黃腳鱲']],
terapon:[['台語','花身仔 hue-sin-á']],
girella:[['台語','烏毛 oo-moo']],
mullet:[['台語','烏魚 oo-hî']],
pachyhead:[['客語四縣腔','白哥仔 pag goˊ eˋ']],
spottedsnakehead:[['台語','鮕鮘 koo-tai']],
dwarfsnakehead:[['台語','鮕鮘 koo-tai']],
loach:[['台語','鰗鰡 hôo-liu'],['客語四縣腔','湖鰍仔 fuˇ qiuˊ eˋ']],
amurcatfish:[['台語','鯰魚 liâm-hî'],['客語四縣腔','鯰仔 ngiamˇ eˋ']],
giurinus:[['客語四縣腔','狗頷仔 gieuˋ ngamˋ eˋ']],
swampeel:[['台語','鱔魚 siān-hî'],['客語四縣腔','黃鱔 vongˇ sanˊ']],
fusilier:[['台語','烏尾冬 oo-bué-tang']],
redseabream:[['台語','嘉鱲 ka-la̍h']],
perch:[['德語','Flussbarsch（博登湖稱 Kretzer，瑞士稱 Egli）']],
pike:[['德語','Hecht']],
blaufelchen:[['德語','Bodenseefelchen、Blaufelchen']],
browntrout:[['德語','Forelle（湖泊型稱 Seeforelle，溪流型稱 Bachforelle）']],
commonbream:[['德語','Brasse、Brachse、Blei']],
herring:[['德語','Atlantischer Hering（通稱 Hering）']],
zander:[['德語','Zander']],
flounder:[['德語','Flunder']],
garfish:[['德語','Hornhecht']]
};
// 0.16 local names: Japanese for the Japanese waters, German for the new German-water fish.
Object.assign(localNames,{ayu:[['日語','アユ、コアユ']],honmoroko:[['日語','ホンモロコ']],nigorobuna:[['日語','ニゴロブナ']],biwamasu:[['日語','ビワマス、アメノウオ']],wakasagi:[['日語','ワカサギ']],icefish:[['日語','シラウオ']],channelcat:[['日語','チャネルキャットフィッシュ、アメリカナマズ']],bluegill:[['日語','ブルーギル']],whitecrucian:[['日語','ゲンゴロウブナ']],silver:[...(localNames.silver||[]),['日語','ハクレン']],carp:[...(localNames.carp||[]),['日語','コイ']],alpinechar:[['德語','Seesaibling']],roach:[['德語','Rotauge、Plötze']],tench:[['德語','Schleie']],burbot:[['德語','Trüsche、Quappe']]});
localNames.browntrout=(localNames.browntrout||[]).map(([l,n])=>l==='德語'&&!n.includes('Meerforelle')?[l,n+'、Meerforelle（海鱒）']:[l,n]);
Object.assign(localNames,{hasu:[['日語','ハス']],isaza:[['日語','イサザ']],gigi:[['日語','ギギ']]});
for(const [id,name] of Object.entries({topmouth:'モツゴ、クチボソ',loach:'ドジョウ',amurcatfish:'ナマズ、マナマズ',eel:'ニホンウナギ、ウナギ',rosybitterling:'タイリクバラタナゴ',swampeel:'タウナギ'}))localNames[id]=[...(localNames[id]||[]),['日語',name]];
// 0.21 local names: French for the Arcachon fish.
Object.assign(localNames,{europeanseabass:[['法語','Bar commun（地中海稱 Loup）']],gilthead:[['法語','Dorade royale（亦作 Daurade royale）']],commonsole:[['法語','Sole commune']],thicklipmullet:[['法語','Mulet lippu']],redmullet:[['法語','Rouget barbet de vase']],blackseabream:[['法語','Griset、Dorade grise']],europeaneel:[['法語','Anguille d\'Europe']],goldenmullet:[['法語','Mulet doré']],whiteseabream:[['法語','Sar commun']],undulateray:[['法語','Raie brunette']],thornbackray:[['法語','Raie bouclée']],senegalsole:[['法語','Sole du Sénégal、Sole sénégalaise']],conger:[['法語','Congre commun']],garfish:[...localNames.garfish,['法語','Orphie commune']],flounder:[...localNames.flounder,['法語','Flet commun']]});
// 0.22 local names: Japanese for the Tokyo Bay and Ishikari Bay fish.
Object.assign(localNames,{japaneseseabass:[['日語','スズキ、セイゴ、フッコ']],mahaze:[['日語','マハゼ']],shirogisu:[['日語','シロギス']],stoneflounder:[['日語','イシガレイ']],marbledflounder:[['日語','マコガレイ']],silvercroaker:[['日語','シログチ、イシモチ']],sappa:[['日語','サッパ、ママカリ']],pacificherring:[['日語','ニシン']],hokke:[['日語','ホッケ']],greenling:[['日語','アイナメ、アブラコ']],yellowstripedflounder:[['日語','マガレイ']],cresthead:[['日語','クロガシラガレイ']],chubmackerel:[['日語','マサバ']],blackrockfish:[['日語','クロソイ']],ezomebaru:[['日語','エゾメバル、ガヤ']],chika:[['日語','チカ']],saffroncod:[['日語','コマイ']],surfperch:[['日語','ウミタナゴ']]});
for(const [id,name] of Object.entries({blackporgy:'クロダイ',mullet:'ボラ',dottedshad:'コノシロ',terapon:'コトヒキ',puffer:'クサフグ'}))localNames[id]=[...(localNames[id]||[]),['日語',name]];
fish.forEach(f=>f.localNames=localNames[f.id]||[]);
// 0.14 water plants. Each water has its own weed pool; distribution notes and sources are in SOURCES.md「0.14 水草圖鑑」.
const oca=n=>'https://www.oca.gov.tw/ch/home.jsp?id=535&parentpath=0,298&mcustomize=ocamaritime_view.jsp&dataserno='+n;
const gbif=key=>'https://www.gbif.org/species/'+key;
const plants=[
{id:'hyacinth',name:'布袋蓮',other:'鳳眼蓮、水浮蓮',latin:'Pontederia crassipes',water:'fresh',type:'浮游植物',form:'葉片圓而油亮，葉柄中段膨大成海綿狀的氣囊，讓整株浮在水面；夏秋開淡紫色花，上方花瓣有一塊黃斑。',habitat:'靜水或緩流的湖泊、池塘與溝渠，靠走莖快速分株，常整片覆蓋水面。',distribution:'原產南美洲亞馬遜流域，已在世界各地的溫暖水域歸化；日月潭與關渡一帶都有出現紀錄。',source:gbif(2765942)},
{id:'floatingheart',name:'印度莕菜',other:'銀蓮花、白花莕菜',latin:'Nymphoides indica',water:'fresh',type:'浮葉植物',form:'圓心形的葉片平貼水面，像小號的睡蓮葉；白色小花的花瓣邊緣長滿細毛，看起來毛茸茸的。',habitat:'根長在水底泥中，葉柄隨水深伸長，生長於池塘、湖泊與水田等靜水。',distribution:'廣泛分布於熱帶與亞熱帶；日月潭周邊有出現紀錄。',source:gbif(5341503)},
{id:'bladderwort',name:'黃花狸藻',other:'',latin:'Utricularia aurea',water:'fresh',type:'沉水植物',form:'沒有真正的根，細碎分裂的葉上長著許多小囊，能吸入水蚤等微小動物消化；開花時花莖伸出水面，開黃色唇形花。',habitat:'漂浮在池塘、湖泊與水田的靜水中。',distribution:'分布於亞洲熱帶至澳洲；日月潭周邊有出現紀錄。',source:gbif(8001590)},
{id:'waterlettuce',name:'大萍',other:'水芙蓉、水白菜',latin:'Pistia stratiotes',water:'fresh',type:'浮游植物',form:'淡綠色的葉片排成蓮座狀，表面密生短毛、有明顯縱向葉脈，形似一小棵浮在水上的白菜，鬚根垂在水中。',habitat:'池塘、溝渠與水庫的靜水面，以走莖繁殖，容易大量增生。',distribution:'泛熱帶分布；曾文水庫範圍有出現紀錄。',source:gbif(2870583)},
{id:'cattail',name:'香蒲',other:'水燭',latin:'Typha orientalis',water:'fresh',type:'挺水植物',form:'細長的帶狀葉直立高出水面，夏季抽出圓柱形花序，雄花在上、雌花在下，雌花序成熟後像一根褐色的蠟燭。',habitat:'湖泊、水庫與溝渠的淺水岸邊，根莖橫走成片生長。',distribution:'分布於東亞至澳洲；曾文水庫範圍有出現紀錄。',source:gbif(5289521)},
{id:'primrosewillow',name:'水丁香',other:'',latin:'Ludwigia octovalvis',water:'fresh',type:'挺水植物',form:'莖直立而略帶木質，葉披針形；開黃色四瓣花，果實細長呈棒狀，上有八條縱稜。',habitat:'水邊、溼地與水位常變動的岸邊泥地。',distribution:'泛熱帶分布；曾文水庫範圍有出現紀錄。',source:gbif(5420987)},
{id:'paddleweed',name:'卵葉鹽草',other:'喜鹽草',latin:'Halophila ovalis',water:'sea',type:'海草',form:'橢圓形的小葉成對長在葉柄上，葉面常有不規則紅斑；白色地下莖在沙中橫走。是開花結果的海生植物，不是藻類。',habitat:'潮間帶至淺海的沙地，也能長在潟湖、鹽田與海水魚塭的溝渠。',distribution:'印度－西太平洋廣布；臺灣見於西南沿海潟湖、恆春半島與澎湖，香港是分布最廣的海草，吐露港一帶也有紀錄。',source:oca('202212190025')},
{id:'wigeongrass',name:'川蔓藻',other:'',latin:'Ruppia maritima',water:'brackish',type:'沉水植物',form:'細絲狀的葉互生在纖細分枝的莖上，整叢在水中飄動；果實長在細長的柄上。',habitat:'鹽度變動大的潟湖、鹽田與河口淺水，能適應從近淡水到高鹽的環境。',distribution:'全球溫帶至熱帶廣布；七股潟湖範圍有出現紀錄。',source:gbif(2864004)},
{id:'gutweed',name:'滸苔',other:'石髮、虎苔',latin:'Ulva prolifera',water:'sea',type:'綠藻',form:'鮮綠色的中空管狀藻體，主枝扁平像壓扁的吸管，分枝細而茂密。',habitat:'潮間帶礁岩、河口、紅樹林與泥岸都能附著，營養鹽豐富的潟湖及養殖池也常見，冬春最繁盛。',distribution:'臺灣及離島各類海岸都有分布；龍洞潮間帶調查列為主要藻種。',source:oca('202212150003')},
{id:'saltsedge',name:'茳茳鹹草',other:'鹹草、茳茳',latin:'Cyperus malaccensis',water:'brackish',type:'挺水植物',form:'三稜形的稈直立叢生，葉片退化，頂端開出褐色的簇狀小穗；稈曬乾後可編草蓆。',habitat:'河口與海岸溼地的半淡鹹水草澤。',distribution:'分布於亞洲熱帶至澳洲；關渡溼地 1978 年以蘆葦和茳茳鹹草為優勢，之後逐漸被水筆仔取代。',source:'https://scholars.lib.ntu.edu.tw/handle/123456789/86761'},
{id:'mosquitofern',name:'細葉滿江紅',other:'',latin:'Azolla filiculoides',water:'fresh',type:'漂浮蕨類',form:'一株只有指甲大小，鱗片狀的小葉交互疊生，平時綠色，天冷或日照強時轉成紅褐色，常密集鋪滿水面。',habitat:'池塘、水田與溝渠的靜水面；葉內共生藍綠菌能固定空氣中的氮。',distribution:'原產美洲，已在多地歸化；關渡一帶有出現紀錄。',source:gbif(2650107)},
{id:'agarweed',name:'石花菜',other:'優美石花菜、牛毛菜',latin:'Gelidium elegans',water:'sea',type:'紅藻',form:'紫紅色、軟骨質的藻體直立叢生，扁平主枝兩側再分出羽狀小枝；曬乾後褪成米白色，可熬煮成石花凍。',habitat:'礁岩的低潮線至數公尺深處，春季是主要產季。',distribution:'臺灣主要產於北部與東北角；基隆和平島居民採石花菜曬乾後熬成石花凍，基隆沿岸有石花菜屬紀錄。',source:oca('202212160013')},
{id:'sealettuce',name:'石蓴',other:'海青菜、岩頭青',latin:'Ulva lactuca',water:'sea',type:'綠藻',form:'翠綠色的薄膜葉片，邊緣常有波浪皺褶，像一叢生菜；水流強處則長成長條帶狀。',habitat:'潮間帶中下部至淺水礁石，冬末初春大量繁生，夏季退到低潮線附近。',distribution:'臺灣本島海岸最常見、分布最廣的海藻，北部與東北角尤其多；基隆和平島居民冬季採石蓴，龍洞潮間帶調查列為主要藻種，吐露港範圍也有紀錄。',source:oca('202212150004')},
{id:'hollysargassum',name:'冬青葉馬尾藻',other:'',latin:'Sargassum ilicifolium',water:'sea',type:'褐藻',form:'黃褐色，主軸上伸出分枝，小葉倒卵形、邊緣有明顯鋸齒，枝上掛著圓形氣囊，讓藻體在水中直立。',habitat:'礁岩海岸；北部 3～7 月生長，夏季可長到約 1 公尺。',distribution:'臺灣本島及離島礁岸都有，是北部與東北角最優勢的馬尾藻；基隆沿岸有出現紀錄。',source:oca('202212190016')},
{id:'hijiki',name:'羊栖菜',other:'鹿尾菜',latin:'Sargassum fusiforme',water:'sea',type:'褐藻',form:'黃褐色，質地有韌性，成熟後的葉與氣囊都呈細長紡錘形；日本稱為 hijiki，曬乾後是常見的食用海藻。',habitat:'低潮線附近的礁石，喜冷水，水溫超過約 25 度就停止生長。',distribution:'東北亞特有藻種；臺灣本島只在北部與東北角海岸有生長棲地，2～6 月為主要生長季。',source:oca('202212190014')},
{id:'narrowseagrass',name:'單脈二藥草',other:'單脈二藥藻',latin:'Halodule uninervis',water:'sea',type:'海草',form:'葉片狹長，尖端分成三齒呈「山」字形，中央有一條明顯葉脈；地下莖在沙中匍匐。',habitat:'珊瑚礁與潟湖的淺水沙地，以潮間帶潮池為主，常與泰來草混生。',distribution:'印度－西太平洋廣布；恆春半島南灣有單一族群，澎湖大倉北的海草調查也有紀錄。',source:oca('202212190023')},
{id:'greenlaver',name:'青海菜',other:'礁膜',latin:'Monostroma nitidum',water:'sea',type:'綠藻',form:'黃綠色的圓形薄膜，只有一層細胞，透光而柔軟，邊緣皺褶、容易破碎。',habitat:'風浪小的潮間帶中上部岩石，12 月至隔年 4 月生長。',distribution:'臺灣產於北部、東北部、恆春半島及澎湖；澎湖漁村春季在潮間帶撈取青海菜，是當地特色產業。',source:oca('202212150002')},
{id:'turtlegrass',name:'泰來草',other:'海龜草、泰來藻',latin:'Thalassia hemprichii',water:'sea',type:'海草',form:'長帶狀的葉片略為彎曲、質地強韌，基部包著多層舊葉鞘；地下莖發達，冬季開花。',habitat:'珊瑚礁區的淺水沙地，形成海草床，是綠蠵龜等動物的食物。',distribution:'臺灣產於恆春半島西側、小琉球、綠島及東沙；墾丁範圍有出現紀錄。',source:oca('202212190026')},
{id:'codium',name:'食用松藻',other:'',latin:'Codium edule',water:'sea',type:'綠藻',form:'綠色海綿質，圓柱狀分枝柔軟光滑，平臥交疊生長，直徑可達數公尺。',habitat:'潮下帶 2～15 公尺的珊瑚礁塊與碎石上，2～6 月生長。',distribution:'恆春半島南灣每年春季會大量繁生，覆蓋珊瑚並造成部分珊瑚白化死亡。',source:oca('202212150026')},
{id:'stonewort',name:'球狀輪藻',other:'',latin:'Chara globularis',water:'fresh',type:'輪藻',form:'外形像細小的木賊，莖節上輪生一圈細枝，摸起來略帶鈣質的粗糙感；屬於綠藻中的輪藻類，不是開花植物。',habitat:'清澈的湖泊與池塘底部，常成片生長，水質變差時容易消失。',distribution:'歐洲常見；博登湖輪藻群落是水鳥冬季的重要食物，湖區有大量出現紀錄。',source:gbif(5270780)},
{id:'claspingpondweed',name:'穿葉眼子菜',other:'',latin:'Potamogeton perfoliatus',water:'fresh',type:'沉水植物',form:'卵形葉片的基部抱住莖，看起來像莖從葉中穿過；穗狀小花伸出水面。',habitat:'湖泊與緩流河川的沉水帶，從淡水到微鹹水都能生長。',distribution:'北半球溫帶廣布；博登湖 1967 與 1978 年的水生植物調查都記錄了此種的分布。',source:'https://www.igkb.org/fileadmin/user_upload/Downloads/Publikationen/Blaue_Berichte/blauer_bericht_26.pdf'},
{id:'milfoil',name:'穗花狐尾藻',other:'',latin:'Myriophyllum spicatum',water:'fresh',type:'沉水植物',form:'羽毛狀的細裂葉四片輪生，整條莖像一串狐狸尾巴；花穗伸出水面，開紅褐色小花。',habitat:'湖泊、池塘與河川的沉水帶，營養豐富的水域容易大片生長。',distribution:'原生於歐亞大陸與北非；博登湖範圍有大量出現紀錄。',source:gbif(5361760)},
{id:'waterweed',name:'伊樂藻',other:'努氏伊樂藻',latin:'Elodea nuttallii',water:'fresh',type:'沉水植物',form:'細長的葉三片輪生，葉緣略向下捲；莖易斷，斷枝就能長成新株。',habitat:'湖泊、池塘與緩流河川，生長快速，能形成密集草叢。',distribution:'原產北美洲，已在歐洲多地歸化；博登湖範圍有大量出現紀錄。',source:gbif(5329212)},
{id:'eelgrass',name:'大葉藻',other:'甘藻',latin:'Zostera marina',water:'sea',type:'海草',form:'鮮綠色的長帶狀葉片可長到一公尺左右，葉脈平行，地下莖橫走成片。',habitat:'溫帶淺海與潟湖的沙泥底；格賴夫斯瓦爾德潟湖的大葉藻受透光度限制，密度比波羅的海其他地區低。',distribution:'北半球溫帶沿海廣布；格賴夫斯瓦爾德潟湖有大量出現紀錄。',source:'https://oceanrep.geomar.de/id/eprint/3802'},
{id:'sagopondweed',name:'篦齒眼子菜',other:'',latin:'Stuckenia pectinata',water:'brackish',type:'沉水植物',form:'絲狀細葉在分枝上排列成梳子般，整叢在水中散開；地下會長出澱粉質塊莖，是水鳥的食物。',habitat:'湖泊、河川與半淡鹹水的潟湖，耐鹽度變化。',distribution:'全球廣布；格賴夫斯瓦爾德潟湖範圍有大量出現紀錄。',source:gbif(7871428)},
{id:'spiralwigeon',name:'螺旋川蔓藻',other:'',latin:'Ruppia cirrhosa',water:'brackish',type:'沉水植物',form:'與川蔓藻相似的絲狀細葉，開花後果柄會捲成螺旋狀，因此得名。',habitat:'鹽度較高的潟湖、海灣與鹽沼水域。',distribution:'分布於歐洲、非洲至亞洲沿海；格賴夫斯瓦爾德潟湖範圍有大量出現紀錄。',source:gbif(2863987)}
];
// 0.16 water plants for Lake Biwa and Kasumigaura; see SOURCES.md「0.16」.
plants.push(
{id:'hydrilla',name:'黑藻',other:'輪葉黑藻',latin:'Hydrilla verticillata',water:'fresh',type:'沉水植物',form:'細長的莖上，三到八枚細小的葉片輪生成一圈，葉緣有細鋸齒。',habitat:'整株沉在湖泊、池塘與溝渠的水中，莖斷了也能長成新株。',distribution:'廣布亞洲、非洲與澳洲；琵琶湖南湖近年以黑藻等原生種為優勢。',source:'https://www.pref.shiga.lg.jp/file/attachment/5526768.pdf'},
{id:'maackpondweed',name:'微齒眼子菜',other:'',latin:'Potamogeton maackianus',water:'fresh',type:'沉水植物',form:'細長的葉片像緞帶，葉尖鈍圓，邊緣有很細的鋸齒，莖分枝很多。',habitat:'在湖泊較深的水中成片生長。',distribution:'東亞；琵琶湖南湖的優勢水草之一，日語名センニンモ。',source:'https://www.pref.shiga.lg.jp/file/attachment/5526768.pdf'},
{id:'yellowfloatingheart',name:'莕菜',other:'荇菜',latin:'Nymphoides peltata',water:'fresh',type:'浮葉植物',form:'圓形的葉片浮在水面，夏天開黃色五瓣花，花瓣邊緣有細碎的流蘇。',habitat:'根長在淺水的泥底，葉柄隨水深伸長。和開白花的印度莕菜不同種。',distribution:'歐亞大陸溫帶；霞浦湖以莕菜（アサザ）為主進行湖岸植生復育。',source:'https://www.ktr.mlit.go.jp/ktr_content/content/000049857.pdf'},
{id:'reed',name:'蘆葦',other:'葦',latin:'Phragmites australis',water:'fresh',type:'挺水植物',form:'高大的禾草，莖中空有節，秋天抽出褐紫色的大花穗。',habitat:'在湖岸與河岸的淺水成片生長，地下莖向四周蔓延。',distribution:'全球廣布；霞浦湖的蘆葦帶面積約剩 1972 年的一半。',source:'https://www.pref.ibaraki.jp/nourinsuisan/naisuishi/kahoku/science14.html'});
const regionWeeds={sunmoon:{hyacinth:50,floatingheart:30,bladderwort:20},zengwen:{waterlettuce:40,cattail:30,primrosewillow:30},qigu:{paddleweed:40,wigeongrass:30,gutweed:30},guandu:{saltsedge:40,hyacinth:35,mosquitofern:25},keelung:{sealettuce:40,agarweed:35,hollysargassum:25},longdong:{sealettuce:40,gutweed:35,hijiki:25},penghu:{paddleweed:35,narrowseagrass:35,greenlaver:30},kenting:{turtlegrass:40,narrowseagrass:35,codium:25},tolo:{paddleweed:60,sealettuce:40},bodensee:{stonewort:30,claspingpondweed:25,milfoil:25,waterweed:20},greifswald:{eelgrass:35,sagopondweed:35,spiralwigeon:30}};
Object.assign(regionWeeds,{biwa:{hydrilla:40,maackpondweed:35,waterweed:25},kasumigaura:{yellowfloatingheart:55,reed:45}});
Object.assign(regionWeeds,{arcachon:{dwarfeelgrass:50,eelgrass:20,gutweed:30}});
Object.assign(regionWeeds,{tokyo_bay:{eelgrass:65,wigeongrass:35},ishikari:{eelgrass:60,agarweed:40}});
plants.push({id:'dwarfeelgrass',name:'諾氏大葉藻',other:'',latin:'Zostera noltei',water:'sea',type:'海草',form:'草綠色的細長帶狀葉，長 6～22 公分、寬只有 0.5～1.5 公釐，葉尖鈍而常有缺刻；匍匐的地下莖會把泥沙固定住。',habitat:'在潮間帶的泥灘與富含有機質的細沙上長成一片片草床，退潮時露出水面。',distribution:'歐洲大西洋沿岸自挪威南部至茅利塔尼亞，在地中海與黑海只長在潟湖、河口等半淡鹹水。阿卡雄灣上游水體 1989 年約有 6,846 公頃，2019 年剩 3,856 公頃；冬季的黑雁大量取食。',source:'https://www.marlin.ac.uk/species/detail/1409'});
plants.find(p=>p.id==='eelgrass').distribution+='法國阿卡雄灣東側亦有分布，Ifremer 長期監測，面積比 1988 年減少約八成五。';
plants.find(p=>p.id==='gutweed').distribution+='法國阿卡雄灣自 1982 年起記錄到滸苔屬綠藻夏季大量增生。';
plants.find(p=>p.id==='eelgrass').distribution+='東京灣千葉縣一側自木更津至館山沿岸有大葉藻場；北海道石狩濱每年冬季有大量大葉藻漂上岸，顯示石狩灣淺海也有藻場。';
plants.find(p=>p.id==='wigeongrass').distribution+='東京灣奧千葉縣一側（行德、船橋一帶）有國立科學博物館 2005～2007 年的採集標本。';
plants.find(p=>p.id==='agarweed').distribution+='北海道石狩灣沿岸的厚田、張碓也有採集標本。';
regions.forEach(r=>r.weeds=regionWeeds[r.id]);
// 0.17 pacing (釣魚節奏調整審閱稿). Casts take about three times longer, so every per-cast price is tripled;
// fish prices and bounties above stay at their pre-0.17 base and are tripled here once.
for(const f of fish){f.price*=3;f.bounty=(f.bounty||0)*3}
// Big fish need a stronger rod (rod index: 2 = Lv3, 4 = Lv5); the snakehead bounty fish stays at Lv3.
const rodRule={tiers:[[4,4],[2.2,2]],exempt:{snakehead:2}};
for(const f of fish)f.rod=rodRule.exempt[f.id]??(rodRule.tiers.find(([kg])=>f.max>=kg)?.[1]||0);
// Fewer big fish: medium ×0.8, large ×0.5, giant ×0.3, then each pool is rescaled to 100 (largest remainder, at least 1).
// basePool keeps the pre-0.17 weights for reference and tests.
const sizeWeight=f=>f.max>=4?.3:f.max>=2.2?.5:f.max>=.7?.8:1;
for(const r of regions){r.basePool={...r.pool};const raw=Object.entries(r.pool).map(([id,w])=>[id,w*sizeWeight(fish.find(f=>f.id===id))]),total=raw.reduce((a,[,w])=>a+w,0),pool={},parts=raw.map(([id,w])=>{const exact=w/total*100;pool[id]=Math.max(1,Math.floor(exact));return[id,exact%1]});let left=100-Object.values(pool).reduce((a,b)=>a+b,0);parts.sort((a,b)=>b[1]-a[1]);for(let i=0;left>0;i++,left--)pool[parts[i%parts.length][0]]++;while(left<0){const id=Object.keys(pool).sort((a,b)=>pool[b]-pool[a])[0];pool[id]--;left++}r.pool=pool}
// Fishing licences: every water except Sun Moon Lake needs a one-time licence, bought on the first trip.
const licenseTiers=[null,{cost:150,atlas:8},{cost:800,atlas:25},{cost:3000,atlas:50},{cost:8000,atlas:80}];
// 0.26 revision: Sun Moon Lake is the tier-1 starting water; the other Taiwan waters move to tier 2 or 3.
const licenseTier={sunmoon:1,zengwen:2,qigu:2,guandu:2,keelung:2,longdong:2,penghu:3,kenting:3,tolo:3,biwa:3,kasumigaura:3,bodensee:4,greifswald:4,arcachon:4,tokyo_bay:3,ishikari:3};
for(const r of regions)if(licenseTier[r.id])r.license={tier:licenseTier[r.id],...licenseTiers[licenseTier[r.id]]};
// Labels and seasoning prices; effects and duration are configured independently for each dish.
const recipeTiers={basic:{name:'基本',seasoning:15},home:{name:'家常',seasoning:1.5},classic:{name:'名菜',seasoning:3}};
// Cooking-method labels describe preparation only; they do not assign effects.
const cookingMethods={soup:{name:'湯鍋燉煮'},steam:{name:'清蒸汆煮'},fry:{name:'煎炸炒烤燻'},raw:{name:'生食'},pickle:{name:'醃漬'},rice:{name:'炊飯'},mix:{name:'熟食拌製'}};
const mealEffects={
  "panfry": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  },
  "deepfry": {
    "effect": "speed",
    "amount": 0.05,
    "casts": 40
  },
  "steamfish": {
    "effect": "lure",
    "amount": 1.5,
    "casts": 40
  },
  "grillfish": {
    "effect": "double",
    "amount": 0.08,
    "casts": 40
  },
  "fried": {
    "effect": "weed",
    "amount": 0.75,
    "casts": 60
  },
  "ginger": {
    "effect": "double",
    "amount": 0.1,
    "casts": 60
  },
  "jaguar-steam": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "president-steam": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "fishhead-pot": {
    "effect": "speed",
    "amount": 0.13,
    "casts": 80
  },
  "marbled-steam": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "eel-noodle": {
    "effect": "night",
    "amount": 1,
    "casts": 80
  },
  "soup": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "steamed": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "sweetsour-carp": {
    "effect": "weed",
    "amount": 1,
    "casts": 80
  },
  "westlake": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "wuchang-steam": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "baoyu": {
    "effect": "double",
    "amount": 0.12,
    "casts": 80
  },
  "stuffed-dace": {
    "effect": "weed",
    "amount": 1,
    "casts": 80
  },
  "snakehead-soup": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "catfish-eggplant": {
    "effect": "night",
    "amount": 0.75,
    "casts": 60
  },
  "kabayaki": {
    "effect": "night",
    "amount": 1,
    "casts": 80
  },
  "yanagawa": {
    "effect": "speed",
    "amount": 0.13,
    "casts": 80
  },
  "chinu-shioyaki": {
    "effect": "weed",
    "amount": 0.75,
    "casts": 60
  },
  "kasago-nitsuke": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "gurukun-karaage": {
    "effect": "double",
    "amount": 0.1,
    "casts": 60
  },
  "taimeshi": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "kibinago-sashimi": {
    "effect": "double",
    "amount": 0.1,
    "casts": 60
  },
  "pla-pao": {
    "effect": "weed",
    "amount": 0.75,
    "casts": 60
  },
  "pla-duk-fu": {
    "effect": "double",
    "amount": 0.12,
    "casts": 80
  },
  "kretzer": {
    "effect": "weed",
    "amount": 0.75,
    "casts": 60
  },
  "smoked": {
    "effect": "double",
    "amount": 0.12,
    "casts": 80
  },
  "forelle-blau": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "green-herring": {
    "effect": "double",
    "amount": 0.1,
    "casts": 60
  },
  "karpfen-fraenkisch": {
    "effect": "weed",
    "amount": 1,
    "casts": 80
  },
  "quenelle": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "funazushi": {
    "effect": "double",
    "amount": 0.12,
    "casts": 80
  },
  "amenoio": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "koayu-sansho": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "moroko-dorozu": {
    "effect": "weed",
    "amount": 0.75,
    "casts": 60
  },
  "wakasagi-suzuke": {
    "effect": "double",
    "amount": 0.1,
    "casts": 60
  },
  "kasumi-tsukudani": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "karasumi": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "yellowfin-steam": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "grouper-steam": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "maasuni": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "danggit": {
    "effect": "double",
    "amount": 0.1,
    "casts": 60
  },
  "zander-muellerin": {
    "effect": "double",
    "amount": 0.1,
    "casts": 60
  },
  "haze-tempura": {
    "effect": "weed",
    "amount": 0.75,
    "casts": 60
  },
  "nishin-zuke": {
    "effect": "bait",
    "amount": 0.35,
    "casts": 60
  },
  "tenaga-karaage": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "sake-steam-crab": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "ginataang-alimasag": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "iidako-nitsuke": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "aori-ichiyaboshi": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "squid-bihun": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-sunmoon-teaegg": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  },
  "dine-zengwen-seabass": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-zengwen-turkeyrice": {
    "effect": "bait",
    "amount": 0.25,
    "casts": 40
  },
  "dine-qigu-milkfish": {
    "effect": "speed",
    "amount": 0.13,
    "casts": 80
  },
  "dine-qigu-oysteromelet": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "dine-guandu-fishball": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-guandu-agei": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  },
  "dine-keelung-dingbiancuo": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-keelung-tempura": {
    "effect": "bait",
    "amount": 0.25,
    "casts": 40
  },
  "dine-keelung-sandwich": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  },
  "dine-penghu-squidnoodle": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-longdong-abalone": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "dine-kenting-grouper": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "dine-kenting-sashimi": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "dine-kenting-mungbean": {
    "effect": "bait",
    "amount": 0.25,
    "casts": 40
  },
  "dine-tolo-mantis": {
    "effect": "lure",
    "amount": 2.5,
    "casts": 80
  },
  "dine-tolo-prawn": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "dine-tolo-fishball": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  },
  "dine-bodensee-trout": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "dine-bodensee-maultaschen": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-bodensee-spaetzle": {
    "effect": "bait",
    "amount": 0.25,
    "casts": 40
  },
  "dine-greifswald-plaice": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "dine-greifswald-bismarck": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  },
  "dine-greifswald-soljanka": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-biwa-sashimi": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "dine-biwa-shijimi": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-biwa-yokan": {
    "effect": "bait",
    "amount": 0.25,
    "casts": 40
  },
  "dine-kasumigaura-karaage": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "dine-kasumigaura-hobikini": {
    "effect": "night",
    "amount": 0.75,
    "casts": 60
  },
  "dine-kasumigaura-kinpira": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  },
  "dine-arcachon-oysters": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "dine-arcachon-moules": {
    "effect": "animal",
    "amount": 2.5,
    "casts": 60
  },
  "dine-arcachon-dune": {
    "effect": "bait",
    "amount": 0.25,
    "casts": 40
  },
  "dine-tokyo_bay-fukagawa": {
    "effect": "lure",
    "amount": 2,
    "casts": 60
  },
  "dine-ishikari-nabe": {
    "effect": "speed",
    "amount": 0.09,
    "casts": 60
  },
  "dine-ishikari-soba": {
    "effect": "weed",
    "amount": 0.5,
    "casts": 40
  }
};
// Player text for each meal effect; the clause before the comma is the effect line in the meal detail.
function mealDesc(d){const a=d.amount,p=Math.round(a*100);return `${{speed:`等待時間減少 ${p}%`,lure:`未登錄的魚與水生動物上鉤機率 ×${a}`,weed:a>=1?'不會釣到水草':`水草機率降低 ${p}%`,bait:`上鉤時 ${p}% 機率不消耗魚餌`,double:`上鉤時 ${p}% 機率多釣到一條`,night:a>=1?'受時段限制的魚全天以最佳時段的機率出現':`受時段限制的魚在其他時段以最佳時段 ${p}% 的機率出現`,animal:`水生動物上鉤機率 ×${a}`}[d.effect]}，持續 ${d.casts} 竿。`}
function assignMealEffect(d){const spec=mealEffects[d.id];if(!spec)throw Error("Missing individual meal effect: "+d.id);Object.assign(d,spec)}
const preparations={"panfry":"抹鹽香煎","fried":"裹粉油炸","ginger":"三杯煸炒收汁","jaguar-steam":"蔥薑清蒸","president-steam":"蔥薑清蒸","fishhead-pot":"魚頭先炸後燉","marbled-steam":"蔥薑清蒸","eel-noodle":"快炒勾芡","soup":"煎香後熬湯","steamed":"蔥薑清蒸","sweetsour-carp":"油炸淋糖醋汁","westlake":"汆煮後淋糖醋汁","wuchang-steam":"黃酒薑絲清蒸","baoyu":"油炸後浸滷汁","stuffed-dace":"釀餡香煎","snakehead-soup":"煎香後煲湯","catfish-eggplant":"醬燉","kabayaki":"刷醬炭烤","yanagawa":"湯煮淋蛋","chinu-shioyaki":"抹鹽火烤","kasago-nitsuke":"醬汁煮付","gurukun-karaage":"裹粉油炸","taimeshi":"先烤魚再與米同炊","kibinago-sashimi":"手開生食","pla-pao":"鹽殼炭烤","pla-duk-fu":"烤熟拆絲、油炸涼拌","kretzer":"奶油香煎","smoked":"煙燻","forelle-blau":"醋湯浸煮","green-herring":"裹粉奶油煎","karpfen-fraenkisch":"剖半裹粉油炸","quenelle":"魚泥成形後水煮","dine-sunmoon-teaegg":"茶葉與香菇滷煮","dine-zengwen-seabass":"薑絲煮湯","dine-zengwen-turkeyrice":"熟火雞肉撕絲、鋪飯淋汁","dine-qigu-milkfish":"薑絲煮湯","dine-qigu-oysteromelet":"粉漿加蛋煎製","dine-guandu-fishball":"魚丸煮湯","dine-guandu-agei":"油豆腐填餡蒸熟","dine-keelung-dingbiancuo":"鍋邊燙米漿、入湯同煮","dine-keelung-tempura":"魚漿壓片油炸","dine-keelung-sandwich":"炸麵包夾餡","dine-penghu-squidnoodle":"小管與麵線煮湯","dine-longdong-abalone":"蠔油快炒","dine-kenting-grouper":"清蒸","dine-kenting-sashimi":"生切裝盤","dine-kenting-mungbean":"綠豆仁煮糖水","dine-tolo-mantis":"炸香後椒鹽拌炒","dine-tolo-prawn":"滾水白灼","dine-tolo-fishball":"咖喱汁燉煮","dine-bodensee-trout":"裹粉奶油煎","dine-bodensee-maultaschen":"包餡後清湯煮熟","dine-bodensee-spaetzle":"麵疙瘩拌融化起司、鋪炸洋蔥","dine-greifswald-plaice":"奶油香煎","dine-greifswald-bismarck":"醋醃魚片夾麵包","dine-greifswald-soljanka":"酸辣湯燉煮"};
const methodCorrections={westlake:'steam','kibinago-sashimi':'raw',taimeshi:'rice','dine-kenting-sashimi':'raw','dine-zengwen-turkeyrice':'mix','dine-greifswald-bismarck':'pickle','dine-bodensee-spaetzle':'mix'};
function setPreparation(d){d.preparation=preparations[d.id];if(!d.preparation)throw Error('Missing cooking preparation: '+d.id);if(methodCorrections[d.id])d.method=methodCorrections[d.id]}
// 0.16 Japanese lake dishes; each uses the stated fish in the cited local recipe (SOURCES.md「0.16」).
recipes.push(
{id:'funazushi',name:'鮒壽司',orig:'ふなずし',fish:'nigorobuna',cuisine:'japan',origin:'日本・滋賀',method:'pickle',tier:'classic',about:'滋賀縣全境的傳統發酵食。春天把煮頃鮒去鰓與內臟、塞鹽醃兩個月以上，洗淨後與米飯層層疊進桶裡壓重，發酵半年以上，連骨頭都變軟。過年與祭典時食用，1998 年列為滋賀縣無形民俗文化財。'},
{id:'amenoio',name:'琵琶鱒炊飯',orig:'あめのいおご飯',fish:'biwamasu',cuisine:'japan',origin:'日本・滋賀',method:'rice',tier:'home',about:'秋天帶卵的琵琶鱒溯河時，當地人叫牠「雨之魚」，把魚和米一起炊成飯；過去整尾魚放在大鍋飯上，熟後把魚肉與魚卵拌進飯裡，湖北一帶稱為「鱒飯」。'},
{id:'koayu-sansho',name:'山椒煮小香魚',orig:'小あゆの山椒煮',fish:'ayu',cuisine:'japan',origin:'日本・滋賀',method:'soup',tier:'home',about:'琵琶湖的小香魚加醬油、糖、酒和醋煮滾，再放入梅乾與山椒，蓋上落蓋燉約三十分鐘。滋賀家庭代代相傳的佃煮。'},
{id:'moroko-dorozu',name:'烤本諸子佐味噌醋',orig:'焼きもろこのどろ酢',fish:'honmoroko',cuisine:'japan',origin:'日本・滋賀',method:'fry',tier:'home',about:'本諸子串起來素烤，淋上白味噌、糖與醋調成的「泥醋」，可依口味加黃芥末。'},
{id:'wakasagi-suzuke',name:'西太公魚蓮藕醋漬',orig:'わかさぎとれんこんの酢漬け',fish:'wakasagi',cuisine:'japan',origin:'日本・茨城',method:'pickle',tier:'home',about:'霞浦湖周邊是日本最大的蓮藕產地。西太公魚裹太白粉油炸，趁熱和蓮藕片一起浸入加了柚子皮與辣椒的甜醋。'},
{id:'kasumi-tsukudani',name:'霞浦佃煮',orig:'佃煮',fish:['wakasagi','icefish'],cuisine:'japan',origin:'日本・茨城',method:'soup',tier:'home',about:'明治時代傳入的佃煮技術在霞浦湖、北浦一帶普及，用西太公魚、日本銀魚、蝦虎等小魚，以各店代代相傳的醬汁熬煮。'});
Object.assign(preparations,{funazushi:'鹽漬後與米飯發酵',amenoio:'魚片與米同炊','koayu-sansho':'山椒梅乾煮','moroko-dorozu':'素烤後淋味噌醋','wakasagi-suzuke':'油炸後浸甜醋','kasumi-tsukudani':'甜鹹醬汁熬煮','dine-biwa-sashimi':'生切裝盤','dine-biwa-shijimi':'蜆煮味噌湯','dine-biwa-yokan':'豆沙拌麵粉、竹皮包蒸','dine-kasumigaura-karaage':'切薄片裹粉油炸、浸醬','dine-kasumigaura-hobikini':'白燒鰻以甜鹹醬煮','dine-kasumigaura-kinpira':'蓮藕辣椒快炒'});
// 0.16 cooking batch 1: dishes for fish that only had pan-frying; sources in SOURCES.md「0.16 料理第 1 批」.
recipes.push(
{id:'karasumi',name:'酒煎烏魚子',orig:'烏魚子',fish:'mullet',cuisine:'taiwan',origin:'臺灣・西南沿海',method:'fry',tier:'classic',about:'烏魚每年冬季沿臺灣西部沿海南下洄游，小寒前後是西南沿海的烏魚汛期，因此又叫「信魚」。烏魚子取自母魚的卵巢，鹽漬、壓平、曬乾後製成；食用時淋上酒、用小火把兩面煎香，再切薄片。'},
{id:'yellowfin-steam',name:'清蒸黃腳鱲',orig:'清蒸黃腳鱲',fish:'yellowfin',cuisine:'china',origin:'香港',method:'steam',tier:'home',about:'香港人把黃鰭鯛叫做黃腳鱲。粵菜家庭晚餐少不了一道原條蒸魚，平日多用黃腳鱲或紅衫魚；整尾魚鋪上薑絲、蔥花蒸熟，再淋豉油與熱油。'},
{id:'grouper-steam',name:'清蒸青斑',orig:'清蒸青斑',fish:'coioides',cuisine:'china',origin:'香港',method:'steam',tier:'classic',about:'點帶石斑在香港叫青斑。原條大火清蒸，蒸前不先下鹽，免得肉質變硬；蒸好後倒掉蒸魚水，鋪蔥絲，淋熱油與蒸魚豉油。大條新鮮的石斑是香港年三十晚與中秋團圓飯上的大菜。'},
{id:'maasuni',name:'沖繩鹽煮魚',orig:'マース煮',fish:['rabbitfish','emperor'],cuisine:'japan',origin:'日本・沖繩',method:'soup',tier:'home',about:'沖繩的家常魚料理。臭肚魚類（沖繩叫エーグアー）去鱗去內臟，放進鍋裡加水到剛好淹過，撒上沖繩產的「島鹽」，加一點泡盛與薑，煮三、四十分鐘；只用鹽調味，吃得出魚的原味。沖繩餐館也用青嘴龍占（沖繩叫タマン）做這道菜。'},
{id:'danggit',name:'宿霧乾臭肚魚',orig:'Danggit',fish:'rabbitfish',cuisine:'seasia',origin:'菲律賓・宿霧',method:'fry',tier:'home',about:'菲律賓宿霧的名產，當地叫 danggit。小尾的臭肚魚剖開攤平、抹鹽曬乾，吃前下油鍋炸到酥脆，配蒜香炒飯、煎蛋和醋，是當地常見的早餐，也是遊客必買的伴手禮。'},
{id:'zander-muellerin',name:'磨坊主婦式梭鱸排',orig:'Zanderfilet Müllerin Art',fish:'zander',cuisine:'europe',origin:'德國・博登湖',method:'fry',tier:'home',about:'「磨坊主婦式」是把魚沾麵粉、用奶油煎的做法。博登湖畔的餐館菜單常有梭鱸排，例如朗根阿根的一家旅館餐廳就供應磨坊主婦式梭鱸排配鹽水馬鈴薯。博登湖的梭鱸漁獲量不多，餐館也會用外地的梭鱸。'});
Object.assign(preparations,{karasumi:'淋酒小火煎香','yellowfin-steam':'整尾薑蔥清蒸','grouper-steam':'原條大火清蒸',maasuni:'島鹽泡盛清煮',danggit:'剖開鹽曬後油炸','zander-muellerin':'裹粉奶油煎'});
// 0.22 dishes for the Tokyo Bay and Ishikari Bay fish; sources in SOURCES.md「0.22」.
recipes.push(
{id:'haze-tempura',name:'鰕虎天婦羅',orig:'ハゼの天ぷら',fish:'mahaze',cuisine:'japan',origin:'日本・東京',method:'fry',tier:'home',about:'黃鰭刺鰕虎在日本叫マハゼ，江戶時代起就是東京灣的家常魚。剖開去骨後裹上薄麵衣下鍋油炸，白肉鬆軟，是江戶前天婦羅的定番；夏到秋季釣鰕虎的人多，釣回家就炸來吃。'},
{id:'nishin-zuke',name:'鯡魚漬',orig:'ニシン漬け',fish:'pacificherring',cuisine:'japan',origin:'日本・北海道',method:'pickle',tier:'home',about:'北海道冬季的家常醃菜。入冬前把鯡魚曬成身欠鯡，泡過洗米水、切段，與白蘿蔔、高麗菜、紅蘿蔔、薑和米麴一起加鹽醃漬，壓上重石慢慢發酵；天冷時蔬菜裡的水分結凍，吃起來特別脆。留萌一帶以身欠鯡加工聞名。'});
Object.assign(preparations,{'haze-tempura':'剖開裹麵衣油炸','nishin-zuke':'身欠鯡與蔬菜、米麴醃漬發酵'});
recipes.forEach(setPreparation);
const cuisines=[['basic','基本'],['taiwan','臺灣'],['china','中國・港粵'],['japan','日本'],['seasia','東南亞'],['europe','歐洲']];
// 0.15: edibility records and ingredient choices are separate. See SOURCES.md.
const nonCookingFish={
topmouth:'體型小，食用利用有限，本作不作料理材料。',
mingtangoby:'小型底棲魚，本作不作料理材料。',
giurinus:'保留觀察與收集用途，本作不作料理材料。',
pleco:'以觀賞利用為主，本作不作料理材料。',
sergeant:'一般不是食用漁獲的目標，本作不作料理材料。',
stripey:'食用經濟價值較低，本作不作料理材料。',
tarpon:'肉多細刺，常作加工利用，本作不作料理材料。',
mono:'以觀賞利用為主，本作不作料理材料。',
mudskipper:'保留泥灘魚類的觀察與收集用途，本作不作料理材料。'
};
Object.assign(nonCookingFish,{raccoonbutterfly:'觀賞魚，本作不作料理材料。',threadfinbutterfly:'觀賞魚，本作不作料理材料。'});
Object.assign(nonCookingFish,{fivestripewrasse:'體型小、少作經濟魚，本作不作料理材料。',duckbillsleeper:'體型小、少作食用，本作不作料理材料。',frillfingoby:'體型小、少作食用，本作不作料理材料。',convict:'體型小、少作食用，本作不作料理材料。',jewelcichlid:'以觀賞利用為主，本作不作料理材料。'});
for(const f of fish){f.cookable=!!f.edible&&!Object.hasOwn(nonCookingFish,f.id);f.cookingNote=nonCookingFish[f.id]||''}
for(const r of recipes){const t=recipeTiers[r.tier];r.fishes=r.fish==='*'?fish.filter(f=>f.cookable).map(f=>f.id):[].concat(r.fish);assignMealEffect(r);r.cost=r.tier==='basic'?t.seasoning:Math.max(30,Math.round(Math.max(...r.fishes.map(id=>fish.find(f=>f.id===id).price))*t.seasoning/5)*5);r.desc=mealDesc(r)}
// 0.14 local restaurants: order a dish in the current water for a cooking effect without using a catch.
// Snacks (basic tier) always raise sale value; other tiers follow the cooking method. Sources: SOURCES.md「0.14 當地餐廳料理」.
const restaurants={
sunmoon:{name:'湖畔餐館',dishes:[
{slug:'teaegg',name:'香菇茶葉蛋',method:'soup',tier:'basic',about:'日月潭玄光寺碼頭邊的老攤，茶葉蛋和香菇一起滷，遊湖船靠岸時常見遊客排隊購買。'}]},
zengwen:{name:'水庫邊小館',dishes:[
{slug:'seabass',name:'鱸魚湯',method:'soup',tier:'home',about:'嘉義縣是臺灣最大的鱸魚養殖產地，產量約占全臺六成。鱸魚切塊加薑絲煮成清湯，是常見的家常湯品。'},
{slug:'turkeyrice',name:'火雞肉飯',method:'fry',tier:'basic',about:'嘉義的代表小吃，白飯鋪上火雞肉絲，淋上特調醬汁，配油蔥與醃蘿蔔。'}]},
qigu:{name:'漁港海產店',dishes:[
{slug:'milkfish',name:'虱目魚肚湯',method:'soup',tier:'classic',about:'臺南的虱目魚養殖面積與產量都居全臺之冠。去刺的虱目魚肚加薑絲煮成清湯，魚肚肥嫩。'},
{slug:'oysteromelet',name:'蚵仔煎',method:'fry',tier:'home',about:'七股潟湖布滿吊掛牡蠣的蚵棚。新鮮蚵仔加地瓜粉漿與蛋煎成，淋上甜辣醬，是臺灣夜市與海產店的經典小吃。'}]},
guandu:{name:'老街小吃',dishes:[
{slug:'fishball',name:'淡水魚丸湯',method:'soup',tier:'home',about:'淡水魚丸是北部頗有名氣的小吃，以海魚魚漿製成，煮成清湯上桌；淡水老街一帶有多家魚丸與魚酥老店。'},
{slug:'agei',name:'阿給',method:'steam',tier:'basic',about:'淡水名產，相傳 1965 年在淡水創製。油豆腐挖空填入冬粉，以魚漿封口後蒸熟，再淋上醬汁。'}]},
keelung:{name:'廟口小吃',dishes:[
{slug:'dingbiancuo',name:'鼎邊趖',method:'soup',tier:'home',about:'基隆廟口的百年老攤小吃。米漿沿著熱鍋邊緣燙成薄片，刮下後加入湯料同煮。'},
{slug:'tempura',name:'天婦羅',method:'fry',tier:'basic',about:'基隆廟口的天婦羅是魚漿壓成片後油炸，外皮微酥、內裡Q軟，配甜醬與醃小黃瓜。'},
{slug:'sandwich',name:'營養三明治',method:'fry',tier:'basic',about:'發跡於基隆廟口夜市。長橢圓形的麵包下鍋炸過，再夾入滷蛋、火腿、小黃瓜與美乃滋。'}]},
penghu:{name:'漁港海產店',dishes:[
{slug:'squidnoodle',name:'小管麵線',method:'soup',tier:'home',about:'澎湖必吃的在地小吃，現撈小管和麵線一起煮成湯，湯頭帶著海味。'}]},
longdong:{name:'海岸餐館',dishes:[
{slug:'abalone',name:'蠔油炒九孔',method:'fry',tier:'home',about:'東北角沿岸曾是臺灣九孔養殖的重要產地。澳底一帶的老海產店以蠔油快炒九孔，醬汁不厚重，保留貝肉的脆度。'}]},
kenting:{name:'恆春小館',dishes:[
{slug:'grouper',name:'清蒸龍膽石斑',method:'steam',tier:'classic',about:'屏東枋寮是龍膽石斑的重要養殖地，全世界第一尾龍膽石斑魚苗就在當地魚塭誕生。大塊魚肉清蒸，魚皮膠質豐厚。'},
{slug:'sashimi',name:'後壁湖生魚片',method:'fry',tier:'home',about:'恆春後壁湖漁港以平價生魚片聞名，港邊多家店把當日漁獲切片上桌。'},
{slug:'mungbean',name:'綠豆蒜',method:'soup',tier:'basic',about:'恆春老街的消暑甜湯，又寫作綠豆饌。去殼的綠豆仁煮成糖水，形似蒜瓣而得名，有冰的也有熱的。'}]},
tolo:{name:'海鮮酒家',dishes:[
{slug:'mantis',name:'椒鹽瀨尿蝦',method:'fry',tier:'classic',about:'香港海鮮酒家的招牌菜，瀨尿蝦（蝦蛄）炸香後以椒鹽、蒜蓉同炒。'},
{slug:'prawn',name:'白灼蝦',method:'steam',tier:'home',about:'鮮蝦連殼在滾水中灼熟，蘸豉油吃，是最能顯出蝦鮮的粵式做法。'},
{slug:'fishball',name:'咖喱魚蛋',method:'soup',tier:'basic',about:'香港街頭小吃，魚漿做的魚蛋在咖喱汁裡煮透，用竹籤串著吃；上世紀 50 年代已有路邊攤檔販售。'}]},
bodensee:{name:'湖畔餐館',dishes:[
{slug:'trout',name:'磨坊主婦式鱒魚',orig:'Forelle Müllerin Art',method:'fry',tier:'home',about:'博登湖畔魚館常見的鱒魚料理，鱒魚沾麵粉以奶油煎香，配杏仁片與奶油醬。'},
{slug:'maultaschen',name:'方形餃湯',orig:'Maultaschen in der Brühe',method:'soup',tier:'home',about:'施瓦本地區的家常料理，麵皮包入肉餡與菠菜，在清湯裡煮熟。'},
{slug:'spaetzle',name:'起司麵疙瘩',orig:'Kässpätzle',method:'steam',tier:'basic',about:'施瓦本與阿爾高一帶的名菜，手工麵疙瘩與融化的起司層層相疊，鋪上炸洋蔥。'}]},
greifswald:{name:'港邊魚館',dishes:[
{slug:'plaice',name:'香煎鰈魚',orig:'Gebratene Scholle',method:'fry',tier:'home',about:'源自漢堡芬肯韋德的做法：整尾歐洲鰈以奶油煎到金黃，配培根丁與煎馬鈴薯，呂根島等波羅的海度假區的魚館也有供應。歐洲鰈與遊戲中可釣的歐洲川鰈是不同的魚。'},
{slug:'bismarck',name:'俾斯麥鯡魚堡',orig:'Bismarck-Fischbrötchen',method:'fry',tier:'basic',about:'北德港口最常見的小吃，醋醃鯡魚片夾進小麵包，加洋蔥與酸黃瓜；格賴夫斯瓦爾德的博物館港也有船上攤位賣魚堡。'},
{slug:'soljanka',name:'酸辣雜燴湯',orig:'Soljanka',method:'soup',tier:'home',about:'源自俄羅斯、在德國東部普及的酸辣濃湯，波羅的海沿岸還有加魚的魚肉版本。'}]}
};
Object.assign(restaurants,{
biwa:{name:'湖魚料理店',dishes:[
{slug:'sashimi',name:'琵琶鱒刺身',orig:'ビワマス刺身',method:'raw',tier:'home',about:'琵琶鱒片成三片、去皮去刺後切片，鋪在白蘿蔔絲與紫蘇葉上，配山葵醬油，也可以蘸芥末醋味噌。初夏到盛夏油脂最多。'},
{slug:'shijimi',name:'瀨田蜆味噌湯',orig:'しじみ汁',method:'soup',tier:'home',about:'瀨田蜆是琵琶湖特有的蜆，肉厚味濃。以昆布高湯煮到殼開，再化入味噌。三、四月的春蜆最好。'},
{slug:'yokan',name:'丁稚羊羹',orig:'丁稚羊羹',method:'steam',tier:'basic',about:'滋賀的特產，豆沙拌入麵粉，用竹皮包起來蒸，口感Ｑ而帶竹香。名稱相傳來自近江八幡出外當學徒（丁稚）的少年返鄉時帶的便宜點心。'}]},
kasumigaura:{name:'湖岸食堂',dishes:[
{slug:'karaage',name:'唐揚鯉魚',orig:'鯉の唐揚げ',method:'fry',tier:'home',about:'霞浦湖周邊的鄉土菜。鯉魚片成薄片、切斷細刺，裹太白粉炸酥，再浸入醬油、醋、糖、麻油與薑調成的醬汁；連骨頭都能吃，也出現在學校午餐。'},
{slug:'hobikini',name:'帆引煮鰻',orig:'うなぎの帆引き煮',method:'soup',tier:'home',about:'利根川與霞浦湖一帶過去盛產鰻魚。白燒鰻用酒、糖與醬油煮軟，收汁後淋回鰻魚上，再擺一片大竹葉，模仿霞浦湖的帆引船。'},
{slug:'kinpira',name:'金平蓮藕',orig:'れんこんのきんぴら',method:'fry',tier:'basic',about:'茨城常見的家常小菜。蓮藕切條，和辣椒一起用油炒，加酒、醬油與糖調味；不蓋鍋蓋，讓蓮藕保持脆口。'}]}});
Object.assign(restaurants,{
arcachon:{name:'蚵棚小館',dishes:[
{slug:'oysters',name:'阿卡雄生蠔',orig:"Huîtres du Bassin d'Arcachon",method:'raw',tier:'home',about:'灣邊的蚵棚把剛出水的牡蠣剖開上桌，擠點檸檬就生吃。阿卡雄灣年產牡蠣約一萬八千公噸，也是歐洲最大的牡蠣苗產地。'},
{slug:'moules',name:'白酒淡菜',orig:'Moules marinières',method:'steam',tier:'home',about:'法國大西洋沿岸的家常菜：淡菜下鍋，加奶油、紅蔥頭、白酒與香芹，蓋上鍋蓋燜到殼開，常配薯條一起吃。'},
{slug:'dune',name:'白沙丘泡芙',orig:'Dune blanche',method:'fry',tier:'basic',about:'費雷角半島的麵包師傅帕斯卡・呂卡在 2007 年做出的小點心：撒了糖的小泡芙填滿輕盈的奶油餡，名字取自當地的白色沙丘。'}]}});
Object.assign(preparations,{'dine-arcachon-oysters':'現開生食','dine-arcachon-moules':'白酒加蓋燜煮','dine-arcachon-dune':'泡芙烤好後擠入奶油餡'});
Object.assign(restaurants,{
tokyo_bay:{name:'江戶前食堂',dishes:[
{slug:'fukagawa',name:'深川飯',orig:'深川めし',method:'rice',tier:'home',about:'深川（今東京都江東區）在江戶時代是漁師町，盛產蛤蜊。漁民把蛤蜊和蔥用味噌煮過、澆在白飯上當作伙食，後來也有把蛤蜊與米一起炊煮的做法。'}]},
ishikari:{name:'石狩鍋屋',dishes:[
{slug:'nabe',name:'石狩鍋',orig:'石狩鍋',method:'soup',tier:'home',about:'石狩川口漁民慶祝豐收時，把鮭魚塊與魚雜丟進味噌湯鍋裡煮的漁師料理。鍋底鋪昆布、中央放味噌，周圍排上鮭魚、高麗菜、白蘿蔔與豆腐，起鍋前撒山椒粉。昭和 20 年代遊客來看鮭魚地曳網時當地以此招待，因而傳遍全國。'},
{slug:'soba',name:'鯡魚蕎麥麵',orig:'ニシン蕎麦',method:'soup',tier:'basic',about:'把身欠鯡用醬油、糖、酒與薑煮成甜鹹的甘露煮，放在熱蕎麥麵上。北海道的做法用濃口醬油，湯頭微甜；據說源自江差鯡魚漁業鼎盛時網元橫山家的食譜。'}]}});
Object.assign(preparations,{'dine-tokyo_bay-fukagawa':'蛤蜊味噌煮澆飯','dine-ishikari-nabe':'鮭魚與蔬菜味噌鍋','dine-ishikari-soba':'甘露煮鯡魚放在熱蕎麥麵上'});
const dinePrices={basic:45,home:135,classic:270};
const dishes=[];
for(const [region,r] of Object.entries(restaurants))for(const d of r.dishes){d.id=`dine-${region}-${d.slug}`;setPreparation(d);const t=recipeTiers[d.tier];d.region=region;assignMealEffect(d);d.price=dinePrices[d.tier];d.desc=mealDesc(d);dishes.push(d)}

// 0.19 bait access and non-fish catches; fish-only licences and recipes retain D.fish.
const baitGroups={"dough":["qili","crucian","carp","grass","silver","bighead","mudcarp","bream","girella","rabbitfish","mullet","tilapia","hypsibarbus","pleco","mezina","sergeant","stripey","niletilapia","scat","chelon","whitecrucian","largescalemullet","greenbackmullet","gizzardshad","sarba","midas","munense","chinesefilefish","commonbream","ayu","dottedshad","roach","tanakia","rosybitterling","comeshad","milkfish","convict","kuhua","yellowfinsurgeon","seagrassparrot"],"worm":["pachyhead","candidia","topmouth","mingtangoby","loach","amurcatfish","giurinus","walkingcatfish","swampeel","gourami","semifasciolatus","blaufelchen","honmoroko","nigorobuna","wakasagi","icefish","channelcat","bluegill","alpinechar","tench","pearleartheeater","redevil","jewelcichlid","siamglassfish","isaza"],"shrimp":["blackporgy","yellowfin","terapon","blackcarp","fourline","puffer","mono","twseabream","mudskipper","fusilier","goatfish","tuskfish","morwong","wrasse","redseabream","emperor","glassfish","neondamsel","lemuru","splendens","porcupine","yellowgoat","oyena","silversprat","silversillago","herring","flounder","fivestripewrasse","flagtail","manybargoatfish","whipfinmojarra","olivegoby","duckbillsleeper","nuchalponyfish","frillfingoby","eelgoby","raccoonbutterfly","blackeyewrasse","slenderpinjalo","threadfinbutterfly","greenfinwrasse","sammara","yellowstripescad","monogrammonocle"],"meat":["culter","snakehead","jaguar","marbledgoby","stripedsnakehead","redfinculter","spottedsnakehead","scorpionfish","russellsnapper","ladyfish","tarpon","eel","mangrovejack","dwarfsnakehead","bluespotgrouper","longfingrouper","squirrelfish","bigeyebream","monocle","coioides","yellowbarracuda","bigeyetrevally","perch","pike","browntrout","zander","garfish","biwamasu","hawkfish","burbot","duskysleeper","tankgoby","marbledeel","neglectascorpion","chocolatehind","bigeyesnapper","hasu","gigi"]};
// 0.21 Arcachon fish.
baitGroups.meat.push('europeanseabass','europeaneel','conger');baitGroups.shrimp.push('gilthead','commonsole','redmullet','undulateray','thornbackray','senegalsole','whiteseabream');baitGroups.dough.push('thicklipmullet','blackseabream','goldenmullet');
// 0.22 Tokyo Bay and Ishikari Bay fish; worms also cover the polychaete-eating bay fish.
baitGroups.worm.push('mahaze','shirogisu','stoneflounder','marbledflounder','greenling','yellowstripedflounder','cresthead','saffroncod');baitGroups.shrimp.push('sappa','pacificherring','hokke','ezomebaru','chika','surfperch');baitGroups.meat.push('japaneseseabass','silvercroaker','chubmackerel','blackrockfish');
for(const [id,ids] of Object.entries(baitGroups))for(const fid of ids){const f=fish.find(x=>x.id===fid);if(!f)throw Error(fid);f.requiredBait=id;}
const animals=[{"id":"nipponense","name":"日本沼蝦","other":"","latin":"Macrobrachium nipponense","category":"crustacean","kind":"淡水蝦類","water":"fresh","requiredBait":"worm","min":0.005,"max":0.03,"price":45,"form":"身體半透明，吻額細長，前方有一對細長螯足，腹部帶有細小斑紋。","habitat":"生活於湖泊、河川緩流與水草間。","diet":"攝取底部碎屑及小型水生生物。","distribution":"東亞淡水與河口水域；日月潭有採集標本。","food":"可食用的淡水蝦。","hint":"細長的螯足藏在水草間，身體近乎透明。","source":"https://www.wra.gov.tw/NewsRiverNoun_Content.aspx?n=25142&s=2191","bounty":0,"rod":0,"edible":true,"cookable":false,"cookingNote":"尚未開放料理用途。","localNames":[],"localNameNote":"未列出的台語與客語名稱待查。"},{"id":"pelagicus","name":"遠海梭子蟹","other":"","latin":"Portunus pelagicus","category":"crustacean","kind":"海水蟹類","water":"sea","requiredBait":"meat","min":0.15,"max":0.5,"price":55,"form":"甲殼寬而扁，兩側各有長棘，最後一對腳扁平如槳，可在水中游動。","habitat":"生活於沿岸沙泥底，幼蟹與雌蟹也會進入河口及潟湖。","diet":"攝食底棲小動物。","distribution":"印度—太平洋沿岸；七股潟湖等濕地是其成長棲地。","food":"可食用的游泳蟹。","hint":"最後一對腳像小槳，能在潟湖水中游動。","source":"https://www.tjnp.gov.tw/ch/sglarticle/crabs","bounty":0,"rod":0,"edible":true,"cookable":false,"cookingNote":"尚未開放料理用途。","localNames":[],"localNameNote":"未列出的台語與客語名稱待查。"},{"id":"fangsiao","name":"飯蛸","other":"短蛸、短爪章魚","latin":"Amphioctopus fangsiao","category":"cephalopod","kind":"章魚類","water":"sea","requiredBait":"meat","min":0.1,"max":0.8,"price":55,"form":"外套膜圓卵形，有八隻腕，腕間以薄膜相連，身體柔軟，可改變體色。","habitat":"棲息於沿岸底層，利用海底的遮蔽物藏身。","diet":"攝食甲殼類等小型動物。","distribution":"西北太平洋海域；臺灣貝類資料庫記錄於澎湖內海及北部海域。","food":"可食用的章魚。","hint":"八隻短腕從圓圓的身體下伸出，會躲進海底縫隙。","source":"https://shell.sinica.edu.tw/chinese/shellpic_T.php?science_no=2126","bounty":0,"rod":0,"edible":true,"cookable":false,"cookingNote":"尚未開放料理用途。","localNames":[],"localNameNote":"未列出的台語與客語名稱待查。"},{"id":"lessoniana","name":"萊氏擬烏賊","other":"軟絲、軟翅仔","latin":"Sepioteuthis lessoniana","category":"cephalopod","kind":"魷魚類","water":"sea","requiredBait":"shrimp","min":0.1,"max":1.2,"price":40,"form":"外套膜粗圓筒形，兩側寬大的鰭幾乎與身體等長，腕與觸腕集中在頭前。","habitat":"活動於近岸淺海的礁岩及珊瑚礁周圍。","diet":"捕食蝦、其他甲殼類與小魚。","distribution":"印度—西太平洋；臺灣東北角與澎湖均有紀錄。","food":"常見食用頭足類，肉質厚實。","hint":"身旁有一圈寬大的軟鰭，在礁岩附近追逐小蝦。","source":"https://kmweb.moa.gov.tw/theme_data.php?id=101&theme=fisheasy","localNames":[["台語","軟絲仔 nńg-si-á"]],"bounty":0,"rod":0,"edible":true,"cookable":false,"cookingNote":"尚未開放料理用途。","localNameNote":"未列出的台語與客語名稱待查。"},{"id":"chinensis","name":"中國槍魷","other":"臺灣鎖管、小管、小卷、透抽","latin":"Uroteuthis chinensis","category":"cephalopod","kind":"魷魚類","water":"sea","requiredBait":"shrimp","min":0.05,"max":0.5,"price":42,"form":"身體細長，末端尖，鰭呈菱形；頭前有八隻腕與兩隻較長的觸腕。","habitat":"生活於沿近海水域，會在水層中活動。","diet":"捕食小魚與小型甲殼類。","distribution":"印度—西太平洋；臺灣周圍及澎湖內海有紀錄。","food":"澎湖常見的食用鎖管之一。","hint":"細長的身體末端尖尖，游動時身旁的菱形鰭輕輕擺動。","source":"https://kmweb.moa.gov.tw/theme_data.php?id=102&theme=fisheasy","bounty":0,"rod":0,"edible":true,"cookable":false,"cookingNote":"尚未開放料理用途。","localNames":[],"localNameNote":"未列出的台語與客語名稱待查。"}];
// 0.21 Arcachon animals; numbered after the 0.21 fish, not cookable until recipes are sourced.
const animals21=[
{id:'cuttlefish',name:'歐洲烏賊',other:'',latin:'Sepia officinalis',category:'cephalopod',kind:'烏賊類',water:'sea',requiredBait:'shrimp',min:.15,max:1.5,price:45,form:'外套膜扁平寬圓，兩側有窄鰭沿身體邊緣環繞；體內有石灰質的海螵蛸，兩條觸腕可以伸出捕捉獵物。',habitat:'沿岸的沙泥底與海草床，春夏到沿岸淺水產卵，秋季幼體移往較深的水域過冬。',diet:'食性很廣，以兩條觸腕捕捉底棲或浮游的甲殼類與魚。',distribution:'東大西洋自設得蘭群島、挪威南部至西北非，以及地中海。卵一顆顆附著在細長的物體上，成串包在膠質裡。阿卡雄灣全灣都以刺網與烏賊籠捕撈，是灣內上岸量最大的頭足類，遠多於任何一種魚。',food:'許多國家頭足類漁業的重要物種，在日本、韓國、義大利與西班牙尤其受重視。',hint:'身旁一圈窄鰭，體內藏著一片海螵蛸。',source:'https://www.sealifebase.se/summary/Sepia-officinalis.html'},
{id:'commonoctopus',name:'普通章魚',other:'真蛸',latin:'Octopus vulgaris',category:'cephalopod',kind:'章魚類',water:'sea',requiredBait:'meat',min:.3,max:2.5,price:52,form:'圓囊狀的身體下方伸出八條長腕，腕上有兩列吸盤；沒有內殼，能鑽進很窄的縫隙。',habitat:'沿岸的岩礁、沙底與泥底，一直到大陸棚邊緣，多在水深 150 公尺以內。',diet:'捕食甲殼類、貝類與魚。',distribution:'溫帶與熱帶海域環球分布。阿卡雄灣 1999～2000 年有章魚上岸紀錄。',food:'地中海最有價值的章魚之一，以鮮品或冷凍上市。',hint:'八條長腕、沒有殼，會鑽進窄縫的頭足類。',source:'https://www.sealifebase.se/summary/Octopus-vulgaris.html'},
{id:'shorecrab',name:'普通濱蟹',other:'綠蟹',latin:'Carcinus maenas',category:'crustacean',kind:'海水蟹類',water:'brackish',requiredBait:'meat',min:.02,max:.12,price:36,form:'背甲寬約 5 公分，最大 7.7 公分，前緣兩側各有五枚鋸齒；法文名意為綠蟹。',habitat:'從潮間帶到水深 200 公尺的淺水，躲在石頭下或泥、沙底，也住在半淡鹹水潟湖與海草床。',diet:'攝食底棲小動物。',distribution:'東大西洋自冰島、挪威、英國至茅利塔尼亞；已被帶到北美、南非與澳洲並建立族群。法文叫 crabe vert（綠蟹），阿卡雄灣 1999～2000 年有上岸紀錄。',food:'商業捕撈物種。',hint:'背甲前緣兩側各有五枚鋸齒的小蟹，常躲在石頭下。',source:'https://www.sealifebase.se/summary/Carcinus-maenas.html'},
{id:'brownshrimp',name:'褐蝦',other:'',latin:'Crangon crangon',category:'crustacean',kind:'海水蝦類',water:'brackish',requiredBait:'shrimp',min:.002,max:.01,price:30,form:'體長最多約 9 公分，身體略扁、呈灰褐色帶細斑；第一對步足末端呈半鉗狀。',habitat:'生活在細沙或略帶泥的沙底，能適應鹽度很低的水，也進入半淡鹹水潟湖；幼蝦在海草床與裸露的沙灘活動。',diet:'肉食性，吃小型甲殼類、環節動物與貝類等底棲生物。',distribution:'東北大西洋與地中海。法文叫 crevette grise（灰蝦），阿卡雄灣 1999～2000 年有上岸紀錄。',food:'商業捕撈物種，歐洲北海沿岸常見的食用小蝦。',hint:'灰褐色的小蝦，會把身體埋進沙裡。',source:'https://www.sealifebase.se/summary/Crangon-crangon.html'}];
for(const a of animals21)Object.assign(a,{bounty:0,rod:0,edible:true,cookable:false,cookingNote:'尚未開放料理用途。'});
Object.assign(animals21[0],{localNames:[['法語','Seiche commune']]});Object.assign(animals21[1],{localNames:[['法語','Poulpe']]});Object.assign(animals21[2],{localNames:[['法語','Crabe vert']]});Object.assign(animals21[3],{localNames:[['法語','Crevette grise']]});
// 0.21 jellyfish: any bait may snag one (D.jellyRate), it costs that bait and sells cheaply; numbered after the 0.21 animals.
const hkj='https://zh.hkjellyfish.com/hk-species',slb=n=>'https://www.sealifebase.se/summary/'+n+'.html';
const jellyfish=[
{id:'freshwaterjelly',name:'桃花水母',other:'淡水水母',latin:'Craspedacusta sowerbii',kind:'淡水水母',water:'fresh',min:.001,max:.002,form:'透明的小水母，傘徑最多約 2.5 公分，身體九成九以上是水；傘緣垂著一圈短短的觸手。',habitat:'從小池塘到大型水庫都有。固著的水螅體只有幾公釐，水溫超過 25 °C 才長出會游動的水母，多在夏季到初秋出現。',diet:'捕食浮游動物。',distribution:'原產東亞，現已遍布各大洲的淡水。博登湖 1999 年在布雷根茨附近的哈德灣首次發現，2018 年炎夏再次觀察到，多出現在溫暖天氣的避風灣內。',food:'不可食用。對人無害。',hint:'比指甲還小的透明水母，只在炎熱的夏天出現。',source:'https://www.sg.ch/umwelt-natur/wasser/eingetaucht--wasserwissen/quallen-im-bodensee-.html',localNames:[['德語','Süßwasserqualle']]},
{id:'moonjelly',name:'海月水母',other:'月亮水母',latin:'Aurelia aurita',kind:'缽水母',water:'sea',min:.05,max:.8,form:'傘面扁平透明，略帶粉紅、藍或紫色，傘徑可達 40～50 公分；傘緣有許多短觸手，透過傘面看得到四個馬蹄形的生殖腺。',habitat:'沿岸、海灣、峽灣與河口的表層水域，也能生活在半淡鹹水。',diet:'捕食浮游動物。',distribution:'從赤道到極地的各大海域都有。德國北海與波羅的海最常見的水母，多在夏季到初秋出現，有些年份大群聚集。格賴夫斯瓦爾德港與阿卡雄灣內都有觀察紀錄。',food:'不可食用。刺很輕微，多數人不會察覺。',hint:'透明的圓盤上，隱約看得到四個馬蹄形的圈。',source:slb('Aurelia-aurita'),localNames:[['德語','Ohrenqualle'],['法語','Aurélie']]},
{id:'nozakii',name:'白色霞水母',other:'',latin:'Cyanea nozakii',kind:'缽水母',water:'sea',min:.3,max:6,form:'傘面乳白色，傘緣下方垂著大把細長的觸手；胃囊之間的水管連成密密的網。',habitat:'在沿岸的中層水域漂游。',diet:'用觸手上的刺細胞捕捉獵物。',distribution:'印度—西太平洋，中國、日本、香港等地。香港水域最常見的水母，也是當地螫傷的主因。基隆八斗子、龍洞與吐露港都有觀察紀錄。',food:'不可食用。會螫人。',hint:'乳白色的大水母，拖著一大把細長觸手。',source:hkj},
{id:'upsidedownjelly',name:'倒立水母',other:'',latin:'Cassiopea andromeda',kind:'缽水母',water:'brackish',min:.05,max:.5,form:'傘面黃褐色，帶白色斑點與條紋，傘徑最大約 30 公分；褐色口腕分出皺褶狀的細枝。平常傘面朝下貼在水底，常被誤認成海葵。',habitat:'淺水潟湖、潮間帶的沙泥灘、紅樹林周圍與海草床。',diet:'用口腕上的刺細胞捕捉獵物。',distribution:'印度—太平洋。七股潟湖北側的臺南將軍沿岸、恆春半島西側的車城後灣都有觀察紀錄。',food:'不可食用。有毒，會螫人。',hint:'倒過來躺在水底的水母，乍看像一朵海葵。',source:slb('Cassiopea-andromeda')},
{id:'boxjelly',name:'希維茨基斯氏箱形水母',other:'',latin:'Copula sivickisi',kind:'箱水母',water:'sea',min:.001,max:.002,form:'傘部呈方箱形，最大約 1.4 公分。',habitat:'多在珊瑚礁一帶。白天附著在底質上不動，只在夜間活動。',diet:'夜裡在表層水域獵捕浮游甲殼類，會用眼睛找出獵物密集的地方。',distribution:'印度—太平洋與中西大西洋。龍洞岬與東北角海岸有觀察紀錄。',food:'不可食用。對人無害。',hint:'指尖大小的方形水母，白天黏在礁石上休息。',source:slb('Copula-sivickisi')},
{id:'acromitus',name:'鞭腕水母',other:'端鞭水母、四草水母',latin:'Acromitus flagellatus',kind:'缽水母',water:'brackish',min:.03,max:.3,form:'傘徑約 12 公分，傘面光滑或帶細顆粒；口腕約與傘徑等長，末端拖著細絲般的長鞭。',habitat:'紅樹林與河口。',diet:'用口腕上的刺細胞捕捉獵物。',distribution:'印度—西太平洋，包括印尼、馬來西亞、印度與臺灣。香港常在六月起大量出現，2021 年曾在吐露港大量聚集。',food:'不可食用。',hint:'口腕末端拖著細長的鞭子，成群漂在紅樹林旁。',source:hkj},
{id:'spottedjelly',name:'澳洲斑點水母',other:'',latin:'Phyllorhiza punctata',kind:'缽水母',water:'sea',min:.2,max:3,form:'傘面藍褐色，均勻散布不透明的白點，傘徑最大約 60 公分；八條透明而粗壯的口腕分出許多枝，末端有褐色的刺細胞團。',habitat:'近岸，在港灣、海灣及河口附近的混濁水域靠近表層游動，也出現在紅樹林。',diet:'用口腕上的刺細胞捕捉獵物。',distribution:'印度—太平洋，也出現在西大西洋與地中海。吐露海峽與榕樹澳一帶有觀察紀錄。',food:'不可食用。',hint:'藍褐色的傘上撒滿白點。',source:slb('Phyllorhiza-punctata')},
{id:'rhizostome',name:'根口水母',other:'',latin:'Rhizostoma octopus',kind:'缽水母',water:'sea',min:.5,max:10,form:'大型水母，傘徑最大約 90 公分；傘緣沒有觸手，傘下垂著八條粗大的口腕。',habitat:'東北大西洋的沿岸水層。',diet:'用口腕上的刺細胞捕捉浮游生物。',distribution:'東北大西洋，北緯 38～73 度。阿卡雄市沿岸與灣口一帶有多筆觀察紀錄。',food:'不可食用。對人無害。',hint:'沒有觸手的大水母，傘下垂著八條粗壯的口腕。',source:slb('Rhizostoma-octopus'),localNames:[['法語','Rhizostome、Poumon de mer']]},
{id:'compassjelly',name:'羅盤水母',other:'',latin:'Chrysaora hysoscella',kind:'缽水母',water:'sea',min:.1,max:.8,form:'傘徑約 20 公分，傘面有 16 條褐色放射寬帶，邊緣鑲著深色的 V 字細線，看起來像羅盤；每一區垂著 3 條觸手。',habitat:'多在近岸，從表層到水深 150 公尺，黃昏時較常見。',diet:'用觸手上的刺細胞捕捉獵物。',distribution:'大西洋與地中海。阿卡雄灣費雷角一帶有觀察紀錄。',food:'不可食用。觸手會螫人。',hint:'傘面畫著褐色放射紋，像一面羅盤。',source:slb('Chrysaora-hysoscella'),localNames:[['法語','Méduse rayonnée']]}];
for(const j of jellyfish)Object.assign(j,{category:'jellyfish',price:2,bounty:0,rod:0,edible:false,cookable:false,localNames:j.localNames||[]});
for(const id of ['nozakii','upsidedownjelly','boxjelly'])jellyfish.find(j=>j.id===id).localNameNote='台語與客語名稱待查。';
for(const id of ['acromitus','spottedjelly'])jellyfish.find(j=>j.id===id).localNameNote='粵語名稱待查。';
const animals19=[...animals];animals.push(...animals21,...jellyfish);
// Jellyfish weights are percent chances per baited cast; sources in SOURCES.md「0.21 水母」.
const additions={sunmoon:{nipponense:5},qigu:{pelagicus:4,upsidedownjelly:2},penghu:{fangsiao:2,lessoniana:3,chinensis:3},longdong:{lessoniana:4,nozakii:2,boxjelly:1},arcachon:{cuttlefish:6,commonoctopus:2,shorecrab:5,brownshrimp:4,moonjelly:.5,rhizostome:.5,compassjelly:.5},keelung:{nozakii:2},kenting:{upsidedownjelly:1},tolo:{nozakii:1,acromitus:1,spottedjelly:1},greifswald:{moonjelly:2},bodensee:{freshwaterjelly:1}};
for(const r of regions)r.animals=additions[r.id]||{};
// Fish added from 0.21 come after the 0.19 animals (0.22 fish after the jellyfish) so existing encyclopedia numbers stay put.
const species=[...fish.filter(f=>!fish21.includes(f)&&!fish22.includes(f)),...animals19,...fish21,...animals21,...jellyfish,...fish22];
// 0.20 cooking batch 2: three basic methods and dishes for shrimp, crab and cephalopods; sources in SOURCES.md「0.20 料理第 2 批」.
for(const a of animals19){a.cookable=true;delete a.cookingNote}
const friedAnimals=['nipponense','fangsiao','lessoniana','chinensis'];
const batch2=[
{id:'deepfry',name:'炸物',prefix:'炸',fish:[...fish.filter(f=>f.cookable&&f.max<=.5).map(f=>f.id),...friedAnimals],materialNote:'小型魚、日本沼蝦、飯蛸與魷魚類',cuisine:'basic',origin:'各地家常',method:'fry',tier:'basic',about:'小魚、蝦或章魚、魷魚裹上薄粉，下油鍋炸到酥脆，撒鹽趁熱吃。'},
{id:'steamfish',name:'蒸魚',prefix:'蒸',fish:'*',cuisine:'basic',origin:'各地家常',method:'steam',tier:'basic',about:'整尾魚鋪上薑絲、蔥段，放進蒸籠蒸熟，最能吃出魚肉本身的味道。'},
{id:'grillfish',name:'烤魚',prefix:'烤',fish:'*',cuisine:'basic',origin:'各地家常',method:'fry',tier:'basic',about:'魚身抹鹽，用炭火或烤架把兩面烤到焦香。'},
{id:'tenaga-karaage',name:'霞浦手長蝦唐揚',orig:'テナガエビの唐揚げ',fish:'nipponense',cuisine:'japan',origin:'日本・茨城',method:'fry',tier:'home',about:'日本沼蝦在日本叫「手長蝦」（テナガエビ），雄蝦有一對比身體還長的螯足。霞浦湖、北浦自古就有捕撈手長蝦的漁業；茨城縣的環境中心介紹湖邊的蝦類時，說手長蝦常做成唐揚，非常好吃。整隻蝦裹粉下鍋油炸，連殼一起吃。'},
{id:'sake-steam-crab',name:'酒蒸沙蠘',orig:'酒蒸沙蠘',fish:'pelagicus',cuisine:'taiwan',origin:'臺灣',method:'steam',tier:'home',about:'臺灣把遠海梭子蟹叫「沙蠘」，雄蟹殼上有雲狀花紋，雌蟹則偏墨綠色。漁業署介紹臺灣常見的蟳蟹時，推薦沙蠘用酒蒸或爆炒；整隻蟹淋上米酒蒸熟，保留蟹肉的甜味。'},
{id:'ginataang-alimasag',name:'椰奶燉花蟹',orig:'Ginataang Alimasag',fish:'pelagicus',cuisine:'seasia',origin:'菲律賓',method:'soup',tier:'home',about:'菲律賓把遠海梭子蟹叫 alimasag，是當地重要的食用蟹。Ginataang 是「用椰奶煮」的意思：蟹和南瓜、長豆一起放進加了薑、蒜的椰奶裡燉煮，是菲律賓常見的海鮮家常菜。'},
{id:'iidako-nitsuke',name:'明石飯蛸煮付',orig:'飯蛸の煮付け',fish:'fangsiao',cuisine:'japan',origin:'日本・兵庫',method:'soup',tier:'home',about:'飯蛸在日本叫イイダコ，抱卵的母蛸身體裡塞滿米粒般的卵，因而得名。兵庫縣明石每年十二月開始捕撈，二月左右最多，正好和夏天當令的真蛸相反；水煮、天婦羅或用醬汁燉煮，是明石冬天餐桌上少不了的食材。'},
{id:'aori-ichiyaboshi',name:'德島軟絲一夜干',orig:'アオリイカの一夜干し',fish:'lessoniana',cuisine:'japan',origin:'日本・德島',method:'fry',tier:'home',about:'軟絲在日本叫アオリイカ，是德島縣的特產。德島縣水產研究課曾以它開辦料理教室，教生魚片、烏賊飯與一夜干三種做法；一夜干是把剖開的軟絲泡過鹽水，風乾一晚後再烤。'},
{id:'squid-bihun',name:'小卷米粉',orig:'小卷米粉',fish:'chinensis',cuisine:'taiwan',origin:'臺灣・基隆、澎湖',method:'soup',tier:'home',about:'臺灣把小型的鎖管叫做小卷。基隆是全臺最主要的小卷產地，澎湖的小卷也常被店家拿來當招牌；小卷米粉是把整隻小卷和米粉一起煮成湯，湯頭帶有海味。'}];
Object.assign(preparations,{deepfry:'裹粉油炸',steamfish:'薑蔥清蒸',grillfish:'抹鹽炭烤','tenaga-karaage':'整隻裹粉油炸','sake-steam-crab':'淋米酒清蒸','ginataang-alimasag':'椰奶燉煮','iidako-nitsuke':'醬汁燉煮','aori-ichiyaboshi':'鹽水浸泡、風乾後烤','squid-bihun':'與米粉同煮成湯'});
for(const r of batch2){setPreparation(r);const t=recipeTiers[r.tier];r.fishes=r.fish==='*'?fish.filter(f=>f.cookable).map(f=>f.id):[].concat(r.fish);assignMealEffect(r);r.cost=r.tier==='basic'?t.seasoning:Math.max(30,Math.round(Math.max(...r.fishes.map(id=>species.find(f=>f.id===id).price))*t.seasoning/5)*5);r.desc=mealDesc(r)}
recipes.splice(1,0,...batch2.slice(0,3));recipes.push(...batch2.slice(3));
// 0.21 rarity: a catch with any non-basic recipe is a signature catch (dark-blue name) and is kept by the bulk sale.
// 0.23 Jeju: runtime prices below already include the existing x3 price scale.
const fish23=[
  {
    "id": "smallscalegirella",
    "name": "小鱗瓜子鱲",
    "latin": "Girella leonina",
    "min": 0.15,
    "max": 2,
    "price": 54,
    "requiredBait": "dough",
    "rod": 0,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "黑毛、小鱗黑魢",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體灰黑而側扁，尾鰭分叉，鰓蓋後緣有深色邊。和瓜子鱲外形接近，辨認時可留意較長的尾部。",
    "habitat": "近岸岩礁與礁石周圍的水域，幼魚也會伴隨漂流海藻活動。",
    "diet": "攝食海藻及小型無脊椎動物。",
    "distribution": "西太平洋有分布，濟州島潮池調查亦有紀錄。",
    "food": "可作食用魚。",
    "hint": "灰黑色的礁區魚，外形和另一種瓜子鱲很接近。",
    "source": "https://fishdb.sinica.edu.tw/taxon/381910-fishdb",
    "localNames": [
      [
        "韓語",
        "긴꼬리벵에돔"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "barredknifejaw",
    "name": "條石鯛",
    "latin": "Oplegnathus fasciatus",
    "min": 0.25,
    "max": 3,
    "price": 63,
    "requiredBait": "shrimp",
    "rod": 2,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "海膽鯛、黑嘴",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體側扁，體側有數條寬而深色的直帶，上下頜的牙齒癒合成喙狀；大型雄魚的條帶會逐漸變淡，嘴部顏色加深。",
    "habitat": "沿岸岩礁，幼魚常伴隨漂流海藻。",
    "diet": "主要攝食底棲無脊椎動物，幼魚也吃浮游動物。",
    "distribution": "日本、韓國與臺灣等太平洋海域有分布，濟州島有採集紀錄。",
    "food": "肉質可供食用。",
    "hint": "身側有寬直帶，嘴形像短短的鳥喙。",
    "source": "https://fishdb.sinica.edu.tw/eng/species.php?science=Oplegnathus+fasciatus",
    "localNames": [
      [
        "韓語",
        "돌돔"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "spottedknifejaw",
    "name": "斑石鯛",
    "latin": "Oplegnathus punctatus",
    "min": 0.3,
    "max": 3.5,
    "price": 63,
    "requiredBait": "shrimp",
    "rod": 2,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "",
    "kind": "海水魚種",
    "water": "sea",
    "form": "體側散布深色斑點，牙齒癒合成喙狀。大型個體的斑點會逐漸不明顯，嘴部周圍轉為淡色。",
    "habitat": "沿岸岩礁，幼魚可伴隨漂流海藻活動。",
    "diet": "攝食海膽、貝類等具有硬殼的底棲動物。",
    "distribution": "西太平洋有分布，韓國南部與濟州島亦有紀錄。",
    "food": "可作食用魚。",
    "hint": "身上散布深色斑點，有能咬碎硬殼的喙狀牙齒。",
    "source": "https://fishdb.sinica.edu.tw/chi/species.php?gen=Oplegnathus&spe=punctatus",
    "localNames": [
      [
        "韓語",
        "강담돔"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "pearlspotchromis",
    "name": "尾斑光鰓雀鯛",
    "latin": "Chromis notata",
    "min": 0.02,
    "max": 0.08,
    "price": 39,
    "requiredBait": "shrimp",
    "rod": 0,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "厚殼仔",
    "kind": "海水魚種",
    "water": "sea",
    "form": "體形小而側扁，體色灰褐至暗色，胸鰭基部有明顯黑斑，尾鰭分叉。",
    "habitat": "淺海的岩礁與珊瑚礁附近。",
    "diet": "以浮游動物為主。",
    "distribution": "西北太平洋有分布，韓國濟州、日本與臺灣均有紀錄。",
    "food": "濟州稱為 자리돔，會作為水拌生魚片與烤魚的材料。",
    "hint": "活動在礁石附近的小型魚，胸鰭基部有一塊黑斑。",
    "source": "https://www.mbris.kr/pub/marine/tsearch/tsearchDetail.do?spcTxnId=270000003808",
    "localNames": [
      [
        "韓語",
        "자리돔"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "threadsailfilefish",
    "name": "絲背冠鱗單棘魨",
    "latin": "Stephanolepis cirrhifer",
    "min": 0.06,
    "max": 0.45,
    "price": 51,
    "requiredBait": "shrimp",
    "rod": 0,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "曳絲單棘魨、絲背細鱗魨",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體高而側扁，接近菱形，嘴小而前突，背上有一根明顯硬棘；雄魚背鰭的一根鰭條會延長成絲。",
    "habitat": "近岸礁區與砂泥底水域。",
    "diet": "攝食小型甲殼類、貝類等底棲動物。",
    "distribution": "西太平洋有分布，濟州島潮池與近岸觀察均有紀錄。",
    "food": "可作食用魚，適合煮湯等料理。",
    "hint": "身體像一片菱形薄板，背上立著一根硬棘。",
    "source": "https://fishdb.sinica.edu.tw/chi/species.php?gen=Stephanolepis&spe=cirrhifer",
    "localNames": [
      [
        "韓語",
        "쥐치"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "japanesejackmackerel",
    "name": "日本竹筴魚",
    "latin": "Trachurus japonicus",
    "min": 0.08,
    "max": 0.65,
    "price": 45,
    "requiredBait": "meat",
    "rod": 0,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "真鰺、竹莢魚",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體細長，背部藍綠，腹部銀白，鰓蓋後上方有黑斑，側線有明顯的硬稜鱗。",
    "habitat": "近海與沿岸水域，常成群游動。",
    "diet": "攝食小型甲殼類及小魚。",
    "distribution": "西北太平洋有分布，濟州近岸觀察有紀錄。",
    "food": "常見食用魚，可煎、烤或油炸。",
    "hint": "銀亮的群游魚，身側有一列摸起來較硬的鱗片。",
    "source": "https://fishdb.sinica.edu.tw/taxon/381555-fishdb",
    "localNames": [
      [
        "韓語",
        "전갱이"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "oliveflounder",
    "name": "牙鮃",
    "latin": "Paralichthys olivaceus",
    "min": 0.3,
    "max": 3.5,
    "price": 54,
    "requiredBait": "meat",
    "rod": 2,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體扁平，兩眼位於左側，有眼側呈褐色並散布斑點，無眼側顏色較淡，嘴大而有齒。",
    "habitat": "沿岸砂泥底，會伏在海床上。",
    "diet": "捕食小魚與甲殼類。",
    "distribution": "西北太平洋有分布，濟州近岸觀察有紀錄。",
    "food": "可作食用魚。",
    "hint": "伏在砂底的扁魚，兩隻眼睛長在身體同一側。",
    "source": "https://fishdb.sinica.edu.tw/chi/species.php?id=382745",
    "localNames": [
      [
        "韓語",
        "넙치"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "blackscraper",
    "name": "短角單棘魨",
    "latin": "Thamnaconus modestus",
    "min": 0.08,
    "max": 0.65,
    "price": 48,
    "requiredBait": "shrimp",
    "rod": 0,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "馬面魨、馬面單棘魨",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體長橢圓而側扁，吻部前突，口小，背上有明顯硬棘，體色淡青灰並有褐色斑塊。",
    "habitat": "近岸礁區與砂泥底的中底層水域。",
    "diet": "攝食底棲動物及藻類。",
    "distribution": "西北太平洋有分布，濟州近岸觀察及相關研究有紀錄。",
    "food": "是刺較少的食用魚。",
    "hint": "吻部較長的小嘴魚，灰色身體上帶著不規則斑塊。",
    "source": "https://fishdb.sinica.edu.tw/taxon/383002-fishdb",
    "localNames": [
      [
        "韓語",
        "말쥐치"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "johndory",
    "name": "日本的鯛",
    "latin": "Zeus faber",
    "min": 0.25,
    "max": 3.2,
    "price": 57,
    "requiredBait": "meat",
    "rod": 2,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "海魴、鏡鯧",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體高而側扁，銀灰色體側有一個帶淡色邊的大黑斑，背鰭前段的棘細長，嘴能向前伸出。",
    "habitat": "近海砂泥底與海床附近。",
    "diet": "捕食魚類及甲殼類。",
    "distribution": "多處海域有分布，濟州近岸水下觀察亦有紀錄。",
    "food": "可作食用魚。",
    "hint": "身側像印了一個深色圓點，背鰭伸出幾根細長的棘。",
    "source": "https://fishdb.sinica.edu.tw/chi/species.php?gen=Zeus&spe=faber",
    "localNames": [
      [
        "韓語",
        "달고기"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "japaneseanchovy",
    "name": "日本鯷",
    "latin": "Engraulis japonicus",
    "min": 0.01,
    "max": 0.03,
    "price": 30,
    "requiredBait": "shrimp",
    "rod": 0,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "苦蚵仔、片口",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體細長而稍側扁，背部暗青，腹部銀白，嘴大，上頜向後延伸。",
    "habitat": "近海表層，常成群活動。",
    "diet": "主要攝食浮游動物及小型甲殼類。",
    "distribution": "西北太平洋有分布，濟州潮池調查亦有紀錄。",
    "food": "可供鮮食、乾製、製作魚醬或熬湯。",
    "hint": "小型的銀色群游魚，張開嘴時口裂比外觀看來更大。",
    "source": "https://fishdb.sinica.edu.tw/taxon/380976-fishdb",
    "localNames": [
      [
        "韓語",
        "멸치"
      ]
    ],
    "cookingNote": ""
  },
  {
    "id": "japanesehalfbeak",
    "name": "日本下鱵魚",
    "latin": "Hyporhamphus sajori",
    "min": 0.03,
    "max": 0.25,
    "price": 39,
    "requiredBait": "dough",
    "rod": 0,
    "bounty": 0,
    "cookable": true,
    "edible": true,
    "other": "",
    "kind": "海水魚種",
    "water": "sea",
    "form": "身體細長，腹部銀白，下頜向前延長，上頜較短，尾鰭分叉。",
    "habitat": "沿岸表層水域。",
    "diet": "攝食浮游動物及藻類；遊戲以麵團作指定魚餌。",
    "distribution": "西北太平洋有分布，濟州潮池調查有採集紀錄。",
    "food": "可作食用魚。",
    "hint": "游在水面附近，下頜像一根細長的小針。",
    "source": "https://www.pref.kyoto.jp/kaiyo2/sayori.html",
    "localNames": [
      [
        "韓語",
        "학공치"
      ]
    ],
    "cookingNote": ""
  }
];
fish.push(...fish23);species.push(...fish23);
regions.push({
  "id": "jeju",
  "name": "濟州沿岸",
  "lat": 33.23,
  "lon": 126.57,
  "license": {
    "tier": 3,
    "cost": 3000,
    "atlas": 50
  },
  "pool": {
    "girella": 4,
    "smallscalegirella": 4,
    "barredknifejaw": 3,
    "spottedknifejaw": 2,
    "pearlspotchromis": 8,
    "threadsailfilefish": 6,
    "rabbitfish": 4,
    "stripey": 10,
    "terapon": 5,
    "chubmackerel": 4,
    "scorpionfish": 4,
    "redseabream": 2,
    "japanesejackmackerel": 5,
    "oliveflounder": 3,
    "blackscraper": 4,
    "johndory": 2,
    "japaneseanchovy": 7,
    "japanesehalfbeak": 5,
    "silversprat": 4,
    "mullet": 3,
    "greenling": 3,
    "oyena": 3,
    "slenderpinjalo": 3,
    "frillfingoby": 2
  },
  "animals": {},
  "weeds": {
    "hijiki": 60,
    "agarweed": 40
  },
  "area": "韓國・濟州",
  "water": "岩岸・海水",
  "desc": "濟州島的岩岸有許多退潮後留下的潮池，近岸礁石間也長著海藻。瓜子鱲與石鯛出沒於礁區，小型的尾斑光鰓雀鯛則活動在岩礁附近。",
  "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5674173/"
});
regions.find(r=>r.id==='jeju').basePool={...regions.find(r=>r.id==='jeju').pool};
const korean23={"瓜子鱲":"벵에돔","褐臭肚魚":"독가시치","柴魚":"범돔","花身雞魚":"살벤자리","白腹鯖":"고등어","石狗公":"쏨뱅이","嘉鱲":"참돔","日本銀帶鯡":"샛줄멸","烏魚":"숭어","大瀧六線魚":"쥐노래미","奧奈鑽嘴魚":"게레치","南方擬金眼鯛":"남방주걱치","深鰕虎":"무늬망둑"};
for(const f of fish)if(korean23[f.name])f.localNames=[...(f.localNames||[]).filter(([lang])=>lang!=='韓語'),['韓語',korean23[f.name]]];
world.weatherOdds.jeju=[40,35,25];world.flavor.jeju={
  "phase": {
    "dawn": [
      "天色漸亮，近岸礁石間的水面透出一點光。"
    ],
    "day": [
      "日光照進淺水，海藻的影子隨著水波晃動。"
    ],
    "dusk": [
      "礁石背向夕陽的一面暗了下來，浪邊仍有細碎的反光。"
    ],
    "night": [
      "岸邊只剩浪聲，浮標在暗色的水面上輕輕起伏。"
    ]
  },
  "weather": {
    "sunny": [
      "陽光落在黑色礁石上，石縫間還積著海水。"
    ],
    "cloudy": [
      "雲影遮住海面，近岸的水色深了一些。"
    ],
    "rain": [
      "雨水打在礁石與水面上，細小的波紋連成一片。"
    ]
  },
  "tide": {
    "rising": [
      "海水慢慢漫過較低的礁石，浪花越來越靠近岸邊。"
    ],
    "falling": [
      "水位退下後，礁石間留下幾片和海面隔開的潮池。"
    ]
  },
  "facts": [
    "濟州島的潮池魚類調查記錄過76種魚，包含溫帶、亞熱帶與熱帶種類。",
    "濟州東側牛島的海藻研究，記錄了羊栖菜與石花菜等種類。",
    "濟州稱羊栖菜為톨，地方食譜收錄了涼拌羊栖菜與羊栖菜飯。"
  ]
};
cuisines.push(['korea','韓國']);
const recipes23=[
  {
    "id": "jeju-mulhoe",
    "name": "濟州水拌生魚片",
    "orig": "자리물회",
    "fish": "pearlspotchromis",
    "fishes": [
      "pearlspotchromis"
    ],
    "method": "raw",
    "tier": "home",
    "effect": "lure",
    "amount": 2,
    "casts": 60,
    "cost": 45,
    "preparation": "魚切薄片，配蔬菜與豆醬冷湯",
    "about": "將尾斑光鰓雀鯛切成薄片，配上黃瓜等蔬菜，加入以豆醬調味的冷湯。濟州的 자리물회 常連細骨一起切，和其他地方以辣醬為主的水拌生魚片風味不同。",
    "cuisine": "korea",
    "origin": "韓國・濟州"
  },
  {
    "id": "jeju-grilled-mackerel",
    "name": "濟州烤鯖魚",
    "orig": "고등어구이",
    "fish": "chubmackerel",
    "fishes": [
      "chubmackerel"
    ],
    "method": "fry",
    "tier": "home",
    "effect": "double",
    "amount": 0.08,
    "casts": 40,
    "cost": 30,
    "preparation": "鯖魚烤熟",
    "about": "將鯖魚烤至表皮焦香，是濟州鄉土食譜收錄的魚料理。魚皮帶油香，內裡仍保留鯖魚較厚實的肉質。",
    "cuisine": "korea",
    "origin": "韓國・濟州"
  },
  {
    "id": "jeju-hijiki",
    "name": "涼拌羊栖菜",
    "orig": "톳무침／톨무침",
    "fish": null,
    "fishes": [],
    "plants": [
      "hijiki"
    ],
    "method": "raw",
    "tier": "home",
    "effect": "bait",
    "amount": 0.25,
    "casts": 40,
    "cost": 12,
    "preparation": "泡發的羊栖菜與洋蔥、醬料拌勻",
    "about": "濟州稱羊栖菜為「톨」。泡發後瀝乾，和洋蔥、豆醬、少量辣椒醬、蒜與芝麻拌勻，再加醋調味，是當地的海藻小菜。",
    "cuisine": "korea",
    "origin": "韓國・濟州"
  }
];
for(const r of recipes23){r.desc=mealDesc(r);recipes.push(r)}
for(const r of recipes.filter(r=>r.cuisine==='basic')){const extra=fish23.filter(f=>f.cookable&&(r.id!=='deepfry'||f.max<=.5)).map(f=>f.id);r.fishes.push(...extra);if(Array.isArray(r.fish))r.fish.push(...extra)}
{const r=recipes.find(r=>r.id==='deepfry');r.fishes=[...fish.filter(f=>f.cookable&&f.max<=.5).map(f=>f.id),...friedAnimals];r.fish=[...r.fishes]}
const dishes23=[
  {
    "slug": "bingtteok",
    "name": "蕎麥蘿蔔捲",
    "orig": "빙떡",
    "method": "fry",
    "tier": "basic",
    "effect": "speed",
    "amount": 0.05,
    "casts": 40,
    "price": 45,
    "preparation": "蕎麥薄餅包入蘿蔔絲",
    "about": "把蕎麥麵糊攤成薄餅，再包入蘿蔔絲捲起來，是濟州的傳統小吃。餅皮帶著蕎麥香，內餡以蘿蔔本身的清甜為主。",
    "art": "jeju-bingtteok",
    "id": "dine-jeju-bingtteok",
    "region": "jeju"
  },
  {
    "slug": "mackerel",
    "name": "濟州烤鯖魚",
    "orig": "고등어구이",
    "method": "fry",
    "tier": "home",
    "effect": "double",
    "amount": 0.1,
    "casts": 60,
    "price": 135,
    "preparation": "鯖魚烤熟",
    "about": "將鯖魚烤至表皮焦香，是濟州鄉土食譜收錄的魚料理。魚皮帶油香，內裡仍保留鯖魚較厚實的肉質。",
    "art": "jeju-grilled-mackerel",
    "id": "dine-jeju-mackerel",
    "region": "jeju"
  },
  {
    "slug": "mulhoe",
    "name": "濟州水拌生魚片",
    "orig": "자리물회",
    "method": "raw",
    "tier": "classic",
    "effect": "lure",
    "amount": 2.5,
    "casts": 80,
    "price": 270,
    "preparation": "魚切薄片，配蔬菜與豆醬冷湯",
    "about": "將尾斑光鰓雀鯛切成薄片，配上黃瓜等蔬菜，加入以豆醬調味的冷湯。濟州的 자리물회 常連細骨一起切，和其他地方以辣醬為主的水拌生魚片風味不同。",
    "art": "jeju-mulhoe",
    "id": "dine-jeju-mulhoe",
    "region": "jeju"
  }
];
for(const d of dishes23){d.desc=mealDesc(d);dishes.push(d)}restaurants.jeju={name:'濟州海邊食堂',dishes:dishes23};
const hijiki23=plants.find(p=>p.id==='hijiki');hijiki23.localNames=[['韓語','톳／톨']];
// 0.24 Taihu: runtime prices below already include the existing x3 price scale.
const ecoTaihu='https://www.ecologica.cn/html/2021/2/stxb202004130872.htm',taihuSurvey='https://www.ere.ac.cn/cn/article/id/12314';
const freshFish=(o)=>({bounty:0,edible:true,cookable:true,water:'fresh',localNames:[],cookingNote:'',...o});
const fish24=[
 freshFish({id:'coilia',name:'刀鱭',latin:'Coilia nasus',min:.01,max:.06,price:42,requiredBait:'shrimp',rod:0,other:'湖鱭、刀魚',kind:'湖區紀錄魚種',form:'身體側扁而細長，向尾部逐漸變尖，像一把小刀；臀鰭很長，一路延伸到尾鰭。胸鰭上方的幾根鰭條延長成細絲。',habitat:'洄游型的刀鱭春季從海裡溯長江產卵；太湖的族群則終生留在湖中，過去稱為湖鱭。',diet:'以浮游動物、小蝦與小魚為食。',distribution:'中國東部、朝鮮半島及日本有明海。2018～2020 年的太湖調查中，是數量最多的魚。',food:'可作食用魚。',hint:'細長如刀的小魚，臀鰭一路延伸到尾巴。',source:taihuSurvey}),
 freshFish({id:'largeicefish',name:'大銀魚',latin:'Protosalanx chinensis',min:.005,max:.03,price:48,requiredBait:'shrimp',rod:0,other:'銀魚',kind:'湖區紀錄魚種',form:'身體細長、無鱗而半透明，頭部扁平，是銀魚科中體型最大的一種。',habitat:'河口與大型湖泊的中上層水域。',diet:'幼魚吃浮游動物，長大後捕食小魚與小蝦。',distribution:'中國東部沿海至朝鮮半島。是太湖產量最高的銀魚之一，也曾被移殖到各地湖泊與水庫。',food:'太湖三白中的銀魚，可炒蛋、煮羹或曬成銀魚乾。',hint:'透明細長的小魚，在同類中算是大個子。',source:'https://html.rhhz.net/shhydxxb/20170301976.htm'}),
 freshFish({id:'shortsnouticefish',name:'陳氏短吻銀魚',latin:'Neosalanx tangkahkeii',min:.001,max:.004,price:39,requiredBait:'worm',rod:0,other:'太湖新銀魚、短吻銀魚',kind:'湖區紀錄魚種',form:'體長多在 5～8 公分，身體半透明，吻部短而圓鈍。',habitat:'湖泊與河川的中上層。',diet:'以浮游動物為食。',distribution:'長江中下游的湖泊。2010 年代的研究中，是太湖銀魚裡比例最高的一種。',food:'太湖銀魚的主要種類之一。',hint:'只有手指長的透明小魚，吻端短短圓圓。',source:'https://www.cjae.net/CN/10.13287/j.1001-9332.202309.030'}),
 freshFish({id:'yellowcatfish',name:'黃顙魚',latin:'Tachysurus fulvidraco',min:.04,max:.4,price:48,requiredBait:'worm',rod:0,other:'黃骨魚、昂刺魚',kind:'湖區紀錄魚種',form:'身體無鱗，黃褐色帶暗色斑塊，口邊有四對鬚；背鰭與胸鰭各有一根硬棘。被抓起時會發出咕咕聲。',habitat:'湖泊與河川的底層，多在夜間活動。',diet:'偏肉食的雜食，吃水生昆蟲、小蝦、螺與小魚。',distribution:'東亞廣布。2018～2020 年的太湖調查有紀錄。',food:'常見食用魚，多煮湯或紅燒。',hint:'黃褐色的無鱗魚，鰭上的硬棘會刺手。',source:taihuSurvey}),
 freshFish({id:'intermediushalfbeak',name:'間下鱵',latin:'Hyporhamphus intermedius',min:.01,max:.05,price:36,requiredBait:'worm',rod:0,other:'針魚',kind:'湖區紀錄魚種',form:'身體細長，下頜延長成細針狀，上頜很短。',habitat:'湖泊、河川與河口的表層。',diet:'攝食浮游動物與落入水中的昆蟲。',distribution:'中國東部至朝鮮半島。2009～2010 年的太湖拖網調查中，是優勢的小型魚之一。',food:'可食用的小型魚。',hint:'下巴長成一根細針，貼著水面游動。',source:'https://www.cje.net.cn/CN/Y2011/V30/I12/2836'}),
 freshFish({id:'blackfingudgeon',name:'黑鰭鰁',latin:'Sarcocheilichthys nigripinnis',min:.01,max:.06,price:36,requiredBait:'worm',rod:0,other:'花腰',kind:'湖區紀錄魚種',cookable:false,cookingNote:'體型小，多作雜魚利用，本作不作料理材料。',form:'體延長、略側扁，口小而下位；體側有不規則的黑色斑塊，各鰭色暗。繁殖期雄魚的頰部與鰭轉為紅橙色。',habitat:'水草茂盛的湖泊與河川緩流底層。',diet:'攝食底棲小型無脊椎動物與藻類。',distribution:'東亞。2018～2020 年的太湖調查有紀錄。',food:'體型小，多作雜魚利用。',hint:'身上散著黑斑，繁殖期的雄魚臉頰轉紅。',source:taihuSurvey}),
 freshFish({id:'mandarinfish',name:'鱖魚',latin:'Siniperca chuatsi',min:.2,max:2.5,price:57,requiredBait:'meat',rod:2,other:'桂魚、季花魚',kind:'湖區紀錄魚種',form:'體高而側扁，口大、下頜略突出，體色黃綠，全身散布不規則的黑色斑塊；背鰭前段是一排尖銳的硬棘。',habitat:'湖泊與河川中水草茂密、水流平緩的地方，白天藏身草叢或石縫，入夜後伏擊獵物。',diet:'只吃活的魚蝦。',distribution:'東亞，從黑龍江流域到珠江流域。2019 年的東太湖調查有紀錄。',food:'肉質細嫩、刺少的名貴食用魚，唐代張志和有「桃花流水鱖魚肥」之句。',hint:'全身布滿黑斑的伏擊者，背上的硬棘很尖。',source:ecoTaihu}),
 freshFish({id:'toxabramis',name:'似鱎',latin:'Toxabramis swinhonis',min:.005,max:.03,price:30,requiredBait:'dough',rod:0,other:'',kind:'湖區紀錄魚種',cookable:false,cookingNote:'體型小，多作雜魚利用，本作不作料理材料。',form:'小型魚，身體側扁而薄，體色銀白；腹部從胸鰭基部到肛門有一道銳利的腹稜。',habitat:'湖泊與河川緩流的中上層，常成群活動。',diet:'以浮游動物與藻類為主。',distribution:'中國東部的長江、黃河等水系。2020 年太湖禁捕當年的調查中，相對重要性僅次於刀鱭。',food:'體型小，多作雜魚利用。',hint:'銀白色的小薄魚，腹部有一道刀口似的稜。',source:'https://www.cjae.net/CN/10.13287/j.1001-9332.202309.030'}),
 freshFish({id:'darksleeper',name:'河川沙塘鱧',latin:'Odontobutis potamophila',min:.02,max:.2,price:51,requiredBait:'worm',rod:0,other:'塘鱧魚、菜花塘鱧、土布魚',kind:'湖區紀錄魚種',form:'頭大而寬扁，口大，身體粗短，黃褐色帶深色斑塊。',habitat:'湖泊、河川與溝渠的底層，常躲在石縫與水草間。',diet:'伏擊型的小型肉食魚，主要吃小魚與小蝦，也吃螺貝與昆蟲。',distribution:'長江中下游及淮河、錢塘江等水系。2019 年的東太湖調查有紀錄。',food:'肉質細嫩，蘇州人把油菜花開時的「菜花塘鱧」視為春天第一道時令魚。',hint:'頭大身短，伏在水底一動也不動。',source:ecoTaihu}),
 freshFish({id:'whitebream',name:'鯿',latin:'Parabramis pekinensis',min:.15,max:1.5,price:45,requiredBait:'dough',rod:0,other:'長春鯿、草鯿',kind:'湖區紀錄魚種',form:'身體高而側扁，呈菱形，頭小；腹稜從胸鰭基部一直延伸到肛門，武昌魚的腹稜則只在腹鰭之後。',habitat:'江河與湖泊的中下層。',diet:'以水草為主的雜食。',distribution:'中國東部至朝鮮半島與俄羅斯遠東。2019 年的東太湖調查有紀錄。',food:'常見食用魚。',hint:'菱形的高身魚，腹部整條都有稜。',source:ecoTaihu}),
 freshFish({id:'mongolianculter',name:'蒙古鮊',latin:'Chanodichthys mongolicus',min:.2,max:1.5,price:51,requiredBait:'meat',rod:0,other:'紅尾鮊、紅梢子',kind:'湖區紀錄魚種',form:'身體延長而側扁，口斜向上，但不像翹嘴鮊那樣上翹；尾鰭下葉帶鮮紅色。',habitat:'湖泊與河川的中上層。',diet:'捕食小魚與蝦。',distribution:'東亞，從黑龍江流域到長江流域。2019 年的東太湖調查有紀錄。',food:'可作食用魚。',hint:'尾巴下緣帶一抹紅色的掠食魚。',source:ecoTaihu}),
 freshFish({id:'northernsnakehead',name:'烏鱧',latin:'Channa argus',min:.5,max:3.5,price:51,requiredBait:'meat',rod:2,other:'黑魚',kind:'湖區紀錄魚種',form:'身體長而近圓筒形，頭扁似蛇，體側有兩列黑色大斑塊。',habitat:'水草茂密的湖泊、池塘與溝渠，能浮上水面直接呼吸空氣。',diet:'伏擊魚、蝦與蛙類的兇猛肉食魚。',distribution:'原產東亞；已被帶到美國等地成為入侵種。2019 年的東太湖調查有紀錄。',food:'常見食用魚，常切片炒或煮湯。',hint:'頭像蛇、身上兩列黑斑，會浮上水面吸氣。',source:ecoTaihu})
];
const animals24=[
 {id:'whiteshrimp',name:'秀麗白蝦',other:'白蝦',latin:'Palaemon modestus',category:'crustacean',kind:'淡水蝦類',water:'fresh',requiredBait:'worm',min:.001,max:.004,price:42,form:'身體透明，散布細小的淡色斑點，煮熟後仍偏白；額角上緣隆起如雞冠。',habitat:'湖泊與河川，偏好有沉水植物的水域。',diet:'攝食有機碎屑與浮游生物。',distribution:'中國東部湖泊至朝鮮半島。太湖貢湖的調查中，水草區的數量最多。',food:'太湖三白中的白蝦，殼薄肉嫩。',hint:'透明的小蝦，煮熟了也不太變紅。',source:'https://en.wuxi.gov.cn/2025-10/14/c_1131705.htm',bounty:0,rod:0,edible:true,cookable:true,localNames:[],cookingNote:''},
 {id:'mittencrab',name:'中華絨螯蟹',other:'大閘蟹、河蟹、毛蟹',latin:'Eriocheir sinensis',category:'crustacean',kind:'淡水蟹類',water:'fresh',requiredBait:'meat',min:.06,max:.25,price:48,form:'背甲方圓，螯足上密生絨毛，像戴著一雙毛手套。',habitat:'在湖泊與河川中長大，秋冬降河到河口的半鹹水繁殖。',diet:'雜食，吃水草、螺貝與動物屍體。',distribution:'原產中國東部至朝鮮半島，已被帶到歐洲與北美，成為入侵種。東太湖的網圍養殖在 2019 年底全面拆除。',food:'即著名的大閘蟹。',hint:'螯足上長滿細毛，像戴著毛手套的蟹。',source:'https://en.wuxi.gov.cn/2021-10/13/c_667835.htm',bounty:0,rod:0,edible:true,cookable:true,localNames:[],cookingNote:''}
];
const plants24=[
 {id:'malaypondweed',name:'馬來眼子菜',other:'',latin:'Potamogeton wrightii',water:'fresh',type:'沉水植物',form:'葉片細長如帶，邊緣呈波浪狀並有細齒，葉柄長；花穗伸出水面。',habitat:'湖泊與河川緩流的沉水帶。',distribution:'東亞至東南亞。2014 年的太湖調查中，是分布面積最大的水生植物，從東部向西擴展。',source:'https://jlakes.alljournals.cn/html/2017/2/20170211.html'},
 {id:'tapegrass',name:'苦草',other:'',latin:'Vallisneria natans',water:'fresh',type:'沉水植物',form:'長帶狀的葉片從基部叢生，可隨水深長到一兩公尺；雌花由螺旋狀的長柄送上水面。',habitat:'湖泊與河川的沉水帶，需要清澈的水。',distribution:'東亞至東南亞。過去是太湖沉水植被的優勢種，2014 年只剩東山與西山之間的水域還有群落。',source:'https://jlakes.alljournals.cn/html/2017/2/20170211.html'},
 {id:'foxnut',name:'芡實',other:'雞頭米、雞頭蓮',latin:'Euryale ferox',water:'fresh',type:'浮葉植物',form:'圓形的大葉平貼水面，葉面皺褶，葉柄與葉脈都長著尖刺；果實外形像雞頭，裡面的種仁就是雞頭米。',habitat:'湖泊與池塘的淺水區。',distribution:'東亞至南亞。2014 年的太湖調查有紀錄；蘇州一帶種植的芡實是當地「水八仙」之一。',source:'https://jlakes.alljournals.cn/html/2017/2/20170211.html'},
 {id:'wildwatercaltrop',name:'細果野菱',other:'',latin:'Trapa maximowiczii',water:'fresh',type:'浮葉植物',form:'菱形的葉片排成蓮座狀浮在水面，葉柄膨大成氣囊；果實很小，帶有尖角。',habitat:'湖泊與池塘的淺水區。',distribution:'東亞。2014 年的太湖調查有紀錄，菱類在東部湖區成片生長。',source:'https://jlakes.alljournals.cn/html/2017/2/20170211.html'}
];
fish.push(...fish24);animals.push(...animals24);species.push(...fish24,...animals24);plants.push(...plants24);
const taihuNote={carp:'太湖亦有紀錄。',crucian:'太湖亦有紀錄。',silver:'太湖亦有紀錄。',bighead:'太湖亦有紀錄。',culter:'太湖亦有紀錄，太湖三白中的白魚就是翹嘴鮊。',qili:'太湖亦有紀錄。',topmouth:'太湖亦有紀錄。',grass:'太湖亦有紀錄。',redfinculter:'太湖亦有紀錄。',bream:'太湖亦有紀錄。',rosybitterling:'太湖亦有紀錄。',loach:'太湖亦有紀錄。',giurinus:'太湖亦有紀錄。',nipponense:'太湖亦有紀錄。',yellowfloatingheart:'太湖亦有紀錄，2014 年是分布第二廣的水生植物。',maackpondweed:'太湖亦有紀錄。',hydrilla:'太湖亦有紀錄。',waterweed:'1986 年引入太湖，東太湖已成優勢種之一。'};
for(const s of [...species,...plants])if(taihuNote[s.id])s.distribution=s.distribution.replace(/\s*$/,'')+taihuNote[s.id];
{const c=fish.find(f=>f.id==='culter');c.other+='、太湖白魚'}
regions.push({id:'taihu',name:'太湖',area:'中國・江蘇／浙江',lat:31.2,lon:120.25,water:'淡水湖泊',license:{tier:3,cost:3000,atlas:50},
 desc:'太湖橫跨江蘇與浙江，是長江下游的大型淺水湖，湖面遼闊而平均水深不到兩公尺。湖中的白魚、銀魚與白蝦合稱「太湖三白」，東部湖灣長著成片的荇菜與菱。',
 pool:{coilia:15,largeicefish:5,shortsnouticefish:7,yellowcatfish:6,intermediushalfbeak:4,blackfingudgeon:3,mandarinfish:2,toxabramis:7,darksleeper:3,whitebream:3,mongolianculter:2,northernsnakehead:2,crucian:8,qili:7,carp:4,culter:3,topmouth:3,silver:2,bream:2,rosybitterling:2,loach:3,giurinus:2,grass:2,redfinculter:2,bighead:1},
 animals:{whiteshrimp:9,nipponense:6,mittencrab:2},
 weeds:{yellowfloatingheart:30,malaypondweed:26,tapegrass:8,maackpondweed:8,hydrilla:8,waterweed:8,foxnut:6,wildwatercaltrop:6},
 source:taihuSurvey});
regions.find(r=>r.id==='taihu').basePool={...regions.find(r=>r.id==='taihu').pool};
world.weatherOdds.taihu=[40,35,25];world.flavor.taihu={
 phase:{dawn:['湖上起了一層薄霧，遠處的島只剩淡淡的影子。','早起的水鳥貼著水面飛過，翅尖劃出一道細紋。'],day:['湖面寬得看不到對岸，幾艘船慢慢從水平線上經過。','風從湖心吹來，近岸的荇菜葉跟著輕輕翻動。'],dusk:['夕陽落到湖的西邊，水面一片橘紅。','湖中的山島只剩一道深色的剪影。'],night:['岸邊的燈一盞盞亮起，湖上只剩風吹過水面的聲音。','遠處的橋上亮著一串燈，倒影在水面拉得很長。']},
 weather:{sunny:['陽光照在近岸的荇菜葉上，水下的草叢看得一清二楚。','天空很藍，看得到湖中幾座山島的輪廓。'],cloudy:['雲層壓在湖上，水色變得灰濛濛的。','風大了些，湖面起了一層短短的浪。'],rain:['雨點落在寬闊的湖面，激起一片細密的水花。','雨裡的湖岸一片朦朧，只聽得到雨打荷葉的聲音。']},
 facts:['太湖水面約兩千三百多平方公里，平均水深不到兩公尺，是一座寬而淺的湖。','太湖的白魚、銀魚與白蝦合稱「太湖三白」。','2020 年 10 月起，太湖收回漁民的捕撈許可並退捕漁船，進入為期十年的禁捕。','1960 年代以來，太湖的水生植物種類明顯減少；2014 年的全湖調查記錄到 39 種維管植物。']};
const recipes24=[
 {id:'taihu-steamed-whitefish',name:'清蒸白魚',fish:'culter',fishes:['culter'],method:'steam',tier:'home',effect:'lure',amount:2,casts:60,cost:45,preparation:'整尾清蒸',about:'太湖白魚身形細長、鱗片銀亮，被稱為太湖的「銀刀」，隋唐時曾列為貢品。肉質細嫩而帶油脂，整尾清蒸最能吃出鮮味。'},
 {id:'taihu-silver-eggs',name:'銀魚炒蛋',fish:['largeicefish','shortsnouticefish'],fishes:['largeicefish','shortsnouticefish'],method:'fry',tier:'home',effect:'double',amount:.08,casts:40,cost:30,preparation:'拌蛋液快炒',about:'太湖銀魚通體透明，自古被視為珍饈，清代也曾進貢。銀魚和蛋液拌勻後下鍋炒熟，是太湖一帶的家常吃法。'},
 {id:'taihu-drunken-shrimp',name:'醉蝦',fish:'whiteshrimp',fishes:['whiteshrimp'],method:'raw',tier:'home',effect:'animal',amount:2,casts:40,cost:30,preparation:'活蝦浸黃酒',about:'太湖白蝦殼薄肉嫩，煮熟後仍保持白色。最有名的吃法是醉蝦：活蝦浸入黃酒與調料，上桌時還在跳動。'},
 {id:'taihu-steamed-crab',name:'清蒸大閘蟹',fish:'mittencrab',fishes:['mittencrab'],method:'steam',tier:'home',effect:'night',amount:.75,casts:60,cost:30,preparation:'隔水清蒸、蘸薑醋',about:'中華絨螯蟹的螯足長著絨毛，俗稱大閘蟹。秋天是吃蟹的季節，江南最常見的吃法是整隻隔水清蒸，蒸到蟹殼轉為橘紅，再蘸薑末與鎮江香醋。'},
 {id:'taihu-squirrel-fish',name:'松鼠鱖魚',fish:'mandarinfish',fishes:['mandarinfish'],method:'fry',tier:'classic',effect:'lure',amount:2.5,casts:80,cost:145,preparation:'剞花刀油炸、澆酸甜汁',about:'蘇州的代表菜。鱖魚去骨後在魚肉上切花刀，油炸後魚頭昂起、魚尾上翹，花刀翻開像松鼠蓬起的毛；上桌時澆上熱騰騰的酸甜汁，會發出吱吱聲。相傳乾隆南巡時在蘇州吃過這道菜，從此出名。'},
 {id:'taihu-tangli-egg',name:'塘鱧魚燉蛋',fish:'darksleeper',fishes:['darksleeper'],method:'steam',tier:'home',effect:'speed',amount:.08,casts:60,cost:45,preparation:'入蛋液上籠蒸',about:'蘇州人把塘鱧魚稱為「春天第一鮮」，油菜花開時最肥，叫做菜花塘鱧。最家常的吃法是燉蛋：魚處理乾淨後放進打勻的蛋液，加少許料酒、鹽與豬油，上籠蒸熟再撒蔥花。'},
 {id:'taihu-foxnut',name:'桂花雞頭米',fish:null,fishes:[],plants:['foxnut'],method:'soup',tier:'home',effect:'speed',amount:.06,casts:40,cost:15,preparation:'清水煮、加冰糖與桂花',about:'雞頭米是芡實的種仁，蘇州每年八月下旬到十月上市，剝殼全靠手工。清水煮開後放入雞頭米，加冰糖再煮一會兒，起鍋前拌入桂花糖。'}
].map(r=>({...r,cuisine:'china',origin:'中國・太湖'}));
for(const r of recipes24){r.desc=mealDesc(r);recipes.push(r)}
for(const r of recipes.filter(r=>r.cuisine==='basic')){const extra=fish24.filter(f=>f.cookable&&(r.id!=='deepfry'||f.max<=.5)).map(f=>f.id);r.fishes.push(...extra);if(Array.isArray(r.fish))r.fish.push(...extra)}
{const r=recipes.find(r=>r.id==='deepfry');r.fishes=[...fish.filter(f=>f.cookable&&f.max<=.5).map(f=>f.id),...friedAnimals];r.fish=[...r.fishes]}
const dishes24=[
 {slug:'chuandian',name:'太湖船點',method:'steam',tier:'basic',effect:'weed',amount:.5,casts:40,price:45,preparation:'米粉包餡捏形蒸熟',about:'過去在太湖遊船上供應的點心，用米粉包餡蒸熟，常捏成小動物或花果的形狀；2016 年列入江蘇省非物質文化遺產。',art:'taihu-chuandian'},
 {slug:'silvereggs',name:'銀魚炒蛋',method:'fry',tier:'home',effect:'double',amount:.1,casts:60,price:135,preparation:'拌蛋液快炒',about:'太湖銀魚通體透明，自古被視為珍饈，清代也曾進貢。銀魚和蛋液拌勻後下鍋炒熟，是太湖一帶的家常吃法。',art:'taihu-silver-eggs'},
 {slug:'drunkencrab',name:'太湖醉蟹',method:'pickle',tier:'home',effect:'animal',amount:2.5,casts:60,price:135,preparation:'生蟹浸黃酒與香料',about:'太湖一帶的醉蟹，把生蟹浸入陳年黃酒，加桂皮、茴香等香料醃製入味，不經烹煮直接上桌。',art:'taihu-drunken-crab'},
 {slug:'chuncai',name:'蓴菜銀魚羹',method:'soup',tier:'classic',effect:'lure',amount:2.5,casts:80,price:270,preparation:'銀魚與蓴菜入雞湯勾芡',about:'蓴菜葉片小而包著透明膠質，蘇州市面上的蓴菜多來自太湖東山。銀魚、蓴菜與火腿絲、香菇絲放入雞湯煮滾，勾芡成羹，最後淋入蛋白。',art:'taihu-chuncai'}
].map(d=>({...d,id:'dine-taihu-'+d.slug,region:'taihu'}));
for(const d of dishes24){d.desc=mealDesc(d);dishes.push(d)}restaurants.taihu={name:'湖鮮船菜館',dishes:dishes24};
// 0.25 Tokyo Bay, Ishikari Bay, Jeju animals and Taihu small fish. Runtime prices and final pool weights: no further x3 or size scaling.
const seaFish=(o)=>({bounty:0,edible:true,cookable:true,water:'sea',kind:'海水魚種',cookingNote:'',...o});
const fish25tokyo=[
 seaFish({id:'redstingray',name:'赤魟',latin:'Hemitrygon akajei',min:.3,max:3.5,price:45,requiredBait:'shrimp',rod:2,other:'赤土魟、紅魴、牛尾魴',form:'頭部與胸鰭連成寬大的菱形體盤，背面赤褐色，腹面較淺。後方拖著細長如鞭的尾巴，尾上有一根帶毒腺的硬刺。',habitat:'沿岸、河口與潟湖的沙泥底，貼近海底覓食。',diet:'吃小魚與甲殼類。',distribution:'西太平洋魚種，從日本南部到東南亞海域均有分布。東京都內灣 2011 年度成魚調查有紀錄。',food:'有食用紀錄，日本宮城、香川等地有煮付與味噌湯等吃法；尾刺帶毒腺，處理時須先去除。',hint:'寬大的褐色體盤貼著海底，細長尾巴上帶有硬刺。',source:'https://fishdb.sinica.edu.tw/taxon/383140-fishdb',localNames:[['日語','アカエイ']]}),
 seaFish({id:'linedcardinal',name:'細條銀口天竺鯛',latin:'Jaydia lineata',min:.01,max:.02,price:30,requiredBait:'worm',rod:0,other:'細紋銀口天竺鯛、細條天竺鯛',form:'頭大、眼睛也大，身體灰銀色，側面排列多道細窄的褐色橫帶。背鰭分成前後兩枚，尾鰭後緣較平。',habitat:'近岸到較深水域的沙泥底。雄魚會把卵含在口中照顧。',diet:'吃多毛類及小型底棲無脊椎動物。',distribution:'印度至西太平洋有分布。東京都內灣 2011 年度成魚調查有紀錄，2019 年 11 月的調查也採到這種魚。',food:'有作魚漿原料的利用紀錄；廣島縣福山一帶稱為「ネブト」，去頭後裹粉炸成小菜。',hint:'灰銀色的大眼小魚，身側排著許多細細的褐色橫帶。',source:'https://taieol.tw/pages/56541',localNames:[['日語','テンジクダイ']]}),
 seaFish({id:'triplespine',name:'雙棘三棘魨',latin:'Triacanthus biaculeatus',min:.03,max:.3,price:42,requiredBait:'shrimp',rod:0,other:'雙棘三刺魨、三腳釘、三角狄',form:'身體側扁，吻部尖短，尾柄細長。背上立著粗硬的長棘，腹部兩側也各有一根硬棘；背部較深，腹部銀白，部分魚鰭帶黃色。',habitat:'沿岸與河口附近的沙泥底。',diet:'攝食底棲無脊椎動物。',distribution:'印度至西太平洋有分布，日本南部亦有紀錄。東京都內灣 2011 年度稚魚調查在城南大橋採到這種魚。',food:'可食用，有以鮮魚上市的紀錄；屬於三棘魨科。',hint:'背上與腹側都有硬棘的銀色魚，尾柄細長，魚鰭帶黃。',source:'https://fishdb.sinica.edu.tw/eng/species.php?id=383050',localNames:[['日語','ギマ']]}),
 seaFish({id:'whitespottedconger',name:'繁星糯鰻',latin:'Conger myriaster',min:.08,max:1.5,price:48,requiredBait:'meat',rod:0,other:'星康吉鰻、糯米鰻、穴子鰻',form:'身體細長，背面褐色、腹面淺白，背鰭、尾鰭與臀鰭連成一圈。頭部與身體兩側排列著白色小點，像一列列細小的星星。',habitat:'沿岸與河口附近的沙泥底。白天藏在洞穴或海底隱蔽處，夜裡出來覓食。',diet:'吃蝦蟹、頭足類與小魚。',distribution:'西北太平洋魚種，日本沿岸、朝鮮半島與東海均有分布。是東京灣的代表性漁獲之一，當地也以夜釣捕獲。',food:'日本常用的「穴子」魚材，可作煮穴子、天婦羅與壽司。',hint:'細長的褐色海魚，頭部與身側排列著白色小點。',source:'https://fishdb.sinica.edu.tw/taxon/380723-fishdb',localNames:[['日語','マアナゴ']]})
];
const fish25ishikari=[
 seaFish({id:'pacificcod',name:'大頭鱈',latin:'Gadus macrocephalus',min:.3,max:3.5,price:48,requiredBait:'meat',rod:2,other:'太平洋鱈',form:'頭部大，嘴寬，上頜比下頜向前突出，下巴垂著一根明顯的鬚。背部灰褐，體側有不規則深色斑紋，背上分列三枚背鰭。',habitat:'冷水海域的底層魚，生活在大陸棚與較深的近海。冬季會移向產卵水域。',diet:'攝食魚類、蝦蟹、章魚及其他底棲動物。',distribution:'北太平洋有分布，日本以北海道周邊較常見，石狩市海水魚名錄列有紀錄。',food:'白肉魚，可煮鍋、鹽烤或加工保存，在北海道常作冬季湯鍋材料。',hint:'頭大嘴寬的褐斑魚，下巴垂著一根長鬚。',source:'https://www.pref.hokkaido.lg.jp/sr/gid/fis024.html',localNames:[['日語','マダラ']]}),
 seaFish({id:'alaskapollock',name:'黃線狹鱈',latin:'Gadus chalcogrammus',min:.15,max:2,price:42,requiredBait:'meat',rod:0,other:'阿拉斯加鱈',form:'身體較細長，背面橄欖褐色，體側銀灰並帶斑紋。眼睛和嘴都大，下頜突出，下巴的鬚很短或不明顯，與大頭鱈粗長的頦鬚不同。',habitat:'寒冷海域的近底層，也會上下移動覓食。冬春成群到產卵水域聚集。',diet:'攝食磷蝦等甲殼類、小魚與頭足類。',distribution:'北太平洋寒冷海域有分布，石狩灣有採樣與漁業研究紀錄。',food:'魚肉常作魚漿，魚卵是日本鱈子與明太子的常用原料；也有以整魚或魚塊煮湯的吃法。',hint:'眼大、下頜突出，身體細長的灰褐色海魚。',source:'https://www.pref.hokkaido.lg.jp/sr/gid/fis026.html',localNames:[['日語','スケトウダラ']]}),
 seaFish({id:'sailfinsandfish',name:'日本叉牙魚',latin:'Arctoscopus japonicus',min:.02,max:.12,price:39,requiredBait:'shrimp',rod:0,other:'',form:'身體細長而略側扁，嘴巴大而斜向上，兩枚背鰭相隔較遠，胸鰭寬大。背面有黃褐與深褐色的不規則斑紋，身上沒有鱗片。',habitat:'較深的沙泥底，會把身體部分埋進沙裡。繁殖時成群游到淺水藻場產卵。',diet:'攝食端足類、糠蝦與頭足類。',distribution:'日本海與北日本等海域有分布，石狩灣厚田沿岸有秋冬接岸的漁業紀錄。',food:'可鹽烤、煮付或曬成一夜干，北海道也有飯壽司加工。',hint:'嘴巴斜向上的黃褐色小魚，胸鰭寬大，兩枚背鰭分得很開。',source:'https://www.hro.or.jp/fisheries/h3mfcd0000000gsj/o7u1kr000000019q/o7u1kr000000d4fu/o7u1kr000000cc10.html',localNames:[['日語','ハタハタ']]})
];
// Edible stays null for the yellow dwarf goby: no reliable source records it as food, so it is kept out of every recipe.
const fish25taihu=[
 freshFish({id:'largerfinbitterling',name:'大鰭鱊',latin:'Acheilognathus macropterus',min:.01,max:.06,price:30,requiredBait:'dough',rod:0,other:'',kind:'湖區紀錄魚種',form:'身體側扁而薄，輪廓近卵圓形，背鰭與臀鰭較發達；繁殖期雄魚的體色與鰭部更顯眼。',habitat:'生活於緩流或靜水，常見於水草生長的水域。',diet:'雜食，以植物葉片、藻類等為食。',distribution:'中國東部淡水水域等地；東太湖實地調查有紀錄。',food:'有食用紀錄，也作觀賞利用。',hint:'扁薄的身體像一片葉，背鰭與臀鰭都較寬。',source:'https://dfz.jl.gov.cn/jltc/201712/t20171206_5217555.html'}),
 freshFish({id:'khankabitterling',name:'興凱鱊',latin:'Acheilognathus chankaensis',min:.01,max:.02,price:30,requiredBait:'dough',rod:0,other:'',kind:'湖區紀錄魚種',form:'身體側扁，頭小而眼較大，尾鰭淺分叉；繁殖期雄魚的體側帶藍色反光，腹鰭與臀鰭可見鮮明邊帶。',habitat:'棲息於江河、湖泊的靜水或緩流處，不作長距離游動。',diet:'主要攝取藻類及植物碎屑。',distribution:'俄羅斯與中國的東亞淡水水域；東太湖調查也有紀錄。',food:'體型小，可作食用魚，也常作觀賞利用；在原產地具漁業與水族館用途。',hint:'繁殖期體側會泛藍色反光，鰭邊帶著黑白色帶。',source:'https://dfz.jl.gov.cn/jltc/201712/t20171205_5217554.html'}),
 freshFish({id:'chinesebitterling',name:'中華鰟鮍',latin:'Rhodeus sinensis',min:.01,max:.02,price:30,requiredBait:'dough',rod:0,other:'',kind:'湖區紀錄魚種',form:'身體側扁，輪廓近橢圓，頭與口較小；側線不完全，背鰭約從身體中段開始。',habitat:'東太湖等淡水水域。',diet:'東太湖調查將其列入碎屑食性魚。',distribution:'中國淡水水系；東太湖實地調查有紀錄。',food:'以觀賞魚聞名，也有一定的食用價值；魚小刺多，多當作小雜魚處理。',hint:'身體扁圓，頭和口都很小，側線沒有一路延伸到尾部。',source:ecoTaihu}),
 freshFish({id:'rivulargudgeon',name:'棒花魚',latin:'Abbottina rivularis',min:.01,max:.03,price:33,requiredBait:'worm',rod:0,other:'',kind:'湖區紀錄魚種',form:'身體前段較粗，吻圓而口向下，嘴角有一對短鬚；體側有深色斑塊，背鰭與尾鰭帶細小黑斑。',habitat:'生活於河流、湖泊與溝塘的底層，常停在淺水沙泥底。',diet:'攝食小型無脊椎動物，也吃植物碎屑及藻類。',distribution:'中國多個淡水水系；東太湖調查有紀錄。',food:'有食用紀錄。',hint:'口朝向水底，嘴邊有短鬚，背鰭和尾鰭散著黑色小點。',source:'https://dfz.jl.gov.cn/jltc/201804/t20180408_5217573.html'}),
 freshFish({id:'yellowdwarfgoby',name:'小黃黝魚',latin:'Micropercops swinhonis',min:.01,max:.01,price:27,requiredBait:'worm',rod:0,other:'',kind:'湖區紀錄魚種',edible:null,cookable:false,cookingNote:'尚無可靠的食用紀錄，不作料理材料。',form:'體型小，淡黃至褐色的身體上有較深的斑紋，頭部較寬，背鰭分成前後兩部。',habitat:'棲息於池塘、湖沼及緩流水域。',diet:'偏肉食性的小型底棲魚，野外食物組成的研究資料很少。',distribution:'中國長江及北方多個水系有紀錄，太湖有採樣與群落調查資料。',food:'食用資料待查。',hint:'小小的身體帶深色斑紋，背上前後兩片背鰭分開。',source:'https://html.rhhz.net/shhydxxb/20160501770.htm'})
];
const seaAnimal=(o)=>({bounty:0,rod:0,edible:true,cookable:true,water:'sea',cookingNote:'',...o});
const animals25tokyo=[
 seaAnimal({id:'mantisshrimp',name:'口蝦蛄',other:'蝦蛄、螳螂蝦',latin:'Oratosquilla oratoria',category:'crustacean',kind:'海水蝦類',requiredBait:'meat',min:.015,max:.06,price:45,form:'身體細長而分節，眼睛長在能活動的眼柄上，前方一對捕捉足折起時像螳螂的鐮刀。腹部末端展開成寬扁的尾扇。',habitat:'在內灣淺海的沙泥底挖洞生活。',diet:'攝食小魚、甲殼類與其他底棲生物。',distribution:'西太平洋有分布，東京灣的歷年調查均有紀錄，也是過去江戶前壽司常用的漁獲。',food:'常以鹽水煮熟、去殼後食用，也用作壽司材料。',hint:'眼睛長在細柄上，前足折起來像一對小鐮刀。',source:'https://www.pref.kanagawa.jp/docs/mx7/cnt/f430693/zukan-shako.html',localNames:[['日語','シャコ']]}),
 seaAnimal({id:'japaneseswimmingcrab',name:'日本蟳',other:'石蟳仔',latin:'Charybdis japonica',category:'crustacean',kind:'海水蟹類',requiredBait:'meat',min:.03,max:.15,price:39,form:'甲殼較寬，兩側排列尖齒，體色可見橄欖綠、褐色或紫色。螯足粗壯，最後一對腳的末端扁平，能用來划水。',habitat:'河口與沿岸淺海，出沒於沙泥底及其他近岸棲地。',diet:'捕食貝類、甲殼類與小魚。',distribution:'西太平洋的日本、韓國與中國沿海等地有分布，東京都內灣 2021 年度調查採到這種蟹。',food:'可食用；韓國稱돌게或민꽃게，殼較薄，常醃成醬蟹。',hint:'甲殼兩側有尖齒，最後一對腳像小小的划槳。',source:'https://www.nmns.edu.tw/collect/catalog/detail/?id=21381',localNames:[['日語','イシガニ']]})
];
const animals25jeju=[
 seaAnimal({id:'kurumaprawn',name:'日本對蝦',other:'日本囊對蝦、九節蝦',latin:'Penaeus japonicus',category:'crustacean',kind:'海水蝦類',requiredBait:'shrimp',min:.015,max:.1,price:42,form:'身體細長，淡色的甲殼上有一節節褐色橫帶，尾扇帶藍、黃等色澤，長觸鬚從頭前伸出。',habitat:'生活於近岸沙底或沙泥底，白天常埋身底質，夜間活動較多。',diet:'雜食而偏肉食，胃中以小型甲殼類與魚類殘骸為主，也會隨棲地的底棲生物調整食物。',distribution:'印度—西太平洋的近岸海域；濟州港有採集紀錄。',food:'可食用的對蝦，常見鹽烤、天婦羅及酒蒸等做法。',hint:'淡色身體帶著褐色橫紋，長鬚伸過頭前。',source:'https://www.busan.go.kr/fisheries/frfishpoint06',localNames:[['韓語','보리새우']]}),
 seaAnimal({id:'gazamicrab',name:'三疣梭子蟹',other:'',latin:'Portunus trituberculatus',category:'crustacean',kind:'海水蟹類',requiredBait:'meat',min:.04,max:.3,price:45,form:'頭胸甲寬扁，兩側各有突出的長棘，背面呈灰綠至褐色，最後一對腳扁平如槳。',habitat:'生活於近岸沙底與沙泥底，能游泳，也會藏在底部。',diet:'攝食貝類、小型甲殼類及其他底棲生物。',distribution:'西北太平洋沿岸；濟州島西歸浦有分布紀錄。',food:'韓國最常食用的蟹，常做成醬蟹、辣燉蟹湯或清蒸。',hint:'寬甲殼的兩側伸出長棘，最後一對腳像小槳。',source:'https://crabs-japan.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=33808',localNames:[['韓語','꽃게']]}),
 seaAnimal({id:'bluelinedoctopus',name:'藍紋章魚',other:'',latin:'Hapalochlaena fasciata',category:'cephalopod',kind:'章魚類',requiredBait:'meat',min:.005,max:.03,price:30,edible:false,cookable:false,cookingNote:'不可作料理材料。',form:'小型章魚，身體淡褐色，外套膜與頭部可見藍色線紋，腕上有藍色環紋；受到刺激時斑紋更鮮明。',habitat:'藏身於近岸岩礁、潮池與淺海海草床，也會利用空貝殼等遮蔽物。',diet:'捕食小型甲殼類及魚。',distribution:'澳洲東部與西北太平洋部分沿岸；2015 年濟州島南岸潮池採得的標本經形態及 DNA 比對確認。',food:'含河豚毒素，不作食用。',hint:'身體上是藍色線紋，腕上則有小環紋。',source:'https://www.mbris.kr/pub/marine/tsearch/tsearchDetail.do?spcTxnId=270000007964',localNames:[['韓語','파란선문어']]})
];
fish.push(...fish25tokyo,...fish25ishikari,...fish25taihu);animals.push(...animals25tokyo,...animals25jeju);
species.push(...fish25tokyo,...animals25tokyo,...fish25ishikari,...animals25jeju,...fish25taihu);
conditions.whitespottedconger={phase:{night:2},note:'夜晚較常見'};
const addName25=(id,lang,name)=>{const s=species.find(x=>x.id===id);if(!s.localNames.some(([l])=>l===lang))s.localNames.push([lang,name])},note25=(id,text)=>{const s=species.find(x=>x.id===id);s.distribution=s.distribution.replace(/\s*$/,'')+text};
for(const [id,ja,text] of [['japaneseanchovy','カタクチイワシ','東京都內灣的成魚調查亦有紀錄。'],['yellowfin','キチヌ','東京都內灣的稚魚調查亦有紀錄。'],['nuchalponyfish','ヒイラギ','東京都內灣的稚魚調查亦有紀錄。']]){addName25(id,'日語',ja);note25(id,text)}
for(const [id,ja] of [['japaneseanchovy','カタクチイワシ'],['japanesehalfbeak','サヨリ'],['oliveflounder','ヒラメ'],['blackscraper','ウマヅラハギ']]){addName25(id,'日語',ja);note25(id,'石狩市的海水魚名錄亦有紀錄。')}
addName25('lessoniana','韓語','흰꼴뚜기');species.find(x=>x.id==='lessoniana').distribution='印度—西太平洋近岸；臺灣東北角、澎湖及韓國濟州沿岸均有紀錄。';
const setPool25=(id,pool,basePool=pool)=>{const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...basePool}};
setPool25('tokyo_bay',{mahaze:15,japaneseseabass:3,mullet:3,dottedshad:6,shirogisu:7,blackporgy:2,terapon:5,stoneflounder:2,marbledflounder:5,silvercroaker:4,sappa:8,puffer:6,japaneseanchovy:8,linedcardinal:6,triplespine:5,redstingray:1,whitespottedconger:5,yellowfin:4,nuchalponyfish:5},
 {mahaze:13,japaneseseabass:6,mullet:6,dottedshad:5,shirogisu:6,blackporgy:4,terapon:4,stoneflounder:4,marbledflounder:5,silvercroaker:4,sappa:7,puffer:5,japaneseanchovy:7,linedcardinal:5,triplespine:4,redstingray:2,whitespottedconger:5,yellowfin:4,nuchalponyfish:4});
regions.find(r=>r.id==='tokyo_bay').animals={mantisshrimp:5,japaneseswimmingcrab:3};
setPool25('ishikari',{pacificherring:13,hokke:7,greenling:6,yellowstripedflounder:6,cresthead:6,stoneflounder:2,chubmackerel:6,blackrockfish:2,ezomebaru:8,chika:9,saffroncod:6,surfperch:6,puffer:3,japaneseanchovy:6,japanesehalfbeak:5,oliveflounder:1,blackscraper:3,pacificcod:1,alaskapollock:2,sailfinsandfish:2},
 {pacificherring:11,hokke:8,greenling:6,yellowstripedflounder:6,cresthead:6,stoneflounder:4,chubmackerel:6,blackrockfish:4,ezomebaru:7,chika:8,saffroncod:6,surfperch:5,puffer:3,japaneseanchovy:5,japanesehalfbeak:4,oliveflounder:2,blackscraper:3,pacificcod:2,alaskapollock:2,sailfinsandfish:2});
regions.find(r=>r.id==='jeju').animals={lessoniana:5,kurumaprawn:4,gazamicrab:3,bluelinedoctopus:1};
setPool25('taihu',{coilia:12,largeicefish:4,shortsnouticefish:6,yellowcatfish:5,intermediushalfbeak:3,blackfingudgeon:2,mandarinfish:2,toxabramis:6,darksleeper:2,whitebream:2,mongolianculter:2,northernsnakehead:2,crucian:7,qili:6,carp:3,culter:2,topmouth:2,silver:2,bream:2,rosybitterling:2,loach:2,giurinus:2,grass:2,redfinculter:2,bighead:1,largerfinbitterling:5,khankabitterling:3,chinesebitterling:3,rivulargudgeon:4,yellowdwarfgoby:2});
const recipes25=[
 {id:'tokyo-simmered-anago',name:'煮穴子',orig:'煮穴子',fish:'whitespottedconger',fishes:['whitespottedconger'],method:'soup',tier:'home',effect:'speed',amount:.08,casts:60,cost:15,preparation:'切段後以甜鹹煮汁煮軟',about:'穴子處理乾淨、切段，放入日本酒、味醂、糖與醬油調成的煮汁，煮到魚肉柔軟。繁星糯鰻是日本常用的穴子魚材，身側能看見排列整齊的白點。',origin:'日本・東京'},
 {id:'tokyo-boiled-shako',name:'鹽水蝦蛄',orig:'シャコの塩ゆで',fish:'mantisshrimp',fishes:['mantisshrimp'],method:'steam',tier:'home',effect:'double',amount:.08,casts:40,cost:15,preparation:'鹽水煮熟後去殼',about:'蝦蛄放入加鹽的沸水中煮熟，去殼後食用。熟肉緊實而帶彈性，也常用作江戶前壽司的材料。',origin:'日本・東京'},
 {id:'ishikari-sanpei',name:'三平汁',orig:'三平汁',fish:['pacificcod','alaskapollock','pacificherring'],fishes:['pacificcod','alaskapollock','pacificherring'],method:'soup',tier:'home',effect:'speed',amount:.08,casts:60,cost:15,preparation:'鹽漬魚與根莖蔬菜入昆布湯煮',about:'把鹽漬的鱈魚或鯡魚與白蘿蔔、馬鈴薯等蔬菜放進昆布湯裡煮，魚本身的鹹味也融進湯中。三平汁是北海道的家常湯，使用的魚隨地方而異，黃線狹鱈也是其中一種魚材。',origin:'日本・北海道'},
 {id:'ishikari-hokke',name:'烤花魚一夜干',orig:'ホッケの一夜干し',fish:'hokke',fishes:['hokke'],method:'fry',tier:'home',effect:'double',amount:.08,casts:40,cost:15,preparation:'剖開浸鹽水、稍乾後烤',about:'花魚剖開、浸過鹽水，稍加乾燥後再烤熟。魚皮烤出焦香，厚實的魚肉仍帶油脂；這裡的花魚指北海道常吃的遠東多線魚。',origin:'日本・北海道'},
 {id:'ishikari-sandfish',name:'鹽烤日本叉牙魚',orig:'ハタハタの塩焼き',fish:'sailfinsandfish',fishes:['sailfinsandfish'],method:'fry',tier:'home',effect:'weed',amount:.75,casts:60,cost:15,preparation:'抹鹽後烤熟',about:'日本叉牙魚抹鹽後烤熟，魚身帶著黃褐色斑紋，肉質細嫩。北海道除了鹽烤，也會將牠煮付或加工成一夜干。',origin:'日本・北海道'},
 {id:'kuruma-shioyaki',name:'鹽烤日本對蝦',orig:'くるまえびの塩焼き',fish:'kurumaprawn',fishes:['kurumaprawn'],method:'fry',tier:'home',effect:'speed',amount:.08,casts:60,cost:15,preparation:'連殼撒鹽烤熟',about:'日本對蝦連殼撒鹽烤熟，外殼帶著焦香，蝦肉緊實而有甜味。大分縣介紹當地車蝦時，收錄了鹽烤、天婦羅與酒蒸等吃法。',origin:'日本・大分'}
].map(r=>({...r,cuisine:'japan'}));
for(const r of recipes25){r.desc=mealDesc(r);recipes.push(r)}
const recipes25b=[
 {id:'akaei-nitsuke',name:'煮付赤魟',orig:'アカエイの煮つけ',fish:'redstingray',fishes:['redstingray'],method:'soup',tier:'home',effect:'speed',amount:.08,casts:60,cost:15,preparation:'汆燙去黏液後與牛蒡同煮',about:'赤魟切塊後先用熱水燙過，洗去表面的黏液與血水，再和牛蒡一起以醬油、糖與酒煮入味。宮城縣氣仙沼一帶的家常吃法，魟魚的軟骨煮透後也能一起吃。',cuisine:'japan',origin:'日本・宮城'},
 {id:'nebuto-karaage',name:'炸天竺鯛',orig:'ネブトの唐揚げ',fish:'linedcardinal',fishes:['linedcardinal'],method:'fry',tier:'home',effect:'weed',amount:.5,casts:40,cost:15,preparation:'去頭、裹粉油炸後撒鹽',about:'廣島縣福山一帶把天竺鯛叫做「ネブト」。牠的頭硬、耳石大，先去頭再用鹽水洗過，薄薄裹上麵粉與太白粉，以中溫油炸，趁熱撒鹽，是孩子與下酒都喜歡的地方小菜。',cuisine:'japan',origin:'日本・廣島'},
 {id:'ganjang-gejang',name:'醬油醃蟹',orig:'간장게장',fish:['gazamicrab','japaneseswimmingcrab'],fishes:['gazamicrab','japaneseswimmingcrab'],method:'pickle',tier:'home',effect:'double',amount:.1,casts:60,cost:15,preparation:'生蟹浸入煮過放涼的醬油',about:'把洗淨的生蟹放進容器，倒入煮滾後放涼的醬油醃汁，冷藏熟成。韓國西海岸常用三疣梭子蟹（꽃게）製作；殼較薄的日本蟳（돌게）也常醃成醬蟹。吃時把飯拌進蟹殼裡的蟹膏。',cuisine:'korea',origin:'韓國'}
];
for(const r of recipes25b){r.desc=mealDesc(r);recipes.push(r)}
// Edible new fish without a sourced dish of their own join the general recipes.
const general25=['triplespine','largerfinbitterling','khankabitterling','chinesebitterling','rivulargudgeon'];
for(const r of recipes.filter(r=>r.cuisine==='basic'&&r.id!=='deepfry')){r.fishes.push(...general25);if(Array.isArray(r.fish))r.fish.push(...general25)}
{const r=recipes.find(r=>r.id==='deepfry'),own=new Set(['redstingray','linedcardinal','whitespottedconger','pacificcod','alaskapollock','sailfinsandfish']);r.fishes=[...fish.filter(f=>f.cookable&&f.max<=.5&&!own.has(f.id)).map(f=>f.id),...friedAnimals];r.fish=[...r.fishes]}
const dishes25=[
 {id:'dine-tokyo_bay-shako',region:'tokyo_bay',name:'鹽水蝦蛄',orig:'シャコの塩ゆで',method:'steam',tier:'basic',effect:'double',amount:.08,casts:40,price:45,preparation:'鹽水煮熟後去殼',about:'蝦蛄放入加鹽的沸水中煮熟，去殼後食用。熟肉緊實而帶彈性，也常用作江戶前壽司的材料。',art:'tokyo-boiled-shako'},
 {id:'dine-ishikari-sanpei',region:'ishikari',name:'三平汁',orig:'三平汁',method:'soup',tier:'home',effect:'speed',amount:.08,casts:60,price:135,preparation:'鹽漬魚與根莖蔬菜入昆布湯煮',about:'把鹽漬的鱈魚或鯡魚與白蘿蔔、馬鈴薯等蔬菜放進昆布湯裡煮，魚本身的鹹味也融進湯中。三平汁是北海道的家常湯，使用的魚隨地方而異，黃線狹鱈也是其中一種魚材。',art:'ishikari-sanpei'},
 {id:'dine-jeju-kuruma',region:'jeju',name:'鹽烤明蝦',method:'fry',tier:'home',effect:'speed',amount:.08,casts:60,price:135,preparation:'連殼撒鹽烤熟',about:'整尾日本對蝦撒鹽烤熟，連殼上桌，剝開後是帶甜味的蝦肉。',art:'kuruma-shioyaki'}
];
for(const d of dishes25){d.desc=mealDesc(d);dishes.push(d);restaurants[d.region].dishes.push(d)}
// 0.26 crayfish waters: Hongze Lake, Lake Vättern and the tidal Thames. Runtime prices and final pool weights.
const fb26=n=>'https://www.fishbase.se/summary/'+n.replace(' ','-')+'.html';
const fish26hongze=[
 freshFish({id:'yellowcheek',name:'鱤',latin:'Elopichthys bambusa',min:.8,max:5,price:54,requiredBait:'meat',rod:4,other:'黃鑽、竿魚',kind:'湖區紀錄魚種',form:'身體細長如梭，頭尖吻長，嘴大而無牙，體側銀白，鰓蓋附近帶黃色。',habitat:'大型江河與相連湖泊的中上層水域，多在主河道活動。',diet:'凶猛的魚食性魚，主要捕食其他小型魚。',distribution:'東亞從黑龍江到紅河流域皆有分布，洪澤湖調查列為魚食性魚類。',food:'可作食用魚。',hint:'細長的銀色大魚，在水層中追捕小魚。',source:fb26('Elopichthys bambusa')}),
 freshFish({id:'barbelchub',name:'赤眼鱒',latin:'Squaliobarbus curriculus',min:.2,max:2,price:45,requiredBait:'dough',rod:0,other:'紅眼魚',kind:'湖區紀錄魚種',form:'身體長而略呈圓筒形，眼睛上緣帶紅色，體側鱗片基部有黑點。',habitat:'江河與湖泊的中下層，屬江湖半洄游魚類。',diet:'雜食性，攝食藻類、水草碎屑與小型無脊椎動物。',distribution:'中國東部各大水系有分布，洪澤湖調查記錄為江湖半洄游魚類。',food:'淡水經濟魚類，廣東梅州一帶也用來做魚生。',hint:'眼睛上緣帶紅色的長身魚。',source:'https://www.peopleapp.com/column/30052034522-500007470966'}),
 freshFish({id:'spottedsteed',name:'花䱻',latin:'Hemibarbus maculatus',min:.1,max:1,price:45,requiredBait:'worm',rod:0,other:'麻鯉、雞頭魚',kind:'湖區紀錄魚種',form:'身體略長，吻部較尖，口下有一對短鬚，體側散布大小不一的黑斑。',habitat:'江河與湖泊的底層。',diet:'以水生昆蟲、螺類等底棲動物為主。',distribution:'東亞多處水系有分布，洪澤湖調查列為底棲肉食性魚類。',food:'可作食用魚。',hint:'身上散布黑斑，貼著湖底找食物。',source:fb26('Hemibarbus maculatus')}),
 freshFish({id:'xenocypris',name:'黃尾鯝',latin:'Xenocypris davidi',min:.05,max:.5,price:36,requiredBait:'dough',rod:0,other:'黃尾、黃片',kind:'湖區紀錄魚種',form:'身體側扁，口小而位於下方，體色銀白，尾鰭呈黃色。',habitat:'江河與湖泊的中下層。',diet:'以刮食著生藻類與碎屑為主。',distribution:'中國中、東部水系有分布；洪澤湖在 2017～2018 年調查中首次記錄。',food:'可作食用魚。',hint:'銀白的小口魚，尾鰭帶著黃色。',source:fb26('Xenocypris davidi')}),
 freshFish({id:'nitidcatfish',name:'光澤黃顙魚',latin:'Tachysurus nitidus',min:.03,max:.25,price:45,requiredBait:'worm',rod:0,other:'',kind:'湖區紀錄魚種',edible:null,cookable:false,cookingNote:'尚無該種的食用資料，不作料理材料。',form:'身體較黃顙魚細長，頭部扁平，口邊有四對鬚，體色黃褐而有光澤，背鰭與胸鰭有硬棘。',habitat:'湖泊與河流的底層。',diet:'攝食底棲甲殼類、多毛類與水生昆蟲。',distribution:'中國東部水系有分布，洪澤湖調查有紀錄。',food:'食用資料待查。',hint:'帶鬚的黃褐色小魚，鰭上有尖硬的棘。',source:'https://china-fishery.com/scxuebao/article/pdf/20140609359'})
];
const fish26vattern=[
 freshFish({id:'arcticchar',name:'北極紅點鮭',latin:'Salvelinus alpinus',min:.3,max:3,price:66,requiredBait:'worm',rod:2,other:'紅點鮭',kind:'水域紀錄魚種',form:'身體流線，背部暗綠到灰褐，體側有淡色斑點，繁殖期腹部轉為橘紅。',habitat:'寒冷、清澈的深水湖，韋特恩湖的族群在湖中大石塊間產卵。',diet:'捕食小型魚與底棲無脊椎動物。',distribution:'北半球高緯度淡水與沿海；韋特恩湖是瑞典最大的紅點鮭族群之一，過去稱 storröding 的大型族群現歸為本種。',food:'可作食用魚，也有養殖與遊釣。',hint:'深水湖裡的鮭類，腹部有時帶著橘紅色。',source:'https://vattern.org/wp-content/uploads/Rapport150_Rodinglekprovfiske-i-Vattern_DS_TGA.pdf',localNames:[['瑞典語','röding']]}),
 freshFish({id:'grayling',name:'茴魚',latin:'Thymallus thymallus',min:.2,max:1.2,price:57,requiredBait:'worm',rod:0,other:'河茴魚',kind:'水域紀錄魚種',form:'身體細長，背鰭特別高大，常帶紫色與紅色斑紋，鱗片較大。',habitat:'清涼、流動的溪河與湖泊，會溯入支流產卵。',diet:'以水生昆蟲為主，也吃落水的陸生昆蟲。',distribution:'歐洲北部與中部；韋特恩湖有瑞典最南端的茴魚族群。',food:'可作食用魚，也是遊釣魚。',hint:'背上張著一片又高又大的鰭。',source:fb26('Thymallus thymallus'),localNames:[['瑞典語','harr']]}),
 freshFish({id:'vendace',name:'歐白鮭',latin:'Coregonus albula',min:.02,max:.15,price:42,requiredBait:'shrimp',rod:0,other:'',kind:'水域紀錄魚種',form:'體形小而細長，銀白色，下頜略突出。',habitat:'深而清的湖泊開放水域，常成群活動。',diet:'以浮游動物為主。',distribution:'北歐與中歐北部的湖泊；瑞典農業大學 2022 年的調查中，歐白鮭占韋特恩湖開放水域魚類生物量的 68%。',food:'可作食用魚，魚卵在瑞典製成魚子。',hint:'成群在開闊湖水裡游動的小型銀魚。',source:fb26('Coregonus albula'),localNames:[['瑞典語','siklöja']]}),
 freshFish({id:'commonwhitefish',name:'衰白鮭',latin:'Coregonus maraena',min:.3,max:1.5,price:57,requiredBait:'worm',rod:0,other:'',kind:'水域紀錄魚種',form:'身體銀白而側扁，頭小，吻端略鈍。瑞典各湖的白鮭外形差異很大，現多視為同一種的不同生態型。',habitat:'湖泊與波羅的海沿岸的冷水域。',diet:'攝食底棲無脊椎動物與浮游動物。',distribution:'北歐湖泊與波羅的海周邊；韋特恩湖有紀錄。',food:'可作食用魚，常見燻製。',hint:'小頭的銀白色鮭類，比同湖的歐白鮭大得多。',source:fb26('Coregonus maraena'),localNames:[['瑞典語','sik']]}),
 freshFish({id:'smelt',name:'歐洲胡瓜魚',latin:'Osmerus eperlanus',min:.01,max:.06,price:36,requiredBait:'shrimp',rod:0,other:'',kind:'河口魚種',water:'brackish',form:'身體細長半透明，口大有齒，新鮮時帶有類似小黃瓜的氣味。',habitat:'湖泊與河口；韋特恩湖的族群是冰河時期留下的陸封族群。',diet:'捕食浮游動物與小型魚。',distribution:'歐洲西北部的河口與湖泊；韋特恩湖與泰晤士河潮汐段均有紀錄。',food:'可作食用魚，也有燻製與作釣餌的利用。',hint:'細長半透明的小魚，聞起來有一點瓜果氣味。',source:fb26('Osmerus eperlanus'),localNames:[['瑞典語','nors'],['英語','smelt']]}),
 freshFish({id:'fourhorn',name:'四角床杜父魚',latin:'Myoxocephalus quadricornis',min:.03,max:.2,price:36,requiredBait:'worm',rod:0,other:'',kind:'水域紀錄魚種',water:'brackish',cookable:false,cookingNote:'少作食用，不作料理材料。',form:'頭大而扁，身體向後漸細，頭頂有骨質突起，體色灰褐。',habitat:'寒冷湖泊與海域的底層。',diet:'捕食底棲甲殼類與小型魚。',distribution:'北極周邊海域與北歐湖泊；韋特恩湖的族群是冰河時期留下的孑遺。',food:'少作食用，遊戲中不作料理材料。',hint:'大頭的底棲魚，頭上長著幾個小突起。',source:fb26('Myoxocephalus quadricornis'),localNames:[['瑞典語','hornsimpa']]}),
 freshFish({id:'stickleback',name:'三刺魚',latin:'Gasterosteus aculeatus',min:.001,max:.005,price:30,requiredBait:'shrimp',rod:0,other:'刺魚',kind:'水域紀錄魚種',edible:false,cookable:false,cookingNote:'體形過小，不作料理材料。',form:'體形小，背上有三根分開的硬棘，體側有骨板；繁殖期雄魚喉部轉紅。',habitat:'湖泊、河口與沿岸淺水。',diet:'攝食小型甲殼類與水生昆蟲。',distribution:'北半球溫帶與寒帶廣泛分布；韋特恩湖與泰晤士河均有紀錄。',food:'體形過小，遊戲中不作料理材料。',hint:'拇指大的小魚，背上立著三根刺。',source:fb26('Gasterosteus aculeatus'),localNames:[['瑞典語','storspigg'],['英語','three-spined stickleback']]})
];
const fish26thames=[
 freshFish({id:'commongoby',name:'普通細鰕虎',latin:'Pomatoschistus microps',min:.001,max:.003,price:30,requiredBait:'shrimp',rod:0,other:'',kind:'河口魚種',water:'brackish',edible:false,cookable:false,cookingNote:'體形過小，不作料理材料。',form:'體形細小，淡沙色帶細點，雄魚背鰭有暗斑。',habitat:'河口與潮間帶的泥沙淺灘。',diet:'攝食小型甲殼類與多毛類。',distribution:'歐洲大西洋沿岸；倫敦動物學會在泰晤士河潮間帶的調查中數量最多。',food:'體形過小，遊戲中不作料理材料。',hint:'潮水退去後，泥灘水窪裡最常見的小鰕虎。',source:fb26('Pomatoschistus microps'),localNames:[['英語','common goby']]}),
 freshFish({id:'sandgoby',name:'沙細鰕虎',latin:'Pomatoschistus minutus',min:.002,max:.006,price:30,requiredBait:'shrimp',rod:0,other:'',kind:'海水魚種',water:'sea',edible:false,cookable:false,cookingNote:'體形過小，不作料理材料。',form:'比普通細鰕虎稍大，體色沙黃帶網紋，適合貼在沙底隱藏。',habitat:'河口與沿岸的沙質底。',diet:'攝食小型甲殼類。',distribution:'歐洲大西洋沿岸；泰晤士河潮汐段有紀錄。',food:'體形過小，遊戲中不作料理材料。',hint:'沙色的小鰕虎，伏在沙底幾乎看不出來。',source:fb26('Pomatoschistus minutus'),localNames:[['英語','sand goby']]}),
 freshFish({id:'dace',name:'歐洲雅羅魚',latin:'Leuciscus leuciscus',min:.05,max:.3,price:36,requiredBait:'worm',rod:0,other:'',kind:'水域紀錄魚種',cookable:false,cookingNote:'主要作釣遊與釣餌用途，不作料理材料。',form:'身體細長銀亮，背部灰綠，鰭色偏淡，吻部稍尖。',habitat:'水流清涼的河流中上層，也進入潮汐段的淡水河段。',diet:'攝食水生昆蟲、落水昆蟲與植物碎屑。',distribution:'歐洲北部與中部河流；泰晤士河潮汐段調查有紀錄。',food:'主要作釣遊與釣餌用途，遊戲中不作料理材料。',hint:'河流上層的銀色小魚，吻部略尖。',source:fb26('Leuciscus leuciscus'),localNames:[['英語','dace']]}),
 freshFish({id:'chub',name:'圓腹雅羅魚',latin:'Squalius cephalus',min:.2,max:2.5,price:39,requiredBait:'dough',rod:2,other:'',kind:'水域紀錄魚種',cookable:false,cookingNote:'在英國多作釣遊魚，不作料理材料。',form:'身體粗壯，頭寬口大，鱗片大而有暗色邊，形成網狀紋。',habitat:'河流中下游與緩流處。',diet:'雜食性，從昆蟲、甲殼類到植物果實都吃，大型個體也捕食小魚。',distribution:'歐洲大部分河流；泰晤士河潮汐段有紀錄。',food:'部分地區有漁業利用，在英國多作釣遊魚，遊戲中不作料理材料。',hint:'頭寬口大的河魚，鱗片邊緣像描了一圈深色。',source:fb26('Squalius cephalus'),localNames:[['英語','chub']]}),
 freshFish({id:'thinlipmullet',name:'薄唇鮻',latin:'Chelon ramada',min:.2,max:1.5,price:33,requiredBait:'dough',rod:0,other:'',kind:'河口魚種',water:'brackish',form:'身體細長，背部灰藍，體側有數條灰色縱紋，上唇較薄。',habitat:'河口與沿岸，會進入半淡鹹水的潮汐河段。',diet:'刮食底泥中的藻類與有機碎屑。',distribution:'歐洲大西洋與地中海沿岸；泰晤士河潮汐段有紀錄。',food:'可作食用魚，也有養殖；國際自然保護聯盟列為近危。',hint:'河口的灰色鯔魚，嘴唇比同類薄。',source:fb26('Chelon ramada'),localNames:[['英語','thinlip grey mullet']]}),
 freshFish({id:'sprat',name:'黍鯡',latin:'Sprattus sprattus',min:.005,max:.02,price:33,requiredBait:'shrimp',rod:0,other:'小鯡',kind:'海水魚種',water:'sea',form:'體形小而側扁，背部藍綠，腹部銀白，腹緣有稜鱗。',habitat:'近海與河口的上層水域，常成群活動。',diet:'以浮游動物為主。',distribution:'歐洲東北大西洋、北海與波羅的海；泰晤士河潮汐段有紀錄。',food:'英國炸銀魚的常用材料之一，也可煎、烤、燻製或製罐。',hint:'成群游動的銀色小魚，腹部摸起來像一排小鋸齒。',source:fb26('Sprattus sprattus'),localNames:[['英語','sprat']]})
];
const freshAnimal=(o)=>({rod:0,edible:true,cookable:true,water:'fresh',localNames:[],cookingNote:'',category:'crustacean',...o});
const animals26=[
 freshAnimal({id:'redswampcrayfish',name:'克氏原螯蝦',other:'小龍蝦、紅色螯蝦',latin:'Procambarus clarkii',kind:'淡水螯蝦',requiredBait:'worm',min:.015,max:.06,price:42,bounty:0,form:'體色暗紅到鮮紅，一對大螯表面有顆粒狀突起，頭胸甲厚實。',habitat:'湖泊、池塘、溝渠與稻田，會在岸邊掘洞。',diet:'雜食性，攝食水草、碎屑、螺類與小型動物。',distribution:'原產美國南部與墨西哥北部；20 世紀前期經日本傳入南京一帶，再擴散到盱眙的陡湖與洪澤湖等水域。',food:'中國各地普遍食用，盱眙以十三香小龍蝦聞名。',hint:'舉著一對紅色大螯的甲殼動物。',source:'https://www.thepaper.cn/newsDetail_forward_8180484'}),
 freshAnimal({id:'signalcrayfish',name:'信號小龍蝦',other:'信號螯蝦',latin:'Pacifastacus leniusculus',kind:'淡水螯蝦',requiredBait:'meat',min:.03,max:.12,price:45,bounty:66,bountyAt:['vattern','thames'],form:'體色褐到藍褐，大螯腹面紅色，螯關節處有一塊白色或藍白色的斑，像打信號的旗子。',habitat:'湖泊與河流，躲在石縫、河岸洞穴中。',diet:'雜食性，攝食水草、碎屑、無脊椎動物與魚卵。',distribution:'原產北美西部；1960 年代引入瑞典，最早放養於韋特恩湖。在英國廣泛擴散，泰晤士河流域的支流與河段都有紀錄。會傳播螯蝦瘟疫，列在歐盟入侵種管制名單。',food:'瑞典傳統上以蒔蘿鹽水煮食。',hint:'大螯關節處有一塊顯眼白斑的螯蝦。',source:'https://eurofish.dk/?p=8688',localNames:[['瑞典語','signalkräfta'],['英語','signal crayfish']]})
];
fish.push(...fish26hongze,...fish26vattern,...fish26thames);animals.push(...animals26);
species.push(...fish26hongze,animals26[0],...fish26vattern,animals26[1],...fish26thames);
conditions.signalcrayfish={months:[8,9],amount:2,note:'8～9 月較常見'};
// Bounties are handed in only at their bounty waters; a catch from anywhere counts.
const taiwanWaters=['sunmoon','zengwen','qigu','guandu','keelung','penghu','longdong','kenting'];
for(const id of ['snakehead','jaguar','pleco','walkingcatfish'])species.find(s=>s.id===id).bountyAt=taiwanWaters;
Object.assign(species.find(s=>s.id==='mittencrab'),{bounty:72,bountyAt:['thames']});
const note26=(id,text)=>{const s=[...species,...plants].find(x=>x.id===id);s.distribution=s.distribution.replace(/\s*$/,'')+text},addName26=(id,lang,name)=>{const s=species.find(x=>x.id===id);s.localNames||=[];if(!s.localNames.some(([l])=>l===lang))s.localNames.push([lang,name])};
for(const id of ['coilia','qili','crucian','redfinculter','yellowcatfish','bighead','silver','topmouth','largeicefish','shortsnouticefish','grass','carp','culter','bream','rosybitterling','northernsnakehead','intermediushalfbeak','blackcarp','eel','malaypondweed','foxnut'])note26(id,'洪澤湖亦有紀錄。');
note26('reed','洪澤湖、韋特恩湖與泰晤士河潮汐段亦有紀錄。');note26('sagopondweed','泰晤士河潮汐段的錫恩公園潮汐草地亦有紀錄。');note26('claspingpondweed','泰晤士河特丁頓一帶亦有紀錄。');
for(const id of ['perch','pike','zander','burbot','browntrout','stonewort','claspingpondweed'])note26(id,'韋特恩湖亦有紀錄。');
for(const id of ['flounder','roach','europeanseabass','europeaneel','commonbream'])note26(id,'泰晤士河潮汐段亦有紀錄。');
note26('perch','泰晤士河潮汐段亦有紀錄。');
note26('mittencrab','洪澤湖的大閘蟹為國家地理標誌產品；在英國泰晤士河是入侵種，會掘洞破壞河岸，可在當地繳交賞金。');
for(const [id,name] of [['perch','abborre'],['pike','gädda'],['zander','gös'],['burbot','lake'],['browntrout','öring']])addName26(id,'瑞典語',name);
for(const [id,name] of [['flounder','flounder'],['roach','roach'],['europeanseabass','European seabass'],['perch','perch'],['europeaneel','European eel'],['commonbream','common bream'],['mittencrab','Chinese mitten crab']])addName26(id,'英語',name);
const lic26=tier=>({tier,...[null,{cost:150,atlas:8},{cost:800,atlas:25},{cost:3000,atlas:50},{cost:8000,atlas:80}][tier]});
regions.push(
 {id:'hongze',name:'洪澤湖',area:'中國・江蘇',lat:33.3,lon:118.7,water:'淡水湖泊',license:lic26(3),
  desc:'洪澤湖位於淮河下游，是中國的大型淡水湖之一，湖區以鯉科魚類為主，刀鱭、大銀魚等洄游魚也在湖中定居繁殖。南岸的盱眙以小龍蝦聞名，紅色的克氏原螯蝦經南京一帶傳入後，在湖區與周邊水塘繁衍。湖區近年實施禁捕，遊戲內的垂釣不代表現行規定。',
  pool:{coilia:12,qili:10,crucian:10,yellowcatfish:7,redfinculter:6,bighead:5,xenocypris:5,nitidcatfish:5,silver:4,largeicefish:4,barbelchub:4,spottedsteed:4,topmouth:3,shortsnouticefish:3,grass:2,carp:2,culter:2,bream:2,rosybitterling:2,northernsnakehead:2,intermediushalfbeak:2,yellowcheek:2,blackcarp:1,eel:1},
  animals:{redswampcrayfish:12,mittencrab:2},weeds:{reed:40,malaypondweed:35,foxnut:25},
  source:'https://jlakes.alljournals.cn/html/2019/4/20190421.html'},
 {id:'vattern',name:'韋特恩湖',area:'瑞典・約塔蘭',lat:58.4,lon:14.6,water:'深水湖泊・淡水',license:lic26(4),
  desc:'韋特恩湖是瑞典第二大湖，湖水深而清澈，北極紅點鮭、歐洲胡瓜魚等冰河時期留下的魚類在此生活。原生的歐洲螯蝦因螯蝦瘟疫大量死亡後，1960 年代引進北美的信號小龍蝦，湖區後來發展出瑞典少見的小龍蝦漁業。信號小龍蝦會傳播螯蝦瘟疫，是瀕危的歐洲螯蝦目前最大的威脅。',
  pool:{vendace:20,perch:18,smelt:14,arcticchar:8,commonwhitefish:8,stickleback:7,grayling:6,burbot:5,pike:4,browntrout:4,zander:3,fourhorn:3},
  animals:{signalcrayfish:12},weeds:{stonewort:40,claspingpondweed:35,reed:25},
  source:'https://sv.wikipedia.org/wiki/V%C3%A4ttern'},
 {id:'thames',name:'泰晤士河',area:'英國・倫敦',lat:51.48,lon:0,water:'河口潮汐段・半淡鹹水',license:lic26(4),
  desc:'泰晤士河流經倫敦的河段受潮汐影響，河水在淡水與海水之間變化。這段河流在 1950 年代曾被宣告生物死亡，水質改善後，至今已記錄過百種魚類，也是歐洲鱸、歐洲川鰈等海魚的育幼場。來自東亞的中華絨螯蟹在潮汐段大量出現，北美的信號小龍蝦則擴散到流域內的支流與河段，兩者都是當地的入侵種。',
  pool:{commongoby:18,flounder:12,roach:10,europeanseabass:9,smelt:9,dace:8,stickleback:6,europeaneel:6,perch:5,sandgoby:5,chub:4,commonbream:3,thinlipmullet:3,sprat:2},
  animals:{signalcrayfish:3,mittencrab:4},weeds:{reed:60,sagopondweed:25,claspingpondweed:15},
  source:'https://www.tideway.london/media/3924/zsl-tidal-thames-fish-report-sept-2019.pdf'});
for(const id of ['hongze','vattern','thames']){const r=regions.find(r=>r.id===id);r.basePool={...r.pool}}
Object.assign(world.weatherOdds,{hongze:[40,35,25],vattern:[35,40,25],thames:[30,40,30]});
world.flavor.hongze={
 phase:{dawn:['湖面起了薄霧，遠處的網圍只露出一排竹竿。','早起的水鳥從蘆葦叢裡飛出來，貼著水面掠過。'],day:['日光照在寬闊的湖面上，看不到對岸。','風吹過湖面，岸邊的馬來眼子菜在水下輕輕擺動。'],dusk:['夕陽落向湖西，水面一片金黃。','歸航的小船拖著長長的水紋靠向岸邊。'],night:['湖上只剩幾點漁燈，蘆葦間傳來蟲鳴。','遠處的大堤亮著一排燈，倒影在湖面晃動。']},
 weather:{sunny:['天空晴朗，湖水在遠處和天色連成一片。','陽光下的芡實葉浮在水面，葉面皺褶裡積著水珠。'],cloudy:['雲層壓低，湖水顯得灰濛濛的。','起風了，湖面翻起一層短浪。'],rain:['雨點落在湖面，蘆葦被打得低下頭。','雨裡的湖岸一片朦朧，只聽得到雨打水面的聲音。']},
 facts:['洪澤湖在 2017～2018 年的調查共採到 51 種魚，鯉科占大多數。','刀鱭、大銀魚原是洄游魚，長期困在湖中後，已能在湖內自然繁殖。','盱眙的小龍蝦產業規模很大，十三香小龍蝦就是從當地開始流行。','洪澤湖的水生植物在 1950 年代幾乎遍布湖面，如今分布面積已不到三成。']};
world.flavor.vattern={
 phase:{dawn:['天色微亮，湖水清得能看見岸邊的石塊。','晨霧貼著湖面慢慢散開，對岸的樹林漸漸清楚。'],day:['陽光照進深色的湖水，岸邊的岩石暖了起來。','湖面很寬，遠處只看得見一道細細的對岸。'],dusk:['太陽落得很晚，湖面久久映著橘色的天光。','天色暗下前，湖上的風停了，水面平得像鏡子。'],night:['夜裡的湖面很靜，偶爾有魚翻出水花。','岸邊小鎮的燈光一盞盞亮起，映在黑色的湖水上。']},
 weather:{sunny:['晴空下的湖水藍得很深。','陽光透進清澈的湖水，看得見水底的輪藻。'],cloudy:['雲層遮住陽光，湖面轉成鉛灰色。','風從湖上吹來，帶著一股涼意。'],rain:['冷雨落在湖上，岸邊的石頭濕得發亮。','雨幕遮住了對岸，湖面只剩一片灰。']},
 facts:['瑞典的 50 種淡水魚中，有 31 種出現在韋特恩湖。','在韋特恩湖，民眾可以不經許可，在離岸 300 公尺內的公共水域捕撈小龍蝦。','近年韋特恩湖小龍蝦的平均體型越來越小，研究認為和捕撈強度有關。','韋特恩湖北邊的格蘭納小鎮，是紅白條紋拐杖糖的發源地。']};
world.flavor.thames={
 phase:{dawn:['天剛亮，河面上已有早班的渡輪駛過。','晨光照在泥灘上，幾隻水鳥沿著水邊覓食。'],day:['潮水推著河面緩緩移動，岸邊露出一段泥灘。','觀光船從橋下駛過，船尾的浪拍上河岸。'],dusk:['夕陽照在對岸的建築上，河面泛著橘光。','河邊的酒館陸續亮燈，傳出熱鬧的人聲。'],night:['兩岸的燈光倒映在河面，被水流拉成細長的光帶。','夜裡的河水流得更急，浮標在暗處輕輕晃動。']},
 weather:{sunny:['難得的晴天，河邊步道上多了散步的人。','陽光照在褐色的河水上，泛起細碎的亮光。'],cloudy:['灰色的雲壓在河面上，風裡帶著涼意。','天色灰沉，河面和天空幾乎同一種顏色。'],rain:['細雨落在河面，對岸的輪廓變得模糊。','雨打在河邊的石階上，水窪裡冒起一圈圈漣漪。']},
 tide:{rising:['潮水漲了上來，泥灘一點一點被河水淹沒。'],falling:['水位退下，岸邊的泥灘與石階露了出來。']},
 facts:['泰晤士河在 1957 年曾被宣告生物死亡，之後記錄到的魚類已超過一百種。','泰晤士河的潮間帶是歐洲鱸、歐洲川鰈與歐洲胡瓜魚的育幼場。','中華絨螯蟹會在河岸掘洞，造成河岸崩塌。','19 世紀格林威治的酒館以銀魚晚宴聞名，國會議員每年會乘船前往聚餐。']};
const recipes26=[
 {id:'xuyi-shisanxiang',name:'十三香小龍蝦',fish:'redswampcrayfish',fishes:['redswampcrayfish'],method:'soup',tier:'home',effect:'double',amount:.1,casts:60,cost:15,preparation:'與十三香香料燒煮',about:'盱眙的招牌吃法，用十三種香料與小龍蝦一起燒煮，滋味麻、辣、鮮、香。當地被稱為中國龍蝦之都，十三香口味就是從這裡開始流行。',cuisine:'china',origin:'中國・盱眙'},
 {id:'kokta-krafter',name:'蒔蘿鹽水煮小龍蝦',orig:'kokta kräftor',fish:'signalcrayfish',fishes:['signalcrayfish'],method:'steam',tier:'home',effect:'speed',amount:.08,casts:60,cost:15,preparation:'蒔蘿鹽水煮熟後放涼',about:'瑞典夏末的小龍蝦派對（kräftskiva）主菜。小龍蝦在加了蒔蘿的鹽水中煮熟，放涼後整隻端上桌，配麵包與起司。這項傳統源自過去法規只允許在夏末捕撈小龍蝦。',cuisine:'europe',origin:'瑞典'},
 {id:'jellied-eels',name:'鰻魚凍',orig:'jellied eels',fish:'europeaneel',fishes:['europeaneel'],method:'mix',tier:'home',effect:'double',amount:.1,casts:60,cost:30,preparation:'鰻魚段煮熟後冷卻成凍',about:'倫敦東區的傳統小吃。鰻魚切段後煮熟，湯汁冷卻後自然凝成凍，常在派與薯泥店販售。過去泰晤士河的鰻魚多到漁網可以設到倫敦市區，如今歐洲鰻鱺已列極危，店家多改用外地進口的鰻魚。',cuisine:'europe',origin:'英國・倫敦'},
 {id:'whitebait',name:'炸銀魚',orig:'whitebait',fish:['sprat','herring'],fishes:['sprat','herring'],method:'fry',tier:'home',effect:'weed',amount:.75,casts:60,cost:15,preparation:'裹粉油炸',about:'把整條小魚裹上麵粉，下鍋炸到酥脆，配檸檬與麵包奶油。英國的銀魚多是鯡魚與黍鯡的幼魚；19 世紀泰晤士河邊格林威治的酒館以銀魚晚宴聞名，國會議員每年會乘船前往聚餐。',cuisine:'europe',origin:'英國・倫敦'}
];
for(const r of recipes26){r.desc=mealDesc(r);recipes.push(r)}
// Edible new fish without a sourced dish of their own join the general recipes; small ones also fry.
const general26=['yellowcheek','barbelchub','spottedsteed','xenocypris','arcticchar','grayling','vendace','commonwhitefish','smelt','thinlipmullet','sprat'];
for(const r of recipes.filter(r=>r.cuisine==='basic'&&r.id!=='deepfry')){r.fishes.push(...general26);if(Array.isArray(r.fish))r.fish.push(...general26)}
{const r=recipes.find(r=>r.id==='deepfry'),extra=general26.filter(id=>fish.find(f=>f.id===id).max<=.5);r.fishes.splice(r.fishes.length-friedAnimals.length,0,...extra);r.fish=[...r.fishes]}
const dishes26=[
 {id:'dine-hongze-pingqiao',region:'hongze',name:'平橋豆腐',method:'soup',tier:'basic',effect:'weed',amount:.5,casts:40,price:45,preparation:'豆腐丁入雞湯、以鯽魚腦提鮮後勾芡',about:'淮安的傳統名菜。嫩豆腐切小丁，放入久燉的雞湯，以鯽魚腦提鮮，勾芡後淋上麻油。表面的油封住熱氣，看起來不冒煙，入口卻非常燙。',art:'pingqiao-tofu'},
 {id:'dine-hongze-crab',region:'hongze',name:'清蒸大閘蟹',method:'steam',tier:'home',effect:'double',amount:.1,casts:60,price:135,preparation:'隔水清蒸、蘸薑醋',about:'中華絨螯蟹的螯足長著絨毛，俗稱大閘蟹，洪澤湖大閘蟹是國家地理標誌產品。整隻隔水清蒸，蒸到蟹殼轉為橘紅，再蘸薑末與香醋。',art:'taihu-steamed-crab'},
 {id:'dine-hongze-shisanxiang',region:'hongze',name:'十三香小龍蝦',method:'soup',tier:'classic',effect:'lure',amount:2.5,casts:80,price:270,preparation:'與十三香香料燒煮',about:'盱眙的招牌吃法，用十三種香料與小龍蝦一起燒煮，滋味麻、辣、鮮、香。當地被稱為中國龍蝦之都，十三香口味就是從這裡開始流行。',art:'xuyi-shisanxiang'},
 {id:'dine-vattern-polkagris',region:'vattern',name:'格蘭納拐杖糖',orig:'polkagris',method:'mix',tier:'basic',effect:'speed',amount:.05,casts:40,price:45,preparation:'糖漿拉長扭轉後切段',about:'1859 年，住在韋特恩湖畔小鎮格蘭納的寡婦阿瑪莉亞・埃里克松做出這種紅白條紋的薄荷硬糖。糖漿煮好後在大理石桌上拉長、扭轉，再切成段，至今仍是格蘭納的名產。',art:'granna-polkagris'},
 {id:'dine-vattern-krafter',region:'vattern',name:'蒔蘿鹽水煮小龍蝦',orig:'kokta kräftor',method:'steam',tier:'classic',effect:'lure',amount:2.5,casts:80,price:270,preparation:'蒔蘿鹽水煮熟後放涼',about:'瑞典夏末的小龍蝦派對（kräftskiva）主菜。小龍蝦在加了蒔蘿的鹽水中煮熟，放涼後整隻端上桌，配麵包與起司。這項傳統源自過去法規只允許在夏末捕撈小龍蝦。',art:'kokta-krafter'},
 {id:'dine-thames-piemash',region:'thames',name:'派與薯泥',orig:'pie and mash',method:'fry',tier:'basic',effect:'weed',amount:.5,casts:40,price:45,preparation:'肉派配薯泥、淋歐芹醬汁',about:'倫敦東區的平價老店菜色：烤得酥香的肉派配上馬鈴薯泥，淋上稱為 liquor 的綠色歐芹醬汁。這醬汁傳統上用燉煮鰻魚剩下的湯汁製作，名字指的是湯汁，不是酒。派與薯泥店在 19 世紀出現於東區，店裡也賣熱鰻魚與鰻魚凍。',art:'pie-and-mash'},
 {id:'dine-thames-jellied',region:'thames',name:'鰻魚凍',orig:'jellied eels',method:'mix',tier:'home',effect:'double',amount:.1,casts:60,price:135,preparation:'鰻魚段煮熟後冷卻成凍',about:'倫敦東區的傳統小吃。鰻魚切段後煮熟，湯汁冷卻後自然凝成凍，常在派與薯泥店販售。如今歐洲鰻鱺已列極危，店家多改用外地進口的鰻魚。',art:'jellied-eels'},
 {id:'dine-thames-whitebait',region:'thames',name:'炸銀魚',orig:'whitebait',method:'fry',tier:'classic',effect:'lure',amount:2.5,casts:80,price:270,preparation:'裹粉油炸',about:'把整條小魚裹上麵粉，下鍋炸到酥脆，配檸檬與麵包奶油。19 世紀泰晤士河邊格林威治的酒館以銀魚晚宴聞名，國會議員每年會乘船前往聚餐。',art:'whitebait'}
];
for(const d of dishes26){d.desc=mealDesc(d);dishes.push(d)}
restaurants.hongze={name:'湖畔龍蝦館',dishes:dishes26.filter(d=>d.region==='hongze')};restaurants.vattern={name:'湖岸螯蝦屋',dishes:dishes26.filter(d=>d.region==='vattern')};restaurants.thames={name:'河畔酒館',dishes:dishes26.filter(d=>d.region==='thames')};
// Regional starters: preserve the complete waters and change only their licence requirements.
for(const id of ['taihu','biwa','jeju','thames'])regions.find(r=>r.id===id).license={tier:1,...licenseTiers[1]};
// 0.27 Southeast Asia: Lake Taal (tier 1) and the Matang mangroves (tier 5). Runtime prices and final pool weights.
const taalSurvey='https://inajl.org/index.php/inajl/article/download/23/35/377',matangSurvey='https://smujo.id/biodiv/article/download/23368/9368/1214121',sinica27=n=>'https://fishdb.sinica.edu.tw/taxon/'+n+'-fishdb';
const fish27taal=[
 freshFish({id:'tawilis',name:'菲律賓小沙丁魚',latin:'Sardinella tawilis',min:.01,max:.025,price:42,requiredBait:'worm',rod:0,other:'塔威利沙丁魚',kind:'湖區紀錄魚種',form:'身體銀亮而側扁，背部較深，腹緣有一列稜鱗。',habitat:'成群游於塔爾湖的開闊水域。',diet:'以浮游動物為食。',distribution:'塔爾湖特有的淡水小沙丁魚，湖區漁業的重要漁獲。族群受到漁撈與環境變化影響，當地以封閉漁期等措施保護；國際自然保護聯盟 2018 年評估為瀕危。',food:'當地有油炸、燉煮與椰奶料理。',hint:'這座火山湖特有的銀色小魚，常成群游動。',source:'https://www.nfrdi.da.gov.ph/tpjf/etc/Willette%20et%20al.%20Sardines%20Review.pdf',localNames:[['菲律賓語','tawilis']]}),
 freshFish({id:'blackchintilapia',name:'黑頦帚齒非鯽',latin:'Sarotherodon melanotheron',min:.03,max:.35,price:42,requiredBait:'dough',rod:0,other:'黑頰非鯽',kind:'引入魚種',form:'身體側扁，下頜與喉部常見深色區域。',habitat:'能適應淡水到鹹水的不同鹽度，生活於河口、潟湖與湖泊。',diet:'攝食藻類、有機碎屑等食物。',distribution:'原產非洲西部與中部，塔爾湖已有引入族群。',food:'可食用，亦有養殖與漁業利用。',hint:'下巴帶黑色的雜食慈鯛。',source:'https://animaldiversity.org/accounts/Sarotherodon_melanotheron/',localNames:[['菲律賓語','aroyo']]}),
 freshFish({id:'miopsglassfish',name:'小眼雙邊魚',latin:'Ambassis miops',min:.01,max:.015,price:33,requiredBait:'shrimp',rod:0,other:'少棘雙邊魚、玻璃魚',kind:'湖區紀錄魚種',edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'身體半透明，體側帶銀色光澤，鰭多為透明色。',habitat:'沿岸淡水、河口等環境。',diet:'攝食水生昆蟲及其他小型動物。',distribution:'印度—西太平洋；塔爾湖漁獲調查有種級紀錄。',food:'食用資料待查。',hint:'半透明的小魚，體側閃著細細的銀光。',source:sinica27(381308),localNames:[['菲律賓語','ning-ning']]}),
 freshFish({id:'silvertherapon',name:'鉛色勻鯻',latin:'Leiopotherapon plumbeus',min:.02,max:.08,price:45,requiredBait:'shrimp',rod:0,other:'鉛色鯻、淡水鯻',kind:'湖區紀錄魚種',form:'體形小而側扁，身體銀灰，尾鰭分叉。',habitat:'湖泊與河流等淡水水域。',diet:'食物包括小型甲殼類、昆蟲與部分植物性物質。',distribution:'菲律賓特有的淡水魚，塔爾湖有漁獲紀錄。',food:'菲律賓的原生食用魚。',hint:'銀灰色的小型淡水魚，尾巴分成兩叉。',source:'https://www.fishbase.se/trophiceco/DietCompoSummary.php?dietcode=2298&genusname=Leiopotherapon&speciesname=plumbeus',localNames:[['菲律賓語','ayungin']]}),
 freshFish({id:'manilacatfish',name:'馬尼拉海鯰',latin:'Arius manillensis',min:.05,max:.4,price:51,requiredBait:'meat',rod:0,other:'',kind:'引入魚種',water:'brackish',form:'體表無鱗，口邊有鬚，背鰭後方有脂鰭，尾鰭分叉。',habitat:'菲律賓的湖泊、河流與河口。',diet:'攝食無脊椎動物與小魚。',distribution:'菲律賓魚種，塔爾湖的調查列為引入。',food:'有商業漁業利用。',hint:'嘴邊長鬚、尾巴分叉的鯰魚。',source:'https://fishbase.se/Country/CountrySpeciesSummary.php?c_code=608&id=27634&lang=chinese',localNames:[['菲律賓語','kanduli']]}),
 freshFish({id:'gianttrevally',name:'浪人鰺',latin:'Caranx ignobilis',min:.3,max:5,price:66,requiredBait:'meat',rod:4,other:'牛港鰺',kind:'海水魚種',water:'sea',form:'體形厚實，額部高，尾鰭強健而深叉。',habitat:'沿岸礁區與近海，也會進入河口與相連的湖泊。',diet:'捕食魚與甲殼類。',distribution:'分布於印度—太平洋；進入塔爾湖的魚在當地稱 maliputo，與海洋中的浪人鰺是同一物種。',food:'當地有炭烤與酸湯菜式。',hint:'力氣很大的厚身鰺魚，會從海洋進入湖泊。',source:'https://fishdb.sinica.edu.tw/taxalist?_text_=Caranx+ignobilis',localNames:[['菲律賓語','maliputo']]})
];
const fish27matang=[
 freshFish({id:'archerfish',name:'射水魚',latin:'Toxotes jaculatrix',min:.02,max:.2,price:42,requiredBait:'worm',rod:0,other:'條紋射水魚',kind:'河口魚種',water:'brackish',cookable:false,cookingNote:'本作以觀察與收集為主，不作料理材料。',form:'銀白側扁的身體上有幾道黑色楔形斑，嘴朝向水面。',habitat:'主要生活於紅樹林河口，也能進入淡水。',diet:'白天在水面覓食，會噴水擊落枝葉上的昆蟲。',distribution:'印度—西太平洋的紅樹林與河口；馬當有採集紀錄。',food:'有鮮售與食用紀錄。',hint:'會朝水面上方的昆蟲噴水，身上有黑色條斑。',source:'https://www.fishbase.org/summary/Toxotes_jaculatrix.html',localNames:[['馬來語','sumpit belang']]}),
 freshFish({id:'spottedarcher',name:'七星射水魚',latin:'Toxotes chatareus',min:.03,max:.3,price:42,requiredBait:'worm',rod:0,other:'七星高射炮',kind:'河口魚種',water:'brackish',cookable:false,cookingNote:'本作以觀察與收集為主，不作料理材料。',form:'體側深色斑塊大小交錯，和射水魚是不同物種。',habitat:'河口、河流的林蔭水邊。',diet:'攝食昆蟲，也吃小魚與甲殼類，同樣會噴水捕食。',distribution:'印度—西太平洋的河口與河流；馬當的同一研究曾採到兩種射水魚。',food:'有食用與鮮售紀錄。',hint:'身上大斑與小斑交錯，也會噴水捕蟲。',source:'https://www.fishbase.se/summary/Toxotes-chatareus.html',localNames:[['馬來語','sumpit tanda']]}),
 freshFish({id:'barramundi',name:'尖吻鱸',latin:'Lates calcarifer',min:.3,max:3.5,price:63,requiredBait:'meat',rod:2,other:'金目鱸、盲曹',kind:'河口魚種',water:'brackish',form:'身體延長，口大而略斜，尾鰭圓。',habitat:'常見於沿岸、河口與河流。',diet:'捕食魚與甲殼類。',distribution:'印度—西太平洋；馬當河口的實際採樣有本種紀錄。',food:'重要的食用與養殖魚。',hint:'大嘴、圓尾的銀色魚，常在河口活動。',source:'https://fishdb.sinica.edu.tw/taxalist?_text_=Lates+calcarifer',localNames:[['馬來語','siakap']]}),
 freshFish({id:'fourfingerthreadfin',name:'四指馬鮁',latin:'Eleutheronema tetradactylum',min:.2,max:3,price:60,requiredBait:'shrimp',rod:2,other:'四絲馬鮁',kind:'河口魚種',water:'brackish',form:'身體銀亮，胸鰭下方有四條分離的絲狀鰭條。',habitat:'沿岸與河口的砂泥底。',diet:'吃蝦蟹、魚與蠕蟲。',distribution:'印度—西太平洋；馬當河口有採樣紀錄。',food:'可食用，常作清蒸等料理。',hint:'胸鰭下垂著四條細絲的銀色魚。',source:'https://fishdb.sinica.edu.tw/chi/species.php?id=395540'}),
 freshFish({id:'kammalthryssa',name:'赤鼻稜鯷',latin:'Thryssa kammalensis',min:.01,max:.015,price:39,requiredBait:'dough',rod:0,other:'干麥爾劍鰶、突鼻仔',kind:'海水魚種',water:'sea',cookable:false,cookingNote:'多曬乾或加工利用，不作料理材料。',form:'身體薄而側扁，口大，吻部常帶紅色，腹部有稜鱗。',habitat:'近岸水域，也進入河口。',diet:'主要吃浮游動物。',distribution:'印度—西太平洋；馬當河口採樣有本種。',food:'可食用，常曬乾或作加工用途。',hint:'吻部帶紅、肚子有稜的小魚。',source:sinica27(380984),localNames:[['馬來語','bilis']]}),
 freshFish({id:'spottedseacatfish',name:'斑海鯰',latin:'Arius maculatus',min:.1,max:1.5,price:48,requiredBait:'worm',rod:0,other:'成仔魚、白肉成',kind:'河口魚種',water:'brackish',form:'體表無鱗，口邊有三對鬚，尾鰭深叉；背鰭與胸鰭有硬棘，硬棘具毒腺。',habitat:'河口及沿岸的砂泥底。',diet:'攝食底棲無脊椎動物，食物可含貝類、甲殼類與多毛類。',distribution:'印度—西太平洋；馬當河口有採樣紀錄。',food:'食用魚；硬棘具毒腺，處理時須小心。',hint:'嘴邊三對鬚，背上立著硬棘的河口鯰魚。',source:sinica27(382918)}),
 freshFish({id:'elongateilisha',name:'長鰳',latin:'Ilisha elongata',min:.05,max:.6,price:48,requiredBait:'shrimp',rod:0,other:'鰳魚、曹白魚',kind:'海水魚種',water:'sea',form:'身體長而側扁，腹緣有稜，臀鰭延長，尾鰭分叉。',habitat:'沿海成群活動，也會進入低鹽度河口。',diet:'幼魚吃浮游動物，成魚捕食蝦、小魚等。',distribution:'西太平洋至印度洋；馬當河口有採樣紀錄。',food:'可鮮食或加工利用。',hint:'銀亮而扁長，臀鰭拖得很長的魚。',source:'https://fishdb.sinica.edu.tw/chi/species.php?science=Ilisha+elongata'}),
 freshFish({id:'chacundashad',name:'無齒鰶',latin:'Anodontostoma chacunda',min:.03,max:.3,price:42,requiredBait:'dough',rod:0,other:'厚殼',kind:'河口魚種',water:'brackish',form:'體形較高而側扁，鰓蓋後方有黑斑。',habitat:'常見於沿岸與河口，也進入潮汐河段。',diet:'攝食矽藻、小型甲殼類等。',distribution:'印度—西太平洋；馬當河口有採樣紀錄。',food:'有鮮售、鹽乾與加工利用。',hint:'身體厚而側扁，鰓蓋後有一塊黑斑。',source:'https://www.fishbase.se/summary/Anodontostoma-chacunda.html'}),
 freshFish({id:'whitesardine',name:'葉鯡',latin:'Escualosa thoracata',min:.01,max:.02,price:36,requiredBait:'dough',rod:0,other:'白沙丁',kind:'河口魚種',water:'brackish',form:'身體小而側扁，體側有明亮銀帶，腹緣成稜。',habitat:'沿岸與河口的中上層。',diet:'以小型浮游生物為食。',distribution:'印度—西太平洋；馬當採樣有本種紀錄。',food:'有鮮食與鹽漬利用。',hint:'像薄葉片的小魚，體側有寬寬的銀帶。',source:'https://www.kahaku.go.jp/research/db/zoology/FishGuide/data/fish134.html'})
];
const animals27=[
 seaAnimal({id:'bananaprawn',name:'墨吉對蝦',other:'',latin:'Penaeus merguiensis',category:'crustacean',kind:'海水蝦類',requiredBait:'shrimp',min:.015,max:.08,price:42,water:'brackish',localNames:[],form:'體色淡，額角向前突出，腹部分節，尾端展成尾扇。',habitat:'幼蝦利用河口紅樹林，較大個體活動於近岸淺海。',diet:'攝食有機碎屑與小型動物，食物隨成長階段及環境變化。',distribution:'印度—西太平洋；馬當紅樹林的多年採樣記錄到大量幼蝦。舊文獻的 Fenneropenaeus merguiensis 為同物異名。',food:'有漁業與養殖利用。',hint:'淡色的海蝦，幼蝦常在紅樹林河口長大。',source:'https://crust.biodiv.tw/species.php?science=Penaeus+merguiensis'}),
 seaAnimal({id:'orangemudcrab',name:'欖綠青蟳',other:'欖綠青蟹、紅腳蟳',latin:'Scylla olivacea',category:'crustacean',kind:'河口蟹類',requiredBait:'meat',min:.08,max:.6,price:54,water:'brackish',localNames:[],form:'甲殼寬，螯腳常帶橘紅色，額齒低而圓鈍。',habitat:'住在紅樹林泥地與河口。',diet:'攝食甲殼類、軟體動物與其他動物性食物。',distribution:'印度—西太平洋的紅樹林；馬當有種級調查紀錄。',food:'可食用的青蟳。',hint:'橘紅色的大螯，常在紅樹林泥地出沒。',source:'https://www.tfrin.gov.tw/theme_data.php?id=6752&sub_theme=aquatic&theme=collection'})
];
// Mangrove plants are caught as drifting twigs (drift), not whole trees; they sell and count like the water plants.
const plants27=[
 {id:'apiculatamangrove',name:'正紅樹',other:'',latin:'Rhizophora apiculata',water:'brackish',type:'紅樹林植物',drift:true,form:'紅樹林喬木，常有支柱根；葉片對生而厚，胎生苗在母樹上先發育。本作採集物為漂落的枝葉。',habitat:'河口與潮溝兩側的潮間帶泥地。',distribution:'東南亞至西太平洋的紅樹林；馬當的紅樹組織與落葉研究均有紀錄，是當地重要的紅樹。',source:'https://prosea.prota4u.org/view.aspx?id=3038',localNames:[['馬來語','bakau minyak']]},
 {id:'mucronatamangrove',name:'紅茄冬',other:'',latin:'Rhizophora mucronata',water:'brackish',type:'紅樹林植物',drift:true,form:'具支柱根與厚葉，胎生苗細長；和正紅樹是不同種。本作採集物為漂落的枝葉。',habitat:'潮間帶的泥地。',distribution:'東非至西太平洋的紅樹林；馬當的研究有紀錄。',source:'https://www.mybis.gov.my/sp/29513',localNames:[['馬來語','bakau kurap']]}
];
fish.push(...fish27taal,...fish27matang);animals.push(...animals27);species.push(...fish27taal,...fish27matang,...animals27);plants.push(...plants27);
const note27=(id,text)=>{const s=[...species,...plants].find(x=>x.id===id);s.distribution=s.distribution.replace(/\s*$/,'')+text},addName27=(id,lang,name)=>{const s=species.find(x=>x.id===id);s.localNames||=[];if(!s.localNames.some(([l])=>l===lang))s.localNames.push([lang,name])};
for(const id of ['milkfish','niletilapia','midas','tankgoby','jaguar','redevil','hydrilla'])note27(id,'菲律賓塔爾湖亦有紀錄。');
for(const id of ['greenbackmullet','scat','milkfish'])note27(id,'馬來西亞馬當紅樹林亦有紀錄。');
note27('jaguar','在塔爾湖是捕食原生魚的入侵種，可在當地繳交賞金。');
for(const [id,name] of [['milkfish','bangus'],['niletilapia','tilapia'],['midas','pula'],['tankgoby','biya'],['jaguar','dugong']])addName27(id,'菲律賓語',name);
addName27('scat','馬來語','kitang');
// Bounties: only the jaguar guapote gains a bounty water at Lake Taal.
species.find(s=>s.id==='jaguar').bountyAt=[...taiwanWaters,'taal'];
licenseTiers[5]={cost:20000,atlas:120};
regions.push(
 {id:'taal',name:'塔爾湖',area:'菲律賓・八打雁',lat:14.02,lon:121.01,water:'火山湖・淡水',license:{tier:1,...licenseTiers[1]},
  desc:'塔爾湖位於菲律賓呂宋島的火山地景之中，湖水經潘西皮特河通向海洋。湖裡既有只在這裡生活的淡水沙丁魚，也有進入淡水的虱目魚、浪人鰺，以及人為引入的慈鯛。不同來源的魚群，組成了這座湖泊的漁業風景。',
  pool:{tawilis:22,milkfish:12,niletilapia:12,blackchintilapia:10,miopsglassfish:10,silvertherapon:8,midas:6,tankgoby:6,manilacatfish:5,jaguar:3,gianttrevally:3,redevil:3},
  animals:{},weeds:{hydrilla:45,hyacinth:35,waterlettuce:20},
  source:taalSurvey},
 {id:'matang',name:'馬當紅樹林',area:'馬來西亞・霹靂',lat:4.85,lon:100.63,water:'河口紅樹林・半淡鹹水',license:{tier:5,...licenseTiers[5]},
  desc:'馬當位於馬來半島西北岸，紅樹林、潮溝與泥灘沿著河口展開。射水魚在林緣水面覓食，對蝦與青蟳藏身淺水和泥地；河口也是許多沿海魚的育幼場。本作釣點概括當地相連的河口水域。',
  pool:{kammalthryssa:20,greenbackmullet:12,scat:10,spottedseacatfish:10,archerfish:8,chacundashad:8,elongateilisha:7,spottedarcher:6,whitesardine:6,milkfish:5,barramundi:4,fourfingerthreadfin:4},
  animals:{bananaprawn:7,orangemudcrab:5},weeds:{apiculatamangrove:65,mucronatamangrove:35},
  source:matangSurvey});
for(const id of ['taal','matang']){const r=regions.find(r=>r.id===id);r.basePool={...r.pool}}
Object.assign(world.weatherOdds,{taal:[40,30,30],matang:[30,35,35]});
world.flavor.taal={
 phase:{dawn:['湖面浮著薄霧，遠處的火山輪廓逐漸清楚。','早起的漁船從岸邊划出，船槳攪碎了湖面的倒影。'],day:['日光落在開闊湖面，近岸傳來小船的聲音。','陽光把湖水照得發亮，遠處的山坡一片青綠。'],dusk:['湖水轉成暖色，岸邊逐漸安靜。','歸來的小船靠岸，船上的人把漁網攤開晾著。'],night:['山影沉入夜色，湖岸的燈光映在水面。','夜裡的湖風帶著涼意，遠處偶爾有魚躍出水面。']},
 weather:{sunny:['風把湖面推成細碎亮點。','晴空下，火山口的輪廓映在湖水裡。'],cloudy:['雲影慢慢越過湖心。','雲層壓低，對岸的山稜只剩一道淡淡的灰線。'],rain:['雨點密密落在湖面，岸邊的聲音變得模糊。','一陣急雨掃過湖面，很快又往山那頭移去。']},
 facts:['塔爾湖是位於呂宋島的火山湖。','塔爾湖的湖水經潘西皮特河流向海洋。','菲律賓小沙丁魚是塔爾湖特有的淡水沙丁魚。','2026 年當地仍在 3～4 月實施菲律賓小沙丁魚的封閉漁期；遊戲內的垂釣不代表現行規定。']};
world.flavor.matang={
 phase:{dawn:['潮溝映著林影，泥灘上的聲音逐漸清楚。','晨光從紅樹林後方透出來，水面還很平靜。'],day:['陽光從紅樹枝葉間落下，水面明暗交錯。','退下的水在泥灘上留下一道道細細的水痕。'],dusk:['河口轉成金褐色，小船沿水道返航。','林間的鳥群陸續歸巢，叫聲此起彼落。'],night:['林邊暗了下來，潮水仍沿著樹根流動。','夜裡的水道只剩漁村零星的燈光。']},
 weather:{sunny:['紅樹葉片反著日光，水道上吹來海風。','烈日下的泥灘冒著淡淡的水氣。'],cloudy:['低雲遮住日光，泥灘與水面連成灰色。','雲層厚了起來，林子裡顯得更暗。'],rain:['陣雨掃過林緣，雨水順著葉尖落下。','雨打在寬闊的水道上，濺起一片細白的水花。']},
 tide:{rising:['潮水深入支柱根之間，帶來漂落枝葉。'],falling:['水線慢慢降低，根間露出濕亮泥地。']},
 facts:['馬當位於馬來西亞霹靂州的西岸。','馬當相連的河口水域是許多沿海魚蝦的育幼與覓食場所。','射水魚與七星射水魚在馬當都有採集紀錄。','正紅樹與紅茄冬是馬當重要的紅樹植物。']};
const recipes27=[
 {id:'crispy-tawilis',name:'酥炸塔威利沙丁魚',orig:'crispy fried tawilis',fish:'tawilis',fishes:['tawilis'],method:'fry',tier:'home',effect:'double',amount:.08,casts:40,cost:15,preparation:'整尾油炸，配番茄與鹹蛋',about:'塔爾湖周邊常見的小魚菜，把塔威利沙丁魚炸得酥脆，配番茄與鹹蛋。',cuisine:'seasia',origin:'菲律賓・八打雁'},
 {id:'sinigang-maliputo',name:'浪人鰺酸湯',orig:'sinigang na maliputo',fish:'gianttrevally',fishes:['gianttrevally'],method:'soup',tier:'home',effect:'speed',amount:.08,casts:60,cost:15,preparation:'煮成帶酸味的魚湯',about:'把當地稱作 maliputo 的浪人鰺煮成帶酸味的魚湯，是塔爾一帶的魚料理。',cuisine:'seasia',origin:'菲律賓・八打雁'},
 {id:'siakap-tiga-rasa',name:'三味尖吻鱸',orig:'siakap tiga rasa',fish:'barramundi',fishes:['barramundi'],method:'fry',tier:'home',effect:'double',amount:.1,casts:60,cost:15,preparation:'炸魚淋上酸甜辣醬汁',about:'尖吻鱸配上酸、甜、辣交織的醬汁，加入番茄、鳳梨與香料，是馬來西亞常見的魚菜。',cuisine:'seasia',origin:'馬來西亞'}
];
for(const r of recipes27){r.desc=mealDesc(r);recipes.push(r)}
// Edible new species without a sourced dish of their own join the general recipes; deep-frying only takes those up to 0.5 kg.
const general27=['blackchintilapia','silvertherapon','manilacatfish','fourfingerthreadfin','spottedseacatfish','elongateilisha','chacundashad','whitesardine','bananaprawn','orangemudcrab'];
for(const r of recipes.filter(r=>r.cuisine==='basic'&&r.id!=='deepfry')){r.fishes.push(...general27);if(Array.isArray(r.fish))r.fish.push(...general27)}
{const r=recipes.find(r=>r.id==='deepfry'),extra=general27.filter(id=>species.find(f=>f.id===id).max<=.5),fishOnly=extra.filter(id=>fish.some(f=>f.id===id));r.fishes.splice(r.fishes.length-friedAnimals.length,0,...fishOnly);r.fishes.push(...extra.filter(id=>!fishOnly.includes(id)));r.fish=[...r.fishes]}
const dishes27=[
 {id:'dine-taal-tawilis',region:'taal',name:'酥炸塔威利沙丁魚',orig:'crispy fried tawilis',method:'fry',tier:'basic',effect:'double',amount:.08,casts:40,price:45,preparation:'整尾油炸，配番茄與鹹蛋',about:'塔爾湖周邊常見的小魚菜，把塔威利沙丁魚炸得酥脆，配番茄與鹹蛋。',art:'crispy-tawilis'},
 {id:'dine-taal-maliputo',region:'taal',name:'浪人鰺酸湯',orig:'sinigang na maliputo',method:'soup',tier:'classic',effect:'lure',amount:2.5,casts:80,price:270,preparation:'煮成帶酸味的魚湯',about:'把當地稱作 maliputo 的浪人鰺煮成帶酸味的魚湯，是塔爾一帶的魚料理。',art:'sinigang-maliputo'},
 {id:'dine-matang-meeudang',region:'matang',name:'十八丁蝦麵',orig:'mee udang Kuala Sepetang',method:'soup',tier:'basic',effect:'speed',amount:.05,casts:40,price:45,preparation:'大蝦與麵條同煮成濃湯麵',about:'十八丁漁村的蝦麵以大蝦與濃郁湯汁著稱，麵條吸附蝦味，連湯一起端上桌。',art:'mee-udang'},
 {id:'dine-matang-siakap',region:'matang',name:'三味尖吻鱸',orig:'siakap tiga rasa',method:'fry',tier:'classic',effect:'lure',amount:2.5,casts:80,price:270,preparation:'炸魚淋上酸甜辣醬汁',about:'尖吻鱸配上酸、甜、辣交織的醬汁，加入番茄、鳳梨與香料，是馬來西亞常見的魚菜。',art:'siakap-tiga-rasa'}
];
for(const d of dishes27){d.desc=mealDesc(d);dishes.push(d)}
restaurants.taal={name:'湖岸小食堂',dishes:dishes27.filter(d=>d.region==='taal')};restaurants.matang={name:'潮溝食堂',dishes:dishes27.filter(d=>d.region==='matang')};
// 0.27 refill: Kenting and Tolo Harbour grow from 12 to 20 fish each. Runtime prices and final pool weights.
const sinicaSp27=q=>'https://fishdb.sinica.edu.tw/chi/species.php?'+q,twNote27={localNameNote:'未列出的台語與客語名稱待查。'};
const fish27kenting=[
 seaFish({id:'blackspotsergeant',name:'梭地豆娘魚',latin:'Abudefduf sordidus',min:.04,max:.25,price:42,requiredBait:'dough',rod:0,other:'',cookable:false,cookingNote:'一般不是主要漁獲，本作不作料理材料。',form:'身體卵圓而側扁，灰白至淡黃色，身側帶有深灰色橫帶，尾柄上方有一枚明顯的黑圓斑。',habitat:'淺水岩礁與浪花拍打的岸邊，幼魚也會進入潮池。',diet:'以藻類為主食。',distribution:'分布於印度至太平洋，臺灣沿岸與離島有紀錄；墾丁垂釣監測亦有記錄。',food:'有食用紀錄，但通常不是主要漁獲，本作不作料理材料。',hint:'淡色身體帶著灰色橫紋，尾巴前方有一枚黑圓斑。',source:sinica27(382311),localNames:[],...twNote27}),
 seaFish({id:'sevenbarsergeant',name:'七帶豆娘魚',latin:'Abudefduf septemfasciatus',min:.04,max:.25,price:42,requiredBait:'dough',rod:0,other:'',cookable:false,cookingNote:'一般不是主要漁獲，本作不作料理材料。',form:'灰白至黃褐色的側扁魚，身側有六至七道寬暗帶，胸鰭基部帶黑點，尾柄上方沒有梭地豆娘魚的黑圓斑。',habitat:'淺海岩礁、潮池與潟湖，具有領域性。',diet:'攝食底藻和小型無脊椎動物。',distribution:'廣布印度至太平洋，臺灣南部、北部及部分離島有紀錄；墾丁垂釣監測亦有記錄。',food:'可食用，但通常不是主要漁獲，本作不作料理材料。',hint:'身側排著寬寬的灰色橫帶，尾柄上沒有黑圓斑。',source:sinica27(382309),localNames:[],...twNote27}),
 seaFish({id:'convictsurgeon',name:'綠刺尾鯛',latin:'Acanthurus triostegus',min:.05,max:.4,price:48,requiredBait:'dough',rod:0,other:'',cookable:false,cookingNote:'可能帶熱帶海魚毒，本作不作料理材料。',form:'身體側扁，淺灰綠色至黃綠色，頭部與身側排列黑色橫帶；尾柄兩側各有銳利硬棘。',habitat:'潟湖及淺礁，幼魚可見於潮池，覓食時會聚成魚群。',diet:'主要啃食絲狀藻類。',distribution:'分布於印度至太平洋，臺灣南部與多處沿岸、離島有紀錄；墾丁垂釣監測亦有記錄。',food:'有食用利用紀錄，也有可能帶熱帶海魚毒的記載，本作不作料理材料。',hint:'淡綠色身體被黑色橫帶分開，尾柄兩側藏著硬棘。',source:sinicaSp27('gen=Acanthurus&spe=triostegus'),localNames:[],...twNote27}),
 seaFish({id:'orientalbutterfly',name:'耳帶蝴蝶魚',latin:'Chaetodon auripes',min:.03,max:.2,price:30,requiredBait:'shrimp',rod:0,other:'',edible:false,cookable:false,cookingNote:'觀賞魚，不作食用或料理。',form:'身體高而側扁，黃褐色的體側布著細暗紋，眼睛有黑色眼帶，後方接著白帶，背鰭與臀鰭帶黑緣。',habitat:'岩礁、珊瑚礁、碎石區與防波堤附近。',diet:'攝食多毛類、小型甲殼類、螺類與藻類。',distribution:'分布於日本至臺灣一帶，臺灣各地礁岸有紀錄；墾丁垂釣監測亦有記錄。',food:'主要作觀賞用途，不作食用或料理。',hint:'黃褐色的高身小魚，黑色眼帶後方緊接著一道白帶。',source:sinicaSp27('gen=Chaetodon&spe=auripes'),localNames:[],...twNote27}),
 seaFish({id:'kleinbutterfly',name:'克氏蝴蝶魚',latin:'Chaetodon kleinii',min:.02,max:.12,price:30,requiredBait:'shrimp',rod:0,other:'',edible:false,cookable:false,cookingNote:'觀賞魚，不作食用或料理。',form:'身體呈卵圓形，底色淡黃，頭部有黑色眼帶，體側另帶著兩道不甚明顯的暗帶，腹鰭黑色。',habitat:'潟湖、海峽與面海珊瑚礁，常在礁盤及沙底附近活動。',diet:'攝食小型無脊椎動物、珊瑚蟲、浮游動物及藻類碎屑。',distribution:'廣布印度至太平洋，臺灣礁岸有紀錄；墾丁垂釣監測亦有記錄。',food:'主要作觀賞用途，不作食用或料理。',hint:'淡黃色的卵圓小魚，黑色眼帶配著黑色腹鰭。',source:sinicaSp27('id=381580'),localNames:[],...twNote27}),
 seaFish({id:'stareyeparrot',name:'卡羅鸚鯉',latin:'Calotomus carolinus',min:.15,max:1.5,price:51,requiredBait:'dough',rod:0,other:'',form:'身體略長而側扁，外側牙齒彼此分開。雄魚呈綠褐至紅褐色，眼睛周圍與吻部有放射狀橘紅紋；雌魚多為棕色並帶白點。',habitat:'礁台、潟湖、海草床與礁沙混合區，單獨或成小群活動。',diet:'攝食底棲藻類及海草。',distribution:'廣布印度至太平洋，臺灣東部、南部及離島有紀錄；墾丁垂釣監測亦有記錄。',food:'有食用紀錄，可蒸煮或紅燒。',hint:'眼睛周圍散開橘紅色細紋，嘴前的牙齒並未連成齒板。',source:sinica27(382435),localNames:[],...twNote27}),
 seaFish({id:'japaneseparrot',name:'日本綠鸚哥魚',latin:'Chlorurus japanensis',min:.08,max:.6,price:51,requiredBait:'dough',rod:0,other:'',form:'身體略長，牙齒形成齒板。初期個體大多為褐色、尾鰭橘紅；終期個體帶黃、藍綠與暗色區塊，眼周有藍色放射紋。',habitat:'面海的珊瑚礁與岩礁。',diet:'以底藻為食。',distribution:'分布於太平洋，臺灣南部、西部與部分離島有紀錄；墾丁垂釣監測亦有記錄。',food:'有食用利用紀錄。',hint:'嘴前像覆著一片齒板，成長階段不同，身上的顏色也差很多。',source:sinica27(382439),localNames:[],...twNote27}),
 seaFish({id:'christmaswrasse',name:'三葉錦魚',latin:'Thalassoma trilobatum',min:.05,max:.4,price:48,requiredBait:'shrimp',rod:0,other:'',form:'體形稍長而側扁，橙褐色身側有藍綠色縱帶與短橫紋，頭部橙褐色，胸鰭基部沒有 Y 形斑。',habitat:'潮間帶至淺水岩礁，常在湧浪拍打的礁緣與岩岸巡游。',diet:'捕食小蝦、小蟹、軟體動物等。',distribution:'廣布印度至太平洋，臺灣礁岸有紀錄；墾丁垂釣監測亦有記錄。',food:'可食用，魚肉較易鬆散。',hint:'橙褐色身側交錯著藍綠色長短紋，胸鰭旁沒有 Y 形記號。',source:sinica27(382036),localNames:[],...twNote27})
];
const fish27tolo=[
 seaFish({id:'baldglassy',name:'眶棘雙邊魚',latin:'Ambassis gymnocephalus',min:.002,max:.015,price:30,requiredBait:'shrimp',rod:0,other:'裸頭雙邊魚',kind:'河口魚種',water:'brackish',edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'身體小而側扁，銀白半透明，可以隱約看見體內構造。',habitat:'河口與紅樹林附近，常成群活動。',diet:'捕食小型無脊椎動物與落水昆蟲。',distribution:'印度至西太平洋的河口魚；香港吐露港的泥灘與沙灘採樣均有紀錄。',food:'食用資料待查。',hint:'銀白色的小魚身體半透明，常成群在淺水裡閃動。',source:'https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=27416',localNames:[['粵語','透明梳蘿']]}),
 seaFish({id:'orientalsillago',name:'星沙鮻',latin:'Sillago aeolus',min:.04,max:.35,price:51,requiredBait:'shrimp',rod:0,other:'',kind:'河口魚種',water:'brackish',form:'身體細長，吻尖，體側散著不規則暗斑，第一背鰭上半部暗色，胸鰭基部有黑斑。',habitat:'沿岸、內灣及河口的砂泥底，受驚時會躲進沙中。',diet:'攝食多毛類、小蝦與其他底棲甲殼類。',distribution:'印度至西太平洋魚種；香港吐露港兩個淺水採樣站均有紀錄。',food:'食用魚，有裹粉油炸的利用紀錄。',hint:'尖吻長身的沙底小魚，身側帶污斑，胸鰭根部有黑點。',source:sinicaSp27('id=382624'),localNames:[]}),
 seaFish({id:'slendermojarra',name:'長身鑽嘴魚',latin:'Gerres oblongus',min:.03,max:.35,price:45,requiredBait:'shrimp',rod:0,other:'',form:'身體銀白而較修長，背部淡褐，嘴巴可以向下伸出，背鰭帶黑緣，尾鰭深叉。',habitat:'沿岸砂泥底。',diet:'以嘴巴吸取底部的小型無脊椎動物。',distribution:'印度至西太平洋沿岸魚；香港吐露港的泥灘與沙灘採樣均有紀錄。',food:'可食用，有煎炸與醃漬利用。',hint:'銀白的修長小魚，覓食時嘴巴會向下伸成一截小管。',source:sinica27(381684),localNames:[]}),
 seaFish({id:'chameleongoby',name:'紋縞鰕虎',latin:'Tridentiger trigonocephalus',min:.003,max:.025,price:30,requiredBait:'shrimp',rod:0,other:'',kind:'河口魚種',water:'brackish',edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'身體細長，頭部較寬，身側有深色縱帶，頭側帶白點，腹鰭連成吸盤狀。',habitat:'河口、港灣及沙泥底岸邊。',diet:'在底部尋找小魚、小蝦與其他無脊椎動物。',distribution:'西太平洋沿岸魚；香港吐露港兩個淺水採樣站均有紀錄。',food:'食用資料待查。',hint:'頭側帶白點的小魚，貼近水底活動，腹下藏著吸盤。',source:sinica27(381864),localNames:[]}),
 seaFish({id:'spottedsicklefish',name:'斑點雞籠鯧',latin:'Drepane punctata',min:.1,max:1.5,price:54,requiredBait:'shrimp',rod:0,other:'',form:'身體銀灰、很高而側扁，身側的黑點排成多道橫列，胸鰭細長而彎曲，像一把鐮刀。',habitat:'溫暖沿岸的礁石與砂泥交會處，也會進入河口。',diet:'主要攝食底棲無脊椎動物。',distribution:'印度至西太平洋沿岸魚；香港吐露港的沙灘採樣有幼魚紀錄。',food:'食用魚。',hint:'銀灰色的高身魚，黑點排成一列列，胸鰭又長又彎。',source:sinica27(381643),localNames:[]}),
 seaFish({id:'pickhandlebarracuda',name:'斑條金梭魚',latin:'Sphyraena jello',min:.2,max:3.5,price:57,requiredBait:'meat',rod:2,other:'',cookable:false,cookingNote:'熱帶海魚毒報告尚待確認，本作暫不作料理材料。',form:'體形像梭子，吻尖而口大，下頜向前突出，身側有暗色橫帶，尾鰭深叉且帶黃色。',habitat:'近岸礁區、內灣、潟湖與河口。',diet:'追捕魚類和頭足類。',distribution:'印度至西太平洋魚種；香港吐露港的沙灘採樣有幼魚紀錄。',food:'有食用利用紀錄，熱帶海魚毒報告尚待確認，本作暫不作料理材料。',hint:'長身尖吻的追獵者，身上有暗色橫帶，分叉尾巴泛黃。',source:sinica27(382649),localNames:[['粵語','竹簽']]})
];
fish.push(...fish27kenting,...fish27tolo);species.push(...fish27kenting,...fish27tolo);
for(const id of ['fourline','mudskipper'])note27(id,'香港吐露港的淺水採樣有紀錄。');
{const k={sergeant:10,wrasse:9,longfingrouper:4,squirrelfish:4,fusilier:8,bigeyetrevally:3,rabbitfish:4,mono:3,fivestripewrasse:4,flagtail:3,hawkfish:4,manybargoatfish:4,blackspotsergeant:8,sevenbarsergeant:6,convictsurgeon:5,orientalbutterfly:3,kleinbutterfly:3,stareyeparrot:5,japaneseparrot:4,christmaswrasse:6},
 t={silversillago:15,blackporgy:3,yellowfin:5,sarba:3,mullet:4,terapon:9,chelon:4,largescalemullet:3,oyena:4,puffer:2,dottedshad:5,whipfinmojarra:3,baldglassy:10,orientalsillago:6,slendermojarra:5,chameleongoby:5,spottedsicklefish:4,pickhandlebarracuda:2,fourline:5,mudskipper:3};
 for(const [id,pool] of [['kenting',k],['tolo',t]]){const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...pool}}}
// Cookable refill fish join the general recipes; those up to 0.5 kg also fry.
const general27b=['stareyeparrot','japaneseparrot','christmaswrasse','orientalsillago','slendermojarra','spottedsicklefish'];
for(const r of recipes.filter(r=>r.cuisine==='basic'&&r.id!=='deepfry')){r.fishes.splice(r.fishes.length-2,0,...general27b);if(Array.isArray(r.fish))r.fish.splice(r.fish.length-2,0,...general27b)}
{const r=recipes.find(r=>r.id==='deepfry'),extra=general27b.filter(id=>fish.find(f=>f.id===id).max<=.5);r.fishes.splice(r.fishes.length-friedAnimals.length-1,0,...extra);r.fish=[...r.fishes]}
// 0.27 refill B2: Lake Constance from 11 and the Greifswald lagoon from 9 to 20 fish each, plus the spiny-cheek crayfish. Runtime prices and final pool weights.
const ibkf='https://ibkf.org/fische-des-bodensees-2/',peeneFish='https://www.kuestendaten.de/media/zdm/portalosk/Projekte/Peenestrom/Planunterlagen_Peenestrom/G_Fachgutachten/G_4_Fachgutachten_Fische/G_4_Fachgutachten_Fische.pdf';
const fish27b=[
 freshFish({id:'wels',name:'歐鯰',latin:'Silurus glanis',min:1,max:8,price:57,requiredBait:'meat',rod:4,other:'六鬚鯰、歐洲巨鯰',kind:'湖區紀錄魚種',form:'身體延長，前段圓、後段側扁；頭大而扁，嘴很寬，上頜一對長鬚，下頜另有兩對短鬚。背鰭很小，沒有脂鰭。',habitat:'溫暖、水草茂密的靜水或緩流，白天躲在河床洞穴與沉木下。',diet:'食性很廣，以蠕蟲、螺類、昆蟲與甲殼類為主，大型個體也吃魚與水鳥。',distribution:'原產中歐、東歐、南歐至中亞，已擴散到西歐。牠是博登湖最大的原生掠食魚，近年數量增加，部分被歸因於氣候暖化。',food:'歐洲有養殖並在市場販售，但肉質評價不一；卵有毒，不可食用。',hint:'寬扁的大嘴旁垂著兩條長鬚，背上只有一片小小的背鰭。',source:'https://zh.wikipedia.org/wiki/Silurus_glanis',localNames:[['德語','Wels']]}),
 freshFish({id:'bleak',name:'歐白魚',latin:'Alburnus alburnus',min:.01,max:.06,price:33,requiredBait:'dough',rod:0,other:'',kind:'湖區紀錄魚種',cookable:false,cookingNote:'體形小，多作釣餌，本作不作料理材料。',form:'身體細長側扁，全身銀白，是成群活動的小魚。',habitat:'湖泊開闊水域與中大型河流，成魚在水面附近結群，冬天聚集到回水與靜水處。',diet:'主要吃浮游甲殼類，也吃落到水面的昆蟲。',distribution:'庇里牛斯山與阿爾卑斯山以北的大部分歐洲，東至烏拉爾河；博登湖有紀錄。',food:'體形小，只有少量漁獲，多作掠食魚的釣餌；牠的鱗片曾被用來製作仿珍珠塗料。本作不作料理材料。',hint:'成群在水面下閃著銀光的細長小魚。',source:fb26('Alburnus alburnus'),localNames:[['德語','Ukelei、Laube']]}),
 freshFish({id:'silverbream',name:'粗鱗鯿',latin:'Blicca bjoerkna',min:.05,max:.5,price:36,requiredBait:'dough',rod:0,other:'',kind:'湖區紀錄魚種',cookable:false,cookingNote:'少受消費者青睞，本作不作料理材料。',form:'身體高而側扁，銀白色，像小一號的鯿魚；胸鰭與腹鰭基部帶橙紅色。',habitat:'成群生活在湖泊、水庫及水流平緩的河段，偏好淺而溫暖的低地湖泊；主要在夜間活動。',diet:'吃底棲無脊椎動物。',distribution:'歐洲至裏海、鹹海流域；博登湖有紀錄，族群偏弱。',food:'只有少量漁獲，釣客與消費者都少有興趣，本作不作料理材料。',hint:'像小一號的鯿魚，胸鰭和腹鰭的根部帶著橙紅。',source:fb26('Blicca bjoerkna'),localNames:[['德語','Güster、Blicke']]}),
 freshFish({id:'ruffe',name:'梅花鱸',latin:'Gymnocephalus cernua',min:.02,max:.15,price:33,requiredBait:'worm',rod:0,other:'',kind:'水域紀錄魚種',water:'brackish',cookable:false,cookingNote:'少作漁獲，本作不作料理材料。',form:'小型鱸類，黃褐色身側散著許多不規則暗斑；兩片背鰭相連，前段是一排硬棘。',habitat:'富營養的湖泊、河口與半鹹水湖，偏好軟底的靜水或緩流，在深湖裡待得比河鱸更深。',diet:'靠側線感知獵物，夜裡也能覓食，吃浮游動物、搖蚊幼蟲、水蚯蚓與端足類，也會吃魚卵。',distribution:'歐洲至西伯利亞。博登湖原本沒有這種魚，1987 年首次發現，此後一度大量擴散，近年數量下降；格賴夫斯瓦爾德潟湖亦有紀錄。',food:'可食用，但多為少量漁獲或釣餌，博登湖沒有商業利用，本作不作料理材料。',hint:'黃褐色的小鱸魚，身上散著暗斑，背鰭立著一排硬棘。',source:fb26('Gymnocephalus cernua'),localNames:[['德語','Kaulbarsch']]}),
 freshFish({id:'gudgeon',name:'鮈',latin:'Gobio gobio',min:.01,max:.06,price:33,requiredBait:'worm',rod:0,other:'',kind:'湖區紀錄魚種',cookable:false,cookingNote:'多作釣餌，本作不作料理材料。',form:'身體細長，嘴巴朝下，嘴角一對短鬚延伸到眼睛下方。',habitat:'幾乎各種沙底的河川與湖泊都能生活，成群活動，多在白天覓食。',diet:'吃昆蟲幼蟲、小型螺貝與甲殼類。',distribution:'歐亞大陸溫帶淡水；博登湖的沿岸淺水有紀錄。',food:'有少量漁獲，多半拿來當釣餌，本作不作料理材料。',hint:'貼著沙底游動的小魚，嘴角垂著一對短鬚。',source:fb26('Gobio gobio'),localNames:[['德語','Gründling']]}),
 seaFish({id:'atlanticcod',name:'大西洋鱈',latin:'Gadus morhua',min:.3,max:3,price:48,requiredBait:'meat',rod:2,other:'',form:'背部褐色、綠色至灰色，腹部銀白；下頜有一根明顯的觸鬚，淺色側線在胸鰭上方向上拱起。',habitat:'從岸邊到大陸棚都有分布，幼魚偏好海草床、礫石與岩石區的淺水，成魚多在較深、較冷的水域。',diet:'雜食，多在清晨與黃昏捕食無脊椎動物與魚。',distribution:'北大西洋與波羅的海；波羅的海的族群在三月前後於 20 公尺以深的海底產卵。格賴夫斯瓦爾德潟湖的歷史名錄將牠列為主要漁獲之一。',food:'重要的食用魚，可鮮食、乾製、鹽漬或煙燻。',hint:'下巴垂著一根觸鬚，淺色側線在胸鰭上方拱起。',source:fb26('Gadus morhua'),localNames:[['德語','Dorsch、Kabeljau']]}),
 seaFish({id:'turbot',name:'大菱鮃',latin:'Scophthalmus maximus',min:.3,max:3,price:63,requiredBait:'meat',rod:2,other:'',form:'身體扁平，近乎圓形；朝上的有眼側沒有鱗片，散布粗大的骨質瘤突。',habitat:'沙、岩石或混合的海底。',diet:'主要捕食玉筋魚、鰕虎等底棲魚，也吃較大的甲殼類與雙殼貝。',distribution:'地中海與歐洲沿岸至北極圈，波羅的海大部分海域也有半鹹水族群；格賴夫斯瓦爾德潟湖的歷史漁獲有紀錄。',food:'備受重視的高級食用魚，也有養殖。',hint:'圓盤似的扁魚，朝上的一面沒有鱗，只有粗粗的骨瘤。',source:fb26('Scophthalmus maximus'),localNames:[['德語','Steinbutt']]}),
 seaFish({id:'eelpout',name:'綿鳚',latin:'Zoarces viviparus',min:.03,max:.4,price:39,requiredBait:'worm',rod:0,other:'',form:'身體細長而向後漸尖，頭與嘴寬、嘴唇厚；長長的背鰭與臀鰭一路連到尾鰭，小鱗埋在黏滑的皮膚裡。體色多變，常見背部灰褐、腹部偏黃，身側與背鰭有一兩列斑點。',habitat:'沿岸淺海的底棲魚，從水面附近到約 40 公尺深。',diet:'吃甲殼類等底棲無脊椎動物，也吃魚卵與仔魚。牠是胎生魚，夏末交配後，母魚直接產下 30～400 尾已發育的小魚。',distribution:'東北大西洋、白海、北海與波羅的海；2006 年格賴夫斯瓦爾德潟湖的採樣中相當常見。',food:'可食用。',hint:'滑溜的長身魚，長背鰭一路連到尾巴；母魚直接生下小魚。',source:'https://zh.wikipedia.org/wiki/Zoarces_viviparus',localNames:[['德語','Aalmutter']]})
];
const animal27b=freshAnimal({id:'spinycheekcrayfish',name:'利莫斯螯蝦',other:'',latin:'Faxonius limosus',kind:'淡水螯蝦',requiredBait:'meat',min:.02,max:.08,price:42,bounty:60,bountyAt:['bodensee'],cookable:false,cookingNote:'當地食用情況尚不明，不作料理材料。',form:'中小型螯蝦，頭胸甲兩側在頸溝前後各有成排尖棘；腹節帶紅褐色橫帶，螯較小，螯尖橙紅色。',habitat:'緩流與靜水的岸邊，對水質與水溫的耐受度比歐洲原生螯蝦高。',diet:'食性資料待查。',distribution:'原產北美東部，引入歐洲後廣泛擴散，並帶有會讓原生螯蝦大量死亡的螯蝦瘟疫，列在歐盟入侵種管制名單。博登湖西部相當常見，湖中的食物網因牠而明顯改變。',food:'當地食用情況尚不明，本作不作料理材料。',hint:'頭胸甲兩側長著成排小刺的螯蝦，螯尖是橙紅色。',source:'https://www.bs.ch/wsu/aue/abteilung-gewaesser-und-boden/arten-im-und-am-gewaesser/kamberkrebs',localNames:[['德語','Kamberkrebs']]});
fish.push(...fish27b);animals.push(animal27b);species.push(...fish27b,animal27b);
note27('europeaneel','博登湖的族群靠放流維持，被視為這種極危魚類的避難水域；在格賴夫斯瓦爾德潟湖則是主要漁獲之一。');
note27('stickleback','博登湖的族群可能在二十世紀初隨觀賞魚引入，2013 年起成為上湖開闊水域數量最多的魚；格賴夫斯瓦爾德潟湖亦有紀錄，曾有一網捕到極高密度的魚群。');
note27('chub','博登湖亦有分布，密度中等，沒有商業利用。');
note27('dace','博登湖亦有分布，阿爾根河口曾是牠的產卵場。');
note27('smelt','2006 年格賴夫斯瓦爾德潟湖的採樣中，曾在湖心淺灘捕到大群。');
for(const id of ['sprat','commongoby','sandgoby'])note27(id,'格賴夫斯瓦爾德潟湖亦有紀錄。');
note27('commonwhitefish','波羅的海沿岸的族群也會進入格賴夫斯瓦爾德潟湖。');
for(const [id,name] of [['europeaneel','Aal'],['stickleback','Dreistachliger Stichling'],['chub','Döbel（瑞士稱 Alet）'],['dace','Hasel'],['smelt','Stint'],['sprat','Sprotte'],['commongoby','Strandgrundel'],['sandgoby','Sandgrundel'],['commonwhitefish','Ostseeschnäpel']])addName27(id,'德語',name);
{const b={perch:15,commonbream:6,carp:5,blaufelchen:10,pike:2,browntrout:2,zander:2,alpinechar:6,roach:10,tench:4,burbot:3,bleak:8,silverbream:4,ruffe:6,gudgeon:3,wels:2,europeaneel:3,stickleback:4,chub:2,dace:3},
 g={herring:22,flounder:11,perch:9,garfish:8,pike:3,zander:2,roach:7,commonbream:3,browntrout:1,europeaneel:3,smelt:6,sprat:4,commongoby:5,sandgoby:3,stickleback:3,commonwhitefish:2,ruffe:3,atlanticcod:2,turbot:1,eelpout:2};
 for(const [id,pool] of [['bodensee',b],['greifswald',g]]){const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...pool}}
 regions.find(r=>r.id==='bodensee').animals.spinycheekcrayfish=5}
// Cookable B2 fish join the general recipes; the eelpout (max 0.4 kg) also fries.
const general27c=['wels','atlanticcod','turbot','eelpout'];
for(const r of recipes.filter(r=>r.cuisine==='basic'&&r.id!=='deepfry')){r.fishes.splice(r.fishes.length-2,0,...general27c);if(Array.isArray(r.fish))r.fish.splice(r.fish.length-2,0,...general27c)}
{const r=recipes.find(r=>r.id==='deepfry'),extra=general27c.filter(id=>fish.find(f=>f.id===id).max<=.5);r.fishes.splice(r.fishes.length-friedAnimals.length-1,0,...extra);r.fish=[...r.fishes]}
// 0.27 refill B3: Lake Biwa and Lake Kasumigaura from 14 to 20 fish each, plus the lake prawn (sujiebi). Runtime prices and final pool weights.
const biwaWetland='https://www.env.go.jp/nature/important_wetland/wetland/w316.html',moni2020='https://www.biodic.go.jp/moni1000/findings/newsflash/pdf/freshwaterfishes_2020.pdf';
const fish27d=[
 freshFish({id:'biwacatfish',name:'琵琶湖鯰',latin:'Silurus biwaensis',min:1.5,max:10,price:57,requiredBait:'meat',rod:4,other:'琵琶湖巨鯰',kind:'琵琶湖特有種',edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'日本最大的鯰魚，體長可達一公尺以上；頭部比一般鯰魚更扁，下頜明顯向前突出。',habitat:'琵琶湖的湖心水域；六月下旬到梅雨結束前後靠近岸邊產卵。淀川的族群會在夜間鑽進大雨漲水形成的臨時水域產卵，水位驟降時可能擱淺死亡。',diet:'夜間游到湖心捕食鯽魚與香魚等。',distribution:'日本特有種，分布於琵琶湖與流出的宇治川、淀川。',food:'食用資料待查。',hint:'下巴比一般鯰魚更突出的巨大鯰魚，夜裡在湖心追捕魚群。',source:'https://www.pref.kyoto.jp/kankyo/rdb/bio/db/fis0040.html',localNames:[['日語','ビワコオオナマズ']]}),
 freshFish({id:'rockcatfish',name:'石鯰',latin:'Silurus lithophilus',min:.2,max:1.2,price:60,requiredBait:'worm',rod:0,other:'',kind:'琵琶湖特有種',form:'體長多在 50 公分以內，比琵琶湖鯰小得多。日文名「イワトコ」意為岩床。',habitat:'琵琶湖北湖較深的岩石湖岸。',diet:'食性資料待查。',distribution:'琵琶湖水系特有種。',food:'數量稀少，連經營湖魚的店家也很少進貨；京都、滋賀少數料理店用來煮鍋或做蒲燒，評價很高。',hint:'躲在北湖深處岩石間的鯰魚，難得一見。',source:'https://zh.wikipedia.org/wiki/Silurus_lithophilus',localNames:[['日語','イワトコナマズ']]}),
 freshFish({id:'biwahigai',name:'琵琶湖鰁',latin:'Sarcocheilichthys variegatus microoculus',min:.02,max:.15,price:42,requiredBait:'worm',rod:0,other:'',kind:'琵琶湖特有種',form:'小型鯉科魚，頭較長，體色偏灰，背鰭有一條寬的黑色橫帶。',habitat:'適應琵琶湖的靜水環境，貼近湖底活動。',diet:'在湖底覓食。',distribution:'原本只分布在琵琶湖與瀨田川；二十世紀被移植到東北、關東等地，1918 年曾放流到霞浦湖並一度大量捕獲，如今已很少見。',food:'相傳明治天皇喜愛這種魚的滋味，日文因而寫作「鰉」；產卵前的四到六月肉質最軟嫩，適合烤食。',hint:'頭長長的灰色小魚，背鰭上橫著一條寬黑帶。',source:biwaWetland,localNames:[['日語','ビワヒガイ']]}),
 freshFish({id:'aburahigai',name:'油鰁',latin:'Sarcocheilichthys biwaensis',min:.02,max:.12,price:42,requiredBait:'worm',rod:0,other:'',kind:'琵琶湖特有種',edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'與琵琶湖鰁相似，但體色偏褐黃，背鰭的黑帶只剩模糊痕跡。',habitat:'琵琶湖的岩石或卵石湖岸。',diet:'食性資料待查。',distribution:'琵琶湖水系特有種。湖岸改造、外來魚捕食與觀賞採集使牠的數量減少，滋賀縣列為瀕臨滅絕的物種。',food:'食用資料待查。',hint:'躲在岩石湖岸的黃褐色小魚，背鰭上只有淡淡的橫帶。',source:biwaWetland,localNames:[['日語','アブラヒガイ']]}),
 freshFish({id:'wataka',name:'石川魚',latin:'Ischikauia steenackeri',min:.05,max:.4,price:36,requiredBait:'dough',rod:0,other:'',kind:'湖區紀錄魚種',edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'身體細長側扁，口在吻端而略朝上。',habitat:'湖泊與河川的靜水處。滋賀縣曾放流牠來抑制南湖夏季大量繁生的水草。',diet:'以水草為主的雜食魚，飼養與野外都會吃水草。',distribution:'原產琵琶湖、淀川水系，日本特有，屬名紀念魚類學者石川千代松。原產地的數量大幅減少，環境省列為極危；但被移植到各地後能自然繁殖，霞浦湖便有穩定的族群。',food:'食用資料待查。',hint:'嘴巴微微朝上的細長魚，喜歡啃水草。',source:'https://www.pref.kyoto.jp/kankyo/rdb/bio/db/fis0036.html',localNames:[['日語','ワタカ（又稱ウマウオ）']]}),
 freshFish({id:'largemouthbass',name:'大口黑鱸',latin:'Micropterus salmoides',min:.2,max:2,price:45,requiredBait:'meat',rod:0,other:'',kind:'引入魚種',form:'口很大，上頜後端超過眼睛；身側有一條暗色縱帶。',habitat:'湖泊與河川的靜水處。',diet:'肉食性，捕食魚與甲殼類。',distribution:'原產北美。1974 年在彥根外海首次確認，1983 年前後在琵琶湖大量繁殖，曾大量捕食鯽魚的幼魚；霞浦湖也有紀錄，但近年數量不多。日本列為特定外來生物，滋賀縣禁止把釣到的大口黑鱸放回湖中，並在湖岸設置回收箱。',food:'原產地常見的食用魚。',hint:'嘴巴大到裂過眼睛的外來掠食魚。',source:'https://www.pref.shiga.lg.jp/gf00/7242.html',localNames:[['日語','オオクチバス（俗稱ブラックバス）']]}),
 freshFish({id:'numachichibu',name:'短棘縞鰕虎',latin:'Tridentiger brevispinis',min:.003,max:.02,price:33,requiredBait:'worm',rod:0,other:'',kind:'湖區紀錄魚種',form:'小型鰕虎，頭部較寬，腹鰭連成吸盤。',habitat:'湖泊與河川下游的底部，會在海與河之間洄游。',diet:'在水底覓食。',distribution:'日本、朝鮮半島與中國東北的淡水域。霞浦湖的漁民把多種鰕虎合稱「ゴロ」，其中短棘縞鰕虎占了大多數。',food:'霞浦湖以拖網捕撈，做成佃煮出售。',hint:'霞浦湖漁民口中的「ゴロ」，腹下藏著吸盤。',source:moni2020,localNames:[['日語','ヌマチチブ（霞浦稱ゴロ）']]})
];
const animal27d=freshAnimal({id:'sujiebi',name:'條紋長臂蝦',other:'',latin:'Palaemon paucidens',kind:'淡水蝦類',requiredBait:'worm',min:.001,max:.004,price:42,bounty:0,form:'小型淡水蝦，活著時呈透明的麥芽糖色，煮熟後轉紅。',habitat:'春到秋季住在湖岸的水草帶，冬天移到深處。',diet:'食性資料待查。',distribution:'日本與朝鮮半島各地的河川與湖泊都很常見。琵琶湖的漁民春到秋季用蝦籠捕撈，冬季以小型拖網在北湖沖合捕撈；近年漁獲減少，滋賀縣持續調查原因。霞浦湖也有紀錄。',food:'琵琶湖「八珍」之一，用於滋賀的鄉土菜蝦豆與炸蝦餅。',hint:'透明的麥芽糖色小蝦，春天聚在湖岸的水草間。',source:'https://www.pref.shiga.lg.jp/gf00/7255.html',localNames:[['日語','スジエビ（釣客稱シラサエビ）']]});
fish.push(...fish27d);animals.push(animal27d);species.push(...fish27d,animal27d);
note27('bream','霞浦湖亦有紀錄。');
note27('largerfinbitterling','霞浦湖是外來種，國立環境研究所的定置網調查中數量最多的魚。');
note27('japaneseseabass','也會進入霞浦湖。');
note27('nipponense','霞浦湖的定置網調查中數量最多，湖區自古就有捕撈手長蝦的漁業。');
for(const [id,name] of [['bream','ダントウボウ'],['largerfinbitterling','オオタナゴ'],['nipponense','テナガエビ']])addName27(id,'日語',name);
{const b={ayu:16,honmoroko:12,carp:5,nigorobuna:7,whitecrucian:6,biwamasu:3,hasu:8,isaza:6,gigi:4,topmouth:6,loach:4,amurcatfish:2,eel:2,bluegill:4,biwahigai:4,aburahigai:1,rockcatfish:2,biwacatfish:1,wataka:3,largemouthbass:4},
 k={wakasagi:16,icefish:11,channelcat:6,carp:4,silver:4,bluegill:5,hasu:8,topmouth:6,whitecrucian:6,loach:5,eel:2,amurcatfish:2,rosybitterling:3,swampeel:3,largerfinbitterling:6,numachichibu:5,bream:2,wataka:2,largemouthbass:2,japaneseseabass:2};
 for(const [id,pool] of [['biwa',b],['kasumigaura',k]]){const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...pool}}
 regions.find(r=>r.id==='biwa').animals={sujiebi:7};regions.find(r=>r.id==='kasumigaura').animals={nipponense:6,sujiebi:2}}
// Cookable B3 fish join the general recipes (the biwahigai, max 0.15 kg, also fries); the goby joins the Kasumigaura tsukudani; the prawn fries and makes ebi-mame.
const general27d=['rockcatfish','biwahigai','largemouthbass'];
for(const r of recipes.filter(r=>r.cuisine==='basic'&&r.id!=='deepfry')){r.fishes.splice(r.fishes.length-2,0,...general27d);if(Array.isArray(r.fish))r.fish.splice(r.fish.length-2,0,...general27d)}
{const r=recipes.find(r=>r.id==='deepfry'),extra=general27d.filter(id=>fish.find(f=>f.id===id).max<=.5);r.fishes.splice(r.fishes.length-friedAnimals.length-1,0,...extra);r.fishes.push('sujiebi');r.fish=[...r.fishes]}
{const r=recipes.find(r=>r.id==='kasumi-tsukudani');r.fish.push('numachichibu');r.fishes.push('numachichibu')}
{const r={id:'ebimame',name:'滋賀蝦豆',orig:'えび豆',fish:'sujiebi',fishes:['sujiebi'],method:'soup',tier:'home',effect:'double',amount:.1,casts:60,cost:60,preparation:'與大豆甜鹹燉煮',about:'滋賀的鄉土料理，把琵琶湖的條紋長臂蝦與大豆一起燉煮，寓意「彎著腰到老也勤健過日」，在喜慶的日子製作。',cuisine:'japan',origin:'日本・滋賀'};r.desc=mealDesc(r);recipes.push(r)}
// 0.27 refill B4: Lake Vättern from 12 to 19 and the tidal Thames from 14 to 24 fish; two new small fish. Runtime prices and final pool weights.
const fish27e=[
 freshFish({id:'ninespine',name:'八棘多刺魚',latin:'Pungitius pungitius',min:.001,max:.004,price:30,requiredBait:'shrimp',rod:0,other:'九刺魚',kind:'水域紀錄魚種',water:'brackish',edible:false,cookable:false,cookingNote:'體形細小，不作食用與料理材料。',form:'身體細長，背部灰綠至褐色，帶深色斑駁；背鰭前排列多根短而分開的硬棘，比三刺魚的背棘細小。',habitat:'湖泊、緩流與河口的淺水處，常躲進水生植物間。',diet:'攝食小型甲殼類、水生昆蟲幼蟲與魚卵。',distribution:'北半球寒溫帶水域；韋特恩湖名錄與泰晤士河格林威治、帕特尼的調查均有紀錄。',food:'體形細小，本作不作食用魚。',hint:'背上排著一列短刺，常藏在淺水植物間的小魚。',source:'https://www.havochvatten.se/arter-och-livsmiljoer/arter-och-naturtyper/smaspigg.html',localNames:[['瑞典語','småspigg'],['英語','nine-spined stickleback']]}),
 freshFish({id:'sandsmelt',name:'沙真銀漢魚',latin:'Atherina presbyter',min:.003,max:.03,price:33,requiredBait:'shrimp',rod:0,other:'',kind:'河口魚種',water:'brackish',edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'身體細長，兩個背鰭分開，體側有一道從頭部延伸到尾部的亮銀色縱帶。',habitat:'在近岸與河口的淺水中成群活動。',diet:'捕食小型甲殼類與魚類幼生。',distribution:'東北大西洋沿岸；泰晤士河格林威治與帕特尼的潮汐河段調查均有紀錄。',food:'食用資料待查。',hint:'細長的身體側面亮著一道銀線，兩個背鰭分得很開。',source:fb26('Atherina presbyter'),localNames:[['英語','sand smelt']]})
];
fish.push(...fish27e);species.push(...fish27e);
for(const id of ['roach','commonbream','silverbream','ruffe'])note27(id,'韋特恩湖亦有紀錄。');
note27('bleak','韋特恩湖亦有紀錄；泰晤士河里奇蒙的潮汐段亦有紀錄。');
note27('tench','韋特恩湖與泰晤士河格林威治的潮汐河段亦有紀錄。');
note27('commonsole','泰晤士河潮汐段也是幼魚成長的育幼場。');
for(const id of ['gudgeon','carp'])note27(id,'泰晤士河里奇蒙的潮汐段亦有紀錄。');
note27('thicklipmullet','泰晤士河格林威治的潮汐段亦有紀錄。');
note27('herring','泰晤士河格林威治與伍利奇的潮汐段亦有紀錄。');
note27('atlanticcod','泰晤士河伍利奇的潮汐段亦有紀錄。');
for(const [id,lang,name] of [['roach','瑞典語','mört'],['tench','瑞典語','sutare'],['tench','英語','tench'],['commonbream','瑞典語','braxen'],['bleak','瑞典語','benlöja'],['bleak','英語','bleak'],['silverbream','瑞典語','björkna'],['ruffe','瑞典語','gers'],['commonsole','英語','Dover sole'],['herring','英語','herring'],['gudgeon','英語','gudgeon'],['carp','英語','common carp'],['thicklipmullet','英語','thick-lipped grey mullet'],['atlanticcod','英語','Atlantic cod']])addName27(id,lang,name);
{const v={vendace:13,perch:10,smelt:9,arcticchar:6,commonwhitefish:5,stickleback:4,grayling:4,burbot:3,pike:3,browntrout:3,zander:2,fourhorn:3,roach:10,tench:5,commonbream:4,bleak:7,silverbream:3,ruffe:3,ninespine:3},
 t={commongoby:11,flounder:8,roach:7,europeanseabass:7,smelt:7,dace:6,stickleback:4,europeaneel:6,perch:5,sandgoby:4,chub:3,commonbream:2,thinlipmullet:2,sprat:2,commonsole:4,sandsmelt:3,ninespine:2,tench:2,herring:3,bleak:4,gudgeon:3,carp:2,thicklipmullet:2,atlanticcod:1};
 for(const [id,pool] of [['vattern',v],['thames',t]]){const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...pool}}}
// 0.28 Lake Erie (North America) and Moreton Bay (Australia): two tier-1 starters. Runtime prices and final pool weights.
const erieList='https://www.utoledo.edu/nsm/lec/research/be/docs/Lake_Erie_species_list.pdf',erieUsgs='https://www.glfc.org/pubs/lake_committees/common_docs/2025_LEBS_AnnualReport_final_032526.pdf',miDnr=n=>'https://www.michigan.gov/dnr/education/michigan-species/fish-species/'+n;
const erieRecord='伊利湖的近岸魚群調查有紀錄。',erieNote='食用資料待查；本作不作料理材料。',lakeFish=o=>freshFish({kind:'湖區紀錄魚種',distribution:erieRecord,...o}),lakeNoCook=o=>lakeFish({edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',food:erieNote,...o});
const fish28erie=[
 lakeFish({id:'walleye',name:'大眼梭鱸',latin:'Sander vitreus',min:.4,max:3.5,price:60,requiredBait:'meat',rod:2,other:'',form:'眼睛大而有反光，尾鰭下葉末端帶白色。',habitat:'會追捕小魚，是伊利湖具代表性的掠食魚。',diet:'',food:'可食用；本作列為料理材料。',hint:'眼睛很大、會反光，尾鰭下緣帶一點白。',source:miDnr('walleye'),localNames:[['英語','walleye']]}),
 lakeFish({id:'yellowperch',name:'河黃鱸',latin:'Perca flavescens',min:.05,max:.6,price:48,requiredBait:'worm',rod:0,other:'金鱸',form:'黃綠色身體上有深色橫帶，背鰭分成前後兩部分。',habitat:'常成群活動，',diet:'攝食水生昆蟲與小魚。',food:'可食用；本作列為料理材料。',hint:'黃綠色的身體上排著深色橫帶。',source:miDnr('yellow-perch'),localNames:[['英語','yellow perch']]}),
 lakeNoCook({id:'smallmouthbass',name:'小口黑鱸',latin:'Micropterus dolomieu',min:.2,max:2,price:48,requiredBait:'meat',rod:0,other:'',form:'體色偏青銅，口裂不像大口黑鱸延伸到眼睛後方。',habitat:'常利用岩石與礫石底的水域覓食。',diet:'',hint:'青銅色的鱸魚，嘴角沒有越過眼睛。',source:miDnr('smallmouth'),localNames:[['英語','smallmouth bass']]}),
 lakeFish({id:'whitebass',name:'白鱸',latin:'Morone chrysops',min:.12,max:1.2,price:45,requiredBait:'meat',rod:0,other:'金眼狼鱸',form:'銀色體側帶多條深色縱線。',habitat:'會成群追逐小魚，與同屬的美洲狼鱸外觀相近。',diet:'',food:'可食用；本作列為料理材料。',hint:'銀色的身體上拉著好幾條深色縱線。',source:'https://tpwd.texas.gov/huntwild/wild/species/wtb/',localNames:[['英語','white bass']]}),
 lakeNoCook({id:'whiteperch',name:'美洲狼鱸',latin:'Morone americana',min:.08,max:.6,price:42,requiredBait:'worm',rod:0,other:'白石鮨',kind:'引入魚種',form:'身體銀灰，體側沒有白鱸那樣清楚的深色縱線。',habitat:'',diet:'',distribution:'原生於大西洋沿岸，後來進入五大湖。',hint:'銀灰色的小型狼鱸，身側看不到清楚的縱線。',source:'https://dnr.wisconsin.gov/topic/Fishing/species/whiteperch.html',localNames:[['英語','white perch']]}),
 lakeFish({id:'freshwaterdrum',name:'淡水石首魚',latin:'Aplodinotus grunniens',min:.25,max:3,price:48,requiredBait:'worm',rod:2,other:'',form:'銀灰色身體，背部隆起、背鰭很長。',habitat:'',diet:'具有能壓碎硬殼獵物的咽齒，會攝食底棲動物。',food:'可食用；本作列為料理材料。',hint:'背部高高隆起，背鰭拉得很長。',source:'https://wvdnr.gov/plants-animals/sportfish/freshwater-drum/',localNames:[['英語','freshwater drum']]}),
 lakeNoCook({id:'emeraldshiner',name:'翡翠美洲鱥',latin:'Notropis atherinoides',min:.003,max:.025,price:33,requiredBait:'dough',rod:0,other:'',form:'體形細長，背部帶綠色光澤，身側有銀色帶。',habitat:'常在湖泊與河川成群活動，也是大魚的食物。',diet:'',hint:'細長的小魚，背上泛著綠光。',source:'https://programs.iowadnr.gov/bionet/Fish/Species/31',localNames:[['英語','emerald shiner']]}),
 lakeNoCook({id:'spottailshiner',name:'斑尾美洲鱥',latin:'Notropis hudsonius',min:.004,max:.03,price:33,requiredBait:'dough',rod:0,other:'',form:'銀色小魚，尾柄有明顯深色斑點。',habitat:'',diet:'',distribution:'伊利湖近岸調查曾記錄到牠。',hint:'銀色小魚，尾巴前方有一枚深色斑點。',source:erieList,localNames:[['英語','spottail shiner']]}),
 lakeNoCook({id:'goldenshiner',name:'金體美鯿魚',latin:'Notemigonus crysoleucas',min:.008,max:.08,price:36,requiredBait:'dough',rod:0,other:'',form:'身體側扁，體側帶銀色至金黃色光澤。',habitat:'',diet:'',distribution:'是伊利湖近岸魚群中的小型魚。',hint:'側扁的小魚，身上閃著金黃色光澤。',source:erieList,localNames:[['英語','golden shiner']]}),
 lakeNoCook({id:'americangizzardshad',name:'美洲真鰶',latin:'Dorosoma cepedianum',min:.03,max:.4,price:36,requiredBait:'dough',rod:0,other:'',form:'銀色側扁的鯡形魚，背鰭末端有延長的鰭條。',habitat:'',diet:'',hint:'銀色側扁的魚，背鰭最後一根鰭條拖得很長。',source:erieUsgs,localNames:[['英語','gizzard shad']]}),
 lakeNoCook({id:'pumpkinseed',name:'駝背太陽魚',latin:'Lepomis gibbosus',min:.03,max:.25,price:39,requiredBait:'worm',rod:0,other:'',form:'鰓蓋黑色斑末端帶紅點，臉頰有藍綠色細紋。',habitat:'常在水草、沉木或碼頭附近活動。',diet:'',hint:'鰓蓋黑斑的末端帶著一點紅。',source:miDnr('pumpkinseed'),localNames:[['英語','pumpkinseed']]}),
 lakeNoCook({id:'rockbass',name:'岩鈍鱸',latin:'Ambloplites rupestris',min:.05,max:.45,price:42,requiredBait:'worm',rod:0,other:'',form:'體形厚實、側扁，眼睛帶紅色。',habitat:'',diet:'',distribution:'是伊利湖近岸可見的太陽魚科魚類。',hint:'厚實側扁的小魚，眼睛帶紅色。',source:miDnr('rock-bass'),localNames:[['英語','rock bass']]}),
 lakeFish({id:'brownbullhead',name:'雲斑鮰',latin:'Ameiurus nebulosus',min:.12,max:1.2,price:45,requiredBait:'worm',rod:0,other:'',form:'身體褐色，口邊有觸鬚，尾鰭末端近方形。與尾鰭深叉的斑點叉尾鮰不同。',habitat:'',diet:'',food:'可食用；本作列為料理材料。',hint:'褐色的鯰魚，嘴邊有鬚，尾巴近乎方形。',source:miDnr('bullheads'),localNames:[['英語','brown bullhead']]}),
 lakeNoCook({id:'whitecrappie',name:'白刺蓋太陽魚',latin:'Pomoxis annularis',min:.08,max:.8,price:45,requiredBait:'meat',rod:0,other:'',form:'身體銀色而側扁，體側帶深色橫向斑帶。',habitat:'',diet:'',distribution:'伊利湖的近岸調查有紀錄。',hint:'銀色側扁的魚，身側有深色斑帶。',source:erieList,localNames:[['英語','white crappie']]}),
 lakeNoCook({id:'whitesucker',name:'康氏亞口魚',latin:'Catostomus commersonii',min:.15,max:1.5,price:39,requiredBait:'worm',rod:0,other:'',form:'口位於頭部下方，嘴唇厚。',habitat:'常貼近底部尋找食物，是北美常見的亞口魚。',diet:'',hint:'嘴長在頭部下方，嘴唇很厚。',source:erieUsgs,localNames:[['英語','white sucker']]}),
 lakeNoCook({id:'bluntnoseminnow',name:'鈍吻胖頭鱥',latin:'Pimephales notatus',min:.003,max:.02,price:30,requiredBait:'dough',rod:0,other:'',form:'吻部短鈍，體側有深色帶。',habitat:'',diet:'',distribution:'伊利湖近岸名錄記錄了這種小型魚。',hint:'吻部短鈍的小魚，身側有一條深色帶。',source:erieList,localNames:[['英語','bluntnose minnow']]}),
 lakeNoCook({id:'roundgoby',name:'黑口新鰕虎',latin:'Neogobius melanostomus',min:.01,max:.15,price:30,requiredBait:'worm',rod:0,other:'',kind:'引入魚種',form:'第一背鰭帶黑斑，腹鰭相連形成吸盤。',habitat:'',diet:'',distribution:'原生於黑海與裏海地區，已在五大湖建立族群。',hint:'腹鰭連成吸盤，第一背鰭上有黑斑。',source:erieUsgs,localNames:[['英語','round goby']]}),
 lakeFish({id:'longnosegar',name:'骨雀鱔',latin:'Lepisosteus osseus',min:.4,max:4.5,price:54,requiredBait:'meat',rod:4,other:'長吻雀鱔',cookable:false,cookingNote:'本作不作料理材料。',form:'上下頜細長，身體覆有堅硬鱗片。',habitat:'',diet:'',distribution:'伊利湖近岸可見牠的紀錄。',food:'魚肉有食用利用，卵有毒；本作不作料理材料。',hint:'嘴巴又細又長，全身披著堅硬鱗片。',source:'https://mdc.mo.gov/discover-nature/field-guide/longnose-gar',localNames:[['英語','longnose gar']]})
];
const animal28erie=freshAnimal({id:'rustycrayfish',name:'羅洛斯鏽斑螯蝦',other:'鏽斑螯蝦',latin:'Faxonius rusticus',kind:'淡水螯蝦',requiredBait:'worm',min:.015,max:.07,price:42,bounty:0,edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',form:'頭胸甲兩側帶鏽紅斑，螯較大。',habitat:'',diet:'',distribution:'伊利湖已有紀錄，但西南湖區的原生與外來身分存在地理差異。',food:'食用資料待查；本作不作料理材料。',hint:'頭胸甲兩側各有一塊鏽紅色斑。',source:'https://nas.er.usgs.gov/queries/GreatLakes/FactSheet.aspx?Species_ID=214',localNames:[['英語','rusty crayfish']]});
const fofa=n=>'https://fishesofaustralia.net.au/home/species/'+n,sfm=n=>'https://www.sydneyfishmarket.com.au/species/'+n+'/',moretonZoning='https://moretonbayfoundation.org/articles/changes-in-fish-and-crab-abundance-in-response-to-the-moreton-bay-marine-park-rezoning/';
const bayNote='食用資料待查；本作不作料理材料。',bayFish=o=>seaFish({kind:'河口魚種',water:'brackish',localNames:[],...o}),bayNoCook=o=>bayFish({edible:null,cookable:false,cookingNote:'食用資料待查，不作料理材料。',food:bayNote,...o}),bayCook='可食用；本作列為料理材料。';
const fish28moreton=[
 bayFish({id:'australianbream',name:'澳洲棘鯛',latin:'Acanthopagrus australis',min:.12,max:1.8,price:54,requiredBait:'shrimp',rod:0,other:'',form:'身體銀灰至橄欖色，腹鰭與臀鰭帶黃。',habitat:'生活在澳洲東岸河口、紅樹林與近岸海灣。',diet:'',distribution:'澳洲東岸；莫頓灣近岸魚蟹調查有紀錄。',food:bayCook,hint:'銀灰色的鯛魚，腹鰭與臀鰭帶黃。',source:fofa(672),localNames:[['英語','yellowfin bream']]}),
 bayFish({id:'sandwhiting',name:'纖沙鮻',latin:'Sillago ciliata',min:.05,max:.6,price:51,requiredBait:'worm',rod:0,other:'',form:'體形細長、腹部銀白。',habitat:'常成群活動於河口與海灣沙底，',diet:'攝食底棲小動物。',distribution:'澳洲東岸；莫頓灣的魚類採集有紀錄。',food:bayCook,hint:'細長的沙底魚，腹部銀白。',source:sfm('sand-whiting'),localNames:[['英語','sand whiting']]}),
 bayFish({id:'trumpeterwhiting',name:'斑沙鮻',latin:'Sillago maculata',min:.03,max:.3,price:45,requiredBait:'worm',rod:0,other:'',form:'細長身體帶較明顯的深色斑紋。',habitat:'',diet:'',distribution:'莫頓灣近岸垂釣調查曾捕獲牠。',food:bayCook,hint:'細長的沙底魚，身上有明顯的深色斑紋。',source:'https://www.fish.gov.au/report/343-Trumpeter-Whiting-2020',localNames:[['英語','trumpeter whiting']]}),
 bayFish({id:'duskyflathead',name:'寬頭牛尾魚',latin:'Platycephalus fuscus',min:.2,max:3.2,price:57,requiredBait:'meat',rod:2,other:'棕灰鯒',form:'頭部寬扁，身體向尾端逐漸變細。',habitat:'會藏身沙泥底，',diet:'伏擊經過的小魚與甲殼類。',distribution:'澳洲東岸；莫頓灣近岸魚蟹調查有紀錄。',food:bayCook,hint:'頭又寬又扁，常伏在沙泥底。',source:sfm('dusky-flathead'),localNames:[['英語','dusky flathead']]}),
 bayNoCook({id:'luderick',name:'三尖魢',latin:'Girella tricuspidata',min:.12,max:1.5,price:48,requiredBait:'dough',rod:0,other:'',form:'灰綠色體側有多條細深色橫帶。',habitat:'幼魚會利用海草床。',diet:'以藻類、海草與碎屑為重要食物。',distribution:'澳洲東南岸；莫頓灣的魚類棲地區有紀錄。',hint:'灰綠色的魚，身側排著細細的深色橫帶。',source:fofa(469),localNames:[['英語','luderick']]}),
 bayNoCook({id:'snubnosegarfish',name:'克氏圓吻星鱵',latin:'Arrhamphus krefftii',min:.03,max:.3,price:39,requiredBait:'dough',rod:0,other:'',form:'銀色細長魚，成魚的下頜不延長成一般鱵魚那樣的長喙。',habitat:'在河口水面附近活動，',diet:'會利用海草與藻類食物。',distribution:'澳洲東岸；莫頓灣的灣內魚類研究有紀錄。',hint:'銀色細長的魚，下巴卻沒有長喙。',source:'https://www.marinespecies.org/aphia.php?p=taxlist&pid=125453&rComp=%3E%3D&tRank=220',localNames:[['英語','southern snubnose garfish']]}),
 bayFish({id:'tailor',name:'扁鰺',latin:'Pomatomus saltatrix',min:.15,max:2,price:54,requiredBait:'meat',rod:0,other:'',kind:'海水魚種',water:'sea',form:'身體銀色、嘴大而有尖齒。',habitat:'',diet:'',distribution:'莫頓灣曾進行幼魚標放研究，觀察牠們的移動。',food:bayCook,hint:'銀色的魚，大嘴裡排著尖牙。',source:'https://era.dpi.qld.gov.au/id/eprint/471/1/MortonMovementTagged-SEC.pdf',localNames:[['英語','tailor']]}),
 bayFish({id:'australasiansnapper',name:'金鯛',latin:'Chrysophrys auratus',min:.2,max:3.5,price:63,requiredBait:'shrimp',rod:2,other:'',kind:'海水魚種',water:'sea',form:'身體粉紅至銅粉色，上半部可見細小藍點。',habitat:'較小個體會進入海灣，長大後也利用較深的礁區。',diet:'',distribution:'澳洲與紐西蘭沿岸；莫頓灣近岸魚蟹調查有紀錄。',food:bayCook,hint:'粉紅色的鯛魚，背上散著細小藍點。',source:fofa(678),localNames:[['英語','snapper']]}),
 bayNoCook({id:'commonsilverbiddy',name:'半帶鑽嘴魚',latin:'Gerres subfasciatus',min:.02,max:.25,price:42,requiredBait:'worm',rod:0,other:'',form:'銀色側扁小魚，嘴能向前伸出。',habitat:'常在河口與沿岸沙泥底',diet:'搜尋小型無脊椎動物。',distribution:'澳洲沿岸；莫頓灣的魚類採集有紀錄。',hint:'銀色側扁的小魚，嘴巴可以往前伸。',source:fofa(2435),localNames:[['英語','common silverbiddy']]}),
 bayNoCook({id:'bluecatfishau',name:'格氏新海鯰',latin:'Neoarius graeffei',min:.15,max:1.8,price:48,requiredBait:'worm',rod:0,other:'',form:'口邊有觸鬚，尾鰭分叉。',habitat:'',diet:'',distribution:'莫頓灣的近岸垂釣與魚類研究都有紀錄。',hint:'嘴邊長鬚、尾巴分叉的海鯰。',source:moretonZoning,localNames:[['英語','blue catfish']]}),
 bayNoCook({id:'southernherring',name:'卡氏似青鱗魚',latin:'Herklotsichthys castelnaui',min:.008,max:.08,price:36,requiredBait:'dough',rod:0,other:'',form:'銀色小型鯡魚。',habitat:'',diet:'',distribution:'曾見於莫頓灣河口魚群的研究紀錄。',hint:'銀色的小型鯡魚。',source:'https://www.rodconnolly.com/uploads/2/5/7/2/25722279/tibbetts___connolly_1998_nekton_of_moreton_bay.pdf',localNames:[['英語','southern herring']]}),
 bayNoCook({id:'hardyhead',name:'澳洲美銀漢魚',latin:'Atherinomorus vaigiensis',min:.005,max:.06,price:36,requiredBait:'dough',rod:0,other:'',form:'細長銀色小魚，體側有明亮銀帶。',habitat:'',diet:'',distribution:'莫頓灣的魚類採樣曾記錄到牠。',hint:'細長的小魚，身側一道明亮銀帶。',source:'https://www.parasite-journal.org/articles/parasite/pdf/2023/01/parasite230096.pdf',localNames:[['英語','common hardyhead']]}),
 bayNoCook({id:'estuaryglassfish',name:'瑪麗雙邊魚',latin:'Ambassis marianus',min:.002,max:.025,price:33,requiredBait:'shrimp',rod:0,other:'',form:'小型半透明魚，身體側扁。',habitat:'',diet:'',distribution:'莫頓灣 Eden Island 的鹽沼與紅樹林採樣曾記錄到牠。',hint:'側扁的半透明小魚。',source:'https://www.rodconnolly.com/uploads/2/5/7/2/25722279/tibbetts___connolly_1998_nekton_of_moreton_bay.pdf',localNames:[['英語','estuary glassfish']]}),
 bayFish({id:'slenderemperor',name:'絲棘龍占魚',latin:'Lethrinus genivittatus',min:.04,max:.4,price:48,requiredBait:'shrimp',rod:0,other:'',kind:'海水魚種',water:'sea',form:'身體較細長，臉頰帶條紋。',habitat:'會利用淺水沙底與海草床，',diet:'攝食小魚及甲殼類。',distribution:'印度—西太平洋；莫頓灣近岸魚蟹調查有紀錄。',food:bayCook,hint:'身形細長，臉頰上帶著條紋。',source:'https://fishdb.sinica.edu.tw/taxon/16093-fishdb/taxonomy',localNames:[['英語','longspine emperor']]})
];
const animals28moreton=[
 seaAnimal({id:'giantmudcrab',name:'鋸緣青蟳',other:'鋸緣青蟹',latin:'Scylla serrata',category:'crustacean',kind:'河口蟹類',requiredBait:'meat',min:.15,max:1,price:54,water:'brackish',localNames:[['英語','giant mud crab']],form:'甲殼寬厚、螯大，步足可見網狀花紋。',habitat:'常在河口紅樹林與泥底活動。',diet:'',distribution:'印度—西太平洋；莫頓灣漁業研究有紀錄。',food:'可食用；本作列為料理材料。',hint:'甲殼寬厚、大螯，腳上帶網狀花紋。',source:'https://museum.wa.gov.au/online-collections/names/scylla-serrata'}),
 seaAnimal({id:'aublueswimmer',name:'武裝梭子蟹',other:'',latin:'Portunus armatus',category:'crustacean',kind:'海水蟹類',requiredBait:'meat',min:.08,max:.5,price:51,localNames:[['英語','blue swimmer crab']],form:'甲殼兩側伸出長棘，螯足細長；雄蟹常帶藍色與白斑。與遠海梭子蟹分列為不同種。',habitat:'',diet:'',distribution:'澳洲沿岸；莫頓灣漁業研究有紀錄。',food:'可食用；本作列為料理材料。',hint:'甲殼兩側伸出長棘，雄蟹帶藍色與白斑。',source:'https://www.cmar.csiro.au/data/caab/taxon_report.cfm?caab_code=28911005'}),
 seaAnimal({id:'greasybackprawn',name:'綠尾新對蝦',other:'',latin:'Metapenaeus bennettae',category:'crustacean',kind:'海水蝦類',requiredBait:'shrimp',min:.005,max:.03,price:39,water:'brackish',localNames:[['英語','greentail prawn']],form:'小型海蝦，常稱 bay prawn。',habitat:'',diet:'',distribution:'莫頓灣有直接的族群與繁殖研究。',food:'可食用；本作列為料理材料。',hint:'灣內常見的小型海蝦。',source:'https://era.dpi.qld.gov.au/id/eprint/469/'}),
 seaAnimal({id:'browntigerprawn',name:'虎紋對蝦',other:'',latin:'Penaeus esculentus',category:'crustacean',kind:'海水蝦類',requiredBait:'shrimp',min:.015,max:.09,price:45,localNames:[['英語','brown tiger prawn']],form:'體表帶較深的橫向斑紋。',habitat:'',diet:'',distribution:'是莫頓灣有研究紀錄的商業蝦種。',food:'可食用；本作列為料理材料。',hint:'身上帶著較深的橫向斑紋的蝦。',source:'https://era.dpi.qld.gov.au/id/eprint/469/'}),
 seaAnimal({id:'easternkingprawn',name:'澳洲對蝦',other:'',latin:'Penaeus plebejus',category:'crustacean',kind:'海水蝦類',requiredBait:'shrimp',min:.015,max:.1,price:45,localNames:[['英語','eastern king prawn']],form:'澳洲東岸重要海蝦，舊文獻也使用 Melicertus plebejus。',habitat:'',diet:'',distribution:'莫頓灣有幼蝦與漁業紀錄。',food:'可食用；本作列為料理材料。',hint:'澳洲東岸重要的海蝦。',source:'https://www.fao.org/fishery/docs/CDrom/aquaculture/a0844t/docrep/005/AC740T/AC740T11.htm'}),
 seaAnimal({id:'southerncalamari',name:'南方擬烏賊',other:'',latin:'Sepioteuthis australis',category:'cephalopod',kind:'魷魚類',requiredBait:'shrimp',min:.08,max:1,price:45,localNames:[['英語','southern calamari']],form:'胴部兩側有寬鰭，外形近橢圓。',habitat:'生活在沿岸淺水，',diet:'',distribution:'分布北界可到莫頓灣。',food:'可食用；本作列為料理材料。',hint:'胴部兩側有寬鰭，外形近橢圓。',source:'https://www.dcceew.gov.au/sites/default/files/documents/key-species.pdf'})
];
const seagrassQld='https://parks.qld.gov.au/parks/moreton-bay/about/culture/seagrass',seagrassBanks='https://pmc.ncbi.nlm.nih.gov/articles/PMC4550905/';
const plants28=[
 {id:'americaneelgrass',name:'美洲苦草',other:'',latin:'Vallisneria americana',water:'fresh',type:'沉水植物',form:'帶狀長葉從水底向上伸展。與現有的苦草分列為不同種。',habitat:'湖泊沿岸的水底。',distribution:'伊利湖已有歷史調查紀錄。',source:'https://wldb.ilec.or.jp/Display/html/3407'},
 {id:'muellereelgrass',name:'牟氏鰻草',other:'',latin:'Zostera muelleri',water:'sea',type:'海草',form:'細長帶狀葉成片生長。遊戲中收集勾起的草葉。',habitat:'海灣的淺水沙泥底。',distribution:'是莫頓灣海草床的重要組成。',source:seagrassBanks},
 {id:'spinulosaseagrass',name:'棘狀喜鹽草',other:'',latin:'Halophila spinulosa',water:'sea',type:'海草',form:'小葉沿枝條排列，外形像羽毛。',habitat:'海灣的海草床。',distribution:'莫頓灣海草調查有紀錄。',source:seagrassBanks},
 {id:'decipiensseagrass',name:'毛葉鹽藻',other:'毛葉鹽草',latin:'Halophila decipiens',water:'sea',type:'海草',form:'小型海草，葉片成對生長。',habitat:'海灣的海草床。',distribution:'莫頓灣海洋公園名錄收錄了牠。',source:seagrassQld},
 {id:'serrulataseagrass',name:'齒葉絲粉草',other:'',latin:'Oceana serrulata',water:'sea',type:'海草',form:'葉片呈帶狀，葉端邊緣有細齒。',habitat:'海灣的海草床。',distribution:'莫頓灣海草調查有紀錄。舊組合 Cymodocea serrulata 為同一物種。',source:seagrassBanks},
 {id:'syringodium',name:'針葉藻',other:'水韭菜',latin:'Syringodium isoetifolium',water:'sea',type:'海草',form:'葉片細長，橫切面近圓形，與扁平帶狀葉的海草不同。',habitat:'海灣的海草床。',distribution:'莫頓灣海草調查有紀錄。',source:seagrassBanks}
];
fish.push(...fish28erie,...fish28moreton);animals.push(animal28erie,...animals28moreton);species.push(...fish28erie,animal28erie,...fish28moreton,...animals28moreton);plants.push(...plants28);
// Facts the review left open stay explicit: the nearshore record as habitat and diet marked pending.
{const set={walleye:['是伊利湖具代表性的掠食魚，','會追捕小魚。'],whitebass:['常成群活動，與同屬的美洲狼鱸外觀相近；','會追逐小魚。'],emeraldshiner:['常在湖泊與河川成群活動，','食性資料待查；牠也是大魚的食物。'],americangizzardshad:['伊利湖近岸水域，屬重要的餌魚之一。',''],whitesucker:['是北美常見的亞口魚，','常貼近底部尋找食物。'],southerncalamari:['生活在沿岸淺水。','']};
 for(const f of [...fish28erie,animal28erie,...fish28moreton,...animals28moreton]){const [h,d]=set[f.id]||[];if(h)f.habitat=h;if(d)f.diet=d;f.habitat||=fish28moreton.includes(f)||animals28moreton.includes(f)?'莫頓灣的灣內與河口水域。':'伊利湖近岸水域。';f.diet||='食性資料待查。'}}
for(const id of ['carp','grass','bluegill','channelcat','largemouthbass','pike'])note27(id,'伊利湖的近岸魚群調查亦有紀錄。');
for(const id of ['mullet','sarba','oyena','mangrovejack','russellsnapper','coioides','mono','rabbitfish','bananaprawn'])note27(id,'莫頓灣的灣內或河口魚類調查亦有紀錄。');
for(const id of ['milfoil','stonewort'])note27(id,'伊利湖亦有歷史紀錄。');
for(const id of ['paddleweed','narrowseagrass'])note27(id,'莫頓灣海草調查亦有紀錄。');
for(const [id,name] of [['grass','grass carp'],['bluegill','bluegill'],['channelcat','channel catfish'],['largemouthbass','largemouth bass'],['pike','northern pike'],['mullet','sea mullet'],['sarba','tarwhine'],['oyena','common silver-biddy'],['mangrovejack','mangrove jack'],['russellsnapper','Moses perch'],['coioides','goldspotted rockcod'],['mono','diamondfish'],['rabbitfish','dusky rabbitfish'],['bananaprawn','banana prawn']])addName27(id,'英語',name);
conditions.walleye={phase:{dawn:1.5,dusk:1.5,night:1.5},note:'清晨、黃昏與夜晚較常見'};
cuisines.push(['namerica','北美'],['oceania','大洋洲']);
regions.push(
 {id:'erie',name:'伊利湖',area:'北美・美國／加拿大',lat:41.7,lon:-82.6,water:'大湖・淡水',license:{tier:1,...licenseTiers[1]},
  desc:'伊利湖是北美五大湖之一，近岸、附屬湖灣與較開闊的水面各有不同魚群。近岸有成群的小魚與太陽魚，較大的掠食魚則穿梭其間；河黃鱸與大眼梭鱸也是這裡具代表性的漁獲。',
  startNote:'近岸有成群的小魚，換用蚯蚓後能接觸更多底棲魚與太陽魚。大型掠食魚留待釣竿升級。',
  pool:{walleye:5,yellowperch:8,smallmouthbass:5,whitebass:5,whiteperch:5,freshwaterdrum:4,emeraldshiner:8,spottailshiner:6,goldenshiner:5,americangizzardshad:5,pumpkinseed:4,rockbass:4,brownbullhead:4,whitecrappie:4,whitesucker:4,bluntnoseminnow:5,roundgoby:4,longnosegar:1,carp:2,grass:1,bluegill:4,channelcat:3,largemouthbass:3,pike:1},
  animals:{rustycrayfish:5},weeds:{americaneelgrass:50,milfoil:30,stonewort:20},
  source:erieList},
 {id:'moreton',name:'莫頓灣',area:'澳洲・昆士蘭',lat:-27.3,lon:153.25,water:'海灣・海水',south:true,license:{tier:1,...licenseTiers[1]},
  desc:'莫頓灣位於澳洲昆士蘭東南岸，外側島嶼遮住部分海浪，灣內分布著河口、沙泥灘與海草床。銀色小魚在淺水成群，沙鮻與鯒在底部覓食，蝦蟹也利用這些棲地生長。',
  startNote:'先用麵團接觸淺灣魚群，換餌後可收集沙底魚、蝦蟹與擬烏賊。部分大型魚需要升級釣竿。',
  pool:{australianbream:8,sandwhiting:8,trumpeterwhiting:7,duskyflathead:5,luderick:6,snubnosegarfish:6,tailor:4,australasiansnapper:4,commonsilverbiddy:7,bluecatfishau:4,southernherring:6,hardyhead:6,estuaryglassfish:5,slenderemperor:4,mullet:3,sarba:3,oyena:3,mangrovejack:2,russellsnapper:2,coioides:1,mono:3,rabbitfish:3},
  animals:{giantmudcrab:4,aublueswimmer:5,greasybackprawn:7,browntigerprawn:4,easternkingprawn:4,southerncalamari:3,bananaprawn:3},
  weeds:{muellereelgrass:35,paddleweed:20,narrowseagrass:15,spinulosaseagrass:10,decipiensseagrass:8,serrulataseagrass:7,syringodium:5},
  source:moretonZoning});
for(const id of ['erie','moreton']){const r=regions.find(r=>r.id===id);r.basePool={...r.pool}}
Object.assign(world.weatherOdds,{erie:[45,35,20],moreton:[55,25,20]});world.winterOdds.erie=[30,50,20];
world.flavor.erie={
 phase:{dawn:['湖面逐漸亮起，遠處的岸線從霧色中浮現。'],day:['光線落在水面，近岸的浪一層層推向岸邊。'],dusk:['夕光把湖面照成淡金色，岸邊慢慢安靜下來。'],night:['岸上的燈映進水裡，浮標隨著波紋輕輕移動。']},
 weather:{sunny:['陽光照亮近岸水面，細浪拍在岸邊。'],cloudy:['雲層壓低了天光，湖面呈現一片灰藍。'],rain:['雨點落進湖裡，浮標旁的細紋一圈接著一圈。']},
 facts:['伊利湖是北美五大湖之一，湖水連接美國與加拿大。','近岸小魚也是較大型掠食魚的食物；魚群的變化會牽動整個湖泊食物網。','本作以湖區綜合魚群設計釣點，地圖標記不是現實垂釣位置。']};
world.flavor.moreton={
 phase:{dawn:['天光照進淺灣，近岸沙洲的輪廓逐漸清楚。'],day:['海草隨水流擺動，水面不時掠過細小波紋。'],dusk:['夕光越過灣岸，水面上的亮色慢慢退去。'],night:['岸邊燈火倒映在灣裡，潮水仍緩緩流動。']},
 weather:{sunny:['日光穿過淺水，沙底和草葉的影子時隱時現。'],cloudy:['雲影覆住灣面，遠處島嶼顯得更淡了。'],rain:['雨點打散水面的倒影，灣岸蒙上一層薄霧。']},
 tide:{rising:['潮水漫過沙洲邊緣，海草葉片在水裡立了起來。'],falling:['水線慢慢退下，沙洲與海草床露出淺淺的邊。']},
 facts:['海草是會開花的植物，與海藻屬於不同的類群。','莫頓灣的海草床也是許多小魚與甲殼類利用的棲地。','澳洲常稱的 blue swimmer crab 是 Portunus armatus；本作與遠海梭子蟹分開收錄。']};
const recipes28=[
 {id:'erie-perch-fry',name:'酥煎河黃鱸',orig:'crispy perch',fish:'yellowperch',fishes:['yellowperch'],method:'fry',tier:'home',effect:'double',amount:.1,casts:60,cost:15,preparation:'魚片裹薄麵包粉煎至酥香，配檸檬與塔塔醬',about:'河黃鱸魚片裹上薄薄的麵包粉，下鍋煎成酥香的外皮，配檸檬與塔塔醬。這份菜參考伊利湖多佛港的炸魚餐盤。',cuisine:'namerica',origin:'加拿大・安大略'},
 {id:'erie-walleye',name:'金黃香煎大眼梭鱸',orig:'golden pan-fried walleye',fish:'walleye',fishes:['walleye'],method:'fry',tier:'home',effect:'speed',amount:.08,casts:80,cost:15,preparation:'魚片薄裹麵粉、蛋液與調味碎屑，煎至兩面金黃',about:'大眼梭鱸魚片薄裹麵粉、蛋液與調味碎屑，煎至兩面金黃。這是北美淡水魚常見的吃法，魚肉與酥皮保留不同口感。',cuisine:'namerica',origin:'北美'},
 {id:'moreton-flathead',name:'啤酒麵糊炸寬頭牛尾魚',orig:'flathead fillets in beer batter',fish:'duskyflathead',fishes:['duskyflathead'],method:'fry',tier:'home',effect:'double',amount:.1,casts:60,cost:15,preparation:'魚片裹啤酒麵糊炸至金黃，配檸檬與塔塔醬',about:'寬頭牛尾魚魚片裹上啤酒麵糊炸至金黃，配檸檬與塔塔醬。鯒魚炸魚薯條是澳洲常見的海鮮吃法。',cuisine:'oceania',origin:'澳洲'},
 {id:'moreton-chilli-crab',name:'辣椒青蟳',orig:'chilli mud crab',fish:'giantmudcrab',fishes:['giantmudcrab'],method:'fry',tier:'home',effect:'speed',amount:.08,casts:60,cost:15,preparation:'青蟳配番茄與辣椒醬汁同炒',about:'鋸緣青蟳配上番茄與辣椒醬汁，帶著甜、酸、辣交織的味道。這道源自新加坡的菜，也能在澳洲海鮮餐館見到。',cuisine:'oceania',origin:'源自新加坡'}
];
for(const r of recipes28){r.desc=mealDesc(r);recipes.push(r)}
// Edible new species join the general recipes as reviewed; deep-frying takes only the listed catches up to 0.5 kg.
const general28=['walleye','yellowperch','whitebass','freshwaterdrum','brownbullhead','australianbream','sandwhiting','trumpeterwhiting','duskyflathead','tailor','australasiansnapper','slenderemperor','giantmudcrab','aublueswimmer','greasybackprawn','browntigerprawn','easternkingprawn','southerncalamari'],fried28=['yellowperch','trumpeterwhiting','slenderemperor','greasybackprawn','browntigerprawn','easternkingprawn'];
{const isAnimal=id=>animals.some(a=>a.id===id),order=list=>[...list.filter(id=>!isAnimal(id)),...general28.filter(id=>!isAnimal(id)),...list.filter(isAnimal),...general28.filter(isAnimal)];
 for(const r of recipes.filter(r=>r.cuisine==='basic'&&r.id!=='deepfry')){r.fishes=order(r.fishes);if(Array.isArray(r.fish))r.fish=order(r.fish)}}
{const r=recipes.find(r=>r.id==='deepfry'),isFish=id=>fish.some(f=>f.id===id),cut=r.fishes.findIndex(id=>!isFish(id));r.fishes.splice(cut,0,...fried28.filter(isFish));r.fishes.push(...fried28.filter(id=>!isFish(id)));r.fish=[...r.fishes]}
const dishes28=[
 {id:'dine-erie-perch',region:'erie',name:'酥煎河黃鱸',orig:'crispy perch',method:'fry',tier:'basic',effect:'double',amount:.08,casts:40,price:45,preparation:'魚片裹薄麵包粉煎至酥香，配檸檬與塔塔醬',about:'河黃鱸魚片裹上薄薄的麵包粉，下鍋煎成酥香的外皮，配檸檬與塔塔醬。這份菜參考伊利湖多佛港的炸魚餐盤。',art:'erie-perch-fry'},
 {id:'dine-erie-walleye',region:'erie',name:'金黃香煎大眼梭鱸',orig:'golden pan-fried walleye',method:'fry',tier:'basic',effect:'speed',amount:.05,casts:40,price:45,preparation:'魚片薄裹麵粉、蛋液與調味碎屑，煎至兩面金黃',about:'大眼梭鱸魚片薄裹麵粉、蛋液與調味碎屑，煎至兩面金黃。這是北美淡水魚常見的吃法，魚肉與酥皮保留不同口感。',art:'erie-walleye'},
 {id:'dine-moreton-flathead',region:'moreton',name:'啤酒麵糊炸寬頭牛尾魚',orig:'flathead fillets in beer batter',method:'fry',tier:'basic',effect:'double',amount:.08,casts:40,price:45,preparation:'魚片裹啤酒麵糊炸至金黃，配檸檬與塔塔醬',about:'寬頭牛尾魚魚片裹上啤酒麵糊炸至金黃，配檸檬與塔塔醬。鯒魚炸魚薯條是澳洲常見的海鮮吃法。',art:'moreton-flathead'},
 {id:'dine-moreton-crab',region:'moreton',name:'辣椒青蟳',orig:'chilli mud crab',method:'fry',tier:'basic',effect:'speed',amount:.05,casts:40,price:45,preparation:'青蟳配番茄與辣椒醬汁同炒',about:'鋸緣青蟳配上番茄與辣椒醬汁，帶著甜、酸、辣交織的味道。這道源自新加坡的菜，也能在澳洲海鮮餐館見到。',art:'moreton-chilli-crab'}
];
for(const d of dishes28){d.desc=mealDesc(d);dishes.push(d)}
restaurants.erie={name:'湖岸炸魚屋',about:'供應伊利湖常見的河黃鱸炸魚，也有以大眼梭鱸製作的香煎魚排。',dishes:dishes28.filter(d=>d.region==='erie')};restaurants.moreton={name:'海灣小館',about:'供應酥炸鯒魚與辣椒青蟳，配上檸檬與適合分享的醬汁。',dishes:dishes28.filter(d=>d.region==='moreton')};

// 0.29 Lake Victoria: approved Winam Gulf review.
const victoriaFish=[{"id":"omena","name":"新耙波拉魚","latin":"Rastrineobola argentea","min":0.002,"max":0.005,"price":36,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","omena"],["斯瓦希里語","dagaa"]],"cookingNote":"","form":"體長多在 8 公分以內，身體強烈側扁，通體銀亮，口大而略斜。","habitat":"近岸與開闊水域都有，白天多停在接近湖底處，夜裡上浮到表層。","diet":"吃浮游動物與落在水面的昆蟲，本身也是鯰魚與其他魚的主要獵物。","distribution":"維多利亞湖流域原生的小型鯉科魚。2006 年前後成為湖區商業漁獲量最大的魚種，肯亞稱 omena、烏干達稱 mukene、坦尚尼亞稱 dagaa。","food":"多曬乾後油炒或燉煮，是基蘇木常見的湖鮮。","hint":"成群游動的銀色小魚，湖區漁獲量最大的魚種。","source":"https://www.fishbase.se/summary/Rastrineobola-argentea.html"},{"id":"nileperch","name":"尼羅尖吻鱸","latin":"Lates niloticus","min":0.5,"max":12.0,"price":57,"requiredBait":"meat","rod":4,"bounty":0,"water":"fresh","kind":"引入魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","mbuta"],["斯瓦希里語","sangara"]],"cookingNote":"","form":"身體延長而厚實，口大，體色銀白。","habitat":"成魚多在較深的水域，幼魚在淺水生活。","diet":"成魚捕食魚類，較小的個體也吃大型甲殼類與昆蟲，幼魚吃浮游生物。","distribution":"原產尼羅河等非洲水系，1950 年代引入維多利亞湖後大量繁殖，原生慈鯛等魚類隨之銳減。如今是湖區最重要的出口漁獲。","food":"重要的食用魚，基蘇木常整尾或切片油炸。","hint":"大嘴的大型掠食魚，曾改變整座湖的魚群。","source":"https://www.fishbase.se/summary/Lates-niloticus.html"},{"id":"marbledlungfish","name":"埃塞俄比非洲肺魚","latin":"Protopterus aethiopicus","min":0.5,"max":5.0,"price":48,"requiredBait":"worm","rod":4,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","kamongo"],["斯瓦希里語","kamongo"]],"cookingNote":"","form":"身體圓長而滑，鱗片深埋在皮下，尾端尖細，胸鰭與腹鰭細長如絲，體表有大理石紋。","habitat":"湖岸、沼澤與氾濫平原，幼魚躲在紙莎草的根團中；需要游到水面呼吸空氣。","diet":"成魚主要吃螺貝類，也吃少量小魚與昆蟲。","distribution":"東非與中非；維多利亞湖原生，基蘇木附近湖灣的調查有紀錄。乾季時能在泥中結繭休眠，等待雨季。","food":"當地的食用魚。","hint":"會浮上水面換氣的長身魚，四片鰭細得像線。","source":"https://www.fishbase.se/summary/Protopterus-aethiopicus.html"},{"id":"sharptoothcatfish","name":"尖齒鬍鯰","latin":"Clarias gariepinus","min":0.3,"max":3.5,"price":45,"requiredBait":"worm","rod":2,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"革鬍鯰、大棘鬍鯰","localNames":[["盧歐語","ongala"],["斯瓦希里語","kambali"]],"cookingNote":"","form":"身體延長無鱗，頭扁平而覆骨板，口邊有四對鬚，背鰭與臀鰭很長。","habitat":"靜水的湖岸、濕地與泥底淺水；有輔助呼吸器官，可在缺氧水中呼吸空氣。","diet":"夜間覓食，以甲殼類、昆蟲與魚為主，食物範圍很廣。","distribution":"廣布非洲，也被引入世界各地養殖；維多利亞湖原生，基蘇木附近湖灣的漁獲統計有紀錄。","food":"重要的食用與養殖魚。","hint":"四對長鬚、頭像蓋著骨板的大鯰魚。","source":"https://www.fishbase.se/summary/Clarias-gariepinus.html"},{"id":"bagrus","name":"多克瑪鱨","latin":"Bagrus docmak","min":0.3,"max":5.0,"price":54,"requiredBait":"meat","rod":4,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","seu"]],"cookingNote":"","form":"頭部寬扁，從上方看近似方形，口邊有長鬚，背鰭後方有脂鰭。","habitat":"淺水與深水都有，可能偏好岩石或粗砂底，夜間與晨昏較活躍。","diet":"吃昆蟲、甲殼類、螺貝類與魚。","distribution":"尼羅河與東非湖泊；維多利亞湖原生，尼羅尖吻鱸擴散後數量銳減，後來在 3～6 公尺水深處有恢復紀錄。","food":"維多利亞湖的傳統食用魚。","hint":"頭部寬扁的大鯰魚，多在夜裡活動。","source":"https://www.fishbase.se/summary/Bagrus-docmak.html"},{"id":"victoriasqueaker","name":"維多利亞歧鬚鮠","latin":"Synodontis victoriae","min":0.05,"max":0.6,"price":45,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"灰銀色的身體散布大小不一的暗斑，下頜鬚分出細枝。","habitat":"較常在水深 13 公尺以上的軟泥底，也會進入淺水。","diet":"主要吃螺類與搖蚊幼蟲，能把螺肉從殼裡取出而不壓碎螺殼。","distribution":"維多利亞湖與周邊水系；基蘇木附近湖灣的調查中，近網箱的測站捕獲較多。","food":"食用資料待查，不作料理材料。","hint":"灰銀色的鯰魚，身上點著深色斑點，擅長吃螺。","source":"https://www.fishbase.se/summary/Synodontis-victoriae.html"},{"id":"marbledsqueaker","name":"阿氏歧鬚鮠","latin":"Synodontis afrofischeri","min":0.03,"max":0.15,"price":42,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"體長多在 15 公分以內，身上帶黃褐色大理石紋，下頜鬚分出細枝。","habitat":"偏好水深 20 公尺內的岸邊水域，在河流中更常見。","diet":"吃水生昆蟲幼蟲與螺貝類。","distribution":"維多利亞湖流域；在湖的淺水區取代維多利亞歧鬚鮠，基蘇木附近湖灣的調查有紀錄。","food":"食用資料待查，不作料理材料。","hint":"身上滿是黃褐色雲紋，鬍鬚像細小的樹枝。","source":"https://www.fishbase.se/summary/Synodontis-afrofischeri.html"},{"id":"silvercatfish","name":"銀鍚伯鯰","latin":"Schilbe intermedius","min":0.05,"max":0.6,"price":45,"requiredBait":"shrimp","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","rawa"]],"cookingNote":"","form":"身體銀白側扁，臀鰭非常長，眼睛位在頭部兩側。","habitat":"大型湖泊與河流的開闊水域，常成群活動，夜裡游到表層。","diet":"雜食而貪食，吃魚、昆蟲、螺貝類與淡水蝦；體長十多公分後以吃魚為主。","distribution":"廣布非洲；基蘇木附近湖灣的調查有紀錄，是湖中受尼羅尖吻鱸影響較小的鯰魚。","food":"有漁業與養殖利用。","hint":"銀白色的鯰魚，臀鰭從腹部一路延伸到尾巴前。","source":"https://www.fishbase.se/summary/Schilbe-intermedius.html"},{"id":"kannume","name":"卡氏長頜魚","latin":"Mormyrus kannume","min":0.2,"max":2.0,"price":48,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","suma"]],"cookingNote":"","form":"吻部向前延伸成粗長的「象鼻」，背鰭很長，從背部中段延伸到尾柄。","habitat":"近岸與離岸水域都有，獨居，夜間活動。","diet":"在湖底覓食，成魚幾乎只吃昆蟲，以搖蚊幼蟲為主。","distribution":"尼羅河與維多利亞湖等東非水系；基蘇木附近湖灣的調查有紀錄。","food":"有漁業利用。","hint":"長著粗長象鼻的魚，夜裡在湖底找蟲吃。","source":"https://www.fishbase.se/summary/Mormyrus-kannume.html"},{"id":"ningu","name":"維多利亞野鯪","latin":"Labeo victorianus","min":0.1,"max":1.0,"price":45,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","ningu"]],"cookingNote":"","form":"背部橄欖色、腹部淡乳白，唇前有一片皮瓣，背鰭、臀鰭與腹鰭末端常帶橘色。","habitat":"近岸淺水與注入湖泊的河流，雨季成群溯河，在氾濫的草地上產卵。","diet":"專門刮食石頭與水草表面的藻類。","distribution":"維多利亞湖流域特有。1950 年代曾占湖區漁獲一成，因溯河產卵時遭大量捕撈而銳減；基蘇木附近湖灣的調查仍有紀錄。","food":"當地的傳統食用魚。","hint":"唇前有皮瓣、鰭尖帶橘色的鯉科魚，雨季會溯河而上。","source":"https://www.fishbase.se/summary/Labeo-victorianus.html"},{"id":"victoriatilapia","name":"雜色口孵非鯽","latin":"Oreochromis variabilis","min":0.1,"max":0.8,"price":45,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","mbiru"]],"cookingNote":"","form":"大型吳郭魚，雌魚與未成熟雄魚為灰綠色、體側有 6～7 道暗色橫帶；繁殖期雄魚體色轉黃。","habitat":"淺水砂底，雄魚會在湖底築出由中央淺盆與一圈小坑組成的產卵場。","diet":"主要吃湖底藻類，也吃浮游生物。","distribution":"維多利亞湖原生的吳郭魚，曾是湖區重要漁獲，尼羅吳郭魚擴散後數量大減；國際自然保護聯盟評估為近危，基蘇木附近湖灣的調查只捕到極少數。","food":"過去是湖區的重要食用魚。","hint":"湖裡原生的吳郭魚，如今已不常見。","source":"https://www.fishbase.se/summary/Oreochromis-variabilis.html"},{"id":"sadlerrobber","name":"薩氏鮭脂鯉","latin":"Brachyalestes sadleri","min":0.01,"max":0.04,"price":36,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[],"cookingNote":"","form":"銀色的小型脂鯉，背部偏藍黑，體側有一道銀色縱帶，背鰭後方有一枚小脂鰭。","habitat":"近岸淺水的紙莎草與其他水生植物附近，雨季可能溯河產卵。","diet":"吃水生植物與水面上的搖蚊蛹，偶爾吃小魚。","distribution":"東非維多利亞湖、基奧加湖與魯夸湖流域；基蘇木附近湖灣的刺網調查有紀錄。","food":"市場上偶有少量販售。","hint":"在紙莎草邊游動的銀色小魚，背鰭後方還有一枚小鰭。","source":"https://www.fishbase.se/summary/Brachyalestes-sadleri.html"},{"id":"redfinbarb","name":"肋線魮","latin":"Enteromius apleurogramma","min":0.002,"max":0.004,"price":30,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[["盧歐語","adel"]],"cookingNote":"食用資料待查，不作料理材料。","form":"體長約 5 公分，背側褐綠、腹側銀白，鱗片中央有灰點，口邊有一對短鬚。","habitat":"湖邊的睡蓮沼澤與紙莎草附近，也見於溪流。","diet":"吃昆蟲幼蟲。","distribution":"維多利亞湖流域與魯夸湖流域；在基蘇木附近的湖灣，以灣底測站的生物量最高。","food":"食用資料待查，不作料理材料。","hint":"只有手指長的小魚，躲在湖邊的草叢裡。","source":"https://www.fishbase.se/summary/Enteromius-apleurogramma.html"},{"id":"victoriastonebasher","name":"維氏異吻象鼻魚","latin":"Marcusenius victoriae","min":0.03,"max":0.2,"price":42,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"身體紡錘形，吻部短而下彎，尾柄細長。","habitat":"近岸淺水的砂底或岩底，季節性移到紙莎草沼澤旁的泥底。","diet":"主要吃搖蚊幼蟲，也吃介形蟲、小型甲殼類與螺。","distribution":"維多利亞湖與基奧加湖；基蘇木附近湖灣的調查有紀錄。","food":"食用資料待查，不作料理材料。","hint":"尾柄細細的象鼻魚，嘴巴往下彎。","source":"https://www.fishbase.se/summary/Marcusenius-victoriae.html"},{"id":"darkstonebasher","name":"黑矮長頜魚","latin":"Pollimyrus nigricans","min":0.01,"max":0.03,"price":36,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[["盧歐語","abobo"]],"cookingNote":"食用資料待查，不作料理材料。","form":"小型象鼻魚，身體短而高，體色深暗。","habitat":"紙莎草等濕地植物邊緣的淺水泥底。","diet":"吃搖蚊幼蟲、淡水蝦與藻類。","distribution":"維多利亞湖流域；全年繁殖，雨季溯河到暫時性水塘產卵。基蘇木附近湖灣的調查有紀錄。","food":"食用資料待查，不作料理材料。","hint":"深色的小象鼻魚，常在濕地邊的泥底出沒。","source":"https://www.fishbase.se/summary/Pollimyrus-nigricans.html"},{"id":"alluaudhaplo","name":"奧氏溪麗鯛","latin":"Astatoreochromis alluaudi","min":0.02,"max":0.2,"price":42,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":true,"cookable":true,"other":"","localNames":[["盧歐語","hamaga"]],"cookingNote":"","form":"中型慈鯛，身體略側扁，尾鰭圓。身體前上方灰黃、後下方灰綠帶藍；一道暗帶從眼前斜穿過眼睛，延伸到鰓蓋附近。鰭為灰黃色，背鰭軟條部與尾鰭散布黑點，較大的個體臀鰭上有兩三列橘黃色的卵斑。臀鰭硬棘多為 5～6 根，比一般慈鯛多。","habitat":"水深 20 公尺以內的各種底質都能見到，也生活在紙莎草沼澤。","diet":"咽喉的齒骨厚實，長著臼狀牙齒，能壓碎螺殼；主要吃螺貝類，也會吃環境中最容易取得的食物。","distribution":"東非維多利亞湖流域。1904 年發表時的模式標本就採自基蘇木所在的湖灣，灣岸與周邊濕地到 2002 年仍有標本紀錄。後來也被引入東非多處水域控制螺類。","food":"有漁業利用。","hint":"眼睛斜穿一道暗帶、能咬碎螺殼的慈鯛。","source":"https://www.fishbase.se/summary/Astatoreochromis-alluaudi.html"},{"id":"laparogramma","name":"腹紋樸麗魚","latin":"Haplochromis laparogramma","min":0.005,"max":0.015,"price":36,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"體長約 8 公分的細長小慈鯛，眼睛大。雄魚背部深藍，體側轉為綠銀色，腹部銀白；一道深色縱帶從頭後延伸到尾鰭基部，學名就是指這道縱帶。背鰭與尾鰭淡橘黃色，臀鰭透明帶橘色卵斑，腹鰭黑色。","habitat":"離岸的泥底水域，原始紀錄的水深約 15～33 公尺；繁殖期會游到較淺的灣內。","diet":"吃搖蚊等雙翅目昆蟲的幼蟲與蛹，不直接在湖底覓食。","distribution":"維多利亞湖特有；1990～1995 年在灣口的魯辛加島、姆方加諾島一帶有標本紀錄。坦尚尼亞姆萬扎灣的研究指出，本種從 1991 年起逐漸回升。","food":"食用資料待查，不作料理材料。","hint":"身側拉著一道深色縱帶的小慈鯛，腹鰭是黑的。","source":"https://www.fishbase.se/summary/Haplochromis-laparogramma.html"},{"id":"xenognathus","name":"異頜樸麗魚","latin":"Haplochromis xenognathus","min":0.01,"max":0.03,"price":39,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"體長約 11 公分的慈鯛，頭部輪廓陡斜。牙尖強烈向內彎，下頜前方的牙齒幾乎平躺，學名意為「奇特的頜」。成年雄魚背部暗古銅色，向腹面轉為灰古銅色，頰部與鰓蓋有古銅光澤；背鰭煤灰色、軟條間帶紅紋，尾鰭暗色帶紅點，臀鰭有黃色卵斑。雌魚體色相近，鰭色偏橄欖黃。","habitat":"底質較硬的沿岸淺水，已知標本多採自開闊的砂岸。","diet":"胃中最常見的是不帶殼的螺肉，可能先把螺肉從殼中拉出；也吃搖蚊與蜉蝣幼蟲。","distribution":"維多利亞湖特有；1984～1993 年在魯辛加水道與魯辛加島沿岸有標本紀錄。","food":"食用資料待查，不作料理材料。","hint":"古銅色的慈鯛，專門把螺肉從殼裡拉出來吃。","source":"https://www.fishbase.se/summary/Haplochromis-xenognathus.html"},{"id":"plagiodon","name":"緣牙樸麗魚","latin":"Haplochromis plagiodon","min":0.005,"max":0.015,"price":36,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"體長約 8 公分的慈鯛，頭部輪廓平直而陡斜。外排牙齒粗壯，尖端斜切，學名意為「斜齒」。活體顏色不明；保存標本為銀灰到褐灰色，體側與尾柄有 8～10 道橫帶，並有一道明顯的中央縱帶，臀鰭上有兩列小卵斑。","habitat":"開闊砂岸的淺水。","diet":"原始描述的兩尾標本腸中有雙翅目與蜉蝣幼蟲，混著許多細砂；後來的分類研究依牙齒形態，把牠歸入以口部剝食螺類的類群。","distribution":"維多利亞湖特有；1982～1993 年在基蘇木附近的登加湖灘與魯辛加島等地有標本紀錄。國際自然保護聯盟評估為易危。","food":"食用資料待查，不作料理材料。","hint":"牙齒尖端斜切的小慈鯛，體側排著細細的橫帶。","source":"https://www.fishbase.se/summary/Haplochromis-plagiodon.html"},{"id":"victorianus","name":"維多利亞湖樸麗魚","latin":"Haplochromis victorianus","min":0.05,"max":0.15,"price":66,"requiredBait":"meat","rod":4,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"體長約 12～17 公分、身體較高的掠食性慈鯛，頭背輪廓平直，下頜平或略斜，前端與上頜齊平或稍微突出。成年雄魚背部是帶銀光的青綠色，體側與腹部轉為銀色；背鰭暗色、鰭膜尖端黑色，軟條間有深紅斑，尾鰭後緣與下緣血紅色，臀鰭帶紅色並有許多橘黃色卵斑，腹鰭黑色。雌魚底色相近，沒有紅色區塊與卵斑。雌雄的腹鰭第一根鰭條都略延長成絲狀，在同類中少見。","habitat":"有遮蔽的灣區，水深約 6～12 公尺、湖底覆蓋厚有機泥的地方。","diet":"吃魚，而且獵物特別小，多是體長 1～1.5 公分的仔魚，可辨認的是樸麗魚的仔魚。","distribution":"維多利亞湖特有。1904 年發表時的模式標本採自基蘇木所在的湖灣，倫敦自然史博物館也藏有灣內另一處的標本；目前查到的最後紀錄是 1985 年在湖的坦尚尼亞一側。國際自然保護聯盟評估為極危，可能已經滅絕。","food":"食用資料待查，不作料理材料。","hint":"極少見的掠食慈鯛，雄魚尾鰭鑲著血紅色的邊。","source":"https://www.fishbase.se/summary/Haplochromis-victorianus.html"},{"id":"dwarfmouthbrooder","name":"多色褶唇麗魚","latin":"Pseudocrenilabrus multicolor","min":0.003,"max":0.01,"price":33,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"湖區原生魚種","edible":null,"cookable":false,"other":"雜色褶唇麗魚","localNames":[],"cookingNote":"食用資料待查，不作料理材料。","form":"體長多在 7～8 公分以內的小慈鯛，尾鰭圓。活魚背部與體側帶淡銅紫色，腹部偏白，鱗片有強烈虹彩，頭部與各鰭散布藍綠色亮點；雄魚體色較鮮豔，臀鰭末端有一枚紅色或橘色斑。繁殖期雄魚全身泛起天藍色光澤，激動時喉部與腹鰭轉成深黑；受驚時體色轉灰綠，浮現黑色縱紋與橫帶。","habitat":"有遮蔽、水草茂密的湖岸植物帶與沼澤，也見於溪流、池塘與注入湖泊的支流，常躲在水草莖間或漂浮植物下。","diet":"食性很雜，吃小魚、搖蚊與蜉蝣幼蟲、小型甲殼類、藻類與水草碎片。","distribution":"尼羅河水系到維多利亞湖、基奧加湖等東非湖泊。灣口魯辛加島的湖灘與基蘇木一帶有 1990 年代的標本紀錄，肯亞一側的流域到 2020 年代仍持續採到。雌魚把卵含在口中孵化，是最早在水族箱中繁殖成功的慈鯛之一。","food":"以觀賞魚聞名，食用資料待查，不作料理材料。","hint":"躲在水草間的小慈鯛，雄魚臀鰭末端點著一枚紅斑。","source":"https://www.fishbase.se/summary/Pseudocrenilabrus-multicolor.html"}];
fish.push(...victoriaFish);species.push(...victoriaFish);
const victoriaAnimal={"id":"niloticacaridina","name":"尼羅米蝦","latin":"Caridina nilotica","min":0.001,"max":0.002,"price":36,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","category":"crustacean","kind":"淡水蝦類","other":"","localNames":[],"edible":true,"cookable":false,"cookingNote":"本作不作料理材料。","form":"體長只有兩三公分的透明小蝦。","habitat":"湖中水層與湖底。","diet":"攝食有機碎屑與小型生物。","distribution":"廣布非洲；維多利亞湖生態改變後數量增加，是尼羅尖吻鱸等魚的重要食物，湖區漁業組織列為需要追蹤的資源。","food":"當地有漁獲利用，本作不作料理材料。","hint":"近乎透明的小蝦，是湖裡許多魚的食物。","source":"https://deepblue.lib.umich.edu/handle/2027.42/42892"};animals.push(victoriaAnimal);species.push(victoriaAnimal);
plants.push({"id":"papyrus","name":"紙莎草","latin":"Cyperus papyrus","other":"","water":"fresh","type":"濱水植物","drift":true,"form":"高大的莎草，三稜形的莖頂端散開成一團細絲狀的苞葉。本作採集物為漂落的莖段。","habitat":"湖岸與河口的淺水濕地，常成片生長。","distribution":"熱帶非洲；登加濕地的紙莎草沿湖岸延伸約 1.5～5 公里，是基蘇木一帶湖岸重要的濕地植物。","source":"https://www.keybiodiversityareas.org/site/factsheet/6427"});
regions.push({"id":"victoria","name":"維多利亞湖","area":"肯亞・基蘇木","lat":-0.14,"lon":34.74,"water":"大型湖泊・淡水","license":{"tier":1,"cost":150,"atlas":8},"desc":"維多利亞湖是非洲面積最大的湖泊，由肯亞、烏干達與坦尚尼亞共有。本作釣點位於肯亞基蘇木附近的湖灣，岸邊有大片紙莎草濕地，漁船每天在湖灘卸下漁獲。湖裡原本有數百種原生慈鯛；20 世紀引入尼羅尖吻鱸與吳郭魚後，魚群大幅改變。如今銀色小魚 omena、尼羅尖吻鱸與吳郭魚是主要漁獲，倖存的原生慈鯛、鯰魚、肺魚與象鼻魚也仍在灣內生活。","startNote":"先用麵團收集湖區小魚與吳郭魚，換用蚯蚓後可遇到更多原生魚。大型魚與稀有慈鯛需要升級釣竿。","pool":{"omena":12,"niletilapia":10,"tilapia":6,"sadlerrobber":6,"marbledsqueaker":5,"victoriasqueaker":5,"silvercatfish":5,"victoriatilapia":5,"redfinbarb":4,"ningu":4,"victoriastonebasher":4,"darkstonebasher":3,"nileperch":4,"kannume":3,"sharptoothcatfish":3,"marbledlungfish":3,"bagrus":2,"alluaudhaplo":4,"laparogramma":4,"xenognathus":3,"plagiodon":2,"victorianus":1,"dwarfmouthbrooder":2},"basePool":{"omena":12,"niletilapia":10,"tilapia":6,"sadlerrobber":6,"marbledsqueaker":5,"victoriasqueaker":5,"silvercatfish":5,"victoriatilapia":5,"redfinbarb":4,"ningu":4,"victoriastonebasher":4,"darkstonebasher":3,"nileperch":4,"kannume":3,"sharptoothcatfish":3,"marbledlungfish":3,"bagrus":2,"alluaudhaplo":4,"laparogramma":4,"xenognathus":3,"plagiodon":2,"victorianus":1,"dwarfmouthbrooder":2},"animals":{"niloticacaridina":6},"weeds":{"hyacinth":50,"papyrus":35,"waterlettuce":15},"source":"https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/csp2.12826"});
world.weatherOdds.victoria=[35,35,30];world.flavor.victoria={"phase":{"dawn":["薄霧貼著湖面，紙莎草叢裡傳出水鳥的叫聲。","早出的漁船推開水面，船尾拖出一道細長的波紋。"],"day":["日光照在寬闊的灣面，遠處的島影輪廓分明。","湖灘上人聲熱鬧，剛上岸的漁獲排在木板上。"],"dusk":["夕陽把湖水染成橘色，帆船慢慢靠岸。","湖灘飄來炸魚的香味，岸邊的人準備收網。"],"night":["灣內只剩零星燈火，蛙聲從濕地傳來。","夜風吹過紙莎草，葉叢沙沙作響。"]},"weather":{"sunny":["陽光下的湖面亮得刺眼，風把水波推向岸邊。","晴空下，對岸的山丘清楚可見。"],"cloudy":["雲層壓在湖面上，水色轉成灰綠。","厚雲遮住日光，濕地顯得更安靜。"],"rain":["一陣大雨掃過灣面，雨點打在布袋蓮的葉片上。","雨幕從湖心移來，很快又往岸上過去。"]},"facts":["維多利亞湖是非洲面積最大的湖泊，湖水經尼羅河向北流出。","基蘇木所在的湖灣經由狹窄水道與主湖相通，灣內水淺，越往灣底越混濁。","omena 在肯亞、mukene 在烏干達、dagaa 在坦尚尼亞，指的都是同一種銀色小魚。","1989 年布袋蓮在湖中大量擴散，至今仍是近岸常見的水生植物。"]};
cuisines.push(["africa","非洲"]);
for(const r of [{"id":"omena-stew","name":"燉奧梅納","fish":"omena","fishes":["omena"],"effect":"double","amount":0.08,"casts":40,"cost":15,"about":"把曬乾的 omena 下鍋油炒或燉煮，是基蘇木常見的湖鮮。","preparation":"把曬乾的 omena 下鍋油炒或燉煮，是基蘇木常見的湖鮮。","orig":"omena stew","method":"soup","tier":"home","cuisine":"africa","origin":"肯亞・基蘇木"},{"id":"fried-fish-kuon","name":"炸魚配烏加利","fish":"niletilapia","fishes":["niletilapia","nileperch"],"effect":"speed","amount":0.08,"casts":80,"cost":15,"about":"把吳郭魚或尼羅尖吻鱸整尾或切片油炸，配上玉米粉做的烏加利與番茄洋蔥沙拉。","preparation":"把吳郭魚或尼羅尖吻鱸整尾或切片油炸，配上玉米粉做的烏加利與番茄洋蔥沙拉。","orig":"fried fish with kuon","method":"fry","tier":"home","cuisine":"africa","origin":"肯亞・基蘇木"}]){r.desc=mealDesc(r);recipes.push(r)}
const victoriaDishes=[{"id":"dine-victoria-omena","region":"victoria","name":"燉奧梅納","orig":"omena stew","effect":"double","amount":0.08,"casts":40,"price":45,"tier":"basic","method":"soup","about":"把曬乾的 omena 下鍋油炒或燉煮，是基蘇木常見的湖鮮。","preparation":"把曬乾的 omena 下鍋油炒或燉煮，是基蘇木常見的湖鮮。","art":"omena-stew"},{"id":"dine-victoria-mbuta","region":"victoria","name":"炸尼羅尖吻鱸配烏加利","orig":"fried mbuta with kuon","effect":"lure","amount":2.5,"casts":80,"price":270,"tier":"classic","method":"fry","about":"湖灘餐館把剛上岸的尼羅尖吻鱸炸得酥脆，配上烏加利與蔬菜。","preparation":"炸尼羅尖吻鱸配烏加利與蔬菜","art":"fried-fish-kuon"}];for(const d of victoriaDishes){d.desc=mealDesc(d);dishes.push(d)}
restaurants.victoria={name:"登加湖岸食堂",dishes:victoriaDishes};
for(const r of recipes.filter(r=>r.cuisine==="basic")){const ids=r.id==="deepfry"?["sadlerrobber","alluaudhaplo"]:["marbledlungfish","sharptoothcatfish","bagrus","silvercatfish","kannume","ningu","victoriatilapia","sadlerrobber","alluaudhaplo"];const animal=id=>animals.some(a=>a.id===id),cut=r.fishes.findIndex(animal);r.fishes.splice(cut<0?r.fishes.length:cut,0,...ids);if(Array.isArray(r.fish))r.fish=[...r.fishes]}
note27("niletilapia","肯亞基蘇木附近的維多利亞湖亦有紀錄；1950 年代引入維多利亞湖，現為湖區主要漁獲之一。");
note27("tilapia","肯亞基蘇木附近的維多利亞湖亦有紀錄。");
note27("hyacinth","1989 年在維多利亞湖大量擴散，至今仍覆蓋基蘇木附近湖灣的許多近岸水面。");
note27("waterlettuce","肯亞基蘇木附近的維多利亞湖亦有紀錄。");
addName27("niletilapia","盧歐語","nyamami");

// 0.30 Itaipu Reservoir: approved manuscript, explicit 100-cast/90-yuan meal settings.
const itaipuFish=[{"id":"altiparanae","name":"高身麗脂鯉","latin":"Astyanax altiparanae","min":0.005,"max":0.06,"price":33,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"身體側扁，肩部有橫向橢圓形黑斑，尾柄的黑斑延伸到尾鰭中央。","habitat":"上巴拉那河的河川與湖庫，伊泰普水庫有採樣紀錄。","diet":"雜食，攝食植物、昆蟲等，會隨環境中的食物供應改變。","distribution":"上巴拉那河流域，伊泰普水庫有種級採樣紀錄。","food":"有養殖及食用利用，本作不作料理材料。","hint":"肩部與尾根各有黑斑的小型脂鯉。","source":"https://www.geneticsmr.org/articles/mitochondrial-dloop-nucleotide-diversity-in-astyanax-osteichthyes-characidae-from-the-upper-paran-and-upper-paraguay-riv.pdf"},{"id":"bonita","name":"博奈直線脂鯉","latin":"Moenkhausia bonita","min":0.003,"max":0.012,"price":33,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":null,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","lambari-de-cauda-listrada"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體銀白至淡黃，體側深色縱帶通向尾根，尾鰭上下葉的末端都有深色邊。","habitat":"水流較緩的近岸水層，伊泰普聖赫勒拿沿岸有採集紀錄。","diet":"主要吃水生與陸生無脊椎動物，包括昆蟲。","distribution":"巴拉那、巴拉圭、烏拉圭等水系。","food":"有觀賞利用潛力，食用情況尚不明；本作不作料理材料。","hint":"體側拉著深色長帶，尾鰭上下端鑲著暗邊的小魚。","source":"https://www.scielo.br/j/bn/a/MwFwZSDHBcBsvXLC88kCdgd/?lang=en"},{"id":"insculpta","name":"蝕齒斯坦達脂鯉","latin":"Steindachnerina insculpta","min":0.01,"max":0.08,"price":33,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":null,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","saguiru-do-rabo-amarelo"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體銀色，沿側線有一道深色縱帶，到了尾柄變寬並延伸到尾鰭中央，鰭帶黃色。","habitat":"上巴拉那河的淡水水域，在底層與中層活動。","diet":"以有機碎屑為主，也攝入其中的藻類等微小生物。","distribution":"上巴拉那河流域；伊泰普聖赫勒拿的早期調查有紀錄。","food":"主要用作釣餌，食用情況尚不明；本作不作料理材料。","hint":"身側帶著深色長線，在中下層攝食有機碎屑的小型脂鯉。","source":"https://www.scielo.br/j/bn/a/MwFwZSDHBcBsvXLC88kCdgd/?lang=en"},{"id":"nasutus","name":"大鼻裂齒脂鯉","latin":"Schizodon nasutus","min":0.1,"max":0.7,"price":42,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","taguara"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體細長，銀色至淡黃色，吻部突出，尾柄有向尾鰭中央延伸的黑斑。","habitat":"巴拉那、巴拉圭與烏拉圭水系的河川與相連水域，伊泰普沿岸也有採集紀錄。","diet":"以植物性食物為主，包括草葉、植物碎片、根與藻類，也會攝入少量小型動物。","distribution":"拉普拉塔水系。","food":"有漁業利用紀錄，本作不作料理材料。","hint":"吻部向前突出，尾根拖著一道深色斑。","source":"https://www.scielo.br/j/bn/a/MwFwZSDHBcBsvXLC88kCdgd/?lang=en"},{"id":"friderici","name":"弗氏兔脂鯉","latin":"Leporinus friderici","min":0.1,"max":1.2,"price":45,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"三點鉛筆、三點大鉛筆、三點綠鉛筆","localNames":[["巴西葡萄牙語","araçu-cabeça-gorda"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體近紡錘形，體側的三枚黑點隨成長變得清楚。","habitat":"淡水河川與水庫。","diet":"雜食，會吃植物、昆蟲與魚，食物比例隨棲地和可取得的資源改變。","distribution":"南美洲魚種，伊泰普水庫的採樣與漁獲研究有種級紀錄。","food":"有漁業及養殖利用，本作不作料理材料。","hint":"體側依序排著三枚黑點的兔脂鯉。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"obtusidens","name":"鈍吻兔脂鯉","latin":"Megaleporinus obtusidens","min":0.3,"max":3.5,"price":48,"requiredBait":"dough","rod":2,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"身體厚實而略側扁，吻短鈍，上下頜有門齒狀的牙；幼魚體側三枚暗斑較明顯，大魚可能逐漸淡去。","habitat":"成魚偏好河川較深的水域，湖庫漁獲也有紀錄。","diet":"吃種子、植物、昆蟲幼蟲、小型甲殼類，也會吃小魚。","distribution":"南美洲拉普拉塔等水系；伊泰普的近岸與漁獲研究均有紀錄。","food":"有食用與遊釣利用，本作不作料理材料。","hint":"嘴邊長著門齒，年幼時身側有三枚暗斑。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"lineatus","name":"條紋鯪脂鯉","latin":"Prochilodus lineatus","min":0.3,"max":3.5,"price":45,"requiredBait":"dough","rod":2,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"身體厚實，銀色體側配著較深的背部，嘴唇厚，上面排列許多細小牙齒。","habitat":"河川與湖庫，生活史包含河川洄游。","diet":"攝食有機碎屑與附著生物，從中取得食物。","distribution":"巴拉那等南美水系；伊泰普水庫的種級漁獲研究有紀錄。","food":"有漁業與養殖利用，本作不作料理材料。","hint":"以碎屑與附著生物為食的河川洄游魚。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"lippincottianus","name":"密斑銀板魚","latin":"Metynnis lippincottianus","min":0.02,"max":0.15,"price":39,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","pacu-marreca"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體高而側扁，銀色體側散布暗色斑點；外形容易與同屬銀板魚混淆。","habitat":"淡水河川與湖庫的水層。","diet":"以植物、種子和浮游植物為主，也會吃軟體動物、節肢動物與碎屑。","distribution":"原產南美洲北部多個水系，伊泰普的近代種級漁獲研究有紀錄。","food":"巴西有居民捕捉食用的紀錄，本作不作料理材料。","hint":"像銀色薄圓盤，體側灑著許多暗點。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"spottedpimelodus","name":"斑油鯰","latin":"Pimelodus maculatus","min":0.08,"max":1.2,"price":45,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["葡萄牙語","mandi-amarelo"],["巴拉圭西班牙語","bagre amarillo"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"體側有多枚深色斑點，口邊三對細長鬚，尾鰭分叉；背鰭與胸鰭帶硬棘。","habitat":"河川與湖庫的中下層，也會洄游。","diet":"吃昆蟲、甲殼類、植物碎片和魚。","distribution":"拉普拉塔等水系；伊泰普有種級漁獲紀錄。","food":"當地有商業食用與遊釣利用，本作不作料理材料。","hint":"長鬚伸向前方，身上點著一排排暗斑。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"labrosus","name":"南美伊林油鯰","latin":"Iheringichthys labrosus","min":0.05,"max":0.5,"price":42,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","mandi-boca"],["巴拉圭西班牙語","trompudo、juru pito"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體延長、銀色，體側有成行的深褐斑點，口略朝下，口邊長著鬚。","habitat":"河川與水庫的底層。","diet":"伊泰普的胃內容研究以搖蚊等水生昆蟲與雙殼貝為主。","distribution":"巴拉那河流域，伊泰普不同縱向水域與聖赫勒拿沿岸均有研究紀錄。","food":"是伊泰普的次要商業漁獲，本作不作料理材料。","hint":"在水底尋找昆蟲幼蟲與小貝類的鯰魚。","source":"https://www.scielo.br/j/bn/a/MwFwZSDHBcBsvXLC88kCdgd/?lang=en"},{"id":"galeatus","name":"盔喉鰭鯰","latin":"Trachelyopterus galeatus","min":0.03,"max":0.3,"price":42,"requiredBait":"worm","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"副項鰭鯰","localNames":[["巴西葡萄牙語","anujá"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體粗短，頭部略扁，下頜突出，褐色身體帶較深的斑紋。","habitat":"河川洪氾地與湖庫近岸，也能適應含氧較低的水域。","diet":"雜食；聖赫勒拿的胃內容研究以掉入水中的陸生昆蟲為主。","distribution":"南美洲多個水系，在伊泰普聖赫勒拿沿岸有採集紀錄。","food":"有區域漁業及食用利用，本作不作料理材料。","hint":"頭部略扁、帶深色花紋，會吃落水昆蟲的鯰魚。","source":"https://www.scielo.br/j/bn/a/MwFwZSDHBcBsvXLC88kCdgd/?lang=en"},{"id":"granulosus","name":"顆粒翼陶樂鯰","latin":"Pterodoras granulosus","min":0.3,"max":3.5,"price":48,"requiredBait":"worm","rod":2,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","abotoado"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體粗壯，體側排列帶棘的骨板，口邊有長鬚。","habitat":"河川與水庫底層，成魚也在主庫區活動。","diet":"雜食；伊泰普研究記錄牠隨食物供應改吃雙殼貝、藻類與水生植物。","distribution":"南美洲多個水系；伊泰普長期漁獲有紀錄。","food":"有區域食用漁業利用，本作不作料理材料。","hint":"身側像披著一排帶刺盔甲的粗壯鯰魚。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"oremaculatus","name":"山斑低眼鯰","latin":"Hypophthalmus oremaculatus","min":0.2,"max":2,"price":45,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"身體側扁、沒有鱗片，眼睛小而偏下，三對鬚伸在口邊，臀鰭很長。","habitat":"河川與水庫的開闊水層。","diet":"濾食浮游動物，包括枝角類與橈足類；麵團是本作對應濾食魚的配餌設定。","distribution":"伊泰普有種級漁獲紀錄，當地早期文獻曾將牠鑑定為無齒低眼鯰，後續研究已修正。","food":"是當地商業漁獲之一，本作不作料理材料。","hint":"眼睛長在頭部偏下的位置，游在開闊水面的濾食鯰魚。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"squamosissimus","name":"巴西異鱗石首魚","latin":"Plagioscion squamosissimus","min":0.1,"max":2,"price":51,"requiredBait":"shrimp","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","pescada-do-piauí"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"背部銀藍、腹部較白，口斜而有細尖牙。","habitat":"湖泊、水庫等淡水開闊水域。","diet":"吃魚與蝦；聖赫勒拿近岸研究記錄牠大量攝食十足類甲殼動物。","distribution":"原產南美洲北部水系，已出現在伊泰普水庫。","food":"白肉受食用漁業利用，本作不作料理材料。","hint":"生活在淡水裡的銀藍色石首魚，會捕食蝦。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"acestrolacustris","name":"湖沼狼牙脂鯉","latin":"Acestrorhynchus lacustris","min":0.03,"max":0.45,"price":48,"requiredBait":"meat","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"身體細長，銀色至淡黃，口裡有尖牙，肩部與尾根各有一枚明顯黑斑，鰭帶黃色。","habitat":"河川與湖庫水層，聖赫勒拿近岸有採集紀錄。","diet":"捕食小魚。","distribution":"巴拉那與聖弗朗西斯科等水系；伊泰普水庫亦有紀錄。","food":"有食用與低價漁獲利用紀錄，本作不作料理材料。","hint":"細長的嘴裡長著尖牙，尾根帶一枚黑斑。","source":"https://www.scielo.br/j/bn/a/MwFwZSDHBcBsvXLC88kCdgd/?lang=en"},{"id":"dorado","name":"大口小脂鯉","latin":"Salminus brasiliensis","min":0.5,"max":6,"price":60,"requiredBait":"meat","rod":4,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"體形結實，成魚呈金黃色，頭大、口寬。","habitat":"南美洲河川與相連水域，具有河川洄游習性。","diet":"肉食，成魚捕食魚類，也吃甲殼類。","distribution":"巴拉那、巴拉圭與烏拉圭等水系；伊泰普水庫及其漁業研究有紀錄。","food":"有食用與遊釣利用，本作不作料理材料。","hint":"金黃色的大型掠食脂鯉，名字雖有「小」，體型卻很大。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"corruscans","name":"南美鴨嘴鯰","latin":"Pseudoplatystoma corruscans","min":0.5,"max":10,"price":66,"requiredBait":"meat","rod":4,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":true,"other":"閃光鴨嘴鯰","localNames":[["葡萄牙語","pintado"]],"localNameNote":"","cookingNote":"","form":"頭部寬扁，長鬚向外伸展，灰色身體布滿深色圓點。","habitat":"南美洲河川底層，也有水庫漁獲紀錄，生活史包含洄游。","diet":"主要捕食魚類。","distribution":"巴拉那與聖弗朗西斯科河流域；伊泰普有種級漁獲紀錄。","food":"重要食用與養殖魚，瓜伊拉的地方菜把魚塊放在陶瓦上烹調；本作可作瓦烤鴨嘴鯰。","hint":"寬扁的嘴像鴨嘴，身體散著一顆顆深色圓點。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"kelberi","name":"凱氏麗魚","latin":"Cichla kelberi","min":0.2,"max":3.5,"price":54,"requiredBait":"meat","rod":2,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"巴布亞金三間、巴布亞孔雀慈鯛","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"幼魚偏灰黃，成長後轉為金黃色，體側有三道深色橫帶，尾根有圓形眼斑。","habitat":"南美洲淡水河川與湖庫。","diet":"捕食魚類。","distribution":"原產巴西托坎廷斯—阿拉瓜亞水系，已被帶到其他水系；伊泰普近代漁獲與科學監測有種級紀錄。","food":"有漁獲利用，本作不作料理材料。","hint":"體側三道深色橫帶，尾巴根部還有一枚眼斑。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"mesopotamicus","name":"細鱗肥脂鯉","latin":"Piaractus mesopotamicus","min":0.3,"max":5,"price":54,"requiredBait":"dough","rod":4,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["葡萄牙語","pacu-caranha"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體高而側扁，鱗片細小，口裡有適合壓碎食物的臼齒狀牙齒。","habitat":"河川、洪氾林與相連湖庫，漲水時會進入淹水林地。","diet":"偏植物性的雜食魚，吃落水的果實、堅果與種子，也會吃小型動物。","distribution":"巴拉那—巴拉圭等水系，伊泰普種級漁獲研究有紀錄。","food":"南美洲重要食用與養殖魚；本作不作料理材料。","hint":"嘴裡長著臼齒，會到淹水林裡吃果實的大型脂鯉。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"marginatus","name":"多斑鋸脂鯉","latin":"Serrasalmus marginatus","min":0.03,"max":0.8,"price":45,"requiredBait":"meat","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"身體高而側扁，幼魚略帶黃色，成長後體色轉深，腹緣有鋸齒狀稜脊，下頜突出並帶尖牙。","habitat":"河川及相連湖庫的近岸水域，伊泰普聖赫勒拿沿岸有採集紀錄。","diet":"吃其他魚的肌肉與鰭；當地胃內容研究以魚類碎片為主。","distribution":"原見於巴拉圭與下巴拉那水系，瓜伊拉瀑布屏障消失後進入上巴拉那水域。","food":"潘塔納爾有居民捕捉食用的研究紀錄，本作不作料理材料。","hint":"下頜突出、腹部像鋸邊，會咬食其他魚的魚鰭。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"rhaphiodon","name":"亞馬遜河針牙脂鯉","latin":"Rhaphiodon vulpinus","min":0.2,"max":3.5,"price":54,"requiredBait":"meat","rod":2,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","chafalote"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體細長而側扁，口部有一對發達的犬齒。","habitat":"河川與水庫的開闊水層；伊泰普研究記錄牠較常出現在水面下數公尺，也會靠岸追獵。","diet":"以小魚為主，幼魚也吃無脊椎動物。","distribution":"南美洲多個水系；中文名雖帶「亞馬遜河」，伊泰普水庫與聖赫勒拿沿岸同樣有種級紀錄。","food":"有當地漁業利用，本作不作料理材料。","hint":"身體修長、犬齒發達，會在水層追獵小魚的脂鯉。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"rhinelepis","name":"南美鱗甲鯰","latin":"Rhinelepis aspera","min":0.1,"max":2,"price":45,"requiredBait":"dough","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","acari-roncador"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"身體延長，頭部寬而偏扁，身上覆蓋骨板；身體與各鰭呈深灰色，沒有明顯斑塊。","habitat":"上巴拉那河有水流、底質較硬的水域，庫區漁獲也有紀錄。","diet":"用下位口吸入細小有機碎屑，並非以強齒刮食粗硬附著物。","distribution":"聖弗朗西斯科與上巴拉那水系，伊泰普漁獲研究有種級紀錄。","food":"有商業漁業利用；本作不作料理材料。","hint":"深灰色的骨板覆蓋全身，貼著水底吸食細碎有機物。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"sorubim","name":"鏟吻油鯰","latin":"Sorubim lima","min":0.1,"max":2,"price":51,"requiredBait":"meat","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[["巴西葡萄牙語","surubim-bico-de-pato"],["巴拉圭西班牙語","pico de pato"]],"localNameNote":"","cookingNote":"本作不作料理材料。","form":"頭部寬扁，上頜向前伸出，像一把小鏟；身側有一道從頭後延伸到尾部的深色縱帶，口邊長鬚明顯。","habitat":"南美洲淡水河川與相連湖庫；成魚會成群活動，偏夜間覓食。","diet":"主要吃魚與甲殼類。","distribution":"安地斯山以東多個南美水系，伊泰普庫區漁獲及聖赫勒拿近岸都有種級紀錄。","food":"有食用與觀賞交易紀錄，本作不作料理材料。","hint":"吻部像鏟子，體側拉著一道深色長帶的鯰魚。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"},{"id":"jenynsii","name":"詹氏甲鰨","latin":"Catathyridium jenynsii","min":0.03,"max":0.6,"price":45,"requiredBait":"shrimp","rod":0,"bounty":0,"water":"fresh","kind":"水庫漁獲魚種","edible":true,"cookable":false,"other":"","localNames":[],"localNameNote":"未列出的當地名稱待查。","cookingNote":"本作不作料理材料。","form":"身體扁平而近橢圓，兩眼都在右側，深褐色身體帶暗紋與斑點，左側貼著水底。","habitat":"完全生活在淡水中，常半埋在沙或細泥裡，藉體色融入底質。","diet":"伏在水底等待，捕食靠近口邊的小魚。","distribution":"巴拉那與烏拉圭水系；伊泰普的種級漁獲研究有紀錄。","food":"有零星食用紀錄，本作不作料理材料。","hint":"兩眼移到身體同一側，半埋在淡水沙底的比目魚。","source":"https://onlinelibrary.wiley.com/doi/10.1155/jai/6631571"}];fish.push(...itaipuFish);species.push(...itaipuFish);
plants.push({"id":"egeriadensa","name":"水蘊草","unit":"份","latin":"Egeria densa","other":"","water":"fresh","type":"沉水植物","form":"細長莖上輪生數枚狹長綠葉，開白色三瓣小花。","habitat":"整株沉在湖泊、池塘與緩流水域中，莖段也能繁殖。","distribution":"原產南美洲，伊泰普水庫的巴西岸調查有種級紀錄；也被帶到其他地區栽培與歸化。","hint":"葉片一圈圈長在莖上，整株沉在水中的綠色水草。","localNames":[["巴西葡萄牙語","elodea brasileira"]],"source":"https://ecologia.ib.usp.br/portal/dmdocuments/Revista_Projeto_Ypora_macrofitas.pdf"});regions.push({"id":"itaipu","name":"巴拉那河・伊泰普水庫","area":"巴西／巴拉圭・南美洲","lat":-24.85,"lon":-54.4,"water":"巴拉那河水系・淡水水庫","south":true,"license":{"tier":1,"cost":150,"atlas":8},"desc":"巴拉那河在巴西與巴拉圭邊界匯成寬闊的伊泰普水庫，蜿蜒庫灣伸入兩岸，淺水處長著沉水草與漂浮植物。小型脂鯉在近岸活動，鯰魚與石首魚則構成另一部分漁獲。大壩蓄水改變了原有河道，也淹沒了曾經阻隔魚群的瀑布；來自不同水域的魚在這裡相遇，留下持續變動的魚群。","startNote":"先用麵團收集脂鯉與吳郭魚，換用蚯蚓、蝦肉和小魚後可遇到其他魚種。細鱗肥脂鯉與大型河川魚需要升級釣竿。","pool":{"altiparanae":9,"bonita":5,"insculpta":4,"nasutus":5,"friderici":4,"obtusidens":4,"lineatus":5,"lippincottianus":5,"spottedpimelodus":6,"labrosus":5,"galeatus":5,"granulosus":4,"oremaculatus":4,"squamosissimus":4,"acestrolacustris":4,"dorado":2,"corruscans":1,"kelberi":3,"mesopotamicus":3,"marginatus":4,"rhaphiodon":3,"rhinelepis":2,"sorubim":2,"jenynsii":2,"carp":2,"niletilapia":3},"basePool":{"altiparanae":9,"bonita":5,"insculpta":4,"nasutus":5,"friderici":4,"obtusidens":4,"lineatus":5,"lippincottianus":5,"spottedpimelodus":6,"labrosus":5,"galeatus":5,"granulosus":4,"oremaculatus":4,"squamosissimus":4,"acestrolacustris":4,"dorado":2,"corruscans":1,"kelberi":3,"mesopotamicus":3,"marginatus":4,"rhaphiodon":3,"rhinelepis":2,"sorubim":2,"jenynsii":2,"carp":2,"niletilapia":3},"animals":{},"weeds":{"egeriadensa":45,"hydrilla":25,"hyacinth":20,"waterlettuce":10},"source":"https://www.nature.com/articles/s41598-025-88209-8"});
world.weatherOdds.itaipu=[40,35,25];world.flavor.itaipu={"phase":{"dawn":["薄霧浮在庫灣上，岸邊的草葉凝著水珠。","小魚在淺水處散開，留下幾圈細小的波紋。"],"day":["日光穿過近岸的水面，沉水草隨波輕晃。","寬闊的主水道泛著亮光，遠岸只剩一道低低的輪廓。"],"dusk":["夕陽落到對岸樹後，庫灣慢慢暗下來。","一艘小船沿著岸邊駛過，尾波推動漂浮的葉叢。"],"night":["岸邊燈光映在水上，近處偶爾傳來魚躍聲。","夜風吹過草叢，水面上的浮葉聚到灣角。"]},"weather":{"sunny":["晴空映在開闊的水面，細浪一層層推向岸邊。","陽光照亮漂浮植物的根鬚，水下的小魚一閃而過。"],"cloudy":["雲影掠過庫灣，水色轉成深綠。","對岸的樹影變得模糊，岸邊仍看得見草葉晃動。"],"rain":["雨點打在水面，細密的漣漪蓋過浮標旁的波紋。","雨幕越過主水道，岸邊的葉片被打得低垂。"]},"facts":["伊泰普水庫位在巴西與巴拉圭邊界，1982 年開始蓄水，屬巴拉那河水系。","蓄水淹沒了瓜伊拉瀑布原有的天然屏障，部分魚類因此進入原先無法抵達的上巴拉那水域。","湖庫近岸、庫灣與主水道的環境不同，科學採樣與漁民漁獲也會記錄到不同的魚。","瓜伊拉的地方菜 pintado na telha，把鴨嘴鯰魚塊放在陶瓦上，搭配番茄、洋蔥與椰奶烹調。","「巴拉那」（Paraná）源自瓜拉尼語，常解作「像海一樣的大河」，也有「海的親族」的譯法，形容河面寬闊如海。"]};
cuisines.push(["southamerica","南美洲"]);
const itaipuRecipe={"id":"pintado-telha","name":"瓦烤鴨嘴鯰","fish":"corruscans","fishes":["corruscans"],"effect":"speed","amount":0.08,"casts":100,"cost":20,"tier":"home","method":"fry","cuisine":"southamerica","origin":"巴西・瓜伊拉","orig":"pintado na telha","about":"瓜伊拉的地方菜。把南美鴨嘴鯰切塊，放在鋪有番茄、洋蔥與香草的陶瓦上，加入椰奶烤熟，讓魚肉浸在濃郁的醬汁裡。","preparation":"瓜伊拉的地方菜。把南美鴨嘴鯰切塊，放在鋪有番茄、洋蔥與香草的陶瓦上，加入椰奶烤熟，讓魚肉浸在濃郁的醬汁裡。"};itaipuRecipe.desc=mealDesc(itaipuRecipe);recipes.push(itaipuRecipe);
const itaipuDish={"id":"dine-itaipu-telha","name":"瓦烤鴨嘴鯰","region":"itaipu","effect":"speed","amount":0.08,"casts":100,"price":90,"tier":"home","method":"fry","orig":"pintado na telha","about":"瓜伊拉的地方菜。把南美鴨嘴鯰切塊，放在鋪有番茄、洋蔥與香草的陶瓦上，加入椰奶烤熟，讓魚肉浸在濃郁的醬汁裡。","preparation":"瓜伊拉的地方菜。把南美鴨嘴鯰切塊，放在鋪有番茄、洋蔥與香草的陶瓦上，加入椰奶烤熟，讓魚肉浸在濃郁的醬汁裡。","art":"pintado-telha"};itaipuDish.desc=mealDesc(itaipuDish);dishes.push(itaipuDish);restaurants.itaipu={name:"伊泰普湖岸食堂",dishes:[itaipuDish]};
note27("carp","巴西與巴拉圭交界的伊泰普水庫亦有漁獲紀錄。");
note27("niletilapia","巴西與巴拉圭交界的伊泰普水庫亦有漁獲紀錄。");
note27("hydrilla","伊泰普水庫有種級植物調查紀錄。");
note27("hyacinth","伊泰普水庫有種級植物調查紀錄。");
note27("waterlettuce","伊泰普水庫有種級植物調查紀錄。");
plants.find(p=>p.id==="waterlettuce").localNames=[...(plants.find(p=>p.id==="waterlettuce").localNames||[]),["巴西葡萄牙語","alface-d’água"]];

// 0.30 same-version six-fish refill, Matang and Lake Erie.
const refill30Fish=[{"bounty":0,"edible":true,"kind":"河口紀錄魚種","rod":0,"cookable":false,"cookingNote":"本作不作料理材料。","localNameNote":"","id":"shieldmullet","name":"盾副鯔","latin":"Paramugil parmatus","min":0.02,"max":0.5,"price":42,"requiredBait":"dough","water":"brackish","localNames":[["馬來語","Belanak mulut lebar"]],"other":"寡鱗鮻","form":"身體銀色而略高，頭頂扁平，背部帶灰綠色，體側有數道淡暗縱線；兩個背鰭分開，尾鰭微凹。","habitat":"淺海沿岸、河口與河川下游。","diet":"攝取底層有機碎屑與細小生物。","food":"有食用漁業交易紀錄；本作不作料理材料。","hint":"兩個背鰭分開，頭寬而略扁的小型鯔魚。","source":"https://www.kahaku.go.jp/research/db/zoology/Fishes_of_Andaman_Sea/contents/mugilidae/07.html","distribution":"印度—西太平洋；馬來西亞馬當相連河口的採樣有種級紀錄。"},{"bounty":0,"edible":true,"kind":"河口紀錄魚種","rod":0,"cookable":false,"cookingNote":"本作不作料理材料。","localNameNote":"","id":"sagorcatfish","name":"細尾六絲鯰","latin":"Hexanematichthys sagor","min":0.1,"max":1.5,"price":48,"requiredBait":"worm","water":"brackish","localNames":[["馬來語","Duri pedukang"]],"other":"","form":"頭部寬扁，頭盾帶粗糙紋理，口邊三對鬚，頜鬚長而扁；背部藍褐、腹部較白，背鰭與胸鰭有硬棘，尾鰭深叉。","habitat":"沿海、河口及受潮汐影響的河段。","diet":"吃無脊椎動物與小魚。","food":"有食用利用；背鰭與胸鰭的硬棘處理時須留意，本作不作料理材料。","hint":"三對鬚伸在寬扁頭旁，尾巴深叉的海鯰。","source":"https://www.fao.org/4/x2401e/x2401e35.pdf","distribution":"印度—西太平洋；馬來西亞馬當相連河口的採樣有種級紀錄。"},{"bounty":0,"edible":true,"kind":"河口紀錄魚種","rod":0,"cookable":false,"cookingNote":"本作不作料理材料。","localNameNote":"","id":"soldiercatfish","name":"骨頰海鯰","latin":"Osteogeneiosus militaris","min":0.05,"max":0.8,"price":48,"requiredBait":"shrimp","water":"brackish","localNames":[["馬來語","Duri muncung"]],"other":"骨舌海鯰","form":"頭部低扁而光滑，只有一對長而硬的頜鬚，沒有頦鬚；背部暗藍、腹部銀白，尾鰭分叉，背鰭與脂鰭邊緣較暗。","habitat":"沿岸、河口、河川下游與相連半淡鹹水水域的底層。","diet":"取食底棲無脊椎動物及小魚；食物比例會隨水域而變。","food":"有鮮魚上市利用；本作不作料理材料。","hint":"只有一對硬長鬚、頭頂光滑的海鯰。","source":"https://www.fao.org/4/ad468e/AD468eAW.pdf","distribution":"印度—西太平洋；馬來西亞馬當相連河口的採樣有種級紀錄。"},{"bounty":0,"edible":true,"kind":"河口紀錄魚種","rod":0,"cookable":true,"cookingNote":"","localNameNote":"","id":"donkeycroaker","name":"截尾白姑魚","latin":"Pennahia aneus","min":0.03,"max":0.8,"price":42,"requiredBait":"shrimp","water":"brackish","localNames":[["馬來語","Gelama pisang"]],"other":"Pennahia anea","form":"身體延長而側扁，頭短高、眼較大，口大而傾斜，頦部沒有鬚；背部灰褐至淡金色、腹部銀白，尾鰭末緣近截形。","habitat":"沿岸砂泥底的中下層水域，通常在較淺的近海活動。","diet":"吃小型甲殼類、蠕蟲與小魚等底棲動物。","food":"以鮮魚或乾鹹製品上市；本作可作通用煎魚、蒸魚與烤魚材料。","hint":"大眼、斜口與近乎平直的尾緣，是牠的辨識線索。","source":"https://fishdb.sinica.edu.tw/taxon/382479-fishdb","distribution":"印度—西太平洋；馬來西亞馬當相連河口的採樣有種級紀錄。"},{"bounty":0,"edible":true,"kind":"湖區紀錄魚種","rod":0,"cookable":false,"cookingNote":"本作不作料理材料。","localNameNote":"","id":"blackcrappie","name":"黑斑刺蓋太陽魚","latin":"Pomoxis nigromaculatus","min":0.08,"max":1.2,"price":45,"requiredBait":"meat","water":"fresh","localNames":[["英語","black crappie"]],"other":"","form":"身體高而側扁，銀色體側散布不規則暗斑；背鰭有七至八枚硬棘，背鰭、臀鰭與尾鰭也有斑點，斑紋不像白刺蓋太陽魚排列成橫帶。","habitat":"湖泊、池塘及大河緩流區，常接近水草或沉木，偏好較清澈的水。","diet":"成魚吃小魚、水生昆蟲與小型甲殼類。","food":"有食用與遊釣利用；本作不作料理材料。","hint":"銀色體側灑著不規則暗斑，和帶橫帶的白刺蓋太陽魚不同。","source":"https://myfwc.com/wildlifehabitats/profiles/freshwater/black-crappie/","distribution":"伊利湖近岸及附屬湖灣；2025 年普雷斯克島灣調查有直接採樣紀錄。"},{"bounty":0,"edible":true,"kind":"湖區紀錄魚種","rod":4,"cookable":false,"cookingNote":"本作不作料理材料。","localNameNote":"","id":"spottedgar","name":"眼斑雀鱔","latin":"Lepisosteus oculatus","min":0.3,"max":4.5,"price":54,"requiredBait":"meat","water":"fresh","localNames":[["英語","spotted gar"]],"other":"斑點雀鱔","form":"身體細長，覆有堅硬菱形鱗片；吻比骨雀鱔短而寬，頭頂、吻部、身體與各鰭都有清楚圓形暗斑，背鰭與臀鰭靠近尾端。","habitat":"水流緩慢、較清澈且水草豐富的湖灣與河川回水區。","diet":"成魚主要吃小魚，也會攝食蝦、螯蝦與昆蟲。","food":"魚肉少量供人食用，卵有毒；本作不作料理材料。","hint":"吻部較短寬，頭與各鰭都點著圓斑的雀鱔。","source":"https://mdc.mo.gov/discover-nature/field-guide/spotted-gar","distribution":"伊利湖近岸及附屬湖灣；2025 年普雷斯克島灣調查有直接採樣紀錄。"}];fish.push(...refill30Fish);species.push(...refill30Fish);
Object.assign(regions.find(r=>r.id==="matang"),{pool:{"kammalthryssa":16,"greenbackmullet":9,"scat":8,"spottedseacatfish":8,"archerfish":6,"chacundashad":6,"elongateilisha":5,"spottedarcher":5,"whitesardine":5,"milkfish":4,"barramundi":3,"fourfingerthreadfin":3,"shieldmullet":8,"sagorcatfish":5,"soldiercatfish":3,"donkeycroaker":6},basePool:{"kammalthryssa":16,"greenbackmullet":9,"scat":8,"spottedseacatfish":8,"archerfish":6,"chacundashad":6,"elongateilisha":5,"spottedarcher":5,"whitesardine":5,"milkfish":4,"barramundi":3,"fourfingerthreadfin":3,"shieldmullet":8,"sagorcatfish":5,"soldiercatfish":3,"donkeycroaker":6}});
Object.assign(regions.find(r=>r.id==="erie"),{pool:{"walleye":5,"yellowperch":7,"smallmouthbass":5,"whitebass":5,"whiteperch":5,"freshwaterdrum":4,"emeraldshiner":7,"spottailshiner":5,"goldenshiner":5,"americangizzardshad":4,"pumpkinseed":4,"rockbass":4,"brownbullhead":4,"whitecrappie":4,"whitesucker":4,"bluntnoseminnow":4,"roundgoby":4,"longnosegar":1,"carp":2,"grass":1,"bluegill":4,"channelcat":3,"largemouthbass":3,"pike":1,"blackcrappie":4,"spottedgar":1},basePool:{"walleye":5,"yellowperch":7,"smallmouthbass":5,"whitebass":5,"whiteperch":5,"freshwaterdrum":4,"emeraldshiner":7,"spottailshiner":5,"goldenshiner":5,"americangizzardshad":4,"pumpkinseed":4,"rockbass":4,"brownbullhead":4,"whitecrappie":4,"whitesucker":4,"bluntnoseminnow":4,"roundgoby":4,"longnosegar":1,"carp":2,"grass":1,"bluegill":4,"channelcat":3,"largemouthbass":3,"pike":1,"blackcrappie":4,"spottedgar":1}});
for(const r of recipes.filter(r=>r.cuisine==="basic"&&r.id!=="deepfry")){const cut=r.fishes.findIndex(id=>animals.some(a=>a.id===id));r.fishes.splice(cut<0?r.fishes.length:cut,0,"donkeycroaker");if(Array.isArray(r.fish))r.fish=[...r.fishes]}
// 0.30 Qigu/Penghu species refill. Final prices and weights; no historical scaling.
const qiguPenghu30Fish=[{"bounty":0,"edible":true,"cookable":false,"rod":0,"localNames":[],"localNameNote":"台語與客語的種級名稱待查。","signature":false,"cookingNote":"本作不作料理材料。","id":"equulus","name":"短棘鰏","other":"狗腰、金錢仔","latin":"Leiognathus equulus","min":0.03,"max":0.3,"price":39,"water":"brackish","kind":"潟湖紀錄魚種","requiredBait":"shrimp","form":"身體高而側扁，背部灰色、兩側銀白，身側上半部有不明顯的細黑橫帶。小嘴能向下伸出，背鰭軟條末緣帶黑色。","habitat":"沿岸砂泥底、河口與紅樹林水域，幼魚會利用河口淺水環境。","diet":"攝食小型魚類、甲殼類與其他底棲小動物。","distribution":"分布於印度至西太平洋；七股潟湖北、中、南區的調查均有紀錄。","food":"可食用，臺灣有紅燒與煮湯的利用。","hint":"銀白而高扁的小魚，嘴巴能向下伸出。","source":"https://fishdb.sinica.edu.tw/taxon/382054-fishdb","intro":"短棘鰏的小嘴能向下伸出，方便牠在底層尋找小型魚類、甲殼類與其他小動物。幼魚會利用河口和紅樹林的淺水環境，七股潟湖北、中、南區都曾採得牠。狗腰、金錢仔是牠的別名，與金錢魚是不同物種。"},{"bounty":0,"edible":true,"cookable":false,"rod":0,"localNames":[],"localNameNote":"台語與客語的種級名稱待查。","signature":false,"cookingNote":"本作不作料理材料。","id":"cornetfish","name":"康氏馬鞭魚","other":"無鱗煙管魚","latin":"Fistularia commersonii","min":0.05,"max":0.8,"price":54,"water":"sea","kind":"海草床紀錄魚種","requiredBait":"meat","form":"身體細長，吻部延長成一根細管，體色淡綠至淡褐。背鰭與臀鰭靠近尾部，分叉的尾鰭中央拖著細長尾絲。","habitat":"沿岸礁區及鄰近砂底，也會利用海草床，單獨或成群活動。","diet":"捕食小魚、甲殼類與烏賊。","distribution":"分布於印度至太平洋；澎湖大倉灣海草床的調查記錄過牠，幼魚也會利用海草床成長。","food":"可食用，有鮮售、鹽漬、乾製及燻製利用。","hint":"細管般的長吻，尾巴中央拖著一根長絲。","source":"https://fishdb.sinica.edu.tw/taxon/381094-fishdb","intro":"康氏馬鞭魚的長吻像一根細管，分叉尾鰭中央還拖著長長的尾絲。牠會在沿岸礁區及鄰近砂底捕食小魚、甲殼類與烏賊，澎湖大倉灣的海草床也曾記錄牠，幼魚會利用這片環境成長。"}];
fish.push(...qiguPenghu30Fish);species.push(...qiguPenghu30Fish);
for(const [id,pool] of Object.entries({"qigu":{"largescalemullet":10,"greenbackmullet":8,"gizzardshad":5,"fourline":7,"rabbitfish":8,"mullet":5,"lemuru":5,"splendens":5,"comeshad":7,"nuchalponyfish":5,"duckbillsleeper":5,"tankgoby":4,"frillfingoby":4,"eelgoby":4,"milkfish":3,"equulus":4,"terapon":3,"scat":3,"silversillago":3,"mangrovejack":2},"penghu":{"rabbitfish":25,"emperor":3,"sarba":5,"blackporgy":2,"redseabream":1,"coioides":1,"porcupine":5,"yellowgoat":4,"yellowbarracuda":3,"oyena":5,"chinesefilefish":3,"silversprat":5,"yellowstripescad":5,"chocolatehind":4,"bigeyesnapper":4,"monogrammonocle":4,"seagrassparrot":6,"cornetfish":2,"longfingrouper":2,"russellsnapper":3,"terapon":4,"whipfinmojarra":4}})){const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...pool}}
for(const [id,text] of Object.entries({"terapon":"七股潟湖的北、中區採樣有紀錄；澎湖內灣魚類調查亦有紀錄。","scat":"七股潟湖及相連的七股溪口有調查紀錄。","silversillago":"七股潟湖南區的砂泥底水域有採樣紀錄。","mangrovejack":"七股潟湖沿岸與湖內待袋網調查均有紀錄，採得個體包含幼魚與亞成魚。","longfingrouper":"澎湖內灣海域的魚類調查有紀錄。","russellsnapper":"澎湖內灣海域的魚類調查有紀錄。","whipfinmojarra":"澎湖內灣海域的魚類調查有紀錄。"}))fish.find(f=>f.id===id).distribution+=text;
regions.find(r=>r.id==='qigu').desc='臺灣最大的潟湖，外側沙洲擋住海浪，湖內淺水與砂泥底交錯，鯔科、鰏科與河口魚類在此活動。';
// 0.30 Arcachon/Matang refill, final parameters (no historical scaling).
const arcachonMatang30Fish=[{"rod":0,"bounty":0,"water":"brackish","kind":"河口紀錄魚種","edible":true,"cookable":false,"localNames":[],"localNameNote":"馬來語種級名稱待查。","signature":false,"cookingNote":"本作不作料理材料。","id":"kaakan","name":"星雞魚","latin":"Pomadasys kaakan","other":"點石鱸","min":0.08,"max":1.2,"price":51,"requiredBait":"shrimp","form":"身體長橢圓而側扁，背部隆起，尾鰭內凹。幼魚胸鰭以上有數列點狀暗帶，長大後斑點逐漸淡去，頭與尾較暗。","habitat":"沿岸砂泥底、河口、紅樹林與潟湖；小魚及亞成魚會利用半淡鹹水。","diet":"捕食小魚、甲殼類與底棲軟體動物。","distribution":"印度至西太平洋；馬當相連的 Kuala Larut 與 Kuala Sangga 河口有採樣紀錄。","food":"可食用，臺灣有油煎與煮薑絲湯的利用。","hint":"小時候身上有點狀暗帶，長大後逐漸淡去的銀色石鱸。","intro":"星雞魚幼魚胸鰭以上有數列點狀暗帶，長大後斑點逐漸淡去，頭部與尾鰭則變暗。小魚和亞成魚常成群利用紅樹林、河口的半淡鹹水，馬當相連的兩處河口也曾採得牠。","source":"https://fishdb.sinica.edu.tw/taxon/381904-fishdb"},{"rod":0,"bounty":0,"water":"brackish","kind":"河口紀錄魚種","edible":true,"cookable":false,"localNames":[],"localNameNote":"馬來語種級名稱待查。","signature":false,"cookingNote":"本作不作料理材料。","id":"goldentankgoby","name":"金叉舌鰕虎","latin":"Glossogobius aureus","other":"","min":0.02,"max":0.18,"price":42,"requiredBait":"shrimp","form":"身體細長，頭與吻略扁，黃褐體側有五塊暗斑，背上另有暗帶。兩個背鰭分開，腹鰭連成吸盤，尾鰭圓。","habitat":"熱帶河川、溪流與河口，利用泥、沙或礫石底。","diet":"吃水生昆蟲幼生、甲殼類與小魚。","distribution":"熱帶印度至西太平洋；馬當相連的 Kuala Larut 河口採樣有紀錄。","food":"菲律賓民都洛有加工成魚乾的食用利用。","hint":"黃褐色長身、體側有五塊暗斑，尾鰭圓圓的鰕虎。","intro":"金叉舌鰕虎的兩個背鰭分開，腹鰭連成吸盤，黃褐色體側有五塊暗斑。牠取食水生昆蟲幼生、甲殼類與小魚，會在泥底、沙底或礫石底的河川與溪流中活動。","source":"https://fishesofaustralia.net.au/home/species/2225"}];
fish.push(...arcachonMatang30Fish);species.push(...arcachonMatang30Fish);
for(const [id,pool]of Object.entries({"arcachon":{"thicklipmullet":7,"blackseabream":10,"goldenmullet":8,"whiteseabream":6,"europeanseabass":6,"gilthead":5,"commonsole":6,"redmullet":7,"senegalsole":5,"garfish":5,"europeaneel":5,"undulateray":4,"flounder":5,"thornbackray":1,"conger":1,"thinlipmullet":6,"sandsmelt":4,"commongoby":3,"sandgoby":3,"stickleback":3},"matang":{"kammalthryssa":14,"greenbackmullet":8,"scat":7,"spottedseacatfish":7,"archerfish":5,"chacundashad":6,"elongateilisha":5,"spottedarcher":5,"whitesardine":4,"milkfish":4,"barramundi":3,"fourfingerthreadfin":3,"shieldmullet":7,"sagorcatfish":4,"soldiercatfish":3,"donkeycroaker":5,"kaakan":6,"goldentankgoby":4}})){const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...pool}}
for(const [id,text]of Object.entries({"thinlipmullet":"阿卡雄灣相連堤圍濕地的魚類調查亦有紀錄。","sandsmelt":"阿卡雄灣相連堤圍濕地的魚類調查亦有紀錄。","commongoby":"阿卡雄灣相連堤圍濕地的魚類調查亦有紀錄。","sandgoby":"阿卡雄灣相連堤圍濕地的魚類調查亦有紀錄。","stickleback":"阿卡雄灣相連堤圍濕地的魚類調查亦有紀錄。"}))fish.find(f=>f.id===id).distribution+=text;
for(const [id,names]of Object.entries({"thinlipmullet":["Mulet porc"],"sandsmelt":["Athérine prêtre"],"commongoby":["Gobie tacheté、Gobie commun"],"sandgoby":["Gobie des sables"],"stickleback":["Épinoche à trois épines"]})){const f=fish.find(f=>f.id===id);for(const name of names)if(!f.localNames.some(([lang,n])=>lang==='法語'&&n===name))f.localNames.push(['法語',name])}
for(const [id,change]of Object.entries({"arcachon":{"water":"潟湖・潮汐濕地","desc":"比斯開灣東岸的潟湖，灣內水道、海草床與相連的堤圍濕地交錯，鯔魚、小型鰕虎與銀漢魚在不同鹽度的水域活動。灣邊的牡蠣養殖是當地特色，舊蓄水池則藉由水閘與潟湖相通。"}}))Object.assign(regions.find(r=>r.id===id),change);
// 0.30 Taal/Zengwen refill: approved final parameters, no historical scaling.
const taalZengwen30Animals=[{"category":"crustacean","kind":"淡水蝦類","water":"fresh","requiredBait":"worm","rod":0,"bounty":0,"cookable":false,"localNames":[],"localNameNote":"台語與客語的種級名稱待查。","signature":false,"cookingNote":"本作不作料理材料。","id":"asperulum","name":"粗糙沼蝦","other":"黑殼沼蝦","latin":"Macrobrachium asperulum","min":0.003,"max":0.02,"price":42,"edible":true,"form":"成熟個體多為深棕至墨綠色；老成雄蝦的頭胸甲有小棘而顯得粗糙。額角短，第二對步足細長，螯指交接處常帶橙色。","habitat":"河川中上游、湖泊與水庫的石塊底質及緩流處。","diet":"吃藻類、植物碎片、有機碎屑及小型底棲動物。","distribution":"中國大陸與臺灣等東亞地區；曾文水庫的水域調查有紀錄。","food":"臺灣山產店有炸溪蝦的食用利用。","hint":"深棕色的長臂蝦，老成個體的頭胸甲布著小棘。","intro":"粗糙沼蝦從卵到成蝦都能在淡水完成生活史，剛孵出的小蝦已具成蝦外形。幼蝦透明，帶黃、藍色斑紋，長大後多轉為深棕或墨綠色；老成雄蝦的頭胸甲長出小棘，也成了牠名字的由來。","source":"https://www.tfrin.gov.tw/theme_data.php?id=355&sub_theme=G&theme=epaper_data"},{"category":"crustacean","kind":"淡水蝦類","water":"fresh","requiredBait":"worm","rod":0,"bounty":0,"cookable":false,"localNames":[],"localNameNote":"台語與客語的種級名稱待查。","signature":false,"cookingNote":"本作不作料理材料。","id":"japonicum","name":"大和沼蝦","other":"","latin":"Macrobrachium japonicum","min":0.008,"max":0.05,"price":45,"edible":null,"form":"頭胸甲較光滑，成熟個體偏墨綠或棕色，兩側有連成縱線的細點。額角短，第二對步足粗壯，螯掌較扁。","habitat":"以石礫底質的河川中上游為主，常利用石縫；曾文水庫亦有調查紀錄。","diet":"攝食有機碎屑、動物殘體及小型底棲動物。","distribution":"日本、琉球與臺灣等地；曾文水庫水域調查列有本種。","food":"種級食用資料待查。","hint":"額角短、頭胸甲側面有細點縱線，螯掌粗壯而扁的沼蝦。","intro":"大和沼蝦常藏在有水流的礫石縫裡，頭胸甲側面的細點能連成縱線，粗壯螯掌則較扁平。牠具有往返河川與海岸的生活史，幼生需要含鹽水域發育；曾文水庫的水域調查也曾記錄這種長臂蝦。","source":"https://www.wra.gov.tw/NewsRiverNoun.aspx?PageSize=20&n=25142&page=110&sms=500"}];
animals.push(...taalZengwen30Animals);species.push(...taalZengwen30Animals);
for(const [id,pool]of Object.entries({"taal":{"tawilis":20,"milkfish":10,"niletilapia":10,"blackchintilapia":8,"miopsglassfish":8,"silvertherapon":6,"midas":5,"tankgoby":5,"manilacatfish":4,"jaguar":2,"gianttrevally":2,"redevil":2,"marbledeel":1,"stripedsnakehead":2,"bigeyetrevally":2,"archerfish":3,"mangrovejack":2,"bighead":1,"scat":4,"mullet":3}})){const r=regions.find(r=>r.id===id);r.pool={...pool};r.basePool={...pool}}
for(const [id,pool]of Object.entries({"zengwen":{"nipponense":7,"asperulum":4,"japonicum":2}}))regions.find(r=>r.id===id).animals={...pool};
for(const [id,text]of Object.entries({"marbledeel":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","stripedsnakehead":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","bigeyetrevally":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","archerfish":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","mangrovejack":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","bighead":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","scat":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","mullet":"塔爾湖一九九六至二〇一一年上岸漁獲調查有紀錄。","nipponense":"曾文水庫庫區的水域調查亦有紀錄。"}))species.find(f=>f.id===id).distribution+=text;
for(const [id,name]of Object.entries({"marbledeel":"Igat","stripedsnakehead":"Dalag","bigeyetrevally":"Muslo","archerfish":"Kataba","mangrovejack":"Also","bighead":null,"scat":"Kitang","mullet":"Banak"})){if(!name)continue;const f=species.find(f=>f.id===id),row=f.localNames.find(([l])=>l==='菲律賓語');if(row){if(!row[1].split('、').includes(name))row[1]+='、'+name}else f.localNames.push(['菲律賓語',name])}
// 0.31 approved Guandu/Ishikari and Tolo refill, final parameters.
const refill31Animals=[{"bounty":0,"cookable":false,"cookingNote":"本作不作料理材料。","signature":false,"id":"arcuata","name":"弧邊管招潮蟹","other":"弧邊招潮蟹、網紋招潮蟹、大栱仙","latin":"Tubuca arcuata","category":"crustacean","kind":"河口蟹類","water":"brackish","requiredBait":"worm","rod":0,"min":0.003,"max":0.015,"price":30,"edible":null,"form":"頭胸甲呈橫寬的梯形，帶淺色網紋；眼柄細長，雄蟹有一隻橙紅色大螯，雌蟹的兩隻螯都很小。","habitat":"河口與紅樹林旁的潮間帶泥灘，穴居在柔軟的泥地。","diet":"用小螯把泥沙送到口部，篩取其中的有機物。","distribution":"東亞的河口與紅樹林泥灘；關渡自然公園親蟹平台有紀錄。","food":"種級食用資料待查。","hint":"細長眼柄、網紋背甲，雄蟹高舉一隻橙紅色大螯。","intro":"弧邊管招潮蟹會在洞口堆起煙囪般的泥土，漲潮前再把入口封住。雄蟹揮動橙紅色大螯，用來求偶或示威，進食卻得靠另一隻小螯；雌蟹沒有這把大螯，能用兩隻小螯把泥沙送到口邊，篩出其中的食物。","source":"https://www.oca.gov.tw/ch/home.jsp?dataserno=202202220026&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386","localNames":[],"localNameNote":"台語與客語的種級名稱待查。"},{"bounty":0,"cookable":false,"cookingNote":"本作不作料理材料。","signature":false,"id":"heliceformosensis","name":"臺灣厚蟹","other":"青蚶、瘋馬仔","latin":"Helice formosensis","category":"crustacean","kind":"河口蟹類","water":"brackish","requiredBait":"meat","rod":0,"min":0.004,"max":0.025,"price":36,"edible":true,"form":"頭胸甲略呈方形，背甲多為暗黃綠色，雙螯粗壯而大小相近，螯腳與腹面顏色較淡。","habitat":"河口高潮線附近的草澤、泥灘與紅樹林邊緣。","diet":"吃藻類、有機碎屑與動物殘體，也會獵捕招潮蟹等小動物。","distribution":"臺灣特有種，分布於沿海河口濕地；關渡自然公園親蟹平台有紀錄。","food":"臺灣西南沿海過去有鹽漬利用；本種有寄生蟲紀錄，不宜生食。","hint":"方形黃綠背甲，雙螯粗壯、大小相近的河口蟹。","intro":"臺灣厚蟹常離開洞穴，在泥灘與草澤邊緣四處覓食，也會鑽進別隻蟹的洞裡。牠吃碎屑與動物殘體，還能用粗壯雙螯獵捕招潮蟹。臺灣西南沿海過去曾把牠鹽漬配粥，但牠有寄生蟲紀錄，不宜生食。","source":"https://taieol.tw/pages/125754","localNames":[],"localNameNote":"台語與客語的種級名稱及拼音待查。"},{"bounty":0,"cookable":false,"cookingNote":"本作不作料理材料。","signature":false,"id":"giantpacificoctopus","name":"北太平洋巨型章魚","other":"","latin":"Enteroctopus dofleini","category":"cephalopod","kind":"章魚類","water":"sea","requiredBait":"meat","rod":2,"min":0.5,"max":6,"price":54,"edible":true,"form":"胴部呈卵圓形，皮膚柔軟而有皺褶；八條長腕帶吸盤，能改變體色與體表的凹凸。","habitat":"北太平洋冷涼的沿岸與大陸棚，利用岩礁、礫石及貝殼混合底的洞隙。","diet":"捕食蟹、貝類等底棲動物。","distribution":"北太平洋沿岸；北海道石狩與小樽等地有漁獲紀錄。","food":"北海道有煮章魚、醋漬章魚與章魚涮鍋的利用。","hint":"皺褶柔軟的卵圓胴部下，伸出八條粗長而有吸盤的腕。","intro":"北太平洋巨型章魚會隨著周圍環境改變體色與皮膚凹凸，躲在岩礁洞隙裡，再伸出長腕捕捉蟹與貝類。牠雖能長成龐然大物，剛孵化時卻很小，還得先在水中漂游一段時間，才沉到海底展開底棲生活。","source":"https://www.pref.hokkaido.lg.jp/sr/gid/fis072.html","localNames":[["日語","ミズダコ"]]},{"bounty":0,"cookable":false,"cookingNote":"本作不作料理材料。","signature":false,"category":"crustacean","kind":"海水蟹類","water":"sea","requiredBait":"meat","edible":true,"id":"threespotcrab","name":"紅星梭子蟹","other":"三點蟹","latin":"Portunus sanguinolentus","rod":0,"min":0.05,"max":0.35,"price":45,"form":"頭胸甲橫寬，兩側最後一枚側齒特別長；背甲橄欖綠至暗綠，後段有三個紅褐色圓斑。最後一對步足扁平成槳狀。","habitat":"內灣與河口的沙至沙泥底，能適應半淡鹹水；幼蟹常見於潮間帶。","diet":"主要捕食固著或行動緩慢的底棲無脊椎動物，也會撿食動物殘骸。","distribution":"印度—太平洋沿岸；吐露港的拖網調查有紀錄。","food":"經濟蟹類，香港市場以三點蟹之名販售。","hint":"背甲後段有三個紅褐色圓斑的梭子蟹。","intro":"紅星梭子蟹背甲後段有三個紅褐色圓斑，香港和臺灣都叫牠三點蟹。牠最後一對步足扁平如槳，能離開海底游動；幼蟹常出現在潮間帶，長大後多在較深的沙泥底活動，捕食行動緩慢的底棲小動物，也會撿食殘骸。","source":"https://www.sealifebase.se/summary/Portunus-sanguinolentus.html","localNames":[["粵語","三點蟹"]]},{"bounty":0,"cookable":false,"cookingNote":"本作不作料理材料。","signature":false,"category":"crustacean","kind":"海水蟹類","water":"sea","requiredBait":"meat","edible":true,"id":"crucifixcrab","name":"鏽斑蟳","other":"十字蟹","latin":"Charybdis feriata","rod":2,"min":0.08,"max":0.5,"price":51,"form":"頭胸甲卵圓而橫寬，前側緣各有五枚齒；背甲有紅褐與白色縱紋交錯，胃區中央常見白色十字，螯足和步足散布白點。","habitat":"幼蟹生活在沙岸與潮間帶淺水，成蟹多移往較深的泥質或沙泥底。","diet":"肉食性，捕食底棲小動物。","distribution":"印度—西太平洋；吐露港的拖網調查有紀錄。","food":"經濟蟹類，在東亞市場價格較高。","hint":"紅褐與白色縱紋交錯，背甲中央常帶一個白色十字。","intro":"鏽斑蟳的背甲布滿紅褐與白色條紋，中央常有一個白色十字，英文名因此叫十字架蟹。幼蟹在沙質淺水長大，有時會躲在水母的傘下；成蟹多移往較深的泥質海底。牠在東亞市場屬於價格較高的蟹。","source":"https://www.sealifebase.se/summary/Charybdis-feriata.html","localNames":[["粵語","紅蟹"]]}];animals.push(...refill31Animals);species.push(...refill31Animals);
plants.push(...[{"id":"kandeliaobovata","name":"水筆仔","other":"","latin":"Kandelia obovata","water":"brackish","type":"紅樹林植物","drift":true,"form":"常綠小喬木，葉片對生而厚，開白色細裂的花。筆狀胎生苗在母樹上伸長，成熟後脫落。","habitat":"河口感潮帶的泥灘與紅樹林，根系在鬆軟泥地中交錯。","distribution":"臺灣西部與北部河口可見，淡水河口關渡一帶有分布。","source":"https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21654.html","localNames":[["台語","水筆仔（tsuí-pit-á）"]],"localNameNote":"客語的種級名稱待查。"}]);
for(const [id,pool]of Object.entries({"guandu":{"arcuata":5,"heliceformosensis":4},"ishikari":{"mantisshrimp":6,"giantpacificoctopus":3},"tolo":{"nozakii":1,"acromitus":1,"spottedjelly":1,"threespotcrab":4,"crucifixcrab":2,"mantisshrimp":3,"bananaprawn":4}}))regions.find(r=>r.id===id).animals={...pool};
for(const [id,pool]of Object.entries({"guandu":{"saltsedge":30,"hyacinth":25,"mosquitofern":20,"reed":15,"kandeliaobovata":10}}))regions.find(r=>r.id===id).weeds={...pool};
for(const [id,text]of Object.entries({"mantisshrimp":"石狩灣亦有漁業紀錄。吐露港的拖網調查亦有紀錄。","reed":"關渡的河口草澤亦有紀錄。","bananaprawn":"吐露港的拖網調查亦有紀錄。"})){const f=species.find(f=>f.id===id)||plants.find(p=>p.id===id);f.distribution+=text}
for(const [id,desc]of Object.entries({"worm":"適合部分淡水魚、淡水蝦、小型河口蟹，以及吃沙蠶的海灣底棲魚。"}))baits.find(b=>b.id===id).desc=desc;
// Species intro paragraphs (2026-10-26). A species with an intro hides the 食用資訊 row in the codex.
const speciesIntro={
qili:'油炸奇力魚是日月潭沿岸餐館的招牌小吃，這種小魚過去在潭裡產量豐富。大約二十年前，透明的外來玻璃魚出現在潭中，專吃奇力魚卵，奇力魚因此大減；漁會與縣府近年在潭邊設箱網復育，再把魚苗放回潭裡。',
culter:'正式名稱是翹嘴鮊，日月潭一帶稱曲腰魚。相傳蔣中正住在涵碧樓時，當地人以這種魚款待，他相當喜愛，「總統魚」的名號就此傳開，至今仍是日月潭的招牌菜，最常清蒸。這段由來只見於民間流傳，沒有正式史料佐證。',
silver:'和青魚、草魚、大頭鰱並稱中國「四大家魚」。受到船隻引擎驚擾時，牠會成群躍出水面，可高達約三公尺；在美國伊利諾河等入侵水域，曾有船上的人被跳起的白鰱撞斷肋骨、撞傷下顎。魚肉可食，但魚膽有毒，不可食用。',
blackcarp:'口中沒有牙齒，喉部的咽頭齒卻能壓碎螺殼，吃下螺肉後把碎殼吐出。臺灣農民曾在魚池鄉的茭白筍田放養青魚，對付外來的福壽螺，螺卵塊明顯減少，筍子產量也提高了約兩成半。',
snakehead:'原產東南亞的小盾鱧，被人放生後在日月潭立足。親魚會護衛幼魚，成群的幼魚在水中聚成「魚球」，遇到威脅的親魚還會主動攻擊。縣府用聲納追蹤魚球、電撈幼魚，也試過放養鱸鰻抑制，至今仍無法根除，只能持續控制數量。',
tanakia:'臺灣特有的鰟鮍類小魚。繁殖季的雌魚會伸出一條細長的產卵管，把卵產進河蚌等二枚貝體內，卵就在貝殼的保護下孵化。這種繁殖方式讓牠離不開淡水貝類：水域裡沒有健康的貝類，石鮒也無法繁衍。',
mingtangoby:'種小名 candidianus 來自日月潭的舊稱「Candidius 湖」。1873 年，英國傳教士甘為霖來到潭邊，以十七世紀首位駐臺的荷蘭傳教士干治士為湖命名；這個名字後來沒有流傳下來，卻留在這種小鰕虎的學名裡。',
kuhua:'俗稱苦花，是臺灣少數幾乎全島都有自然分布的鯉科魚，從海邊到海拔兩千多公尺的山溪都找得到。溪石上常見一塊塊圓形、像豹紋般的斑痕，就是牠刮食藻類留下的「食痕」；在溪流裡也是受歡迎的食用魚。',
walkingcatfish:'英文俗名「walking catfish」，意思是會走路的鯰魚。只要身體保持濕潤，牠能以胸鰭硬棘撐地、扭動身體在陸上爬行，靠鰓上方樹枝狀的輔助呼吸器官吸取空氣，移往別的水域。1960 年代牠在美國佛羅里達逸出，約十年內擴散到 20 個郡。',
marbledeel:'臺灣俗稱鱸鰻，是體型最大的淡水鰻之一，臺灣正式紀錄最大的一尾全長約 148 公分。牠在海中出生，再溯河在深潭洞穴定居多年，偶爾會爬上岸捕食青蛙。過去曾列為保育類，2009 年資源回復後解除；民間常把牠當作進補食材。',
crucian:'觀賞用的金魚就是從鯽魚馴化而來。牠們有一項脊椎動物中罕見的本領：冬天池面結冰、水中缺氧時，能把肌肉裡累積的乳酸轉成酒精，再經鰓排進水中。靠這套機制，近親歐洲鯽可以在無氧的冰封池塘裡撐過四、五個月。',
carp:'十九世紀中期為了養殖引入澳洲，1970 年代幾場洪水後大量擴散，如今在墨瑞—達令河流域部分水域占魚類生物量高達八成。澳洲政府正評估釋放只感染鯉魚的鯉疱疹病毒來壓低數量，這項計畫至今仍有爭議。',
grass:'美國與加拿大會放養人工培育、不能生殖的三倍體草魚，用來清除池塘與水道裡的水草，不必擔心牠們在野外繁衍。水溫合適時，一尾草魚一天吃下的水草可達自身體重的兩三成，小魚吃得更多。',
jaguar:'名字叫石斑，其實是中美洲的慈鯛。在日月潭，牠和魚虎、紅魔鬼並稱「三害」，會吃原生魚的卵與幼魚。當地釣友曾自辦一整年的除害釣魚活動，釣起約一千尾珍珠石斑、上萬尾紅魔鬼，魚虎則只有約一百尾。',
bighead:'正式名稱是鱅，和青魚、草魚、白鰱並稱「四大家魚」。牠最受歡迎的部位就是那顆大頭：臺灣的砂鍋魚頭先把魚頭油炸再入湯燉煮，湖南的剁椒魚頭則把魚頭蒸熟、鋪滿剁椒，兩道菜都常選用大頭鰱。',
mudcarp:'廣東一帶叫牠鯪魚，罐頭「豆豉鯪魚」用的就是這種魚。原產珠江等華南與中南半島河川，在原產地卻因漁撈壓力大，加上水壩阻斷洄游路線，被國際自然保護聯盟評為近危。',
pachyhead:'俗名溪哥，也叫闊嘴。繁殖季的雄魚上下頜與鰓蓋會長出顆粒狀的「追星」，在淺灘上不停追逐雌魚求偶；雌魚多半選在黃昏，到水流平緩的淺灘產卵。',
candidia:'牠所屬的鬚鱲屬只有兩種魚，都是臺灣特有種。日月潭管理處稱牠臺灣馬口魚，溪邊釣客常叫一枝花。繁殖季約在四到十月，雄魚頭部與臀鰭會長出追星、體側浮現婚姻色，一季之中可以多次產卵。',
topmouth:'這種小魚隨著從中國輸出的養殖魚苗擴散到歐洲，身上還可能帶著「玫瑰狀病原」，這種寄生病原會讓鮭鱒類大量死亡。牠也會壓抑原生魚的繁殖，已被歐盟列為須管制的入侵物種。',
midas:'牠是演化研究的明星。尼加拉瓜的阿波約火山口湖只被這種魚移入過一次，卻在不到一萬年內分化出身形細長、在開闊水層生活的新種，兩者生活在同一座湖裡卻不再雜交，是少數被認為可信的同域種化實例。',
convict:'英文名 convict cichlid，意思是「囚犯慈鯛」，來自像舊時英國囚服一樣的黑色橫紋。牠是最容易繁殖的慈鯛之一，雙親會一起守護幼魚，還會用鰭撥開落葉、翻動底沙，讓小魚找到食物。',
redevil:'那對厚唇是覓食工具，牠把嘴貼進岩縫，吸出躲在裡面的螺貝與小蝦。研究人員把同一窩手足分成兩組飼養，從岩面取食的一組嘴唇長得比較大，表示唇的厚度有一部分會隨食性改變。',
jewelcichlid:'英文俗名 jewel cichlid，意思是「寶石慈鯛」。配對的雙親在繁殖季全身轉為深紅，在平坦的石面上產卵，之後一起守護卵與幼魚約一個月；這段期間領域性極強，對靠近的魚相當兇悍。',
siamglassfish:'日月潭居民叫牠玻璃魚，約二十年前才在潭中出現。背鰭帶硬刺，很少有魚願意吃牠，族群因此增加得很快。牠能不能吃，當地說法不一：漁會認為無法食用，也有餐館把牠炸到骨頭酥軟後入菜。',
stripedsnakehead:'馬來西亞稱牠 haruan，當地婦女在生產或手術後常吃這種魚，相信能幫助傷口癒合、減輕疼痛。近年已有小型臨床試驗研究牠的萃取物，結果有些正面跡象，但療效仍未定論。',
redfinculter:'和翹嘴鮊長得很像，下頜同樣向上翹起，在臺灣的俗名也多有重疊，曲腰、翹嘴巴甚至「總統魚」都有人用。英文俗名之一是 skygazer，意思是「望天者」，和牠朝上的嘴形十分相配。',
nipponense:'日月潭俗稱潭蝦，酥炸潭蝦和奇力魚、總統魚同為潭邊餐館的招牌菜。過去潭裡的沼蝦產量豐富，如今和奇力魚、曲腰魚一樣，受到魚虎、紅魔鬼等外來魚的威脅。',
bluespotgrouper:'幼魚和成魚的花色差很多：不到 25 公分的幼魚通體深灰近黑，綴著醒目的白點，長大後才轉成灰褐色。牠長得慢，族群一旦被捕撈過度，估計要 4.5 到 14 年才能恢復一倍，在香港的活魚市場可以見到。',
longfingrouper:'牠的胸鰭特別寬大肥厚，研究者認為這和牠常常趴在海底休息的習性有關。玳瑁石斑在市場上屬於最高價的一級，不過在部分海域曾有食用後發生熱帶海魚毒（雪卡毒）中毒的紀錄。',
squirrelfish:'原產紅海與印度洋—太平洋，蘇伊士運河開通後，牠經由運河進入地中海，如今在地中海東部的黎凡特沿岸已形成大量族群，是典型的「雷賽普斯移民」。白天躲在岩洞裡，入夜才出來覓食。',
bigeyebream:'白天在礁區附近慢慢游動，主要在夜間覓食，專吃螺類、陽隧足和海膽等帶硬殼的獵物。牠能在轉瞬間讓身上浮現四條寬大的黑色橫帶；大型成魚有時聚成五十尾左右的魚群。',
fusilier:'在水族館觀察到的產卵行為很有意思：接近日落時，親魚浮到水面，雄魚用吻部輕推雌魚腹部，附近幾尾想「插隊」的雄魚也跟著繞游半圈，一起在水面排出精卵，之後各自回到魚群。',
monocle:'名字裡的「白頸」只有成魚才有：幼魚與較小的亞成魚沒有頸背的白色寬紋，而是從眼後到尾柄有一條鑲黑邊的白色縱帶。2022 年的研究重新整理了這群外形相近的魚，把牠們拆分成數個物種。',
goatfish:'下巴那對長鬚布滿化學感受器，像味覺一樣能嘗出藏在沙裡的獵物，找到後牠會把吻部插進沙中挖掘。其他礁魚常跟在覓食的鬚鯛後面，等著撿食被翻出來、卻沒被吃掉的小動物。',
tuskfish:'豬齒魚一族以會使用工具聞名。牠的近親黑斑豬齒魚曾被拍到叼著貝殼，左右甩頭把殼砸在大石頭上，直到敲開為止；同屬其他種類也有用岩石當砧板的紀錄，在魚類中相當少見。',
morwong:'現在多歸入 Goniistius 屬，屬名在希臘文的意思是「斜帆」，指這類魚身上一道道斜行的黑帶。日本的近親以「鷹之羽」命名，也是因為這些斜紋像老鷹的羽毛。牠胸鰭下方的鰭條肥厚、不分枝，適合停在礁盤上。',
wrasse:'屬名 Halichoeres 由希臘文的「海」與「豬」組成，和中文的「海豬魚」不謀而合。牠專挑硬殼的獵物，吃貝類、甲殼類和海膽。小時候是黑白分明的花色，長大後背上才出現一兩塊黃色鞍斑。',
russellsnapper:'學名紀念英國外科醫師兼博物學家派翠克．羅素（Patrick Russell）。成魚多半生活在較深的礁區，幼魚卻會進入紅樹林河口，甚至溯入溪流的最下游，長大後再回到海裡。',
scorpionfish:'不產卵，而是直接生出小魚。雌魚在體內孵化魚卵，冬天的夜裡才把約 4 公釐長的仔魚釋放到海中；研究推測選在夜晚，是因為多數掠食者此時不活動。住在淺水的雌魚生產前還會移往較深的地方。',
mezina:'日文名オキナメジナ，是磯釣名魚黑毛（メジナ）的南方近親。三種黑毛外形極為相似，牠的嘴唇特別厚、口裂稍寬；體型也比另兩種小，在日本沿岸很少釣到。',
sergeant:'屬名 Abudefduf 源自阿拉伯語，abu 是「父親」，形容牠在礁區像一家之長般帶頭對抗其他魚。繁殖時常在大潮期間成群聚到產卵場，卵黏在岩石上，由雄魚守護並搧水供氧，孵出的仔魚則隨大潮漂往外海。',
stripey:'名字和柴魚片毫無關係：柴魚片是用鰹魚燻乾製成，因為乾透後像深褐色的木柴而得名。這種黃黑條紋的小魚俗稱斑馬、條紋蝶，分布很特別，只出現在赤道南北兩側的溫暖海域，熱帶中央反而沒有。',
blackporgy:'黑鯛會變性，而且是「先雄後雌」：一兩歲時全部是雄魚，到了三歲左右，有相當比例的個體轉變成雌魚。因為這種特殊的生殖方式，黑鯛常被當作研究魚類性轉變的模式物種。',
puffer:'日本叫草河豚（クサフグ），以在海灘產卵聞名。春夏的大潮期間，大批河豚會在滿潮前兩三個小時湧到礫石或沙灘的浪緣，有些甚至被浪沖上岸，在淺灘翻騰著排出精卵。全身含河豚毒素，不可食用。',
rabbitfish:'臺灣俚諺把常見的刺毒魚排成「一魟、二虎、三沙毛、四臭肚」，牠就是第四名。各鰭的硬棘都帶毒腺，被刺到會紅腫劇痛，台語俗語「象耳無名，鑿著叫阿娘」說的正是牠（俗稱象魚）的棘。',
neondamsel:'這種不到十公分的小魚，背部是亮眼的電光藍。幼魚常成群躲在軟珊瑚之間；繁殖時雌雄配對，把卵黏在礁石上，之後由雄魚守在一旁，不時搧動魚鰭為卵送進新鮮海水。',
slenderpinjalo:'種小名紀念一位名叫史文克（H. Schwenk）的荷蘭步兵少校，模式標本很可能就是他採集的。分類學家對牠的分布仍有不同看法，有人認為牠分布在太平洋，也有研究把牠歸在印度洋與紅海。',
neglectascorpion:'種小名 neglecta 在拉丁文是「被忽略的」。牠常獨自伏在開闊的沙泥底上，斑駁的體色和多棘的頭部讓牠很難被發現；背鰭硬棘有毒，雖然偶爾被拖網撈起，卻沒有漁業價值。',
greenfinwrasse:'牠會變性，而且記性很好。雌魚游到下游的產卵場與雄魚交配，體型越大的雌魚游得越遠；有些雌魚在產卵後轉變為雄魚，並在自己去過的產卵場建立地盤，研究者認為牠們記得這些地點的位置。',
chocolatehind:'體型最小的石斑之一，個性隱密，常躲在泥沙較多的死珊瑚礁裡。牠是「先雌後雄」的雌雄同體，而且雄魚有兩種來源：有的由雌魚轉變而來，有的一開始就是雄魚。',
sammara:'淺水區最常見的新東洋金鱗魚，常在枝狀的軸孔珊瑚附近出沒。鰓蓋角落有一根帶毒的棘，被刺到會很痛；牠除了供食用和水族觀賞，也常被漁民拿來當作釣餌。',
threadfinbutterfly:'背鰭後方的黑色眼斑是一個「假眼」，加上穿過真眼的黑色眼帶，讓掠食者誤把尾端當成頭部攻擊，牠就有機會往反方向逃走。種小名 auriga 是拉丁文的「馬車夫」，指那根像馬鞭一樣的鰭絲。',
lessoniana:'臺灣俗稱軟絲。東北角的野柳保育區每年在五到九月的產卵季投放數百支竹叢，供軟絲把卵串掛在竹枝上，稱為「軟絲產房」；產卵季結束後，竹叢還會留在海底，讓花枝冬天接著利用。',
nozakii:'本世紀以來在中國沿海越來越常大量出現。2004 年遼東灣爆發白色霞水母群聚，當地捕撈食用海蜇的漁獲因此大受影響。牠在香港是最常見的水母，也是泳客被螫傷的主要元兇。',
boxjelly:'大多數水母把精卵直接排進海裡，牠卻有求偶舞：雄水母用觸手勾住雌水母，拖著她游一陣子再拉近，把一包精莢交到她的觸手上，雌水母再把精莢吃下，在體內受精。這在箱水母中相當罕見。',
largescalemullet:'俗稱豆仔魚。生活在海水與淡水之間，會上溯到河川，產卵時則回到海中，並在產卵季聚成大群，漁業也多在這時捕撈，牠的魚卵很受重視。基因研究顯示，這個名字底下可能藏著好幾個外形相同的物種。',
greenbackmullet:'吃飯時連沙帶泥一起吞下，從中濾出微藻和有機碎屑。成魚在沿岸、潟湖與河口之間游動，幼魚甚至會游進稻田和紅樹林。除了供食用和鹽漬，也常被當作釣餌。',
gizzardshad:'英文名 Japanese gizzard shad 的 gizzard 是「砂囊」。海鰶類的胃像鳥類的砂囊一樣肌肉發達，能把連同底泥一起吞下的碎屑磨碎消化。牠在大肚溪口是優勢魚種，每年二到四月產卵。',
fourline:'被拉出水面時會發出「咯咯」的叫聲，英文俗名 grunter（咕噥魚）就是指牠們這一類。雄魚會守護魚卵並為卵搧水。牠也經由蘇伊士運河進入了地中海。',
mullet:'被漁民稱為「信魚」：每年冬天，烏魚群會沿著等溫線從東海南下，到臺灣西南海域產卵，冬至前後十天是盛漁期，雌魚的卵巢製成的烏魚子被稱為「烏金」。基因研究發現，西北太平洋的烏魚其實分成三個隱藏物種。',
lemuru:'印尼峇里海峽的「lemuru」漁業就是以牠為對象，漁獲部分做成罐頭與鹽煮魚乾。這個漁場的產量起伏劇烈，大約每兩三年循環一次，過去幾十年曾多次崩潰又恢復。',
splendens:'鰏科魚類的食道周圍有一圈發光器，裡面住著會發光的共生細菌。魚體再以反光層與遮光構造把藍綠色的光導向腹部，從下往上看時，牠的身影就會和水面的亮光融為一體，不容易被掠食者發現。',
comeshad:'環球海鰶從琉球群島到澳洲昆士蘭都有分布，是太平洋島嶼居民的自給漁獲。牠和日本海鰶一樣用鰓耙濾食浮游生物，背鰭最後一根鰭條拉長成絲，常成群出現在沿岸、潟湖與河口。',
nuchalponyfish:'和其他鰏科魚類一樣，牠的喉部藏著由共生細菌點亮的發光器。多數鰏科魚類的雄魚發光器比雌魚大得多，形狀也因種類而異，研究者認為這些光除了偽裝，也是同種之間的求偶信號。',
duckbillsleeper:'原產印度洋到西太平洋，卻在大西洋兩岸都出現了外來族群：西非的奈及利亞、幾內亞、喀麥隆，以及巴拿馬、委內瑞拉和巴西都有紀錄。這種不到 11 公分的小魚是怎麼橫越大洋的，至今還沒有定論。',
tankgoby:'從非洲到大洋洲的河川、溝渠和池塘都找得到。成魚在淡水中產卵，孵出的卵和仔魚再隨河水漂到海裡；牠在半淡鹹水中能長得比在淡水大得多。牠也會吃同類，這在野外相當常見。',
frillfingoby:'牠的近親在潮池間會跳躍：退潮時受到驚擾，就能準確跳進鄰近的另一個潮池。1951 年的經典研究發現，牠們在漲潮時游過潮池上方，記下周圍的地形，退潮後就靠這張「地圖」跳往安全的地方。',
eelgoby:'住在河口的泥洞裡，眼睛小到幾乎看不見。牠能把空氣含在鰓腔裡呼吸，所以可以離開水很長一段時間。身體細長如鰻，最長約 30 公分，沒有漁業價值。',
milkfish:'名字的由來眾說紛紜。最廣為流傳的是鄭成功問「什麼魚」的傳說；也有人認為源自西拉雅語的「麻薩末」，或西班牙語的 sábalo。牠在菲律賓稱為 bangus，常被視為國魚；臺灣早在荷蘭時期就有養殖紀錄。',
pelagicus:'英文名 blue swimmer crab。雄蟹通常是鮮藍色帶白斑，螯腳較長；雌蟹偏綠褐色，甲殼較圓，兩性一眼就能分辨。最後一對腳扁平如槳，讓牠能在水中游泳。',
upsidedownjelly:'牠把傘面朝下貼在水底，讓口腕朝上曬太陽，養活體內行光合作用的共生藻。被打擾時，牠會從口腕放出大量裹著刺細胞的小球，混在黏液裡漂散，在附近游泳的人會感到「水在刺人」，2020 年的研究才解開這個謎。',
emperor:'可以活到 28 歲、重達 8 公斤以上，是印度洋—西太平洋重要的商業與遊釣魚種。牠能長時間忍受鹽度只有海水三分之一的環境，因此被視為適合在河口養殖的魚種。',
sarba:'最大可達 80 公分、12 公斤。牠的性別在各地不太一樣：在澳洲，雌雄分得很清楚；在亞洲，卻有部分個體先當雄魚、之後轉變為雌魚。幼魚在河口長大，隨著成長慢慢移往較深的水域。',
redseabream:'日本人稱為真鯛，紅色的身影是喜宴上不可少的吉祥魚。日本的養殖真鯛約有一半產自愛媛縣，宇和島市的產量全國第一。臺灣俗諺「五鮸六嘉鱲」也把牠列為名貴海魚。',
coioides:'俗稱青斑。石斑魚是「先雌後雄」的雌雄同體，雌魚要很多年才會自然變成雄魚，野外雄魚稀少，曾是人工繁殖的一大難題。臺灣從 1980 年代起發展繁養殖技術，如今是石斑魚苗的重要輸出國。',
porcupine:'受到威脅時會吞水把身體鼓成刺球。牠的游泳能力不強，幼魚常躲在漂浮的馬尾藻底下隨波漂流；成魚則在夜間出來覓食，用堅硬的齒板咬碎螺貝、海膽與寄居蟹。',
yellowgoat:'大型成魚常獨自在沙坡上覓食，用下巴的鬚翻找沙中的小動物，身後常跟著其他魚，等著撿食被驚動而逃竄的獵物。牠的魚肉除了鮮食，也會曬成魚乾。',
yellowbarracuda:'常和外形相近的鈍金梭魚混淆，實際的分布範圍至今仍不確定。牠也是經由蘇伊士運河進入地中海的魚種之一。最大可長到 60 公分，常在沿岸礁區成群活動。',
oyena:'嘴巴能像伸縮管一樣向前伸出，從沙底吸取小生物，單獨或成小群在沿岸、潟湖與河口活動。牠在市場上鮮售，但在一些地方，這種小魚也被做成魚粉，甚至拿來餵鴨子。',
chinesefilefish:'會配合環境換衣服：在澳洲莫頓灣，生活在海草床的個體是褐色，到了亮綠色的蕨藻叢中，則會轉成鮮綠色來偽裝。俗稱剝皮魚，皮膚上布滿細小的棘，摸起來像砂紙。',
silversprat:'澎湖人稱丁香魚，國內 99% 以上的丁香魚都產自澎湖。夏天漁獲豐富，漁村把丁香用鹽水煮熟後在烈日下曬乾，兩三天就成了魚乾。為保護資源，澎湖每年五月實施禁漁期。',
yellowstripescad:'常在大陸棚的軟底上方聚成大群，有時也會游進淡水，例如越南湄公河三角洲受潮汐影響的淡水河段。牠體型小、長得快，不到 12 公分就能繁殖。',
bigeyesnapper:'常和其他種類的笛鯛混在同一群裡活動，一身銀白配一條金黃縱帶。過去許多文獻把牠記為 Lutjanus lineolatus，直到後來才確認是同一種魚。最長壽的紀錄約 11 歲。',
monogrammonocle:'種小名 monogramma 在希臘文是「一條線」，指體側那條暗色縱帶。吻部另有三條藍色細線，眼下還有一道藍色 V 形紋。過去常被誤認成其他種類，在文獻中換過好幾個名字。',
seagrassparrot:'牠是偽裝高手，綠褐色帶淡斑的鱗片和海草融為一體，很容易被忽略。牠也會變性，先當雌魚再轉為雄魚。在印度洋的阿爾達布拉環礁，牠們會在退潮時聚到海草灘上方產卵。',
fangsiao:'日本稱為飯蛸（イイダコ），因為抱卵的雌章魚煮熟後，腹中的卵就像一粒粒米飯。雌章魚產卵後會守在卵旁保護，大多在卵孵化時死去；漁民把抱卵的雌章魚叫作「飯持」。',
chinensis:'臺灣人依大小叫牠不同的名字：十幾公分的幼體叫小卷，亞成體叫中卷，二三十公分以上的成體叫透抽，大型雄性則叫砲管。「小卷」其實是「小管」，因為台語兩字同音而寫成了卷。',
yellowfin:"嘴裡前排是尖牙，兩側卻排著多列臼齒，適合處理砂泥底的貝類與甲殼類。臺灣俗稱牠「赤翅仔」，新鮮時胸鰭、腹鰭和臀鰭呈鮮黃色，尾鰭下葉也泛黃光，是沿岸常見的食用魚。",
terapon:"除了追捕小魚蝦，牠還有取食大型魚類鱗片的紀錄，食物來源比外表看來多樣。從潮間帶到河口，甚至淡水河段都能見到牠；這種對鹽度的適應力，讓花身雞魚能往返海岸與河口覓食。",
marbledgoby:"1975 年，臺灣從柬埔寨引進筍殼魚作為養殖對象，逃逸的魚後來在西南部河川與水庫繁殖。牠雖然常被叫作鰕虎，卻屬於塘鱧科，左右腹鰭彼此分開，沒有合成鰕虎常見的吸盤。",
bream:"武昌魚的正式中文名是團頭魴，模式產地在中國湖北的梁子湖。牠曾被引進臺灣養殖，如今部分南部水庫與水塘仍有逃逸後留下的族群；在中國是重要的養殖魚，在臺灣的養殖規模則小得多。",
girella:"幼魚會跟著漂流的海藻移動，長大後則多在浪花翻湧的大片岩礁間活動。牠的菜單也隨季節改變：冬天偏重藻類，夏天會捕食各種小型生物，是臺灣磯釣常說的「黑毛」之一。",
tilapia:"並非所有吳郭魚都把卵含在嘴裡孵化：吉利吳郭魚會挖出巢穴，在巢中產卵並守護後代。繁殖期雄魚頭部還會出現孔雀綠的斑點與淺綠線紋，和平常較暗的體色很不一樣。",
hypsibarbus:"雖然也叫「粗鱗武昌魚」或「黃鰭武昌魚」，牠與真正的武昌魚分屬不同的屬。原產中南半島，後來被引進臺灣養殖；嘴邊的兩對鬚和背鰭硬棘後緣的鋸齒，是牠身上值得細看的地方。",
spottedsnakehead:"這是臺灣原生的鱧魚，成魚會築巢並保護幼魚，並非每一種外形像蛇的鱧魚都是外來種。牠能在缺氧的淤泥水域生活，野外族群卻仍受到外來魚競爭影響，魚類資料庫記錄其數量已逐漸減少。",
pleco:"水族缸裡以刮食附著藻類聞名的琵琶鼠，到了野外也會改變水底的食物來源。同屬魚類會在河岸挖洞繁殖，大量洞穴可能加快岸邊侵蝕；美國的引入紀錄也將水族棄養列為可能來源。",
loach:"泥鰍缺氧時會浮到水面吞氣，利用腸壁進行氣體交換，腸道除了消化也能幫忙呼吸。這使牠能住在淤泥與植物碎屑多的緩流水域；臺灣市場販售的泥鰍，魚類資料庫記載主要來自人工養殖。",
amurcatfish:"鯰魚嘴邊的鬚會隨成長減少：幼魚有三對，長大後下頜的一對逐漸退化，成魚只剩兩對。牠的背鰭很短，臀鰭卻一路延伸到尾部，胸鰭還藏著帶鋸齒的硬棘，抓取時並非全身都滑軟。",
giurinus:"同一種極樂吻鰕虎，可以有兩種不同的成長路線：有些幼魚順流入海，兩三個月後再回到河川，有些族群則終生留在淡水。成魚在石下掘穴產卵，對闖進領域的魚會主動驅趕。",
ladyfish:"學名中的 machnata 來自模式產地對這種魚的稱呼，最初的描述地點在紅海的吉達。牠游得快，捕食魚、魷魚與甲殼類，也是不少釣客的目標；但魚肉細骨很多，作為食用魚的評價並不高。",
tarpon:"牠能把魚鰾用來輔助呼吸，水裡缺氧時便到水面吞氣。剛孵化後的幼魚卻不像銀亮的大魚，而是透明扁長、近似鰻魚柳葉狀幼生的模樣；進入沿岸與河口後，才逐步變成成魚的體形。",
eel:"人們吃鰻、養鰻很久，卻直到 2009 年才在西馬里亞納海嶺附近採到野生日本鰻鱺的卵。研究船在海上用 DNA 檢測確認身分，替牠遠赴大洋產卵的旅程補上直接證據；產卵活動與新月前後的時段有關。",
niletilapia:"雌魚會把受精卵收進嘴裡孵化，育幼時幾乎不進食，依水溫約需一至兩週。小魚離開母魚的嘴後，遇到危險還能游回去躲藏；「口孵」這個名稱，說的正是牠用嘴保護後代的方式。",
mangrovejack:"年幼時藏在紅樹林河口與溪流裡，長大後卻會搬到外海的深礁，最深可在百公尺以下活動。澳洲釣客稱牠為 Mangrove Jack，牠上鉤後常往沉木障礙裡鑽，強勁的掙扎使牠成為難纏的遊釣魚。",
scat:"臺灣釣魚俗諺中的「五變身苦」，指的就是金錢魚，提醒的是背鰭尖銳而有毒的硬棘。牠的幼魚常成群出現在低鹽度河口，甚至進入淡水小溪；身上的圓斑很討喜，處理時仍須避開毒棘。",
mono:"小魚頭上有兩道暗帶，腹部也有腹鰭，長大後暗帶淡去，腹鰭還會退化甚至消失，變成一片銀亮的菱形。水族市場常叫牠「銀鯧」，但這個俗稱也會指別的魚，不能只憑名字判斷種類。",
twseabream:"牠直到 2006 年才以臺灣為名發表為新種，過去臺灣記作灰鰭棘鯛的魚，有些其實是牠，有些則是太平洋棘鯛。外表相近的黑鯛類，需要仔細比較鱗片、鰭條等特徵，才逐漸釐清彼此身分。",
mudskipper:"彈塗魚雄魚會一口口把空氣搬進泥洞裡，讓洞頂的卵在有氧的空氣中發育。等卵成熟、漲潮淹過洞口時，牠又把氣室裡的空氣移走，讓水淹到卵，促使小魚孵化並游出洞穴。",
chelon:"幼魚受驚時會躍出水面，身上的鱗片也會隨長大改變：小時候是圓鱗，成長後逐漸帶上細小櫛刺。牠雖然也被叫作「烏仔」或「豆仔魚」，但沒有烏魚那樣飽滿的卵，漁業身價因此不同。",
swampeel:"乾季或冬天時，黃鱔會把洞挖到地下一、兩公尺深，還可能有好幾尾共住一處。牠能利用口腔裡的皮褶直接呼吸空氣，因此離開開闊水面、藏進泥底，仍有辦法取得所需的氧氣。",
dwarfsnakehead:"七星鱧是臺灣原生淡水魚，另有「鮕鮘」的叫法；牠的上鰓器能讓牠直接吸取空氣中的氧氣。雖然能在缺氧水域生存，棲地破壞與外來魚競爭仍使野生族群日漸少見，耐缺氧並不能抵擋所有環境變化。",
whitecrucian:"原產日本琵琶湖，後來因垂釣而被移到許多地方；日本釣客熟悉的ヘラブナ，就是由牠選育而來。牠的食物偏重浮游生物，與其他鯽魚相比，更適合在池沼或河川裡水流平緩的地方生活。",
munense:"東南亞河川漲水時，牠會離開河道，進入被淹沒的森林；等水位退去，又返回河裡。平時可見於石塊與巨礫之間，攝食浮游動植物，活動範圍會隨洪水季節改變，而非一直停留在同一段河床。",
gourami:"繁殖期雄魚會在水面築起泡沫巢，並留下來照顧後代。牠的迷器能直接與空氣交換氧氣，讓牠適應低溶氧環境；名字裡的「三星」，其實是體側兩個黑斑再加上眼睛，恰好連成的一條線。",
semifasciolatus:"眼睛上半部泛紅，因此又有「紅目鮘」的叫法；雄魚的背鰭與尾鰭邊緣也帶橘紅色。這種小魚被帶到各國作觀賞魚，但在臺灣，原有的野生族群卻受水域污染與農藥影響，已不容易看見。",
glassfish:"身體帶著半透明的米黃或綠黃色，頭部與腹部卻泛銀光，並非全身都像玻璃一樣透明。牠的第一背鰭前段有黑色，眼眶後上方還藏著一根向後的棘，細看時比整片透亮的身體更容易漏掉。",
bigeyetrevally:"名字裡的「六帶」在幼魚身上最清楚，五、六道暗色橫帶會隨成長逐漸淡去，長大後很難再靠條帶認牠。稚魚可以進入河口甚至河川中下游，成魚則多在沿海礁區活動，一生經過不同的水域環境。",
fivestripewrasse:"五帶錦魚長大前後的花紋很不一樣，幼魚在背鰭前、中、後段和尾柄基部帶著眼狀斑。成魚身上的紅紫色紋路與尾鰭邊緣更醒目；若只拿成魚的配色找小魚，便容易錯過同一物種的另一副模樣。",
flagtail:"白天常成群聚在淺潟湖或碼頭附近，到了夜裡才積極捕食浮游甲殼類與小魚。牠的英文名 Fivebar Flagtail 指尾鰭上的五條黑帶，遠看像一面帶條紋的小旗，也是魚群轉身時最醒目的地方。",
hawkfish:"䱵科魚類常用胸鰭撐在礁面，伏等獵物游過，因此有「鷹魚」這個英文通稱。翼䱵住在浪潮直接拍打的岩礁上，菜單除了小魚與甲殼類，也包括海膽和易碎的海星，並非只盯著游動的獵物。",
manybargoatfish:"覓食時用下巴的一對鬚探索砂地，白天獨自在礁砂交界活動，晚上則找安全的地方休息。舊資料裡的「三帶海緋鯉」曾被當成另一種，魚類資料庫如今把這個名字列為多帶海緋鯉的同種異名。",
duskysleeper:"外形雖像鰕虎，左右腹鰭卻各自分開，屬於塘鱧科。牠會把卵產在細葉的沉水植物上，親魚留下搧動水流照顧卵；幼魚則常出現在紅樹林根系之間，從細小的藏身處開始成長。",
olivegoby:"日本的觀察記錄中，牠在夏天利用岩洞築巢，產卵後由雄魚用胸鰭搧水，替卵送來新鮮水流。當地也有把陶製小壺沉到水底捕捉牠的漁法，利用的正是這種魚會躲進洞穴的習性。",
rosybitterling:"雌魚會伸出細長的產卵管，把卵送進淡水蚌裡，再由雄魚上前授精。孵化的小魚還會留在蚌的鰓瓣間，隨蚌呼吸取得氧氣，直到卵黃消耗完才離開；牠的繁殖因此離不開活的淡水貝類。",
pearleartheeater:"牠常把底砂含進嘴裡，篩出能吃的小生物，因此英文也叫「食土魚」。這種南美洲慈鯛被帶到澳洲後，能忍受接近海水的鹽度，在部分河系擴散；原本吸引水族愛好者的魚，也成了當地生態管理的難題。",
raccoonbutterfly:"英文稱牠為「浣熊蝴蝶魚」，因為眼部的黑帶像一副面罩。牠是會在夜裡覓食的蝴蝶魚，白天多藏在礁石間；幼魚背鰭上的黑眼斑長大後會消失，尾柄的黑斑則向上擴展，花紋也隨年齡改變。",
blackeyewrasse:"黑腕海豬魚具有先雌後雄的性轉變，幼魚的背鰭與尾柄上還有帶黃緣的黑眼斑，長大後逐漸縮小或消失。白天在礁區找食物，夜裡則鑽進砂堆睡覺，同一片砂地也可能是牠藏身過夜的地方。",
yellowfinsurgeon:"尾柄兩側的硬棘像小刀，是處理這種魚時要避開的部位。牠也不只刮食藻類，食物中還包括魚肉碎屑；魚類資料庫記錄其可能因食物鏈累積熱帶海魚毒，因此有食用利用紀錄不代表每尾都安全。",
blackspotsergeant:"牠常住在岸邊幾公尺深以內的浪拂區，幼魚也會留在潮池裡。與七帶豆娘魚相比，除了尾柄上方那枚黑圓斑，牠的背鰭軟條部還會延長成尖形；仔細看鰭形，也能幫忙分清這兩種近似的魚。",
sevenbarsergeant:"牠在淺礁、潮池與潟湖裡有強烈的領域性，會守住自己的活動空間。身側條帶有時很淡，若和梭地豆娘魚混淆，可再看背鰭後段：牠的軟條部較圓，近親則延長成尖形，尾柄也多一枚黑圓斑。",
convictsurgeon:"覓食時會聚成魚群，一起進入其他草食魚的領域，抵擋守地盤者的驅趕，啃食礁上的絲狀藻。尾柄棘銳利，且有可能帶熱帶海魚毒的紀錄；成群吃藻的畫面很平和，卻不能據此判斷適合食用。",
orientalbutterfly:"耳帶蝴蝶魚的耐寒力頗強，魚類資料庫記錄牠可忍受約十度的水溫。幼魚背鰭後段有眼狀斑，長大後的外觀又不同；從港口防波堤、藻叢到珊瑚礁都能生活，活動環境相當多樣。",
kleinbutterfly:"牠的食物從珊瑚蟲、小型無脊椎動物，到浮游動物與藻類碎片都有，不只啄食一類珊瑚。嘴裡上下頜各有數列細尖牙齒，配上短尖的吻，能在礁盤與沙地附近取食，是食物來源較多樣的蝴蝶魚。",
stareyeparrot:"並非所有鸚哥魚的牙齒都連成一張硬喙：卡羅鸚鯉的外齒彼此分開，閉嘴時上頜牙覆在下頜牙外。牠會取食底藻和海草，棕色帶白點的初期雌魚，與眼周有橘紅放射紋的終期雄魚也很不一樣。",
japaneseparrot:"同一種魚能換上很不一樣的顏色：初期個體大致褐色、尾巴紅橘，終期個體則出現黃色與藍綠色的大色塊。舊資料曾把牠誤認為紅尾鸚哥魚；辨識這類魚時，只看身體顏色往往不夠，還得比對齒板與鱗片。",
christmaswrasse:"這種錦魚常在潮來潮往、岩礁容易露出水面的礁緣巡游，連海星也是食物。牠的上下頜前端各有兩顆犬齒，頭頂和頸部大多裸露無鱗；鮮豔的藍綠花紋之下，藏著適合捕食小動物的尖牙。",
ayu:"琵琶湖的「小香魚」未必是尚未長大的幼魚，而是受湖中食物條件限制，成魚也維持小巧身形。若進入河流，改以石上的附著藻類為食，就能長得更大；同一種魚，會隨成長環境展現不同模樣。",
honmoroko:"冬季抱卵的暗色頜鬚鮈，是琵琶湖沿岸珍惜的滋味。當地有把魚烤過，再蘸味噌、醋與芥末調成醬汁的吃法；小魚連骨入口的細緻口感，也讓牠在「琵琶湖八珍」中占有一席。",
nigorobuna:"滋賀的鮒壽司以抱卵的煮頃鮒為代表，先鹽漬，再與米飯一起發酵。酸味來自乳酸發酵，魚骨也會逐漸軟化，和今天常見的醋飯壽司很不一樣；這種保存魚的方法，還與湖畔祭祀相連。",
biwamasu:"秋雨過後，琵琶鱒會離開湖泊，逆流進入河川繁殖，因此在湖畔又有「雨之魚」的稱呼。幼魚先在溪流成長，到了初夏才下湖；成年後再循著季節回到河中，把湖與河的生活連成一圈。",
wakasagi:"諏訪湖著名的公魚漁業，起點之一是大正三年從霞浦運來的魚卵。後來諏訪湖又成為向日本各地供應受精卵的地方，小小的魚卵隨著人為移植旅行，也改變了許多湖泊冬季的漁業風景。",
icefish:"新鮮的日本銀魚通體晶瑩，在霞浦有「湖之鑽石」的稱呼。牠本身就是一種小型魚，並不是所有魚類幼苗的統稱；日文中的白魚、素魚和吻仔魚雖然名稱相近，實際指的卻不一定是同一種魚。",
channelcat:"斑點叉尾鮰會利用岸邊洞穴、沉木下方等隱蔽處繁殖，由雄魚守卵，並搧動胸鰭送入新鮮的水。牠原產北美，日本曾為養殖而引進，逸出後卻成為霞浦漁業頭痛的外來魚，會掠食網中的漁獲。",
bluegill:"藍鰓太陽魚在一九六〇年由美國帶到日本，後來逐漸擴散到各地。牠會隨季節和環境改變食物，連其他魚的卵也會吃；這種不挑食的本領，使牠能適應新水域，也對原有生物帶來壓力。",
dottedshad:"東京灣壽司店說的「コハダ」，其實就是較小的斑鰶，並不是另一種魚。更小時又叫「シンコ」；同一條魚隨體型換了稱呼，讓人從菜單上的名字，也能看見日本魚食文化對成長階段的細分。",
hasu:"真馬口鱲是琵琶湖一帶追逐小魚的鯉科成員，嘴邊曲折的輪廓格外醒目。春末到夏季，牠們會到砂礫底繁殖；在湖岸外側成群活動的魚影，也讓湖中的捕食關係成了岸邊能觀察到的景象。",
isaza:"疣舌裸身鰕虎並不總守在深水湖底，夜間會往上層活動，天亮前後又回到下方，因此琵琶湖漁民常趁清晨捕撈。春天繁殖時，雄魚還會守在石塊下照顧魚卵，生活節奏隨日夜與季節改變。",
gigi:"叉尾瘋鱨的日文名「ギギ」，來自牠發出的咯吱聲。聲音不是用嘴叫出來，而是豎起胸鰭硬棘，讓基部的骨骼互相摩擦；琵琶湖博物館的觀察還發現，牠們在水中爭鬥時也會發聲，拿取時須留意尖棘。",
japaneseseabass:"日本花鱸在日本會隨成長換名字，從小型的「セイゴ」、中型的「フッコ」，到成魚的「スズキ」，被視為出世魚。牠也是江戶前的代表魚之一，但鰓蓋邊緣相當銳利，拿取時得留意割傷。",
mahaze:"東京灣釣客會把當年出生的小魚叫作「デキハゼ」，天冷後移往深水的則稱「落ちハゼ」。牠們大多在一年內完成成長與繁殖，少數活到隔年的大魚另有稱呼，魚名裡也藏著灣內季節的變化。",
shirogisu:"日本沙鮻與黃鰭刺鰕虎等小魚，同是江戶前天婦羅的重要食材。牠的白肉細緻、脂肪較少，裹衣油炸能添上香氣；看似纖弱的身形，在投釣時卻會傳來鮮明拉力，因此也深受岸釣者喜愛。",
stoneflounder:"石鰈的繁殖季會隨海域改變，北海道西南部日本海一側可在冬季產卵，鄂霍次克海與道東則常到初夏才繁殖。同一種魚並沒有全日本通用的產卵月份，北方海水的季節節奏也留在牠的生活史裡。",
marbledflounder:"橫濱擬鰈在夏季蓄積能量，到了冬季繁殖前，身體逐漸消瘦，生殖腺卻變得飽滿。北海道的食用習慣也跟著季節轉換：夏天看重魚肉，冬天則珍惜抱卵滋味，一條魚呈現出兩種時令。",
silvercroaker:"白姑魚能用鰾發出咕咕聲，日文名裡的「グチ」便讓人聯想到低聲抱怨；頭內又有明顯的大耳石，因此也被叫作「石持」。聲音與骨骼各留下了一個名字，魚肉則是製作魚板等魚漿食品的好材料。",
sappa:"岡山把壽南小沙丁魚叫作「ままかり」，相傳是因為好吃得把自家的飯吃光，還得向鄰家借飯。這種帶著生活氣息的名字，常隨醋漬小魚和壽司出現在餐桌上；細小魚骨也能在醋漬後變得較柔軟。",
pacificherring:"太平洋鯡大量靠岸繁殖時，雄魚排出的精液會讓海水泛成乳白色，北海道稱這種景象為「群來」。雌魚把卵黏在海藻上，而餐桌上的數之子正是鯡魚卵；冬春海岸的變化，也與地方魚食文化相連。",
hokke:"遠東多線魚在北海道會隨年齡與生活方式換稱呼：幼魚體色偏藍，稱「アオボッケ」，細長的年輕魚又有「蠟燭」之名，定居礁區的成魚則叫「根ボッケ」。市場裡不同名字，未必代表不同魚種。",
greenling:"繁殖季的大瀧六線魚雄魚會換上鮮黃婚姻色，守著卵塊驅趕闖入者。雌魚產卵後離開，有時甚至會回頭吃卵；因此雄魚的守護不只防著別種魚，也可能得擋下同種的訪客。",
yellowstripedflounder:"分辨黃條紋擬鰈和相似鰈魚，翻看腹面往往比只看背面更有幫助：牠無眼側的邊緣及尾柄帶黃色，兩眼之間也沒有鱗。魚市場辨魚時，這些細小部位比整片褐色斑紋更能提供線索。",
cresthead:"斯氏擬鰈的雌雄摸起來並不相同：雄魚的鱗片粗糙，雌魚則較平滑，這也是研究人員辨別性別的線索。除了眼睛所在的一面，鱗片的觸感也能透露資訊，是這種北方鰈魚不太顯眼的特色。",
chubmackerel:"白腹鯖很早就開始過群體生活，長到約三公分時便會結群，而且常與體型相近的同伴同行。成魚在繁殖季分批排卵，不會一次用盡所有魚卵；一群看似同步的魚，體內仍各自進行著繁殖節奏。",
blackrockfish:"許氏平鮋不是把卵散在海中，而是直接產出仔魚。幼魚可隨漂浮海藻生活，長大後才轉向礁區；牠的壽命紀錄可達二十年，幼時隨波漂流、成年依附礁石，是同一條魚截然不同的生命階段。",
ezomebaru:"邊尾平鮋能把交配與受精分開安排。北海道的個體在秋末交配後，雌魚可儲存精子四個多月，等到翌年春天才受精，再於初夏產下仔魚；漫長寒冬裡，下一代的準備其實早已開始。",
chika:"日本公魚雖然和湖裡的西太公魚十分相似，生活卻離不開近岸海域。北海道的個體可活到四歲、長到約二十公分，春天雌魚與數尾雄魚在淺灘繁殖；岸邊的小魚群，不一定都是當年出生的幼魚。",
saffroncod:"細身寬突鱈的日文名寫作「冰下魚」，與北海道鑿冰垂釣的景象相呼應。牠的血液含有能抑制結冰的物質，即使海水低於攝氏零度也能生活；寒冬對牠而言，還是靠岸繁殖的重要時節。",
surfperch:"名字帶著「鯽」字，海鯽卻不是淡水鯽魚的海生版本。牠屬於海鯽科，會在母體內孕育下一代，再直接產出幼魚；日本近海春末初夏的繁殖紀錄中，一尾母魚可帶有十餘尾胚胎。",
oliveflounder:"壽司裡常說的「緣側」，是牙鮃鰭基部附近的肌肉，並不是內臟。這種魚的成長也有明顯季節性：北海道個體在下半年長得較快，冬春則緩慢得多，魚體的變化跟著北方海水冷暖起伏。",
blackscraper:"短角單棘魨看似披著一層粗皮，其實皮膚上密布細小鱗片，每片又帶著許多小棘，因此摸起來像砂紙。這層不顯眼的細密結構，讓牠和一般覆著大片光滑魚鱗的魚有著很不一樣的外衣。",
japaneseanchovy:"日本鯷從小到大能以不同模樣出現在餐桌：透明幼魚常做成吻仔魚製品，長大些可煮乾成為高湯材料。伊勢灣漁業甚至依大小分別利用，看似不同的乾貨，背後可能都是同一種魚的不同成長階段。",
japanesehalfbeak:"日本下鱵魚剛孵化時，上下顎的長度其實相近，後來下顎才逐漸伸長，變成醒目的尖喙。這個最容易認出的特徵並非一出生就有，若只拿成魚的模樣尋找幼魚，很容易錯過牠的早期身影。",
redstingray:"赤魟會直接產下小魟，母體內能同時孕育多尾幼仔，並不是把扁平的卵留在海底。牠伏在砂泥上時不易被察覺，尾部又有毒棘；即使魚已離水，這根防身武器仍不能當作普通魚鰭碰觸。",
linedcardinal:"細條銀口天竺鯛在廣島福山常被叫作「ネブト」，是當地炸小魚的材料。牠頭內耳石很大，連頭吃時有如咬到石子，因此也有與石頭相關的地方稱呼；傳統做法常先去頭，再炸得酥香。",
triplespine:"雙棘三棘魨的學名種小名，意思是「具有兩根棘」，指的是左右腹鰭各有的一根強棘。背上另有醒目的硬棘，合起來才顯出三棘魨的輪廓；看懂名稱所指的部位，就不會把所有的棘都算在背上。",
whitespottedconger:"繁星糯鰻的幼生透明而扁薄，像一片小葉子，和成魚的細長模樣差得很遠。牠們從九州—帛琉海嶺附近的產卵海域，隨暖流來到日本沿岸，再變態成小鰻，逐漸加入內灣的底棲生活。",
mantisshrimp:"口蝦蛄並非孵化後就住進海底洞穴，幼生會先在水中漂游約一個月，再轉入底棲生活。東京灣小柴一帶曾以蝦蛄漁業聞名，這種帶甲殼的小動物，也長久占著江戶前壽司的一個位置。",
japaneseswimmingcrab:"日本蟳原產東亞，卻也在遠方留下外來種紀錄：紐西蘭於二〇〇〇年在懷特瑪塔港發現牠，之後在北島多處擴散。故鄉熟悉的螃蟹，到了另一片海岸，可能成為當地需要關注的新住民。",
pacificcod:"北海道冬季餐桌上稱作「タチ」的白子，是大頭鱈雄魚的精巢，常用於鍋物等料理。人們看重的不只有厚實白肉，繁殖季的生殖腺也形成地方食俗，讓同一種魚在市場上有了不同部位的時令。",
alaskapollock:"黃線狹鱈的魚肉常化成魚板與魚漿製品，卵巢則做成鱈魚子或明太子，未必以整魚姿態被人認識。繁殖時，雌魚還會在約一個月內分數次產卵，並不是一次就把所有魚卵排出。",
sailfinsandfish:"日本叉牙魚在石狩灣一帶於初冬靠岸產卵，黏在海藻上的卵塊被稱為「ぶりこ」。北海道曾收集被浪沖上岸的卵塊，繼續孵育後放流，也試用產卵網，替這種魚保留下次回到海裡的機會。",
largerfinbitterling:"大鰭鱊的雌魚在繁殖季會伸出細長產卵管，把卵送進淡水雙殼貝體內。霞浦研究記錄的產卵管可長達八至十公分；外來族群也會和原生鰟鮍類爭用貝殼，一種魚的繁殖，因而牽動了魚與貝的關係。",
biwacatfish:"琵琶湖鯰的繁殖和水位變化關係密切。淀川的觀察發現，牠們會趁漲水進入暫時淹沒的河灘，在夜間繁殖；若水位退得太快，也可能受困其中，寬大的河面之外，短暫出現的淺水同樣重要。",
rockcatfish:"石鯰和常見鯰魚相似，眼睛的位置卻很有辨識力：牠的眼睛向兩側突出，甚至從頭部下方也能看見。琵琶湖博物館的標本資料以此區分近似種類，小小的眼位差別，正是辨認這種湖區鯰魚的線索。",
biwahigai:"琵琶湖鰁也有離開故鄉的歷史：一九一八年，霞浦曾放入二百五十尾來自琵琶湖的魚，後來一度形成可觀漁獲。這段移植紀錄說明，水域裡熟悉的魚名，有時是人們搬運魚苗後才逐漸留下的。",
aburahigai:"油鰁的名字與帶油光般的黃褐色身體有關，嘴部也藏著適應生活的細節：吻端尖長，適合吸取食物。牠會攝食水生昆蟲幼蟲與小螺等，幼時明顯的背鰭黑帶，長成後反而逐漸淡去。",
wataka:"石川魚原本是琵琶湖與淀川水系的魚，卻隨移植出現在日本其他地方。牠在故鄉的處境，與岸邊池塘、水道等環境消失有關；同一種魚能在外地落腳，並不代表原生水域的生活空間也安然無恙。",
largemouthbass:"大口黑鱸的雄魚會在淺水底部整理出碟狀巢床，吸引雌魚產卵，再留下守護魚卵，驅趕接近的入侵者。牠除了以捕食者聞名，也有投入育幼的一面；巢床周圍的魚影，未必是在尋找食物。",
numachichibu:"短棘縞鰕虎不只會追逐小動物，牙齒也適合刮取附著物。日本水族館的飼育觀察中，牠曾啃食缸內藻類；三尖的細齒和不太挑剔的食性，讓這種常見小魚有著容易被忽略的另一面。",
sujiebi:"琵琶湖沿岸會把條紋長臂蝦和黃豆一起煮成「蝦豆」，既是家常菜，也帶著長壽、勤勉的祝願。捕蝦方法還會隨季節改變：春到秋可在淺水放蝦籠，冬季則從較深湖底捕撈，餐桌也連著湖水冷暖。",
silversillago:"多鱗沙鮻會在危險逼近時把自己埋進沙裡，平日藏身的砂泥底，同時也是尋找小蟲與小蝦的地方。這種看似纖細的小魚，壽命紀錄可達七年；灘邊遇見的魚群，不一定只由當年的幼魚組成。",
whipfinmojarra:"長棘銀鱸覓食時會先朝向目標，俯身再迅速伸出口部，吸取砂泥裡的小動物。研究人員曾用慢動作攝影拆解這套動作，發現伸嘴只需約十分之一秒；背上飄著長絲，水底的捕食卻俐落得很。",
acromitus:"鞭腕水母聚集時，從空中也能看出一片片漂浮的身影。研究團隊曾在海南清瀾港用無人機拍攝牠們，估算數量與傘徑，發現分布呈斑塊狀；看似均勻的一片水面，水母其實可能集中在少數區域。",
spottedjelly:"澳洲斑點水母的褐色，有一部分來自體內共生的藻類，藻類能藉光合作用提供養分。不過各地族群並不相同，美洲墨西哥灣的個體便有缺少共生藻的紀錄；同一種水母，也會有不同的營養來源。",
coilia:"刀鱭有往返江海與留在淡水的不同族群，光看外形不容易分清。研究人員會分析耳石中的微量元素，讀出魚曾經過的鹽度環境；頭內小小的耳石，就像隨著成長逐層留下的旅行紀錄。",
largeicefish:"大銀魚雖然透明纖細，長大後卻能吞下其他小魚。水豐水庫的食性研究發現，牠吞魚時多從頭部入口，吃蝦卻從尾端開始；同樣是一口吞食，面對不同獵物，入口的方向也不相同。",
shortsnouticefish:"陳氏短吻銀魚的學名紀念了廈門大學創辦人陳嘉庚，一九三一年發表時所用的標本也來自廈門。餐桌上不起眼的小銀魚，名字背後仍留著早期魚類研究與地方教育史相遇的一段痕跡。",
yellowcatfish:"黃顙魚會在淺水泥底築巢，產卵後由雄魚守在洞口，驅趕接近的魚，並搧動胸鰭讓巢中水流通。牠守護到幼魚能自行游動才離開，這段期間幾乎不進食；拿取時也須留意背鰭與胸鰭的硬棘。",
intermediushalfbeak:"間下鱵不只生活在開闊湖面，河口旁水流較緩的側灣也值得注意。日本針對本種的研究，把保留感潮河段的回水區列為保育方法；主河道之外，那些不起眼的水灣，也是魚類生活的重要空間。",
blackfingudgeon:"黑鰭鰁繁殖時，雌魚會伸出產卵管，把卵放進活的淡水雙殼貝內，幼魚發育到能游動才離開。魚的下一代因而和貝的存續連在一起；湖裡留下成年魚，並不代表就能保住完整的繁殖環節。",
mandarinfish:"鱖魚從小就偏愛活魚，卻不是完全學不會改變。飼育實驗發現，和已會吃死魚的同伴相處，能提高牠接受新食物的機會，所需訓練時間也較短；牠的獵食偏好，還會受到同伴行為影響。",
toxabramis:"似鱎身體雖小，繁殖期卻可以延續很久。長江中游扁擔塘湖的研究發現，牠從春季到夏末分批產卵，不同個體的進度也不一致；短世代與持續補充幼魚的能力，是這類小魚能在湖中占有位置的原因。",
darksleeper:"蘇州人說的「菜花塘鱧」，是把魚和油菜花開的時令連在一起，並不是另一種魚。經過冬季後，春天肥腴的塘鱧成了餐桌盼望；家常的燉蛋把魚味留在蛋裡，也記下江南依季節吃湖鮮的習慣。",
whitebream:"鯿和武昌魚外形相近，卻分屬不同的屬，不能只憑扁高的身形便當作同一種魚。牠腹部的稜一直延伸到胸鰭附近，與團頭魴只在腹鰭後方有稜不同；熟悉的餐桌魚名，也需要細看才能對上物種。",
mongolianculter:"蒙古鮊會在水草邊追逐小魚，幼時卻先以浮游動物和水生昆蟲為食。寒冬到來，牠們常聚到河湖深處越冬，繁殖季又集群活動；同一條魚，隨年齡與季節改變食物，也改變與同伴相處的方式。",
northernsnakehead:"烏鱧會整理水草形成浮巢，把卵留在水面附近，雌雄親魚都參與守護。即使幼魚離巢結群游動，親魚仍可能跟隨照顧數週；牠既是伏擊其他動物的獵手，也是會長時間護幼的魚。",
whiteshrimp:"秀麗白蝦不只是太湖餐桌上的小鮮味，也會影響更微小的水中生物。戶外實驗發現，牠捕食大型水蚤後，浮游動物群落轉以較小的輪蟲占優勢；小蝦的一餐，也能改變水裡看不見的群落組成。",
mittencrab:"中華絨螯蟹雖在河湖長大，下一代卻需要河口的鹹水環境。幼蟹完成早期發育後再逆流上行，成熟時又順流回到河口繁殖；人們熟悉的大閘蟹，生命其實連著內陸湖泊與遠方海岸。",
khankabitterling:"興凱鱊把卵產在河蚌的鰓腔裡，藉貝殼容納下一代。牠又是太湖小型魚研究中的重要成員，二〇一三至一四年的採樣顯示，牠和大鰭鱊的優勢會隨月份、湖區交替，小魚群也有細緻的時空變化。",
chinesebitterling:"中華鰟鮍的幼魚，要先在淡水蚌的鰓內度過早期發育。雌魚利用產卵管把卵送入蚌體，這套繁殖方式讓小魚依賴另一種動物的生活；觀察湖裡的魚群時，藏在湖底的蚌也不能被忽略。",
rivulargudgeon:"棒花魚的雄魚會在淺水底部築巢，巢床直徑可以比魚身長出好幾倍，完成產卵後再留下護卵。平時不起眼的小底棲魚，繁殖時卻需要一片由自己守護的空間，泥沙底也因此多了忙碌的育幼場所。",
yellowdwarfgoby:"小黃黝魚外表不起眼，體內卻藏著不同水系的歷史。研究比較中國多地樣本，發現太湖族群在所分析的遺傳序列中形成明顯分支；看起來相似的小魚，也可能已在彼此分隔的水域累積差異。",
yellowcheek:"鱤是湖河中的大型魚食者，繁殖卻仰賴流動的水。漢江研究把牠列為產漂流性卵的魚，魚卵吸水膨大後，隨水流漂移發育；從強壯的成魚到微小的魚卵，所需的生活條件並不相同。",
barbelchub:"赤眼鱒繁殖時產出的卵，會吸水膨脹，藉著河流漂移發育。研究人員把牠和青魚、草魚、鰱等一起比較，發現這些漂流性卵有增強吸水作用的機制；一顆小魚卵，也藏著適應大河的演化線索。",
spottedsteed:"花䱻在洪澤湖吃什麼，並不全年固定。研究利用穩定同位素推算食物來源，發現低水位時植物性來源較重要，高水位時則轉向蝦、魚和螺；水位改變的不只是湖岸線，也會改變底層魚取得食物的方式。",
xenocypris:"黃尾鯝身體銀白，尾鰭呈黃色，小小的嘴位在頭部下方，適合刮取附著在水底的藻類與碎屑。牠活動在江河與湖泊的中下層，洪澤湖二〇一七至一八年的魚類調查曾將牠列為當地新紀錄。",
nitidcatfish:"光澤黃顙魚的年齡，可以從耳石留下的生長輪紋尋找線索。三峽水庫研究曾辨出一至六齡個體，且不同江段的年齡組成並不相同；外觀看來大小相近的底棲小魚，未必有相同的成長經歷。",
redswampcrayfish:"克氏原螯蝦的母蝦會隨身攜帶受精卵，孵化後的幼蝦也不立刻獨立。牠們能在洞穴裡與母蝦共處數週，經過蛻殼才逐漸自行生活；餐桌上熟悉的小龍蝦，也有一段躲在泥岸裡的育幼時期。",
baldglassy:"眶棘雙邊魚像一片會游動的玻璃，從側面能隱約看見骨骼與內臟。廈門大學的紅樹林觀察介紹還記下，牠會捕食從紅樹落水的昆蟲；枝葉上的小動物，就這樣成了河口魚群的一部分食物。",
orientalsillago:"星沙鮻曾被誤認成另一種帶斑沙鮻，分類人員除了比對體側斑紋，還得查看體內魚鰾的分枝。沙灘上幾乎同樣細長的小魚，差別有時藏在外表看不到的地方，不能只靠「沙鑽」一個俗名辨認。",
slendermojarra:"長身鑽嘴魚不只是伸長嘴巴就能吃到食物，覓食時還會轉動身體，把嘴對準底部。研究者在南非河口觀察本種與近親，記錄牠們吸取獵物後，再從鰓蓋開口排出沙粒，像隨身帶著一套吸取與分選工具。",
chameleongoby:"紋縞鰕虎能迅速改變身上的深色花紋，英文因而稱牠為「變色龍鰕虎」。繁殖時雄魚會在牡蠣或貽貝殼中守巢，護卵期間體色還會轉深；小小一枚空貝殼，也可能是正被看守的育幼場所。",
spottedsicklefish:"斑點雞籠鯧雖有個「鯧」字，卻屬於雞籠鯧科，並不是銀鯧身上多了黑點。牠像鐮刀般彎長的胸鰭，也讓英文俗名帶上鐮刀之意；不同語言從不同部位取名，留下了辨識這種高身魚的線索。",
pickhandlebarracuda:"斑條金梭魚游泳能力強，常成群在白天活動，並沒有固定守住的一處棲所。牠沿著近岸追捕魚與頭足類，和定居洞穴的礁魚很不一樣；雖有食用紀錄，熱帶海魚毒報告仍待確認，本作暫不作料理材料。",
smallscalegirella:"日文名クロメジナ，日本磯釣客暱稱「尾長」（オナガ）。牠和瓜子鱲長得極像，最簡單的分辨方法是看鰓蓋後緣：小鱗瓜子鱲那裡是黑的。牠主要分布在黑潮流經的海岸，喜歡潮流較強的地方，不像瓜子鱲那樣常守在磯邊。",
barredknifejaw:"日本水族館裡的表演明星。條石鯛學得會鑽圈、用嘴拉旗子、叼籤詩等把戲，都是以食物為獎勵訓練出來的。研究也發現，幼魚期在結構複雜的環境中長大的個體，在需要改變既有規則的學習測驗上表現較好。",
spottedknifejaw:"和條石鯛一樣會被水族館訓練表演鑽圈。不過要小心食用：日本厚生勞動省把斑石鯛列為雪卡毒（熱帶海魚毒）中毒的主要原因魚之一，毒素累積在肌肉與內臟，而且各海域、各個體的毒性差異很大。",
pearlspotchromis:"濟州話叫자리돔（jari-dom）。西歸浦的保目洞是傳統「자리」漁業的發源地，過去漁民乘坐名為테우的木筏捕撈；當地從 2002 年起每年舉辦자리돔慶典，用牠做成冰涼的水拌生魚片。近年漁獲越來越少，2025 年的慶典上，牠已成了難得的魚。",
threadsailfilefish:"日本叫剝皮魚（カワハギ）。牠會對著海底用力噴水，把沙泥吹開，再吃掉藏在裡頭的小動物；擺動魚鰭就能在水中靜止，常在釣客毫無察覺時把餌偷光，被稱為「偷餌名人」。冬天的大肝被譽為「海中鵝肝」。",
japanesejackmackerel:"日文名「鰺」（アジ），常見的說法是取自「味」，江戶時代的新井白石就寫過「鰺即味，言其味美」。日本漁民會分辨兩種類型：在外海洄游、體色偏黑的「黑鰺」，和定居在礁區、體色偏黃的「黃鰺」，後者油脂較多、價格也較高。",
johndory:"體側那個大黑斑，在歐洲傳說中是聖彼得的指紋：他從加利利海抓起這條魚、從魚嘴取出錢幣時留下了指印。英文名 John Dory 的由來說法不一，最常見的是來自法文的 jaune doré，意思是「金黃色」。",
kurumaprawn:"日本稱為車蝦（クルマエビ），因為腹部彎曲時，身上的橫紋排成一圈，看起來像車輪。牠在日本被視為蝦中的最高級品；白天常把身體埋進沙裡，只露出眼睛，入夜才出來覓食。",
gazamicrab:"韓國稱꽃게，是醬蟹最常用的蟹。韓國人講究「春吃母蟹、秋吃公蟹」：春天的母蟹滿腹蟹卵，秋天水溫下降後，公蟹為了過冬把肉長得飽滿。每年 6 月 21 日到 8 月 20 日的產卵季禁捕，抱卵的母蟹則全年不得捕撈。",
bluelinedoctopus:"身長只有幾公分，卻帶有足以致命的河豚毒素。平時斑紋並不顯眼，一旦受到威脅，身上的藍色線紋與環紋會閃爍發亮，警告對方別靠近。毒素分布在全身組織，是否由體內共生細菌製造，至今仍有爭議。",
tawilis:"菲律賓小沙丁魚只生活在塔爾湖，是少見以淡水為家的沙丁魚。牠並非遇到浮游生物就全部吞下，研究發現會挑選獵物，偏好的種類也隨時期改變；這種湖泊特有魚已被列為瀕危，生活與整座火山湖緊緊相連。",
blackchintilapia:"黑頦帚齒非鯽也用嘴育幼，但照護工作主要由雄魚負責，和雌魚口孵的尼羅口孵非鯽不同。魚卵先在父魚嘴裡發育，孵化後的小魚仍會停留一段時間，直到能自由游動，才逐漸離開這個育幼空間。",
miopsglassfish:"小眼雙邊魚雖然身體透明，眼後上方卻藏著一根細小硬棘，是辨識本種的重要線索。牠會吃水生昆蟲，也攝取小魚與甲殼類；看似輕薄的小玻璃魚，實際上也在水邊扮演捕食者。",
silvertherapon:"鉛色勻鯻的繁殖節奏，和菲律賓乾濕季的轉換相連。塔爾湖與桑帕洛克湖的研究發現，牠在乾季加強生殖腺發育，為雨季產卵作準備；同一種魚在兩座火山湖裡，開始成熟的體型也不相同。",
manilacatfish:"馬尼拉海鯰的雄魚會把卵含在嘴裡孵育，不像許多淡水鯰魚把卵留在巢中。內湖的生殖研究也把口孵列為解讀族群的線索：漁獲裡較少看到雄魚，未必就代表水中真的缺少雄魚。",
gianttrevally:"塔爾湖的「maliputo」並不是另一種淡水鰺魚，而是進入湖中生活的浪人鰺。牠在海裡繁殖，幼魚經潘西皮特河進入湖泊；一條短短的出海河道，連起了海洋產卵場與湖中的成長空間。",
archerfish:"射水魚噴出的水柱並非一路保持相同速度。高速攝影研究發現，後段較快的水會追上前段，讓水柱前端聚成有力的一團，擊中枝葉上的獵物；把昆蟲打下來的力量，有一部分是在離嘴之後才集中起來。",
spottedarcher:"七星射水魚捕蟲的本領不只在噴水。實驗中，牠能根據獵物剛開始下落的動作，預判落點，迅速彎身加速，趕在獵物入水時抵達；打落食物之後，還得搶先一步，才不會讓同伴撿走。",
barramundi:"尖吻鱸的一生可能經歷性別轉換，先以雄魚身分成熟，長大後再轉成雌魚，但並非每尾都一定轉變。牠也會在淡水與河口間移動，成熟魚到河口或近岸繁殖，成長過程同時牽動身體與生活水域。",
fourfingerthreadfin:"四指馬鮁胸前的細絲很醒目，繁殖上的變化卻藏在體內。泰國沿岸研究以生殖腺切片確認，牠會先以雄魚身分成熟，再轉為雌魚；不同海域的轉變體型也有差異，不能只用一個大小判斷所有個體。",
kammalthryssa:"赤鼻稜鯷吃的浮游動物，並不只是極小的水蚤。韓國近岸研究在牠胃裡找到箭蟲、蝦蟹幼生和魚卵，且春冬與夏秋的重要食物不同；銀色小魚看似成群濾食，餐單仍會跟著海中可得的獵物改變。",
spottedseacatfish:"斑海鯰名字裡的「斑」，在背鰭後方小小的脂鰭上特別容易看到，那裡帶著一枚大黑點。牠雖是食用魚，背鰭硬棘卻有毒腺，背棘與胸棘邊緣還帶鋸齒；有食用利用，不代表能徒手隨意拿取。",
elongateilisha:"長鰳的幼魚會利用河口作為成長空間。日本有明海的研究發現，成魚在河口外側夏季產卵，帶橢圓形眼睛的仔魚再移進較混濁的河段；成魚與幼魚需要的環境，並不總在同一片海水裡。",
chacundashad:"無齒鰶的名字點出牠沒有口齒，但處理食物另有辦法：胃部肌肉發達，像鳥類的砂囊。研究記錄牠攝取矽藻與小型動物，細小食物進入體內後，還能由這個特別的胃繼續加工。",
whitesardine:"葉鯡小得像一片銀葉，吃的東西卻不只來自動物。馬當一項胃內容研究，在牠體內記錄到動物性與植物性食物；紅樹林河口的小魚群，能把不同來源的微小食物，接進同一張水中食物網。",
bananaprawn:"墨吉對蝦的幼蝦會在馬當紅樹林成長，再逐漸移出河口。多年採樣發現，靠近小支流的地點比沒有相鄰支流的地點捕到更多幼蝦；紅樹林的育幼價值，不只在樹木，也藏在彼此相連的細小水道裡。",
orangemudcrab:"欖綠青蟳的兩隻螯並不完全相同，其中一隻較粗壯，還帶著較大的臼齒狀突起。研究樣本約七成以右螯為大螯，也有左螯較大的個體；看似對稱的螃蟹，其實也有值得細看的左右差異。",
shieldmullet:"紅樹林裡不只追逐獵物的魚才能找到食物，盾副鯔會在水下表面覓食，濾取底層的有機碎屑。那些散落泥底、肉眼不易分辨的細小材料，也能養活魚群，成為河口食物網的一條路徑。",
sagorcatfish:"細尾六絲鯰長大時，頭頂骨板的形狀也會改變。幼魚背鰭前較窄的月牙形骨板，成魚會變得寬闊，近似蝴蝶輪廓；辨魚不只要看種類，也得留意年齡，牠的背鰭與胸鰭硬棘則都需要小心。",
soldiercatfish:"骨頰海鯰和身旁幾種海鯰最不同的地方，是嘴邊只有一對鬚，而且硬而扁，和常見柔軟長鬚的印象不同。牠沒有下巴的頦鬚，卻同樣在底層攝食甲殼類與小魚；海鯰的鬚數，也能成為辨種的入口。",
donkeycroaker:"截尾白姑魚受到干擾時會發出叫聲，臺灣的研究曾錄下牠的聲音，與其他石首魚比較。牠頭短而高、眼睛較大，尾鰭末緣近乎平直，平時在沿岸砂泥底尋找小型甲殼類、蠕蟲與小魚。",
perch:"河鱸的魚卵會連成一條半透明的黏性卵帶，掛在水草、枝條或石塊上。繁殖季的湖岸若出現一串串像薄紗的東西，可能就是牠留下的卵；這種成群活動的掠食魚，生命也從草叢間開始。",
pike:"白斑狗魚在冰雪開始融化時，會前往淺水與淹水草澤繁殖，讓黏性的卵附著在水草上。剛孵化的小魚先靠卵黃生活，再吃浮游動物，很快便開始捕魚；牠們也得躲避較大的同類。",
blaufelchen:"博登湖白鮭在冬季水溫降低時聚到水面繁殖，魚卵卻會沉向湖底，在寒冷的湖水中發育到翌春。這種只原生於博登湖的白鮭，繁殖需要不同深度的湖水相互配合，已被國際自然保護聯盟列為瀕危。",
browntrout:"褐鱒的一生可以留在淡水，也可以到海中成長，再回到河川繁殖；常被叫作海鱒的魚，與淡水中的褐鱒屬於同一物種。產卵時，雌魚會把卵埋進礫石，剛孵化的小魚先靠腹下的卵黃囊獲取養分。",
commonbream:"歐鯿常成群在水底尋找螺與小型貝類，幼魚銀亮，長大後逐漸泛出銅色。牠和擬鯉有時在同一處繁殖，還會產生雜交後代；因此，野外遇到外形介於兩者之間的魚，辨識時需要格外仔細。",
herring:"大西洋鯡雖成群游在水中，繁殖時卻把卵留在海底，黏附於石礫等表面。密集的魚群能鋪出厚厚的卵床，魚卵本身也成為其他魚的食物；從尚未孵化開始，牠就已接進沿岸的食物網。",
zander:"梭鱸的雄魚會在砂礫或裸露樹根間整理一處淺巢，與雌魚配對產卵。雌魚離去後，父魚仍留守巢邊，驅趕靠近的動物，並用胸鰭搧動水流照顧魚卵；掠食者也有守著下一代的時候。",
flounder:"歐洲川鰈的幼魚能利用潮汐往河口內側移動，漲潮時游入水層，退潮時靠近底部，減少被帶回海中的機會。牠的一生跨越近岸、河口與部分淡水河段，水流既是生活條件，也能成為移動的助力。",
garfish:"細頜針魚在近水面追逐小魚，魚卵卻有另一種停留方式：卵表伸出細絲，能附在水中的物體上。細長的嘴與追魚本領屬於成魚，還沒孵化的下一代，先靠這些細絲留在合適的地方。",
alpinechar:"阿爾卑斯紅點鮭會在深湖陡坡的礫石與石塊間繁殖，有些產卵地位於數十公尺以下。牠的繁殖季落在深秋至初冬；湖面上看來平靜的時候，深水中的石坡正承接著下一代的生命。",
roach:"擬鯉把有黏性的卵產在水草與石塊上，小魚孵出後也不立刻游走，會先附著在植物間，消耗身上的卵黃。等這份最初的養分逐漸用完，牠們才開始自由活動，加入湖中與河裡的小魚群。",
tench:"丁鱥曾在歐洲被稱作「醫生魚」，人們相信其他魚摩擦牠的黏液就能療傷，甚至把黏液用於舊時的民間療法。這是歷史上的信仰，並非已證實的治療效果；牠真正的日常，多半藏在茂密水草之間。",
burbot:"江鱈在寒冬低水溫時繁殖，幾尾魚會聚在一起翻動身體，同時釋出卵與精子。牠是少數以淡水為家的鱈形魚，夏天常躲進較深的冷水；許多魚活動減緩的季節，反而是牠延續下一代的時候。",
europeanseabass:"歐洲鱸的獵物會隨成長改變，幼魚多吃無脊椎動物，長大後魚類在食物中的分量逐漸增加。牠在海中成群繁殖，魚卵漂在水裡；近岸的小魚與成魚，因而需要不同的食物與成長空間。",
gilthead:"金頭鯛能啃食貽貝與牡蠣等帶殼獵物，也具有先以雄魚成熟、之後轉為雌魚的繁殖方式。牠在沿岸與潟湖覓食，繁殖時分批產出漂浮的魚卵；一尾魚的成長，還可能伴隨生殖角色的改變。",
commonsole:"歐洲鰨常把身體埋進砂泥，夜裡才尋找蠕蟲、小蝦與貝類。幼魚最初幾年會利用淺海灣等育幼水域，之後才移向較深處；平伏在海底的成魚，也曾有一段靠近岸邊成長的日子。",
thicklipmullet:"粗唇龜鯔幼時攝取浮游動物，長大後改以底部的矽藻、附生藻與有機碎屑等為食。牠在海中繁殖，幼魚又會進入潟湖與河口；同一群銀色魚，隨著成長也在改變利用水中食物的方式。",
redmullet:"鬚羊魚的幼生先在水層中漂游，長到約四公分才逐漸轉向底棲生活。成魚在砂泥與礫石底尋找小型甲殼類、蠕蟲和貝類；牠下巴上的兩根粗鬚，也成了這種海底魚最醒目的辨識線索。",
blackseabream:"黑椎鯛會成群活動，食物包含海藻與小型無脊椎動物，尤其喜歡甲殼類。牠具有先雌後雄的性別轉換方式，與先雄後雌的金頭鯛不同；同為鯛科魚，成長過程中的繁殖角色也各有變化。",
europeaneel:"歐洲鰻鱺長成後會橫越大西洋，前往馬尾藻海的繁殖區。研究以衛星標記追蹤到成魚抵達該海域，讓長久依幼魚分布推想的旅程有了直接證據；這種遠行的鰻魚，目前已被列為極危。",
goldenmullet:"金鮻的幼魚以浮游動物為食，長大後主要利用藻類與植物碎屑。牠在海中產卵，幼魚於冬春進入潟湖與河口，讓不同成長階段分別利用沿岸環境；這種成群生活的鯔科魚，現已被列為近危。",
undulateray:"波鰩在東北大西洋的分布並不連續，有些沿岸地方能聚集不少個體，別處卻少見。牠的菱形體盤上有波浪狀深色花紋，常在大陸棚沙底尋找底棲動物，並以卵生方式繁殖。",
thornbackray:"背棘鰩會把每個胚胎包在有四角突起的卵鞘裡，留在海底慢慢發育，幼鰩靠卵黃取得養分。牠也能感知其他生物產生的微弱電場，在底部尋找獵物；伏在砂泥中的魚，仍能察覺周圍細小的動靜。",
senegalsole:"塞內加爾鰨的名字雖帶著非洲地名，天然分布卻也沿大西洋延伸到法國。牠的卵與幼生先在水中漂游，長大後才到砂泥底生活，捕食甲殼類、貝類和多毛類；潟湖也是牠能利用的環境。",
conger:"歐洲康吉鰻年幼時靠近海岸，長大後逐漸移向深水，夜間捕食魚、甲殼類與頭足類。牠一生只繁殖一次，會在外海產下大量魚卵；沿岸洞隙裡見到的長鰻，只是這段海洋生命史的一部分。",
whiteseabream:"沙重牙鯛常在清晨活躍於浪花翻動的近岸，從底部挑取貝類與其他無脊椎動物。牠的屬名帶有「兩種牙齒」的意思；礁石、砂底與海草床之間，藏著牠每天反覆搜尋的食物。",
cuttlefish:"歐洲烏賊的墨汁除了用來逃生，也會覆在卵的外層，讓剛產下的卵呈深色。隨著胚胎成長，卵鞘逐漸變薄、透明；小烏賊孵化時已相當完整，很快就能開始主動覓食。",
commonoctopus:"普通章魚的母體會清理卵，這份照護還能影響卵表面的微生物。針對本種的研究發現，受母體照顧的卵，表面可培養出的細菌明顯較少；章魚護卵的工作，細緻到肉眼看不見的尺度。",
shorecrab:"普通濱蟹交配前，雄蟹會把雌蟹抱在身下，等牠脫殼後再交配，之後還可能繼續護著牠。雌蟹把受精卵帶在腹下，直到幼生孵出；岸邊兩隻蟹疊在一起，有時正是一段繁殖照護的開始。",
brownshrimp:"褐蝦能迅速把自己埋進砂裡，只留下眼睛與觸角在表面。牠先拍動腹部附肢、扭動身體，再用觸角把砂掃過背上；這套藏身動作既能躲避掠食者，也讓牠等候靠近的小獵物。",
freshwaterjelly:"桃花水母在博登湖暖和的水灣偶爾現身，但透明的小傘只是牠生命中的一個階段。平時牠也能以微小的水螅體附著生活，水溫合適才長出游動的水母；看不見水母時，水中仍可能留著牠。",
moonjelly:"海月水母透明傘面裡的四個環狀構造是生殖腺，並不是四個胃。牠的一生還會經過附著在底部的水螅體階段，再釋出小小的碟狀幼體；海中漂動的圓傘，來自另一種幾乎看不見的生活模樣。",
rhizostome:"根口水母傘下有八條粗厚、帶皺褶的口腕，傘緣卻沒有細長觸手。牠有時在海灣聚集，口腕間還可能伴著小魚；這個緩慢漂動的身體，本身也能成為其他海洋動物暫時停留的空間。",
compassjelly:"羅盤水母的傘面有一圈向外放射的褐色紋路，像羅盤上的指向線。牠的長觸手帶有刺細胞，螫刺能造成明顯疼痛；辨識時可以看花紋，卻不適合伸手碰觸，即使漂在岸邊也要保持距離。",
arcticchar:"北極紅點鮭有到海中成長的族群，也有一生留在湖河中的族群，生活方式隨水域而異。洄游型回到淡水繁殖時很少進食，繁殖旅途中更會停食；牠鮮豔的婚姻色背後，是早已累積好的能量。",
grayling:"茴魚常躲在大石後方的凹處，或岸邊垂下植物形成的陰影裡，捕食昆蟲幼體與小型水生動物。到了繁殖時，牠需要水流適中、乾淨的淺礫石底；一條河裡，休息與產卵所需的位置並不相同。",
vendace:"歐白鮭常成群游在湖中開闊水層，以浮游甲殼類為食。秋冬產下的卵到了春季孵化，小魚能否遇上合適食物，會影響那一年的補充量；湖裡魚群的起伏，也牽動著微小浮游生物的節奏。",
commonwhitefish:"衰白鮭的生活史包含留在湖中的族群，也有在沿岸成長、進入河川繁殖的族群。牠會攝取甲殼類、貝類與大型昆蟲幼體等底棲獵物；同一學名下，不同水域的魚群仍可能走出不同的成長路線。",
smelt:"歐洲胡瓜魚身上帶著近似新切小黃瓜的氣味，連學名的屬名也與氣味有關。牠有留在湖中的族群，也有進河繁殖的洄游族群；細小魚卵黏附在底部，孵出的幼魚再隨水流移向成長水域。",
fourhorn:"四角床杜父魚雖以頭頂的骨質突起得名，淡水型卻可能沒有明顯的「四角」。繁殖時雄魚會守著底部的卵，並搧水照料到孵化；看名字想像外形，未必能認出每一處水域裡的牠。",
stickleback:"三刺魚的雄魚會收集植物纖維，在水底築巢，再用腎臟分泌的黏性物質固定。吸引雌魚進巢產卵後，牠還得留守、搧水照顧魚卵；這座小巢所需的材料，一部分來自水草，一部分則由父魚自己製造。",
signalcrayfish:"信號小龍蝦螯鉗關節附近的淡色斑塊，像一面小信號旗，名字由此而來。牠原生北美，移到歐洲後不僅會與原生螯蝦競爭，也能攜帶螯蝦瘟病原；一隻看來健康的蝦，仍可能把疾病帶往別的水域。",
commongoby:"普通細鰕虎會在水位降低或遇到掠食者時鑽入底質藏身，幼魚則能進入淡水河段覓食。牠把卵藏在石塊、貝殼或水草附近，由雄魚守護並搧水；小小的河口魚，也有需要看守的繁殖空間。",
sandgoby:"沙細鰕虎會利用空貝殼作產卵場所，雄魚引雌魚入內後，留守照看魚卵。孵出的小魚先在水中漂游，長到接近兩公分才逐漸轉為底棲；海底的一枚舊貝殼，能成為新生命出發的地方。",
dace:"歐洲雅羅魚在春季會往上游移動，雌魚前往淺水產卵地與雄魚會合。牠平時能利用河川與部分半鹹水環境，繁殖卻需要另一段路程；沿河相連的水域，讓魚群能在季節改變時找到合適的位置。",
chub:"圓腹雅羅魚的餐單會隨成長擴大，幼魚攝取水生小動物，也吃植物與種子，大魚則能捕食小魚和蛙類。牠常被看作河中的雜食魚，實際上同一條河裡，大小不同的個體可能正尋找截然不同的食物。",
thinlipmullet:"薄唇鮻會成群進入河口與河川下游，覓食藻類、碎屑和小型動物，繁殖時則回到近岸海域。牠的卵漂在海水裡，幼魚再進入沿岸育幼環境；這段往返的生活史，連起淡水與海洋，牠目前已被列為近危。",
sprat:"黍鯡常成群在近岸覓食，夜間往表層移動，以浮游甲殼類為生。牠的魚卵漂在水中，幼魚再逐漸往岸邊分散；市場上叫作「brislings」的小罐頭魚，常用的正是這種鯡科小魚。",
wels:"歐鯰的雄魚會整理水草、樹根附近的產卵地，守著黏附在巢中的卵，直到小魚孵出。成魚是夜間活動的掠食者，繁殖季卻會留在小小的巢區照顧下一代；魚肉有食用利用，魚卵則不可食用。",
bleak:"歐白魚銀亮的鱗片，過去曾被用來製作人造珍珠的珠光塗料。牠在水面附近成群活動，取食浮游動物與掉落水中的昆蟲；湖河裡常見的小銀魚，也曾把身上的光澤帶進人們的飾品裡。",
silverbream:"粗鱗鯿平時常成群在緩流與湖泊底部覓食，繁殖時卻會以抖動和拍水等動作求偶，把黏性魚卵留在植物上。牠多在夜間活動，安靜的白天水面之下，仍藏著另一套隨時段變化的生活節奏。",
ruffe:"梅花鱸頭部的感覺管道很發達，能藉側線察覺獵物方向，即使夜裡也能尋找食物。牠和河鱸可生活在同一座深湖，卻常利用更深的水層；兩種外形相近的魚，並不總在同一處覓食。",
gudgeon:"鮈嘴邊的一對短鬚能幫牠在砂礫間尋找小型獵物。十九世紀的泰晤士河，釣這種小魚曾是伴著野餐的休閒活動；如今看來不起眼的底棲魚，也曾在河岸遊樂與飲食文化裡占有一席之地。",
atlanticcod:"大西洋鱈的幼魚會利用海草、礫石與大石塊形成的複雜環境，躲避掠食者。長大後牠也可能捕食幼鱈；同一物種既需要幼時的藏身空間，也可能成為下一代面對的獵食者。",
turbot:"大菱鮃剛孵出時，兩眼分居頭部兩側，身體也近乎左右對稱。隨著變態成長，右眼逐漸移到左側，才成為伏在海底的扁魚；今天看來理所當然的外形，是幼魚發育時慢慢改造出來的。",
eelpout:"綿鳚會直接生出已發育的小魚，雌魚在體內照顧牠們數月，生下時小魚已有數公分長。牠的學名也帶有「賦予生命」的意思；在許多沿岸魚把卵留在水裡時，牠把早期發育留在母體中完成。",
spinycheekcrayfish:"利莫斯螯蝦原生北美，能在含氧較低、水質較差的環境生存，進入歐洲後主要擴散於大河與湖泊。牠還能攜帶螯蝦瘟病原，對原生螯蝦構成威脅；腹部一節節的深色橫帶，是辨認牠的重要線索。",
ninespine:"八棘多刺魚的雄魚會用植物碎片築巢，並以自身分泌物黏合。若巢在孵卵前散掉，牠還可能另築新巢，把卵搬過去；小魚孵出後，父魚也會把游離的小魚含起，再送回育幼的位置。",
sandsmelt:"沙真銀漢魚的卵表帶有許多細絲，可以纏附在藻類等物體上。英國沿岸的研究記錄牠把卵產在絲狀藻上，幼魚孵出後仍在近岸成群活動；水中的藻叢，既是產卵處，也是這段生命史的起點。",
australianbream:"澳洲棘鯛在河口附近產下漂浮的卵，幼魚孵化後進入河口成長，尤其喜歡淺水海草床。部分個體會在繁殖後由雄魚轉為雌魚；牠的一生除了往返不同水域，還可能經歷生殖角色的改變。",
sandwhiting:"纖沙鮻會把尖錐形的吻伸進砂泥，尋找藏在底下的小蝦、蠕蟲與貝類。遇到危險時，牠也能鑽入鬆軟的砂中躲藏；同一片沙底，既是牠搜尋食物的地方，也提供了暫時避開掠食者的空間。",
trumpeterwhiting:"斑沙鮻幼魚的食物，藏在看似空無一物的泥裡。昆士蘭的一項實驗發現，只有幾公分長的小魚能吃下許多線蟲與橈足類，還會挑選其中某些種類；紅樹林附近的泥底，能供應這些幼魚成長所需的微小獵物。",
duskyflathead:"寬頭牛尾魚常把身體藏進砂裡，靜止等待小魚與甲殼類靠近，再突然出擊。牠頭部兩側還有尖銳的前鰓蓋棘；扁平的頭看來貼地不起眼，拿取時卻不能忽略這些容易造成刺傷的硬棘。",
luderick:"三尖魢的名字藏在牙齒裡：每枚扁平牙齒的頂端分成三尖，學名也指向這個特徵。牠主要攝食海草、絲狀藻與碎屑，澳洲釣客甚至以綠色絲狀藻作餌；一口細牙，連起了牠的命名與河口食性。",
snubnosegarfish:"克氏圓吻星鱵的食性會隨成長轉變。昆士蘭東南部的研究發現，幼魚先攝取動物性食物，長大後改以絲狀藻為主；看見牠在水面附近成群活動時，大小不同的個體，可能正在利用不同的食物。",
tailor:"扁鰺在澳洲被叫作「tailor」，也就是裁縫，名字來自牠能割破漁網的銳利牙齒。牠常成群追逐鯡魚、鯔魚等小魚，追獵時還會躍出水面；沿岸突然翻起的魚群，有時就是這位「裁縫」經過的痕跡。",
australasiansnapper:"金鯛長大後，額頭可能隆起明顯的鼓包，雌雄都會出現，當地因而有「老頭鯛」一類的稱呼。牠能活過四十歲，許多大型個體已有二十多歲；一尾額頭高起的老魚，可能已在沿岸生活了很長一段時間。",
commonsilverbiddy:"半帶鑽嘴魚的嘴能大幅伸出，幫助牠從砂泥底找出多毛類與其他小動物。牠常成群活動，幼魚還會出現在河川較上游的潮汐段；銀色小魚低頭覓食時，才容易看見這張能伸縮的嘴如何工作。",
bluecatfishau:"格氏新海鯰的種名紀念瑞士昆蟲學家格雷費，他曾整理來自南太平洋的自然史收藏。牠的背鰭與胸鰭硬棘帶有毒性，能造成疼痛的傷口；嘴邊長鬚看來柔軟，身上的硬棘卻需要留意。",
southernherring:"卡氏似青鱗魚的種名紀念十九世紀研究澳洲魚類的法國博物學家卡斯特爾諾。牠會成密集魚群沿東岸移動，夏秋進入河口上段繁殖；這種常被拿來作釣餌的小魚，也在海岸與河口間完成自己的季節旅程。",
hardyhead:"澳洲美銀漢魚的學名來自印尼的衛吉島，但研究者懷疑原始標本的採集地記錄有誤，標本可能其實來自澳洲。這種在淺灣與河口成群的小魚，連名字裡的地理線索，也藏著一段自然史收藏的疑問。",
estuaryglassfish:"瑪麗雙邊魚的種名源自昆士蘭的瑪麗河，最初的描述標本就來自該河蒂亞羅附近。牠常聚在紅樹林樹根、沉木與水草之間；透明的小身體藏在枝根陰影裡，名字則留下了最早被記錄的河川線索。",
slenderemperor:"絲棘龍占魚具有先雌後雄的性別轉換方式，澳洲族群裡，雌魚通常比雄魚小而且數量較多。牠在海草床、砂底與紅樹林附近捕食小魚和甲殼類；成長帶來的變化，也會延伸到繁殖角色。",
giantmudcrab:"鋸緣青蟳會住在紅樹林樹根間的短洞裡，捕食牡蠣、螺與其他蟹，連同類也可能成為獵物。雌蟹把受精卵帶在腹下孵育，幼生出殼後才進入水層；成蟹躲藏的泥岸，與幼生漂游的水面，構成不同的生活階段。",
aublueswimmer:"武裝梭子蟹最後一對腳扁得像槳，能划水游動。牠曾和遠海梭子蟹共用一個學名，後來研究結合外形、遺傳與分布資料，把這群藍色游泳蟹重新分為不同物種；澳洲這一種，也因此有了更清楚的身分。",
greasybackprawn:"綠尾新對蝦雖然個子小，繁殖季卻相當長。莫頓灣九處樣點的研究發現，牠每年可在七至八個月間持續產卵，盛期落在夏末秋初；不同年份的產卵節奏仍有差異，並非每一年都照同一張月曆進行。",
browntigerprawn:"虎紋對蝦在莫頓灣的繁殖，比綠尾新對蝦更集中。當地研究記錄到明顯的春季產卵高峰，之後仍可延續至初秋；同住一座海灣的兩種蝦，延續下一代的時機與節奏，卻各有不同。",
easternkingprawn:"澳洲對蝦的後期幼生會隨漲潮進入莫頓灣，在海草床或較裸露的底部成長。牠們只在灣內停留數週，便逐漸移向外海，繼續成長與繁殖；海灣提供的是生命早期的一站，而不是一生固定的住處。",
southerncalamari:"南方擬烏賊會把卵包在白色、像手指的長條卵囊裡，再把卵囊固定在海草與大型藻類上。繁殖群聚時，許多卵囊能累積成一大片卵團；沿岸看似普通的一叢海草，可能正承載著許多魷魚的下一代。",
omena:"新耙波拉魚在維多利亞湖以微小的浮游動物為食，自己又成為鳥類與多種鯰魚的獵物。牠在湖中產下漂浮的卵，幼魚先利用淺岸成長，再移向離岸水域；小小的銀色魚群，把湖中細微的食物接向更大的動物。",
sadlerrobber:"薩氏鮭脂鯉的雌雄，可以從臀鰭輪廓看出差異：雌魚邊緣平直或略凹，雄魚則明顯向外凸出，鰭條也較粗。牠在水草邊尋食，連水面上的搖蚊蛹也會攝取；觀察這種小魚，鰭形與餐單都值得細看。",
marbledsqueaker:"阿氏歧鬚鮠的大理石紋變化很大，有些個體甚至幾乎全身褐色，並非每尾都有醒目的雲紋。牠在湖岸淺水與河川中尋找昆蟲幼蟲、螺貝類；辨認時除了看花紋，也得留意分枝的鬚與其他身體特徵。",
victoriasqueaker:"維多利亞歧鬚鮠吃螺時，能取出殼裡的軟肉，卻不必先把螺殼壓碎。牠也吃搖蚊幼蟲，偶爾攝取小魚等食物；同樣在湖底找吃的，這種鯰魚靠的是另一種處理帶殼獵物的本領。",
silvercatfish:"銀鍚伯鯰平時在湖泊與大河的開闊水域活動，雨季卻會成群進入河流，在洪水形成的水塘繁殖。魚卵產下後沒有親魚看守；牠把下一代留給季節性的淺水空間，繁殖節奏也隨水位漲落改變。",
victoriatilapia:"雜色口孵非鯽的雄魚會在砂底整理複雜的求偶場，中央淺盆外圍繞著一圈小坑。雌魚產卵後把卵拾入口中孵育；這種曾是維多利亞湖重要漁獲的原生魚，如今已在許多地方衰退，國際自然保護聯盟列為近危。",
redfinbarb:"肋線魮會利用雨季才出現的溪流繁殖，全年也可能產卵，雨季初期尤其活躍。這種只有幾公分長的小魚，平時藏在睡蓮、紙莎草附近與溪流中；季節性水道接上水源時，也為牠打開新的繁殖空間。",
ningu:"維多利亞野鯪在雨季開始時成群上溯，趁河水漫過岸邊草地，把卵產在洪水形成的淺水環境。牠平時刮食石頭與水草表面的藻類，繁殖卻需要通往河川的路；湖泊、支流與氾濫草地共同構成牠的生活範圍。",
victoriastonebasher:"維氏異吻象鼻魚會釋出微弱電訊號，再接收周圍造成的變化來感知環境。研究發現，即使氧氣極少，牠仍可能降低部分代謝活動，維持放電節奏；在不易看清的水中，這套感覺方式對牠十分重要。",
darkstonebasher:"黑矮長頜魚住在紙莎草等植物邊的淺水泥底，繁殖時會往河川上游移動，利用暫時性的水塘與溪流產卵。牠全年都能繁殖，雨季更加活躍；對這種小象鼻魚而言，短暫出現的水域也有延續生命的用途。",
nileperch:"尼羅尖吻鱸被引入維多利亞湖，原本寄望把大量小型慈鯛轉成更有市場價值的漁獲。後來牠成為主要商業魚，許多原生魚卻隨之銳減；這段歷史留下的，不只是大型漁獲，也是一整座湖食物網的改變。",
kannume:"卡氏長頜魚的繁殖時節，從不同地方採樣會得到不同的圖像。維多利亞湖一項全年研究發現，產卵地出現成熟魚的時間比覓食地長，研究者推測是不同魚群先後到來；同一座湖的魚，也未必同步繁殖。",
sharptoothcatfish:"尖齒鬍鯰的卵具有黏性，會附在產卵處的物體上。肯亞西部的繁殖試驗發現，讓卵分散黏在碎石上，可減少聚成一大團的情形，孵出的小魚也會躲到石下；卵的黏性，同時影響養殖與幼魚最初的藏身處。",
marbledlungfish:"埃塞俄比非洲肺魚的雄魚會挖掘、清理繁殖洞穴，讓雌魚進來產卵，之後留下守護卵與幼魚。牠不只驅趕闖入者，也持續攪動巢中水流；人們熟悉牠乾季結繭的本領，雨季的育幼工作同樣值得留意。",
bagrus:"多克瑪鱨曾是維多利亞湖的傳統漁獲，尼羅尖吻鱸增加後，牠的捕獲量大幅下滑。研究認為，被捕食與爭食相同的小型慈鯛都可能有影響，後來淺水又有恢復紀錄；原生掠食魚，也會受到新掠食者牽動。",
alluaudhaplo:"奧氏溪麗鯛喉部的齒骨，會隨食物硬度改變發育方式。研究發現，吃硬殼螺的個體形成較粗壯的咽頜與臼狀牙齒，吃軟食者則較纖細；牠處理食物的工具，能在成長中回應實際吃到的東西。",
laparogramma:"腹紋樸麗魚在姆萬扎灣的研究樣線上，曾和多種小慈鯛一起幾乎消失，直到一九九〇年代才逐漸回升，後來部分樣點甚至比早期更常捕到牠。牠平時生活在離岸泥底水域，繁殖期會游到較淺的灣內。",
xenognathus:"異頜樸麗魚的胃裡曾發現螺的軟肉，研究者依據胃內容與牙齒形態，認為牠可能先把肉從殼中取出。牠也吃搖蚊與蜉蝣幼蟲；奇特的牙齒與頜形，讓研究者能從小小的胃內容追索覓食方式。",
plagiodon:"緣牙樸麗魚的學名意為「斜齒」，外排牙齒粗壯，尖端斜切。早期兩尾標本的腸中曾找到昆蟲幼蟲與許多細砂；這種維多利亞湖特有的小慈鯛生活在開闊砂岸的淺水，目前被列為易危。",
victorianus:"維多利亞湖樸麗魚曾以極小的魚苗為食，卻在湖泊劇變後失去蹤影。國際自然保護聯盟列牠為極危、可能已滅絕，評估記錄的最後發現年份是一九八五年；這尾稀有魚保留的，是一段尚未確認結局的自然史。",
dwarfmouthbrooder:"多色褶唇麗魚的雌魚把卵含在嘴裡，孵育期間暫停從外界攝食。研究發現，育幼還會提高母魚的代謝需求；嘴巴成為下一代的保護空間時，母魚也得承受少吃食物、同時付出更多能量的代價。",
niloticacaridina:"尼羅米蝦在維多利亞湖離岸水域，多半生活在水層中，夜裡會上移到接近水面的地方。兩年的晝夜採樣顯示，牠並非總貼著湖底；透明小蝦每天上下移動，也讓追逐牠的魚面對隨時段改變的食物分布。",
walleye:"大眼梭鱸的眼睛會反光，清晨與傍晚是牠積極覓食的時候。牠是鱸科中體型最大的成員，嘴裡有發達犬齒，會吞食河黃鱸、太陽魚等小魚，春季則到湖中或支流的岩礁淺灘產卵。",
yellowperch:"河黃鱸春天會把卵產成帶膠質的長串，掛在淺水區的水草、樹根與倒木上。這種身帶深色橫帶的魚常成群靠岸覓食，冬天在冰下仍會活動，同時也是大眼梭鱸與白斑狗魚的獵物。",
smallmouthbass:"小口黑鱸常在岩石與礫石底附近活動，青銅色的臉頰與沒有越過眼後的嘴角，是辨認牠的線索。春天牠會移到淺水繁殖，繁殖後再往較深處活動，是北美受到釣客喜愛的遊釣魚。",
whitebass:"白鱸繁殖時不築巢，魚群會游向有水流的產卵區，卵沉下後黏在石頭上。成魚常結群在接近水面的地方追食小魚與昆蟲，銀亮身側拉著多條深色縱線，學名的種名則有「金眼」之意。",
whiteperch:"美洲狼鱸原本生活在北美大西洋沿岸，約在一九五〇年前後經運河進入五大湖。牠與白鱸是近親，銀灰色身側卻沒有同樣清楚的縱線；在數量增加的水域，可能對原有的近緣魚類造成影響。",
freshwaterdrum:"淡水石首魚的耳石在伊利湖岸被稱為「幸運石」，有人會沿著沙灘尋找收藏。牠也能用與魚鰾相連的肌肉發出低沉聲響，這種聲音可能與繁殖有關；銀灰色的背部隆起，輪廓像一座緩坡。",
emeraldshiner:"翡翠美洲鱥背上泛著綠色光澤，銀白側帶沿著細長身體延伸。牠常在河川中上層結成大群，攝食水面上的水生與陸生昆蟲；這些小魚本身也成為大魚的食物，把水面的食物帶入魚群之中。",
spottailshiner:"斑尾美洲鱥尾根的大黑點，是銀亮魚群中醒目的標記。牠會和其他小魚一起在中層結群，偏好沙、礫石與碎石底，食物包括藻類、昆蟲及甲殼類；繁殖期的雄魚頭部與胸鰭還會長出小突起。",
goldenshiner:"金體美鯿魚腹部有一道肉質稜脊，身側則會閃出銀色到金黃色的光。牠偏好水流平緩、水草茂密的池湖與河灣，植物和小型無脊椎動物都吃；到了繁殖期，雄魚的尾鰭常轉為橙紅色。",
americangizzardshad:"美洲真鰶背鰭最後一根鰭條拖成長絲，腹部排列著有稜角的鱗片。牠主要以濾食取得浮游生物、藻類與有機碎屑，也會在底部覓食；大量小魚成為掠食魚的食物，是湖庫食物網的一環。",
pumpkinseed:"駝背太陽魚臉上有從嘴邊放射的藍綠細線，鰓蓋黑色突片的末端還點著紅斑。牠喜歡躲在水草、沉木與碼頭旁，除了小型動物，也會吞食小魚，有時甚至吃掉同種幼魚。",
rockbass:"岩鈍鱸能迅速改變體色，讓自己更接近周圍環境的顏色。牠有紅色眼睛，臀鰭的六枚硬棘也能幫助辨識；小魚、昆蟲和螯蝦都是獵物，偶爾還會游到水面取食，甚至吞下同種幼魚。",
brownbullhead:"雲斑鮰常在夜間貼著水底找食物，植物、昆蟲、軟體動物與小魚都可能吃。牠喜歡水草多、底質柔軟的淺水區，嘴邊長著觸鬚；背鰭與胸鰭都有尖硬的棘，拿取時可能刺傷人。",
whitecrappie:"白刺蓋太陽魚身側的暗紋常排成數道橫帶，與黑斑刺蓋太陽魚散亂的斑點不同，背鰭硬棘也通常只有六枚。牠常在沉木附近的開闊水層活動，以小魚為主食，也吃水生昆蟲與小型甲殼類。",
whitesucker:"康氏亞口魚常成群貼近水底活動，嘴長在頭部下方，厚唇表面布滿小突起。牠的綠褐色背部帶著金屬光澤，腹部較白，停在礫石底時不容易被看見；身上的鱗片則從頭部往尾端逐漸變大。",
bluntnoseminnow:"鈍吻胖頭鱥會把黏性的卵產在漂木、扁石等物體的底面，讓卵一團團附著在遮蔽物下。繁殖期雄魚的頭部變黑，並長出成排小突起；平時牠在清澈緩水的小河與湖泊活動，也常被用作餌魚。",
roundgoby:"黑口新鰕虎能感覺細微的水流變動，即使在黑暗中也能覓食。牠原產黑海、裏海一帶，已在五大湖建立族群，會吃貽貝、昆蟲、魚卵與小魚；腹鰭相連成吸盤，多數個體第一背鰭帶有黑斑。",
longnosegar:"骨雀鱔捕食時常像一段漂木般緩慢靠近，突然衝刺，用細長的上下頜橫夾住小魚，再調整方向吞下。堅硬菱形鱗片像盔甲覆住身體；牠的魚肉有食用利用，魚卵則有毒，不可食用。",
rustycrayfish:"羅洛斯鏽斑螯蝦甲殼兩側常帶鏽紅斑，大螯尖端有黑色環帶，但部分個體的鏽斑很淡。牠原產俄亥俄河流域，被帶到其他水域後會排擠原生螯蝦，並啃食大量水草，改變小魚躲藏與產卵的環境。",
blackcrappie:"黑斑刺蓋太陽魚的暗斑散落在銀色身體上，背鰭通常有七至八枚硬棘，與帶橫向暗紋的白刺蓋太陽魚不同。牠喜歡水草與沉木附近較清澈的水域，長大後會捕食小魚，也吃昆蟲和小型甲殼類。",
spottedgar:"眼斑雀鱔的頭頂、吻部與各鰭都灑著清楚圓斑，吻比骨雀鱔短而寬。牠偏好清澈、有水草的緩水，常伏著等待小魚靠近；身體披著堅硬菱形鱗片，魚卵有毒，不可拿來食用。",
altiparanae:"高身麗脂鯉會隨食物供應改變菜單，植物與昆蟲都吃，是上巴拉那水系的小型雜食魚。牠肩部有橢圓黑斑，尾柄黑斑一路延伸到尾鰭中央；除了供人食用，也有養殖作為活餌的利用。",
bonita:"博奈直線脂鯉銀亮的體側有一道深色長帶，尾鰭上下葉末端也鑲著暗邊。牠在近岸緩水活動，會吃昆蟲等無脊椎動物；拉普拉塔流域有些過去被叫作中間直線脂鯉的標本，後來才被辨認為這一種。",
insculpta:"蝕齒斯坦達脂鯉在水域中下層攝食有機碎屑，也把混在其中的藻類等微小生物一起吃進去。牠的銀色身側拉著一道暗帶，到了尾根變寬並延伸至尾鰭中央，帶黃色的魚鰭則襯出細長輪廓。",
nasutus:"大鼻裂齒脂鯉細長的銀黃身體前端伸出明顯的吻部，尾根則有一道通向尾鰭中央的黑斑。牠以草葉、根、植物碎片與藻類為主要食物，也會攝入少量小型動物，在伊泰普的聖赫勒拿沿岸曾被採得。",
friderici:"弗氏兔脂鯉也被叫作「三點鉛筆」，體側三枚黑點會隨著成長愈來愈清楚。牠常以身體略向前傾的姿勢緩慢移動，生活在南美洲淡水河川與水庫，植物、昆蟲和魚都可能成為牠的食物。",
obtusidens:"鈍吻兔脂鯉上下頜各有六枚門齒狀牙齒，植物、種子、昆蟲與小魚都吃。幼魚體側的三枚暗斑較明顯，長大後可能逐漸淡去；成魚偏好河川較深的水域，厚實的身體前端是一個短鈍的吻。",
lineatus:"條紋鯪脂鯉的厚唇排列著許多細小牙齒，靠攝食有機碎屑與附著生物取得營養。牠是會沿河洄游的南美洲魚類，既出現在流動的河川，也有伊泰普水庫漁獲紀錄，銀色身體配著較深的背部。",
lippincottianus:"密斑銀板魚高而側扁的身體像一枚銀色圓盤，上面散著深色斑點。牠的食物以植物、種子與浮游植物為主，也吃軟體動物和節肢動物；銀亮外觀使牠受到觀賞魚交易利用，在巴西也有居民食用的紀錄。",
spottedpimelodus:"斑油鯰的黃底身體排著深色斑點，嘴邊三對長鬚伸向四周。牠在河川與湖庫的中下層尋找昆蟲、甲殼類、魚和植物碎片，也有洄游習性；背鰭與胸鰭的硬棘是拿取時需要留意的部位。",
labrosus:"南美伊林油鯰的嘴略朝下，適合在水底找食物。伊泰普曾有研究檢查三百多尾的胃內容，發現水生昆蟲與雙殼貝是主要食物；牠銀色身側排列著深褐斑點，細長觸鬚則圍在嘴邊。",
galeatus:"盔喉鰭鯰能把岸上的食物帶入水中食物網：在聖赫勒拿的胃內容研究裡，掉進水中的陸生昆蟲是主要食物。牠身體粗短、下頜突出，褐色身上帶深紋，會利用洪氾地與湖庫近岸生活。",
granulosus:"顆粒翼陶樂鯰身側有一排帶棘骨板，粗壯身體像披著盔甲。牠的菜單會隨環境改變，伊泰普的研究曾記錄牠攝食雙殼貝、藻類與水生植物，口邊的長鬚則在河川與水庫底層探尋食物。",
oremaculatus:"山斑低眼鯰在開闊水層濾食枝角類、橈足類等浮游動物，是以微小獵物為生的鯰魚。牠沒有鱗片，眼睛小而長在頭部偏下的位置，臀鰭很長；伊泰普過去有些無齒低眼鯰紀錄，後來被修正為本種。",
squamosissimus:"巴西異鱗石首魚生活在淡水湖庫，銀藍色背部下方是一張帶細尖牙的斜口。牠會捕食魚與蝦，聖赫勒拿近岸的研究樣本尤其常吃十足類甲殼動物；伊泰普的支灣也是牠繁殖與幼魚成長的水域。",
acestrolacustris:"湖沼狼牙脂鯉細長的嘴裡長著尖牙，是在水層捕食小魚的獵手。牠的銀黃身側在肩部與尾根各有一枚明顯黑斑，魚鰭帶黃色；除了巴拉那水系，在聖弗朗西斯科水系也有分布，伊泰普近岸同樣曾採得牠。",
dorado:"大口小脂鯉成魚呈金黃色，體形結實、頭大口寬，是南美洲河川裡捕食魚類的大型掠食者。牠的生活史包含河川洄游，在巴拉那、巴拉圭與烏拉圭等水系都有分布，也是當地漁業與遊釣利用的魚。",
corruscans:"南美鴨嘴鯰在巴西被稱作 pintado，灰色身體散著深色圓點，寬扁頭部旁伸出長鬚。牠主要捕食魚類，也有河川洄游習性；瓜伊拉的地方菜會把魚塊放上陶瓦，配番茄、洋蔥與椰奶烤製。",
kelberi:"凱氏麗魚長大後由灰黃轉為金黃色，身側有三道深色橫帶，尾根還帶著一枚圓形眼斑。牠是捕食魚類的慈鯛，原產巴西托坎廷斯—阿拉瓜亞水系，後來被帶到其他水系，在伊泰普也有漁獲與監測紀錄。",
mesopotamicus:"細鱗肥脂鯉漲水時會進入淹水林地，吃落進水裡的果實、堅果與種子。牠高而側扁的身體覆著細鱗，口裡的臼齒狀牙齒能壓碎食物；雖然以植物性食物為主，也會攝食小型動物。",
marginatus:"多斑鋸脂鯉會咬食其他魚的肌肉與魚鰭，突出下頜裡藏著尖牙，腹緣也有鋸齒狀稜脊。牠原本分布在巴拉圭與下巴拉那水系，瓜伊拉瀑布屏障消失後進入上巴拉那，在伊泰普近岸也曾被採得。",
rhaphiodon:"亞馬遜河針牙脂鯉的嘴裡有一對發達犬齒，細長而側扁的身體在開闊水層追獵小魚。伊泰普的研究記錄牠常出現在水面下數公尺，也會靠岸覓食；幼魚的食物則還包括無脊椎動物。",
rhinelepis:"南美鱗甲鯰身上覆著深灰色骨板，頭部寬扁，嘴位在下方。牠在有水流、底質較硬的水域吸食細碎有機物，取食方式偏向吸入細屑；這種外觀粗硬的鯰魚，也有伊泰普水庫的漁獲紀錄。",
sorubim:"鏟吻油鯰突出的上頜像一把扁鏟，身側深色長帶從頭後一路通向尾部。牠的成魚會結群，偏向夜間覓食，主要吃魚與甲殼類；除了南美洲當地的食用利用，也因特殊外形進入觀賞魚交易。",
jenynsii:"詹氏甲鰨完全生活在淡水中，兩眼都在身體右側，左側貼著河底。牠常把橢圓扁平的身體半埋進沙泥，靠深褐色斑紋融入底色，等小魚游近再捕食；在伊泰普水庫也有這種淡水比目魚的紀錄。"
};
for(const f of species)if(speciesIntro[f.id])f.intro=speciesIntro[f.id];
const signatureIds=new Set(recipes.filter(r=>r.cuisine!=='basic').flatMap(r=>r.fishes));for(const f of species)f.signature=signatureIds.has(f.id);
// 圖鑑分布欄最終文字：2026-10-27核定的兩批分布欄精簡，於所有追加完成後依ID覆寫。
const distributionFinal={"qili":"臺灣北、中、南部均有紀錄；日月潭常稱其為奇力魚。","crucian":"歐亞大陸常見淡水魚；日月潭管理處將其列為湖泊型代表魚類。","carp":"廣泛養殖的淡水魚，亞洲、歐洲與南北美洲都有紀錄；霞浦湖與北浦的網箱養殖量為日本第一。","grass":"原分布於東亞大陸，後被引入多地養殖。","silver":"原分布於東亞大陸的大型水體，臺灣曾引入養殖。日本在利根川與霞浦湖水系繁殖，2023 年確認在流入霞浦湖的櫻川產卵。","culter":"東亞大陸多地有分布；太湖三白中的白魚就是翹嘴鮊。","jaguar":"原產中美洲，臺灣曾引入觀賞及養殖，野外已有外來族群。在塔爾湖是捕食原生魚的入侵種，可在當地繳交賞金。","blackporgy":"分布於西太平洋，臺灣各地海域均有紀錄；也是基隆市魚。","yellowfin":"分布於印度至西太平洋，臺灣北部、東北部與西部較常見。","terapon":"廣布印度至太平洋；臺灣沿岸與河口均有紀錄，基隆為常見地區之一。","bighead":"原分布於東亞大陸，臺灣引入養殖。","blackcarp":"東亞大陸淡水魚，臺灣曾引入養殖。","bream":"原產東亞大陸，臺灣曾引入養殖。","redfinculter":"原分布於東亞大陸，臺灣部分河川與湖庫有族群。","rabbitfish":"印度至西太平洋廣泛分布；也是七股潟湖與澎湖大倉灣海草床的優勢魚種。","mullet":"廣泛分布於溫暖海域，臺灣沿岸有族群；七股潟湖為台江國家公園所列優勢魚種。","topmouth":"東亞淡水魚，臺灣西部低海拔水域常見。","tilapia":"原產非洲，臺灣引入後野外族群廣布；水利署調查列為曾文水庫優勢種之一。","loach":"東亞廣布，臺灣低海拔水域常見。","amurcatfish":"東亞淡水魚，臺灣西部水域有分布。","giurinus":"東亞廣布，臺灣西部低海拔水域常見。","russellsnapper":"印度—西太平洋魚種；臺灣各地海域均有產，列於東北角常見魚類。","puffer":"西北太平洋魚種；臺灣南部、北部、西部及澎湖等海域有分布。","eel":"東亞洄游性魚類，野生族群已大幅減少。","niletilapia":"原產非洲，臺灣引入養殖後廣布野外，關渡自然公園列為外來入侵種；1950 年代引入維多利亞湖，現為湖區主要漁獲之一。","mangrovejack":"印度—西太平洋魚種；臺灣各地河口與紅樹林均有產，七股潟湖採得的個體包含幼魚與亞成魚。","scat":"印度—西太平洋魚種；臺灣、菲律賓與馬來西亞的河口及湖泊都有紀錄。","mono":"印度—西太平洋魚種；臺灣與澳洲的河口、沿岸都有紀錄。","swampeel":"東亞與東南亞淡水魚。","whitecrucian":"原產日本琵琶湖，日語名ゲンゴロウブナ，是釣魚用「平鮒」的原種；臺灣引入後野外可見。","greenbackmullet":"印度—西太平洋魚種，北至日本南部；臺灣除東部外各地海域均有，台江國家公園列為七股潟湖的優勢魚種。","sarba":"印度—西太平洋；臺灣西部、南部、北部及澎湖均有，澎湖縣政府長年放流黃錫鯛魚苗。","coioides":"印度—西太平洋，北至日本南部、南至澳洲；臺灣以西南部海域最多。","midas":"原產中美洲。","oyena":"印度至西太平洋有分布。","perch":"原生於歐洲至西伯利亞，也被引入多地；博登湖職業漁獲中長年僅次於白鮭。","pike":"環北極的淡水魚，歐亞大陸與北美都有分布。","browntrout":"原生於歐洲至西亞，也被引入世界多地。博登湖族群在 1980 年代初幾近滅絕，經保護、放流與拆除河道阻隔後回穩，產卵魚再度溯上萊茵河上游的原產卵場。降海型稱海鱒。","commonbream":"歐洲大部分水系至中亞鹹海流域；博登湖的漁獲統計將牠與其他鯉科小魚合併為「白魚類」。","herring":"北大西洋兩岸至波羅的海。格賴夫斯瓦爾德潟湖是西波羅的海春季產卵鯡魚的主要產卵場，魚卵附著在淺水水草上；暖冬使產卵逐年提早。","zander":"原生於裏海、波羅的海、黑海與鹹海流域及易北河，也被引入多地。","flounder":"東大西洋的沿岸與半淡鹹水，自白海到地中海與黑海。","garfish":"東大西洋與地中海。","channelcat":"原產北美；日本列為特定外來生物。霞浦湖的監測中，牠占漁獲重量的比例從 31.1% 升到 61.0%。","bluegill":"原產北美；日本列為特定外來生物。","dottedshad":"西北太平洋。香港吐露港的幼魚採樣中，數量排名第三。遊戲中的日本海鰶是不同的魚。","roach":"歐洲至西亞廣泛分布；博登湖的漁獲統計把牠歸入「白魚類」。","tench":"歐洲至西伯利亞。","burbot":"環北極的淡水魚。","rosybitterling":"東亞淡水魚。","nuchalponyfish":"西北太平洋；台江國家公園列為七股潟湖優勢魚之一。","tankgoby":"印度—太平洋；台江國家公園列為七股潟湖優勢魚之一。","milkfish":"印度—太平洋；台江國家公園稱牠在園區相當常見，是台江地區最具代表性的養殖魚。","redevil":"原產中美洲；日月潭監測中捕獲 800 尾，數量僅次於九間始麗魚。","nipponense":"東亞淡水與河口水域；霞浦湖的定置網調查中數量最多，湖區自古就有捕撈手長蝦的漁業。","europeanseabass":"東北大西洋自摩洛哥至挪威，以及地中海與黑海南部。阿卡雄灣的漁民在滿潮前後於水道與海草床放單層刺網捕捉，這種漁法叫「捕狼」（pêche au loup）；灣內捕到的多是幼魚。","thicklipmullet":"東大西洋自冰島、法羅群島與挪威南部至維德角，以及地中海與黑海。阿卡雄灣的鯔類在 1999～2000 年的上岸統計中是量最多的魚，粗唇龜鯔約在四月產卵。","europeaneel":"大西洋東岸自斯堪地那維亞至摩洛哥，以及波羅的海、地中海、黑海與相連的河川。成鰻遠赴西大西洋的馬尾藻海產卵，柳葉狀的幼生隨墨西哥灣流漂回歐洲，在大陸棚變態成透明的玻璃鰻再進入河口。2018 年 IUCN 評為極危；博登湖的族群靠放流維持，被視為避難水域。","smallscalegirella":"西太平洋有分布。","spottedknifejaw":"西太平洋有分布，包括韓國南部。","oliveflounder":"西北太平洋有分布。","blackscraper":"西北太平洋有分布。","johndory":"多處海域有分布。","japaneseanchovy":"西北太平洋有分布。","japanesehalfbeak":"西北太平洋有分布。","coilia":"中國東部、朝鮮半島及日本有明海。2018～2020 年的太湖調查中，是數量最多的魚。","largeicefish":"中國東部沿海至朝鮮半島。是太湖產量最高的銀魚之一，也曾被移殖到各地湖泊與水庫。","shortsnouticefish":"長江中下游的湖泊。2010 年代的研究中，是太湖銀魚裡比例最高的一種。","yellowcatfish":"東亞廣布。","intermediushalfbeak":"中國東部至朝鮮半島。2009～2010 年的太湖拖網調查中，是優勢的小型魚之一。","northernsnakehead":"原產東亞；已被帶到美國等地成為入侵種。","mantisshrimp":"西太平洋有分布，也是過去東京灣江戶前壽司常用的漁獲。","stickleback":"北半球溫帶與寒帶廣泛分布。博登湖的族群可能在二十世紀初隨觀賞魚引入，2013 年起成為上湖開闊水域數量最多的魚；格賴夫斯瓦爾德潟湖曾有一網捕到極高密度的魚群。","commongoby":"歐洲大西洋沿岸；倫敦動物學會在泰晤士河潮間帶的調查中數量最多。","sandgoby":"歐洲大西洋沿岸。","dace":"歐洲北部與中部河流；博登湖的阿爾根河口曾是牠的產卵場。","chub":"歐洲大部分河流；博登湖的族群密度中等，沒有商業利用。","thinlipmullet":"歐洲大西洋與地中海沿岸。","sprat":"歐洲東北大西洋、北海與波羅的海。","bananaprawn":"印度—西太平洋；馬當紅樹林的多年採樣記錄到大量幼蝦。","blackspotsergeant":"分布於印度至太平洋，臺灣沿岸與離島有紀錄。","sevenbarsergeant":"廣布印度至太平洋，臺灣南部、北部及部分離島有紀錄。","convictsurgeon":"分布於印度至太平洋，臺灣南部與多處沿岸、離島有紀錄。","orientalbutterfly":"分布於日本至臺灣一帶，臺灣各地礁岸有紀錄。","kleinbutterfly":"廣布印度至太平洋，臺灣礁岸有紀錄。","stareyeparrot":"廣布印度至太平洋，臺灣東部、南部及離島有紀錄。","japaneseparrot":"分布於太平洋，臺灣南部、西部與部分離島有紀錄。","christmaswrasse":"廣布印度至太平洋，臺灣礁岸有紀錄。","bleak":"庇里牛斯山與阿爾卑斯山以北的大部分歐洲，東至烏拉爾河。","silverbream":"歐洲至裏海、鹹海流域；博登湖的族群偏弱。","ruffe":"歐洲至西伯利亞。博登湖原本沒有這種魚，1987 年首次發現，此後一度大量擴散，近年數量下降。","gudgeon":"歐亞大陸溫帶淡水。","atlanticcod":"北大西洋與波羅的海；波羅的海的族群在三月前後於 20 公尺以深的海底產卵。格賴夫斯瓦爾德潟湖的歷史名錄將牠列為主要漁獲之一。","largemouthbass":"原產北美。1974 年在彥根外海首次確認，1983 年前後在琵琶湖大量繁殖，曾大量捕食鯽魚的幼魚。日本列為特定外來生物，滋賀縣禁止把釣到的大口黑鱸放回湖中，並在湖岸設置回收箱。","sandsmelt":"東北大西洋沿岸。","acestrolacustris":"巴拉那與聖弗朗西斯科等水系。","mudcarp":"原分布於東亞大陸，臺灣引入養殖。","marbledgoby":"原產東南亞，臺灣引入後部分水域有野外族群。","stripedsnakehead":"分布於亞洲熱帶地區，臺灣引入後有野外族群，曾文水庫調查列為外來魚種。","pachyhead":"臺灣特有種。","candidia":"臺灣特有種，日月潭管理處稱為「臺灣馬口魚」。","hypsibarbus":"原產湄公河流域，臺灣引入後部分水庫有野外族群。","spottedsnakehead":"分布於中國南部與臺灣。","pleco":"原產南美洲，觀賞魚逸出後在臺灣南部河川大量繁殖。","sergeant":"印度—太平洋廣布；臺灣各地海域及離島的岩礁海岸均有分布。","fourline":"印度—西太平洋魚種；臺灣西部、北部及南部的沿海與河口有分布，七股潟湖為優勢魚種。","twseabream":"臺灣特有種。","mudskipper":"東亞沿岸魚種。","chelon":"西北太平洋魚種；臺灣除東部外各地沿岸或河口均有。","walkingcatfish":"原產東南亞，臺灣引入養殖後逸出；關渡自然公園列為外來入侵種。","dwarfsnakehead":"分布於中國南部與臺灣。","longfingrouper":"印度—太平洋魚種；東北角和平島、八斗子潮間帶常見。","squirrelfish":"印度—西太平洋魚種；臺灣東北部、北部、南部及離島均有分布。","fusilier":"西太平洋魚種；臺灣各地海域及離島均有分布，是數量最多的常見種。","goatfish":"印度—太平洋魚種；臺灣各地海域包括基隆、澳底、宜蘭均有分布。","wrasse":"印度—太平洋魚種；臺灣東北部、北部及各離島均有分布。","largescalemullet":"印度—西太平洋魚種；臺灣各河川河口均有，台江國家公園列為七股潟湖的優勢魚種。","gizzardshad":"日本至南海，臺灣西部、南部、北部及澎湖均有；台江國家公園列為七股潟湖的優勢魚種。","splendens":"印度至西太平洋有分布。","yellowbarracuda":"印度至西太平洋有分布。","chinesefilefish":"分布於印度至西太平洋。","bigeyetrevally":"廣布印度—太平洋。","flagtail":"印度—太平洋。墾丁 2017 年垂釣調查記錄 267 尾，名列第四。","whipfinmojarra":"印度—西太平洋。","duckbillsleeper":"印度—西太平洋；台江國家公園列為七股潟湖的優勢魚之一。","tanakia":"臺灣特有種。","marbledeel":"印度—太平洋。","bigeyesnapper":"印度—西太平洋。","yellowstripescad":"印度—西太平洋。","monogrammonocle":"印度—西太平洋。遊戲已有的白頸赤尾冬是同屬近親。","seagrassparrot":"印度—西太平洋。","hasu":"日本琵琶湖、淀川水系與福井縣三方湖原有分布，也隨魚苗放流移入其他水域。","pearlspotchromis":"西北太平洋，見於韓國濟州、日本與臺灣。","blackfingudgeon":"東亞。","mandarinfish":"東亞，從黑龍江流域到珠江流域。","darksleeper":"長江中下游及淮河、錢塘江等水系。","whitebream":"中國東部至朝鮮半島與俄羅斯遠東。","mongolianculter":"東亞，從黑龍江流域到長江流域。","redstingray":"西太平洋魚種，從日本南部到東南亞海域均有分布。","linedcardinal":"印度至西太平洋有分布。","largerfinbitterling":"中國東部淡水水域等地；霞浦湖是外來種，國立環境研究所的定置網調查中數量最多的魚。","khankabitterling":"俄羅斯與中國的東亞淡水水域。","chinesebitterling":"中國淡水水系。","rivulargudgeon":"中國多個淡水水系。","yellowdwarfgoby":"中國長江及北方多個水系。","nitidcatfish":"中國東部水系有分布。","commonwhitefish":"北歐湖泊與波羅的海周邊。","smelt":"歐洲西北部的河口與湖泊。2006 年格賴夫斯瓦爾德潟湖的採樣中，曾在湖心淺灘捕到大群。","archerfish":"印度—西太平洋的紅樹林與河口。","baldglassy":"印度至西太平洋的河口魚。","orientalsillago":"印度至西太平洋魚種。","slendermojarra":"印度至西太平洋沿岸魚。","chameleongoby":"西太平洋沿岸魚。","turbot":"地中海與歐洲沿岸至北極圈，波羅的海大部分海域也有半鹹水族群。","ninespine":"北半球寒溫帶水域。","australianbream":"澳洲東岸。","sandwhiting":"澳洲東岸。","duskyflathead":"澳洲東岸。","luderick":"澳洲東南岸。","snubnosegarfish":"澳洲東岸。","australasiansnapper":"澳洲與紐西蘭沿岸。","commonsilverbiddy":"澳洲沿岸。","slenderemperor":"印度—西太平洋。","marbledlungfish":"東非與中非；維多利亞湖原生。乾季時能在泥中結繭休眠，等待雨季。","sharptoothcatfish":"廣布非洲，也被引入世界各地養殖；維多利亞湖原生。","marbledsqueaker":"維多利亞湖流域；在湖的淺水區取代維多利亞歧鬚鮠。","silvercatfish":"廣布非洲；是維多利亞湖中受尼羅尖吻鱸影響較小的鯰魚。","kannume":"尼羅河與維多利亞湖等東非水系。","ningu":"維多利亞湖流域特有。1950 年代曾占湖區漁獲一成，因溯河產卵時遭大量捕撈而銳減。","sadlerrobber":"東非維多利亞湖、基奧加湖與魯夸湖流域。","victoriastonebasher":"維多利亞湖與基奧加湖。","darkstonebasher":"維多利亞湖流域；全年繁殖，雨季溯河到暫時性水塘產卵。","insculpta":"上巴拉那河流域。","equulus":"分布於印度至西太平洋。","goldentankgoby":"熱帶印度至西太平洋。","lessoniana":"印度—西太平洋近岸。","chinensis":"印度—西太平洋。","signalcrayfish":"原產北美西部；1960 年代引入瑞典，最早放養於韋特恩湖，在英國也廣泛擴散。會傳播螯蝦瘟疫，列在歐盟入侵種管制名單。","sujiebi":"日本與朝鮮半島各地的河川與湖泊都很常見。琵琶湖的漁民春到秋季用蝦籠捕撈，冬季以小型拖網在北湖沖合捕撈；近年漁獲減少，滋賀縣持續調查原因。","giantmudcrab":"印度—西太平洋。","aublueswimmer":"澳洲沿岸。","asperulum":"中國大陸與臺灣等東亞地區。","heliceformosensis":"臺灣特有種，分布於沿海河口濕地。","threespotcrab":"印度—太平洋沿岸。","crucifixcrab":"印度—西太平洋。","girella":"西太平洋魚種，臺灣北部與東北部有分布。","ladyfish":"印度—西太平洋魚種。","tarpon":"印度—西太平洋魚種。","redseabream":"西北太平洋，由南海東北部至日本。","gourami":"原產東南亞，引入觀賞後在多地建立野外族群。","semifasciolatus":"臺灣、中國東南部及越南等地有分布。","glassfish":"分布於印度至西太平洋。","porcupine":"熱帶及亞熱帶海域廣泛分布。","yellowgoat":"分布於印度至太平洋。","silversillago":"印度—西太平洋沿岸魚類。","duskysleeper":"印度—太平洋。","olivegoby":"西北太平洋。","convict":"原產中美洲；日月潭 2016～2018 年的監測中捕獲 1,385 尾，占潭區漁獲一半以上。","jewelcichlid":"原產非洲。","kuhua":"臺灣與華南的原生魚。","chocolatehind":"印度—西太平洋；臺灣北部、東部、南部沿岸較常見。","gigi":"日本本州、四國與九州部分水系的淡水魚，部分地區族群減少。","blackseabream":"東大西洋自斯堪地那維亞至納米比亞北部，以及地中海與黑海。牠先成熟為雌魚，之後轉為雄魚，和金頭鯛正好相反。法文叫 griset 或 dorade grise（灰鯛）。","conger":"東大西洋自挪威、冰島至塞內加爾，以及地中海與黑海。一生只繁殖一次，五到十五歲才成熟；全長可達 3 公尺。","whiteseabream":"東大西洋自法國布列塔尼至直布羅陀與馬德拉群島，以及地中海與黑海西南部，向南至南非。法文叫 sar commun。","japaneseseabass":"西太平洋，日本至南海。東京都內灣的水生生物調查中是代表魚之一。日本隨成長換名，依序叫セイゴ、フッコ、スズキ，是有名的「出世魚」。","shirogisu":"西北太平洋，日本、朝鮮半島、中國與臺灣。常被誤認成多鱗沙鮻。","stoneflounder":"西北太平洋，庫頁島、千島群島以南至日本、朝鮮半島與中國黃渤海；石狩市的海水魚名錄列為石狩灣常見的魚。","marbledflounder":"西北太平洋，北海道南部至黃渤海與東海北部。模式標本採自日本橫濱。","silvercroaker":"西北太平洋，香港至黃海，東至日本紀伊半島。","sappa":"西太平洋，日本南部沿岸至臺灣一帶。","barredknifejaw":"日本、韓國與臺灣等太平洋海域有分布。","threadsailfilefish":"西太平洋有分布。","japanesejackmackerel":"西北太平洋有分布。","pacificcod":"北太平洋有分布，日本以北海道周邊較常見。","alaskapollock":"北太平洋寒冷海域有分布。","yellowcheek":"東亞從黑龍江到紅河流域皆有分布。","barbelchub":"中國東部各大水系有分布，屬江湖半洄游魚類。","spottedsteed":"東亞多處水系有分布。","xenocypris":"中國中、東部水系有分布。","miopsglassfish":"印度—西太平洋。","silvertherapon":"菲律賓特有的淡水魚。","barramundi":"印度—西太平洋。","fourfingerthreadfin":"印度—西太平洋。","kammalthryssa":"印度—西太平洋。","spottedseacatfish":"印度—西太平洋。","elongateilisha":"西太平洋至印度洋。","chacundashad":"印度—西太平洋。","whitesardine":"印度—西太平洋。","spottedsicklefish":"印度至西太平洋沿岸魚。","pickhandlebarracuda":"印度至西太平洋魚種。","alluaudhaplo":"東非維多利亞湖流域。1904 年發表時的模式標本就採自基蘇木所在的湖灣。後來也被引入東非多處水域控制螺類。","laparogramma":"維多利亞湖特有。坦尚尼亞姆萬扎灣的研究指出，本種從 1991 年起逐漸回升。","xenognathus":"維多利亞湖特有。","plagiodon":"維多利亞湖特有，國際自然保護聯盟評估為易危。","victorianus":"維多利亞湖特有。1904 年發表時的模式標本採自基蘇木所在的湖灣；目前查到的最後紀錄是 1985 年。國際自然保護聯盟評估為極危，可能已經滅絕。","dwarfmouthbrooder":"尼羅河水系到維多利亞湖、基奧加湖等東非湖泊。雌魚把卵含在口中孵化，是最早在水族箱中繁殖成功的慈鯛之一。","altiparanae":"上巴拉那河流域。","friderici":"南美洲魚種。","obtusidens":"南美洲拉普拉塔等水系。","lineatus":"巴拉那等南美水系。","lippincottianus":"原產南美洲北部多個水系。","spottedpimelodus":"拉普拉塔等水系。","labrosus":"巴拉那河流域。","galeatus":"南美洲多個水系。","granulosus":"南美洲多個水系。","dorado":"巴拉那、巴拉圭與烏拉圭等水系。","corruscans":"巴拉那與聖弗朗西斯科河流域。","kelberi":"原產巴西托坎廷斯—阿拉瓜亞水系，已被帶到其他水系。","mesopotamicus":"巴拉那—巴拉圭等水系。","rhaphiodon":"南美洲多個水系；中文名雖帶「亞馬遜河」，巴拉那河流域也有。","rhinelepis":"聖弗朗西斯科與上巴拉那水系。","sorubim":"安地斯山以東多個南美水系。","jenynsii":"巴拉那與烏拉圭水系。","shieldmullet":"印度—西太平洋。","sagorcatfish":"印度—西太平洋。","soldiercatfish":"印度—西太平洋。","donkeycroaker":"印度—西太平洋。","cornetfish":"分布於印度至太平洋；幼魚會利用海草床成長。","kaakan":"印度至西太平洋。","commonoctopus":"溫帶與熱帶海域環球分布。","shorecrab":"東大西洋自冰島、挪威、英國至茅利塔尼亞；已被帶到北美、南非與澳洲並建立族群。法文叫 crabe vert（綠蟹）。","brownshrimp":"東北大西洋與地中海。法文叫 crevette grise（灰蝦）。","moonjelly":"從赤道到極地的各大海域都有。德國北海與波羅的海最常見的水母，多在夏季到初秋出現，有些年份大群聚集。","nozakii":"印度—西太平洋，中國、日本、香港等地。香港水域最常見的水母，也是當地螫傷的主因。","upsidedownjelly":"印度—太平洋。","boxjelly":"印度—太平洋與中西大西洋。","spottedjelly":"印度—太平洋，也出現在西大西洋與地中海。","rhizostome":"東北大西洋，北緯 38～73 度。","compassjelly":"大西洋與地中海。","japaneseswimmingcrab":"西太平洋的日本、韓國與中國沿海等地有分布。","kurumaprawn":"印度—西太平洋的近岸海域。","gazamicrab":"西北太平洋沿岸。","orangemudcrab":"印度—西太平洋的紅樹林。","japonicum":"日本、琉球與臺灣等地。","arcuata":"東亞的河口與紅樹林泥灘。","giantpacificoctopus":"北太平洋沿岸。","neondamsel":"東印度洋至中西太平洋，北至日本南部；臺灣北部礁岸可見。","walleye":"北美洲，聖羅倫斯河—五大湖、北極海與密西西比河流域，北至加拿大西北地區。","yellowperch":"北美洲，大西洋沿岸、北極海、五大湖與密西西比河流域。","smallmouthbass":"原產北美洲聖羅倫斯河—五大湖、哈德遜灣與密西西比河流域，已被引入許多國家供遊釣。","whitebass":"北美洲，聖羅倫斯河—五大湖、哈德遜灣與密西西比河流域，南至德州與新墨西哥州。","freshwaterdrum":"北美洲至瓜地馬拉，從哈德遜灣與五大湖流域到墨西哥灣沿岸水系。","emeraldshiner":"北美洲，廣布加拿大，南至美國維吉尼亞州與德州。","americangizzardshad":"北美洲東部，從五大湖與密西西比河水系到墨西哥灣沿岸。","pumpkinseed":"原產北美洲東北部，從加拿大新伯倫瑞克到五大湖與密西西比河上游；已被引入多國。","brownbullhead":"原產北美洲東部的大西洋與墨西哥灣沿岸水系、五大湖及密西西比河流域；已被引入多國。","whitecrappie":"北美洲，五大湖、哈德遜灣與密西西比河流域，南至墨西哥灣沿岸。","whitesucker":"北美洲，加拿大大部分地區，南至美國北卡羅來納州與新墨西哥州。","spottailshiner":"北美洲，從加拿大聖羅倫斯河、五大湖到馬更些河流域，南至美國喬治亞州。","bluntnoseminnow":"北美洲，五大湖、哈德遜灣與密西西比河流域，以及大西洋沿岸水系。","longnosegar":"北美洲東部，從加拿大魁北克的聖羅倫斯河到美國德州與墨西哥的墨西哥灣沿岸水系。","blackcrappie":"北美洲；因廣泛引入，原生範圍難以確定，大致為五大湖、密西西比河流域與美國東南部沿岸水系。","spottedgar":"北美洲，從伊利湖與密西根湖南部經密西西比河流域到墨西哥灣沿岸。","rustycrayfish":"原產美國俄亥俄河流域；伊利湖族群屬原生或外來尚無定論。","bluecatfishau":"澳洲與新幾內亞南部。","trumpeterwhiting":"澳洲特有。","southernherring":"澳洲東部，昆士蘭至新南威爾斯。","hardyhead":"澳洲東西兩岸。","estuaryglassfish":"澳洲東部特有。","browntigerprawn":"澳洲特有的商業蝦種。","easternkingprawn":"澳洲沿海。","oremaculatus":"南美洲巴拉那河流域；早期文獻曾將牠誤認為無齒低眼鯰。","silversprat":"印度—太平洋，從紅海到薩摩亞，北至日本南部；澎湖俗稱丁香的主要魚種之一。"};
const plantDistributionFinal={"waterlettuce":"泛熱帶分布。","paddleweed":"印度－西太平洋廣布；臺灣見於西南沿海潟湖、恆春半島與澎湖，在香港是分布最廣的海草。","narrowseagrass":"印度－西太平洋廣布；恆春半島南灣有單一族群。","stonewort":"歐洲常見；博登湖輪藻群落是水鳥冬季的重要食物。","claspingpondweed":"北半球溫帶廣布。","milfoil":"原生於歐亞大陸與北非。","eelgrass":"北半球溫帶沿海廣布。法國阿卡雄灣的大葉藻場由 Ifremer 長期監測，面積比 1988 年減少約八成五；北海道石狩濱每年冬季有大量大葉藻漂上岸。","sagopondweed":"全球廣布。","hydrilla":"廣布亞洲、非洲與澳洲；琵琶湖南湖近年以黑藻等原生種為優勢。","maackpondweed":"東亞；琵琶湖南湖的優勢水草之一，日語名センニンモ。","yellowfloatingheart":"歐亞大陸溫帶；霞浦湖以莕菜（アサザ）為主進行湖岸植生復育，2014 年也是太湖分布第二廣的水生植物。","reed":"全球廣布；霞浦湖的蘆葦帶面積約剩 1972 年的一半。","malaypondweed":"東亞至東南亞。2014 年的太湖調查中，是分布面積最大的水生植物，從東部向西擴展。","foxnut":"東亞至南亞；蘇州一帶種植的芡實是當地「水八仙」之一。"};
for(const f of species)if(distributionFinal[f.id])f.distribution=distributionFinal[f.id];for(const p of plants)if(plantDistributionFinal[p.id])p.distribution=plantDistributionFinal[p.id];
// 圖鑑分布欄最終文字結束
const data={fish,animals,species,plants,regions,baits,recipes,restaurants,dishes,dinePrices,recipeTiers,cookingMethods,cuisines,upgrades,economy,world};if(typeof module!=='undefined')module.exports=data;else root.FishingData=data;
})(globalThis);
