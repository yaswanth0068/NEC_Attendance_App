document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    // List of student information
    let StudentsInfoList = [ 
        // place your data here
    { rollNo: "21471A0501", name: "ABHIRAM KUDARI", studentNo: "7207817154", parentNo: "8919511400" },
    { rollNo: "21471A0502", name: "AMEEN UL HASSAN KHAN", studentNo: "8688927285", parentNo: "6309261715" },
    { rollNo: "21471A0503", name: "AMMIREDDY SRILATHA", studentNo: "6303186622", parentNo: "6304431436" },
    { rollNo: "21471A0504", name: "ARAVAPALLI VASAVI", studentNo: "7093760074", parentNo: "9989276796" },
    { rollNo: "21471A0505", name: "BALA RANGARAO MACHARLA", studentNo: "7207909030", parentNo: "9849484852" },
    { rollNo: "21471A0507", name: "BODDUPALLI VENKATA SIVA RAMA KRISHNA", studentNo: "7981634940", parentNo: "9032172458" },
    { rollNo: "21471A0508", name: "BOGGAVARAPU CHARAN DEEPAK", studentNo: "7013777307", parentNo: "7013777307" },
    { rollNo: "21471A0509", name: "BOJJA SOBHARANI", studentNo: "7032212364", parentNo: "7995611388" },
    { rollNo: "21471A0510", name: "BOLLA VINAY POOJA", studentNo: "8008482356", parentNo: "9885824193" },
    { rollNo: "21471A0511", name: "BOLLAVARAM VENKATA SRINIVASULU", studentNo: "7997472931", parentNo: "9618347388" },
    { rollNo: "21471A0512", name: "BOLLINENI YASASWINI", studentNo: "8247626375", parentNo: "8374682676" },
    { rollNo: "21471A0513", name: "BOMMU LAKSHMI PRASANNA", studentNo: "7780543823", parentNo: "9494347423" },
    { rollNo: "21471A0514", name: "BORUGADDA SUPRIYA", studentNo: "9059907192", parentNo: "7177377637" },
    { rollNo: "21471A0515", name: "CHALLA RAVI SANKAR", studentNo: "9160737429", parentNo: "7842486859" },
    { rollNo: "21471A0516", name: "CHINNAM HARINI", studentNo: "7993974512", parentNo: "9972611929" },
    { rollNo: "21471A0517", name: "DASARI TRIVENI", studentNo: "8328018517", parentNo: "7672083403" },
    { rollNo: "21471A0518", name: "DEEPIKA KARASALA", studentNo: "9989233568", parentNo: "9989233568" },
    { rollNo: "21471A0519", name: "DIVVELA BALA SRI ABHIGNA", studentNo: "9989113288", parentNo: "9030316792" },
    { rollNo: "21471A0520", name: "GANGADARI SATISH", studentNo: "8247433353", parentNo: "9182342432" },
    { rollNo: "21471A0521", name: "GANGADHAR RONGALA", studentNo: "9182233993", parentNo: "9515055642" },
    { rollNo: "21471A0522", name: "GATTU THANUJA", studentNo: "9398763937", parentNo: "9030137688" },
    { rollNo: "21471A0523", name: "GOLLA AVINASH", studentNo: "6305617587", parentNo: "9949260659" },
    { rollNo: "21471A0524", name: "GUDE LAVANYA", studentNo: "6305409482", parentNo: "8106607586" },
    { rollNo: "21471A0525", name: "GUNTUR GOWTHAM", studentNo: "8977443549", parentNo: "6301673547" },
    { rollNo: "21471A0526", name: "GURRAM SIVA ANJALI", studentNo: "9573369415", parentNo: "9440452700" },
    { rollNo: "21471A0527", name: "INDRAVATI CHINNI", studentNo: "7207241584", parentNo: "9949499675" },
    { rollNo: "21471A0528", name: "KETHAVATH RAVI NAIK", studentNo: "8185907282", parentNo: "8185907282" },
    { rollNo: "21471A0529", name: "KOLAKANI RAJU", studentNo: "7702024231", parentNo: "9849439581" },
    { rollNo: "21471A0530", name: "KOLLA TEJASWINI", studentNo: "9347473037", parentNo: "9492901193" },
    { rollNo: "21471A0531", name: "KOTA VEERA RAGHAVA REDDY", studentNo: "9676598569", parentNo: "9949364817" },
    { rollNo: "21471A0532", name: "KUNCHAPU AKHIL KUMAR", studentNo: "9346897227", parentNo: "9346897277" },
    { rollNo: "21471A0533", name: "KURRA MAHESH BABU", studentNo: "8897068361", parentNo: "8125435154" },
    { rollNo: "21471A0534", name: "MEKALA GOPI MANIKANTA", studentNo: "9849322656", parentNo: "9666552265" },
    { rollNo: "21471A0535", name: "MELLACHERUVU V V NAGA SHANMUKHA SAHITHI", studentNo: "8919478774", parentNo: "9030755740" },
    { rollNo: "21471A0537", name: "NAGENDRA BABU TAMMISETTI", studentNo: "7286044867", parentNo: "7286044867" },
    { rollNo: "21471A0538", name: "NAKKA ANNAPURNA", studentNo: "7702351758", parentNo: "9963279172" },
    { rollNo: "21471A0539", name: "NALLAMEKALA GOPI KRISHNA", studentNo: "7036751611", parentNo: "9666063504" },
    { rollNo: "21471A0540", name: "NARRA DIVYA", studentNo: "9676612392", parentNo: "9492466433" },
    { rollNo: "21471A0541", name: "NUTI REVANTH", studentNo: "8186864522", parentNo: "8186864522" },
    { rollNo: "21471A0542", name: "PANDI JYOSHNADEVI", studentNo: "9392610694", parentNo: "9948836398" },
    { rollNo: "21471A0543", name: "PARUCHURI SWETHA LAKSHMI", studentNo: "9347155061", parentNo: "8499098680" },
    { rollNo: "21471A0544", name: "PEDDI KAVYA", studentNo: "9704735905", parentNo: "9704431908" },
    { rollNo: "21471A0545", name: "PENDELA CHENCHU KOUSHIK", studentNo: "7780660803", parentNo: "9440016399" },
    { rollNo: "21471A0546", name: "POGULA SAI SRI VARSHA", studentNo: "9618052761", parentNo: "9866804211" },
    { rollNo: "21471A0547", name: "POLIMERA BHAGYA LAKSHMI", studentNo: "7780470095", parentNo: "9989770670" },
    { rollNo: "21471A0548", name: "PONNAM VENKATA SAI TEJA", studentNo: "8179473485", parentNo: "9490859769" },
    { rollNo: "21471A0549", name: "POOJITHA BANDI", studentNo: "9398187082", parentNo: "7702471949" },
    { rollNo: "21471A0550", name: "RAMAVATH DHANDU NAIK", studentNo: "8341295342", parentNo: "8143228982" },
    { rollNo: "21471A0551", name: "SANKURU SAI LATHA", studentNo: "8919514259", parentNo: "9494045249" },
    { rollNo: "21471A0552", name: "SANNITHI BHAVANI", studentNo: "7793941601", parentNo: "9704831601" },
    { rollNo: "21471A0554", name: "SHAIK HAZARE KHAJA MOHIDDIN", studentNo: "7569060153", parentNo: "9553225903" },
    { rollNo: "21471A0555", name: "SHAIK SAMEERA", studentNo: "8121466114", parentNo: "9515434462" },
    { rollNo: "21471A0556", name: "SHAIK SHARUKH", studentNo: "9849201092", parentNo: "9849201092" },
    { rollNo: "21471A0557", name: "SHAIK YALAVARTHI IJAZ AHAMAD", studentNo: "7794951864", parentNo: "8897131555" },
    { rollNo: "21471A0558", name: "SINDE VENKATA SAPTHA GIRISH", studentNo: "8247391167", parentNo: "8886988170" },
    { rollNo: "21471A0559", name: "SINGAM VENKATA SATYA VIJYA GANESH", studentNo: "7675859516", parentNo: "957303152" },
    { rollNo: "21471A0560", name: "SIVANAGENDRA AKURATHI", studentNo: "8096137414", parentNo: "9666872883" },
    { rollNo: "21471A0561", name: "SRINIVASA KALYAN RAM KANKANALA", studentNo: "7672058597", parentNo: "9490638933" },
    { rollNo: "21471A0562", name: "SRIPATHI CHANDANA", studentNo: "7995213575", parentNo: "9502436754" },
    { rollNo: "21471A0563", name: "TANNIRU HARSHITHA", studentNo: "8121814391", parentNo: "9949792889" },
    { rollNo: "21471A0564", name: "THALAPANENI SUMA DURGA", studentNo: "9912984574", parentNo: "7569880294" },
    { rollNo: "21471A0565", name: "TUMPALA MAHITH", studentNo: "7386226605", parentNo: "7330797317" },
    { rollNo: "21471A0566", name: "VALLEPU SRINIVAS", studentNo: "8897668121", parentNo: "9908096050" },
    { rollNo: "21471A0567", name: "VEMULA SIREESHA", studentNo: "8125856938", parentNo: "8106474230" },
    { rollNo: "21471A0568", name: "VENKATA ARAVIND TUNUGUNTLA", studentNo: "7207317055", parentNo: "9704862468" },
    { rollNo: "21471A0569", name: "YADALA SANDHYA", studentNo: "9603590685", parentNo: "9100193465" },
    { rollNo: "21471A0570", name: "YALLANTI LIKHITH PRASANNA KUMAR", studentNo: "8019964911", parentNo: "9642762917" },{ rollNo: "21471A0571", name: "ABHISHIKTH DOLA", studentNo: "9652477669", parentNo: "9701487669" },
    { rollNo: "21471A0572", name: "AINAVOLU MANVITHA", studentNo: "9391979915", parentNo: "9248458488" },
    { rollNo: "21471A0573", name: "AMBATI LAKSHMI NIHARIKA", studentNo: "6309701801", parentNo: "7794911712" },
    { rollNo: "21471A0574", name: "BANDARU ANJI BABU", studentNo: "7207458114", parentNo: "9502968425" },
    { rollNo: "21471A0575", name: "BETHAPUDI KEERTHI", studentNo: "7995927184", parentNo: "7337490977" },
    { rollNo: "21471A0576", name: "BHAVANA KOLIPAKA", studentNo: "8374667074", parentNo: "7989307520" },
    { rollNo: "21471A0577", name: "BOLLA LAKSHMI VARSHA", studentNo: "9676103193", parentNo: "9666869413" },
    { rollNo: "21471A0578", name: "BOLNEDI SUHAS", studentNo: "9948290951", parentNo: "9676736189" },
    { rollNo: "21471A0579", name: "CHANDRA SEKHAR SAKINALA", studentNo: "7842472589", parentNo: "7989981416" },
    { rollNo: "21471A0580", name: "CHINNAM JANAKI DEVI", studentNo: "9494021841", parentNo: "9849176932" },
    { rollNo: "21471A0581", name: "DOKKU NAGA REVATHI", studentNo: "7731226108", parentNo: "9030286569" },
    { rollNo: "21471A0583", name: "DUGGINENI SATISH", studentNo: "9014795499", parentNo: "9704562021" },
    { rollNo: "21471A0584", name: "DUGGIREDDY DHANA LAKSHMI", studentNo: "9392316128", parentNo: "8374390245" },
    { rollNo: "21471A0585", name: "DULLA TEJA CHARAN", studentNo: "9949611924", parentNo: "9502311924" },
    { rollNo: "21471A0586", name: "GORANTLA GAYATHRI", studentNo: "8309519609", parentNo: "9951621733" },
    { rollNo: "21471A0587", name: "DASARI JAGADEESH", studentNo: "9866511017", parentNo: "8897118373" },
    { rollNo: "21471A0588", name: "GUDE CHAITANYA", studentNo: "8790949203", parentNo: "8978695247" },
    { rollNo: "21471A0589", name: "GURRAM LAKSHMI VARA PRASAD", studentNo: "9885196431", parentNo: "9490239630" },
    { rollNo: "21471A0590", name: "KADIYALA NIKHITHA", studentNo: "8341969047", parentNo: "6304523558" },
    { rollNo: "21471A0591", name: "KALYANAM JAHNAVI SAI PRIYA", studentNo: "8341118830", parentNo: "7075043123" },
    { rollNo: "21471A0592", name: "KANNEGANTI NAVYA", studentNo: "9493054262", parentNo: "9493054262" },
    { rollNo: "21471A0593", name: "KAPU SUVARSHITHA", studentNo: "7981943291", parentNo: "9866186158" },
    { rollNo: "21471A0594", name: "KARNA ESWAR KALYANI", studentNo: "6304769738", parentNo: "7207889488" },
    { rollNo: "21471A0595", name: "KASULA PRATHIMA", studentNo: "9014985837", parentNo: "8555822733" },
    { rollNo: "21471A0596", name: "KATRAGADDA SOMNATH", studentNo: "6302723393", parentNo: "6302723393" },
    { rollNo: "21471A0597", name: "KAVALI MAHESH", studentNo: "9490458299", parentNo: "9849772646" },
    { rollNo: "21471A0598", name: "KOLLA VAMSI KRISHNA", studentNo: "9110377541", parentNo: "8500338519" },
    { rollNo: "21471A0599", name: "KURAKULA GUNA SCHEKAR", studentNo: "8247529158", parentNo: "6281813327" },
    { rollNo: "21471A05A0", name: "LINGALA BRAHMAIAH", studentNo: "9573564417", parentNo: "9963331782" },
    { rollNo: "21471A05A2", name: "MODEPALLI DILEEP KUMAR", studentNo: "7013838396", parentNo: "8106755092" },
    { rollNo: "21471A05A3", name: "MODHEPALLI GAYATHRI", studentNo: "7013478147", parentNo: "9000022536" },
    { rollNo: "21471A05A4", name: "MUKKAMALLA ARAVIND", studentNo: "8919445300", parentNo: "7569926896" },
    { rollNo: "21471A05A5", name: "MUNAGALA KAVYANJALI", studentNo: "9154744044", parentNo: "9440095848" },
    { rollNo: "21471A05A6", name: "MUTHIREDDY ASWINIDUTH", studentNo: "9948290951", parentNo: "6309725636" },
    { rollNo: "21471A05A7", name: "MUTHULURI THIRUMALA DEVI", studentNo: "6300239363", parentNo: "9177147852" },
    { rollNo: "21471A05A8", name: "NUTHALAPATI SRIKANTH", studentNo: "9676384579", parentNo: "9866678455" },
    { rollNo: "21471A05B0", name: "PARCHURI MAHESH BABU", studentNo: "7386023696", parentNo: "9573908015" },
    { rollNo: "21471A05B1", name: "PASUPULETI MURALI PRIYA", studentNo: "9346129585", parentNo: "9346129585" },
    { rollNo: "21471A05B2", name: "PERUMALLA SNEHA KUMARI", studentNo: "7993380656", parentNo: "6309096036" },
    { rollNo: "21471A05B3", name: "POLEPALLI UDAY KIRAN", studentNo: "9346494713", parentNo: "9346494713" },
    { rollNo: "21471A05B4", name: "PULIBANDLA SAI KUMAR", studentNo: "8341378358", parentNo: "8977781532" },
    { rollNo: "21471A05B5", name: "RAJASEKHAR POLURI", studentNo: "7207317436", parentNo: "9491673525" },
    { rollNo: "21471A05B6", name: "RAMBABU YALAGALA", studentNo: "9502351327", parentNo: "9392307004" },
    { rollNo: "21471A05B7", name: "RAVI LAKSHMI SRI HARSHA", studentNo: "8328075621", parentNo: "8121802772" },
    { rollNo: "21471A05B8", name: "SEVA NEELIMA", studentNo: "8106651177", parentNo: "9014664578" },
    { rollNo: "21471A05B9", name: "SHAIK CHAND ASMI", studentNo: "9550363748", parentNo: "9550363748" },
    { rollNo: "21471A05C0", name: "SHAIK HAFIJA", studentNo: "8639538909", parentNo: "9000619871" },
    { rollNo: "21471A05C1", name: "SHAIK MUBEENA", studentNo: "9866793665", parentNo: "9966909299" },
    { rollNo: "21471A05C2", name: "SHAIK MUNAF", studentNo: "7569497407", parentNo: "8074459171" },
    { rollNo: "21471A05C3", name: "SHAIK NAJEER", studentNo: "7780545231", parentNo: "9963651244" },
    { rollNo: "21471A05C4", name: "SHAIK RIZWANA", studentNo: "9652372519", parentNo: "9949460411" },
    { rollNo: "21471A05C5", name: "SHAIK YALAVARTHI ALIMOON", studentNo: "7893039064", parentNo: "8897131555" },
    { rollNo: "21471A05C6", name: "SHAIK ZAHEED HUSAIN", studentNo: "9603913077", parentNo: "8374333689" },
    { rollNo: "21471A05C7", name: "SISTLA V S MANIKANTA ROHIT", studentNo: "9182209996", parentNo: "9440250357" },
    { rollNo: "21471A05C8", name: "SRAVANI MADAGUNDA", studentNo: "6309196691", parentNo: "9989181274" },
    { rollNo: "21471A05C9", name: "SUNKARI KAVYA", studentNo: "8019355008", parentNo: "9866402586" },
    { rollNo: "21471A05D0", name: "SUNKIREDDY MADHAVI", studentNo: "8341151983", parentNo: "8142901545" },
    { rollNo: "21471A05D1", name: "SYED RIZWANA", studentNo: "9908743790", parentNo: "9908743790" },
    { rollNo: "21471A05D2", name: "TATA SUMANTH", studentNo: "8247322869", parentNo: "7569331820" },
    { rollNo: "21471A05D3", name: "TEJA SRI VANKAYALA", studentNo: "8074787879", parentNo: "9000114421" },
    { rollNo: "21471A05D4", name: "THALLAM NAVEEN SATYA", studentNo: "9441458178", parentNo: "9908844317" },
    { rollNo: "21471A05D5", name: "VATTIKUTI RAKESH KUMAR", studentNo: "6300415315", parentNo: "8790442788" },
    { rollNo: "21471A05D6", name: "VELCHURI BALA HARSHITHA", studentNo: "9908565165", parentNo: "9390795346" },
    { rollNo: "21471A05D7", name: "VENKATA PAVAN KUMAR LAGHUMAVARAPU", studentNo: "9849659692", parentNo: "9948029340" },
    { rollNo: "21471A05D8", name: "VENKAYAMMA AKKAPALLI", studentNo: "9177136838", parentNo: "9177136838" },
    { rollNo: "21471A05D9", name: "YARLAGADDA MADHAVI", studentNo: "9010283375", parentNo: "9010283375" },
    { rollNo: "21471A05E0", name: "YENDLURI SOWMYA", studentNo: "9705632071", parentNo: "9505928164" },
    { rollNo: "21471A05E1", name: "AILA MANOGNA", studentNo: "9059266974", parentNo: "8121418884" },
    { rollNo: "21471A05E2", name: "VEMA JHANSI LAKSHMI SIVA NISHITHA", studentNo: "7997560560", parentNo: "9000409992" },
    { rollNo: "21471A05E3", name: "AVULA RAMU", studentNo: "9676336499", parentNo: "7989571870" },
    { rollNo: "21471A05E4", name: "BABU TALARI", studentNo: "7993668185", parentNo: "8978559156" },
    { rollNo: "21471A05E5", name: "BOGYAM INDU", studentNo: "9100584945", parentNo: "9553040526" },
    { rollNo: "21471A05E6", name: "CHAGALA SUNITHA", studentNo: "7993866434", parentNo: "9989391048" },
    { rollNo: "21471A05E7", name: "DIVVELA CHANDU VENKATESWARA GUPTHA", studentNo: "9177548531", parentNo: "9010299246" },
    { rollNo: "21471A05E8", name: "DONDAPATI THARUN KUMAR", studentNo: "7386100423", parentNo: "6302382742" },
    { rollNo: "21471A05E9", name: "GADE SALINI", studentNo: "8522819117", parentNo: "9676967117" },
    { rollNo: "21471A05F0", name: "GANGAVARAPU JASHUVA", studentNo: "9652611281", parentNo: "9908338007" },
    { rollNo: "21471A05F1", name: "GAYATHRI CHENNUPALLI", studentNo: "9573087485", parentNo: "7075624068" },
    { rollNo: "21471A05F2", name: "GOGADA SIRISHA", studentNo: "8125718544", parentNo: "8978589893" },
    { rollNo: "21471A05F3", name: "GORANTLA LAKSHMI TIRUMALA", studentNo: "8008125965", parentNo: "9704438039" },
    { rollNo: "21471A05F4", name: "GUDIPUDI SONY", studentNo: "7601066678", parentNo: "9550595450" },
    { rollNo: "21471A05F5", name: "GUNTAKALA ANURADHA", studentNo: "7036465042", parentNo: "9390626591" },
    { rollNo: "21471A05F6", name: "GURAZALA CHAITANYA NANDA MOHAN", studentNo: "8008720148", parentNo: "9948920148" },
    { rollNo: "21471A05F7", name: "HARI SIVA SWARNA", studentNo: "8688934032", parentNo: "9963294647" },
    { rollNo: "21471A05F8", name: "JAMMIGUMPULA  LAKSHMI NARAYANA", studentNo: "9121496368", parentNo: "9121496368" },
    { rollNo: "21471A05F9", name: "JUJJURI SAI", studentNo: "7989135700", parentNo: "9885394354" },
    { rollNo: "21471A05G0", name: "JUPALLI RAJESH", studentNo: "7794992826", parentNo: "7702877082" },
    { rollNo: "21471A05G1", name: "KALIGIRI HARSHA VARDHAN", studentNo: "7997829186", parentNo: "9705038036" },
    { rollNo: "21471A05G2", name: "KANDULA RAJESH", studentNo: "9849428625", parentNo: "9160790179" },
    { rollNo: "21471A05G3", name: "KASA SIVA SANKAR", studentNo: "7842495985", parentNo: "9848890866" },
    { rollNo: "21471A05G4", name: "KASTHALA HAGGAYI", studentNo: "6309741015", parentNo: "9000124780" },
    { rollNo: "21471A05G5", name: "KATARI VENKATA SIVA RAMA KRISHNA", studentNo: "7702783201", parentNo: "9908193511" },
    { rollNo: "21471A05G6", name: "KATTIRI SANTHOSHKUMAR", studentNo: "8978468025", parentNo: "9490447175" },
    { rollNo: "21471A05G7", name: "KONAKALLA SAI SURYA PAVAN KUMAR", studentNo: "9398819796", parentNo: "9346147451" },
    { rollNo: "21471A05G8", name: "KONDEPOGU YUVASRI", studentNo: "9032273874", parentNo: "9959366148" },
    { rollNo: "21471A05G9", name: "KONGARA ABHINAYA", studentNo: "9550346891", parentNo: "9948620985" },
    { rollNo: "21471A05H0", name: "KOTA CHANDRA SEKHAR", studentNo: "9502507307", parentNo: "9502507307" },
    { rollNo: "21471A05H1", name: "KOTHAMASU THRYLOKYA", studentNo: "8106933755", parentNo: "7674883848" },
    { rollNo: "21471A05H2", name: "KOTTE CHANDRIKA", studentNo: "8008329182", parentNo: "9908553350" },
    { rollNo: "21471A05H3", name: "KOVVURI GANGOTHRI", studentNo: "9502472867", parentNo: "8179709898" },
    { rollNo: "21471A05H4", name: "KUCHI VINAY", studentNo: "9908634323", parentNo: "8247882360" },
    { rollNo: "21471A05H5", name: "MADANA VENKATA THIRUMALA", studentNo: "7569123380", parentNo: "9182983951" },
    { rollNo: "21471A05H6", name: "MANEPALLI YUVA SRAVANI", studentNo: "8019501387", parentNo: "8142424321" },
    { rollNo: "21471A05H7", name: "MANIKALA MANIKANTA RAMBABU", studentNo: "9701661374", parentNo: "7893261374" },
    { rollNo: "21471A05H8", name: "MANIKANTA CHALLA", studentNo: "8500507715", parentNo: "9652682240" },
    { rollNo: "21471A05H9", name: "MATA AJAY KIRAN", studentNo: "9393669099", parentNo: "9440990863" },
    { rollNo: "21471A05I0", name: "MEDAM ADI NAGA MANENDRA REDDY", studentNo: "6301799538", parentNo: "8121199538" },
    { rollNo: "21471A05I1", name: "MOKKAPATI VENKATESH", studentNo: "7386510327", parentNo: "" },
    { rollNo: "21471A05I2", name: "MUKKAPATI VASUDEVA RAO", studentNo: "8341095393", parentNo: "9963346426" },
    { rollNo: "21471A05I3", name: "NALADUMMI NAGALAKSHMI", studentNo: "9346722194", parentNo: "9492708031" },
    { rollNo: "21471A05I4", name: "NARNAPATI VENKATA NAGA PRASANNA", studentNo: "7075214728", parentNo: "8374003846" },
    { rollNo: "21471A05I5", name: "PATAN KARIMULLA KHAN", studentNo: "7995296651", parentNo: "9848890391" },
    { rollNo: "21471A05I6", name: "PAVANI GOURAVARAPU", studentNo: "6303311432", parentNo: "9951147825" },
    { rollNo: "21471A05I7", name: "PONNAGANTI SAIGANESH", studentNo: "6305238240", parentNo: "8008379219" },
    { rollNo: "21471A05I8", name: "PRATHIPATI LUCKY", studentNo: "8297830255", parentNo: "7013524783" },
    { rollNo: "21471A05I9", name: "PULIVARTHI PRIYANKA", studentNo: "9059485936", parentNo: "9989315936" },
    { rollNo: "21471A05J0", name: "PUTLURI JAGADEESWARA REDDY", studentNo: "6300731104", parentNo: "8143239819" },
    { rollNo: "21471A05J1", name: "RANGA CHAITANYA SANTOSH MURARI", studentNo: "7997838249", parentNo: "9989034186" },
    { rollNo: "21471A05J2", name: "SAGIREDDY PAVAN SAI SUBBA REDDY", studentNo: "9666456887", parentNo: "9885433407" },
    { rollNo: "21471A05J3", name: "SANDEEP CHAPPIDI", studentNo: "9948325730", parentNo: "8801156926" },
    { rollNo: "21471A05J4", name: "SEETHA BHAGYA LATHA", studentNo: "8179329358", parentNo: "9010010550" },
    { rollNo: "21471A05J5", name: "SHAIK NAJMA", studentNo: "7675020093", parentNo: "9866463140" },
    { rollNo: "21471A05J6", name: "SIDDHARDHA REDDY KUNDURU", studentNo: "9182315901", parentNo: "7661038588" },
    { rollNo: "21471A05J7", name: "SIRISHA BIJJALA", studentNo: "8008811280", parentNo: "9885876793" },
    { rollNo: "21471A05J8", name: "SNEHITH ABBURI", studentNo: "7995631718", parentNo: "9248095845" },
    { rollNo: "21471A05J9", name: "SURE VENKATA JHANSI LAKSHMI", studentNo: "9553054765", parentNo: "9490769600" },
    { rollNo: "21471A05K0", name: "SYED KHAJA MOULA", studentNo: "9392738260", parentNo: "9493461101" },
    { rollNo: "21471A05K1", name: "TADALA MANI DEEP", studentNo: "8555859327", parentNo: "9550169402" },
    { rollNo: "21471A05K2", name: "TANNIRU AKHILA", studentNo: "7396074656", parentNo: "9848210171" },
    { rollNo: "21471A05K3", name: "THANINKI AKHIL", studentNo: "8179702468", parentNo: "9705122766" },
    { rollNo: "21471A05K4", name: "THOTAKURA BHUVANESH", studentNo: "8790066998", parentNo: "9963402858" },
    { rollNo: "21471A05K5", name: "TUMMALAPENTA VINEESHA", studentNo: "9502931495", parentNo: "9618143532" },
    { rollNo: "21471A05K6", name: "PIDATHALA RAMESH BABU", studentNo: "9491890625", parentNo: "9948680419" },
    { rollNo: "21471A05K7", name: "VANIPENTA SRI HARSHA VARDHAN REDDY", studentNo: "9502807267", parentNo: "9398121250" },
    { rollNo: "21471A05K8", name: "YARAM KEERTHI", studentNo: "8919645367", parentNo: "8919645367" },
    { rollNo: "21471A05K9", name: "YENUGANTI NARENDRA", studentNo: "9381332944", parentNo: "949392745" },
    { rollNo: "21471A05L0", name: "THUMU TEJASWINI", studentNo: "8309213867", parentNo: "7799240185" },
    { rollNo: "21471A05L1", name: "ABDUL JANI SHAIK", studentNo: "7396121348", parentNo: "7780178448" },
    { rollNo: "21471A05L2", name: "ADAPALA VISHNU KUMAR", studentNo: "9391996123", parentNo: "8499808279" },
    { rollNo: "21471A05L3", name: "ALA LAKSHMI PRIYANKA", studentNo: "9032208471", parentNo: "9701968394" },
    { rollNo: "21471A05L4", name: "ANNAPUREDDY RANGA LAKSHMI", studentNo: "8374245834", parentNo: "8179303009" },
    { rollNo: "21471A05L5", name: "BATHULA ANIL KUMAR", studentNo: "9490954365", parentNo: "9966696363" },
    { rollNo: "21471A05L7", name: "BEERALA NAGA VISHNU", studentNo: "7842815055", parentNo: "9966027515" },
    { rollNo: "21471A05L8", name: "BELLAMKONDA NANDA KRISHNA", studentNo: "8712168116", parentNo: "9849614610" },
    { rollNo: "21471A05L9", name: "BOBBEPALLI ARAVIND BABU", studentNo: "7671023946", parentNo: "7780408070" },
    { rollNo: "21471A05M0", name: "BOLLISETTY TRIVENI", studentNo: "8247213104", parentNo: "9866909387" },
    { rollNo: "21471A05M1", name: "CHELLI PRASANTH", studentNo: "8247784633", parentNo: "9989147571" },
    { rollNo: "21471A05M2", name: "CHENNUPATI JYOTHIKA", studentNo: "8688424199", parentNo: "9032252209" },
    { rollNo: "21471A05M3", name: "DEVARASETTY RAMA DURGA BHAVANI", studentNo: "7386527360", parentNo: "9182636350" },
    { rollNo: "21471A05M4", name: "GANDIKOTA NARENDRA", studentNo: "9948566970", parentNo: "9398590737" },
    { rollNo: "21471A05M5", name: "GORIGE VENKATESH", studentNo: "9603217919", parentNo: "6309076919" },
    { rollNo: "21471A05M6", name: "GOTTIMUKKALA SASANK CHANDRA", studentNo: "9502943152", parentNo: "9441521924" },
    { rollNo: "21471A05M7", name: "INTHIYAZ SHAIK", studentNo: "9381031776", parentNo: "9949310384" },
    { rollNo: "21471A05M8", name: "KALVA ADIBABU", studentNo: "9100235411", parentNo: "7997586723" },
    { rollNo: "21471A05N0", name: "KATA RAMYA", studentNo: "9392610189", parentNo: "6301742850" },
    { rollNo: "21471A05N1", name: "KODE VENKATA NAVEEN", studentNo: "6309399747", parentNo: "7330669051" },
    { rollNo: "21471A05N2", name: "KOLASANAKOTI JOHN WESLEY", studentNo: "9701126587", parentNo: "7036767127" },
    { rollNo: "21471A05N3", name: "KOLUMULA MABHU SUBHANI", studentNo: "7702423187", parentNo: "9963786013" },
    { rollNo: "21471A05N4", name: "KURRA VENKATESH", studentNo: "9398851010", parentNo: "9581625416" },
    { rollNo: "21471A05N5", name: "MALLAVARAPU RISHIK MOULI", studentNo: "9573775868", parentNo: "8179929067" },
    { rollNo: "21471A05N6", name: "MEDA VENKATESH", studentNo: "7396128134", parentNo: "9347884212" },
    { rollNo: "21471A05N7", name: "MOTHADIKA VENKATA SAI", studentNo: "9963850025", parentNo: "9642293355" },
    { rollNo: "21471A05N8", name: "MUNAMALA SREYA REDDY", studentNo: "8328427465", parentNo: "8555089678" },
    { rollNo: "21471A05N9", name: "MUVVA MOKSHAGNA", studentNo: "9391992264", parentNo: "9985697333" },
    { rollNo: "21471A05O0", name: "VELPULA VENU", studentNo: "7036986068", parentNo: "7569889712" },
    { rollNo: "21471A05O1", name: "PAMIDIMARRI NIKHITHA", studentNo: "8919666427", parentNo: "9885757598" },
    { rollNo: "21471A05O2", name: "PENTYALA TANUJA", studentNo: "", parentNo: "9966422792" },
    { rollNo: "21471A05O3", name: "PETETI UJWALA DEVI", studentNo: "7702478429", parentNo: "9398374884" },
    { rollNo: "21471A05O4", name: "PONDUGULA VENKATA NAGA HEMANTHA LAKSHMI", studentNo: "6300038279", parentNo: "9440374434" },
    { rollNo: "21471A05O5", name: "PRABHU TEJA PERIKALA", studentNo: "9949029374", parentNo: "8341146317" },
    { rollNo: "21471A05O6", name: "PULI SAI LOKESH REDDY", studentNo: "9392849985", parentNo: "8688789846" },
    { rollNo: "21471A05O7", name: "RAJA NANDINI", studentNo: "9392848022", parentNo: "9010044864" },
    { rollNo: "21471A05O8", name: "SHAIK MOHAMMAD ABBAS", studentNo: "7793978259", parentNo: "9515445014" },
    { rollNo: "21471A05O9", name: "SINGU VAMSY", studentNo: "7995421390", parentNo: "7780516076" },
    { rollNo: "21471A05P0", name: "SUBBARAO KATTA", studentNo: "6305068848", parentNo: "8187009449" },
    { rollNo: "21471A05P1", name: "THODETI SRINADH", studentNo: "7997793477", parentNo: "7997793477" },
    { rollNo: "21471A05P2", name: "TIRUNAVALLI MOHANA", studentNo: "7396022330", parentNo: "7780102903" },
    { rollNo: "21471A05P3", name: "VASANTHA SUDARSANAM", studentNo: "7729980220", parentNo: "6281645921" },
    { rollNo: "21471A05P4", name: "VENKATA SAI DURGA NAIK BUKYA", studentNo: "9347884212", parentNo: "7396128134" },
    { rollNo: "21471A05P5", name: "VUTLA LAVANYA", studentNo: "9705029970", parentNo: "7731923054" },
    { rollNo: "21471A05P6", name: "YARRAM GNANESWAR REDDY", studentNo: "9701667249", parentNo: "9989677249" },
    { rollNo: "21471A05P7", name: "NALLABOTHU NARENDRA KUMAR", studentNo: "9618191519", parentNo: "9553870320" },
    { rollNo: "21471A05P8", name: "REPUDI VIVEK", studentNo: "8341146317", parentNo: "9949029374" },
    { rollNo: "21471A05P9", name: "BALAM RAMAKRISHNA", studentNo: "9948225708", parentNo: "9866595414" },
    { rollNo: "21471A05Q0", name: "SHAIK JALEEL", studentNo: "8688649709", parentNo: "9849555135" },
    { rollNo: "21471A05Q1", name: "GUDI MANIKANTA", studentNo: "9949631616", parentNo: "9705918970" },
    { rollNo: "21471A05Q3", name: "PANGOTH RANGA NAYAK", studentNo: "9640918300", parentNo: "9912337705" },
    { rollNo: "21471A05Q4", name: "SY JAGGAPPADORA", studentNo: "9390906919", parentNo: "6302091939" },
    { rollNo: "22475A0501", name: "THORLIKONDA ARJUN", studentNo: "6300811035", parentNo: "7013228515" },
    { rollNo: "22475A0502", name: "SURUGULA SRIKANTH", studentNo: "7674971757", parentNo: "9652930531" },
    { rollNo: "22475A0503", name: "SATULURI KALYAN", studentNo: "9182240353", parentNo: "9490844818" },
    { rollNo: "22475A0504", name: "POTHABATTINI NIKHITHA", studentNo: "9441342196", parentNo: "9912596329" },
    { rollNo: "22475A0505", name: "K.VARUN CHAND", studentNo: "6281728505", parentNo: "9390080161" },
    { rollNo: "22475A0506", name: "CHINTAPALLI PAVAN SAI", studentNo: "9989753599", parentNo: "9893820290" },
    { rollNo: "22475A0507", name: "SHAIK MUNNER", studentNo: "6302861684", parentNo: "9849091421" },
    { rollNo: "22475A0508", name: "ANNALADASU VAMSI", studentNo: "7659977253", parentNo: "8096707241" },
    { rollNo: "22475A0509", name: "KODELA DIVYA PRAKASH", studentNo: "9553727728", parentNo: "6304335720" },
    { rollNo: "22475A0510", name: "SUDHEER BEVARA", studentNo: "9640072375", parentNo: "9640290148" },
    { rollNo: "22475A0511", name: "PORUGANDI ASHOK", studentNo: "6302105097", parentNo: "7036100519" },
    { rollNo: "22475A0512", name: "TIRUPATHI ESWAR VARA PRASAD", studentNo: "9494206302", parentNo: "9948462831" },
    { rollNo: "22475A0513", name: "SIDDELA VINEETH", studentNo: "9121358359", parentNo: "3533635967" },
    { rollNo: "22475A0514", name: "KOYA MANIKANTESWARA RAO", studentNo: "9121342125", parentNo: "6302626747" },
    { rollNo: "22475A0515", name: "SYED MAHISHABI", studentNo: "6281310020", parentNo: "6281823919" },
    { rollNo: "22475A0516", name: "TUNGA PAVAN KUMAR", studentNo: "9160249447", parentNo: "9701787097" },
    { rollNo: "22475A0517", name: "BACHALA PAVAN DATH", studentNo: "9701858095", parentNo: "8919589071" },
    { rollNo: "22475A0518", name: "VANKAYALAPATI SUNIL", studentNo: "7075547467", parentNo: "9063309167" },
    { rollNo: "22475A0519", name: "KOTA SUPRIYA", studentNo: "7331102293", parentNo: "9848314574" },
    { rollNo: "22475A0520", name: "VEMULA RAJESH", studentNo: "9346127485", parentNo: "9908281004" },
    { rollNo: "22475A0521", name: "DASAPPAGARI SREENIVAS", studentNo: "9391309451", parentNo: "9989660435" },
    { rollNo: "22475A0522", name: "MEENA MADHAVI", studentNo: "8074292185", parentNo: "9701955391" },
    { rollNo: "22475A0523", name: "SAGI JAYANTH", studentNo: "9618307489", parentNo: "9948331820" }
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
