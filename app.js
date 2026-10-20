// ===== Visit Bisha — البيانات + المنطق (ملف واحد) =====

// صورة ممثلة لكل تصنيف
const CATEGORY_IMAGES = {
  mosque:      "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/8c9923d71_generated_image.png",
  hospital:    "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/8d09c8e75_generated_image.png",
  restaurant:  "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/0830231a8_generated_image.png",
  cafe:        "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/0999aacb3_generated_image.png",
  hotel:       "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/988d1c278_generated_image.png",
  park:        "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/17fc80f56_generated_image.png",
  mall:        "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/ca297baad_generated_image.png",
  pharmacy:    "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/9d2c67257_generated_image.png",
  bank:        "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/bbaf223a3_generated_image.png",
  gas_station: "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/030d3ef98_generated_image.png",
  attraction:  "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/9b9d56f0d_generated_image.png"
};

// صور حقيقية للمعالم
const REAL_PHOTOS = {
  "سد الملك فهد": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/88bcdd924_.jpg",
  "قلعة بيشة (المحلف)": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/0233c70e7_.jpg",
  "قرية تبالة التاريخية": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/7378b753d_.webp",
  "جبل الصايرة": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/80e97f1d7_.jpeg",
  "ميدان فروستية بيشة": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/e92744c32_.jpeg",
  "قصر ابن هتل التاريخي": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/1cb3d7182_.jpeg",
  "قصر شعلان": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/59909457c_.jpeg",
  "ممشى الروضة": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/2f50c8b81_.jpg",
  "إدارة مطار بيشة": "https://media.base44.com/images/public/6aca645eafa4c4aa5f34ec18/9d7f89138_.jpg"
};

const CATEGORIES = [
  { key: "mosque",      label: "مساجد",       emoji: "🕌", color: "#16a34a", bg: "#dcfce7" },
  { key: "hospital",    label: "مستشفيات",    emoji: "🏥", color: "#dc2626", bg: "#fee2e2" },
  { key: "restaurant",  label: "مطاعم",       emoji: "🍽️", color: "#ea580c", bg: "#ffedd5" },
  { key: "cafe",        label: "مقاهي",       emoji: "☕", color: "#92400e", bg: "#fef3c7" },
  { key: "hotel",       label: "فنادق",       emoji: "🏨", color: "#7c3aed", bg: "#ede9fe" },
  { key: "park",        label: "حدائق",       emoji: "🌳", color: "#15803d", bg: "#d1fae5" },
  { key: "mall",        label: "تسوق",        emoji: "🛍️", color: "#0ea5e9", bg: "#e0f2fe" },
  { key: "pharmacy",    label: "صيدليات",    emoji: "💊", color: "#0891b2", bg: "#cffafe" },
  { key: "bank",        label: "بنوك",        emoji: "🏦", color: "#475569", bg: "#e2e8f0" },
  { key: "gas_station", label: "محطات وقود",  emoji: "⛽", color: "#ca8a04", bg: "#fef9c3" },
  { key: "attraction",  label: "معالم",       emoji: "📸", color: "#db2777", bg: "#fce7f3" }
];
const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map(c => [c.key, c]));

