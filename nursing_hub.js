function searchTopics() {  // ✅ Moved outside
    let input = document.getElementById("searchBar").value.toLowerCase();
    let subjects = document.getElementById("subjectList").getElementsByTagName("li");

    for (let i = 0; i < subjects.length; i++) {
        let subject = subjects[i].textContent.toLowerCase();
        subjects[i].style.display = subject.includes(input) ? "" : "none";
    }
}



document.addEventListener("DOMContentLoaded", () => {

    const subjects = {
    "Midwifery & Obstetrical Nursing – I": {
        "Unit 1 Introduction to Midwifery and Obstetrical Nursing": [
            "Introduction to Midwifery and Obstetrical Nursing",
            "History of Midwifery",
            "Trends in Midwifery and Obstetrical Nursing",
            "Historical perspective and current trends in midwifery and obstetrical nursing",
            "Legal and ethical aspects",
            "Pre-conception care and preparing for parenthood",
            "Role of nurse in midwifery and obstetrical care",
            "National policy and legislation in relation to maternal health and welfare",
            "Maternal morbidity, mortality",
            "Perinatal and fertility rates."
        ],
        "Unit 2   Review of Anatomy and Physiology of Female Reproductive System and Foetal Development": [
            "Female pelvis - general description of the bones, joints, ligaments, planes of the pelvis",
            "Diameters of the true pelvis, important landmarks, variations in pelvis shape",
            "Female organs of reproduction - external genitalia, internal genital organs",
            "Musculature - blood supply, nerves, lymphatics, pelvic cellular tissue, pelvic peritoneum",
            "Physiology of menstrual cycle",
            "Human sexuality, foetal development, conception",
            "Review of fertilization, implantation (embedding of the ovum)",
            "Development of the embryo and placenta at term, functions, abnormalities",
            "The foetal sac, amniotic fluid, the umbilical cord",
            "Foetal circulation, foetal skull, bones, sutures and measurements",
            "Review of genetics."
        ],
        "Unit 3 Assessment and Management of Pregnancy (Antenatal)": [
            "Normal pregnancy",
            "Physiological changes during pregnancy:",
            "Reproductive system",
            "Cardiovascular system",
            "Respiratory system", 
            "Urinary system",
            "Gastrointestinal system",
            "Metabolic changes",
            "Skeletal changes",
            "Skin changes",
            "Endocrine system",
            "Psychological changes & discomforts of pregnancy",
            "Diagnosis of pregnancy: signs, differential diagnosis, confirmatory tests",
            "Antenatal care:",
            "Objectives",
            "Assessment: history and physical examination",
            "Antenatal examination",
            "Signs of previous childbirth",
            "Relationship of foetus to uterus and pelvis: lie, attitude, presentation, position, per vaginal examination",
            "Screening and assessment for high risk",
            "Risk approach",
            "History and physical examination",
            "Modalities of diagnosis; invasive & non-invasive, ultrasonics, cardio tomography, NST, CST",
            "Antenatal preparation:",
            "Antenatal counseling",
            "Antenatal exercises",
            "Diet",
            "Substance use",
            "Education for childbirth to husband and families",
            "Preparation for safe confinement",
            "Prevention from radiation",
            "Psycho-social and cultural aspects of pregnancy:",
            "Adjustment to pregnancy",
            "Unwed mother",
            "Single parent",
            "Teenage pregnancy",
            "Sexual violence",
            "Adoption"
        ],
        "unit 4 Assessment and Management of Intra-natal Period":[
            "Physiology of labour, mechanism of labour Management of labour",
                "First stage: signs  and symptoms of onset of labour",
                "normal and abnormal", "duration", 
                "preparation of : labour room woman, assessment and observation of women in labour",
                "partogram - maternal and foetal monitoring, active management of labour",
                "induction of labour, pain relief and comfort in labour Second stage: signs and symptoms; normal and abnormal, duration, conduct of delivery",
                "principles and techniques, episiotomy (only if required)",
                "receiving the new born - neonatal resuscitation",
                "initial steps and subsequent resuscitation",
                "care of umbilical cord",
                "immediate assessment including screening for congenital anomalies",
                "identification, bonding, initiate feeding, screening and transportation of the neonate",
                "Third stage: signs and symptoms: normal and abnormal, duration, method of placental expulsion",
                "management: principles and techniques, examination of the placenta, examination of the perineum",
                "Maintaining record and reports",
                "Fourth stage"     
        ],
        "unit 5 Assessment and Management of Women During Post Natal Period":[
            "Normal puerperium; physiology duration",
            "Postnatal assessment and management: promoting physical and emotional wellbeing", 
            "lactation management, immunization",
            "Family dynamics after child-birth",
            "Family welfare services: methods, counseling",
            "Follow-up",
            "records and report"
        ],
        "unit 6  Assessment and Management of Normal Neonates":[
            " Normal neonate: physiological adaptation, initial & daily assessment",
            "essential newborn care: thermal control, breast feeding, prevention of infections",
            "Immunization",
            "Minor disorders of newborn and its management",
            "Levels of neonatal care (level I, II & III)",
            "Maintenance of reports and records"
        ],
    },
    "Child Health Nursing": {
        "UNIT 1  Introduction: ": [
            "Modern concepts of child care","Internationally accepted rights of the child",
            "National policy and legislations in relation to child health and welfare",
            "National programmes related to child health and welfare",
            "Agencies related to welfare services to the children",
            "Changing trends in hospital care, preventive, promotive and curative aspects of child health", 
            "Child morbidity and mortality rates",
            "Differences between an adult and child",
            "Hospital environment for a sick child",
            "Impact of hospital isolation on the child and family",
            "Grief and bereavement",
            "The role of a child health nurse in caring for a hospitalized child",
            "Principles of pre and post operative care of infants and children",
            "Child health nursing procedures"
        ],
        "Unit 2  The Healthy Child": [
            "Principles of growth and development",
            "Factors affecting growth & development",
            "Growth and development from birth to adolescence",
            "The need of normal children through the stages of developmental and parental guidance",
            "Nutritional needs of children & infants: breast feeding, exclusive breast feeding supplementary/artificial feeding and weaning",
            "Baby friendly hospital concept ",
            "Accidents: causes and prevention",
            "Value of play and selection of play material",
            "Preventive pediatrics",
            "Care of under five & under five clinics/well baby clinics"
        ],
        "unit 3  Nursing Care of a neonate":[
            "Nursing care of a normal newborn/essential newborn care ",
            "Neonatal resuscitation",
            " Nursing management of a low birth weight baby",
            "Kangaroo mother care",
            "Nursing management of common neonatal disorders",
            "Organization of neonatal unit",
            "Identification & nursing management of common congenital malformations"
        ],
        "unit 4":[
            "Integrated Management of Neonatal and Childhood Illness (IMNCI)"
        ],
        "unit 5  Nursing Management in Common Childhood Diseases":[
            "Nutritional deficiency disorders",
            "Respiratory disorders and infections",
            "Gastrointestinal infections, infestations and congenital disorders",
            "Cardio vascular problems: congenital defects and rheumatic fever, rheumatic heart disease",
            "Genito-urinary disorders: acute glomerulo nephritis, nephritic syndrome, wilms tumor, infection and congenital disorders",
            " Neurological infections and disorders: convulsions, epilepsy, meningitis, hydrocephalus, spina-bifida",
            "Hematological disorders: anemias, thalassemia, ITP, Leukemia, hemophilia",
            "Endocrine disorders: Juvenile diabetes mellitus",
            "Orthopedic disorders: club feet, hip dislocation and fracture",
            "Disorders of skin, eye and ears",
            "Common communicable diseases in children, their identification, nursing management in hospital and home and prevention",
            "Child health emergencies : poisoning, foreign bodies, hemorrhage, burns and drowning",
            "Nursing care of infant and children with HIV/AIDS"
        ],
        "unit 6  Management of Behavioural & Social Problems in Children":[
            "Management of common behavioural disorders",
            "Management of challenged children: Mentally, Physically & Socially challenged",
            "Welfare services for challenged children in India",
            "Child guidance clinics"
        ],
    },
    "Mental Health Nursing": {
        "Unit 1:  Introduction ": [
            "Perspectives of mental health and mental health nursing: evolution of mental health services, treatments and nursing practices",
            "Prevalence and incidence of mental health problems and disorders",
            "Mental Health Act",
            "National mental health policy via a vis National health policy",
            "National mental health progamme ",
            "Mental health team",
            "Nature and scope of mental health nursing",
            "Role and functions of mental health nurse in various setting and factors affecting the level of nursing practice",
            "Concepts of normal and abnormal behavior"
        ],
        "Unit 2: Principles and Concepts of Mental Health Nursing": [
            "Definition: Mental Health Nursing and terminology used ",
            "Classification of mental disorders : ICD",
            "Review of personality development, defense mechanisms",
            "Maladaptive behaviour of individuals and groups: stress, crisis and disaster (s)",
            "Etiology: bio-psycho-social factors",
            " Psychopathology of mental disorders: review of structure and function of brain, imbic system and abnormal neuro transmission",
            "Principles of mental health nursing ",
            " Standards of mental health nursing practice",
            " Conceptual models and the role of nurse: existential model, psycho-analytical models, behavioural model, interpersonal model"
            
        ],
        "unit 3   Assessment of Mental Health Status":[
            "History taking",
            "Mental status examination ",
            "Mini mental status examination",
            "Neurological examination review ",
            "Investigations: related blood chemistry, ECG & MRI",
            "Psychological tests",
            "Role and responsibilities of nurse"
        ],
        "unit 4 Therapeutic Communication and Nurse-pattern Relationship":[
            "Therapeutic communication: types, techniques, characteristics",
            "Types of relationship",
            "Ethics and responsibilities",
            "Elements of nurse patient contract",
            "Review of technique of IPR-Johari Window",
            "Goals, phases, tasks, therapeutic techniques",
            "Therapeutic impasse and its intervention"
        ],
        "unit 5   Treatment Modalities and Therapies used in Mental Disorders":[
            "Psycho Pharmacology",
            "Psychological therapies: therapeutic community, psycho therapy-individual: psychoanalytical, cognitive and supportive, family, group, behavioural, play, psychodrama, music, dance, recreational and light therapy, relaxation therapies: yoga, meditation, bio feedback",
            "Alternative systems of medicine",
            "Occupational therapy ",
            "Physical therapy: electro convulsive therapy",
            "Geriatric considerations",
            "Role of nurse in above therapie"
        ],
        "unit 6    Nursing Management of Patient with Schizophrenia, and other Psychotic Disorders":[
            "Classification: ICD ",
            "Etiology, psycho-pathology, clinical manifestation, diagnosis",
            "Nursing assessment-history, physical and mental assessment",
            "Treatment modalities and nursing management of patients with schizophrenia, and other psychotic disorders",
            "Geriatric considerations",
            "Follow-up and home care and rehabilitation"
        ],
        "unit 7   Nursing Management of Patients with Mood Disorders":[
            "Mood disorders: Bipolar affective disorder, Mania depression and dysthymia etc",
            "Etiology, psycho-pathology, clinical manifestations, diagnosis",
            "Nursing assessment-history, physical and mental assessment",
            "Treatment modalities and nursing management of patients with mood disorders",
            "Geriatric considerations",
            "Follow-up and home care and rehabilitation"
        ],
        "unit 8   Nursing Management of Patients with Neurotic, Stress Related and Somatization Disorders":[
            "Anxiety disorder, phobias, dissociation and conversion disorder, obsessive compulsive disorder, somatoform disorders, post traumatic stress disorder",
            "Etiology, psycho-pathology, clinical manifestations, diagnosis",
            "Nursing assessment-history, physical and mental assessment",
            "Treatment modalities and nursing management of patient with neurotic, stress relate and somatization disorders ",
            "Geriatric considerations ",
            "Follow-up and home care and rehabilitation"
        ],
        "unit 9    Nursing Management of Patients with Substance use Disorders":[
            " Commonly used psychotropic substance: classification, forms, routes, action,intoxication and withdrawal",
            "Etiology of dependence: tolerance, psychological and physical dependence, withdrawal syndrome, diagnosis",
            "Nursing assessment-history, physical and mental assessment and drug assay",
            "Treatment (detoxification, antabuse and narcotic antagonist therapy and harm reduction) and nursing management of patients with substance use disorders",
            "Geriatric considerations",
            "Follow-up and home care and rehabilitation",


        ],
        "unit 10    Nursing Management of Patients with Personality, Sexual and Eating Disorders":[
            "Classification of disorders",
            "Etiology, psycho-pathology, characteristics, diagnosis",
            "Nursing assessment-history, physical and mental assessment",
            "Treatment modalities and nursing management of patient with personality, sexual and eating disorders",
            "Geriatric considerations",
            "Follow-up and home care and rehabilitation"
        ],
        "unit 11   Nursing Management of Childhood and Adolescent Disorder Including Mental Deficiency":[
            "Classification",
            "Etiology, psycho-pathology, characteristics, diagnosis",
            "Nursing assessment-history, physical and mental and IQ assessment",
            "Treatment modalities and nursing management of childhood and adolescent disorders including mental deficiency",
            "Follow-up and home care and rehabilitation"
        ],
        "unit 12    Nursing Management of Organic Brain Disorders":[
            "Classification:ICF",
            "Etiology, psycho-pathology, clinical features, diagnosis and differential diagnosis (parkinsons and alzheimers) ",
            "Nursing assessment-history, physical, mental and neurological assessment",
            "Treatment modalities and nursing management of organic brain disorders",
            "Geriatric considerations",
            "Follow-up and home care and rehabilitation"
        ],
        "unit 13   Psychiatric Emergencies and Crisis Intervention":[
            "Types of psychiatric emergencies and their management",
            "Stress adaptation model: stress and stressor, coping, resources and mechanism",
            "Grief: theories of grieving process, principles, techniques of counseling ",
            "Types of crisis",
            "Crisis intervention: principles, techniques and process ",
            "Geriatric considerations",
            "Role and responsibilities of nurse"
        ],
        "unit  14   Legal Issues in Mental Health Nursing":[
            "The mental health act 1987: act, sections, articles and their implications etc",
            "Indian Lunacy Act. 1912",
            "Rights of mentally ill clients",
            "Forensic psychiatry",
            "Acts related to narcotic and psychotropic substances and illegal drug trafficking",
            "Admission and discharge procedure",
            "Role and responsibilities of nurse"
        ],
        "unit 15    Community Mental Health Nursing:":[
            "Development of community mental health services",
            "National mental health programme",
            "Institutionalization versus deinstitutionalization",
            "Model of preventive psychiatry: levels of prevetion",
            "Mental health services available at the primary, secondary, tertiary levels including rehabilitation and role of nurse",
            "Mental health agencies government and voluntary, national and international",
            "Mental health nursing issues for special populations: children, adolescence,women, elderly, victims of violence and abuse, handicapped, HIV/AIDS etc."
        ],
    },
    "Medical Surgical Nursing – II": {
        "Unit 1: Nursing Management of Patient with Disorders of Ear, Nose and Throat":[
            "Review of anatomy and physiology of the Ear, Nose and Throat",
            "Nursing assessment-history and physical assessment",
            "Etiology, pathophysiology, clinical manifestations, diagnosis, treatment modalities and medical & surgical nursing management of Ear, Nose and Throat disorders",
            "External ear: deformities otalgia, foreign bodies, and tumours",
            "Middle ear: Impacted wax, tympanic membrane perforation, otitis media,otosclerosis, mastoiditis, tumour",
            "Inner ear: Meniere’s disease, labyrinthitis, ototoxicity, tumours",
            "Upper airway infections: common cold, sinusitis, enthinitis, rhinitis, pharyngitis,tonsillitis and adenoiditis, peritonsilar abscess, laryngitis ",
            "Upper respiratory airway – epistaxis ",
            "Nasal obstruction, laryngeal obstruction, cancer of the larynx ",
            "Cancer of the oral cavity ",
            "Speach defects and speach therapy",
            "Deafness",
            "Prevention, control and rehabilitation",
            "Hearing Aids, implanted hearing devices",
            "Special therapies",
            "Nursing procedures",
            "Drugs used in treatment of disorders of Ear, Nose and Throat ",
            "Role of nurse communicating with hearing impaired and muteness"
        ],
        "Unit 2: Nursing Management of Patient with Disorders of Eye": [
            "Review of anatomy and physiology of the Eye",
            "Nursing assessment-history and physical assessment",
            "Etiology, pathophysiology, clinical manifestations, diagnosis, treatment modalities and medical & surgical nursing management of Eye disorders : Refractive errors",
            "Eyelids-infection, tumours and deformities ",
            "Conjunctiva-inflammation and infection, bleeding",
            "Cornea-inflammation and infection",
            "Lens-Cataracts",
            "Glaucoma",
            "Disorder of the uveal tract",
            "Ocular tumours",
            "Disorders of posterior chamber and retina: Retinal and vitreous problems ",
            "Retinal detachment",
            "Ocular emergencies and their prevention",
            "Blindness",
            "National blindness control program: Eye banking, Eye prostheses and rehabilitation",
            "Role of nurse in communication with visually impaired patient, Eye camps",
            "Special therapies",
            "Nursing procedures",
            "Drugs used in treatment of disorders of Eye"
        ],
        "unit 3   Nursing Management of Patient with Neurological Disorders":[
            "Review of anatomy and physiology of the neurological system ",
            "Nursing assessment-history and physical and neurological assessment and Glasgow coma scale ",
            "Etiology, pathophysiology, clinical manifestations, diagnosis, treatment modalities and medical & surgical nursing management of neurological disorders",
            "Congenital malformations ",
            "Headache ",
            "Head injuries",
            "Spinal injuries: Paraplegia, Hemiplegia, Quadruplegia",
            "Spinal cord compression-herniation of interverterbral disc",
            "Tumors of the brain & spinal cord",
            "Infections: Meningitis, Encephalitis, Brain abscess, neurocysticerosis",
            "Movement disorders: Chorea, Seizures, Epilepsies ",
            "Cerebro Vascular Accidents (CVA)",
            "Cranial, Spinal Neuropathies – Bell’s palsy, trigeminal neuralgia",
            "Peripheral Neuropathies; Guillain Barre Syndrome",
            "Myasthenia gravis",
            "Multiple sclerosis",
            "Degenerative diseases: Delirium, Dementia, Alzheimer’s disease, Parkinson’s disease ",
            "Management of unconscious patients with stroke",
            "Role of nurse in communicating with patient having neurological deficit",
            "Rehabilitation of patients with neurological deficit",
            "Role of nurse in long stay facility and at home",
            "Special therapies",
            "Nursing procedures",
            "Drugs used in treatment of neurological disorders"
        ],
        "unit 4    Nursing Management of Patient with Disorders of Female Reproductive System":[
            "Review of anatomy and physiology of the Female Reproductive System",
            "Nursing assessment-history and physical assessment",
            "Etiology, pathophysiology, clinical manifestations, diagnosis, treatment modalities and medical & surgical nursing, management of disorders of female reproductive system",
            "Congenital abnormalities of female reproductive system ",
            "Sexuality and reproductive health",
            "Sexual health assessment",
            "Menstrual disorders: Dysmenorrhea, Amenorrhea, Premenstrual Syndrom",
            "Abnormal Uterine Bleeding: Menorrhagia, Metrorrhagia",
            "Pelvic Inflammatory Disease",
            "Ovarian and fallopian tube disorders: infections, cysts, tumors",
            "Uterine and cervical disorders: Endometriosis, polyps, fibroids, cervical and uterine tumors, uterine displacement, cystocele/urethrocele/rectocele ",
            "Vaginal disorders: infections, cysts, tumors",
            "Diseases of breasts: deformities, infections and discharges, fistulas",
            "Vulval disorders: Infections, cysts, tumors",
            "Diseases of breasts: deformities, infections, cysts and tumors",
            "Menopause and hormonal replacement therapy",
            "Infertility",
            "Contraception: types, methods, risk and effectiveness:",
            "Spacing methods: barrier methods, intera uterine devices, hormonal, post conceptional methods, etc",
            "Terminal methods: sterilization",
            "Emergency contraception methods",
            "Abortion – natural, medical and surgical abortion – MTP act",
            "Toxic shock syndrome",
            "Injuries and trauma; sexual violence",
            "Special therapies",
            "National family welfare programme"
        ],
        "unit 5    Nursing Management of Patients with Burns, Reconstructive and Cosmetic Surgery":[
            "Review of anatomy and physiology of the skin and connective tissues and various deformities",
            "Nursing assessment-history and physical assessment and assessment of burns and assessment of burns and fluid and electrolyte loss",
            "Etiology, classification, pathophysiology, clinical manifestations, diagnosis, treatment modalities and medical & surgical nursing management of Burns, reconstructive and cosmetic surgery",
            "Types of Re-constructive and cosmetic surgery; for burns, congenital deformities, injuries and cosmetic purposes",
            "Role of nurse ",
            "Legal aspects",
            "Rehabilitation",
            "Special therapies: psycho social aspects",
            "Nursing procedures",
            "Drugs used in treatment of Burns, Re-constructive and cosmetic surgery"
        ],
        "unit 6   Nursing Management of Patients with Oncological Conditions":[
            "Structure & characteristics of normal & cancer cells",
            "Nursing assessment-history and physical assessment ",
            "Prevention, screening, early detection, warning signs of cancer",
            "Epidemiology, etiology, classification, pathophysiology, clinical manifestations, diagnosis, treatment modalities and medical & surgical nursing management of oncological conditions",
            "Common malignancies of various body systems: oral, larynx, lung, stomach, and colon, liver, leukemias and lymphomas, breast, cervix, ovary, uterus, sarcoma, brain, renal, bladder, prostate etc ",
            "Oncological emergencies",
            "Modalities of treatment: immunotherapy, chemotherapy, radiotherapy, surgical interventions, stem cell and bone marrow transplants, gene therapy, other forms of treatment ",
            "Psychological aspects of cancer",
            "Rehabilitation",
            "Psychological aspects of cancer",
            "Palliative care: symptoms and pain management, nutritional support",
            "Home care",
            "Hospital care",
            "Stomal therapy",
            "Special therapies: psycho social aspects",
            "Nursing procedures"
        ],
        "unit 7    Nursing Management of Patient in EMERGENCY & DISASTER Situations":[
            "Disaster nursing:",
            "Concepts and principles of disaster nursing ",
            "Causes and types of disaster: natural and man-made:",
            "Earthquakes, floods, epidemics, cyclones",
            "Fire, explosion, accidents ",
            "Violence, terrorism; biochemical, war",
            "Policies relate to emergency/disaster management; international, national, state, institutional",
            "Disaster preparedness",
            "Team, guidelines, protocols, equipments, resources",
            "Coordination and involvement of; community, various govt. departments, nongovt.organizations and international agencies",
            "Role of nurse: working ",
            "Legal aspects of disaster nursing",
            "Impact on health and after effects; post traumatic stress disorder",
            "Rehabilitation: physical, psychosocial, financial, relocation emergency nursing",
            "Concept, priorities, principles and scope of emergency nursing",
            "Organization of emergency services: physical setup, staffing, equipment and supplies, protocols, concepts of triage and role of triage nurse ",
            "Coordination and involvement of different departments and facilities",
            "Nursing assessment-history and physical assessment ",
            "Etiology, classification, pathophysiology, clinical manifestations, diagnosis, treatment, modalities and medical & surgical nursing management of patient with medical and surgical emergency",
            "Coordination and involvement of different departments and facilities",
            "Principles of emergency management",
            "Common emergencies",
            "Respiratory emergencies",
            "Cardiac emergencies ",
            "Shock and haemorrhage",
            "pain",
            "Poly-trauma, road accidents, crush injuries, wound ",
            "Bites",
            "Poisoning: food, gas, drugs & chemical poisoning",
            "Seizures",
            "Thermal emergencies: heat stroke & cold injuries",
            "Pediatric emergences",
            "Obstetrical emergencies",
            "Violence, abuse, sexual assault",
            "Cardio pulmonary Resuscitation",
            "Crisis intervention",
            "Role of the nurse; communication inter personal relations",
            "Medico-legal aspects"
        ],
        "unit 8  Nursing Care of the Elderly":[
            "Nursing assessment-history and physical assessment",
            "Ageing",
            "Demography; myths and realities",
            "Concepts and theories of ageing",
            "Cognitive aspects of ageing",
            "Normal biological ageing",
            "Age related body systems changes",
            "Psychosocial aspects of aging",
            "Medications and elderly",
            "Stress & coping in older adults",
            "Common health problems & nursing management ",
            "Cardiovascular, respiratory, musculoskeletal",
            "Endocrine, genitor-urinary, gastrointestinal",
            "Neurological, skin and other sensory organs: Psychosocial and sexual, abuse of elderly",
            "Role of nurse for care of elderly: ambulation, nutritional, communicational, psychosocial and spiritual ",
            "Role of nurse for caregivers of elderly",
            "Role of family, formal and nonformal caregivers ",
            "Use of aids and prosthesis (hearing aids, dentures)",
            "Legal and ethical issues",
            "Provisions and programmes for elderly; privileges, community programs and health services ",
            "Home and institutional care"
        ],
        "unit 9   Nursing Management of Patients in Critical Care Units":[
            "Nursing assessment-history and physical assessment",
            "Classification",
            "Principles of critical care nursing",
            "Organization: physical setup, policies, staffing norms",
            "Protocols, equipment and supplies",
            "Special equipments: ventilators, Cardiac monitors, defibrillators",
            "Resuscitation equipments ",
            "Infection control protocols",
            "Nursing management of critically ill patient",
            "Monitoring of critically ill patient",
            "CPR-Advance Cardiac Life Support",
            "Treatments and procedures",
            "Transitional care",
            "Ethical and legal aspects",
            "Communication with patient and family ",
            "Intensive care records",
            "Crisis intervention",
            "Death and dying-coping",
            "Drugs used in critical care unit"
        ],
        "unit 10   Nursing Management of Patients Adults Including Elderly with Occupational and Industrial Disorders":[
            "Nursing assessment-history and physical assessment",
            "Etiology, pathophysiology, clinical manifestations, diagnosis, treatment modalities and medical & surgical nursing management of Occupational and Industrial disorders ",
            "Role of nurse ",
            "Special therapies, alternative therapies",
            "Special therapies, alternative therapies",
            "Nursing procedures",
            "Drugs used in treatment of Occupational and Industrial disorders"
        ]

    }
};



const mainContent = document.querySelector("main");

// Load Subjects
function loadSubjects() {
    mainContent.innerHTML = '<section id="subjects"><h2>Subjects</h2><ul id="subjectList"></ul></section>';
    const subjectList = document.getElementById("subjectList");

    Object.keys(subjects).forEach(subject => {
        const li = document.createElement("li");
        li.textContent = subject;
        li.addEventListener("click", () => {
            history.pushState({ page: "units", subject }, "", "#" + subject);
            loadUnits(subject);
        });
        subjectList.appendChild(li);
    });
}

// Load Units
function loadUnits(subject) {
    mainContent.innerHTML = `<h2>${subject}</h2><ul id="unitList"></ul>`;
    const unitList = document.getElementById("unitList");

    Object.keys(subjects[subject]).forEach(unit => {
        const li = document.createElement("li");
        li.textContent = unit;
        li.addEventListener("click", () => {
            history.pushState({ page: "topics", subject, unit }, "", `#${subject}-${unit}`);
            loadTopics(subject, unit);
        });
        unitList.appendChild(li);
    });
}

// Load Topics
function loadTopics(subject, unit) {
    mainContent.innerHTML = `<h2>${subject} - ${unit}</h2>`;
    const topicList = document.createElement("ul");

    subjects[subject][unit].forEach(topic => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `explanation.html?topic=${encodeURIComponent(topic)}`;
        link.textContent = topic;
        li.appendChild(link);
        topicList.appendChild(li);
    });

    mainContent.appendChild(topicList);
}

// Handle Back/Forward Navigation
window.addEventListener("popstate", (event) => {
    if (event.state) {
        if (event.state.page === "units") {
            loadUnits(event.state.subject);
        } else if (event.state.page === "topics") {
            loadTopics(event.state.subject, event.state.unit);
        }
    } else {
        loadSubjects();
    }
});

// Handle Direct Page Load via URL Hash
if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const parts = hash.split("-");
    if (subjects[parts[0]]) {
        if (parts.length === 1) {
            loadUnits(parts[0]);
        } else if (subjects[parts[0]][parts.slice(1).join("-")]) {
            loadTopics(parts[0], parts.slice(1).join("-"));
        }
    }
} else {
    loadSubjects();
}

// Search Function
function searchTopics() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let subjects = document.getElementById("subjectList").getElementsByTagName("li");

    for (let i = 0; i < subjects.length; i++) {
        let subject = subjects[i].textContent.toLowerCase();
        subjects[i].style.display = subject.includes(input) ? "" : "none";
    }
}



});