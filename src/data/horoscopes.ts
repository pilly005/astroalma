export type SignId = "aries" | "tauro" | "geminis" | "cancer" | "leo" | "virgo" | "libra" | "escorpio" | "sagitario" | "capricornio" | "acuario" | "piscis";

export interface DailyHoroscope {
  text: string;
  amor: number;
  trabajo: number;
  bienestar: number;
  ritual: string;
  color: string;
  numero: number;
}

export const HOROSCOPE_SEEDS: Record<SignId, DailyHoroscope[]> = {
  aries: [
    {
      text: "Tu fuego interno arde con más fuerza hoy, Aries. Una decisión que venías posponiendo en el trabajo por fin pide tu valentía: dala de frente, sin dudar. La luna acompaña a quienes actúan con el corazón encendido.",
      amor: 78, trabajo: 92, bienestar: 74,
      ritual: "Enciende una vela roja antes de salir y declara en voz alta tu intención del día.",
      color: "rojo", numero: 7,
    },
    {
      text: "Hoy el amor te pide bajar la velocidad, mi Aries. Esa persona que te acelera el corazón necesita tus palabras suaves, no tus conquistas. Escucha de verdad: detrás de su silencio hay un pedido de cercanía.",
      amor: 88, trabajo: 65, bienestar: 70,
      ritual: "Escribe una nota corta a quien amas, sin pedir nada a cambio.",
      color: "coral", numero: 21,
    },
    {
      text: "La familia te necesita hoy con tu lado protector, no con tu espada. Alguien cercano guarda una preocupación que solo confía en ti; abre la conversación con calma. Tu energía de líder también sabe abrazar.",
      amor: 72, trabajo: 68, bienestar: 80,
      ritual: "Prepara algo de comer para compartir en familia, aunque sea sencillo.",
      color: "terracota", numero: 33,
    },
    {
      text: "El dinero responde a tu iniciativa hoy: esa idea que rondaba tu cabeza merece un primer paso concreto. Llama, cotiza, pregunta; tu valentía abre puertas que la espera no toca. Cuida solo no firmar con prisa.",
      amor: 64, trabajo: 90, bienestar: 66,
      ritual: "Anota en papel tus metas económicas del mes y guárdalo en tu cartera.",
      color: "ámbar", numero: 9,
    },
    {
      text: "Tu cuerpo te está pidiendo movimiento, Aries, y hoy es el día de obedecer. Una caminata al sol, bailar en la cocina, subir las escaleras: quema esa energía estancada. Descansarás mejor esta noche.",
      amor: 70, trabajo: 71, bienestar: 93,
      ritual: "Haz 15 minutos de movimiento intenso y termina con tres respiraciones profundas.",
      color: "naranja", numero: 45,
    },
    {
      text: "Una amistad del pasado resurge hoy con un mensaje inesperado. Atiéndela sin prisa: las viejas conexiones traen noticias que tu presente necesita. Tu lealtad es tu mejor carta.",
      amor: 76, trabajo: 63, bienestar: 82,
      ritual: "Llama a esa persona que no ves hace tiempo y pregúntale cómo está, de corazón.",
      color: "turquesa", numero: 12,
    },
    {
      text: "Hoy es día de sembrar algo nuevo en tu vida interior, Aries. La impulsividad que te define también puede volverse sabiduría si la pausas un momento. Medita cinco minutos bajo la luna de esta noche y pregunta: ¿qué quiero cultivar este mes?",
      amor: 74, trabajo: 77, bienestar: 89,
      ritual: "Escribe tres intenciones para el mes y léelas en voz alta a la luna.",
      color: "plateado", numero: 28,
    },
  ],
  tauro: [
    {
      text: "Tu constancia hoy rinde frutos, Tauro. Lo que sembraste con paciencia en el trabajo empieza a mostrar sus primeros brotes verdes. Sigue tu ritmo: la prisa es de otros, los resultados son tuyos.",
      amor: 71, trabajo: 91, bienestar: 78,
      ritual: "Riega una planta mientras agradeces en voz alta algo que construiste este año.",
      color: "verde", numero: 44,
    },
    {
      text: "El amor te pide presencia hoy, no promesas. Una cena tranquila, una mano sostenida, un momento sin pantallas: eso es lo que tu persona necesita de ti. Tu ternura silenciosa habla más fuerte que mil palabras.",
      amor: 90, trabajo: 66, bienestar: 75,
      ritual: "Cocina algo con amor y compártelo sin distracciones.",
      color: "rosa", numero: 6,
    },
    {
      text: "La familia es tu templo hoy, Tauro. Una llamada a tu madre o a quien te crio trae paz a los dos. Hay tradiciones que solo tú mantienes vivas: honra una de ellas esta semana.",
      amor: 79, trabajo: 64, bienestar: 84,
      ritual: "Prepara la receta familiar que más te conecta con tu infancia.",
      color: "crema", numero: 18,
    },
    {
      text: "Las finanzas se estabilizan si hoy evitas el gasto impulsivo. Revisa tus cuentas con calma: tu instinto para el dinero es fino cuando no lo nublas con caprichos. Un pequeño ahorro hoy es una gran tranquilidad mañana.",
      amor: 68, trabajo: 79, bienestar: 72,
      ritual: "Separa un poco de dinero en un sobre y escríbele tu meta.",
      color: "esmeralda", numero: 52,
    },
    {
      text: "Tu cuerpo pide hoy lo que tú sabes darle: buena comida, descanso digno, ritmo pausado. Honra tus sentidos: una siesta, un baño tibio, algo rico al paladar. Cuidarte no es lujo, es tu naturaleza.",
      amor: 73, trabajo: 62, bienestar: 94,
      ritual: "Date un baño tibio con sal y termina con crema en las manos.",
      color: "lavanda", numero: 30,
    },
    {
      text: "Una amistad necesita tu hombro firme hoy. Tú no das consejos vacíos: das presencia, y eso es justo lo que falta. Escucha, abraza, quédate un rato más.",
      amor: 81, trabajo: 67, bienestar: 77,
      ritual: "Invita a un amigo a tomar café y escúchalo sin mirar el teléfono.",
      color: "cobre", numero: 63,
    },
    {
      text: "Hoy tu crecimiento pide soltar el control, Tauro. No todo tiene que salir perfecto para salir bien. Confía en el proceso como confías en la tierra: lo sembrado a su tiempo florece.",
      amor: 75, trabajo: 83, bienestar: 87,
      ritual: "Escribe algo que necesitas soltar y entiérralo en una maceta.",
      color: "marrón", numero: 8,
    },
  ],
  geminis: [
    {
      text: "Tu mente hoy es un relámpago, Géminis, y el trabajo lo nota. Esa idea que sueltas en una conversación puede convertirse en proyecto si la anotas y la compartes con quien decide. Habla: tu palabra hoy abre puertas.",
      amor: 66, trabajo: 93, bienestar: 68,
      ritual: "Anota tus tres mejores ideas del día en un cuaderno antes de dormir.",
      color: "amarillo", numero: 11,
    },
    {
      text: "En el amor, hoy menos palabras y más gestos, mi Géminis. Tu persona quiere sentirte cerca, no escucharte brillante. Un mensaje inesperado a mitad del día vale más que un discurso.",
      amor: 86, trabajo: 64, bienestar: 71,
      ritual: "Mándale un mensaje de voz corto diciendo algo bonito sin motivo.",
      color: "celeste", numero: 22,
    },
    {
      text: "La familia te trae hoy una noticia que merece tu atención completa. Deja el teléfono, mira a los ojos, pregunta dos veces. Tu curiosidad amorosa es el pegamento de tu gente.",
      amor: 78, trabajo: 61, bienestar: 76,
      ritual: "Organiza una llamada grupal con tu familia esta noche.",
      color: "durazno", numero: 3,
    },
    {
      text: "El dinero hoy se mueve con información: pregunta, compara, negocia. Tu habilidad para conectar datos te da ventaja en cualquier trato. Solo evita comprometerte de palabra en algo que no revisaste por escrito.",
      amor: 63, trabajo: 85, bienestar: 69,
      ritual: "Revisa tus suscripciones y cancela una que ya no uses.",
      color: "gris", numero: 47,
    },
    {
      text: "Tu energía mental está a mil hoy, Géminis: dale salida sana. Camina mientras hablas por teléfono, baila mientras cocinas. Si tu cuerpo se mueve, tu mente se ordena sola.",
      amor: 69, trabajo: 70, bienestar: 90,
      ritual: "Sal a caminar 20 minutos sin audífonos y observa tu alrededor.",
      color: "menta", numero: 55,
    },
    {
      text: "Una amistad nueva puede nacer hoy de una conversación cualquiera. Sé tú: pregunta, ríe, cuenta esa historia. Tu encanto social hoy está en su punto más alto.",
      amor: 80, trabajo: 72, bienestar: 74,
      ritual: "Saluda a alguien nuevo hoy y pregúntale algo genuino.",
      color: "fucsia", numero: 19,
    },
    {
      text: "Hoy tu alma pide silencio, Géminis, aunque te cueste creerlo. Cinco minutos sin estímulos y una pregunta honesta: ¿qué quiero de verdad? La respuesta ya la tienes; solo necesita espacio para hablar.",
      amor: 72, trabajo: 66, bienestar: 88,
      ritual: "Apaga las notificaciones una hora y escribe lo que sientes.",
      color: "índigo", numero: 26,
    },
  ],
  cancer: [
    {
      text: "Tu intuición hoy no falla, Cáncer: en el trabajo, confía en esa corazonada sobre la persona o el proyecto. Lo que sientes en el pecho antes de que la mente lo explique es tu brújula. Protégela del ruido ajeno.",
      amor: 77, trabajo: 89, bienestar: 81,
      ritual: "Pon tu mano en el pecho antes de una decisión y respira tres veces.",
      color: "blanco", numero: 2,
    },
    {
      text: "El amor florece hoy en lo doméstico, mi Cáncer. Una noche en casa, una comida hecha a mano, una conversación bajo una manta: ahí está tu romance. No necesitas grandes gestos cuando tu entrega es total.",
      amor: 94, trabajo: 62, bienestar: 79,
      ritual: "Enciende una vela en casa y dedica la noche a quien amas.",
      color: "rosa", numero: 17,
    },
    {
      text: "Hoy la familia te reclama con el corazón, Cáncer. Alguien extraña tu cuidado más de lo que dice. Una visita, una llamada larga, un 'te extraño' dicho a tiempo: eso sana más que cualquier consejo.",
      amor: 85, trabajo: 60, bienestar: 83,
      ritual: "Llama a un familiar mayor y pregúntale por su día, sin prisa.",
      color: "perla", numero: 41,
    },
    {
      text: "El dinero pide hoy tu prudencia de cangrejo: protege lo que tienes antes de buscar más. Revisa gastos hormiga y guarda un poco para el colchón familiar. Tu seguridad financiera nace de estos pequeños cuidados.",
      amor: 70, trabajo: 76, bienestar: 73,
      ritual: "Ordena tus recibos y agradece por lo que ya tienes.",
      color: "azul", numero: 29,
    },
    {
      text: "Tu cuerpo y tus emociones van de la mano hoy, Cáncer. Si el pecho se aprieta, el cuerpo pide agua, descanso y algo tibio. No ignores las señales: tu bienestar empieza por escucharte.",
      amor: 74, trabajo: 65, bienestar: 92,
      ritual: "Toma un té tibio en silencio y nombra en voz alta cómo te sientes.",
      color: "plateado", numero: 13,
    },
    {
      text: "Una amistad vieja te busca hoy porque recuerda que contigo se puede llorar. Ábrele la puerta de tu casa y de tu corazón. Cuidar a los tuyos es tu superpoder.",
      amor: 82, trabajo: 63, bienestar: 80,
      ritual: "Invita a un amigo a tu casa y prepárale algo caliente.",
      color: "lila", numero: 58,
    },
    {
      text: "Hoy la luna te invita a soltar una vieja herida, Cáncer. No para olvidarla, sino para dejar de cargarla. Escríbela, léela, y déjala ir al agua. Tu corazón merece viajar ligero.",
      amor: 76, trabajo: 71, bienestar: 87,
      ritual: "Escribe lo que te duele y quémalo con cuidado en una vela.",
      color: "gris", numero: 7,
    },
  ],
  leo: [
    {
      text: "Hoy el escenario es tuyo, Leo: en el trabajo, tu presencia natural convence sin esfuerzo. Presenta esa idea, pide ese reconocimiento, ocupa tu lugar. El sol te respalda cuando brillas sin pedir permiso.",
      amor: 79, trabajo: 95, bienestar: 76,
      ritual: "Vístete con algo que te haga sentir poderoso antes de salir.",
      color: "dorado", numero: 1,
    },
    {
      text: "El amor hoy te pide generosidad de rey, mi Leo: sorprende, celebra, admira en voz alta. Tu persona florece cuando la miras con orgullo. Un cumplido sincero tuyo ilumina su semana entera.",
      amor: 92, trabajo: 68, bienestar: 77,
      ritual: "Dile a tu persona tres cosas que admiras de ella, mirándola a los ojos.",
      color: "rojo", numero: 23,
    },
    {
      text: "La familia necesita hoy tu alegría, Leo. Tú eres la fiesta, el que levanta el ánimo, el que une. Organiza algo sencillo: una comida, música, risas. Tu hogar se recarga con tu luz.",
      amor: 84, trabajo: 64, bienestar: 82,
      ritual: "Pon música alegre en casa y baila con tu familia.",
      color: "naranja", numero: 35,
    },
    {
      text: "El dinero responde a tu audacia hoy, pero con cabeza de rey, no de jugador. Una inversión o un cobro pendiente se mueve a tu favor si actúas con dignidad. Reclama lo tuyo sin pena: te lo ganaste.",
      amor: 71, trabajo: 87, bienestar: 70,
      ritual: "Revisa un pago pendiente y haz la llamada para cobrarlo hoy.",
      color: "ámbar", numero: 50,
    },
    {
      text: "Tu cuerpo hoy pide ser celebrado, Leo. Muévete con orgullo: ejercicio, buena postura, ropa que te encante. Cuando te sientes magnífico por fuera, tu energía se multiplica por dentro.",
      amor: 75, trabajo: 66, bienestar: 93,
      ritual: "Haz algo que te haga sentir radiante: péinate, perfúmate, sal con la frente en alto.",
      color: "amarillo", numero: 66,
    },
    {
      text: "Tus amistades hoy te devuelven el cariño que siempre das. Acepta los halagos sin deflectarlos, Leo: mereces recibir. Una reunión con amigos te recarga más que cualquier descanso.",
      amor: 88, trabajo: 69, bienestar: 85,
      ritual: "Reúne a tus amigos y deja que te celebren un poco.",
      color: "coral", numero: 14,
    },
    {
      text: "Hoy tu crecimiento está en la humildad, Leo. Escuchar sin interrumpir, aprender de alguien menor, admitir un error: eso también es grandeza. El verdadero rey no necesita corona para serlo.",
      amor: 78, trabajo: 80, bienestar: 84,
      ritual: "Pide perdón o da las gracias a alguien hoy, con sinceridad.",
      color: "púrpura", numero: 27,
    },
  ],
  virgo: [
    {
      text: "Tu mente ordenada hoy es oro en el trabajo, Virgo. Ese detalle que solo tú notaste puede salvar un proyecto entero. Habla con datos, propón con calma: tu precisión hoy se convierte en reconocimiento.",
      amor: 69, trabajo: 94, bienestar: 75,
      ritual: "Ordena tu espacio de trabajo y escribe tu lista de prioridades.",
      color: "verde", numero: 5,
    },
    {
      text: "En el amor, hoy suelta la lista de defectos, mi Virgo. Tu persona no necesita ser perfecta: necesita sentirse amada tal como es. Un abrazo sin correcciones vale más que mil mejoras.",
      amor: 85, trabajo: 63, bienestar: 72,
      ritual: "Hazle un detalle práctico a tu persona: algo que le facilite el día.",
      color: "rosa", numero: 24,
    },
    {
      text: "La familia valora hoy tu cuidado silencioso, Virgo. Eres quien recuerda las citas, quien organiza, quien sostiene. Permite que también te cuiden un poco: pedir ayuda no te hace menos capaz.",
      amor: 77, trabajo: 66, bienestar: 80,
      ritual: "Pide ayuda con algo hoy en lugar de hacerlo todo tú.",
      color: "beige", numero: 42,
    },
    {
      text: "Las finanzas hoy piden tu ojo de lince: revisa, compara, ajusta. Un pequeño error en cuentas o un cargo duplicado puede aparecer si miras con atención. Tu meticulosidad protege tu bolsillo.",
      amor: 65, trabajo: 82, bienestar: 70,
      ritual: "Haz un presupuesto simple del mes en una hoja.",
      color: "marrón", numero: 31,
    },
    {
      text: "Tu cuerpo hoy te pide rutina amorosa, Virgo: horarios, agua, comida a su hora. No es obsesión, es cuidado. Cuando tu cuerpo tiene orden, tu mente descansa.",
      amor: 70, trabajo: 67, bienestar: 95,
      ritual: "Acuéstate a la misma hora y deja el teléfono fuera del cuarto.",
      color: "azul", numero: 16,
    },
    {
      text: "Una amistad necesita hoy tu consejo práctico, no tu preocupación. Tú sabes resolver: ofrece tu ayuda concreta. Ser útil es tu lenguaje del amor, y hoy alguien lo necesita.",
      amor: 79, trabajo: 71, bienestar: 78,
      ritual: "Ayuda a un amigo con algo concreto que sabes hacer bien.",
      color: "oliva", numero: 60,
    },
    {
      text: "Hoy tu alma pide imperfección, Virgo. Haz algo sin planearlo, ríete de un error, deja un plato sin fregar. La vida también florece en el desorden amable.",
      amor: 74, trabajo: 69, bienestar: 86,
      ritual: "Haz algo espontáneo hoy, sin lista ni horario.",
      color: "terracota", numero: 9,
    },
  ],
  libra: [
    {
      text: "Tu don para la armonía hoy resuelve en el trabajo lo que la tensión no pudo. Una mediación, una negociación, un acuerdo justo: tú eres el puente. Habla con diplomacia y todos ganan.",
      amor: 76, trabajo: 88, bienestar: 77,
      ritual: "Enciende dos velas y piensa en un conflicto que quieres equilibrar.",
      color: "rosa", numero: 2,
    },
    {
      text: "El amor hoy te sonríe, mi Libra. Si estás en pareja, un plan bonito a dos renueva la chispa; si estás soltero, alguien con tu misma elegancia de alma se acerca. Ábrete: mereces un amor a tu altura.",
      amor: 93, trabajo: 65, bienestar: 78,
      ritual: "Arréglate bonito hoy aunque no tengas planes: el amor nota la energía.",
      color: "dorado", numero: 15,
    },
    {
      text: "La familia hoy necesita tu equilibrio, Libra. Dos opiniones chocan y tú ves el valor en ambas. No tomes partido: crea el espacio donde todos se escuchen. Tu paz es contagiosa.",
      amor: 81, trabajo: 62, bienestar: 74,
      ritual: "Propón una comida familiar donde cada quien cuente algo bueno.",
      color: "celeste", numero: 38,
    },
    {
      text: "El dinero hoy pide decisiones justas: ni gastar por complacer ni ahorrar por miedo. Un gasto compartido o una deuda pendiente se resuelve con una conversación honesta. La claridad financiera también es belleza.",
      amor: 72, trabajo: 80, bienestar: 69,
      ritual: "Habla de dinero con tu pareja o socio sin rodeos, con calma.",
      color: "verde", numero: 20,
    },
    {
      text: "Tu bienestar hoy nace de la belleza, Libra. Rodéate de lo hermoso: flores, música, un espacio ordenado. Cuando tu entorno está en armonía, tu cuerpo lo agradece.",
      amor: 75, trabajo: 64, bienestar: 91,
      ritual: "Ordena y decora un rincón de tu casa solo para ti.",
      color: "lila", numero: 48,
    },
    {
      text: "Una amistad florece hoy si le dedicas tiempo de calidad. Tú sabes hacer sentir especial a la gente: una invitación, un detalle, una escucha atenta. Cultiva tu jardín social.",
      amor: 86, trabajo: 67, bienestar: 79,
      ritual: "Invita a un amigo a hacer algo bonito juntos: un paseo, un café lindo.",
      color: "durazno", numero: 6,
    },
    {
      text: "Hoy tu crecimiento está en decidir, Libra. Esa balanza que no se mueve te está cansando: elige con el corazón y suelta la otra opción sin culpa. Decidir también es cuidarte.",
      amor: 78, trabajo: 83, bienestar: 82,
      ritual: "Escribe las dos opciones, elige una y quema el papel de la otra.",
      color: "azul", numero: 11,
    },
  ],
  escorpio: [
    {
      text: "Tu intensidad hoy es tu mejor herramienta en el trabajo, Escorpio. Ve al fondo del asunto: investiga, pregunta lo incómodo, no te quedes en la superficie. Lo que descubras hoy cambia el juego.",
      amor: 73, trabajo: 92, bienestar: 72,
      ritual: "Escribe la verdad que nadie dice en tu trabajo y guárdala para ti.",
      color: "negro", numero: 8,
    },
    {
      text: "El amor hoy te pide vulnerabilidad, mi Escorpio. Esa coraza que te protege también te aísla: baja la guardia con quien se la ganó. La intimidad verdadera nace donde te atreves a ser visto.",
      amor: 89, trabajo: 64, bienestar: 75,
      ritual: "Cuéntale a tu persona algo que nunca le has contado.",
      color: "vino", numero: 13,
    },
    {
      text: "En la familia hay un secreto o un tema sin hablar que pesa en el ambiente. Tú lo sientes antes que nadie. Hoy no es día de confrontar, pero sí de abrir la puerta con una pregunta honesta.",
      amor: 76, trabajo: 61, bienestar: 78,
      ritual: "Pregunta a un familiar cómo está de verdad, y escucha la respuesta.",
      color: "granate", numero: 34,
    },
    {
      text: "El dinero hoy se mueve en lo profundo: revisa deudas, inversiones, compromisos ocultos. Tu instinto detecta dónde hay fuga. Actúa en silencio y con estrategia: tu poder es discreto.",
      amor: 66, trabajo: 86, bienestar: 68,
      ritual: "Revisa tus deudas y haz un plan silencioso para saldar una.",
      color: "púrpura", numero: 56,
    },
    {
      text: "Tu cuerpo hoy pide purga, Escorpio: suda, llora, suelta. El ejercicio intenso o un buen llanto liberan lo que guardas. No te quedes con nada adentro: tu salud lo agradece.",
      amor: 71, trabajo: 65, bienestar: 90,
      ritual: "Haz ejercicio intenso o escribe sin filtro todo lo que sientes.",
      color: "rojo", numero: 4,
    },
    {
      text: "Una amistad hoy te muestra su lealtad de forma inesperada. Tú no olvidas quién estuvo en tus momentos oscuros: corresponde con la misma intensidad. Tus vínculos son para siempre.",
      amor: 84, trabajo: 69, bienestar: 76,
      ritual: "Agradece en persona a quien te apoyó en un momento difícil.",
      color: "azul", numero: 25,
    },
    {
      text: "Hoy es día de renacer, Escorpio. Suelta una versión vieja de ti: un rencor, un miedo, una máscara. Como el ave fénix, tu poder está en transformarte. La luna te acompaña en el cambio.",
      amor: 79, trabajo: 77, bienestar: 88,
      ritual: "Escribe lo que dejas atrás y entiérralo o quémalo con una vela.",
      color: "plateado", numero: 40,
    },
  ],
  sagitario: [
    {
      text: "Tu visión amplia hoy ilumina el trabajo, Sagitario. Mientras otros ven el problema, tú ves la oportunidad y el camino. Comparte tu optimismo con estrategia: tu entusiasmo contagia resultados.",
      amor: 72, trabajo: 90, bienestar: 79,
      ritual: "Escribe tu meta más grande del año y ponla donde la veas.",
      color: "naranja", numero: 9,
    },
    {
      text: "El amor hoy te pide aventura compartida, mi Sagitario. Sal de la rutina: un paseo nuevo, un plan improvisado, una risa inesperada. Tu persona se enamora de tu espíritu libre cada día.",
      amor: 87, trabajo: 63, bienestar: 80,
      ritual: "Propón un plan espontáneo hoy, aunque sea pequeño.",
      color: "turquesa", numero: 21,
    },
    {
      text: "La familia hoy disfruta de tus historias y tu alegría, Sagitario. Cuenta ese viaje, ese recuerdo, ese chiste. Tú les recuerdas que la vida también es fiesta y horizonte.",
      amor: 80, trabajo: 61, bienestar: 83,
      ritual: "Comparte con tu familia un recuerdo feliz de un viaje o una fiesta.",
      color: "amarillo", numero: 46,
    },
    {
      text: "El dinero hoy se expande si piensas en grande pero actúas con los pies en la tierra. Una oportunidad lejana o un contacto de fuera trae noticias. Investiga antes de lanzarte: tu flecha necesita puntería.",
      amor: 64, trabajo: 84, bienestar: 71,
      ritual: "Investiga una oportunidad nueva antes de comprometer dinero.",
      color: "dorado", numero: 33,
    },
    {
      text: "Tu cuerpo hoy pide aire libre y movimiento, Sagitario. El encierro te marchita: sal, camina, corre, respira hondo. La naturaleza es tu templo y hoy te espera.",
      amor: 70, trabajo: 66, bienestar: 94,
      ritual: "Pasa al menos 30 minutos al aire libre hoy.",
      color: "verde", numero: 12,
    },
    {
      text: "Una amistad de lejos reaparece hoy con noticias que te alegran el alma. El mundo es pequeño para tu corazón grande. Celebra esas conexiones que la distancia no rompe.",
      amor: 82, trabajo: 68, bienestar: 81,
      ritual: "Escríbele a un amigo que vive lejos y cuéntale algo bueno.",
      color: "coral", numero: 59,
    },
    {
      text: "Hoy tu espíritu pide aprender algo nuevo, Sagitario. Un libro, un video, una conversación profunda: tu alma crece cuando tu mente se expande. La sabiduría es tu verdadero tesoro.",
      amor: 74, trabajo: 75, bienestar: 86,
      ritual: "Dedica 20 minutos a aprender algo que te apasione.",
      color: "índigo", numero: 27,
    },
  ],
  capricornio: [
    {
      text: "Tu disciplina hoy construye imperios, Capricornio. En el trabajo, ese proyecto largo muestra avances que solo tu constancia logró. Sigue subiendo la montaña: la cima ya se ve.",
      amor: 68, trabajo: 96, bienestar: 74,
      ritual: "Escribe tu meta profesional del trimestre y el primer paso de hoy.",
      color: "marrón", numero: 10,
    },
    {
      text: "El amor hoy te pide mostrar el corazón detrás de la armadura, mi Capricornio. Tu persona sabe que la amas por lo que haces; hoy díselo con palabras. La ternura también es fortaleza.",
      amor: 86, trabajo: 62, bienestar: 73,
      ritual: "Dile 'te quiero' mirando a los ojos, sin bromas ni rodeos.",
      color: "vino", numero: 22,
    },
    {
      text: "La familia hoy descansa en tu responsabilidad, Capricornio. Eres el pilar, y lo saben. Pero hasta los pilares necesitan apoyo: deja que alguien te sostenga un rato.",
      amor: 78, trabajo: 64, bienestar: 79,
      ritual: "Acepta ayuda con algo hoy sin sentir culpa.",
      color: "gris", numero: 44,
    },
    {
      text: "El dinero hoy premia tu visión de largo plazo. Una decisión financiera sabia —ahorrar, invertir con calma, no prestar por presión— fortalece tu futuro. Tu paciencia con el dinero es tu riqueza.",
      amor: 63, trabajo: 88, bienestar: 70,
      ritual: "Revisa tu ahorro y celebra cuánto has avanzado.",
      color: "verde", numero: 52,
    },
    {
      text: "Tu cuerpo hoy pide estructura amorosa, Capricornio: come a tus horas, duerme tus horas, mueve tu cuerpo con disciplina suave. El descanso también se agenda, y tú lo sabes.",
      amor: 69, trabajo: 65, bienestar: 92,
      ritual: "Agenda tu hora de dormir como si fuera una cita importante.",
      color: "azul", numero: 18,
    },
    {
      text: "Una amistad de años hoy te recuerda por qué la elegiste. Los vínculos que duran se riegan con presencia, no con promesas. Dedícale tiempo a quien siempre está.",
      amor: 81, trabajo: 67, bienestar: 80,
      ritual: "Visita o llama a tu amistad más antigua esta semana.",
      color: "cobre", numero: 37,
    },
    {
      text: "Hoy tu crecimiento está en soltar la exigencia, Capricornio. No todo tiene que ser perfecto para ser valioso. Permítete un logro imperfecto y celébralo: ya hiciste suficiente.",
      amor: 75, trabajo: 79, bienestar: 87,
      ritual: "Haz algo solo por gusto, sin meta ni medida.",
      color: "terracota", numero: 7,
    },
  ],
  acuario: [
    {
      text: "Tu mente visionaria hoy ve lo que otros ni imaginan en el trabajo, Acuario. Propón esa idea loca: hoy el ambiente está listo para lo nuevo. La innovación lleva tu firma.",
      amor: 67, trabajo: 91, bienestar: 73,
      ritual: "Anota tu idea más atrevida y compártela con alguien de confianza.",
      color: "turquesa", numero: 11,
    },
    {
      text: "El amor hoy te pide presencia real, mi Acuario. Tu mente vuela lejos, pero tu persona te necesita aquí, ahora, cerquita. Un momento de conexión verdadera vale más que mil mensajes.",
      amor: 84, trabajo: 62, bienestar: 74,
      ritual: "Guarda el teléfono una hora y dedica ese tiempo solo a tu persona.",
      color: "celeste", numero: 29,
    },
    {
      text: "La familia hoy se beneficia de tu forma única de ver las cosas, Acuario. Propón algo diferente: una tradición nueva, un plan inesperado. Tu originalidad también une.",
      amor: 77, trabajo: 60, bienestar: 78,
      ritual: "Propón una actividad familiar que nunca hayan hecho.",
      color: "violeta", numero: 43,
    },
    {
      text: "El dinero hoy se mueve con lo no convencional: una idea distinta, un ingreso alternativo, algo fuera de lo común. Tu instinto para lo nuevo también aplica a las finanzas. Investiga sin miedo.",
      amor: 65, trabajo: 85, bienestar: 69,
      ritual: "Explora una forma nueva de generar ingresos, aunque sea pequeña.",
      color: "plateado", numero: 19,
    },
    {
      text: "Tu cuerpo hoy pide libertad, Acuario: muévete a tu manera, sin rutinas rígidas. Baila, camina sin rumbo, prueba algo nuevo. Tu energía fluye cuando no la encierras.",
      amor: 71, trabajo: 66, bienestar: 90,
      ritual: "Haz algo físico que nunca hayas intentado, aunque sea por 10 minutos.",
      color: "menta", numero: 55,
    },
    {
      text: "Tu comunidad hoy te necesita, Acuario. Eres el que une a la gente, el que organiza, el que sueña en grupo. Una causa o un amigo te llaman: responde con tu corazón colectivo.",
      amor: 83, trabajo: 70, bienestar: 82,
      ritual: "Reúne a tu gente por una causa o simplemente por el gusto de estar juntos.",
      color: "azul", numero: 3,
    },
    {
      text: "Hoy tu alma pide autenticidad radical, Acuario. Sé tú sin filtros, sin explicaciones. El mundo necesita tu rareza, no tu adaptación. Brilla a tu manera.",
      amor: 76, trabajo: 76, bienestar: 88,
      ritual: "Haz hoy algo que sea 100% tú, sin pensar en el qué dirán.",
      color: "fucsia", numero: 26,
    },
  ],
  piscis: [
    {
      text: "Tu sensibilidad hoy es tu brújula en el trabajo, Piscis. Percibes lo que no se dice: úsalo con sabiduría. Un proyecto creativo o una tarea que ayude a otros florece en tus manos.",
      amor: 74, trabajo: 87, bienestar: 80,
      ritual: "Escucha música que te inspire antes de empezar tu jornada.",
      color: "azul", numero: 12,
    },
    {
      text: "El amor hoy te envuelve como el mar, mi Piscis. Si estás en pareja, la ternura mutua se profundiza; si estás soltero, alguien sensible nota tu luz. Ámate primero: el resto llega solo.",
      amor: 95, trabajo: 61, bienestar: 82,
      ritual: "Escríbete una carta de amor a ti mismo y guárdala.",
      color: "rosa", numero: 7,
    },
    {
      text: "La familia hoy siente tu ausencia aunque estés presente, Piscis. Vuelve a la orilla: una llamada, una visita, un gesto. Tu gente te necesita con los pies en su tierra, no solo en tus sueños.",
      amor: 84, trabajo: 59, bienestar: 77,
      ritual: "Visita a tu familia o llámalos y cuéntales un sueño bonito.",
      color: "perla", numero: 36,
    },
    {
      text: "El dinero hoy pide que bajes de las nubes, Piscis. Revisa cuentas con los pies en la tierra: tu intuición es buena, pero los números son los números. Un poco de orden hoy evita un susto mañana.",
      amor: 68, trabajo: 78, bienestar: 71,
      ritual: "Anota todos tus gastos de hoy, sin juzgarte.",
      color: "verde", numero: 24,
    },
    {
      text: "Tu cuerpo hoy pide agua y descanso, Piscis. Nada, báñate, toma agua, duerme. Eres de elemento agua: cuando te secas por dentro, todo se nubla. Hidrátate en todos los sentidos.",
      amor: 72, trabajo: 64, bienestar: 93,
      ritual: "Toma un baño largo o camina junto al agua si puedes.",
      color: "celeste", numero: 48,
    },
    {
      text: "Una amistad hoy necesita tu compasión infinita, Piscis. Tú sabes estar sin juzgar, y eso es un regalo raro. Escucha con el corazón abierto: tu presencia sana.",
      amor: 88, trabajo: 66, bienestar: 81,
      ritual: "Escucha a un amigo sin dar consejos, solo acompañando.",
      color: "lila", numero: 15,
    },
    {
      text: "Hoy tus sueños traen mensajes, Piscis. Presta atención a lo que soñaste anoche y a las señales del día. Tu conexión con lo invisible está fuerte: confía en tu magia interior.",
      amor: 79, trabajo: 72, bienestar: 89,
      ritual: "Anota tu sueño al despertar y busca su mensaje durante el día.",
      color: "índigo", numero: 30,
    },
  ],
};

