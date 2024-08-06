document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    // List of student information

    let StudentsInfoList = [
    // place your data here
        { rollNo: "22471A0501", name: "ACHAIBHAR ARTHI", studentNo: "8790706892", parentNo: "9963403892" },
        { rollNo: "22471A0502", name: "ATMAKURI JAGADEESH", studentNo: "6305916338", parentNo: "9247892586" },
        { rollNo: "22471A0503", name: "BATTINENI ARUN KUMAR", studentNo: "8309563136", parentNo: "6305528332" },
        { rollNo: "22471A0504", name: "BIRAKA VELANGINI RANI", studentNo: "9966306773", parentNo: "9966773106" },
        { rollNo: "22471A0505", name: "BONTHA JOHN BABU", studentNo: "9705760889", parentNo: "9505081144" },
        { rollNo: "22471A0506", name: "CHALLA JASWANTH REDDY", studentNo: "7093826794", parentNo: "6305009381" },
        { rollNo: "22471A0507", name: "CHALLA ROHITH", studentNo: "7013449965", parentNo: "9603783182" },
        { rollNo: "22471A0508", name: "CHEPURI CHAITANYA VENKAT", studentNo: "8341456619", parentNo: "9247192616" },
        { rollNo: "22471A0509", name: "CHERUKURI THIRUMALA MALYADRI", studentNo: "8019696270", parentNo: "9618440903" },
        { rollNo: "22471A0510", name: "CHEVULA MOUNIKA", studentNo: "7659940439", parentNo: "9110305255" },
        { rollNo: "22471A0511", name: "CHEVURI CHANDU", studentNo: "7036475233", parentNo: "9908955289" },
        { rollNo: "22471A0512", name: "CHILAMKURI VIJAYA RANI", studentNo: "9177205349", parentNo: "7337272092" },
        { rollNo: "22471A0513", name: "CHIRUMALA CHARAN TEJA", studentNo: "7702400259", parentNo: "6301179070" },
        { rollNo: "22471A0514", name: "CHOWDARI RAMA KRISHNA", studentNo: "9704961576", parentNo: "9014178361" },
        { rollNo: "22471A0515", name: "DARLA DIVYA", studentNo: "7337591416", parentNo: "7993471359" },
        { rollNo: "22471A0516", name: "DESIREDDY CHARAN VENKATA SIVA NAGI REDDY", studentNo: "9949484946", parentNo: "9963405532" },
        { rollNo: "22471A0517", name: "DUGGI SAMPATH KUMAR", studentNo: "8374204134", parentNo: "9701051807" },
        { rollNo: "22471A0518", name: "GADDAM MEGHANA", studentNo: "9989275969", parentNo: "8179200896" },
        { rollNo: "22471A0519", name: "GADDAM RAGHU RAMI REDDY", studentNo: "8179454120", parentNo: "9666818443" },
        { rollNo: "22471A0520", name: "GADDIPATI KEERTHANA DIVYA", studentNo: "6305110857", parentNo: "9491703365" },
        { rollNo: "22471A0521", name: "GARIKAPATI REVANTH SAI", studentNo: "6309417492", parentNo: "9392914940" },
        { rollNo: "22471A0522", name: "GARIKAPUDI PRUDVIRAJ", studentNo: "7793996704", parentNo: "9390996704" },
        { rollNo: "22471A0523", name: "GOPU PAVANI", studentNo: "9908038370", parentNo: "9347751061" },
        { rollNo: "22471A0524", name: "GRANDHISILA DURGA VYSHNAVI", studentNo: "6305547288", parentNo: "7901089835" },
        { rollNo: "22471A0525", name: "GUNJI VENKATA GANESH", studentNo: "7569835661", parentNo: "9618178589" },
        { rollNo: "22471A0526", name: "KALLAM THIRUPATAMMA", studentNo: "9392898878", parentNo: "7981487368" },
        { rollNo: "22471A0527", name: "KARLAKUNTA ADITHYA", studentNo: "8522894889", parentNo: "9494963864" },
        { rollNo: "22471A0528", name: "KARTHIK MALLALA", studentNo: "9346442945", parentNo: "8099260482" },
        { rollNo: "22471A0529", name: "KATEKENI HEMANTHINI", studentNo: "7396056839", parentNo: "9182071755" },
        { rollNo: "22471A0530", name: "KHAJJAYAM ASRITHA", studentNo: "7569050063", parentNo: "7989326677" },
        { rollNo: "22471A0531", name: "KOMARAGIRI DURGAPRASAD", studentNo: "9392656243", parentNo: "8106986127" },
        { rollNo: "22471A0532", name: "KONDAVEETY VENUGOPALA SWAMY", studentNo: "9347957375", parentNo: "8985956853" },
        { rollNo: "22471A0533", name: "KOYYALAMUDI VENKATA RAMESH", studentNo: "9392704278", parentNo: "8019955586" },
        { rollNo: "22471A0535", name: "MALAPATI SRINU", studentNo: "7013391850", parentNo: "6302050430" },
        { rollNo: "22471A0536", name: "MERUGU GOWTHAM", studentNo: "7386891931", parentNo: "6300267041" },
        { rollNo: "22471A0537", name: "MITTA VENU", studentNo: "8143611398", parentNo: "7702632290" },
        { rollNo: "22471A0538", name: "MOGHAL BABAR", studentNo: "9705778355", parentNo: "9701302877" },
        { rollNo: "22471A0539", name: "MOHAMMAD SAKHIB SATULURI", studentNo: "9390601459", parentNo: "9985287819" },
        { rollNo: "22471A0540", name: "MUDAVATHU SIRISHA", studentNo: "9490468670", parentNo: "8688074273" },
        { rollNo: "22471A0541", name: "MUTYAM SRILAKSHMI", studentNo: "8341832980", parentNo: "9908421062" },
        { rollNo: "22471A0542", name: "NALABOLU BALA KRISHNA REDDY", studentNo: "9502693576", parentNo: "9182903207" },
        { rollNo: "22471A0543", name: "NELATURI VINAY", studentNo: "8374100038", parentNo: "6302233912" },
        { rollNo: "22471A0544", name: "PATIBANDLA PRASANTHI", studentNo: "7794055728", parentNo: "7729955728" },
        { rollNo: "22471A0545", name: "RAMISETTY ANJANEYA KUMAR", studentNo: "9059882471", parentNo: "9989159491" },
        { rollNo: "22471A0546", name: "SAGIREDDY UMA MAHESWARI", studentNo: "9392851833", parentNo: "9160743737" },
        { rollNo: "22471A0547", name: "SHAIK ABDUL NABI", studentNo: "9392735557", parentNo: "7659075684" },
        { rollNo: "22471A0548", name: "SHAIK DIYAMIRZA", studentNo: "", parentNo: "7702573928" },
        { rollNo: "22471A0549", name: "SHAIK ISMAIL", studentNo: "9701308696", parentNo: "9701353998" },
        { rollNo: "22471A0550", name: "SHAIK KAGAJI RABIA BASRI", studentNo: "9059779158", parentNo: "7396469158" },
        { rollNo: "22471A0551", name: "SHAIK MADEENA NOUSHIK", studentNo: "9392448068", parentNo: "7382896101" },
        { rollNo: "22471A0552", name: "SHAIK MOHAMMAD FAROOQ", studentNo: "9395126880", parentNo: "9704010782" },
        { rollNo: "22471A0553", name: "SHAIK MOHAMMAD KHALEEL", studentNo: "6303191369", parentNo: "6303191369" },
        { rollNo: "22471A0554", name: "SHAIK PEER MOHAMMAD SHAAHID", studentNo: "9392302382", parentNo: "9966604334" },
        { rollNo: "22471A0555", name: "LATIKA CHARAN MANI", studentNo: "9391243446", parentNo: "8309379198" },
        { rollNo: "22471A0557", name: "SURYA PRASAD BANGARU", studentNo: "9441257930", parentNo: "9000446361" },
        { rollNo: "22471A0558", name: "SYAVALA YASWANTH RAHUL", studentNo: "7013677395", parentNo: "9247556651" },
        { rollNo: "22471A0559", name: "SYED MATHEEN BABA", studentNo: "8328040290", parentNo: "9885615315" },
        { rollNo: "22471A0560", name: "THOKALA VAMSI", studentNo: "9182452101", parentNo: "9494906918" },
        { rollNo: "22471A0561", name: "THULLIBILLI NAGAIAH", studentNo: "709349718", parentNo: "7780236515" },
        { rollNo: "22471A0562", name: "THUPAKULA RAVITEJA", studentNo: "7396008966", parentNo: "9515948089" },
        { rollNo: "22471A0563", name: "UMA BHAVANI BHUKYA", studentNo: "8978101360", parentNo: "9381266565" },
        { rollNo: "22471A0564", name: "UTALAPALLI PAVITRA", studentNo: "6304775599", parentNo: "6659458449" },
        { rollNo: "22471A0565", name: "VINUKONDA JOSHI", studentNo: "7396008966", parentNo: "9515948089" },
        { rollNo: "22471A0566", name: "YANNAKULA SHIVA SAI", studentNo: "9515242243", parentNo: "9542905340" },
        { rollNo: "22471A0567", name: "YARAGANI HEMANTH RAJA", studentNo: "7981615275", parentNo: "9492473318" },
        { rollNo: "22471A0568", name: "YENDETI NANDINI", studentNo: "9908126738", parentNo: "9014385508" },
        { rollNo: "22471A0569", name: "YENUMALA MYTHRI", studentNo: "7794949089", parentNo: "9000349089" },
        { rollNo: "22471A0570", name: "YERRAGUNTA MAHESH KUMAR REDDY", studentNo: "9441006460", parentNo: "8688261485" },
        { rollNo: "22471A0571", name: "ADDANKI VARUN YADAV", studentNo: "", parentNo: "7013720819" },
        { rollNo: "22471A0572", name: "ANITHA AMBATI", studentNo: "8790263399", parentNo: "9063748467" },
        { rollNo: "22471A0573", name: "BADINA CHANDANA PRIYA", studentNo: "9440190432", parentNo: "9989949475" },
        { rollNo: "22471A0574", name: "BANDI SRI LAKSHMI", studentNo: "8328697556", parentNo: "7386657071" },
        { rollNo: "22471A0575", name: "BATHULA TIMOTHI", studentNo: "", parentNo: "6303273725" },
        { rollNo: "22471A0576", name: "BELLAMKONDA TARUN", studentNo: "9701827813", parentNo: "9701254126" },
        { rollNo: "22471A0577", name: "KODURI SOWJANYA", studentNo: "9949913408", parentNo: "9032003918" },
        { rollNo: "22471A0578", name: "BODDU PRABHAS", studentNo: "9985953049", parentNo: "9989347816" },
        { rollNo: "22471A0579", name: "BOKKISAM NAGA ANIL KUMAR", studentNo: "9849965404", parentNo: "7013800040" },
        { rollNo: "22471A0580", name: "CHAKKA SATWIKA JAHNAVI", studentNo: "9704831601", parentNo: "6303599226" },
        { rollNo: "22471A0581", name: "CHIKLI ASIFA SHAIK", studentNo: "9866871319", parentNo: "8639226770" },
        { rollNo: "22471A0582", name: "CHINNA REDDY SUDHEER REDDY", studentNo: "7396106382", parentNo: "9010513466" },
        { rollNo: "22471A0583", name: "CHINNAPAREDDY ANJALI REDDY", studentNo: "7331130189", parentNo: "9703456931" },
        { rollNo: "22471A0584", name: "CHINTHALANKA POOJITHA", studentNo: "6303217827", parentNo: "9505577071" },
        { rollNo: "22471A0585", name: "DERANGULA DURGA RAO", studentNo: "7993615361", parentNo: "7993615361" },
        { rollNo: "22471A0586", name: "DIDDI SANDHYA", studentNo: "", parentNo: "6281595311" },
        { rollNo: "22471A0587", name: "DOGIPARTHI DHANUSHA", studentNo: "9885766123", parentNo: "8074497100" },
        { rollNo: "22471A0588", name: "GALLA DEEPTHI", studentNo: "", parentNo: "9390158121" },
        { rollNo: "22471A0589", name: "GARIKIPATI RANJITH KUMAR", studentNo: "7569685280", parentNo: "9989006620" },
        { rollNo: "22471A0590", name: "GAYAM THRISONY", studentNo: "7396059729", parentNo: "6281971552" },
        { rollNo: "22471A0591", name: "GORRE JAYASRI", studentNo: "7207228746", parentNo: "8499858998" },
        { rollNo: "22471A0592", name: "GUNDA YASWANTH", studentNo: "7993942469", parentNo: "9390017531" },
        { rollNo: "22471A0593", name: "GUNDABATTINI BALAJI", studentNo: "7660817403", parentNo: "7660817403" },
        { rollNo: "22471A0594", name: "GUNTI SRINIVAS", studentNo: "", parentNo: "9030025419" },
        { rollNo: "22471A0595", name: "HARI LAKSHMI SAI MANIKANTA", studentNo: "9393996395", parentNo: "8977296395" },
        { rollNo: "22471A0596", name: "HEMALATHA MUCHUMARI", studentNo: "9502299200", parentNo: "9502259315" },
        { rollNo: "22471A0597", name: "KAKUMANU SRAVANI", studentNo: "", parentNo: "9290048974" },
        { rollNo: "22471A0598", name: "KAMBHAMPATI JOHN WESLY", studentNo: "9010012317", parentNo: "9949275152" },
        { rollNo: "22471A0599", name: "KANNEKANTI TEJA VARDHANA CHARI", studentNo: "7416950733", parentNo: "7416950733" },
        { rollNo: "22471A05A0", name: "KANUMURI NARENDRA", studentNo: "9948457599", parentNo: "9010656727" },
        { rollNo: "22471A05A1", name: "KAPPA JAHNAVI", studentNo: "9440748448", parentNo: "9390450911" },
        { rollNo: "22471A05A2", name: "KOLISETTY SRI VARSHA", studentNo: "", parentNo: "7674838134" },
        { rollNo: "22471A05A4", name: "KONDAVARJU RAMYA", studentNo: "6302306562", parentNo: "9502856186" },
        { rollNo: "22471A05A5", name: "KUPPALA PURNA CHANDRA RAO", studentNo: "7569105022", parentNo: "8978212200" },
        { rollNo: "22471A05A6", name: "KURIVELLA BALA VENKATA MANIKANTA", studentNo: "9390031567", parentNo: "8639593858" },
        { rollNo: "22471A05A7", name: "KURRA VAMSI KRISHNA", studentNo: "9849627938", parentNo: "9676955538" },
        { rollNo: "22471A05A8", name: "CHILAKA BALA MUNEENDRA", studentNo: "6301247096", parentNo: "9908435181" },
        { rollNo: "22471A05A9", name: "MUTHYALA KATHYAYANI", studentNo: "8522945933", parentNo: "6301245933" },
        { rollNo: "22471A05B0", name: "NAGASARAPU MOHANA SRI KRUPA", studentNo: "9704805618", parentNo: "8008445112" },
        { rollNo: "22471A05B1", name: "NALLAMEKALA VIGNESH", studentNo: "9963210401", parentNo: "8367533709" },
        { rollNo: "22471A05B2", name: "NIMMALA ASHOK", studentNo: "9398367339", parentNo: "9849789023" },
        { rollNo: "22471A05B3", name: "PALLOTHU VENKATA SAI KRISHNA", studentNo: "9963215057", parentNo: "9603361165" },
        { rollNo: "22471A05B4", name: "PARELLA AKHILA", studentNo: "9951492431", parentNo: "8096159580" },
        { rollNo: "22471A05B5", name: "PATALAM NAYEEM", studentNo: "9030403691", parentNo: "9381697915" },
        { rollNo: "22471A05B6", name: "PATAN HASHMI", studentNo: "9618093160", parentNo: "7013155358" },
        { rollNo: "22471A05B7", name: "PATHAN KARISHMA", studentNo: "9490180380", parentNo: "7386209269" },
        { rollNo: "22471A05B8", name: "PEDDIPAKA UDAY KIRAN", studentNo: "9346089594", parentNo: "9550305956" },
        { rollNo: "22471A05B9", name: "PENTYALA LAKSHMI PRASANNA", studentNo: "9010865146", parentNo: "9346679077" },
        { rollNo: "22471A05C0", name: "PINNEBOINA ANUSHA", studentNo: "8985968009", parentNo: "8520805318" },
        { rollNo: "22471A05C1", name: "POKALA APPAIAH", studentNo: "6302350535", parentNo: "6302350535" },
        { rollNo: "22471A05C2", name: "POLISETTY RISHITHA SAI SRI", studentNo: "9642124039", parentNo: "9666223841" },
        { rollNo: "22471A05C3", name: "PRAJAPATHI SATYANARAYANA", studentNo: "8106340769", parentNo: "9553460740" },
        { rollNo: "22471A05C4", name: "RAVI BHARGAVI", studentNo: "7780681400", parentNo: "9949275030" },
        { rollNo: "22471A05C5", name: "RAYALA LAKSHMI", studentNo: "8074151183", parentNo: "9948463665" },
        { rollNo: "22471A05C6", name: "SANAGALA HARISHINI", studentNo: "7386572277", parentNo: "6281546583" },
        { rollNo: "22471A05C7", name: "SHAIK AFREEN NEHA", studentNo: "9849614829", parentNo: "9849265401" },
        { rollNo: "22471A05C8", name: "SHAIK GANGARAM SUMIYA", studentNo: "", parentNo: "9640727408" },
        { rollNo: "22471A05C9", name: "SHAIK MANEPALLI MASTAN VALI", studentNo: "7995423851", parentNo: "7993578839" },
        { rollNo: "22471A05D0", name: "SHAIK MEERA JASMINE", studentNo: "9440939992", parentNo: "9493978134" },
        { rollNo: "22471A05D1", name: "SHAIK MOHAMMAD THAHEER", studentNo: "7997900939", parentNo: "8008446116" },
        { rollNo: "22471A05D2", name: "SHAIK MOTHAD AZHAR", studentNo: "9618479064", parentNo: "8247338935" },
        { rollNo: "22471A05D3", name: "SHAIK NAZEEMA", studentNo: "9885469435", parentNo: "9949067432" },
        { rollNo: "22471A05D4", name: "SHAIKTHETTU SHARIF", studentNo: "7675043201", parentNo: "9000954240" },
        { rollNo: "22471A05D5", name: "SIDDI VENKATESH", studentNo: "8919635933", parentNo: "9441691782" },
        { rollNo: "22471A05D6", name: "VALLURI BHAVANA", studentNo: "9381965746", parentNo: "9550229486" },
        { rollNo: "22471A05D7", name: "VATRAM BHAVANA", studentNo: "9381393119", parentNo: "9985799316" },
        { rollNo: "22471A05D8", name: "VINNAKOTA MANOJ KUMAR", studentNo: "93924737552", parentNo: "9963205096" },
        { rollNo: "22471A05D9", name: "YAMARTHY VENKATA KRISHNA", studentNo: "9390058850", parentNo: "7981604855" },
        { rollNo: "22471A05E0", name: "YELCHURI SIVA RAMA KRISHNA VINAY", studentNo: "7013781126", parentNo: "8790571049" },
        { rollNo: "22471A05E1", name: "ADHIKARI SATISH", studentNo: "7674846745", parentNo: "9866361227" },
        { rollNo: "22471A05E2", name: "ADI LAKSHMI THOGATI", studentNo: "9490598492", parentNo: "8897362386" },
        { rollNo: "22471A05E3", name: "ALAJANGI KEERTHI SREE", studentNo: "9885436155", parentNo: "8639958444" },
        { rollNo: "22471A05E4", name: "AMIREDDY NAVYA", studentNo: "9989866580", parentNo: "8519963801" },
        { rollNo: "22471A05E5", name: "ATTULURI PAVANA PRUDULA SRI", studentNo: "9346556274", parentNo: "9573293043" },
        { rollNo: "22471A05E6", name: "BADIGUNCHALA PUSHPA SIVALEELAVATHI", studentNo: "7680882158", parentNo: "7997135602" },
        { rollNo: "22471A05E7", name: "BHUMIREDDY SAILAJA", studentNo: "", parentNo: "9177969612" },
        { rollNo: "22471A05E8", name: "BORIGARLA VENKATAGOPI", studentNo: "9603872789", parentNo: "9603872789" },
        { rollNo: "22471A05E9", name: "CHATTI NAVYA", studentNo: "8523833569", parentNo: "8374033569" },
        { rollNo: "22471A05F0", name: "DASARI SRUJANASANKEERTHI", studentNo: "8019171033", parentNo: "7569079945" },
        { rollNo: "22471A05F1", name: "DHANUSH JASWANTH TEJA IKKURTHI", studentNo: "9182049259", parentNo: "9959109884" },
        { rollNo: "22471A05F2", name: "DOGIPARTHI VENKATA SAI GIRISH", studentNo: "8179936343", parentNo: "9908706343" },
        { rollNo: "22471A05F3", name: "DUDDU DIVYA", studentNo: "7995420787", parentNo: "9505520787" },
        { rollNo: "22471A05F4", name: "EERLAPATI LAKSHMAIAH", studentNo: "", parentNo: "9110567514" },
        { rollNo: "22471A05F5", name: "GAIRUBOINA NAVEEN KUMAR", studentNo: "9059109173", parentNo: "9908292054" },
        { rollNo: "22471A05F6", name: "GARIKAPATI AISHWARYA", studentNo: "9866627014", parentNo: "8328022600" },
        { rollNo: "22471A05F7", name: "GUGGILAM CHINMAYEE", studentNo: "9493188004", parentNo: "9440768153" },
        { rollNo: "22471A05F8", name: "JALUKURI GOPI", studentNo: "7207024328", parentNo: "8790899675" },
        { rollNo: "22471A05F9", name: "JONNALAGADDA MAHESH BABU", studentNo: "6304736234", parentNo: "7702297189" },
        { rollNo: "22471A05G0", name: "KADAPA GANDHI KUMARI", studentNo: "7036063879", parentNo: "7330653879" },
        { rollNo: "22471A05G1", name: "KATARI THANMAI", studentNo: "9963031059", parentNo: "7981705996" },
        { rollNo: "22471A05G2", name: "KAVERI KOLLI", studentNo: "7730854578", parentNo: "9949062370" },
        { rollNo: "22471A05G3", name: "KONDA PRATYUSHA", studentNo: "8309506077", parentNo: "9704685489" },
        { rollNo: "22471A05G5", name: "KOPPARAPU SIVA HEMANTH KUMAR", studentNo: "9701007035", parentNo: "9014804399" },
        { rollNo: "22471A05G6", name: "KSHATRIYA JAYA LAKSHMI", studentNo: "9014928958", parentNo: "6281843943" },
        { rollNo: "22471A05G7", name: "KURAPATI ANUSHA", studentNo: "7730983412", parentNo: "9502415592" },
        { rollNo: "22471A05G8", name: "LAKSHMI SIVA SAI TULLIBILLI", studentNo: "9618034413", parentNo: "7799635391" },
        { rollNo: "22471A05G9", name: "MAHAMKALI RAMADEVI", studentNo: "7671986957", parentNo: "8106313231" },
        { rollNo: "22471A05H0", name: "MAKKENA RAJESWARI", studentNo: "6303200409", parentNo: "9948429803" },
        { rollNo: "22471A05H1", name: "MALLELA JYOTHI", studentNo: "7288989080", parentNo: "9989798957" },
        { rollNo: "22471A05H2", name: "MALLELA MANIKANTA", studentNo: "8074724434", parentNo: "8501944637" },
        { rollNo: "22471A05H3", name: "MEDAM SIRISHA", studentNo: "7671092535", parentNo: "9381358928" },
        { rollNo: "22471A05H4", name: "MEESALA SIVAIAH", studentNo: "9640339223", parentNo: "9849384253" },
        { rollNo: "22471A05H5", name: "MOUNICA PULAGORLA", studentNo: "9347813886", parentNo: "7981903689" },
        { rollNo: "22471A05H6", name: "MUNDLAMURI VIJAYA KUMARACHARI", studentNo: "7288040426", parentNo: "9666609103" },
        { rollNo: "22471A05H7", name: "NAGARAM PRASAD RAO", studentNo: "9440481134", parentNo: "9885826635" },
        { rollNo: "22471A05H8", name: "NAKKA VIJAY BHASKAR REDDY", studentNo: "9347706001", parentNo: "9704688782" },
        { rollNo: "22471A05H9", name: "NALLAMOTHU VINAY", studentNo: "9885013668", parentNo: "9441196172" },
        { rollNo: "22471A05I0", name: "NAMBURI TEJA", studentNo: "9346235676", parentNo: "9618619225" },
        { rollNo: "22471A05I1", name: "PALLAPU HARISH", studentNo: "9492424686", parentNo: "9701491446" },
        { rollNo: "22471A05I2", name: "PALUTLA VENKATA NAVEEN", studentNo: "8247272418", parentNo: "9550850611" },
        { rollNo: "22471A05I3", name: "PANCHUMARTHI PRASANNA", studentNo: "9000504591", parentNo: "9491152895" },
        { rollNo: "22471A05I4", name: "PEKALA VEERA DHANUSH KUMAR", studentNo: "9063620258", parentNo: "8919304258" },
        { rollNo: "22471A05I5", name: "KUMBA CHANDRA SEKHAR", studentNo: "7093479860", parentNo: "7702097629" },
        { rollNo: "22471A05I6", name: "SANIKOMMU NIRUPAM REDDY", studentNo: "9014501104", parentNo: "9885774875" },
        { rollNo: "22471A05I7", name: "SATTENPALLI SADARANI", studentNo: "6303439306", parentNo: "9989877347" },
        { rollNo: "22471A05I8", name: "SEGGEM SRINIVAS", studentNo: "8106408872", parentNo: "9912164317" },
        { rollNo: "22471A05I9", name: "SHAIK APSA", studentNo: "8341945484", parentNo: "7093126568" },
        { rollNo: "22471A05J0", name: "SHAIK MOHAMMAD FAYAZ", studentNo: "9652543261", parentNo: "9908037989" },
        { rollNo: "22471A05J1", name: "SHAIK MYNAMPATI SAIDA VALI", studentNo: "9347204459", parentNo: "9550157580" },
        { rollNo: "22471A05J2", name: "SHAIK NAZEERA", studentNo: "6300376716", parentNo: "9703109824" },
        { rollNo: "22471A05J3", name: "SHAIK RASHEED", studentNo: "9494046505", parentNo: "9573428373" },
        { rollNo: "22471A05J4", name: "SHAIK SUMAYA", studentNo: "9885740169", parentNo: "7569487948" },
        { rollNo: "22471A05J5", name: "SIRISHA PAGADALA", studentNo: "7680030673", parentNo: "6300947586" },
        { rollNo: "22471A05J6", name: "SONTI VINEELA", studentNo: "9059607495", parentNo: "9441410533" },
        { rollNo: "22471A05J7", name: "SOUDAGAR MIN HAZ", studentNo: "9515119734", parentNo: "8019332910" },
        { rollNo: "22471A05J8", name: "SUNKARA HARINI", studentNo: "8688531506", parentNo: "9581126272" },
        { rollNo: "22471A05J9", name: "SURA VENKATA SIVA NAGA LAKSHMI", studentNo: "8317548851", parentNo: "9704342546" },
        { rollNo: "22471A05K0", name: "SYED SHAFIA ZAINAB", studentNo: "9704664638", parentNo: "7075867385" },
        { rollNo: "22471A05K1", name: "SYED TASNEEM BANU", studentNo: "9703579035", parentNo: "9110366712" },
        { rollNo: "22471A05K2", name: "THANNERU VENKATA SIVA", studentNo: "8247632390", parentNo: "6300298388" },
        { rollNo: "22471A05K3", name: "TIPPANAPOINA RAMESH", studentNo: "7993742185", parentNo: "9959658795" },
        { rollNo: "22471A05K4", name: "VALIVARTHI ABHINAYASRI", studentNo: "6304686376", parentNo: "8466934835" },
        { rollNo: "22471A05K5", name: "VATTIKUTI HEMANTH", studentNo: "6301436139", parentNo: "9010987798" },
        { rollNo: "22471A05K6", name: "VIPPARALA CHETAN", studentNo: "7989880790", parentNo: "9912261552" },
        { rollNo: "22471A05K7", name: "YADAVALLI KARTHIKA", studentNo: "7386423020", parentNo: "9573423020" },
        { rollNo: "22471A05K8", name: "YAGNAPRIYA PICHALA", studentNo: "7093980836", parentNo: "8106707695" },
        { rollNo: "22471A05K9", name: "YARRA JAKRAIAH KINNERA", studentNo: "9494468474", parentNo: "7997799896" },
        { rollNo: "22471A05L0", name: "YEPURI TEJA NAGA ANIL KUMAR", studentNo: "9381644372", parentNo: "7981214757" },
        { rollNo: "22471A05L1", name: "AMMISETTY CHAMUNDESWARI", studentNo: "9032149346", parentNo: "6305344159" },
        { rollNo: "22471A05L2", name: "APPALA CHANDANA PRIYA", studentNo: "", parentNo: "9398224260" },
        { rollNo: "22471A05L3", name: "ATMAKURI JASHWANTH", studentNo: "6305916338", parentNo: "9247892586" },
        { rollNo: "22471A05L4", name: "BANAVATHU VENKATA DURGA NAIK", studentNo: "8688380176", parentNo: "9000508918" },
        { rollNo: "22471A05L5", name: "BUDALA JAYABHARATHI", studentNo: "7893276356", parentNo: "9701201407" },
        { rollNo: "22471A05L6", name: "CHAKKA BHARADWAJ", studentNo: "7396705255", parentNo: "9849369414" },
        { rollNo: "22471A05L7", name: "CHENNUPALLI CHANDRIKA TIRUMALA", studentNo: "7013444177", parentNo: "8978621083" },
        { rollNo: "22471A05L8", name: "CHINTHIRALA JOHN WESLY", studentNo: "8019565315", parentNo: "9063695315" },
        { rollNo: "22471A05L9", name: "DOGIPARTHI GOPI VENKATA NAGA VISWANATH", studentNo: "7989706191", parentNo: "9951360344" },
        { rollNo: "22471A05M0", name: "DUDDU SATISH BABU", studentNo: "7680048961", parentNo: "7799518688" },
        { rollNo: "22471A05M1", name: "GALI LAKSHMI THIRUPATHAMMA", studentNo: "8520062639", parentNo: "9299303044" },
        { rollNo: "22471A05M2", name: "GARNEPUDI SAGARBABU", studentNo: "8186892691", parentNo: "8367779113" },
        { rollNo: "22471A05M3", name: "GUDISA RUFUS VIJAYANK", studentNo: "8019330300", parentNo: "9959437819" },
        { rollNo: "22471A05M4", name: "GUGGILLA KAVYA", studentNo: "9642936469", parentNo: "9642936469" },
        { rollNo: "22471A05M5", name: "GUJJARLAPUDI KEERTHANA LAZARUS", studentNo: "9491795024", parentNo: "9849091770" },
        { rollNo: "22471A05M6", name: "JADAM SURYA TEJA", studentNo: "6300054355", parentNo: "8019960123" },
        { rollNo: "22471A05M7", name: "KODAVATI JAYAMMMA", studentNo: "7993513463", parentNo: "7659929718" },
        { rollNo: "22471A05M8", name: "KOPPURAVURI V.S.N.S.S.ASHOK KUMAR", studentNo: "9391498723", parentNo: "7093452080" },
        { rollNo: "22471A05M9", name: "KOTA KOTAIAH", studentNo: "9701513733", parentNo: "9133281085" },
        { rollNo: "22471A05N0", name: "KOTHA LAHARI", studentNo: "9652102416", parentNo: "9849652416" },
        { rollNo: "22471A05N1", name: "KOTHAMADDI ARJUN REDDY", studentNo: "7093686839", parentNo: "9989969857" },
        { rollNo: "22471A05N2", name: "MADANU JOSEPH KUMAR", studentNo: "", parentNo: "7286069874" },
        { rollNo: "22471A05N3", name: "MANDADAPU TRISHA", studentNo: "6301246740", parentNo: "9059708676" },
        { rollNo: "22471A05N4", name: "MUTLURI PRAVEEN KUMAR", studentNo: "9949331488", parentNo: "9949331488" },
        { rollNo: "22471A05N5", name: "NALLAMSETTY VINAY", studentNo: "7993394905", parentNo: "9032946091" },
        { rollNo: "22471A05N6", name: "PALETI RAHUL", studentNo: "9989027176", parentNo: "9966807176" },
        { rollNo: "22471A05N7", name: "PANCHUMARTHI LAKSHMI GOPINATH", studentNo: "", parentNo: "6302697245" },
        { rollNo: "22471A05N8", name: "SHAIK ANAMTARAM ABDUL KAREEM", studentNo: "9949335641", parentNo: "9949243161" },
        { rollNo: "22471A05N9", name: "SHAIK FAHEEM AHMED", studentNo: "8522848042", parentNo: "9550858394" },
        { rollNo: "22471A05O0", name: "YANAMALA MAHESH BABU", studentNo: "8341606195", parentNo: "9573567379" },
        { rollNo: "22471A05O1", name: "SHAIK SHAKEER AHAMAD", studentNo: "9440796398", parentNo: "9440796297" },
        { rollNo: "22471A05O2", name: "SHAIK SIRAZ", studentNo: "9966501588", parentNo: "9989974462" },
        { rollNo: "22471A05O3", name: "SHAIK YALAVARTHI KHAJABI", studentNo: "9701170114", parentNo: "8897131555" },
        { rollNo: "22471A05O4", name: "TADI ANUSHA", studentNo: "6305892622", parentNo: "9703163009" },
        { rollNo: "22471A05O5", name: "TATAPUDI RAJESH", studentNo: "9182327043", parentNo: "8179777267" },
        { rollNo: "22471A05O6", name: "TUMMA DURGA BHAVANI", studentNo: "7671946513", parentNo: "7893936517" },
        { rollNo: "22471A05O7", name: "YELLAMELLI KRUPA CHAITANYA", studentNo: "9398413328", parentNo: "9381900979" },
        { rollNo: "22471A05O8", name: "KONAKANCHI SAI MANIKANTA", studentNo: "8008518337", parentNo: "9390284258" },
        { rollNo: "22471A05O9", name: "SHAIK MALKA JAN SHAFI", studentNo: "6300967456", parentNo: "9347680387" },
        { rollNo: "22471A05P0", name: "SHAIK CHINNA MASTAN VALI", studentNo: "9110795907", parentNo: "9908830090" },
        { rollNo: "22471A05P1", name: "SHAIK INKOLLU FARZAN BASHA", studentNo: "9581410072", parentNo: "9381177267" },
        { rollNo: "22471A05P2", name: "YALAGALA LEELA KRISHNA", studentNo: "9502694410", parentNo: "8074758119" },
        { rollNo: "22471A05P3", name: "MASIMUKKALA PHANI KUMAR", studentNo: "8121290190", parentNo: "9346881593" }
    ];

    // Create and style the search container
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("search-container");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Enter Roll Number";
    searchInput.classList.add("search-input");
    searchContainer.appendChild(searchInput);

    StudentsInfo.insertBefore(searchContainer, StudentsInfo.firstChild);

    // Function to format the current date
    function getFormattedDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        return now.toLocaleDateString(undefined, options);
    }

    // Create a student card
    function createStudentCard(student) {
        const card = document.createElement("div");
        card.classList.add("card", "student-card", "mb-3");
        card.dataset.rollNo = student.rollNo;

        const image = document.createElement("img");
        image.src = student.imageUrl;
        image.alt = student.name;
        image.classList.add("card-img-top");
        card.appendChild(image);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        const name = document.createElement("h5");
        name.textContent = student.name;
        name.classList.add("card-title");
        cardBody.appendChild(name);

        const rollNumber = document.createElement("p");
        rollNumber.textContent = student.rollNo;
        rollNumber.classList.add("card-text");
        cardBody.appendChild(rollNumber);

        const studentNo = document.createElement("p");
        studentNo.textContent = `Student Phone: ${student.studentNo || 'N/A'}`;
        studentNo.classList.add("card-text");
        cardBody.appendChild(studentNo);

        const parentNo = document.createElement("p");
        parentNo.textContent = `Parent Phone: ${student.parentNo || 'N/A'}`;
        parentNo.classList.add("card-text");
        cardBody.appendChild(parentNo);

        const contactDetails = document.createElement("div");
        contactDetails.classList.add("d-flex","flex-column", "justify-content-center", "mt-3");
        cardBody.appendChild(contactDetails);

        // Date and day variables
        const presentDate = getFormattedDate();

        // Call Student button
        const callStudentButton = document.createElement("button");
        callStudentButton.textContent = student.studentNo ? "Call Student" : "No Student Phone";
        callStudentButton.disabled = !student.studentNo;
        callStudentButton.classList.add("btn", "btn-primary");
        if (!student.studentNo) {
            callStudentButton.classList.add("button-disabled");
        } else {
            callStudentButton.onclick = () => {
                window.location.href = `tel:+91${student.studentNo}`;
            };
        }
        contactDetails.appendChild(callStudentButton);

        // Call Parent button
        const callParentButton = document.createElement("button");
        callParentButton.textContent = student.parentNo ? "Call Parent" : "No Parent Phone";
        callParentButton.disabled = !student.parentNo;
        callParentButton.classList.add("btn", "btn-primary");
        if (!student.parentNo) {
            callParentButton.classList.add("button-disabled");
        } else {
            callParentButton.onclick = () => {
                window.location.href = `tel:+91${student.parentNo}`;
            };
        }
        contactDetails.appendChild(callParentButton);

        // Message Student button
        const messageStudentButton = document.createElement("button");
        messageStudentButton.textContent = student.studentNo ? "Message Student" : "No Student Phone";
        messageStudentButton.disabled = !student.studentNo;
        messageStudentButton.classList.add("btn", "btn-primary");
        if (!student.studentNo) {
            messageStudentButton.classList.add("button-disabled");
        } else {
            messageStudentButton.onclick = () => {
                const message = `You are ${student.name} (${student.rollNo}) absent for the ${presentDate} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                window.location.href = `sms:+91${student.studentNo}?body=${encodeURIComponent(message)}`;
            };
        }
        contactDetails.appendChild(messageStudentButton);

        // Message Parent button
        const messageParentButton = document.createElement("button");
        messageParentButton.textContent = student.parentNo ? "Message Parent" : "No Parent Phone";
        messageParentButton.disabled = !student.parentNo;
        messageParentButton.classList.add("btn", "btn-primary");
        if (!student.parentNo) {
            messageParentButton.classList.add("button-disabled");
        } else {
            messageParentButton.onclick = () => {
                const message = `Your ward ${student.name} (${student.rollNo}) is absent for the ${presentDate} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                window.location.href = `sms:+91${student.parentNo}?body=${encodeURIComponent(message)}`;
            };
        }
        contactDetails.appendChild(messageParentButton);

        StudentsInfo.appendChild(card);
    }

    // Function to filter student cards based on roll number
    function filterStudents() {
        const rollNumber = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.student-card');

        cards.forEach(card => {
            const cardRollNo = card.dataset.rollNo.toLowerCase();
            card.style.display = rollNumber === "" || cardRollNo.includes(rollNumber) ? "block" : "none";
        });
    }

    // Create all student cards
    StudentsInfoList.forEach(createStudentCard);

    // Attach real-time search functionality
    searchInput.addEventListener("input", filterStudents);
});
