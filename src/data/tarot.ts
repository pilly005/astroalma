export interface TarotCard {
  id: string;
  name: string;
  arcana: "major" | "minor";
  suit?: "bastos" | "copas" | "espadas" | "oros";
  rank?: string;
  keywords: string[];
  upright: string;
  reversed: string;
  element: string;
}

export const TAROT_DECK: TarotCard[] = [
  {
    id: "major-00",
    name: "El Loco",
    arcana: "major",
    rank: "0",
    keywords: ["nuevos comienzos", "libertad", "valentía", "salto de fe"],
    upright:
      "El Loco te invita a dar ese paso que vienes posponiendo con el corazón en la mano. Tienes más preparación de la que crees, y lo que falta lo aprenderás caminando. Confía: el camino se abre para quien se atreve a empezar.",
    reversed:
      "Hay una energía de empezar algo, pero algo dentro de ti la está frenando o acelerando de más. Revisa si tu impulso es entusiasmo genuino o miedo disfrazado de prisa. Espera a sentir tierra firme bajo los pies antes de saltar.",
    element: "Aire",
  },
  {
    id: "major-01",
    name: "El Mago",
    arcana: "major",
    rank: "I",
    keywords: ["manifestación", "recursos", "voluntad", "creatividad"],
    upright:
      "El Mago te recuerda que ya tienes todo lo que necesitas: la idea, las manos y la voluntad. Es momento de dejar de esperar el momento perfecto y empezar a crear con lo que tienes hoy. Tu poder está en actuar, no en dudar.",
    reversed:
      "Tus talentos están dispersos o usados a medias, como herramientas olvidadas en un cajón. Pregúntate si estás esperando que alguien más valide lo que ya sabes hacer. Recupera tu enfoque y pon tu energía en una sola dirección.",
    element: "Aire",
  },
  {
    id: "major-02",
    name: "La Sacerdotisa",
    arcana: "major",
    rank: "II",
    keywords: ["intuición", "misterio", "escucha interior", "sabiduría"],
    upright:
      "La Sacerdotisa te pide que guardes silencio y escuches lo que tu intuición lleva tiempo susurrando. No todo se resuelve pensando más; algunas respuestas ya viven en ti, esperando que les hagas espacio. Medita, sueña y anota lo que surja.",
    reversed:
      "Estás ignorando tu voz interior y haciendo más ruido del necesario para no escucharla. Esa inquietud que sientes es tu intuición tocando la puerta. Detente, respira y pregúntate qué sabes en verdad.",
    element: "Agua",
  },
  {
    id: "major-03",
    name: "La Emperatriz",
    arcana: "major",
    rank: "III",
    keywords: ["abundancia", "cuidado maternal", "fertilidad creativa", "ternura"],
    upright:
      "La Emperatriz te envuelve en una energía de abundancia y cuidado: lo que atiendes con amor, crece. Cuídate a ti con la misma ternura con la que cuidas a los tuyos, y permite que tus proyectos maduren a su ritmo. La prosperidad florece donde hay paciencia.",
    reversed:
      "Estás dando tanto a los demás que te has quedado vacía por dentro. La Emperatriz invertida te pide que nutras primero tu propio jardín: descansa, come bien, pide ayuda. No puedes regar desde un cántaro seco.",
    element: "Tierra",
  },
  {
    id: "major-04",
    name: "El Emperador",
    arcana: "major",
    rank: "IV",
    keywords: ["estructura", "autoridad", "disciplina", "protección"],
    upright:
      "El Emperador te llama a poner orden: define tus límites, organiza tus pasos y sostén tu palabra como un muro firme. La disciplina que construyas hoy será el techo que proteja tu futuro. Toma las riendas con calma y firmeza.",
    reversed:
      "O estás siendo demasiado rígido contigo mismo, o has cedido tu autoridad a otros. Revisa dónde necesitas aflojar el control y dónde necesitas recuperarlo. La estructura debe sostenerte, no encerrarte.",
    element: "Fuego",
  },
  {
    id: "major-05",
    name: "El Hierofante (El Papa)",
    arcana: "major",
    rank: "V",
    keywords: ["tradición", "guía", "valores", "comunidad"],
    upright:
      "El Hierofante te recuerda el valor de lo que te enseñaron en casa: las tradiciones, los consejos de tus mayores y la fuerza de tu comunidad. Busca guía en alguien con experiencia o en tus propios valores. No tienes que inventarlo todo desde cero.",
    reversed:
      "Hay una regla, una creencia o una expectativa familiar que ya no te sirve y la sigues cargando. El Hierofante invertido te invita a cuestionar con respeto: quédate con lo que nutre y suelta lo que pesa. Tu camino puede honrar tus raíces y ser tuyo.",
    element: "Tierra",
  },
  {
    id: "major-06",
    name: "Los Enamorados",
    arcana: "major",
    rank: "VI",
    keywords: ["amor", "decisión del corazón", "unión", "valores compartidos"],
    upright:
      "Los Enamorados hablan de una conexión que importa: elige desde el corazón, no desde el miedo a quedarte solo. Si es una decisión, alinea lo que sientes con lo que valoras de verdad. El amor auténtico, en pareja o en proyecto, pide coherencia.",
    reversed:
      "Hay un desajuste entre lo que dices querer y lo que estás eligiendo. Revisa si esta relación o decisión refleja tus valores o solo tu comodidad. La armonía vuelve cuando te eres leal a ti primero.",
    element: "Aire",
  },
  {
    id: "major-07",
    name: "El Carro",
    arcana: "major",
    rank: "VII",
    keywords: ["avance", "determinación", "victoria", "dirección"],
    upright:
      "El Carro anuncia movimiento: después de la espera, por fin avanzas con fuerza. Mantén las riendas firmes y la mirada al frente, porque la victoria está en la constancia, no en la velocidad. Tu determinación te lleva a la meta.",
    reversed:
      "Sientes que tiras en varias direcciones a la vez y el carro no avanza. Define una sola meta y suelta las distracciones que te jalan. El impulso regresa cuando dejas de pelear contigo mismo.",
    element: "Agua",
  },
  {
    id: "major-08",
    name: "La Fuerza",
    arcana: "major",
    rank: "VIII",
    keywords: ["coraje", "paciencia", "dominio suave", "resiliencia"],
    upright:
      "La Fuerza no es rugir, es acariciar al león: tu poder está en la calma con la que enfrentas lo difícil. Sé paciente contigo y con la situación; la ternura firme logra lo que la prisa no puede. Tu resiliencia es más grande de lo que crees.",
    reversed:
      "Te sientes agotado y tu paciencia está al límite, como si el león interior rugiera sin control. No te exijas más: descansa y recarga antes de seguir. La fuerza vuelve cuando dejas de pelear contra tu propio cansancio.",
    element: "Fuego",
  },
  {
    id: "major-09",
    name: "El Ermitaño",
    arcana: "major",
    rank: "IX",
    keywords: ["introspección", "soledad elegida", "búsqueda interior", "pausa"],
    upright:
      "El Ermitaño te invita a retirarte un momento del ruido para escuchar tu propia lámpara interior. La soledad elegida no es abandono, es el espacio donde encuentras tus respuestas. Date este tiempo sin culpa: volverás más claro.",
    reversed:
      "Te has aislado más de lo sano, o evitas la introspección llenando cada minuto. El Ermitaño invertido te pide balance: un poco de silencio consciente, pero sin cerrar la puerta a quienes te quieren. Sal a la luz cuando estés listo.",
    element: "Tierra",
  },
  {
    id: "major-10",
    name: "La Rueda de la Fortuna",
    arcana: "major",
    rank: "X",
    keywords: ["cambio", "ciclos", "destino", "giro de suerte"],
    upright:
      "La Rueda está girando a tu favor: un ciclo se cierra y otro se abre con nuevas oportunidades. Lo que parecía estancado empieza a moverse. Aprovecha el impulso y mantén los pies en la tierra cuando la suerte sonría.",
    reversed:
      "Sientes que la rueda gira en tu contra y las cosas no salen como esperabas. Recuerda que los ciclos pasan: esto también cambiará. Enfócate en lo que sí puedes controlar y aguanta con fe el giro.",
    element: "Fuego",
  },
  {
    id: "major-11",
    name: "La Justicia",
    arcana: "major",
    rank: "XI",
    keywords: ["verdad", "equilibrio", "responsabilidad", "consecuencias"],
    upright:
      "La Justicia te pide mirar la situación con honestidad total: los hechos, no las historias que te cuentas. Actúa con integridad y las consecuencias serán justas. Si tienes un asunto legal o pendiente, la balanza se inclina hacia la verdad.",
    reversed:
      "Hay un desequilibrio: o estás siendo injusto contigo, o alguien no está jugando limpio. Revisa dónde has evadido tu responsabilidad o dónde te culpas de más. La verdad que evitas es la que te liberará.",
    element: "Aire",
  },
  {
    id: "major-12",
    name: "El Colgado",
    arcana: "major",
    rank: "XII",
    keywords: ["pausa", "nueva perspectiva", "sacrificio", "rendición"],
    upright:
      "El Colgado te pide detenerte y mirar todo desde otro ángulo, como quien se cuelga de cabeza y ve el mundo al revés. Lo que hoy parece un sacrificio mañana será una inversión. Suelta la necesidad de controlar y deja que la pausa te enseñe.",
    reversed:
      "Estás atorado en la espera sin aprender nada de ella, o te sacrificas por algo que ya no vale la pena. Pregúntate qué estás evitando decidir. A veces la pausa ya cumplió su propósito y toca bajar y caminar.",
    element: "Agua",
  },
  {
    id: "major-13",
    name: "La Muerte",
    arcana: "major",
    rank: "XIII",
    keywords: ["transformación", "finales", "renovación", "soltar"],
    upright:
      "La Muerte anuncia un final necesario: algo en tu vida ya cumplió su ciclo y aferrarte solo prolonga el dolor. Suelta con gratitud por lo que fue y abre espacio para lo que viene. La transformación duele, pero renacer siempre vale la pena.",
    reversed:
      "Te resistes a un cambio que ya es inevitable, como quien se aferra a una puerta que se cierra sola. Esa resistencia es lo que más duele, no el cambio en sí. Atrévete a soltar: del otro lado hay aire fresco.",
    element: "Agua",
  },
  {
    id: "major-14",
    name: "La Templanza",
    arcana: "major",
    rank: "XIV",
    keywords: ["equilibrio", "moderación", "sanación", "paciencia"],
    upright:
      "La Templanza te invita a mezclar con calma: ni todo trabajo ni todo descanso, ni todo dar ni todo guardar. La sanación llega a su ritmo, como el agua que se vierte despacio. Encuentra tu punto medio y la paz llegará sola.",
    reversed:
      "Estás en un extremo: exceso de trabajo, de preocupación o de descontrol, y tu cuerpo lo está sintiendo. Vuelve al centro con pequeños ajustes diarios. El equilibrio no se logra de golpe, se practica.",
    element: "Fuego",
  },
  {
    id: "major-15",
    name: "El Diablo",
    arcana: "major",
    rank: "XV",
    keywords: ["ataduras", "tentación", "sombras", "patrones tóxicos"],
    upright:
      "El Diablo señala una atadura que tú mismo puedes soltar: un hábito, una relación o un pensamiento que te tiene atrapado. Míralo de frente sin juzgarte; reconocer la cadena es el primer paso para romperla. Tú tienes más poder del que crees.",
    reversed:
      "Estás empezando a ver tus ataduras con claridad y a recuperar tu libertad, paso a paso. No te desanimes si recaes: cada intento te hace más fuerte. Sigue soltando; la luz ya se asoma.",
    element: "Tierra",
  },
  {
    id: "major-16",
    name: "La Torre",
    arcana: "major",
    rank: "XVI",
    keywords: ["cambio súbito", "revelación", "colapso", "liberación"],
    upright:
      "La Torre trae un sacudón: algo que creías sólido se tambalea o se revela una verdad que cambia todo. Aunque duela, este derrumbe limpia lo que estaba construido sobre arena. Lo que quede en pie será auténtico y tuyo.",
    reversed:
      "O estás evitando un cambio necesario que tarde o temprano llegará, o ya pasaste el sacudón y estás reconstruyendo despacio. Si lo evitas, hazlo consciente; si reconstruyes, hazlo sobre cimientos honestos esta vez.",
    element: "Fuego",
  },
  {
    id: "major-17",
    name: "La Estrella",
    arcana: "major",
    rank: "XVII",
    keywords: ["esperanza", "renovación", "inspiración", "fe"],
    upright:
      "Después de la tormenta, La Estrella te baña de esperanza: tus heridas están sanando y el futuro vuelve a brillar. Confía en tu camino y deja que tu luz natural guíe a otros. Este es un tiempo de renovación genuina.",
    reversed:
      "Tu esperanza está apagada y te cuesta creer que las cosas mejorarán. La Estrella invertida te pide reconectar con lo que te inspira, aunque sea en pequeño: una caminata, una canción, una oración. La fe se reenciende con gestos simples.",
    element: "Aire",
  },
  {
    id: "major-18",
    name: "La Luna",
    arcana: "major",
    rank: "XVIII",
    keywords: ["ilusión", "miedos", "sueños", "lo oculto"],
    upright:
      "La Luna ilumina tus miedos y tus sueños por igual: no todo lo que ves es lo que parece. Avanza despacio, verifica lo que te dicen y escucha tus sueños, que traen mensajes. La confusión pasará cuando amanezca.",
    reversed:
      "La niebla empieza a disiparse: un engaño se revela o un miedo pierde su poder sobre ti. Confía en lo que ahora ves con claridad y actúa en consecuencia. Saliste del bosque oscuro más sabio.",
    element: "Agua",
  },
  {
    id: "major-19",
    name: "El Sol",
    arcana: "major",
    rank: "XIX",
    keywords: ["alegría", "éxito", "vitalidad", "claridad"],
    upright:
      "El Sol brilla sobre ti con alegría plena: éxito, claridad y la simple dicha de estar vivo. Celebra tus logros con los tuyos y deja que tu vitalidad contagie. Este es uno de esos momentos dorados que se atesoran.",
    reversed:
      "Tu alegría está nublada por preocupaciones temporales, pero el sol sigue ahí detrás de las nubes. No dejes que un mal momento te robe la capacidad de celebrar lo bueno. La claridad regresa pronto.",
    element: "Fuego",
  },
  {
    id: "major-20",
    name: "El Juicio",
    arcana: "major",
    rank: "XX",
    keywords: ["despertar", "llamado", "perdón", "renacimiento"],
    upright:
      "El Juicio es tu llamado a despertar: una nueva versión de ti está naciendo y el pasado ya no te define. Perdónate, perdona y responde a ese propósito que te late en el pecho. Es tiempo de renacer.",
    reversed:
      "Escuchas el llamado pero te da miedo responder, o te juzgas tan duro que no te permites empezar de nuevo. Baja el volumen de la autocrítica: el perdón empieza contigo. El renacimiento espera tu sí.",
    element: "Fuego",
  },
  {
    id: "major-21",
    name: "El Mundo",
    arcana: "major",
    rank: "XXI",
    keywords: ["culminación", "plenitud", "logro", "cierre de ciclo"],
    upright:
      "El Mundo celebra tu logro: un ciclo importante se cierra con éxito y puedes sentirte pleno. Celebra con tu gente, agradece el camino recorrido y descansa antes del próximo capítulo. Lo hiciste, y lo hiciste bien.",
    reversed:
      "Estás muy cerca de la meta pero algo quedó incompleto: un detalle pendiente o un cierre que evitas. Atiende ese último paso con cuidado. La plenitud llega cuando cierras el ciclo de verdad.",
    element: "Tierra",
  },
  // ── BASTOS (Fuego) ──
  {
    id: "bastos-01",
    name: "As de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "As",
    keywords: ["chispa creativa", "oportunidad", "pasión", "nuevo impulso"],
    upright:
      "El As de Bastos enciende una chispa en ti: una idea, una oportunidad o un deseo que pide acción inmediata. No la dejes enfriar pensando demasiado; actúa con entusiasmo y el fuego hará el resto. Tu pasión es tu brújula ahora.",
    reversed:
      "La chispa está ahí pero le falta oxígeno: retrasos, dudas o energía dispersa la están apagando. Revisa qué te está drenando y protege tu entusiasmo. La oportunidad sigue viva, solo necesita tu atención.",
    element: "Fuego",
  },
  {
    id: "bastos-02",
    name: "Dos de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Dos",
    keywords: ["planificación", "decisión", "horizonte", "potencial"],
    upright:
      "El Dos de Bastos te muestra el mundo en tus manos: ya diste el primer paso y ahora toca decidir hacia dónde expandirte. Mira lejos, planifica con ambición y elige el camino que te emocione de verdad. Tu futuro se está dibujando ahora.",
    reversed:
      "Tienes el potencial pero te falta decidirte, o tus planes chocan con la realidad. Baja la mirada del horizonte y revisa los detalles prácticos. Un plan ajustado avanza más que un sueño perfecto.",
    element: "Fuego",
  },
  {
    id: "bastos-03",
    name: "Tres de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Tres",
    keywords: ["expansión", "progreso", "visión", "primeros frutos"],
    upright:
      "El Tres de Bastos confirma que tus barcos ya navegan: lo que sembraste empieza a dar frutos y el horizonte se abre. Mantén la visión y prepárate para crecer más de lo planeado. Tu esfuerzo está rindiendo.",
    reversed:
      "Los resultados tardan más de lo esperado y la espera te desespera. Revisa si tus expectativas eran realistas o si algo necesita ajuste. La expansión sigue en camino, solo pide más paciencia.",
    element: "Fuego",
  },
  {
    id: "bastos-04",
    name: "Cuatro de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Cuatro",
    keywords: ["celebración", "hogar", "estabilidad", "comunidad"],
    upright:
      "El Cuatro de Bastos es motivo de fiesta: una meta alcanzada, un hogar que se consolida, una comunidad que te sostiene. Celebra con los tuyos sin culpa; la alegría compartida es la recompensa del esfuerzo. Disfruta este momento de estabilidad.",
    reversed:
      "La celebración se pospone o la armonía en casa está tensa. Revisa qué necesita atención en tu hogar o tu círculo antes de seguir corriendo. La estabilidad se construye atendiendo los detalles.",
    element: "Fuego",
  },
  {
    id: "bastos-05",
    name: "Cinco de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Cinco",
    keywords: ["competencia", "conflicto", "desacuerdo", "tensión creativa"],
    upright:
      "El Cinco de Bastos muestra roces: opiniones que chocan, competencia o egos en juego. No todo conflicto es malo; esta tensión puede pulir las ideas si la manejas con respeto. Elige tus batallas y escucha antes de responder.",
    reversed:
      "El conflicto se está apagando o lo estás evitando a toda costa. Si ya pasó, aprende la lección; si lo evitas, pregúntate qué conversación pendiente necesitas tener. La paz real nace del diálogo, no del silencio.",
    element: "Fuego",
  },
  {
    id: "bastos-06",
    name: "Seis de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Seis",
    keywords: ["victoria", "reconocimiento", "confianza", "logro público"],
    upright:
      "El Seis de Bastos te corona: tu esfuerzo es reconocido y la victoria es tuya. Recibe los aplausos con humildad y deja que esta confianza te impulse a metas más grandes. Te lo ganaste a pulso.",
    reversed:
      "El reconocimiento tarda en llegar o sientes que tu logro pasó desapercibido. No dejes que la falta de aplausos apague tu orgullo: tú sabes lo que costó. La validación más importante es la tuya.",
    element: "Fuego",
  },
  {
    id: "bastos-07",
    name: "Siete de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Siete",
    keywords: ["defensa", "convicción", "resistencia", "posición firme"],
    upright:
      "El Siete de Bastos te pone en la cima defendiendo tu posición: otros cuestionan lo que construiste, pero tienes la razón de tu lado. Mantente firme con dignidad, sin bajar al nivel de la provocación. Tu convicción es tu mejor defensa.",
    reversed:
      "Te sientes abrumado defendiéndote de todos lados, o has cedido terreno que era tuyo. Elige bien dónde plantar cara y dónde soltar. No toda batalla merece tu energía.",
    element: "Fuego",
  },
  {
    id: "bastos-08",
    name: "Ocho de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Ocho",
    keywords: ["velocidad", "movimiento", "noticias", "acción rápida"],
    upright:
      "El Ocho de Bastos trae velocidad: noticias, mensajes y eventos que se aceleran de golpe. Mantente alerta y responde con agilidad; lo que estaba detenido se mueve por fin. Aprovecha este impulso sin pensarlo dos veces.",
    reversed:
      "Todo va más lento de lo que quisieras: retrasos, mensajes perdidos o planes atorados. No fuerces lo que no fluye; usa la pausa para afinar tu puntería. Cuando se destrabe, estarás listo.",
    element: "Fuego",
  },
  {
    id: "bastos-09",
    name: "Nueve de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Nueve",
    keywords: ["resistencia", "último esfuerzo", "defensa", "cansancio"],
    upright:
      "El Nueve de Bastos te encuentra cansado pero de pie: has peleado mucho y la meta está cerca. Este es el último empujón; protege tu energía y no bajes la guardia todavía. Tu resistencia está a punto de rendir frutos.",
    reversed:
      "El cansancio te está ganando y sientes que ya no puedes más. Permítete descansar de verdad antes de seguir; no es rendirse, es recargar. Pide apoyo: no tienes que sostenerlo todo solo.",
    element: "Fuego",
  },
  {
    id: "bastos-10",
    name: "Diez de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Diez",
    keywords: ["carga", "responsabilidad", "agotamiento", "delegar"],
    upright:
      "El Diez de Bastos muestra que cargas demasiado: responsabilidades que no son tuyas pesan sobre tus hombros. Es hora de soltar, delegar o decir que no. Llegar a la meta no sirve si llegas roto.",
    reversed:
      "Estás aprendiendo a soltar la carga o, por el contrario, te niegas a pedir ayuda aunque te hundas. Revisa qué puedes delegar hoy mismo. Compartir el peso no es debilidad, es sabiduría.",
    element: "Fuego",
  },
  {
    id: "bastos-11",
    name: "Sota de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Sota",
    keywords: ["entusiasmo", "exploración", "curiosidad", "nueva aventura"],
    upright:
      "La Sota de Bastos trae noticias emocionantes y ganas de explorar: un nuevo proyecto, un viaje o una idea que te enciende. Atrévete a probar sin miedo a equivocarte. La curiosidad de hoy es la maestría de mañana.",
    reversed:
      "Tu entusiasmo se dispersa en muchas direcciones o una noticia tarda en llegar. Enfoca tu curiosidad en una sola aventura a la vez. La energía sin dirección se desperdicia.",
    element: "Fuego",
  },
  {
    id: "bastos-12",
    name: "Caballero de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Caballero",
    keywords: ["aventura", "impulso", "carisma", "acción audaz"],
    upright:
      "El Caballero de Bastos galopa hacia ti con energía arrolladora: un cambio audaz, un viaje o una persona apasionada. Súbete a la aventura, pero mantén un ojo en el camino. La audacia bien dirigida abre puertas grandes.",
    reversed:
      "La impulsividad te puede meter en problemas: decisiones apresuradas o promesas que no podrás cumplir. Frena un poco y piensa antes de lanzarte. La pasión necesita un poco de freno para no quemarse.",
    element: "Fuego",
  },
  {
    id: "bastos-13",
    name: "Reina de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Reina",
    keywords: ["confianza", "magnetismo", "calidez", "liderazgo"],
    upright:
      "La Reina de Bastos te invita a brillar con confianza: tu calidez y tu carácter magnético abren caminos. Lidera con el corazón y sin pedir permiso. Cuando crees en ti, los demás también creen.",
    reversed:
      "Tu confianza está tambaleando o tu fuego se volvió exigencia con los demás. Reconecta con lo que te hace sentir poderosa sin apagar a nadie. Tu luz no necesita opacar a otra para brillar.",
    element: "Fuego",
  },
  {
    id: "bastos-14",
    name: "Rey de Bastos",
    arcana: "minor",
    suit: "bastos",
    rank: "Rey",
    keywords: ["visión", "liderazgo", "emprendimiento", "inspiración"],
    upright:
      "El Rey de Bastos es el líder visionario: piensa en grande, inspira a otros y convierte ideas en realidad. Es momento de tomar el mando de tu proyecto con audacia y generosidad. Tu visión puede mover montañas si la compartes.",
    reversed:
      "El liderazgo se tuerce: o impones tu visión sin escuchar, o has cedido tu poder a otros. Recupera tu autoridad con humildad y escucha a tu equipo. Un gran líder también sabe seguir.",
    element: "Fuego",
  },
  // ── COPAS (Agua) ──
  {
    id: "copas-01",
    name: "As de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "As",
    keywords: ["amor nuevo", "apertura emocional", "compasión", "bendición"],
    upright:
      "El As de Copas derrama amor nuevo sobre tu vida: una relación que florece, una amistad profunda o un amor propio que por fin despierta. Abre tu corazón sin miedo; lo que das con sinceridad regresa multiplicado. Este es un regalo del universo: recíbelo.",
    reversed:
      "Tu copa está bloqueada: emociones reprimidas o un amor que no fluye como quisieras. Pregúntate qué herida vieja te impide recibir cariño. Sana primero por dentro y el amor encontrará su camino.",
    element: "Agua",
  },
  {
    id: "copas-02",
    name: "Dos de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Dos",
    keywords: ["unión", "pareja", "armonía", "conexión mutua"],
    upright:
      "El Dos de Copas celebra una unión hermosa: dos corazones que se eligen y se respetan. Ya sea en el amor, la amistad o un socio, esta conexión se basa en la reciprocidad. Cuídala con presencia y honestidad.",
    reversed:
      "La armonía en una relación está tensa: malentendidos o un dar desigual. Habla con el corazón en la mano antes de que la distancia crezca. Toda unión sana se puede reparar con diálogo sincero.",
    element: "Agua",
  },
  {
    id: "copas-03",
    name: "Tres de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Tres",
    keywords: ["celebración", "amistad", "comunidad", "alegría compartida"],
    upright:
      "El Tres de Copas te llama a celebrar con tu gente: amigas, familia, comunidad que te quiere. La alegría se multiplica cuando se comparte. Date permiso de festejar lo bueno, por pequeño que parezca.",
    reversed:
      "Hay distancia con tu círculo o una celebración que no se siente genuina. Revisa si has descuidado a tus amistades por el trabajo o la rutina. Reconectar no cuesta tanto como crees.",
    element: "Agua",
  },
  {
    id: "copas-04",
    name: "Cuatro de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Cuatro",
    keywords: ["apatía", "reflexión", "oportunidad ignorada", "descontento"],
    upright:
      "El Cuatro de Copas te encuentra mirando al vacío, sin ver la copa que se te ofrece. La apatía nubla lo bueno que ya tienes. Levanta la mirada: una oportunidad emocional o creativa espera tu atención.",
    reversed:
      "Sales de la apatía y empiezas a valorar lo que tienes, o aceptas por fin esa oportunidad que ignorabas. El descontento se disipa cuando decides actuar. Tu energía emocional se renueva.",
    element: "Agua",
  },
  {
    id: "copas-05",
    name: "Cinco de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Cinco",
    keywords: ["duelo", "pérdida", "arrepentimiento", "lo que queda"],
    upright:
      "El Cinco de Copas reconoce tu dolor: una pérdida o decepción que aún duele. Llora lo que necesites, pero no te quedes mirando solo las copas derramadas. Detrás de ti quedan dos copas en pie: todavía hay amor y esperanza.",
    reversed:
      "El duelo empieza a ceder y ves de nuevo lo que queda en pie. El perdón, hacia otros o hacia ti, abre la puerta a la sanación. Estás listo para voltear la mirada hacia adelante.",
    element: "Agua",
  },
  {
    id: "copas-06",
    name: "Seis de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Seis",
    keywords: ["nostalgia", "infancia", "reencuentro", "inocencia"],
    upright:
      "El Seis de Copas trae dulzura del pasado: un reencuentro, un recuerdo feliz o la inocencia de tu niño interior. Permite que la nostalgia te abrace sin atraparte. A veces el pasado trae justo el cariño que necesitas hoy.",
    reversed:
      "Vives demasiado en el pasado o idealizas lo que fue. Honra tus recuerdos, pero no dejes que te impidan vivir el presente. Lo mejor de tu historia puede inspirar tu futuro, no reemplazarlo.",
    element: "Agua",
  },
  {
    id: "copas-07",
    name: "Siete de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Siete",
    keywords: ["opciones", "fantasía", "confusión", "ilusiones"],
    upright:
      "El Siete de Copas te muestra muchas copas llenas de posibilidades, pero no todas son reales. Distingue el sueño viable de la fantasía antes de elegir. Enfoca tu corazón en lo que de verdad quieres, no en lo que brilla más.",
    reversed:
      "La niebla se aclara y por fin ves tus opciones con realismo. Elige con los pies en la tierra y comprométete con una sola copa. La claridad que ganaste vale oro.",
    element: "Agua",
  },
  {
    id: "copas-08",
    name: "Ocho de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Ocho",
    keywords: ["alejarse", "búsqueda", "dejar atrás", "camino interior"],
    upright:
      "El Ocho de Copas te pide la valentía de alejarte de lo que ya no te llena, aunque duela dejarlo. Hay algo más auténtico esperándote más adelante. Confía en tu camino interior: irte también es un acto de amor propio.",
    reversed:
      "Dudas si irte o quedarte, o intentas volver a algo que ya soltaste. Escucha tu corazón con honestidad: ¿te quedas por amor o por miedo? La respuesta que evitas es la que necesitas.",
    element: "Agua",
  },
  {
    id: "copas-09",
    name: "Nueve de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Nueve",
    keywords: ["deseo cumplido", "satisfacción", "gratitud", "bienestar"],
    upright:
      "El Nueve de Copas es la carta de los deseos cumplidos: lo que pediste con el corazón llega a tu puerta. Disfruta esta satisfacción con gratitud y compártela. Te lo mereces, de verdad.",
    reversed:
      "Conseguiste lo que querías pero no te llena como esperabas, o tu deseo se demora. Revisa si lo que buscas afuera en realidad vive adentro. La gratitud por lo presente abre la puerta a más.",
    element: "Agua",
  },
  {
    id: "copas-10",
    name: "Diez de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Diez",
    keywords: ["felicidad familiar", "plenitud", "armonía", "legado de amor"],
    upright:
      "El Diez de Copas pinta el cuadro de la felicidad plena: familia unida, amor correspondido, paz en el hogar. Este es el verdadero éxito: los tuyos contigo, riendo bajo el mismo cielo. Atesora y cultiva este momento.",
    reversed:
      "La armonía familiar está tensa o tus expectativas de felicidad no calzan con la realidad. Trabaja la comunicación en casa sin idealizar. La plenitud se construye día a día, no se exige.",
    element: "Agua",
  },
  {
    id: "copas-11",
    name: "Sota de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Sota",
    keywords: ["sensibilidad", "mensaje del corazón", "creatividad", "ternura"],
    upright:
      "La Sota de Copas trae un mensaje tierno: una declaración, una disculpa o una chispa creativa que nace del corazón. Recíbelo con dulzura y permite que tu sensibilidad te guíe. Lo vulnerable también es valiente.",
    reversed:
      "Tus emociones están a flor de piel o un mensaje del corazón se malinterpreta. Tómate un momento antes de reaccionar y protege tu sensibilidad. No todo merece tu energía emocional.",
    element: "Agua",
  },
  {
    id: "copas-12",
    name: "Caballero de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Caballero",
    keywords: ["romance", "propuesta", "idealismo", "corazón abierto"],
    upright:
      "El Caballero de Copas llega con el corazón en la mano: una propuesta romántica, una oferta sincera o un gesto que te conmueve. Déjate conquistar por la belleza del momento. El romance también es una forma de valentía.",
    reversed:
      "Cuidado con las promesas vacías o el idealismo que nubla tu juicio: no todo lo que brilla es amor verdadero. Mira las acciones, no solo las palabras. Tu corazón merece hechos, no solo poesía.",
    element: "Agua",
  },
  {
    id: "copas-13",
    name: "Reina de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Reina",
    keywords: ["intuición", "compasión", "calma emocional", "cuidado"],
    upright:
      "La Reina de Copas te envuelve en calma compasiva: tu intuición es tu superpoder y tu ternura sana a quienes te rodean. Escucha tu corazón y actúa desde la calma. Cuidar a otros empieza por escucharte a ti.",
    reversed:
      "Estás absorbiendo las emociones de todos y te has vaciado por dentro. Pon límites amorosos: no puedes salvar a nadie desde el agotamiento. Tu compasión también te incluye a ti.",
    element: "Agua",
  },
  {
    id: "copas-14",
    name: "Rey de Copas",
    arcana: "minor",
    suit: "copas",
    rank: "Rey",
    keywords: ["madurez emocional", "diplomacia", "equilibrio", "consejo sabio"],
    upright:
      "El Rey de Copas domina sus emociones sin reprimirlas: siente profundo y actúa con sabiduría. Sé el puerto seguro para los tuyos y para ti. Tu madurez emocional es tu mayor fortaleza ahora.",
    reversed:
      "Tus emociones te están gobernando o las estás escondiendo bajo una calma fingida. Permítete sentir sin dejarte arrastrar. Buscar apoyo no te hace menos fuerte, te hace más sabio.",
    element: "Agua",
  },
  // ── ESPADAS (Aire) ──
  {
    id: "espadas-01",
    name: "As de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "As",
    keywords: ["claridad mental", "verdad", "decisión", "nueva idea"],
    upright:
      "El As de Espadas corta la confusión como un rayo: la verdad se revela y tu mente por fin ve claro. Es momento de decidir con la cabeza fría y decir lo que piensas. La claridad es poder, úsala con honestidad.",
    reversed:
      "Tu mente está nublada o una verdad se te escapa entre excusas. No tomes decisiones importantes hasta que la niebla se disipe. La claridad llegará si dejas de evitar lo obvio.",
    element: "Aire",
  },
  {
    id: "espadas-02",
    name: "Dos de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Dos",
    keywords: ["indecisión", "punto muerto", "tregua", "elección difícil"],
    upright:
      "El Dos de Espadas te muestra en punto muerto, con los ojos vendados ante una decisión. La tregua no puede durar para siempre: reúne la información que te falta y elige. No decidir también es una decisión.",
    reversed:
      "La indecisión se rompe: por fin ves claro y estás listo para elegir. Confía en lo que ahora sabes y actúa. El alivio de decidir supera el miedo a equivocarte.",
    element: "Aire",
  },
  {
    id: "espadas-03",
    name: "Tres de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Tres",
    keywords: ["dolor", "traición", "verdad dolorosa", "duelo"],
    upright:
      "El Tres de Espadas nombra tu dolor: una traición, una verdad que duele o un corazón roto. No minimices lo que sientes; el dolor reconocido sana más rápido. La lluvia pasa y el corazón vuelve a latir fuerte.",
    reversed:
      "La herida empieza a cerrar: el perdón o la aceptación están sanando tu corazón. Suelta el resentimiento que aún cargas; pesa más que el dolor original. Estás listo para amar de nuevo.",
    element: "Aire",
  },
  {
    id: "espadas-04",
    name: "Cuatro de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Cuatro",
    keywords: ["descanso", "recuperación", "pausa mental", "retiro"],
    upright:
      "El Cuatro de Espadas te ordena descansar: tu mente necesita silencio para recuperarse. Duerme, desconéctate, date un respiro sin culpa. Volverás más fuerte si te permites parar ahora.",
    reversed:
      "El descanso se acabó o lo estás evitando: o es hora de volver a la acción, o tu cuerpo te pide a gritos una pausa que no le das. Escucha las señales antes de que el agotamiento decida por ti.",
    element: "Aire",
  },
  {
    id: "espadas-05",
    name: "Cinco de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Cinco",
    keywords: ["conflicto", "derrota", "orgullo", "victoria vacía"],
    upright:
      "El Cinco de Espadas advierte sobre ganar a cualquier costo: una discusión donde nadie sale ganando de verdad. Pregúntate si tener la razón vale más que la relación. A veces retirarse es la victoria más sabia.",
    reversed:
      "El conflicto se resuelve o decides soltar la necesidad de ganar. El perdón y la reconciliación están a tu alcance. Deja el orgullo a un lado y recupera tu paz.",
    element: "Aire",
  },
  {
    id: "espadas-06",
    name: "Seis de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Seis",
    keywords: ["transición", "dejar atrás", "sanación", "nuevo rumbo"],
    upright:
      "El Seis de Espadas te lleva hacia aguas más calmadas: dejas atrás lo difícil y avanzas hacia la sanación. El viaje puede ser lento, pero cada remada te aleja del dolor. Confía en el nuevo rumbo.",
    reversed:
      "Te resistes a soltar el pasado o el viaje se complica con asuntos pendientes. Atiende lo que te ata antes de zarpar. No puedes navegar ligero cargando lo viejo.",
    element: "Aire",
  },
  {
    id: "espadas-07",
    name: "Siete de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Siete",
    keywords: ["estrategia", "engaño", "astucia", "actuar en solitario"],
    upright:
      "El Siete de Espadas te pide astucia: a veces hay que moverse en silencio y con estrategia. Pero revisa tus intenciones: que la inteligencia no se vuelva engaño. Actúa con ingenio, pero con la conciencia limpia.",
    reversed:
      "Un engaño sale a la luz, el tuyo o el de otro, o decides dejar las tácticas dudosas. La honestidad, aunque cueste, siempre es el camino más corto. Enfrenta la verdad de frente.",
    element: "Aire",
  },
  {
    id: "espadas-08",
    name: "Ocho de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Ocho",
    keywords: ["limitación mental", "victimismo", "miedo", "prisión interior"],
    upright:
      "El Ocho de Espadas revela que tu prisión es mental: los miedos te atan más que la realidad. Mira bien: las ataduras están flojas y puedes liberarte. El primer paso es creer que puedes.",
    reversed:
      "Te liberas de tus miedos y recuperas tu poder: las vendas caen y ves tu fuerza. Sigue caminando hacia tu libertad. Ya no eres prisionero de tus pensamientos.",
    element: "Aire",
  },
  {
    id: "espadas-09",
    name: "Nueve de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Nueve",
    keywords: ["ansiedad", "insomnio", "preocupación", "miedos nocturnos"],
    upright:
      "El Nueve de Espadas nombra esas noches sin dormir: la ansiedad magnifica tus miedos en la oscuridad. Recuerda que de día las cosas se ven distintas. Habla de lo que te preocupa; compartirlo le quita poder.",
    reversed:
      "La ansiedad empieza a ceder: encuentras formas de calmar tu mente o pides la ayuda que necesitabas. Sigue cuidando tu paz mental. Las noches difíciles también pasan.",
    element: "Aire",
  },
  {
    id: "espadas-10",
    name: "Diez de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Diez",
    keywords: ["final doloroso", "traición", "fondo", "nuevo amanecer"],
    upright:
      "El Diez de Espadas marca el punto más bajo: un final doloroso que ya no puede empeorar. Y esa es la buena noticia: desde aquí solo se sube. El amanecer llega después de la noche más oscura; levántate despacio.",
    reversed:
      "Te recuperas del golpe y el amanecer asoma: la peor parte ya pasó. Aprende la lección sin quedarte en la herida. Tu resiliencia te está sacando adelante.",
    element: "Aire",
  },
  {
    id: "espadas-11",
    name: "Sota de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Sota",
    keywords: ["curiosidad mental", "vigilancia", "nueva información", "agudeza"],
    upright:
      "La Sota de Espadas afila tu mente: nueva información, una idea brillante o la necesidad de estar alerta. Investiga, pregunta y verifica antes de actuar. Tu agudeza mental es tu mejor aliada ahora.",
    reversed:
      "Cuidado con los chismes, la información incompleta o hablar sin pensar. Verifica tus fuentes y mide tus palabras. La prisa mental lleva a errores evitables.",
    element: "Aire",
  },
  {
    id: "espadas-12",
    name: "Caballero de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Caballero",
    keywords: ["acción rápida", "determinación", "franqueza", "cambio veloz"],
    upright:
      "El Caballero de Espadas carga con determinación total: actúa rápido, habla claro y no se detiene. Aprovecha este impulso para resolver lo pendiente. Tu franqueza abre caminos, úsala con un poco de tacto.",
    reversed:
      "La prisa te juega en contra: decisiones impulsivas o palabras hirientes que luego lamentas. Frena, respira y piensa antes de lanzarte. La velocidad sin dirección es solo caos.",
    element: "Aire",
  },
  {
    id: "espadas-13",
    name: "Reina de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Reina",
    keywords: ["claridad", "independencia", "verdad", "sabiduría"],
    upright:
      "La Reina de Espadas ve la verdad sin adornos y la dice con elegancia: tu claridad mental es tu corona. Pon límites con palabras precisas y no temas estar sola en tu criterio. La sabiduría que ganaste con dolor ahora te protege.",
    reversed:
      "Tu claridad se volvió frialdad o estás usando la verdad como arma. Suaviza el mensaje sin traicionar el fondo. Ser honesta no requiere ser dura.",
    element: "Aire",
  },
  {
    id: "espadas-14",
    name: "Rey de Espadas",
    arcana: "minor",
    suit: "espadas",
    rank: "Rey",
    keywords: ["autoridad intelectual", "justicia", "lógica", "liderazgo mental"],
    upright:
      "El Rey de Espadas gobierna con la mente: lógica, justicia y palabra precisa. Toma decisiones basadas en hechos y comunícalas con autoridad serena. Tu intelecto es tu trono; úsalo con ética.",
    reversed:
      "El poder mental se tuerce: manipulación, frialdad o abuso de autoridad intelectual. Revisa si estás usando tu inteligencia para controlar en vez de guiar. La verdadera autoridad no necesita imponerse.",
    element: "Aire",
  },
  // ── OROS (Tierra) ──
  {
    id: "oros-01",
    name: "As de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "As",
    keywords: ["oportunidad material", "prosperidad", "nuevo proyecto", "semilla"],
    upright:
      "El As de Oros planta una semilla de prosperidad en tus manos: una oportunidad de trabajo, dinero o proyecto con futuro real. Tómala con seriedad y cultívala con constancia. Lo que siembres hoy con disciplina florecerá.",
    reversed:
      "La oportunidad se retrasa o no es tan sólida como parece: revisa los detalles antes de invertir tu tiempo o dinero. No es un no definitivo, es un todavía no. Prepara el terreno mientras tanto.",
    element: "Tierra",
  },
  {
    id: "oros-02",
    name: "Dos de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Dos",
    keywords: ["balance", "adaptabilidad", "múltiples tareas", "flexibilidad"],
    upright:
      "El Dos de Oros te ve haciendo malabares con gracia: trabajo, familia, pendientes, todo en el aire. Sigue adaptándote con flexibilidad y prioriza lo esencial. El equilibrio no es perfecto, es en movimiento.",
    reversed:
      "Los malabares se caen: demasiadas cosas a la vez y algo importante se descuida. Suelta una pelota antes de que se caigan todas. Pedir ayuda también es una forma de equilibrio.",
    element: "Tierra",
  },
  {
    id: "oros-03",
    name: "Tres de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Tres",
    keywords: ["trabajo en equipo", "maestría", "reconocimiento", "colaboración"],
    upright:
      "El Tres de Oros celebra tu oficio: tu trabajo bien hecho es reconocido y la colaboración rinde frutos. Sigue perfeccionando tu arte y comparte lo que sabes. La maestría se construye con humildad y constancia.",
    reversed:
      "El trabajo en equipo falla: falta de comunicación o esfuerzos no reconocidos. Aclara roles y expectativas antes de seguir. Tu talento merece ser visto y valorado.",
    element: "Tierra",
  },
  {
    id: "oros-04",
    name: "Cuatro de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Cuatro",
    keywords: ["seguridad", "aferramiento", "control", "estabilidad"],
    upright:
      "El Cuatro de Oros te aferra a lo seguro: ahorras, proteges lo tuyo y buscas estabilidad. Está bien cuidar tus recursos, pero no dejes que el miedo a perder te impida vivir. La seguridad también necesita un poco de soltura.",
    reversed:
      "O te aferras demasiado por miedo, o por fin sueltas el control sobre el dinero. Revisa si tu relación con lo material nace de la prudencia o del temor. Compartir un poco también es prosperar.",
    element: "Tierra",
  },
  {
    id: "oros-05",
    name: "Cinco de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Cinco",
    keywords: ["dificultad económica", "inseguridad", "aislamiento", "ayuda disponible"],
    upright:
      "El Cinco de Oros reconoce un momento duro: el dinero no alcanza o te sientes solo en la dificultad. Pero mira: la ayuda está más cerca de lo que crees. Pide apoyo sin vergüenza; nadie sale solo de la tormenta.",
    reversed:
      "La dificultad económica empieza a ceder: encuentras ayuda, un ingreso o una salida. Sigue cuidando cada peso mientras te recuperas. Lo peor ya pasó; ahora toca reconstruir con sabiduría.",
    element: "Tierra",
  },
  {
    id: "oros-06",
    name: "Seis de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Seis",
    keywords: ["generosidad", "dar y recibir", "equilibrio", "apoyo"],
    upright:
      "El Seis de Oros habla del flujo generoso: das con el corazón o recibes ayuda en el momento justo. Mantén el equilibrio entre dar y recibir; ambas son bendiciones. La generosidad siempre regresa.",
    reversed:
      "El dar está desequilibrado: das demasiado sin recibir, o recibes con condiciones. Revisa tus deudas, las de dinero y las del alma. La generosidad sana no empobrece a quien da.",
    element: "Tierra",
  },
  {
    id: "oros-07",
    name: "Siete de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Siete",
    keywords: ["paciencia", "evaluación", "inversión", "cosecha futura"],
    upright:
      "El Siete de Oros te invita a mirar tu cosecha con paciencia: has sembrado bien y los frutos vienen en camino. Evalúa tu progreso sin ansiedad. La buena siembra siempre rinde a su tiempo.",
    reversed:
      "La impaciencia te hace dudar de tu inversión o cosechas menos de lo esperado. Revisa tu estrategia con honestidad: ¿qué ajustarías? Todavía estás a tiempo de corregir el rumbo.",
    element: "Tierra",
  },
  {
    id: "oros-08",
    name: "Ocho de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Ocho",
    keywords: ["dedicación", "aprendizaje", "oficio", "mejora continua"],
    upright:
      "El Ocho de Oros honra tu dedicación: cada día perfeccionas tu oficio con disciplina silenciosa. Sigue aprendiendo y puliendo tu arte; la maestría se nota. Tu constancia es tu mejor inversión.",
    reversed:
      "Trabajas mucho pero sin avanzar, o la perfección te paraliza. Revisa si tu esfuerzo va en la dirección correcta. A veces trabajar menos pero mejor rinde más.",
    element: "Tierra",
  },
  {
    id: "oros-09",
    name: "Nueve de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Nueve",
    keywords: ["independencia", "logro personal", "autosuficiencia", "disfrute"],
    upright:
      "El Nueve de Oros celebra tu independencia: lo que tienes lo ganaste con tu propio esfuerzo. Disfruta los frutos de tu trabajo sin culpa. La autosuficiencia que construiste es tu mayor orgullo.",
    reversed:
      "Dependes más de lo que quisieras de otros, o tu éxito se siente vacío. Revisa qué te daría verdadera independencia. El logro más valioso es el que te da libertad.",
    element: "Tierra",
  },
  {
    id: "oros-10",
    name: "Diez de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Diez",
    keywords: ["legado", "riqueza familiar", "estabilidad", "tradición"],
    upright:
      "El Diez de Oros es la plenitud material y familiar: estabilidad que se hereda, un hogar próspero, un legado que honra a tus raíces. Lo que construyes hoy beneficia a los que vienen. La verdadera riqueza se comparte en familia.",
    reversed:
      "Las finanzas familiares están tensas o un legado trae conflictos. Habla claro sobre dinero con los tuyos antes de que crezca el problema. La estabilidad se protege con comunicación honesta.",
    element: "Tierra",
  },
  {
    id: "oros-11",
    name: "Sota de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Sota",
    keywords: ["oportunidad práctica", "estudio", "nuevo proyecto", "paciencia"],
    upright:
      "La Sota de Oros trae una oportunidad concreta: un curso, un trabajo o un proyecto que vale la pena. Acéptala con humildad y dedícate a aprender. Los grandes logros empiezan con pasos pequeños y constantes.",
    reversed:
      "Una oportunidad se escapa por falta de preparación o procrastinas lo importante. Ponte al día con tus pendientes prácticos. La disciplina de hoy es la suerte de mañana.",
    element: "Tierra",
  },
  {
    id: "oros-12",
    name: "Caballero de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Caballero",
    keywords: ["constancia", "responsabilidad", "trabajo duro", "confiabilidad"],
    upright:
      "El Caballero de Oros avanza lento pero seguro: su palabra es un contrato y su trabajo, garantía. Sé esa persona confiable en tu trabajo y tus compromisos. La constancia humilde construye imperios.",
    reversed:
      "Te estancaste en la rutina o tu perfeccionismo frena el avance. Revisa si tu cautela es prudencia o miedo disfrazado. A veces hay que arriesgar un poco para crecer.",
    element: "Tierra",
  },
  {
    id: "oros-13",
    name: "Reina de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Reina",
    keywords: ["abundancia práctica", "cuidado del hogar", "sensatez", "prosperidad"],
    upright:
      "La Reina de Oros combina prosperidad y calidez: maneja el dinero con sensatez y el hogar con amor. Crea belleza y seguridad a tu alrededor con lo que tienes. Tu practicidad es una forma de amor.",
    reversed:
      "Descuidas tu bienestar por atender todo lo demás, o el dinero te genera ansiedad. Vuelve a lo básico: ordena tus finanzas y tu descanso. Cuidarte también es una inversión.",
    element: "Tierra",
  },
  {
    id: "oros-14",
    name: "Rey de Oros",
    arcana: "minor",
    suit: "oros",
    rank: "Rey",
    keywords: ["éxito material", "liderazgo", "seguridad", "generosidad próspera"],
    upright:
      "El Rey de Oros corona tu esfuerzo con éxito sólido: seguridad material ganada con trabajo honesto. Lidera con generosidad y comparte tu abundancia. La prosperidad con propósito es la más duradera.",
    reversed:
      "El éxito se tambalea por avaricia o decisiones imprudentes con el dinero. Revisa tus prioridades: ¿el dinero te sirve a ti o tú le sirves a él? La verdadera riqueza no se mide solo en cuentas.",
    element: "Tierra",
  },
];
