// All copy for the Examen Civique pages, in French and English.
// The legal text describes what the app actually does today (no account, no analytics, local storage,
// RevenueCat + Apple for the one-time purchase). If the app changes, update this file first.

export type Lang = 'fr' | 'en';
type L<T> = { fr: T; en: T };

export type Block = { p: string } | { ul: string[] } | { note: string } | { contact: true };
export type Section = { id: string; title: string; blocks: Block[] };

export const APP = {
  name: 'Examen Civique 2026 : Prépa',
  short: 'Examen Civique Prépa',
};
export const DEVELOPER = 'Hicham Zaidi';
export const EMAIL = 'integrateopenai@gmail.com';
export const BUNDLE_ID = 'app.examencivique.prep';
export const UPDATED: L<string> = { fr: '4 octobre 2026', en: 'October 4, 2026' };
export const SOURCE_URL = 'https://formation-civique.interieur.gouv.fr/';
export const ARRETE_URL = 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620';

export const UI = {
  toc: { fr: 'Sommaire', en: 'Table of Contents' } as L<string>,
  support: { fr: 'Assistance', en: 'Support' } as L<string>,
  privacy: { fr: 'Confidentialité', en: 'Privacy' } as L<string>,
  terms: { fr: 'Conditions', en: 'Terms' } as L<string>,
  developerOf: { fr: 'Développeur de', en: 'Developer of' } as L<string>,
  website: { fr: 'Site web', en: 'Website' } as L<string>,
  updated: { fr: 'Dernière mise à jour', en: 'Last Updated' } as L<string>,
  legal: { fr: 'Juridique', en: 'Legal' } as L<string>,
  footerNote: {
    fr: "Application indépendante, non affiliée à l'État français ni au ministère de l'Intérieur.",
    en: 'Independent app, not affiliated with the French State or the Ministry of the Interior.',
  } as L<string>,
  versionNote: {
    fr: "En cas de différence entre les versions, la version française fait foi.",
    en: 'If the versions differ, the French version prevails.',
  } as L<string>,
};