const PLACES = [
  // مساجد
  { name: "جامع الملك عبدالعزيز", cat: "mosque", lat: 20.0191693, lng: 42.6086462, rating: 4.2, addr: "حي النخيل، بيشة 67716", desc: "تعد من أكبر وأبرز الجوامع في مدينة بيشة وتقع في قلب حي النخيل." },
  { name: "مسجد الرحمة", cat: "mosque", lat: 20.0045833, lng: 42.6055499, rating: 5, addr: "شارع البلدي، حي البلدية، بيشة 67711", desc: "مسجد معروف تقع في منطقة حيوية بالقرب من الخدمات التجارية في حي البلدية." },
  { name: "مسجد محمد بن خشيل", cat: "mosque", lat: 20.0331091, lng: 42.634181, rating: 4.5, addr: "حي النسيم، بيشة 67841", desc: "مسجد يخدم سكان حي النسيم ويتميز بموقعه في أحد الأحياء السكنية الهادئة." },
  { name: "جامع الرضوان", cat: "mosque", lat: 20.0039376, lng: 42.6048571, rating: 4, addr: "حي الفهد، بيشة 67711", desc: "جامع رئيستي في حي الفهد يرتاده الكثير من المصلين في المنطقة." },
  { name: "مسجد الفردوس", cat: "mosque", lat: 20.0230486, lng: 42.6489821, rating: 4.1, addr: "طريق الملك سعود، حي النسيم، بيشة 67841", desc: "مسجد تقع على طريق حيوي في حي النسيم وتخدم المسافرين والمقيمين." },
  { name: "مسجد صلاح الدين", cat: "mosque", lat: 19.9897946, lng: 42.6030401, rating: 4.1, addr: "حي الفهد، بيشة 67712", desc: "مسجد تقع في منطقة مركزية داخل حي الفهد بمدينة بيشة." },
  { name: "مسجد بن حماد", cat: "mosque", lat: 20.0110375, lng: 42.616061, rating: 4.6, addr: "حي الخزامى، بيشة 67711", desc: "مسجد يخدم سكان حي الخزامى ويتميز بتصميمه المعماري التقليدي." },
  { name: "جامع الشداخة", cat: "mosque", lat: 20.0369966, lng: 42.5907804, rating: 4.4, addr: "حي النخيل، بيشة 67714", desc: "جامع معروف في حي النخيل يخدم التجمعات السكنية المحيطة به." },
  { name: "مسجد السلام", cat: "mosque", lat: 20.0270327, lng: 42.6387912, rating: 4.4, addr: "حي النسيم، بيشة 67841", desc: "مسجد تقع في حي النسيم وتعد من المساجد النشيطة في المنطقة." },
  { name: "جامع سوق الربوع", cat: "mosque", lat: 20.0061159, lng: 42.6003461, rating: 4.8, addr: "طريق الملك فيصل، حي النخيل، بيشة 67716", desc: "جامع تاريخي تقع بالقرب من منطقة السوق القديم في حي النخيل." },
  // مستشفيات
  { name: "مركز صحة صمخ", cat: "hospital", lat: 19.9522, lng: 42.5812, rating: 4.3, addr: "مركز صمخ، بيشة", desc: "مركز رعاية صحية أولية يخدم سكان مركز صمخ التابع لمحافظة بيشة." },
  { name: "مستشفى الولادة والأطفال ببيشة", cat: "hospital", lat: 20.0055, lng: 42.6155, rating: 4.1, addr: "حي الخالدية، بيشة", desc: "مستشفى متخصص في رعاية الأمومة والطفولة وتقدم الخدمات التخصصية للأطفال." },
  { name: "مستشفى الصحة النفسية ببيشة", cat: "hospital", lat: 20.0122, lng: 42.6255, rating: 4, addr: "طريق المطار، بيشة", desc: "مستشفى متخصص في تقديم خدمات الصحة النفسية والرعاية التأهيلية." },
  { name: "مستشفى الملك عبدالله بن عبدالعزيز", cat: "hospital", lat: 20.0012, lng: 42.6125, rating: 4.2, addr: "طريق الملك عبدالله، حي الخالدية، بيشة", desc: "المستشفى المرجعي الرئيسي في محافظة بيشة وتقدم خدمات طبية متكاملة." },
  { name: "مستشفى المدواة", cat: "hospital", lat: 19.9955, lng: 42.6082, rating: 4.1, addr: "شارع الملك سعود، بيشة", desc: "مستشفى خاص تقدم خدمات الرعاية الصحية والعمليات الجراحية للمراجعين." },
  { name: "مستشفى تبالة العام", cat: "hospital", lat: 20.0215, lng: 42.5891, rating: 4, addr: "مركز تبالة، محافظة بيشة", desc: "مستشفى عام يخدم سكان مركز تبالة والمناطق المحيطة به في بيشة." },
  { name: "مركز صحة الروشن", cat: "hospital", lat: 19.9882, lng: 42.6055, rating: 4.6, addr: "حي الروشن، بيشة", desc: "مركز رعاية صحية أولية تقدم خدماتها المناوبة لسكان حي الروشن." },
  { name: "مركز صحة جنوب المدينة", cat: "hospital", lat: 19.9755, lng: 42.6012, rating: 4.5, addr: "حي جنوب المدينة، بيشة", desc: "مركز رعاية أولية تقدم خدمات طبية أساسية ومناوبة لسكان جنوب المدينة." },
  { name: "مركز صحة النقيع", cat: "hospital", lat: 20.0355, lng: 42.6215, rating: 4.3, addr: "مركز النقيع، بيشة", desc: "مركز صحي حكومي يخدم أهالي منطقة النقيع التابعة لمحافظة بيشة." },
  { name: "مستوصف بيشة الطبي", cat: "hospital", lat: 19.9921, lng: 42.6045, rating: 4.2, addr: "وسط المدينة، شارع الملك فيصل، بيشة", desc: "مستوصف طبي تقدم خدمات العيادات الخارجية والفحوصات الطبية الأساسية." },
  // مطاعم
  { name: "مطعم الشوكة الأنيقة", cat: "restaurant", lat: 20.0012, lng: 42.6125, rating: 4.3, addr: "حي الخزامى، بيشة", desc: "مطعم تقدم تجربة طعام ممتازة في أجواء راقية بمدينة بيشة." },
  { name: "مطعم الشعلة", cat: "restaurant", lat: 19.9985, lng: 42.6082, rating: 4.6, addr: "طريق الملك سعود، بيشة", desc: "من المطاعم المعروفة في بيشة بتقدم الوجبات الشعبية والمشويات." },
  { name: "مطعم جريف بيشة", cat: "restaurant", lat: 19.9954, lng: 42.6051, rating: 4.8, addr: "طريق الملك فيصل، حي الفهد، بيشة", desc: "مطعم تقدم مأكولات متنوعة ويتميز بخدمة جيدة وموقع حيوي." },
  { name: "مطعم شوزان لاونج", cat: "restaurant", lat: 20.0031, lng: 42.6154, rating: 3.9, addr: "حي الخزامى، بيشة", desc: "لاونج ومطعم عصري تقدم قائمة متنوعة من الأطباق في بيئة مريحة." },
  { name: "مطعم منتي الجنوب", cat: "restaurant", lat: 19.9921, lng: 42.6012, rating: 4.2, addr: "شارع الملك فيصل، بيشة", desc: "وجهة مفضلة لمحبي المندي والأكلات الشعبية السعودية الأصيلة." },
  { name: "مطعم البرجر الطازج", cat: "restaurant", lat: 20.0045, lng: 42.6098, rating: 4.7, addr: "حي الخزامى، بيشة", desc: "مطعم متخصص في تقديم وجبات البرجر الطازجة والمحضرة محلياً." },
  { name: "مطعم مشويات بيشة", cat: "restaurant", lat: 19.9978, lng: 42.6035, rating: 4.2, addr: "وسط المدينة، بيشة", desc: "مطعم متخصص في تقديم مختلف أنواع المشويات الطازجة." },
  { name: "ألبيترو ديل كافيه", cat: "restaurant", lat: 20.0022, lng: 42.6111, rating: 4.8, addr: "حي الخزامى، بيشة", desc: "مقهى ومطعم تقدم خيارات متنوعة من القهوة والوجبات الخفيفة." },
  { name: "مطعم بيتزا هت", cat: "restaurant", lat: 20.0056, lng: 42.6132, rating: 4.4, addr: "طريق الملك سعود، بيشة", desc: "فرع لسلسلة مطاعم البيتزا العالمية الشهيرة في قلب بيشة." },
  { name: "مطعم عين المشاويت", cat: "restaurant", lat: 19.9965, lng: 42.6077, rating: 4.4, addr: "حي الخزامى، بيشة", desc: "مطعم متخصص في تقديم المشويات بأسعار مناسبة وجودة عالية." },
  // مقاهي
  { name: "مقهى لقى النسائيت", cat: "cafe", lat: 19.9985, lng: 42.6012, rating: 4.9, addr: "حي الخزامى، بيشة 67711", desc: "مقهى مخصص للنساء يتميز بأجواء هادئة وخدمة ممتازة." },
  { name: "كافيه بارنز", cat: "cafe", lat: 20.0012, lng: 42.6055, rating: 4.7, addr: "طريق الملك سعود، بيشة", desc: "سلسلة مقاهي شهيرة تقدم القهوة المختصة والمشروبات الساخنة والباردة." },
  { name: "مقهى حفيظ", cat: "cafe", lat: 19.9955, lng: 42.6088, rating: 4.3, addr: "حي الخزامى، بيشة", desc: "مقهى أدبي وثقافي توفر أجواء هادئة ومكتبة لمحبي القراءة." },
  { name: "بريسكو بيشة", cat: "cafe", lat: 20.0034, lng: 42.6021, rating: 4.2, addr: "شارع الملك فيصل، بيشة", desc: "مقهى ومخبز تشتهر بتقديم الدونات الطازجة والقهوة المتنوعة." },
  { name: "رشفة سوداء", cat: "cafe", lat: 19.9978, lng: 42.6045, rating: 4.6, addr: "حي الفهد، بيشة", desc: "مقهى عصري تقدم خيارات متنوعة من القهوة المختصة." },
  { name: "لامير كافيه", cat: "cafe", lat: 20.0021, lng: 42.6067, rating: 4.3, addr: "طريق الملك سعود، بيشة", desc: "مقهى يتميز بديكورات أنيقة وجلسات مريحة للزوار." },
  { name: "قهوة الأحصنة", cat: "cafe", lat: 19.9942, lng: 42.6039, rating: 4.6, addr: "حي الخزامى، بيشة", desc: "مقهى محل تقدم تجربة قهوة ممتازة في قلب مدينة بيشة." },
  { name: "لون الكرك", cat: "cafe", lat: 20.0051, lng: 42.6015, rating: 4.3, addr: "شارع الملك فهد، بيشة", desc: "مقهى متخصص في تقديم شاي الكرك والمشروبات الشعبية." },
  { name: "إمبالا كافيه", cat: "cafe", lat: 19.9966, lng: 42.6028, rating: 4.5, addr: "حي الخزامى، بيشة", desc: "مقهى تقدم تشكيلة واسعة من المشروبات والحلويات في أجواء عصرية." },
  { name: "كافيه 17 ديسمبر", cat: "cafe", lat: 19.9991, lng: 42.6072, rating: 4.2, addr: "حي الخزامى، بيشة", desc: "مقهى تقدم تجربة قهوة فريدة مع خيارات متنوعة من المشروبات الساخنة." },
  // فنادق
  { name: "فندق سنترال بارك بيشة", cat: "hotel", lat: 20.0012, lng: 42.6125, rating: 4.6, addr: "بيشة، المملكة العربية السعودية", desc: "فندق مريح توفر مرافق عصرية مثل المسبح المدفأ والساونا والجاكوزي." },
  { name: "وحدات دار الجود الفندقية", cat: "hotel", lat: 19.9985, lng: 42.6082, rating: 4.8, addr: "طريق الملك فيصل، بيشة", desc: "شقق فندقية مريحة تقع بالقرب من مطار بيشة وتوفر مواقف سيارات مجانية." },
  { name: "فندق خبتي قراند", cat: "hotel", lat: 19.9954, lng: 42.6051, rating: 4.1, addr: "طريق الملك فيصل، بيشة", desc: "فندق فخم يتميز بإطلالات على المدينة وخدمات فندقية متكاملة." },
  { name: "فندق إتفان", cat: "hotel", lat: 20.0031, lng: 42.6015, rating: 4.4, addr: "طريق الملك سعود، حي الخزامى، بيشة", desc: "فندق توفر إقامة مريحة في موقع حيوي بمدينة بيشة." },
  { name: "فندق الاء بيشة", cat: "hotel", lat: 20.0025, lng: 42.6022, rating: 4.1, addr: "شارع موسى، حي الخزامى، بيشة", desc: "فندق معروف في حي الخزامى تقدم خدمات إقامة متنوعة للزوار." },
  { name: "فندق الزهرة", cat: "hotel", lat: 19.9978, lng: 42.6095, rating: 4.8, addr: "طريق الملك فيصل، بيشة", desc: "فندق توفر غرف مجهزة وخدمات إقامة أساسية في قلب بيشة." },
  { name: "فندق خزامى بيشة", cat: "hotel", lat: 20.0045, lng: 42.6038, rating: 5, addr: "شارع الأمير سلطان، بيشة", desc: "فندق تقع في منطقة حيوية وتوفر خيارات إقامة مريحة للضيوف." },
  { name: "فندق عبدالعزيز الفحام", cat: "hotel", lat: 20.0035, lng: 42.6018, rating: 4.1, addr: "طريق الملك سعود، حي الخزامى، بيشة", desc: "فندق توفر وحدات سكنية مجهزة في موقع استراتيجي بمدينة بيشة." },
  { name: "فندق قصر بيشة", cat: "hotel", lat: 20.0028, lng: 42.6025, rating: 5, addr: "شارع سفيان بن ثابت، حي الخزامى، بيشة", desc: "مكان إقامة توفر خدمات فندقية متنوعة في حي الخزامى." },
  { name: "أصول الجنوب للشقق المفروشة", cat: "hotel", lat: 19.9962, lng: 42.6154, rating: 4.7, addr: "حي المروج، بيشة", desc: "شقق مفروشة توفر خيارات إقامة مريحة للعائلات والمسافرين." },
  // حدائق
  { name: "منتزه الملك عبدالله", cat: "park", lat: 19.995, lng: 42.612, rating: 4, addr: "طريق الملك سعود، حي الفهد، بيشة", desc: "تعد من أكبر وأشهر المتنزهات في بيشة ويتميز بمساحاته الخضراء الواسعة ومناطق ألعاب الأطفال." },
  { name: "ممشى الروضة", cat: "park", lat: 20.012, lng: 42.625, rating: 4.4, addr: "حي المطار، بيشة", desc: "ممشى مخصص للمشاة والرياضة يرتاده السكان لممارسة رياضة المشي في أجواء هادئة." },
  { name: "ممشى المطار", cat: "park", lat: 20.008, lng: 42.621, rating: 4.7, addr: "طريق الملك سعود، حي المطار، بيشة", desc: "مسار مجهز للمشي تقع بالقرب من منطقة المطار وتعد وجهة مفضلة للعائلات والرياضيين." },
  { name: "حديقة حي الخزامى", cat: "park", lat: 19.985, lng: 42.605, rating: 4.9, addr: "حي الخزامى، بيشة", desc: "حديقة عامة تخدم سكان حي الخزامى وتوفر مساحات للجلوس والاسترخاء." },
  { name: "منتزه وادي بيشة", cat: "park", lat: 19.975, lng: 42.615, rating: 4.2, addr: "ضفاف وادي بيشة، بيشة", desc: "متتنزه طبيعي تقع على ضفاف الوادي ويتميز بطبيعته الخلابة وأشجار النخيل المحيطة به." },
  { name: "حديقة الفيصلية", cat: "park", lat: 19.992, lng: 42.598, rating: 4.8, addr: "حي الفيصلية، بيشة", desc: "حديقة عائلية توفر مرافق ترفيهية ومساحات خضراء في قلب حي الفيصلية." },
  { name: "حديقة النخيل", cat: "park", lat: 19.988, lng: 42.608, rating: 4.4, addr: "وسط مدينة بيشة", desc: "حديقة عامة تعكس طابع بيشة الزراعي وتوفر بيئة مريحة للزوار." },
  { name: "ساحة الاحتفالات ببيشة", cat: "park", lat: 20.002, lng: 42.618, rating: 4.1, addr: "طريق الملك عبدالله، بيشة", desc: "مساحة مفتوحة تستخدم لإقامة الفعاليات والمهرجانات الوطنية والترفيهية." },
  { name: "حديقة حي الفهد", cat: "park", lat: 19.998, lng: 42.611, rating: 4.1, addr: "حي الفهد، بيشة", desc: "حديقة سكنية توفر متتنفساً طبيعياً لسكان حي الفهد والمناطق المجاورة." },
  { name: "منتزه سد الملك فهد", cat: "park", lat: 19.955, lng: 42.585, rating: 4.2, addr: "منطقة سد الملك فهد، بيشة", desc: "منطقة تنزه طبيعية حول السد توفر إطلالات مائية ومساحات واسعة للتنزه." },
  // تسوق
  { name: "أسواق العثيم", cat: "mall", lat: 20.001, lng: 42.605, rating: 5, addr: "شارع عمر بن الخطاب، بيشة", desc: "سلسلة أسواق تجارية كبرى توفر كافة المواد الغذائية والسلع الاستهلاكية." },
  { name: "سوبر ماركت الجود", cat: "mall", lat: 20.002, lng: 42.608, rating: 4.7, addr: "طريق الملك سعود، حي الفهد، بيشة", desc: "سوبر ماركت متكامل تعمل على مدار الساعة لتلبية احتياجات السكان." },
  { name: "سوبر ماركت البراك", cat: "mall", lat: 19.998, lng: 42.612, rating: 4.5, addr: "شارع الإمام محمد بن عبدالوهاب، حي المروج، بيشة", desc: "متجر مواد غذائية توفر تشكيلة واسعة من المنتجات اليومية." },
  { name: "أسواق بالشوك المركزية", cat: "mall", lat: 19.995, lng: 42.615, rating: 4.8, addr: "حي الفيصلية، بيشة", desc: "مركز تسوق محل توفر المواد الغذائية الأساسية لسكان الحي." },
  { name: "سوق الخالدية", cat: "mall", lat: 20.005, lng: 42.602, rating: 4.9, addr: "حي الفهد، بيشة", desc: "سوق تجاري تضم مجموعة من المحلات والخدمات في قلب حي الفهد." },
  { name: "سوبر ماركت الهدى", cat: "mall", lat: 20.003, lng: 42.607, rating: 4.3, addr: "حي الفهد، بيشة", desc: "متجر بقالة معروف توفر المنتجات الغذائية الطازجة والمجمدة." },
  { name: "سوبر ماركت ديراب", cat: "mall", lat: 20.004, lng: 42.609, rating: 4, addr: "شارع ابن حنبل، حي الفهد، بيشة", desc: "سوبر ماركت توفر مستلزمات المنزل والمواد الغذائية بأسعار تنافسية." },
  { name: "تموينات الحربي للمواد الغذائية", cat: "mall", lat: 20.006, lng: 42.604, rating: 3.9, addr: "حي الفهد، بيشة", desc: "متجر تموينات توفر الاحتياجات الغذائية الأساسية للمنطقة." },
  { name: "سلة التموين", cat: "mall", lat: 19.997, lng: 42.618, rating: 4.2, addr: "حي النخيل، بيشة", desc: "مركز تسوق توفر المواد الغذائية والمستلزمات المنزلية." },
  { name: "تموينات نجم بيشة", cat: "mall", lat: 20.002, lng: 42.611, rating: 4.6, addr: "شارع الملك عبدالله، بيشة", desc: "متجر تموينات توفر خدماته لسكان حي الملك عبدالله." },
  // صيدليات
  { name: "صيدلية المتحدة 226", cat: "pharmacy", lat: 19.9985, lng: 42.6012, rating: 4, addr: "طريق عمر بن الخطاب، حي الخزامى، بيشة", desc: "صيدلية موثوقة تقع بجوار اكسترا في حي الخزامى وتوفر مجموعة واسعة من الأدوية والمستلزمات الطبية." },
  { name: "صيدلية المتحدة 260", cat: "pharmacy", lat: 20.0012, lng: 42.6055, rating: 4.6, addr: "شارع الإمام محمد عبدالوهاب، حي الملك عبدالله، بيشة", desc: "صيدلية مركزية تخدم سكان حي الملك عبدالله وتوفر خدمات صيدلانية متكاملة." },
  { name: "صيدلية المتحدة 261", cat: "pharmacy", lat: 20.0015, lng: 42.6058, rating: 3.8, addr: "شارع الإمام محمد عبدالوهاب، حي الملك عبدالله، بيشة", desc: "فرع إضافي لصيدليات المتحدة في حي الملك عبدالله لضمان توفر الأدوية للسكان." },
  { name: "صيدلية المتحدة 188", cat: "pharmacy", lat: 19.9952, lng: 42.6089, rating: 4, addr: "طريق مكة المكرمة، حي الروشن، بيشة", desc: "صيدلية تقع في موقع حيوي بحي الروشن وتوفر خدمات الرعاية الصحية الأساسية." },
  { name: "صيدلية المتحدة 128", cat: "pharmacy", lat: 19.9921, lng: 42.6125, rating: 4.7, addr: "شارع أبها، حي الفهد، بيشة", desc: "صيدلية شهيرة تقع أمام هايبر بنده وبجوار شاورما فاكتوري في حي الفهد." },
  { name: "صيدلية المتحدة 176", cat: "pharmacy", lat: 19.9885, lng: 42.6152, rating: 4.3, addr: "طريق الرياض، حي النخيل، بيشة", desc: "صيدلية تقع على امتداد مستشفى الملك عبدالله في حي النخيل لخدمة المراجعين." },
  { name: "صيدلية الدواء", cat: "pharmacy", lat: 19.9998, lng: 42.6021, rating: 4.2, addr: "طريق الملك سعود، حي الخزامى، بيشة", desc: "واحدة من أكبر سلاسل الصيدليات في المملكة وتوفر خدمات طبية وتجميلية متنوعة." },
  { name: "صيدلية النهدت", cat: "pharmacy", lat: 19.9945, lng: 42.6095, rating: 4.5, addr: "شارع الملك فيصل، حي الفهد، بيشة", desc: "صيدلية رائدة تقدم استشارات صحية ومنتجات عناية شخصية عالية الجودة." },
  { name: "صيدلية المجتمع", cat: "pharmacy", lat: 20.0032, lng: 42.6041, rating: 4.7, addr: "شارع الملك عبدالعزيز، وسط المدينة، بيشة", desc: "صيدلية محل معروفة تخدم سكان وسط مدينة بيشة وتوفر الأدوية الأساسية." },
  { name: "صيدلية بيشة المركزية", cat: "pharmacy", lat: 19.9978, lng: 42.6067, rating: 4.4, addr: "حي الخزامى، بالقرب من السوق العام، بيشة", desc: "صيدلية تقع في قلب المنطقة التجارية وتوفر خدماتها لسكان وزوار المدينة." },
  // بنوك
  { name: "مصرف الراجحي - فرع بيشة", cat: "bank", lat: 19.9985, lng: 42.6052, rating: 4.1, addr: "طريق الملك سعود، حي الخزامى، بيشة", desc: "أحد أكبر المصارف في المملكة وتقدم خدمات مصرفية متكاملة لأهالي بيشة." },
  { name: "بنك البلاد - فرع بيشة", cat: "bank", lat: 20.0012, lng: 42.6085, rating: 4.6, addr: "شارع الملك فيصل، حي الفهد، بيشة", desc: "تقدم بنك البلاد خدمات مصرفية إسلامية متنوعة للأفراد والشركات في المحافظة." },
  { name: "بنك الرياض - فرع بيشة", cat: "bank", lat: 19.9998, lng: 42.6041, rating: 4.8, addr: "طريق الملك فهد، وسط المدينة، بيشة", desc: "فرع رئيسي لبنك الرياض تخدم العملاء في منطقة بيشة وما حولها." },
  { name: "البنك العربي الوطني - فرع بيشة", cat: "bank", lat: 20.0025, lng: 42.6067, rating: 4.5, addr: "طريق الملك سعود، حي الخزامى، بيشة", desc: "توفر البنك العربي خدمات مالية ومصرفية شاملة لسكان محافظة بيشة." },
  { name: "بنك الجزيرة - فرع بيشة", cat: "bank", lat: 19.9972, lng: 42.6038, rating: 4.9, addr: "شارع الملك عبدالعزيز، بيشة", desc: "تقدم بنك الجزيرة حلولات مصرفية متوافقة مع الشريعة الإسلامية في بيشة." },
  { name: "مصرف الإنماء - فرع بيشة", cat: "bank", lat: 20.0031, lng: 42.6092, rating: 4.9, addr: "طريق الملك سعود، حي الفهد، بيشة", desc: "مصرف حديث تقدم خدمات مصرفية إلكترونية متطورة لأهالي محافظة بيشة." },
  { name: "البنك السعودي الأول - فرع بيشة", cat: "bank", lat: 19.9989, lng: 42.6075, rating: 4.9, addr: "طريق الملك سعود، بيشة", desc: "تقدم البنك السعودي الأول خدمات مصرفية متنوعة للعملاء في مدينة بيشة." },
  { name: "بنك ساب - فرع بيشة", cat: "bank", lat: 19.9995, lng: 42.606, rating: 4.9, addr: "حي الخزامى، طريق الملك سعود، بيشة", desc: "فرع تقدم خدمات مصرفية شاملة للشركات والأفراد في محافظة بيشة." },
  { name: "البنك السعودي للاستثمار - فرع بيشة", cat: "bank", lat: 20.0015, lng: 42.6045, rating: 3.8, addr: "شارع الملك فهد، بيشة", desc: "يوفر البنك السعودي للاستثمار خدمات مالية ممتازة لسكان المحافظة." },
  { name: "بنك سامبا - فرع بيشة", cat: "bank", lat: 20.0005, lng: 42.6055, rating: 4.4, addr: "طريق الملك سعود، بيشة", desc: "فرع تقدم خدمات البنك الأهلي السعودي بعد الاندماج لخدمة أهالي بيشة." },
  // محطات وقود
  { name: "محطة بن حماد", cat: "gas_station", lat: 20.01049, lng: 42.61836, rating: 4.9, addr: "بيشة، المملكة العربية السعودية", desc: "محطة وقود معروفة تقع في موقع حيوي داخل مدينة بيشة." },
  { name: "محطة الفرسان", cat: "gas_station", lat: 20.005, lng: 42.615, rating: 4.4, addr: "طريق الملك خالد، بيشة", desc: "محطة وقود تقدم خدمات التزود بالوقود والخدمات الأساسية للمسافرين." },
  { name: "محطة الناصرية", cat: "gas_station", lat: 20.008, lng: 42.612, rating: 4, addr: "طريق الملك فهد، بيشة", desc: "محطة وقود تقع على أحد الطرق الرئيسية في مدينة بيشة." },
  { name: "محطة بن مرشد", cat: "gas_station", lat: 20.002, lng: 42.608, rating: 3.9, addr: "شارع الرياض، حي الخزامى، بيشة", desc: "محطة وقود شهيرة تخدم سكان حي الخزامى والمناطق المجاورة." },
  { name: "محطة آل طاوي", cat: "gas_station", lat: 20.003, lng: 42.609, rating: 3.9, addr: "شارع الرياض، بيشة", desc: "محطة وقود توفر خدمات الوقود والخدمات المساندة على شارع الرياض." },
  { name: "محطة السلمانيت", cat: "gas_station", lat: 19.998, lng: 42.605, rating: 4.5, addr: "حي المطار، بيشة", desc: "محطة وقود تقع بالقرب من منطقة المطار وتخدم المسافرين وسكان الحي." },
  { name: "محطة جسر نمران", cat: "gas_station", lat: 19.985, lng: 42.595, rating: 4.2, addr: "طريق نمران، بيشة", desc: "محطة وقود تقع في منطقة جسر نمران وتعتبر نقطة توقف هامة." },
  { name: "محطة عسيس", cat: "gas_station", lat: 19.982, lng: 42.592, rating: 4, addr: "طريق أبها، بيشة", desc: "محطة وقود تقع على الطريق المؤدي إلى أبها وتخدم المسافرين." },
  { name: "محطة التوفيق", cat: "gas_station", lat: 19.98, lng: 42.59, rating: 4.9, addr: "طريق أبها، بيشة", desc: "محطة وقود توفر خدمات التزود بالوقود على الطريق السريع." },
  { name: "محطة بترول التسهيلات", cat: "gas_station", lat: 20.001, lng: 42.602, rating: 4.5, addr: "وسط مدينة بيشة", desc: "محطة وقود مركزية تقدم خدماتها في قلب مدينة بيشة." },
  // معالم
  { name: "قصر ابن هتل التاريخي", cat: "attraction", lat: 19.998, lng: 42.612, rating: 4.9, addr: "قرية تبالة، بيشة", desc: "قصر طيني تاريخي تم ترميمه للحفاظ على التراث العمراني العريق للمنطقة." },
  { name: "ميدان فروستية بيشة", cat: "attraction", lat: 20.005, lng: 42.635, rating: 3.9, addr: "طريق الملك عبدالله، حي الشفاء، بيشة", desc: "مركز رياضي مخصص لسباقات الخيول والفروسية وتعد من الأماكن التي تحظى باهتمام محبي التراث والرياضة." },
  { name: "قرية تبالة التاريخية", cat: "attraction", lat: 19.965, lng: 42.575, rating: 4.2, addr: "مركز تبالة، محافظة بيشة", desc: "منطقة أثرية تضم نقوشاً ثمودية ومبان ذات طابع هندي قديم ذكرت في أشعار العرب." },
  { name: "وادي ترج", cat: "attraction", lat: 19.955, lng: 42.595, rating: 4.6, addr: "محافظة بيشة، منطقة عسير", desc: "وادي يتميز بضفافه الخضراء ومياهه الجارية، وتعد من أجمل المتنزهات الطبيعية في بيشة." },
  { name: "إدارة مطار بيشة", cat: "attraction", lat: 20.008, lng: 42.618, rating: 4.1, addr: "طريق المطار، بيشة", desc: "مبنى إدارة مطار بيشة الإقليمي، واجهة عصرية بتصميم دائري وزجاجي وأعلام المملكة العربية السعودية." },
  { name: "سد الملك فهد", cat: "attraction", lat: 19.985, lng: 42.605, rating: 4.8, addr: "محافظة بيشة، منطقة عسير", desc: "تعد ثاني أكبر سد في الشرق الأوسط وتشكل بحيرة صناعية عذبة تعد من أبرز المعالم السياحية في المنطقة." },
  { name: "قلعة بيشة (المحلف)", cat: "attraction", lat: 19.995, lng: 42.615, rating: 3.8, addr: "قرية النغتلة، وسط محافظة بيشة", desc: "قلعة تاريخية شهيرة تقع على ضفة وادي بيشة الشرقية وتعتبر رمزاً للصمود التاريخي لأهالي المنطقة." },
  { name: "قصر شعلان", cat: "attraction", lat: 20.002, lng: 42.608, rating: 3.8, addr: "محافظة بيشة، منطقة عسير", desc: "قصر تاريخي بني في عهد الدولة السعودية الأولى ويعد مزاراً تراثياً يعكس العمارة القديمة في بيشة." },
  { name: "ممشى الروضة", cat: "attraction", lat: 20.015, lng: 42.625, rating: 3.9, addr: "حي المطار، بيشة", desc: "وجهة ترفيهية ورياضية شهيرة يقصدها سكان بيشة للمشي وممارسة الرياضة في الهواء الطلق." },
  { name: "جبل الصايرة", cat: "attraction", lat: 19.975, lng: 42.585, rating: 4.3, addr: "محافظة بيشة، منطقة عسير", desc: "معلم طبيعي يتميز بحجاراته الملونة ومظهره الفريد الذي يجعله مقصداً لهواة المغامرة والاستكشاف." }
];

