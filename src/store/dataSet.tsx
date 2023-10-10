const quizData = [
  {
    questionNumber: 1,
    questionString:
      "A 75-year-old man presents to Accident and Emergency following a week of productive cough, fever and shortness of breath. He has not had any foreign travel, however is a chronic smoker with a 15 pack/year history\n\nWhich of the following findings is most likely to be found on examination of this patients chest?",
    answerIndex: 4,
    indexStrings: [
      "Reduced vocal resonance and dull percussion note",
      "Hyper-resonant percussion note and tracheal deviation to the left",
      "Stony dull percussion note and reduced tactile vocal fremitus",
      "Increased vocal resonance and fine end inspiratory crepitations",
      "Increased tactile vocal fremitus and dull percussion note",
    ],
    correctDescription:
      "This is the correct answer. This patient has the classic symptoms of a pneumonia and the abnormality found on auscultation is indicative of a lobar pneumonia. Pneumonia presents with increased tactile vocal fremitus/vocal resonance and dull percussion note",
    wrongDescription:
      "The reduced vocal resonance is not in keeping with a pneumonia. Reduced vocal resonance is seen in conditions such as lung collapse; pleural effusion and pneumothorax. In a pneumonia the vocal resonance increases as there is better conduction of sound waves through consolidation",
  },
  {
    questionNumber: 2,
    questionString:
      "A 28-year-old female presents with a 3-week history of fatigue, low-grade fever, and pain in her knees and wrists. She has noticed the development of a rash over her cheeks, which worsens with sun exposure. On examination, she has a malar rash, oral ulcers, and swelling of the proximal interphalangeal joints. A blood test shows a positive ANA, anti-dsDNA, and anti-Smith antibodies.\n\nWhat is the most likely diagnosis?",
    answerIndex: 0,
    indexStrings: [
      "Systemic lupus erythematosus (SLE)",
      "Rheumatoid arthritis",
      "Polymyalgia rheumatica",
      "Sjögren syndrome",
      "Polymyositis",
    ],
    correctDescription:
      "This is the correct answer. The patient presents with multiple criteria for SLE, including the malar rash, oral ulcers, arthritis, and positive serologic markers (ANA, anti-dsDNA, anti-Smith antibodies).",
    wrongDescription:
      "The patient's presentation is not consistent with rheumatoid arthritis, polymyalgia rheumatica, Sjögren syndrome, or polymyositis. The combination of symptoms and positive serology is highly suggestive of SLE.",
  },
  {
    questionNumber: 3,
    questionString:
      "A 45-year-old woman presents with sudden-onset severe chest pain that is sharp and pleuritic in nature. She describes feeling short of breath. She has no significant past medical history. On examination, she is tachycardic and tachypneic. Auscultation of the chest reveals reduced breath sounds on the left side.\n\nWhat is the most likely diagnosis?",
    answerIndex: 2,
    indexStrings: [
      "Pneumothorax",
      "Pulmonary embolism",
      "Pleuritis",
      "Pneumonia",
      "Aortic dissection",
    ],
    correctDescription:
      "This is the correct answer. The patient's sudden-onset chest pain, pleuritic nature, and reduced breath sounds on examination are highly suggestive of pneumothorax, which is the accumulation of air in the pleural space.",
    wrongDescription:
      "The patient's presentation is not consistent with pulmonary embolism, pleuritis, pneumonia, or aortic dissection. The key features are indicative of pneumothorax.",
  },
  {
    questionNumber: 4,
    questionString:
      "A 32-year-old man presents with a 2-day history of fever, sore throat, and painful, swollen cervical lymph nodes. He has no significant medical history and is sexually active with multiple partners. On examination, he has tender, enlarged lymph nodes in the cervical, axillary, and inguinal regions.\n\nWhat is the most likely diagnosis?",
    answerIndex: 3,
    indexStrings: [
      "Infectious mononucleosis",
      "Streptococcal pharyngitis",
      "Human immunodeficiency virus (HIV) infection",
      "Secondary syphilis",
      "Acute retroviral syndrome",
    ],
    correctDescription:
      "This is the correct answer. The patient's presentation with fever, sore throat, and generalized lymphadenopathy is suggestive of secondary syphilis, which is caused by the spirochete bacterium Treponema pallidum.",
    wrongDescription:
      "The patient's presentation is not consistent with infectious mononucleosis, streptococcal pharyngitis, HIV infection, or acute retroviral syndrome. The key features are indicative of secondary syphilis.",
  },
  {
    questionNumber: 5,
    questionString:
      "A 60-year-old man with a history of heavy alcohol use presents with pain and swelling in the right lower leg. He reports a recent fall. On examination, the leg is swollen, erythematous, and tender to touch. Homan sign is negative. There are no skin changes or ulcers. A venous duplex ultrasound shows a deep vein thrombosis (DVT) in the right popliteal vein.\n\nWhat is the most appropriate initial management?",
    answerIndex: 0,
    indexStrings: [
      "Immediate therapeutic anticoagulation with low molecular weight heparin",
      "Elevate the leg and apply warm compresses",
      "Immediate surgical embolectomy",
      "Begin antiplatelet therapy with aspirin",
      "Administer prophylactic low molecular weight heparin",
    ],
    correctDescription:
      "This is the correct answer. In a patient with confirmed deep vein thrombosis (DVT), the most appropriate initial management is immediate therapeutic anticoagulation with low molecular weight heparin or unfractionated heparin.",
    wrongDescription:
      "The patient's presentation is not consistent with other options such as elevating the leg and applying warm compresses, immediate surgical embolectomy, beginning antiplatelet therapy with aspirin, or administering prophylactic low molecular weight heparin.",
  },
  {
    questionNumber: 6,
    questionString:
      "A 45-year-old woman presents with a 1-year history of intermittent, crampy abdominal pain and diarrhea. She also reports experiencing significant weight loss during this time. On examination, she appears malnourished and has diffuse abdominal tenderness. Stool studies reveal the presence of occult blood.\n\nWhat is the most likely diagnosis?",
    answerIndex: 2,
    indexStrings: [
      "Irritable bowel syndrome (IBS)",
      "Inflammatory bowel disease (IBD)",
      "Colorectal cancer",
      "Gastroenteritis",
      "Diverticulitis",
    ],
    correctDescription:
      "This is the correct answer. The patient's presentation with chronic abdominal pain, diarrhea, weight loss, and occult blood in the stool is concerning for colorectal cancer. Further evaluation, such as colonoscopy, is necessary for diagnosis.",
    wrongDescription:
      "The patient's presentation is not consistent with other options such as irritable bowel syndrome (IBS), inflammatory bowel disease (IBD), gastroenteritis, or diverticulitis. Colorectal cancer should be considered in this case.",
  },
];

export default quizData;
