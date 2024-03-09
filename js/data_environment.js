data_environment_obscurance = [
  {
    title: "Слабо заслонённая",
    icon: "bleeding-eye",
    subtitle: "Помеха на Восприятие",
    description: "Тусклый свет, туман, листва",
    reference: "PHB, стр. 183.",
    bullets: [
      "Существа в этой области <b>совершают с помехой проверки Мудрости (Восприятие)</b>, полагающиеся на зрение.",
    ],
  },
  {
    title: "Сильно заслонённая",
    icon: "lightning-tear",
    subtitle: "Полностью блокирует зрение",
    description: "Тьма, густой туман или густая листва",
    reference: "PHB, стр. 183.",
    bullets: [
      "Существа фактически считаются <b>ослеплёнными</b>, когда пытаются рассмотреть что-то, находящееся в такой местности.",
    ],
  },
];

data_environment_light = [
  {
    title: "Яркий свет",
    icon: "star-pupil",
    subtitle: "Нормальная видимость",
    description: "Яркий свет позволяет большинству существ видеть хорошо",
    reference: "PHB, стр. 183.",
    bullets: [
      "Даже пасмурный день предоставляет яркий свет, равно как факелы, фонари, костры и прочие источники света в определённом радиусе.",
    ],
  },
  {
    title: "Тусклый свет",
    icon: "semi-closed-eye",
    subtitle: "Слабо заслонённая область",
    description: "Тусклый свет, также называемый тенью",
    reference: "PHB, стр. 183.",
    bullets: [
      "Создаёт <b>слабо заслонённую</b> область.",
      "Область тусклого света обычно находится между источником яркого света, таким как факел, и окружающей тьмой.",
      "На рассвете и закате свет тоже тусклый. Яркая луна в полнолуние освещает землю тусклым светом.",
    ],
  },
  {
    title: "Темнота",
    icon: "worried-eyes",
    subtitle: "Сильно заслонённая область",
    description: "Полное отсутствие света",
    reference: "PHB, стр. 183.",
    bullets: [
      "Создаёт <bсильно заслонённую</b> область.",
      "Персонажи оказываются в темноте по ночам (когда не светит луна), в коридорах подземелий и в областях магической тьмы.",
    ],
  },
];

data_environment_vision = [
  {
    title: "Слепое зрение",
    icon: "one-eyed",
    subtitle: "Восприятие без зрения",
    description:
      "Воспринимайте своё окружение в определённом радиусе, не полагаясь на зрение",
    reference: "PHB, стр. 183.",
    bullets: [
      "Этим чувством обладают существа без глаз, такие как слизи, и существа с эхолокацией или обострёнными чувствами, такие как летучие мыши и драконы.",
    ],
  },
  {
    title: "Тёмное зрение",
    icon: "semi-closed-eye",
    subtitle: "Ограниченное зрение в темноте",
    description: "Вы способны видеть в темноте в определённом радиусе",
    reference: "PHB, pgs. 183-184.",
    bullets: [
      "В определённом радиусе существа с тёмным зрением <b>могут видеть в темноте, как если бы она была тусклым светом</b>, так что для них эта область считается слабо заслонённой.",
      "Однако такие существа не могут в темноте различать цвета, для них это разные оттенки серого.",
      "Многие существа в мирах D&D, особенно те, что обитают под землёй, обладают тёмным зрением.",
    ],
  },
  {
    title: "Истинное зрение",
    icon: "eye-shield",
    subtitle: "Видение невидимого",
    description:
      "Существо с истинным зрение может видеть всё в его истинной форме, независимо от окружения",
    reference: "PHB, стр. 184.",
    bullets: [
      "Существа с истинным зрением могут в определённом радиусе видеть в обычной и магической темноте, видеть невидимые существа и предметы, автоматически обнаруживать зрительные иллюзии и преуспевать в спасбросках от них, и видеть истинный облик перевёртышей и существ, превращённых магией.",
      "Кроме того, зрение таких существ простирается на Эфирный план.",
    ],
  },
];

data_environment_cover = [
  {
    title: "Укрытие на половину",
    icon: "broken-shield",
    subtitle: "Low wall, furniture, creatures",
    description:
      "A target has half cover if an obstacle blocks at least half of its body",
    reference: "PHB, стр. 196.",
    bullets: [
      "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
      "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
      " If a target is behind multiple sources of cover, only the most protective degree of cover applies",
    ],
  },
  {
    title: "Three-quarters cover",
    icon: "cracked-shield",
    subtitle: "Portcullis, arrow slit",
    description:
      "A target has three-quarters cover if about three-quarters of it is covered by an obstacle",
    reference: "PHB, стр. 196.",
    bullets: [
      "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
      "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
      " If a target is behind multiple sources of cover, only the most protective degree of cover applies",
    ],
  },
  {
    title: "Full cover",
    icon: "shield",
    subtitle: "Completely concealed",
    description:
      "A target has total cover if it is completely concealed by an obstacle",
    reference: "PHB, стр. 196.",
    bullets: [
      "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
      "If a target is behind multiple sources of cover, only the most protective degree of cover applies",
    ],
  },
];