// إسناد الصورة: صورة حقيقية إن وجدت، وإلا صورة التصنيف
PLACES.forEach(p => { p.image = REAL_PHOTOS[p.name] || CATEGORY_IMAGES[p.cat]; });

// ===== الحالة =====
let activeCat = 'all';
let view = 'map';
let userLoc = null;
let map = null;
let markers = {};
let activePlace = null;
let mapInited = false;

// ===== التنقل بين الواجهتين =====
function showHome() {
  document.getElementById('homeView').style.display = 'block';
  document.getElementById('mapView').style.display = 'none';
  window.scrollTo(0, 0);
}
function showMap(cat) {
  activeCat = cat || 'all';
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('mapView').style.display = 'flex';
  if (!mapInited) { initMap(); mapInited = true; }
  setTimeout(() => map.invalidateSize(), 100);
  renderChips();
  renderMarkers();
  renderList();
  updateCount();
  hideSheet();
}

// ===== الصفحة الرئيسية =====
document.getElementById('placeCount').textContent = PLACES.length + ' مكان حقيقي';
const grid = document.getElementById('catGrid');
CATEGORIES.forEach(cat => {
  const a = document.createElement('button');
  a.className = 'cat-card';
  a.innerHTML = `<div class="cat-icon" style="background:${cat.bg}"><span style="font-size:24px">${cat.emoji}</span></div><span class="cat-label">${cat.label}</span>`;
  a.onclick = () => showMap(cat.key);
  grid.appendChild(a);
});

