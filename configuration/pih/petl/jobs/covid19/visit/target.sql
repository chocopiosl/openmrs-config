CREATE TABLE covid_visit(
patient_id                    INT,
encounter_id                  INT PRIMARY KEY,
encounter_date                DATE,
location                      TEXT,
encounter_type                VARCHAR(255),
case_condition                VARCHAR(255),
overall_condition             VARCHAR(255),
fever                         VARCHAR(11),
cough                         VARCHAR(11),
productive_cough              VARCHAR(11),
shortness_of_breath           VARCHAR(11),
sore_throat                   VARCHAR(11),
rhinorrhea                    VARCHAR(11),
headache                      VARCHAR(11),
chest_pain                    VARCHAR(11),
muscle_pain                   VARCHAR(11),
fatigue                       VARCHAR(11),
vomiting                      VARCHAR(11),
diarrhea                      VARCHAR(11),
loss_of_taste                 VARCHAR(11),
sense_of_smell_loss           VARCHAR(11),
confusion                     VARCHAR(11),
panic_attack                  VARCHAR(11),
suicidal_thoughts             VARCHAR(11),
attempted_suicide             VARCHAR(11),
other_symptom                 VARCHAR(11),
temp                          FLOAT,
heart_rate                    FLOAT,
respiratory_rate              FLOAT,
bp_systolic                   FLOAT,
bp_diastolic                  FLOAT,
SpO2                          FLOAT,
room_air                      VARCHAR(11),
cap_refill                    VARCHAR(50),
cap_refill_time               FLOAT,
pain                          VARCHAR(50),
general_exam                  VARCHAR(11),
general_findings              TEXT,
heent                         VARCHAR(11),
heent_findings                TEXT,
neck                          VARCHAR(11),
neck_findings                 TEXT,
chest                         VARCHAR(11),
chest_findings                TEXT,
cardiac                       VARCHAR(11),
cardiac_findings              TEXT,
abdominal                     VARCHAR(11),
abdominal_findings            TEXT,
urogenital                    VARCHAR(11),
urogenital_findings           TEXT,
rectal                        VARCHAR(11),
rectal_findings               TEXT,
musculoskeletal               VARCHAR(11),
musculoskeletal_findings      TEXT,
lymph                         VARCHAR(11),
lymph_findings                TEXT,
skin                          VARCHAR(11),
skin_findings                 TEXT,
neuro                         VARCHAR(11),
neuro_findings                TEXT,
avpu                          VARCHAR(255),
awake                         VARCHAR(11),
pain_response                 VARCHAR(11),
voice_response                VARCHAR(11),
unresponsive                  VARCHAR(11),
other_findings                VARCHAR(11),
dexamethasone                 VARCHAR(11),
remdesivir                    VARCHAR(11),
lpv_r                         VARCHAR(11),
ceftriaxone                   VARCHAR(11),
amoxicillin                   VARCHAR(11),
doxycycline                   VARCHAR(11),
other_medication              TEXT,
oxygen                        VARCHAR(11),
ventilator                    VARCHAR(11),
mask                          VARCHAR(11),
mask_with_nonbreather         VARCHAR(11),
nasal_cannula                 VARCHAR(11),
cpap                          VARCHAR(11),
bpap                          VARCHAR(11),
fio2                          VARCHAR(11),
ivf_fluid                     VARCHAR(11),
hemoglobin                    FLOAT,
hematocrit                    FLOAT,
wbc                           FLOAT,
platelets                     FLOAT,
lymphocyte                    FLOAT,
neutrophil                    FLOAT,
crp                           FLOAT,
sodium                        FLOAT,
potassium                     FLOAT,
urea                          FLOAT,
creatinine                    FLOAT,
glucose                       FLOAT,
bilirubin                     FLOAT,
sgpt                          FLOAT,
sgot                          FLOAT,
pH                            FLOAT,
pcO2                          FLOAT,
pO2                           FLOAT,
tcO2                          FLOAT,
hcO3                          FLOAT,
be                            FLOAT,
sO2                           FLOAT,
lactate                       FLOAT,
x_ray                         VARCHAR(11),
cardiac_ultrasound            VARCHAR(11),
abdominal_ultrasound          VARCHAR(11),
clinical_management_plan      TEXT,
nursing_note                  TEXT,
mh_referral                   VARCHAR(11),
mh_note                       TEXT
);