// ───────────────────────── Landing ─────────────────────────
export const LANDING = {
  metaTitle: {
    fr: 'Examen Civique 2026 : Prépa — QCM en français, anglais, arabe',
    en: 'Examen Civique 2026 Prep — French civic exam practice in English, French, Arabic',
  } as L<string>,
  metaDesc: {
    fr: "Préparez l'examen civique (CSP, carte de résident, naturalisation) : questions issues des listes publiques, mises en situation, examens blancs chronométrés, en français, anglais et arabe. Application indépendante.",
    en: 'Practise for the French civic exam (multi-year card, resident card, naturalisation): questions from the public lists, scenario practice and timed mock exams in French, English and Arabic. Independent app.',
  } as L<string>,
  badge: { fr: 'Examen civique', en: 'French civic exam' } as L<string>,
  title: {
    fr: "Préparez l'examen civique, dans votre langue.",
    en: 'Prepare for the French civic exam, in your language.',
  } as L<string>,
  sub: {
    fr: "Des QCM thème par thème, des mises en situation et des examens blancs chronométrés, en français, anglais ou arabe. Gratuit pour commencer, un seul paiement pour tout débloquer.",
    en: 'Topic-by-topic multiple choice, scenario practice and timed mock exams in French, English or Arabic. Free to start, one payment to unlock everything.',
  } as L<string>,
  soon: { fr: "Bientôt sur l'App Store", en: 'Coming soon to the App Store' } as L<string>,
  soonNote: {
    fr: 'Pour iPhone. Disponible en français, anglais et arabe.',
    en: 'For iPhone. Available in French, English and Arabic.',
  } as L<string>,
  stats: [
    { n: '392', label: { fr: 'questions', en: 'questions' } },
    { n: '3', label: { fr: 'langues', en: 'languages' } },
    { n: '1×', label: { fr: 'paiement, sans abonnement', en: 'payment, no subscription' } },
  ] as { n: string; label: L<string> }[],
  formatTitle: { fr: "Le format de l'examen", en: 'The exam format' } as L<string>,
  format: [
    [{ fr: 'Questions', en: 'Questions' }, '40'],
    [{ fr: 'Durée', en: 'Duration' }, '45 min'],
    [{ fr: 'Seuil de réussite', en: 'Pass mark' }, '80 %'],
    [{ fr: 'Mises en situation', en: 'Scenario questions' }, '12 / 40'],
  ] as [L<string>, string][],
  formatNote: {
    fr: "Selon l'[arrêté du 10 octobre 2025](" + ARRETE_URL + ').',
    en: 'As set by the [decree of 10 October 2025](' + ARRETE_URL + ').',
  } as L<string>,
  featuresTag: { fr: 'Fonctionnalités', en: 'Features' } as L<string>,
  featuresTitle: { fr: "Tout pour s'entraîner sérieusement", en: 'Everything you need to practise properly' } as L<string>,
  features: [
    [
      { fr: 'Cinq thèmes', en: 'Five topics' },
      {
        fr: "Principes et valeurs de la République, institutions, droits et devoirs, histoire-géographie-culture, vivre dans la société française.",
        en: 'Principles and values of the Republic, institutions, rights and duties, history-geography-culture, living in French society.',
      },
    ],
    [
      { fr: 'Questions des listes publiques', en: 'Questions from the public lists' },
      {
        fr: "368 questions de connaissances issues des listes publiées par le ministère, pour le niveau CSP, le niveau carte de résident ou la naturalisation.",
        en: '368 knowledge questions drawn from the lists published by the Ministry, for the multi-year card, resident card or naturalisation level.',
      },
    ],
    [
      { fr: 'Mises en situation', en: 'Scenario practice' },
      {
        fr: "24 mises en situation rédigées par nos soins. Les mises en situation de l'examen ne sont pas publiques : les nôtres s'en inspirent seulement par leur forme.",
        en: '24 scenario questions written by us. The real exam scenarios are not public: ours only follow their general format.',
      },
    ],
    [
      { fr: 'Examens blancs', en: 'Mock exams' },
      {
        fr: '40 questions en 45 minutes, avec la répartition par thème et le seuil de 80 %, puis un bilan par thème.',
        en: '40 questions in 45 minutes, with the topic split and the 80% pass mark, followed by a breakdown by topic.',
      },
    ],
    [
      { fr: 'Trois langues', en: 'Three languages' },
      {
        fr: "Questions, réponses et explications en français, anglais et arabe (interface de droite à gauche). Le texte français d'origine reste affiché, car l'examen est en français.",
        en: 'Questions, answers and explanations in French, English and Arabic (right-to-left interface). The original French text stays visible, because the real exam is in French.',
      },
    ],
    [
      { fr: 'Suivi et révision', en: 'Progress and review' },
      {
        fr: "Score de préparation, progression par thème, série de jours, compte à rebours et révision de vos erreurs. Fonctionne sans connexion.",
        en: 'Readiness score, progress by topic, daily streak, countdown and mistake review. Works offline.',
      },
    ],
  ] as [L<string>, L<string>][],
  screensTag: { fr: "L'application", en: 'The app' } as L<string>,
  screensTitle: { fr: 'Dans l\'application', en: 'Inside the app' } as L<string>,
  screensSub: {
    fr: "Quatre écrans clés : l'explication de chaque réponse, l'examen blanc, votre score par thème et votre préparation. Les chiffres affichés sont des exemples.",
    en: 'Four key screens: the explanation after every answer, the mock exam, your score by topic and your readiness. The numbers shown are examples.',
  } as L<string>,
  screens: [
    {
      file: 'answers',
      title: { fr: 'Comprendre chaque réponse', en: 'Understand every answer' },
      alt: {
        fr: "Écran de question d'Examen Civique Prépa : une question sur les droits et devoirs en français et en anglais, la bonne réponse en vert et son explication",
        en: 'Examen Civique Prep question screen: a rights and duties question in French and English, the correct answer in green and its explanation',
      },
      cap: { fr: 'Chaque question est bilingue et suivie d\'une courte explication.', en: 'Every question is bilingual, followed by a short explanation.' },
    },
    {
      file: 'mock-exam',
      title: { fr: "Examen blanc au format officiel", en: 'Mock exam in the real format' },
      alt: {
        fr: "Écran d'examen blanc : question 1 sur 40, chronomètre de 45 minutes et quatre choix de réponse",
        en: 'Mock exam screen: question 1 of 40, a 45-minute timer and four answer choices',
      },
      cap: { fr: '40 questions, 45 minutes, seuil de réussite de 80 %.', en: '40 questions, 45 minutes, 80% pass mark.' },
    },
    {
      file: 'score',
      title: { fr: 'Votre score par thème', en: 'Your score by topic' },
      alt: {
        fr: "Écran de résultat avec 83 %, 33 réponses justes sur 40, le badge Réussi et le détail par thème",
        en: 'Result screen with 83%, 33 of 40 correct, a Passed badge and a breakdown by topic',
      },
      cap: { fr: 'Votre score et un détail par thème pour savoir quoi réviser.', en: 'Your score and a breakdown by topic, so you know what to revise.' },
    },
    {
      file: 'progress',
      title: { fr: 'Suivez votre préparation', en: 'Track your readiness' },
      alt: {
        fr: "Écran d'accueil avec un score de préparation de 54 %, un compte à rebours de 21 jours, une série de 6 jours et les accès à l'examen blanc et aux erreurs",
        en: 'Home screen with a 54% readiness score, a 21-day countdown, a 6-day streak and shortcuts to the mock exam and mistakes',
      },
      cap: { fr: 'Score de préparation, série de jours et compte à rebours.', en: 'Readiness score, daily streak and exam countdown.' },
    },
  ] as { file: string; title: L<string>; alt: L<string>; cap: L<string> }[],
  planTag: { fr: 'Gratuit et à vie', en: 'Free & Lifetime' } as L<string>,
  planTitle: { fr: 'Commencez gratuitement. Débloquez une fois.', en: 'Start free. Unlock once.' } as L<string>,
  planSub: {
    fr: "Essayez l'application gratuitement. L'accès complet à vie est un achat unique, sans abonnement ni renouvellement.",
    en: 'Try the app for free. Full access for life is a single one-time purchase, with no subscription or renewal.',
  } as L<string>,
  compareHead: [
    { fr: 'Fonction', en: 'Feature' },
    { fr: 'Gratuit', en: 'Free' },
    { fr: 'Accès complet', en: 'Full access' },
  ] as L<string>[],
  compare: [
    [{ fr: '10 questions par thème', en: '10 questions per topic' }, true],
    [{ fr: 'Un examen blanc', en: 'One mock exam' }, true],
    [{ fr: 'Explications en 3 langues', en: 'Explanations in 3 languages' }, true],
    [{ fr: 'Toutes les questions de tous les thèmes', en: 'Every question in every topic' }, false],
    [{ fr: 'Examens blancs illimités', en: 'Unlimited mock exams' }, false],
    [{ fr: 'Révision et reprise de vos erreurs', en: 'Review and retry your mistakes' }, false],
  ] as [L<string>, boolean][],
  ctaTitle: { fr: 'Vos données restent sur votre iPhone', en: 'Your data stays on your iPhone' } as L<string>,
  ctaText: {
    fr: "Pas de compte, pas de publicité, pas de suivi. Votre progression est enregistrée uniquement sur votre appareil.",
    en: 'No account, no ads, no tracking. Your progress is stored only on your device.',
  } as L<string>,
  ctaButton: { fr: 'Lire la politique de confidentialité', en: 'Read the privacy policy' } as L<string>,
  strip: {
    fr: "Application indépendante : elle n'est ni éditée, ni approuvée, ni exploitée par l'État français, le ministère de l'Intérieur, une préfecture ou l'organisme chargé de l'examen, et ce n'est pas l'application de l'examen. Les questions de connaissances proviennent des [listes publiques du ministère](" + SOURCE_URL + "). Elle ne garantit pas la réussite à l'examen et ne fournit pas de conseil juridique. Vérifiez toujours les informations officielles auprès de votre préfecture.",
    en: 'Independent app: it is not published, endorsed or operated by the French State, the Ministry of the Interior, a prefecture or the body running the exam, and it is not the exam app. The knowledge questions come from the [Ministry’s public lists](' + SOURCE_URL + '). It does not guarantee you will pass and does not provide legal advice. Always check official information with your prefecture.',
  } as L<string>,
};