// ===== الخريطة =====
function filteredPlaces() {
  return activeCat === 'all' ? PLACES : PLACES.filter(p => p.cat === activeCat);
}
function updateCount() {
  document.getElementById('placeCountMap').textContent = filteredPlaces().length + ' مكان';
}
function renderChips() {
  const bar = document.getElementById('chipsBar');
  bar.innerHTML = '';
  const allChip = document.createElement('button');
  allChip.className = 'chip' + (activeCat === 'all' ? ' active' : '');
  allChip.textContent = 'الكل';
  if (activeCat === 'all') allChip.style.background = '#056e5a';
  allChip.onclick = () => setCat('all');
  bar.appendChild(allChip);
  CATEGORIES.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (activeCat === cat.key ? ' active' : '');
    chip.innerHTML = `<span>${cat.emoji}</span> ${cat.label}`;
    if (activeCat === cat.key) chip.style.background = cat.color;
    chip.onclick = () => setCat(cat.key);
    bar.appendChild(chip);
  });
}
function setCat(key) {
  activeCat = key;
  activePlace = null;
  hideSheet();
  renderChips();
  renderMarkers();
  renderList();
  updateCount();
}
function makeIcon(catKey) {
  const cat = CATEGORY_MAP[catKey] || CATEGORY_MAP.attraction;
  const html = `<div class="pin-wrap"><div class="pin-body" style="background:${cat.color}"></div><div class="pin-emoji">${cat.emoji}</div></div>`;
  return L.divIcon({ html, className: '', iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -36] });
}
function initMap() {
  map = L.map('map', { zoomControl: false, attributionControl: false }).setView([19.9847, 42.6033], 13);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(map);
  const iconCache = {};
  CATEGORIES.forEach(c => { iconCache[c.key] = makeIcon(c.key); });
  window._iconCache = iconCache;
}
function renderMarkers() {
  Object.values(markers).forEach(m => map.removeLayer(m));
  markers = {};
  filteredPlaces().forEach(p => {
    const m = L.marker([p.lat, p.lng], { icon: window._iconCache[p.cat] }).addTo(map);
    m.bindPopup(popupHTML(p));
    m.on('click', () => openPlace(p));
    markers[p.name] = m;
  });
}
function popupHTML(p) {
  return `<div class="popup-card">
    <img class="popup-img" src="${p.image}" alt="${p.name}">
    <div class="popup-name">${p.name}</div>
    <div class="popup-rating"><span class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</span><span class="popup-rating-num">${p.rating.toFixed(1)}</span></div>
    ${p.desc ? `<div class="popup-desc">${p.desc}</div>` : ''}
    ${p.addr ? `<div class="popup-addr">📍 ${p.addr}</div>` : ''}
  </div>`;
}
function openPlace(p) {
  activePlace = p;
  const cat = CATEGORY_MAP[p.cat];
  document.getElementById('sheetBody').innerHTML = `
    <img class="sheet-img" src="${p.image}" alt="${p.name}">
    <div class="sheet-info">
      <div class="sheet-cat-row"><div class="sheet-cat-badge" style="background:${cat.bg}">${cat.emoji}</div><span class="sheet-cat-name" style="color:${cat.color}">${cat.label}</span></div>
      <h3 class="sheet-name">${p.name}</h3>
      <div class="sheet-rating"><span class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</span><span class="sheet-rating-num">${p.rating.toFixed(1)}</span></div>
      ${p.desc ? `<p class="sheet-desc">${p.desc}</p>` : ''}
      ${p.addr ? `<p class="sheet-addr">📍 ${p.addr}</p>` : ''}
      <button class="nav-btn" onclick="navigate()">🧭 الاتجاهات</button>
    </div>`;
  document.getElementById('placeSheet').classList.add('show');
  map.flyTo([p.lat, p.lng], 15, { duration: 1 });
}
function hideSheet() {
  document.getElementById('placeSheet').classList.remove('show');
  activePlace = null;
}
function navigate() {
  if (!activePlace) return;
  const from = userLoc ? userLoc.join(',') : '';
  window.open(`https://www.openstreetmap.org/directions?from=${from}&to=${activePlace.lat},${activePlace.lng}`, '_blank');
}
function renderList() {
  const list = document.getElementById('listView');
  const places = filteredPlaces();
  if (places.length === 0) {
    list.innerHTML = '<div class="empty-state"><span style="font-size:32px">⭐</span>لا توجد أماكن في هذا التصنيف</div>';
    return;
  }
  list.innerHTML = '';
  places.forEach(p => {
    const item = document.createElement('button');
    item.className = 'place-item';
    item.innerHTML = `
      <img class="place-item-img" src="${p.image}" alt="${p.name}">
      <div class="place-item-info">
        <div class="place-item-name">${p.name}</div>
        <div class="sheet-rating"><span class="stars" style="font-size:12px">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</span><span class="sheet-rating-num">${p.rating.toFixed(1)}</span></div>
        ${p.addr ? `<div class="place-item-addr">${p.addr}</div>` : ''}
      </div>`;
    item.onclick = () => { if (view === 'list') setView('map'); openPlace(p); };
    list.appendChild(item);
  });
}
function setView(v) {
  view = v;
  document.getElementById('map').style.display = v === 'map' ? 'block' : 'none';
  document.getElementById('listView').style.display = v === 'list' ? 'block' : 'none';
  document.getElementById('placeSheet').style.display = v === 'map' ? 'block' : 'none';
  document.getElementById('locateBtn').style.display = v === 'map' ? 'flex' : 'none';
  document.getElementById('viewToggle').textContent = v === 'map' ? '☰' : '🗺️';
  if (v === 'map') setTimeout(() => map.invalidateSize(), 100);
}
function locate() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(pos => {
    userLoc = [pos.coords.latitude, pos.coords.longitude];
    L.circle(userLoc, { radius: 300, color: '#2563eb', fillColor: '#2563eb', fillOpacity: 0.08, weight: 1 }).addTo(map);
    L.marker(userLoc, { icon: L.divIcon({ html: '<div class="user-pin"></div>', className: '', iconSize: [22,22], iconAnchor: [11,11] }) }).addTo(map);
    map.flyTo(userLoc, 14, { duration: 1.2 });
  }, () => alert('تعذر تحديد موقعك'), { enableHighAccuracy: true, timeout: 8000 });
}

document.getElementById('viewToggle').onclick = () => setView(view === 'map' ? 'list' : 'map');
document.getElementById('locateBtn').onclick = locate;
document.getElementById('sheetClose').onclick = hideSheet;