export const SIGN_META: Record<SignId, { name: string; dates: string; element: string; symbol: string }> = {
  aries: { name: "Aries", dates: "21 mar – 19 abr", element: "Fuego", symbol: "♈" },
  tauro: { name: "Tauro", dates: "20 abr – 20 may", element: "Tierra", symbol: "♉" },
  geminis: { name: "Géminis", dates: "21 may – 20 jun", element: "Aire", symbol: "♊" },
  cancer: { name: "Cáncer", dates: "21 jun – 22 jul", element: "Agua", symbol: "♋" },
  leo: { name: "Leo", dates: "23 jul – 22 ago", element: "Fuego", symbol: "♌" },
  virgo: { name: "Virgo", dates: "23 ago – 22 sep", element: "Tierra", symbol: "♍" },
  libra: { name: "Libra", dates: "23 sep – 22 oct", element: "Aire", symbol: "♎" },
  escorpio: { name: "Escorpio", dates: "23 oct – 21 nov", element: "Agua", symbol: "♏" },
  sagitario: { name: "Sagitario", dates: "22 nov – 21 dic", element: "Fuego", symbol: "♐" },
  capricornio: { name: "Capricornio", dates: "22 dic – 19 ene", element: "Tierra", symbol: "♑" },
  acuario: { name: "Acuario", dates: "20 ene – 18 feb", element: "Aire", symbol: "♒" },
  piscis: { name: "Piscis", dates: "19 feb – 20 mar", element: "Agua", symbol: "♓" },
};