// ───────────────────────── Privacy ─────────────────────────
export const PRIVACY = {
  metaTitle: { fr: 'Politique de confidentialité | Examen Civique Prépa', en: 'Privacy Policy | Examen Civique Prep' } as L<string>,
  metaDesc: {
    fr: "Politique de confidentialité d'Examen Civique 2026 : Prépa. Votre progression reste sur votre appareil.",
    en: 'Privacy Policy for Examen Civique 2026 Prep. Your progress stays on your device.',
  } as L<string>,
  title: { fr: 'Politique de confidentialité', en: 'Privacy Policy' } as L<string>,
  subtitle: { fr: "Comment l'application traite vos informations", en: 'How the app handles your information' } as L<string>,
  highlight: {
    fr: "Votre progression est la vôtre. Vos réponses, vos erreurs et vos réglages sont enregistrés uniquement sur votre appareil. L'application n'a ni compte, ni publicité, ni outil de mesure d'audience, et nous ne recevons aucune donnée sur votre apprentissage.",
    en: 'Your progress is yours. Your answers, mistakes and settings are stored only on your device. The app has no account, no advertising and no analytics, and we do not receive any data about your learning.',
  } as L<string>,
  sections: {
    fr: [
      {
        id: 'p-1',
        title: '1. Introduction',
        blocks: [
          {
            p: "Hicham Zaidi, développeur indépendant (« nous »), édite l'application mobile Examen Civique 2026 : Prépa (l'« Application »), un outil d'entraînement à l'examen civique. Cette politique explique quelles informations l'Application traite et comment. Hicham Zaidi est le responsable du traitement au sens du RGPD pour les rares données décrites ci-dessous. En utilisant l'Application, vous acceptez cette politique.",
          },
        ],
      },
      {
        id: 'p-2',
        title: '2. Ce qui reste sur votre appareil',
        blocks: [
          { p: "Les informations suivantes sont enregistrées localement sur votre appareil et ne sont jamais envoyées à nos serveurs :" },
          {
            ul: [
              "Votre langue, votre objectif (carte de séjour pluriannuelle, carte de résident ou naturalisation) et votre réglage d'affichage du texte français",
              "La date de votre examen, si vous la saisissez",
              "Vos réponses, vos erreurs enregistrées, votre série de jours et le nombre d'examens blancs effectués",
              "Une copie locale de l'état de votre achat",
            ],
          },
          {
            p: "La désinstallation de l'Application supprime ces données de votre appareil. Nous ne proposons ni compte, ni sauvegarde, ni synchronisation. Si vous utilisez les sauvegardes iCloud ou sur ordinateur de votre iPhone, iOS peut inclure les données de l'Application dans ces sauvegardes selon vos propres réglages ; nous n'y avons pas accès.",
          },
        ],
      },
      {
        id: 'p-3',
        title: '3. Ce que nous ne collectons pas',
        blocks: [
          {
            p: "Nous n'utilisons ni outil de mesure d'audience, ni publicité, ni suivi publicitaire. Nous ne créons pas de comptes et nous ne collectons ni votre nom, ni votre adresse e-mail, ni votre position, ni vos contacts, ni vos photos, ni votre microphone, ni vos données de santé. L'Application ne demande ni l'accès à ces données ni l'autorisation de suivi (App Tracking Transparency). Nous ne vendons ni ne partageons de données personnelles.",
          },
        ],
      },
      {
        id: 'p-4',
        title: '4. Connexion Internet',
        blocks: [
          {
            p: "Les questions, les réponses et les explications sont intégrées à l'Application et fonctionnent sans connexion. L'Application se connecte à Internet uniquement pour afficher le prix et vérifier ou restaurer votre achat (voir la section suivante). Les mises à jour de l'Application sont distribuées par l'App Store.",
          },
        ],
      },
      {
        id: 'p-5',
        title: '5. Achat et RevenueCat',
        blocks: [
          {
            p: "L'Application propose un achat unique « Accès complet à vie », traité par Apple. Nous utilisons [RevenueCat](https://www.revenuecat.com/privacy) pour valider les achats. RevenueCat reçoit un identifiant d'utilisateur anonyme, votre reçu d'achat et des informations de base sur l'appareil et la version de l'Application, afin de confirmer ce que vous possédez et de le restaurer à votre demande. Il ne reçoit ni vos réponses ni vos réglages d'étude. Ces données peuvent être traitées hors de votre pays, notamment aux États-Unis, selon les garanties prévues par RevenueCat. Apple traite votre paiement ; nous ne voyons jamais vos données de paiement. Voir la [politique de confidentialité d'Apple](https://www.apple.com/legal/privacy/).",
          },
          {
            p: "Base juridique (RGPD) : l'exécution du contrat d'achat et notre intérêt légitime à permettre la restauration de l'achat et à prévenir la fraude.",
          },
        ],
      },
      {
        id: 'p-6',
        title: '6. Enfants',
        blocks: [
          {
            p: "L'Application s'adresse à des adultes qui préparent l'examen civique. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si vous pensez qu'un enfant a utilisé l'Application, contactez-nous.",
          },
        ],
      },
      {
        id: 'p-7',
        title: '7. Conservation et suppression',
        blocks: [
          {
            p: "Vos données d'étude vivent uniquement sur votre appareil : elles sont conservées tant que l'Application est installée, et supprimées à la désinstallation. Si vous nous écrivez pour une demande d'assistance, nous conservons votre message le temps nécessaire pour la traiter.",
          },
        ],
      },
      {
        id: 'p-8',
        title: '8. Vos droits',
        blocks: [
          {
            p: "Selon votre pays de résidence (par exemple le RGPD dans l'Union européenne), vous pouvez avoir un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Comme nous ne détenons aucune donnée personnelle vous concernant en dehors des enregistrements d'achat anonymes traités par RevenueCat et Apple, la suppression de l'Application efface ce qui est sur votre appareil. Pour toute demande, écrivez-nous à l'adresse indiquée ci-dessous. Vous pouvez aussi saisir l'autorité de protection des données de votre pays ; en France, il s'agit de la [CNIL](https://www.cnil.fr).",
          },
        ],
      },
      {
        id: 'p-9',
        title: '9. Sécurité',
        blocks: [
          {
            p: "Vos données sont protégées par la sécurité de votre appareil (code, Face ID et protection du stockage d'iOS). Si vous perdez ou réinitialisez votre appareil sans sauvegarde, votre progression ne pourra pas être récupérée.",
          },
        ],
      },
      {
        id: 'p-10',
        title: '10. Modifications et contact',
        blocks: [
          {
            p: "Nous pouvons mettre à jour cette politique et publierons les changements ici avec une nouvelle date de mise à jour. Une question ? Contactez-nous :",
          },
          { contact: true },
        ],
      },
    ] as Section[],
    en: [
      {
        id: 'p-1',
        title: '1. Introduction',
        blocks: [
          {
            p: 'Hicham Zaidi, an independent developer ("we", "us"), publishes the Examen Civique 2026 Prep mobile app (the "App"), a practice tool for the French civic exam. This Privacy Policy explains what information the App handles and how. Hicham Zaidi is the data controller under the GDPR for the limited data described below. By using the App you agree to this policy.',
          },
        ],
      },
      {
        id: 'p-2',
        title: '2. What Stays on Your Device',
        blocks: [
          { p: 'The following is stored locally on your device and is never sent to our servers:' },
          {
            ul: [
              'Your language, your goal (multi-year residence card, resident card or naturalisation) and your setting for showing the French text',
              'Your exam date, if you enter one',
              'Your answers, saved mistakes, daily streak and the number of mock exams completed',
              'A local copy of your purchase status',
            ],
          },
          {
            p: 'Deleting the App removes this data from your device. We offer no account, backup or sync. If you use iCloud or computer backups of your iPhone, iOS may include the App’s data in those backups according to your own settings; we have no access to them.',
          },
        ],
      },
      {
        id: 'p-3',
        title: '3. What We Do Not Collect',
        blocks: [
          {
            p: 'We do not use analytics, advertising or tracking tools. We do not create accounts and we do not collect your name, email address, location, contacts, photos, microphone or health data. The App does not request access to these or the App Tracking Transparency permission. We do not sell or share personal data.',
          },
        ],
      },
      {
        id: 'p-4',
        title: '4. Internet Connection',
        blocks: [
          {
            p: 'Questions, answers and explanations are bundled in the App and work offline. The App connects to the internet only to show the price and to verify or restore your purchase (see the next section). App updates are delivered by the App Store.',
          },
        ],
      },
      {
        id: 'p-5',
        title: '5. Purchase & RevenueCat',
        blocks: [
          {
            p: 'The App offers a one-time "Full access for life" purchase, processed by Apple. We use [RevenueCat](https://www.revenuecat.com/privacy) to validate purchases. RevenueCat receives an anonymous app user ID, your purchase receipt and basic device and app-version information so it can confirm what you own and restore it on request. It does not receive your answers or study settings. This data may be processed outside your country, including in the United States, under RevenueCat’s safeguards. Apple handles your payment; we never see your payment details. See [Apple’s Privacy Policy](https://www.apple.com/legal/privacy/).',
          },
          {
            p: 'Legal basis (GDPR): performance of the purchase contract, and our legitimate interest in letting you restore your purchase and preventing fraud.',
          },
        ],
      },
      {
        id: 'p-6',
        title: '6. Children',
        blocks: [
          {
            p: 'The App is intended for adults preparing for the civic exam. We do not knowingly collect personal information from children. If you believe a child has used the App, contact us.',
          },
        ],
      },
      {
        id: 'p-7',
        title: '7. Retention & Deletion',
        blocks: [
          {
            p: 'Your study data lives only on your device: it is kept while the App is installed and deleted when you uninstall it. If you email us for support, we keep your message only as long as needed to resolve your request.',
          },
        ],
      },
      {
        id: 'p-8',
        title: '8. Your Rights',
        blocks: [
          {
            p: 'Depending on where you live (for example under the GDPR in the European Union), you may have rights to access, correct, delete, restrict, port and object to the processing of your personal data. As we hold no personal data about you beyond anonymous purchase records handled by RevenueCat and Apple, deleting the App removes what is on your device. For any request, email us at the address below. You may also complain to your data protection authority; in France this is the [CNIL](https://www.cnil.fr).',
          },
        ],
      },
      {
        id: 'p-9',
        title: '9. Security',
        blocks: [
          {
            p: 'Your data is protected by your device’s security (passcode, Face ID and iOS storage protection). If you lose or reset your device without a backup, your progress cannot be recovered.',
          },
        ],
      },
      {
        id: 'p-10',
        title: '10. Changes & Contact',
        blocks: [
          {
            p: 'We may update this policy and will post changes here with a new "Last Updated" date. Questions? Contact us:',
          },
          { contact: true },
        ],
      },
    ] as Section[],
  },
};

