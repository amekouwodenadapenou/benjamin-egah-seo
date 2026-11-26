/* ===== Bilinguisme FR / EN ===== */
(function(){
  var LANG = localStorage.getItem('lang') || 'fr';

  var T = {
    /* Navigation */
    'nav-services':     { fr: 'Services',   en: 'Services' },
    'nav-portfolio':    { fr: 'Portfolio',  en: 'Portfolio' },
    'nav-resultats':    { fr: 'Résultats',  en: 'Results' },
    'nav-apropos':      { fr: 'À propos',   en: 'About' },
    'nav-temoignages':  { fr: 'Témoignages',en: 'Testimonials' },
    'nav-cta':          { fr: 'Audit gratuit', en: 'Free audit' },
    'nav-reserver':     { fr: 'Réserver un créneau', en: 'Book a slot' },

    /* Hero */
    'hero-label':       { fr: 'Consultant SEO', en: 'SEO Consultant' },
    'hero-h1':          { fr: 'Apparaissez en premier sur <span class="hl" style="color:#EE9822">Google</span>.', en: 'Rank first on <span class="hl" style="color:#EE9822">Google</span>.' },
    'hero-body':        { fr: "J'aide les entreprises, commerces et organisations à gagner en visibilité sur Google, à attirer des clients qualifiés et à transformer chaque recherche en appel, message WhatsApp ou vente.", en: "I help businesses, shops and organisations gain visibility on Google, attract qualified customers and turn every search into a call, WhatsApp message or sale." },
    'hero-cta':         { fr: 'Demander un audit gratuit', en: 'Request a free audit' },
    'hero-card-title':  { fr: 'Benjamin EGAH', en: 'Benjamin EGAH' },
    'hero-card-sub':    { fr: 'Audit, SEO local, contenu et suivi mensuel.', en: 'Audit, local SEO, content and monthly tracking.' },

    /* Chiffres clés */
    'stats-label':      { fr: 'Chiffres clés', en: 'Key figures' },
    'stats-h2':         { fr: 'Des résultats concrets, mesurés chaque mois.', en: 'Concrete results, measured every month.' },
    'stat1-num':        { fr: '2 ans', en: '2 years' },
    'stat1-desc':       { fr: "d'expérience en référencement naturel et en création de sites", en: 'of experience in SEO and website creation' },
    'stat2-desc':       { fr: "entreprises et organisations accompagnées jusqu'ici", en: 'businesses and organisations supported so far' },
    'stat3-desc':       { fr: 'de trafic organique en moyenne après 6 mois de collaboration', en: 'average organic traffic growth after 6 months' },
    'stat4-desc':       { fr: "plus d'appels et de messages WhatsApp grâce à une fiche Google optimisée", en: 'more calls and WhatsApp messages from an optimised Google profile' },

    /* Services */
    'services-label':   { fr: 'Services', en: 'Services' },
    'services-h2':      { fr: 'Un accompagnement SEO complet.', en: 'Complete SEO support.' },
    'services-body':    { fr: "Adapté à votre activité et à votre marché. Vos clients cherchent sur leur téléphone, dans leur langue, au moment où ils ont besoin de vous. Je construis votre visibilité autour de ces habitudes.", en: "Tailored to your business and your market. Your customers search on their phones, in their language, when they need you. I build your visibility around those habits." },
    'svc1-title':       { fr: 'Audit SEO complet', en: 'Full SEO Audit' },
    'svc1-body':        { fr: "Analyse de votre site, de vos concurrents et de vos mots-clés. Vous recevez un rapport clair avec les priorités à traiter en premier.", en: "Analysis of your site, competitors and keywords. You receive a clear report with the top priorities to address first." },
    'svc2-title':       { fr: 'SEO local et Google Maps', en: 'Local SEO & Google Maps' },
    'svc2-body':        { fr: "Optimisation de votre fiche Google Business Profile pour apparaître dans les recherches « près de moi », avec avis, photos et horaires à jour.", en: "Optimising your Google Business Profile to appear in 'near me' searches, with up-to-date reviews, photos and opening hours." },
    'svc3-title':       { fr: 'Contenu et mots-clés', en: 'Content & Keywords' },
    'svc3-body':        { fr: "Recherche des mots-clés que tapent vos clients, puis plan éditorial et articles, dans la langue de votre public, qui répondent à leurs vraies questions.", en: "Keyword research based on what your customers type, then an editorial plan and articles in your audience's language that answer their real questions." },
    'svc4-title':       { fr: 'SEO technique et mobile', en: 'Technical & Mobile SEO' },
    'svc4-body':        { fr: "Vitesse de chargement sur connexion mobile, structure du site, balises et indexation. Votre site reste rapide même sur une connexion lente.", en: "Loading speed on mobile connections, site structure, tags and indexing. Your site stays fast even on a slow connection." },
    'svc5-title':       { fr: 'Liens et notoriété locale', en: 'Links & Local Authority' },
    'svc5-body':        { fr: "Présence dans les annuaires, médias et sites partenaires de votre secteur et de votre région pour renforcer la confiance de Google dans votre site.", en: "Presence in directories, media and partner sites in your sector and region to strengthen Google's trust in your site." },
    'svc6-title':       { fr: 'Suivi et rapport mensuel', en: 'Monthly Tracking & Report' },
    'svc6-body':        { fr: "Positions, trafic, appels et messages WhatsApp suivis dans Google Search Console et Analytics. Un point mensuel, sans jargon.", en: "Rankings, traffic, calls and WhatsApp messages tracked in Google Search Console and Analytics. A monthly review, jargon-free." },

    /* Portfolio */
    'portfolio-label':  { fr: 'Portfolio', en: 'Portfolio' },
    'portfolio-h2':     { fr: "Des sites que j'ai créés et optimisés.", en: 'Sites I built and optimised.' },
    'portfolio-body':   { fr: "Chaque projet est pensé pour être rapide, clair et bien placé sur Google. Ouvrez-les et jugez par vous-même.", en: "Every project is designed to be fast, clear and well-ranked on Google. Open them and judge for yourself." },
    'portfolio-cta':    { fr: 'Parler de mon projet', en: 'Discuss my project' },
    'portfolio-next':   { fr: 'Votre site pourrait être le prochain de cette liste.', en: 'Your site could be the next on this list.' },
    'p1-cat':           { fr: 'Boutique en ligne', en: 'Online shop' },
    'p1-body':          { fr: "Création du site et optimisation des fiches produits pour attirer des acheteurs depuis Google.", en: "Site creation and product listing optimisation to attract buyers from Google." },
    'p2-cat':           { fr: 'Site vitrine', en: 'Showcase site' },
    'p2-body':          { fr: "Site d'entreprise rapide et lisible sur mobile, avec une structure pensée pour le référencement.", en: "Fast, mobile-friendly business site with an SEO-first structure." },
    'p3-cat':           { fr: 'Organisation', en: 'Organisation' },
    'p3-body':          { fr: "Refonte du site et du contenu pour être trouvé sur les recherches qui comptent pour son public.", en: "Full site and content overhaul to rank for the searches that matter to its audience." },
    'visit-site':       { fr: 'Visiter le site', en: 'Visit site' },

    /* À propos */
    'apropos-label':    { fr: 'À propos', en: 'About' },
    'apropos-h2':       { fr: 'Un consultant à votre écoute.', en: 'A consultant who listens.' },
    'apropos-p1':       { fr: "Je m'appelle Benjamin EGAH, consultant SEO. Je travaille avec des PME, hôtels, cliniques, écoles, boutiques en ligne et organisations qui veulent être trouvés par leurs clients, chez eux comme à l'international.", en: "My name is Benjamin EGAH, SEO consultant. I work with SMEs, hotels, clinics, schools, online shops and organisations that want to be found by their customers — locally and internationally." },
    'apropos-p2':       { fr: "Je connais vos réalités : clients qui cherchent depuis leur téléphone, échanges sur WhatsApp, concurrence qui se joue souvent sur Google Maps. Chaque stratégie part de là.", en: "I know your reality: customers searching on their phones, conversations on WhatsApp, competition that often plays out on Google Maps. Every strategy starts from there." },
    'apropos-pt':       { fr: '<strong>Transparence totale.</strong> Vous savez ce que je fais, pourquoi et avec quels résultats.', en: '<strong>Full transparency.</strong> You know what I do, why, and with what results.' },
    'apropos-pm':       { fr: '<strong>Priorité au mobile.</strong> Votre site est pensé d\'abord pour l\'écran du téléphone.', en: '<strong>Mobile first.</strong> Your site is designed for the phone screen first.' },
    'apropos-pr':       { fr: '<strong>Résultats mesurables.</strong> Positions, appels et ventes suivis chaque mois.', en: '<strong>Measurable results.</strong> Rankings, calls and sales tracked every month.' },

    /* Méthode */
    'methode-label':    { fr: 'Ma méthode', en: 'My method' },
    'methode-h2':       { fr: 'Quatre étapes, du diagnostic aux résultats.', en: 'Four steps, from diagnosis to results.' },
    'step1-title':      { fr: 'Diagnostic', en: 'Diagnosis' },
    'step1-body':       { fr: "J'analyse votre site, vos concurrents et vos mots-clés pour repérer ce qui vous freine et ce qui peut vous rapporter vite.", en: "I analyse your site, competitors and keywords to identify what is holding you back and what can deliver quick wins." },
    'step2-title':      { fr: 'Stratégie', en: 'Strategy' },
    'step2-body':       { fr: "Nous fixons ensemble les priorités, les pages à travailler et les objectifs, avec un calendrier simple à suivre.", en: "We set priorities, target pages and goals together, with a simple schedule to follow." },
    'step3-title':      { fr: 'Mise en œuvre', en: 'Implementation' },
    'step3-body':       { fr: "Je corrige la technique, optimise vos pages et produis le contenu qui répond aux recherches de vos clients.", en: "I fix technical issues, optimise your pages and produce content that answers your customers' searches." },
    'step4-title':      { fr: 'Suivi', en: 'Tracking' },
    'step4-body':       { fr: "Chaque mois, vous recevez un rapport clair : positions, visites, contacts. Nous ajustons selon les résultats.", en: "Every month you receive a clear report: rankings, visits, contacts. We adjust based on the results." },

    /* Témoignages */
    'temoignages-label':{ fr: 'Témoignages', en: 'Testimonials' },
    'temoignages-h2':   { fr: 'Ce que disent les entreprises accompagnées.', en: 'What supported businesses say.' },
    'quote1':           { fr: "« Notre restaurant apparaît maintenant dans les premiers résultats Google Maps de notre ville. Les réservations par WhatsApp ont nettement augmenté dès le troisième mois. »", en: '"Our restaurant now appears in the top Google Maps results for our city. WhatsApp bookings increased noticeably from the third month."' },
    'quote1-role':      { fr: 'Gérant, restaurant', en: 'Manager, restaurant' },
    'quote2':           { fr: "« Benjamin a corrigé les lenteurs de notre boutique en ligne et structuré nos fiches produits. Le trafic venu de Google a nettement progressé en six mois. »", en: '"Benjamin fixed our online shop speed issues and structured our product listings. Traffic from Google improved significantly in six months."' },
    'quote2-role':      { fr: 'Fondatrice, boutique de mode en ligne', en: 'Founder, online fashion boutique' },
    'quote3':           { fr: "« Des explications simples, un rapport clair chaque mois et un vrai suivi. Notre clinique reçoit plus de demandes de rendez-vous depuis la recherche Google. »", en: '"Simple explanations, a clear monthly report and real follow-up. Our clinic receives more appointment requests from Google search."' },
    'quote3-role':      { fr: 'Directeur, clinique privée', en: 'Director, private clinic' },

    /* FAQ */
    'faq-label':        { fr: 'Questions fréquentes', en: 'FAQ' },
    'faq-h2':           { fr: 'Ce que mes clients me demandent le plus.', en: 'What my clients ask most.' },
    'faq1-q':           { fr: 'En combien de temps verrai-je des résultats ?', en: 'How long before I see results?' },
    'faq1-a':           { fr: 'Les premiers effets apparaissent en général entre 3 et 6 mois. Le délai dépend de votre secteur, de la concurrence et de l\'état actuel de votre site.', en: 'First effects usually appear between 3 and 6 months. The timeline depends on your sector, competition and your site\'s current state.' },
    'faq2-q':           { fr: 'Travaillez-vous à distance ?', en: 'Do you work remotely?' },
    'faq2-a':           { fr: 'Oui. Nous échangeons par visioconférence, téléphone ou WhatsApp, et je peux accompagner des entreprises dans plusieurs pays.', en: 'Yes. We communicate by video call, phone or WhatsApp, and I can support businesses in multiple countries.' },
    'faq3-q':           { fr: 'Combien coûte un accompagnement SEO ?', en: 'How much does SEO support cost?' },
    'faq3-a':           { fr: "Chaque mission est chiffrée après l'audit gratuit, selon la taille de votre site et vos objectifs. Vous recevez un devis clair avant de commencer.", en: 'Every project is priced after the free audit, based on your site size and goals. You receive a clear quote before we start.' },
    'faq4-q':           { fr: 'Dois-je refaire mon site ?', en: 'Do I need to rebuild my site?' },
    'faq4-a':           { fr: "Pas forcément. L'audit indique ce qui peut être corrigé sur votre site actuel et ce qui mérite d'être reconstruit.", en: 'Not necessarily. The audit shows what can be fixed on your current site and what is worth rebuilding.' },
    'faq5-q':           { fr: 'Quelle différence avec la publicité sur Google ?', en: 'What is the difference from Google Ads?' },
    'faq5-a':           { fr: "La publicité s'arrête dès que vous cessez de payer. Le SEO construit une visibilité durable qui continue d'attirer des visiteurs mois après mois.", en: 'Ads stop the moment you stop paying. SEO builds lasting visibility that keeps attracting visitors month after month.' },

    /* Contact */
    'contact-h2':       { fr: 'Votre site mérite d\'être trouvé.', en: 'Your site deserves to be found.' },
    'contact-body':     { fr: "Choisissez un jour et un horaire, puis laissez vos coordonnées. Je regarde votre site, votre fiche Google et vos concurrents, puis je vous dis où se trouvent vos meilleures opportunités.", en: "Pick a day and time, then leave your details. I look at your site, your Google profile and your competitors, then tell you where your best opportunities lie." },
    'rdv-step1':        { fr: 'Choisissez un créneau', en: 'Choose a slot' },
    'rdv-hint':         { fr: 'Rendez-vous de 30 minutes, du lundi au vendredi, réservables jusqu\'à 3 mois à l\'avance. Horaires en heure de Lomé (GMT).', en: '30-minute appointment, Monday to Friday, bookable up to 3 months ahead. Times in Lomé time (GMT).' },
    'rdv-step2':        { fr: 'Vos coordonnées', en: 'Your details' },
    'lbl-name':         { fr: 'Nom complet', en: 'Full name' },
    'lbl-email':        { fr: 'E-mail', en: 'E-mail' },
    'lbl-phone':        { fr: 'WhatsApp ou téléphone', en: 'WhatsApp or phone' },
    'lbl-site':         { fr: 'Votre site (facultatif)', en: 'Your site (optional)' },
    'lbl-need':         { fr: 'Votre besoin', en: 'Your need' },
    'lbl-msg':          { fr: 'Message (facultatif)', en: 'Message (optional)' },
    'pick-empty':       { fr: "Aucun créneau choisi pour l'instant.", en: 'No slot chosen yet.' },
    'btn-wa':           { fr: 'Écrire sur WhatsApp', en: 'Write on WhatsApp' },
    'btn-submit':       { fr: 'Confirmer ma demande', en: 'Confirm my request' },
    'free-label':       { fr: 'Gratuit et sans engagement.', en: 'Free and no commitment.' },
    'done-thanks':      { fr: 'Merci !', en: 'Thank you!' },
    'btn-wa-done':      { fr: 'Envoyer aussi sur WhatsApp', en: 'Also send on WhatsApp' },
    'btn-modify':       { fr: 'Modifier ma demande', en: 'Edit my request' },

    /* Footer */
    'footer-tagline':   { fr: 'Consultant SEO. Je vous aide à être trouvé sur Google par vos clients, où qu\'ils soient.', en: 'SEO Consultant. I help your customers find you on Google, wherever they are.' },
    'footer-services':  { fr: 'Services', en: 'Services' },
    'footer-contact':   { fr: 'Contact', en: 'Contact' },
    'footer-location':  { fr: 'Basé à Lomé, Togo', en: 'Based in Lomé, Togo' },
    'footer-hours':     { fr: 'Lun – Ven, 8h – 18h', en: 'Mon – Fri, 8am – 6pm' },
    'footer-legal':     { fr: 'Mentions légales · Politique de confidentialité', en: 'Legal notice · Privacy policy' },
    'footer-copy':      { fr: '© 2026 Benjamin EGAH. Tous droits réservés.', en: '© 2026 Benjamin EGAH. All rights reserved.' },

    /* Mobile bar */
    'mbar-book':        { fr: 'Réserver un créneau', en: 'Book a slot' },

    /* Banderole */
    'ticker1':          { fr: 'Audit SEO gratuit de votre site, sans engagement.', en: 'Free SEO audit of your site, no commitment.' },
    'ticker2':          { fr: 'Rendez-vous de 30 minutes, sans engagement.', en: '30-minute appointment, no commitment.' },
    'ticker-cta':       { fr: 'Réserver mon créneau', en: 'Book my slot' },
  };

  function apply(lang){
    LANG = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(T[key] && T[key][lang] !== undefined){
        if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
          el.placeholder = T[key][lang];
        } else if(el.tagName === 'LABEL'){
          el.textContent = T[key][lang];
        } else {
          el.innerHTML = T[key][lang];
        }
      }
    });
    /* Mettre à jour les placeholders du calendrier JS */
    var pick = document.getElementById('pick');
    if(pick && pick.textContent.trim() && !document.querySelector('[data-k].sel')){
      pick.textContent = T['pick-empty'][lang];
    }
    /* Mettre à jour aria-label du bouton langue */
    var btn = document.getElementById('lang-btn');
    if(btn){ btn.textContent = lang === 'fr' ? 'EN' : 'FR'; btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français'); }
    /* Mettre à jour html lang */
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
    /* Mettre à jour le title */
    document.title = lang === 'fr' ? 'Benjamin EGAH, consultant SEO' : 'Benjamin EGAH, SEO consultant';
  }

  /* Initialiser au chargement */
  document.addEventListener('DOMContentLoaded', function(){ apply(LANG); });

  /* Exposer pour le bouton */
  window.toggleLang = function(){
    apply(LANG === 'fr' ? 'en' : 'fr');
  };
})();
