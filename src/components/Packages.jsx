'use client';
import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-10 text-center">
  קצת עליי
</h2>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
  dir="rtl"
  className="max-w-3xl mx-auto text-center"
>

  {/* PHOTO PLACEHOLDER */}
  <div className="mb-10 flex justify-center">
  <div className="w-60 h-60 md:w-60 md:h-60 rounded-full overflow-hidden bg-gray-200">
    <img
      src="/profil.jpg"
      alt="שלמה אסולין"
      className="w-full h-full object-cover"
    />
  </div>
</div>
  {/* TEXT */}
  <p className="text-gray-700 text-lg leading-8 mb-6">
    ברוכים הבאים, אני שלמה אסולין, צלם מקצועי שמתמחה בצילומי הריון, משפחה, זוגיות ותדמית.
  </p>

  <p className="text-gray-700 text-lg leading-8 mb-6">
    צילום בשבילי הוא הרבה יותר מללחוץ על כפתור. הוא הדרך לעצור רגע קטן בזמן ולהפוך אותו לזיכרון שיישאר איתכם לכל החיים.
  </p>

  <p className="text-gray-700 text-lg leading-8 mb-6">
    אני מאמין שהתמונות הכי יפות נוצרות כשמרגישים בנוח. לכן אני מלווה אתכם לאורך כל הצילומים, מכוון, מרגיע ודואג שתיהנו מהחוויה.
  </p>

  <p className="text-gray-700 text-lg leading-8 mb-6">
    הסגנון שלי משלב אור טבעי, צבעים חמים והרבה רגש, כדי שכל תמונה תספר את הסיפור שלכם בצורה אמיתית.
  </p>

  <p className="text-gray-700 text-lg leading-8 mb-10">
    אני מתמחה בצילומי הריון, משפחה, זוגיות ו־Save The Date, בריתות ואירועים משפחתיים, וצילומי תדמית לעסקים.
  </p>

  <p className="text-xl md:text-2xl font-serif text-[#dcad5c]">
    כי יש רגעים שלא חוזרים… ואני כאן כדי לשמור אותם בשבילכם 🤍
  </p>
<div className="text-center max-w-4xl mx-auto my-16" dir="rtl">

  <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-10">
    לקוחות ממליצים
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* REVIEW 1 */}
    <div className="bg-white shadow-md rounded-2xl p-6 text-right">
      <p className="text-gray-700 leading-7 mb-4">
        "חוויה מושלמת ! שלמה מקצועי, סבלני ונעים מאוד.
עשינו צילומי הריון בים עם תינוק בן שנה ותשע, ושלמה היה כל כך אכפתי ורגיש לילד, והצליח להוציא תמונות מדהימות תוך יצירת אווירה רגועה וכיפית.
תודה על הסבלנות, היחס החם והזיכרונות היפים 🙏📸"
      </p>
      <span className="text-[#dcad5c] font-medium">★★★★★</span>
      <p className="text-gray-500 text-sm mt-2">לקוח מאומת – Google</p>
    </div>

    {/* REVIEW 2 */}
    <div className="bg-white shadow-md rounded-2xl p-6 text-right">
      <p className="text-gray-700 leading-7 mb-4">
        "תודה ענקית לשלמה על שירות מקצועי, סבלני ומדהים לאורך כל הדרך 😇
היה לנו כל כך כיף להצטלם באווירה נעימה, זורמת ומלאה באנרגיות טובות.
הרגשנו בנוח מהרגע הראשון, והכי אהבנו את הגמישות, ההקשבה והרצון שלך לזרום עם כל הרעיונות שלנו ולהפוך אותם למציאות.
תודה על חוויה מיוחדת ועל זיכרונות יפים שנשארו איתנו🌸🙏"
      </p>
      <span className="text-[#dcad5c] font-medium">★★★★★</span>
      <p className="text-gray-500 text-sm mt-2">לקוחה מאומתת – Google</p>
    </div>

    {/* REVIEW 3 */}
    <div className="bg-white shadow-md rounded-2xl p-6 text-right">
      <p className="text-gray-700 leading-7 mb-4">
        "רצינו להגיד תודה מכל הלב לצלם האלוף שלנו על סבלנות, מקצועיות ואווירה נעימה לאורך כל הצילומים. הצלחת לתפוס רגעים אמיתיים ומלאי אהבה – ואין מאושרים מאיתנו. זכינו"
      </p>
      <span className="text-[#dcad5c] font-medium">★★★★★</span>
      <p className="text-gray-500 text-sm mt-2">לקוח מאומת – Google</p>
    </div>

    {/* REVIEW 4 */}
    <div className="bg-white shadow-md rounded-2xl p-6 text-right">
      <p className="text-gray-700 leading-7 mb-4">
        "עשיתי יום צילומים עם שמלה והיה מעולה, הגיע בזמן ,הלך חלק וראו שהוא יודע מה הוא עושה- אם זה לכוון אותי מול המצלמה או להוציא את הצדדים היפים יותר🥰
קיצור מודע לו המון לכו עליו."
      </p>
      <span className="text-[#dcad5c] font-medium">★★★★★</span>
      <p className="text-gray-500 text-sm mt-2">לקוחה מאומתת – Google</p>
    </div>

  </div>
</div>
</motion.div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              חבילות צילום 
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            צילומי הריון, משפחה, ילדים או תדמית.
            </p>
          </div>

          <div className="border-t border-gray-200 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-4xl md:text-5xl font-serif font-bold text-[#dcad5c]">
        חבילות צילום החל מ-850 ₪
            </div>
            
          </div>

          <div className="text-center max-w-2xl mx-auto my-12" dir="rtl">


  <p className="text-gray-700 text-lg leading-8 mb-6">
    אני מציע חוויית צילום מקצועית, רגועה ונעימה שמתאימה לצילומי הריון, משפחה, זוגיות ותדמית.
  </p>

  <p className="text-gray-700 text-lg leading-8 mb-6">
    הצילומים מתקיימים באווירה קלילה וטבעית, עם ליווי מלא שלי לאורך כל הסשן כדי שתרגישו בנוח ותיהנו מהחוויה.
  </p>

  <p className="text-gray-700 text-lg leading-8 mb-6">
    במהלך הצילומים תקבלו זמן איכות אמיתי, ללא לחץ, עם דגש על רגעים טבעיים ותמונות שמספרות את הסיפור שלכם בצורה הכי יפה שיש.
  </p>

  <p className="text-gray-700 text-lg leading-8 mb-8">
    בסיום תקבלו גלריה של תמונות ערוכות ברמה גבוהה, מוכנות לשיתוף ולהדפסה.
  </p>

  <p className="text-xl md:text-2xl font-serif text-[#dcad5c] mb-8">
    רוצים פרטים או לבדוק תאריך פנוי?
  </p>
</div>

          <div className="text-center">
            <motion.button
              className="bg-[#dcad5c] hover:bg-[#eac27b] text-white hover:cursor-pointer px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const message = encodeURIComponent('שלום! אני מעוניין/ת במידע על חבילות הצילום שלך');
                window.open(`https://wa.me/972536670760?text=${message}`,'_blank');
              }}
            >
    דברו איתי בוואטסאפ 
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