// ───────────────────────── Terms ─────────────────────────
export const TERMS = {
  metaTitle: { fr: "Conditions d'utilisation | Examen Civique Prépa", en: 'Terms of Service | Examen Civique Prep' } as L<string>,
  metaDesc: {
    fr: "Conditions d'utilisation d'Examen Civique 2026 : Prépa, application d'entraînement indépendante.",
    en: 'Terms of Service for Examen Civique 2026 Prep, an independent practice app.',
  } as L<string>,
  title: { fr: "Conditions d'utilisation", en: 'Terms of Service' } as L<string>,
  subtitle: { fr: "Les règles d'utilisation de l'application", en: 'The rules for using the app' } as L<string>,
  disclaimer: {
    fr: "Cette application est indépendante. Elle n'est ni éditée, ni approuvée, ni exploitée par l'État français, le ministère de l'Intérieur, une préfecture ou l'organisme chargé de l'examen civique, et ce n'est pas l'application de l'examen. Elle ne garantit pas la réussite à l'examen.",
    en: 'This app is independent. It is not published, endorsed or operated by the French State, the Ministry of the Interior, a prefecture or the body running the civic exam, and it is not the exam app. It does not guarantee you will pass.',
  } as L<string>,
  sections: {
    fr: [
      {
        id: 't-1',
        title: '1. Accord',
        blocks: [
          {
            p: "Les présentes conditions régissent votre utilisation de l'application mobile Examen Civique 2026 : Prépa (l'« Application »), fournie par Hicham Zaidi, développeur indépendant (« nous »). En téléchargeant ou en utilisant l'Application, vous acceptez ces conditions et notre politique de confidentialité. Si vous n'êtes pas d'accord, n'utilisez pas l'Application. Le contrat de licence d'utilisateur final standard d'Apple (Licensed Application End User License Agreement) s'applique également, sauf si nous en fournissons un autre.",
          },
        ],
      },
      {
        id: 't-2',
        title: '2. Éligibilité',
        blocks: [{ p: "L'Application s'adresse à des adultes qui préparent l'examen civique. Vous devez avoir au moins 18 ans pour l'utiliser." }],
      },
      {
        id: 't-3',
        title: "3. L'Application",
        blocks: [
          {
            p: "L'Application propose des questions à choix multiples, des mises en situation, des examens blancs chronométrés, des explications et un suivi de progression pour vous entraîner à l'examen civique, en français, en anglais et en arabe. Certaines fonctions sont gratuites ; d'autres font partie de l'achat « Accès complet à vie ».",
          },
        ],
      },
      {
        id: 't-4',
        title: '4. Application indépendante, non officielle',
        blocks: [
          {
            note: "Nous ne sommes affiliés ni à l'État français, ni au ministère de l'Intérieur, ni à une préfecture, ni à l'organisme chargé de l'examen civique. L'Application n'est pas l'application officielle de l'examen et n'utilise aucun logo officiel.",
          },
          {
            p: "L'examen civique réel est organisé par les autorités compétentes, en français. Seules ces autorités peuvent vous informer de façon officielle sur votre dossier, vos obligations et les modalités de l'examen.",
          },
        ],
      },
      {
        id: 't-5',
        title: '5. Sources, exactitude et traductions',
        blocks: [
          {
            ul: [
              "Les questions de connaissances reprennent les [listes publiques du ministère de l'Intérieur](" + SOURCE_URL + "). Nous ne revendiquons aucun droit sur ces questions ; nos réponses, explications et traductions sont rédigées par nos soins.",
              "Les mises en situation de l'Application sont originales. Les mises en situation de l'examen réel ne sont pas publiques : elles peuvent différer des nôtres.",
              "Le format des examens blancs (40 questions, 45 minutes, seuil de 80 %, répartition par thème) suit notre lecture de l'[arrêté du 10 octobre 2025](" + ARRETE_URL + "). Les règles peuvent changer.",
              "Les versions anglaise et arabe sont des traductions d'aide à l'étude, non officielles. Seul le texte français est celui de l'examen.",
              "Malgré nos efforts, une question, une réponse ou une explication peut être inexacte ou dépassée. Signalez-nous toute erreur et vérifiez les informations officielles.",
            ],
          },
        ],
      },
      {
        id: 't-6',
        title: '6. Pas de conseil juridique, pas de garantie de réussite',
        blocks: [
          {
            p: "L'Application est un outil d'étude et d'information générale. Elle ne fournit pas de conseil juridique ou administratif et ne remplace pas les informations de votre préfecture. Nous ne garantissons pas que vous réussirez l'examen ni que votre demande aboutira : ces décisions appartiennent aux autorités compétentes.",
          },
        ],
      },
      {
        id: 't-7',
        title: '7. Vos données',
        blocks: [
          {
            p: "L'Application n'a pas de compte. Vos données d'étude sont enregistrées sur votre appareil (voir la politique de confidentialité). Vous êtes responsable de la sécurité de votre appareil ; la suppression de l'Application ou la perte de l'appareil efface votre progression.",
          },
        ],
      },
      {
        id: 't-8',
        title: '8. Accès complet à vie',
        blocks: [
          {
            ul: [
              "« Accès complet à vie » est un achat intégré unique et non consommable. Ce n'est pas un abonnement et il ne se renouvelle pas.",
              "Le paiement est débité sur votre compte Apple à la confirmation. Le prix est affiché dans l'Application avant l'achat.",
              "L'achat débloque les fonctions payantes de l'Application tant que nous la proposons. Vous pouvez le restaurer sur tout appareil connecté au même compte Apple avec « Restaurer l'achat ».",
              "Les remboursements sont gérés par Apple selon ses règles, sur reportaproblem.apple.com. Vos droits légaux de consommateur restent inchangés.",
              "Nous pouvons modifier les fonctions gratuites ou payantes dans de futures versions, sans retirer ce que vous avez déjà débloqué sans alternative raisonnable.",
            ],
          },
        ],
      },
      {
        id: 't-9',
        title: '9. Propriété intellectuelle',
        blocks: [
          {
            p: "L'Application, y compris sa conception, ses textes, ses explications, ses traductions, ses mises en situation et son code, appartient à nous ou à nos concédants, à l'exception des questions publiques décrites à l'article 5. Nous vous accordons une licence limitée, non exclusive, non transférable et révocable d'utiliser l'Application pour votre usage personnel.",
          },
        ],
      },
      {
        id: 't-10',
        title: '10. Utilisation acceptable',
        blocks: [
          { p: 'Vous vous engagez à ne pas :' },
          {
            ul: [
              "Procéder à de l'ingénierie inverse, décompiler ou modifier l'Application, ni contourner ses contrôles d'achat ou de licence",
              "Utiliser l'Application à des fins illicites",
              "Revendre, sous-licencier ou exploiter commercialement l'Application ou son contenu",
              "Présenter l'Application comme une application officielle de l'État",
              "Perturber le fonctionnement de l'Application",
            ],
          },
        ],
      },
      {
        id: 't-11',
        title: '11. Exclusions de garantie',
        blocks: [
          {
            p: "Dans la mesure permise par la loi, l'Application est fournie « en l'état » et « selon disponibilité », sans garantie d'aucune sorte, notamment quant à l'exactitude, à l'adéquation à un usage particulier et à un fonctionnement ininterrompu. Les garanties légales dont vous bénéficiez en tant que consommateur ne sont pas affectées.",
          },
        ],
      },
      {
        id: 't-12',
        title: '12. Limitation de responsabilité',
        blocks: [
          {
            p: "Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs, ni de toute perte résultant de votre confiance dans l'Application, y compris l'échec à l'examen ou le refus d'un titre ou d'une nationalité. Notre responsabilité totale pour toute réclamation est limitée au montant que vous avez payé pour l'Application au cours des douze mois précédant la réclamation. Rien dans ces conditions ne limite une responsabilité qui ne peut être limitée par la loi, notamment en cas de faute lourde, de dol ou de dommage corporel.",
          },
        ],
      },
      {
        id: 't-13',
        title: '13. Résiliation',
        blocks: [
          {
            p: "Vous pouvez cesser d'utiliser l'Application à tout moment en la supprimant. Nous pouvons suspendre ou mettre fin à l'accès si vous violez ces conditions.",
          },
        ],
      },
      {
        id: 't-14',
        title: '14. Droit applicable',
        blocks: [
          {
            p: "Ces conditions sont régies par le droit de l'État du Wyoming (États-Unis), sans égard à ses règles de conflit de lois. Les dispositions impératives de protection des consommateurs de votre pays de résidence, y compris en France et dans l'Union européenne, restent applicables, et vous conservez le droit de saisir les juridictions de votre pays de résidence.",
          },
        ],
      },
      {
        id: 't-15',
        title: '15. Modifications',
        blocks: [
          {
            p: "Nous pouvons mettre à jour ces conditions et publierons la nouvelle version ici avec une nouvelle date de mise à jour. L'utilisation continue de l'Application vaut acceptation de la mise à jour.",
          },
        ],
      },
      { id: 't-16', title: '16. Contact', blocks: [{ contact: true }] },
    ] as Section[],
    en: [
      {
        id: 't-1',
        title: '1. Agreement',
        blocks: [
          {
            p: 'These Terms govern your use of the Examen Civique 2026 Prep mobile app (the "App") provided by Hicham Zaidi, an independent developer ("we", "us"). By downloading or using the App you agree to these Terms and our Privacy Policy. If you do not agree, do not use the App. Apple’s standard Licensed Application End User License Agreement also applies unless we provide a custom one.',
          },
        ],
      },
      {
        id: 't-2',
        title: '2. Eligibility',
        blocks: [{ p: 'The App is intended for adults preparing for the civic exam. You must be at least 18 years old to use it.' }],
      },
      {
        id: 't-3',
        title: '3. The App',
        blocks: [
          {
            p: 'The App offers multiple-choice questions, scenario questions, timed mock exams, explanations and progress tracking to help you practise for the French civic exam, in French, English and Arabic. Some features are free and others are part of the "Full access for life" purchase.',
          },
        ],
      },
      {
        id: 't-4',
        title: '4. Independent, Not Official',
        blocks: [
          {
            note: 'We are not affiliated with the French State, the Ministry of the Interior, a prefecture or the body running the civic exam. The App is not the official exam app and uses no official logos.',
          },
          {
            p: 'The real civic exam is run by the competent authorities, in French. Only those authorities can officially inform you about your file, your obligations and the exam arrangements.',
          },
        ],
      },
      {
        id: 't-5',
        title: '5. Sources, Accuracy & Translations',
        blocks: [
          {
            ul: [
              'The knowledge questions reproduce the [Ministry of the Interior’s public lists](' + SOURCE_URL + '). We claim no rights over those questions; our answers, explanations and translations are written by us.',
              'The App’s scenario questions are original. The real exam’s scenario questions are not public and may differ from ours.',
              'The mock exam format (40 questions, 45 minutes, 80% pass mark, topic split) follows our reading of the [decree of 10 October 2025](' + ARRETE_URL + '). Rules can change.',
              'The English and Arabic versions are unofficial study translations. Only the French text is the exam text.',
              'Despite our efforts, a question, answer or explanation may be inaccurate or out of date. Tell us about any error and check official information.',
            ],
          },
        ],
      },
      {
        id: 't-6',
        title: '6. No Legal Advice, No Guarantee of Success',
        blocks: [
          {
            p: 'The App is a study and general information tool. It does not provide legal or administrative advice and does not replace information from your prefecture. We do not guarantee that you will pass the exam or that your application will succeed: those decisions belong to the competent authorities.',
          },
        ],
      },
      {
        id: 't-7',
        title: '7. Your Data',
        blocks: [
          {
            p: 'The App has no account. Your study data is stored on your device (see the Privacy Policy). You are responsible for keeping your device secure; deleting the App or losing your device removes your progress.',
          },
        ],
      },
      {
        id: 't-8',
        title: '8. Full Access for Life',
        blocks: [
          {
            ul: [
              '"Full access for life" is a one-time, non-consumable in-app purchase. It is not a subscription and does not renew.',
              'Payment is charged to your Apple Account at confirmation. The price is shown in the App before you buy.',
              'The purchase unlocks the paid features of the App for as long as we offer the App. You can restore it on any device signed in to the same Apple Account using "Restore purchase".',
              'Refunds are handled by Apple under its policies, at reportaproblem.apple.com. Your statutory consumer rights are unaffected.',
              'We may change which features are free or paid in future versions, but will not remove features you have already unlocked without a reasonable alternative.',
            ],
          },
        ],
      },
      {
        id: 't-9',
        title: '9. Intellectual Property',
        blocks: [
          {
            p: 'The App, including its design, text, explanations, translations, scenario questions and code, belongs to us or our licensors, except for the public questions described in section 5. We grant you a limited, non-exclusive, non-transferable, revocable licence to use the App for your personal use.',
          },
        ],
      },
      {
        id: 't-10',
        title: '10. Acceptable Use',
        blocks: [
          { p: 'You agree not to:' },
          {
            ul: [
              'Reverse-engineer, decompile or modify the App, or circumvent its purchase or licensing checks',
              'Use the App for any unlawful purpose',
              'Resell, sublicence or commercially exploit the App or its content',
              'Present the App as an official State application',
              'Interfere with the App’s operation',
            ],
          },
        ],
      },
      {
        id: 't-11',
        title: '11. Disclaimers',
        blocks: [
          {
            p: 'To the fullest extent permitted by law, the App is provided "as is" and "as available" without warranties of any kind, including accuracy, fitness for a particular purpose and uninterrupted operation. Statutory warranties you enjoy as a consumer are unaffected.',
          },
        ],
      },
      {
        id: 't-12',
        title: '12. Limitation of Liability',
        blocks: [
          {
            p: 'To the fullest extent permitted by law, we are not liable for indirect, incidental, special or consequential damages, or for any loss arising from your reliance on the App, including failing the exam or the refusal of a permit or citizenship. Our total liability for any claim is limited to the amount you paid for the App in the twelve months before the claim. Nothing in these Terms limits liability that cannot be limited by law, including for gross negligence, wilful misconduct or personal injury.',
          },
        ],
      },
      {
        id: 't-13',
        title: '13. Termination',
        blocks: [
          {
            p: 'You can stop using the App at any time by deleting it. We may suspend or end access if you breach these Terms.',
          },
        ],
      },
      {
        id: 't-14',
        title: '14. Governing Law',
        blocks: [
          {
            p: 'These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict-of-law rules. Mandatory consumer-protection rights in your country of residence, including in France and the European Union, remain unaffected, and you keep the right to bring a claim before the courts of your country of residence.',
          },
        ],
      },
      {
        id: 't-15',
        title: '15. Changes',
        blocks: [
          {
            p: 'We may update these Terms and will post the new version here with a new "Last Updated" date. Continued use of the App means you accept the update.',
          },
        ],
      },
      { id: 't-16', title: '16. Contact', blocks: [{ contact: true }] },
    ] as Section[],
  },
};

