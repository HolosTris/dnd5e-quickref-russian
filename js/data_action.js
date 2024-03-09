data_action = [
  {
    title: "Атака",
    icon: "crossed-swords",
    subtitle: "Рукопашная или дальнобойная атака",
    description: "Совершите рукопашную или дальнобойную атаку своим оружием",
    reference: "PHB, стр. 192,194-195.",
    bullets: [
      "Некоторые умения, такие как <i>Дополнительная атака</i> у воина, позволяют совершать несколько атак одним действием. Каждая из этих атак является отдельным броском и может нацеливаться на разных существ. Вы можете двигаться между этими атаками.",
      "Если вы совершаете действие Атака и атакуете рукопашным оружием со свойством «лёгкое», удерживаемым в одной руке, вы можете бонусным действием атаковать другим рукопашным оружием со свойством «лёгкое», удерживаемым в другой руке(см. бонусное действие <i>Атака второй рукой</i>).",
      "Вы можете заменить одни из ваших рукопашных атак <i>Захватом</i> или <i>Толканием</i>.",
      "Некоторые состояния дают преимущество на атаку: при атаке ослеплённой, парализованной, окаменевшей, опутанной, ошеломлённой или бессознательной цели; при рукопашной атаке лежачей цели; при атаке невидимого или скрывающегося атакующего.",
      "Некоторые состояния дают помеху на атаку: при атаке невидимой или скрывающейся цели; при дальнобойной атаке лежачей цели; при атаке ослеплёного, испуганного, отравленного или опутанного атакующего.",
    ],
  },
  {
    title: "Захват",
    icon: "grab",
    subtitle: "Особая рукопашная атака",
    description: "Попытайтесь схватить существо или побороться с ним",
    reference: "PHB, стр. 195.",
    bullets: [
      "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
      "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
      "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
      "If you succeed, you subject the target to the grappled condition (its speed is set to 0).",
    ],
  },
  {
    title: "Толкание",
    icon: "hand",
    subtitle: "Особая рукопашная атака",
    description:
      "Толкни существо, чтобы сбить его с ног или оттолкнуть от себя",
    reference: "PHB, стр. 195.",
    bullets: [
      "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
      "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
      "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
      "If you win the contest, you either knock the target prone or push it 5 feet away from you.",
    ],
  },
  {
    title: "Накладываение заклинания",
    icon: "magic-swirl",
    subtitle: "Время накладывания в 1 действие",
    description: "Наложите заклинание со временем накладывания в 1 действие",
    reference: "PHB, стр. 192.",
    bullets: [
      "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
      "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
      "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
      "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher.",
    ],
  },
  {
    title: "Рывок",
    icon: "sprint",
    subtitle: "Удвоение скорости перемещения",
    description: "Получите дополнительное перемещение на текущий ход",
    reference: "PHB, стр. 192.",
    bullets: [
      "Все увеличения и уменьшения скорости изменяют точно так же и дополнительное перемещение. Например, если ваша скорость 30 футов уменьшена до 15 футов, то совершив рывок, вы можете переместиться на 30 футов.",
    ],
  },
  {
    title: "Отход",
    icon: "journey",
    subtitle: "Предотвращение провоцированных атак",
    description:
      "Предотвратите провоцированные атаки на себя до конца текущего хода",
    reference: "PHB, стр. 192.",
    bullets: ["До конца текущего хода ваше перемещение не провоцирует атаки. "],
  },
  {
    title: "Уклонение",
    icon: "aura",
    subtitle: "Увеличение защиты",
    description: "Сконцентрирутесь только на избежании атак",
    reference: "PHB, стр. 192.",
    bullets: [
      "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
      "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0.",
    ],
  },
  {
    title: "Высвобождение",
    icon: "manacles",
    subtitle: "Высвобождение из захвата",
    description: "Высвободитесь из захвата",
    reference: "PHB, стр. 195.",
    bullets: [
      "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
      "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition.",
    ],
  },
  {
    title: "Помощь",
    icon: "telepathy",
    subtitle: "Предоставление преимущества союзнику",
    description:
      "Предоставьте союзнику преимущество на проверку навыка или бросок атаки",
    reference: "PHB, стр. 192.",
    bullets: [
      "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
      "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
      "The advantage lasts until the start of your next turn.",
    ],
  },
  {
    title: "Использование объекта",
    icon: "snatch",
    subtitle: "Взаимодействие, использование особых способностей",
    description:
      "Взаимоидействуйте со вторым объектом или используйте особую способность объекта",
    reference: "PHB, стр. 193.",
    bullets: [
      "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
      "When an object requires your action for its use, you also take this action.",
    ],
  },
  {
    title: "Использование щита",
    icon: "round-shield",
    subtitle: "Экипирование или снимание щита",
    description: "Экипируйте или снимите щит",
    reference: "PHB, стр. 144-146.",
    bullets: [
      "Щит всегда требует действие, чтобы экипировать или снять.",
      "Доспехи требуют несколько минут, чтобы экипировать или снять.",
    ],
  },
  {
    title: "Засада",
    icon: "hood",
    subtitle: "Попытка скрыться",
    description: "Попытайтесь скрыться",
    reference: "PHB, стр. 192.",
    bullets: [
      "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
      "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
      "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
      "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
      "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard.",
    ],
  },
  {
    title: "Поиск",
    icon: "magnifying-glass",
    subtitle: "Попытка найти что-то",
    description:
      "Уделите внимание поиску чего-то Devote your attention to finding something",
    reference: "PHB, стр. 193.",
    bullets: [
      "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check.",
    ],
  },
  {
    title: "Подготовка",
    icon: "stopwatch",
    subtitle: "Подготовка ответного действия",
    description: "Выберите условие и ответное действие на него",
    reference: "PHB, стр. 193.",
    bullets: [
      "First, you decide what perceivable circumstance will trigger your reaction.",
      "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
      "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
      "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration",
    ],
  },
  {
    title: "Использование умения",
    icon: "embrassed-energy",
    subtitle: "Некоторые умения требуют бонусного действия",
    description: "Используйте умение расы или класса, которое требует действия",
    reference: "См. умения своей расы и класса.",
    bullets: [],
  },
  {
    title: "Стабилизация существа",
    icon: "first-aid",
    subtitle: "Первая помощь умирающему",
    description:
      "Избавьте умирающее существо от нужды бросать спасброски от смерти",
    reference: "PHB, стр. 197.",
    bullets: [
      "Make a Wisdom (Medicine) check with DC 10",
      "On a success, the creature is stable and no longer needs to make death saving throws",
      "A stable creature regains 1 hit point after 1d4 hours",
    ],
  },
  {
    title: "Импровизация",
    icon: "juggler",
    subtitle: "Любое действие вне этого листа",
    description: "Исполните любое действие, которое только можете вообразить",
    reference: "PHB, стр. 193.",
    bullets: [
      "Когда вы описываете действие, не упомянутое в правилах, Мастер сообщает, возможно ли это действие, и какие проверки нужно совершить для определения успешности.",
    ],
  },
];
