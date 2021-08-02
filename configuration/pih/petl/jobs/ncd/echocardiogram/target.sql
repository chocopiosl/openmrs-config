CREATE TABLE echocardiogram
(
patient_id                              INT,
dossierId	                            VARCHAR(30),
emrid	                                VARCHAR(30),
loc_registered                          VARCHAR(255),
encounter_datetime	                    DATETIME,
encounter_location	                    VARCHAR(255),
provider	                            VARCHAR(255),
encounter_id	                        INT,
systolic_bp	                            FLOAT,
diastolic_bp                            FLOAT,
heart_rate                              FLOAT,
murmur                                  VARCHAR(255),
NYHA_class                              VARCHAR(255),
left_ventricle_systolic_function        VARCHAR(255),
right_ventricle_dimension               VARCHAR(255),
mitral_valve                            VARCHAR(255),
pericardium                             VARCHAR(255),
inferior_vena_cava                      VARCHAR(255),
left_ventricle_dimension                VARCHAR(255),
pulmonary_artery_systolic_pressure      FLOAT,
disease_category                        VARCHAR(255),
disease_category_other_comment          TEXT,
peripartum_cardiomyopathy_diagnosis     VARCHAR(255),
ischemic_cardiomyopathy_diagnosis       VARCHAR(255),
study_results_changed_treatment_plan    VARCHAR(255),
general_comments                        TEXT
);