// ───────────────────────── Support ─────────────────────────
export const SUPPORT = {
  metaTitle: { fr: 'Assistance | Examen Civique Prépa', en: 'Support | Examen Civique Prep' } as L<string>,
  metaDesc: {
    fr: "Obtenez de l'aide pour Examen Civique 2026 : Prépa : achat, restauration, langues et signalement d'une erreur.",
    en: 'Get help with Examen Civique 2026 Prep: purchase, restoring, languages and reporting an error.',
  } as L<string>,
  title: { fr: 'Comment pouvons-nous vous aider ?', en: 'How can we help?' } as L<string>,
  subtitle: { fr: "Réponses sur l'application et moyen de nous joindre", en: 'Answers about the app and how to reach us' } as L<string>,
  emailTitle: { fr: "Assistance par e-mail", en: 'Email support' } as L<string>,
  emailText: { fr: 'Envoyez-nous un message, nous vous répondrons.', en: 'Send us a message and we will get back to you.' } as L<string>,
  emailButton: { fr: 'Nous écrire', en: 'Email us' } as L<string>,
  emailSubject: { fr: "Assistance Examen Civique Prépa", en: 'Examen Civique Prep Support' } as L<string>,
  response: {
    fr: "Nous répondons généralement sous <b>24 à 48 heures</b> en semaine. Merci d'indiquer votre modèle d'iPhone et votre version d'iOS. N'envoyez pas de documents d'identité ni d'informations sur votre dossier de séjour ou de naturalisation.",
    en: 'We usually reply within <b>24–48 hours</b> on weekdays. Please include your iPhone model and iOS version. Do not send identity documents or details of your residence or naturalisation file.',
  } as L<string>,
  faqTag: { fr: 'FAQ', en: 'FAQ' } as L<string>,
  faqTitle: { fr: 'Questions fréquentes', en: 'Common questions' } as L<string>,
  faqs: {
    fr: [
      ["Est-ce l'application officielle de l'examen civique ?", "Non. Cette application est indépendante et n'est affiliée ni à l'État, ni au ministère de l'Intérieur, ni à une préfecture. Elle vous aide à vous entraîner avec des questions issues des listes publiques du ministère. Pour votre dossier et la convocation à l'examen, adressez-vous à votre préfecture."],
      ["Comment restaurer mon achat ?", "Ouvrez l'application, touchez l'écran de déblocage (Réglages → Tout débloquer) et choisissez « Restaurer l'achat ». Vérifiez que vous êtes connecté au compte Apple utilisé pour l'achat."],
      ["J'ai été débité mais les fonctions restent verrouillées.", "Essayez d'abord « Restaurer l'achat ». Si cela ne suffit pas, écrivez-nous avec votre reçu Apple ou le numéro de commande. Les remboursements sont gérés par Apple sur reportaproblem.apple.com."],
      ["L'application est-elle un abonnement ?", "Non. L'accès complet à vie est un achat unique : il n'y a rien à résilier et il ne se renouvelle jamais."],
      ["Quelle est la différence entre CSP, carte de résident et naturalisation ?", "Les listes publiques de questions diffèrent selon le niveau. Choisissez votre objectif dans Réglages : l'application adapte les questions. « Naturalisation » utilise toutes les questions."],
      ["Les questions de mise en situation sont-elles celles de l'examen ?", "Non. Les mises en situation de l'examen ne sont pas publiques. Celles de l'application sont originales et servent à vous entraîner à ce type de question."],
      ["Comment afficher l'arabe ou l'anglais ?", "Choisissez votre langue dans Réglages. Le texte français d'origine peut rester affiché, car l'examen réel est en français. L'arabe passe l'application de droite à gauche et peut demander un redémarrage."],
      ["Où sont mes données ? Puis-je les transférer sur un nouvel iPhone ?", "Uniquement sur votre appareil. Il n'y a ni compte ni cloud. Si vous restaurez un nouvel iPhone depuis une sauvegarde iCloud ou ordinateur, vos données peuvent être restaurées avec ; sinon, votre progression repart de zéro (votre achat, lui, se restaure)."],
      ["J'ai trouvé une erreur dans une question ou une traduction.", "Merci ! Écrivez-nous avec la question concernée et ce qui vous semble incorrect. Nous vérifions ces signalements à chaque mise à jour."],
      ["Le format de l'examen a changé.", "Les règles d'examen peuvent évoluer. Écrivez-nous et vérifiez toujours les informations officielles de votre préfecture."],
    ] as [string, string][],
    en: [
      ['Is this the official civic exam app?', 'No. This app is independent and not affiliated with the State, the Ministry of the Interior or a prefecture. It helps you practise with questions drawn from the Ministry’s public lists. For your file and your exam appointment, contact your prefecture.'],
      ['How do I restore my purchase?', 'Open the app, tap the unlock screen (Settings → Unlock everything) and choose "Restore purchase". Make sure you are signed in to the Apple Account you used to buy it.'],
      ['I was charged but features are still locked.', 'Try "Restore purchase" first. If it does not help, email us with your Apple receipt or order ID. Refunds are handled by Apple at reportaproblem.apple.com.'],
      ['Is it a subscription?', 'No. Full access for life is a single one-time purchase. There is nothing to cancel and it never renews.'],
      ['What is the difference between the multi-year card, resident card and naturalisation?', 'The public question lists differ by level. Choose your goal in Settings and the app adapts the questions. "Naturalisation" uses every question.'],
      ['Are the scenario questions the ones from the exam?', 'No. The real exam’s scenario questions are not public. The app’s are original and help you practise this type of question.'],
      ['How do I show Arabic or English?', 'Pick your language in Settings. The original French text can stay visible, because the real exam is in French. Arabic switches the app to right-to-left and may need a restart.'],
      ['Where is my data? Can I move it to a new iPhone?', 'Only on your device. There is no account or cloud. If you set up a new iPhone from an iCloud or computer backup, your data may come with it; otherwise your progress starts fresh (your purchase can still be restored).'],
      ['I found a mistake in a question or translation.', 'Thank you! Email us with the question and what looks wrong. We review reports with each update.'],
      ['The exam format has changed.', 'Exam rules can change. Email us, and always check your prefecture’s official information.'],
    ] as [string, string][],
  },
};
