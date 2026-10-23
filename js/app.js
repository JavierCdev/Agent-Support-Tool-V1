const actions = [

/* =====================================
       GENERAL
===================================== */
{
    id:"hottopics",
    icon:"🔥",

    name:"Hot Topics/FAQ",

    category:"General",

    favorite:false,

    keywords:["Hot","Topics","FAQ","Top",],

    note:`
Hot Topics/FAQ intent was opened to assist the caller with
`,

fields:[

        {
            id:"hot_topics_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"Issues",
    icon:"⚠️",

    name:"Issues",

    category:"General",

    favorite:false,

    keywords:["Issues","Iss","Grievances","Griev"],

    note:`
Issues intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"issues_reason",
            label:"Reason",
            type:"radio",

            appendToNote:true,

            options:[
                "Grievance",
                "Appeal",
                "Other"
            ]
        },

        {
            id:"issues_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]

},

{
    id:"languageServices",
    icon:"🌐",

    name:"Language Services",

    category:"General",

    favorite:false,

    keywords:[
        "Language",
        "Interpreter",
        "Translation",
        "Language Services",
        "LS"
    ],

    note:`
Language Services intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"language_service",
            label:"Service Requested",
            type:"radio",

            options:[
                "Cancel a Previously Scheduled Interpreter Appointment",
                "Obtain an Interpreter for this Call",
                "Schedule an Interpreter Appointment"
            ]
        },

        {
            id:"language_cancel_reason",
            label:"Cancellation Reason",
            type:"textarea",
            size:"medium",
            showWhen:"Cancel a Previously Scheduled Interpreter Appointment"
        },

        {
            id:"language_requested",
            label:"Language Requested",
            type:"textarea",
            size:"small",
            showWhen:"Obtain an Interpreter for this Call"
        },

        {
            id:"language_schedule_language",
            label:"Language Requested",
            type:"textarea",
            size:"small",
            showWhen:"Schedule an Interpreter Appointment"
        },

        {
            id:"language_schedule_address",
            label:"Address",
            type:"textarea",
            size:"small",
            showWhen:"Schedule an Interpreter Appointment"
        },

        {
            id:"language_schedule_date",
            label:"Appointment Date",
            type:"textarea",
            size:"xsmall",
            showWhen:"Schedule an Interpreter Appointment"
        }

    ]
},

{
    id:"lvs",
    icon:"📋",

    name:"Log View Status",

    category:"General",

    favorite:false,

    keywords:[
        "lvs",
        "log",
        "log view",
        "view"
    ],

    note:`
Log View Status intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"lvs_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"material",
    icon:"📄",
    name:"Material Request",
    favorite:true,
    keywords:["material","phi","mid", "form"],
    note:"Material Request intent was opened to assist the caller requesting the materials.",

    fields:[

        {
            id:"materialRequested",
            label:"Material Requested",
            type:"textarea"
        },

        {
            id:"addressVerified",
            label:"Address Verified",
            type:"radio",
            options:[
                "Yes",
                "No"
            ]
        }

    ]
},

{
    id:"transportation",
    icon:"🚌",

    name:"Missed Transportation",

    category:"General",

    favorite:false,

    keywords:[
        "Missed",
        "Transportation",
        "Transport",
        "Ride"
    ],

    note:`
Missed Transportation intent was opened to assist the caller.
`,

    fields:[

        {
            id:"transport_issue",
            label:"Transportation Issue",
            type:"select",

            options:[
                "No Show",
                "Unable to Contact Transportation",
                "Dropped at Wrong Address",
                "Unable to Get Reimbursement",
                "Other"
            ]
        },

        {
            id:"transport_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"newmemberprocess",
    icon:"🆕",

    name:"New Member Process",

    category:"General",

    favorite:false,

    keywords:[
        "New",
        "Process",
        "Member",
        "Proc"
    ],

    note:`
New Member Process intent was opened to assist the caller.
`,

    fields:[

        {
            id:"new_member_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"providersearchinq",
    icon:"🏥",

    name:"Provider Search Inquiry",

    category:"General",

    favorite:false,

    keywords:[
        "Provider",
        "Search",
        "Inquiry",
        "Doctor",
        "PCP"
    ],

    note:`
Provider Search Inquiry intent was opened to assist the caller by providing information about providers.
`,

    fields:[

        {
            id:"provider_address_reviewed",
            label:"Address Reviewed",
            type:"radio",
            options:[
                "Yes",
                "No"
            ]
        },

        {
    id:"provider_list",
    type:"multiProvider"
},

        {
            id:"provider_notes",
            label:"Notes",
            type:"textarea",
            size:"medium"
        }

    ]
},

{
    id:"reinstateplan",
    icon:"🔄",

    name:"Reinstate Plan",

    category:"General",

    favorite:false,

    keywords:[
        "Reinstate",
        "Plan",
        "Reinstatement",
        "Reins"
    ],

    note:`
Reinstate Plan intent was opened to assist the caller.
`,

    fields:[

        {
            id:"reinstate_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"scheduleactivity",
    icon:"📅",

    name:"Schedule Activity",

    category:"General",

    favorite:false,

    keywords:[
        "Schedule",
        "Activity",
        "Appointment",
        "Schedule Activity",
        "Act"
    ],

    note:`
Schedule Activity intent was opened to assist the caller.
`,

    fields:[

        {
            id:"schedule_activity_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

/* =====================================
       BILLING/POLICY
===================================== */

{
    id:"billinginqandpay",
    icon:"💳",

    name:"Billing Inquiry & Payments",

    category:"Billing/Policy",

    favorite:false,

    keywords:[
        "Billing",
        "Payment",
        "Bill",
        "Pay",
        "Premium"
    ],

    note:`
Billing Inquiry & Payments intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"billing_date",
            label:"Payment Date",
            type:"textarea",
            size:"xsmall"
        },

        {
            id:"billing_amount",
            label:"Amount",
            type:"textarea",
            size:"xsmall"
        },

        {
            id:"billing_confirmation",
            label:"Confirmation Number",
            type:"textarea",
            size:"small"
        },

        {
            id:"billing_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"cancellationdisenroll",
    icon:"❌",

    name:"Cancellation or Disenrollment",

    category:"Billing/Policy",

    favorite:false,

    keywords:[
        "Cancellation",
        "Disenrollment",
        "Cancel",
        "Terminate"
    ],

    note:`
Cancellation or Disenrollment intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"cancel_request_type",
            label:"Request Type",
            type:"radio",

            appendToNote:true,

            options:[
                "Cancellation",
                "Disenrollment"
            ]
        },

        {
            id:"cancel_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"changeplaninq",
    icon:"🔄",

    name:"Change Plan Inquiry",

    category:"Billing/Policy",

    favorite:false,

    keywords:[
        "Change",
        "Plan",
        "Change Plan"
    ],

    note:`
Change Plan Inquiry intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"change_plan_request",
            label:"Request",
            type:"radio",

            appendToNote:true,

            options:[
                "Change Plan Type",
                "Effective Date Change Plan"
            ]
        },

        {
            id:"change_plan_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

/* =====================================
       UPDATES
===================================== */

{
    id:"notificationofdeath",
    icon:"🕊️",

    name:"Notification of Death",

    category:"Updates",

    favorite:false,

    keywords:[
        "Notification",
        "Death",
        "Deceased",
        "Death Notification"
    ],

    note:`
Notification of Death intent was opened to assist the caller.
`,

    fields:[

        {
            id:"date_of_death",
            label:"Date of Death",
            type:"textarea",
            size:"xsmall"
        },

        {
            id:"death_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"outofareanotif",
    icon:"📍",

    name:"Out of Area Notification",

    category:"Updates",

    favorite:false,

    keywords:[
        "Out",
        "Area",
        "Notification",
        "Address",
        "Move"
    ],

    note:`
Out of Area Notification intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"out_area_address_type",
            label:"Address Type",
            type:"select",

            options:[
                "Home",
                "Billing",
                "Mailing",
                "Other"
            ]
        },

        {
            id:"out_area_address",
            label:"Address",
            type:"textarea",
            size:"medium"
        },

        {
            id:"out_area_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"memberdemographics",
    icon:"👤",

    name:"Member Demographics",

    category:"Updates",

    favorite:false,

    keywords:[
        "Member",
        "Demographics",
        "Update",
        "Phone",
        "Address",
        "DOB",
        "Gender",
        "Name",
        "Authorized Contact"
    ],

    note:`
Member Demographics intent was opened to assist the caller with the following update(s):
`,

    fields:[

        {
    id:"member_demographics_updates",
    type:"multiDemographic"
},

        // =====================
        // ADDRESS
        // =====================

        {
            id:"member_address",
            label:"Address",
            type:"textarea",
            size:"medium",

            dependsOn:"update_type",
            showWhen:"Address"
        },

        {
            id:"member_address_effective",
            label:"Effective Date",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Address"
        },

        // =====================
        // AUTHORIZED CONTACTS
        // =====================

        {
            id:"authorized_contact_name",
            label:"First & Last Name",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Authorized Contacts"
        },

        {
            id:"authorized_contact_start",
            label:"Start Date",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Authorized Contacts"
        },

        {
            id:"authorized_contact_end",
            label:"End Date",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Authorized Contacts"
        },

        // =====================
        // DATE OF BIRTH
        // =====================

        {
            id:"member_dob",
            label:"Date of Birth",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Date of Birth"
        },

        // =====================
        // GENDER
        // =====================

        {
            id:"member_gender",
            label:"Gender",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Gender"
        },

        // =====================
        // NAME
        // =====================

        {
            id:"member_name",
            label:"Member Name",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Name"
        },

        // =====================
        // PHONE
        // =====================

        {
            id:"member_phone",
            label:"Phone Number",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Phone Number"
        },

    ]
},

{
    id:"updatememberpreferences",
    icon:"⚙️",

    name:"Update Member Preferences",

    category:"Updates",

    favorite:false,

    keywords:[
        "Preferences",
        "Language",
        "Email",
        "Race",
        "Ethnicity",
        "Pronoun",
        "Format"
    ],

    note:`
Update Member Preferences intent was opened to assist the caller with:
`,

    fields:[

        // =====================
        // UPDATE TYPE
        // =====================

        {
    id:"member_preferences_updates",
    type:"multiPreference"
},

        // =====================
        // ALTERNATE FORMAT
        // =====================

        {
            id:"alternate_format",
            label:"Alternate Format Preference",
            type:"select",

            dependsOn:"update_type",
            showWhen:"Alternate Format Preferences",

            options:[
                "Audio Interpreter/Tapes (PDF)",
                "Audio Interpreter/Tapes (CD)",
                "Audio Interpreter/Tapes (Web)",
                "Audio/Oral Interpretation",
                "Braille",
                "Large Font",
                "Audio Interpreter/Tapes",
                "Telecommunications Device for the Deaf",
                "Data CD"
            ]
        },

        // =====================
        // ELECTRONIC DOCUMENT DELIVERY
        // =====================

        {
            id:"edd_option",
            label:"Electronic Document Delivery",
            type:"radio",

            dependsOn:"update_type",
            showWhen:"Electronic Document Delivery Option",

            options:[
                "Email Opt In",
                "Email Opt Out"
            ]
        },

        // =====================
        // EMAIL
        // =====================

        {
            id:"member_email",
            label:"Email Address",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Email"
        },

        // =====================
        // MEMBER LANGUAGE
        // =====================

        {
            id:"member_language",
            label:"Language",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Member Language"
        },

        // =====================
        // MEMBER ENGAGEMENT MANAGEMENT
        // =====================

        {
            id:"engagement_email",
            label:"Email",
            type:"radio",

            dependsOn:"update_type",
            showWhen:"Member Engagement Management",

            options:[
                "Opt In",
                "Opt Out"
            ]
        },

        {
            id:"engagement_mail",
            label:"US Mail",
            type:"radio",

            dependsOn:"update_type",
            showWhen:"Member Engagement Management",

            options:[
                "Opt In",
                "Opt Out"
            ]
        },

        {
            id:"engagement_phone",
            label:"Phone",
            type:"radio",

            dependsOn:"update_type",
            showWhen:"Member Engagement Management",

            options:[
                "Opt In",
                "Opt Out"
            ]
        },

        {
            id:"engagement_text",
            label:"Text",
            type:"radio",

            dependsOn:"update_type",
            showWhen:"Member Engagement Management",

            options:[
                "Opt In",
                "Opt Out"
            ]
        },

        // =====================
        // RACE / ETHNICITY
        // =====================

        {
            id:"member_race",
            label:"Race",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Race or Ethnicity"
        },

        {
            id:"member_ethnicity",
            label:"Ethnicity",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Race or Ethnicity"
        },

        // =====================
        // PRONOUN
        // =====================

        {
            id:"member_pronoun",
            label:"Pronoun",
            type:"textarea",
            size:"small",

            dependsOn:"update_type",
            showWhen:"Pronoun"
        },

        // =====================
        // NOTES
        // =====================

        {
            id:"member_preferences_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"updatepcp",
    icon:"🩺",

    name:"Update PCP",

    category:"Updates",

    favorite:true,

    keywords:[
        "PCP",
        "Primary Care",
        "Doctor",
        "Physician",
        "Medical Group",
        "Update PCP"
    ],

    note:`
Update PCP intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"pcp_address_verified",
            label:"Address Verified",
            type:"radio",

            options:[
                "Yes",
                "No"
            ]
        },

        {
            id:"pcp_name",
            label:"Doctor Name",
            type:"textarea",
            size:"small"
        },

        {
            id:"pcp_group",
            label:"PPG / Medical Group",
            type:"textarea",
            size:"small"
        },

        {
            id:"pcp_phone",
            label:"Phone Number",
            type:"textarea",
            size:"small"
        },

        {
            id:"pcp_address",
            label:"Address",
            type:"textarea",
            size:"medium"
        },

        {
            id:"pcp_npi",
            label:"NPI",
            type:"textarea",
            size:"small"
        },

        {
            id:"pcp_accepting_new",
            label:"Accepting New Patients",
            type:"radio",

            options:[
                "Yes",
                "No"
            ]
        },

        {
            id:"pcp_retro_restriction",
            label:"Retro Effective Date Restriction",
            type:"radio",

            options:[
                "Yes",
                "No"
            ]
        },

        {
            id:"pcp_effective_date",
            label:"Effective Date",
            type:"textarea",
            size:"small"
        },

        {
            id:"pcp_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

/* =====================================
       BENEFITS/AUTHS/CLAIMS
===================================== */

{
    id:"accumulator",
    icon:"🧮",

    name:"Accumulator Inquiry",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Accumulator",
        "Accumulators",
        "Acc",
        "Inquiry"
    ],

    note:`
Accumulator Inquiry intent was opened to assist the caller.
`,

    fields:[

        {
            id:"accumulator_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"benefitsEligibility",
    icon:"💳",

    name:"Benefits & Eligibility",

    favorite:true,

    keywords:[
        "b&e",
        "benefits",
        "eligibility",
        "plan"
    ],

    note:`
B&E intent was opened to get the plan information and assist the caller.
`,

    fields:[

        {
            id:"be_active_verification",

            label:"Is the member calling to verify the plan is active?",

            type:"radio",

            excludeFromNote:true,

            options:[
                "Yes",
                "No"
            ]
        },
        {
    id:"be_plan_status",

    label:"Plan Status",

    type:"radio",

    excludeFromNote:true,

    options:[
        "Active",
        "Term",
        "Void"
    ]
},

        /* =========================
           ACTIVE PLAN INFORMATION
        ========================= */

        {
            id:"be_active_member_name",
            label:"Member Name",
            type:"textarea",
            size:"small",
            excludeFromNote:true
        },

        {
            id:"be_active_effective_date",
            label:"Effective Date",
            type:"textarea",
            size:"xsmall",
            excludeFromNote:true
        },

        {
            id:"be_active_end_date",
            label:"End Date",
            type:"textarea",
            size:"xsmall",
            excludeFromNote:true
        },

        {
            id:"be_active_plan_name",
            label:"Plan Name",
            type:"textarea",
            size:"small",
            excludeFromNote:true
        },

        {
            id:"be_active_pcp",
            label:"PCP",
            type:"textarea",
            size:"small",
            excludeFromNote:true
        },

        {
            id:"be_active_medical_group",
            label:"Medical Group",
            type:"textarea",
            size:"small",
            excludeFromNote:true
        },

        /* =========================
           B&E DETAILS
        ========================= */

        {
            id:"be_tools",
            label:"Tools Used",
            type:"textarea",
            size:"small"
        },
        {
            id:"be_benefits",
            label:"Benefits",
            type:"multiBenefits"
        }

    ]
},

{
    id:"caremanagement",
    icon:"👩‍⚕️",

    name:"Care Management",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Care",
        "Management",
        "Case Manager",
        "Care Manager"
    ],

    note:`
Care Management intent was opened to assist the caller
`,

    fields:[

        {
            id:"care_management_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"claimsinquiry",
    icon:"📄",

    name:"Claims Inquiry",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Claims",
        "Claim",
        "Charges",
        "Payment",
        "Claim Inquiry"
    ],

    note:`
Claims Inquiry intent was opened to assist the caller
`,

    fields:[

        {
            id:"claims_record_group",
            label:"Claims",
            type:"multiClaims"
        },
        {
            id:"claims_inquiry_notes",
            label:"Additional Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
id:"coordinationofbenefits",
    icon:"🤝",

    name:"Coordination of Benefits",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Coordination",
        "Benefits",
        "COB",
        "Other Insurance",
        "Coordination of Benefits"
    ],

    note:`
Coordination of Benefits intent was opened to assist the caller
`,

    fields:[

        {
            id:"coordination_of_benefits_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"gaps",

    icon:"📌",

    name:"Gaps in Care",

    category:"Benefits/Auths/Claims",

    favorite:true,

    keywords:[
        "Gaps",
        "Gap",
        "Healthy Reminder",
        "Preventive Care"
    ],

    note:`
Gaps in Care intent was opened to review 1 healthy reminder.
`,

    fields:[
        {
            id:"gaps_reminders",
            label:"Healthy Reminder(s)",
            type:"textarea",
            size:"small"
        },

        {
            id:"gaps_status",
            label:"Appointment Status",
            type:"radio",

            options:[

                {
                    text:"M/Scheduled",
                    value:"Caller will schedule the appointment."
                },

                {
                    text:"A/Scheduled",
                    value:"Appointment was scheduled by the agent."
                },

                {
                    text:"Cancelled",
                    value:"Intent was cancelled."
                },

                {
                    text:"Not Mentioned",
                    value:"Intent was not mentioned."
                }

            ]
        },

        {
            id:"gaps_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]

},

{
id:"lowincomesubsidy",
    icon:"💵",

    name:"Low Income Subsidy",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Low Income",
        "LIS",
        "Subsidy",
        "Extra Help",
        "Low Income Subsidy"
    ],

    note:`
Low Income Subsidy intent was opened to assist the caller
`,

    fields:[

        {
            id:"low_income_subsidy_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"medicalauthorizationinquiry",
    icon:"🔐",

    name:"Medical Authorization Inquiry",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Medical",
        "Authentication",
        "Inquiry",
        "Medical Authentication"
    ],

    note:`
Medical Authorization Inquiry intent was opened to assist the caller
`,

    fields:[

        {
            id:"medical_auth_records",
            label:"Authorizations",
            type:"multiAuthorization"
        },
        {
            id:"medical_authentication_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"pharmacyauthorizationinquiry",
    icon:"💊",

    name:"Pharmacy Authorization Inquiry",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Pharmacy",
        "Authorization",
        "Prior Authorization",
        "Part D",
        "PA",
        "Pharmacy Authorization"
    ],

    note:`
Pharmacy Authorization Inquiry intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"pharmacy_auth_records",
            label:"Authorizations",
            type:"multiAuthorization"
        },
        {
            id:"pharmacy_auth_warm_transfer",
            label:"Member Was Warm Transferred to the Part D Team",
            type:"radio",

            options:[
                "Yes",
                "No"
            ]
        },

        {
            id:"pharmacy_auth_spoke_with",
            label:"Spoke With",
            type:"textarea",
            size:"small"
        },

        {
            id:"pharmacy_auth_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"pharmacyclaims",
    icon:"💊",

    name:"Pharmacy Claims",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Pharmacy",
        "Claims",
        "Prescription",
        "Rx",
        "Pharmacy Claims"
    ],

    note:`
Pharmacy Claims intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"pharmacy_claims_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

{
    id:"returnmail",
    icon:"📬",

    name:"Return Mail",

    category:"Benefits/Auths/Claims",

    favorite:false,

    keywords:[
        "Return Mail",
        "Mail",
        "Returned Mail",
        "Undeliverable",
        "Address"
    ],

    note:`
Return Mail intent was opened to assist the caller with:
`,

    fields:[

        {
            id:"return_mail_notes",
            label:"Notes",
            type:"textarea",
            size:"large"
        }

    ]
},

];

let selectedActions = [];

let expandedAction = null;

const actionValues = {};
let claimsRecords = [];
let medicalAuthorizationRecords = [];
let pharmacyAuthorizationRecords = [];
let benefitRecords = [];
let recordIdCounter = 0;
let memberDemographics = [];
let demographicCounter = 0;
let memberPreferences = [];
let preferenceCounter = 0;
let providers = [];
let providerCounter = 0;

function normalizeClaimTableHeader(value){
    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function claimTableFieldKey(value){
    const aliases = {
        "id": "claimNumber",
        "claim id": "claimNumber",
        "claim number": "claimNumber",
        "service from": "serviceFrom",
        "service date from": "serviceFrom",
        "service to": "serviceTo",
        "service date to": "serviceTo",
        "provider name": "providerName",
        "service provider": "providerName",
        "service provider name": "providerName",
        "status": "status",
        "claim status": "status",
        "amount billed": "amountBilled",
        "billed amount": "amountBilled"
    };
    return aliases[normalizeClaimTableHeader(value)] || null;
}

function parseLineBasedClaims(raw){
    const lines = raw.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    const isDate = value => /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/.test(value);
    const isClaimNumber = value => /^[A-Z0-9-]{8,}$/i.test(value) && /\d/.test(value);
    const isStatus = value => /\b(?:deny|denied|pend(?:ing)?|approve(?:d)?|reject(?:ed)?|paid|processed|in review)\b/i.test(value);
    const isAmount = value => /^\$?\s*\d[\d,]*(?:\.\d{2})?$/.test(value);
    const claimIndexes = [];

    lines.forEach((line, index) => {
        if(isClaimNumber(line)) claimIndexes.push(index);
    });
    if(!claimIndexes.length) return [];

    const records = [];
    claimIndexes.forEach((claimIndex, position) => {
        const previousClaimIndex = position ? claimIndexes[position - 1] : -1;
        const nextClaimIndex = claimIndexes[position + 1] ?? lines.length;
        const dates = lines.slice(previousClaimIndex + 1, claimIndex).filter(isDate).slice(-2);
        const following = lines.slice(claimIndex + 1, nextClaimIndex);
        const statusIndex = following.findIndex(isStatus);
        if(statusIndex < 0) return;

        const namesBeforeStatus = following.slice(0, statusIndex)
            .filter(value => value && !isDate(value) && !/^[NY]$/i.test(value));
        const record = createBlankRecord("claims");
        record.claimNumber = lines[claimIndex];
        record.serviceFrom = dates.length > 1 ? dates[dates.length - 2] : (dates[0] || "");
        record.serviceTo = dates.length > 1 ? dates[dates.length - 1] : (dates[0] || "");
        // A single name after the ID is the Member column; the provider is the next column.
        record.providerName = namesBeforeStatus.length > 1 ? namesBeforeStatus[namesBeforeStatus.length - 1] : "";
        record.status = following[statusIndex];
        record.amountBilled = following.slice(statusIndex + 1).find(isAmount) || "";
        records.push(record);
    });
    return records;
}

function parseClaimsTable(raw){
    if(!raw.includes("\t")) return parseLineBasedClaims(raw);
    const rows = raw.split(/\r?\n/)
        .filter(line => line.trim())
        .map(line => line.split("\t").map(cell => cell.trim()));
    if(!rows.length) return [];

    const isHeader = cells => {
        const keys = cells.map(claimTableFieldKey);
        return keys.includes("claimNumber") && keys.includes("serviceFrom") && keys.includes("serviceTo");
    };
    const headerIndex = rows.findIndex(isHeader);
    const fields = repeatedRecordConfigs.claims.fields;
    const records = [];

    if(headerIndex >= 0){
        const header = rows[headerIndex].map(claimTableFieldKey);
        rows.slice(headerIndex + 1).forEach(cells => {
            if(isHeader(cells)) return;
            const record = createBlankRecord("claims");
            header.forEach((key, index) => {
                if(key && fields.some(field => field.key === key)){
                    record[key] = cells[index] || "";
                }
            });
            if(fields.some(field => String(record[field.key] || "").trim())) records.push(record);
        });
        return records;
    }

    // Rows copied without headings follow the Claims grid column order:
    // Claim type, Service From, Service To, Adjustment indicator, ID,
    // Member, Service provider, Status, Amount billed, LOB, Action.
    rows.forEach(sourceCells => {
        const cells = [...sourceCells];
        while(cells.length && (!cells[0] || /^[▸▶▷>]+$/.test(cells[0]))) cells.shift();
        if(cells.length < 9) return;

        const record = createBlankRecord("claims");
        record.claimNumber = cells[4] || "";
        record.serviceFrom = cells[1] || "";
        record.serviceTo = cells[2] || "";
        record.providerName = cells[6] || "";
        record.status = cells[7] || "";
        record.amountBilled = cells[8] || "";
        if(fields.some(field => String(record[field.key] || "").trim())) records.push(record);
    });
    return records;
}

function importRepeatedRecords(kind){
    const input = document.getElementById(`bulkPaste-${kind}`);
    const raw = input?.value.trim();
    if(!raw) return;
    const startPattern = /^\s*(?:Claim|Authorization|Auth)\s*(?:number|#)\s*:/im;
    const lines = raw.split(/\r?\n/);
    const chunks = [];
    let chunk = [];
    lines.forEach(line=>{
        if(startPattern.test(line) && chunk.length){ chunks.push(chunk); chunk = []; }
        chunk.push(line);
    });
    if(chunk.length) chunks.push(chunk);
    const records = kind === "claims" ? parseClaimsTable(raw) : [];
    const fields = repeatedRecordConfigs[kind]?.fields || [];
    const aliases = {
        "claim number": "claimNumber",
        "authorization number": "authorizationNumber",
        "auth number": "authorizationNumber",
        "service from": "serviceFrom",
        "service to": "serviceTo",
        "provider name": "providerName",
        "status": "status",
        "amount billed": "amountBilled"
    };
    if(!records.length){
        chunks.forEach(linesInChunk=>{
            const record = createBlankRecord(kind);
            linesInChunk.forEach(line=>{
                const match = line.match(/^\s*([^:]+):\s*(.*?)\s*$/);
                if(!match) return;
                const key = aliases[match[1].trim().toLowerCase()];
                if(key && fields.some(field => field.key === key)) record[key] = match[2];
            });
            if(fields.some(field => String(record[field.key] || "").trim())) records.push(record);
        });
    }
    if(!records.length){
        input.focus();
        return;
    }
    const existing = getRepeatedRecords(kind);
    existing.push(...records);
    input.value = "";
    renderActionDetails();
    generate();
    const toast = document.getElementById("toast");
    toast.textContent = `✓ ${records.length} ${records.length === 1 ? "record" : "records"} added`;
    toast.style.opacity = "1";
    setTimeout(()=>toast.style.opacity = "0", 1800);
}

const repeatedRecordConfigs = {
    claims: {
        title: "Claim",
        fields: [
            { key: "claimNumber", label: "Claim number" },
            { key: "serviceFrom", label: "Service From", placeholder: "MM/DD/YYYY" },
            { key: "serviceTo", label: "Service To", placeholder: "MM/DD/YYYY" },
            { key: "providerName", label: "Provider Name" },
            { key: "status", label: "Status", placeholder: "DENY / APPROVED / PENDING" },
            { key: "amountBilled", label: "Amount Billed", placeholder: "$0.00" }
        ]
    },
    medicalAuthorization: {
        title: "Authorization",
        fields: [
            { key: "authorizationNumber", label: "Authorization number" },
            { key: "serviceFrom", label: "Service From", placeholder: "MM/DD/YYYY" },
            { key: "serviceTo", label: "Service To", placeholder: "MM/DD/YYYY" },
            { key: "providerName", label: "Provider Name" },
            { key: "status", label: "Status", placeholder: "DENY / APPROVED / PENDING" },
            { key: "amountBilled", label: "Amount Billed", placeholder: "$0.00" }
        ]
    },
    pharmacyAuthorization: {
        title: "Authorization",
        fields: [
            { key: "authorizationNumber", label: "Authorization number" },
            { key: "serviceFrom", label: "Service From", placeholder: "MM/DD/YYYY" },
            { key: "serviceTo", label: "Service To", placeholder: "MM/DD/YYYY" },
            { key: "providerName", label: "Provider Name" },
            { key: "status", label: "Status", placeholder: "DENY / APPROVED / PENDING" },
            { key: "amountBilled", label: "Amount Billed", placeholder: "$0.00" }
        ]
    },
    benefits: {
        title: "Benefit",
        fields: [
            { key: "benefitName", label: "Benefit Name" },
            { key: "authorizationRequired", label: "Authorization Required", options: ["Yes", "No"] },
            { key: "copayment", label: "Copayment" },
            { key: "coinsurance", label: "Coinsurance" },
            { key: "coverage", label: "Coverage" },
            { key: "limit", label: "Limit" },
            { key: "vendorName", label: "Vendor Name" },
            { key: "vendorPhone", label: "Vendor Phone Number" },
            { key: "additionalNotes", label: "Additional Notes", type: "textarea", size: "medium" }
        ]
    }
};

function getRepeatedRecords(kind){
    if(kind === "claims") return claimsRecords;
    if(kind === "medicalAuthorization") return medicalAuthorizationRecords;
    if(kind === "pharmacyAuthorization") return pharmacyAuthorizationRecords;
    if(kind === "benefits") return benefitRecords;
    return [];
}

function createBlankRecord(kind){
    const record = { id: ++recordIdCounter };
    (repeatedRecordConfigs[kind]?.fields || []).forEach(field=>{
        record[field.key] = "";
    });
    return record;
}

function escapeHTML(value){
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function renderRepeatedRecords(kind, containerId){
    const container = document.getElementById(containerId);
    if(!container) return;

    const records = getRepeatedRecords(kind);
    const config = repeatedRecordConfigs[kind];

    if(!records.length){
        container.innerHTML = "";
        return;
    }

    container.innerHTML = records.map((record, index)=>`
        <div class="action-detail-card">
            <div class="action-detail-header">
                <div class="action-detail-title">${config.title} ${index + 1}</div>
                <button type="button" class="remove-demographic" aria-label="Delete ${config.title} ${index + 1}" title="Delete ${config.title} ${index + 1}" onclick="removeRepeatedRecord('${kind}', ${index})">🗑 Remove</button>
            </div>
            <div class="benefit-compact-grid">
                ${config.fields.map(field=>{
                    const current = escapeHTML(record[field.key]);
                    const placeholder = escapeHTML(field.placeholder || field.label);
                    if(field.type === "textarea"){
                        return `<textarea class="detail-textarea ${field.size || "medium"}" style="grid-column:1 / -1; margin-top:0" aria-label="${escapeHTML(field.label)}" placeholder="${placeholder}" oninput="updateRepeatedRecord('${kind}', ${index}, '${field.key}', this.value)">${current}</textarea>`;
                    }
                    if(field.options){
                        return `<select class="text-input" style="min-width:0" aria-label="${escapeHTML(field.label)}" onchange="updateRepeatedRecord('${kind}', ${index}, '${field.key}', this.value)">
                            <option value="">${escapeHTML(field.label)}</option>
                            ${field.options.map(option=>`<option value="${escapeHTML(option)}" ${record[field.key] === option ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}
                        </select>`;
                    }
                    return `<input class="text-input" style="min-width:0" type="text" aria-label="${escapeHTML(field.label)}" placeholder="${placeholder}" value="${current}" oninput="updateRepeatedRecord('${kind}', ${index}, '${field.key}', this.value)">`;
                }).join("")}
            </div>
        </div>
    `).join("");
}

function addRepeatedRecord(kind){
    const records = getRepeatedRecords(kind);
    if(!repeatedRecordConfigs[kind]) return;
    records.push(createBlankRecord(kind));
    renderActionDetails();
    generate();
}

function removeRepeatedRecord(kind, index){
    const records = getRepeatedRecords(kind);
    records.splice(index, 1);
    renderActionDetails();
    generate();
}

function updateRepeatedRecord(kind, index, field, value){
    const record = getRepeatedRecords(kind)[index];
    if(!record || !repeatedRecordConfigs[kind].fields.some(item=>item.key === field)) return;
    record[field] = value;
    generate();
}

function formatRepeatedRecordNotes(kind, heading){
    const config = repeatedRecordConfigs[kind];
    let recordNumber = 0;
    return getRepeatedRecords(kind).map(record=>{
        const lines = config.fields
            .filter(field => String(record[field.key] || "").trim() !== "")
            .map(field => `${field.label}: ${String(record[field.key]).trim()}`);
        if(!lines.length) return "";
        recordNumber += 1;
        return `${heading} ${recordNumber}:\n${lines.join("\n")}\n`;
    }).filter(Boolean).join("");
}

function buildReason(reason, interactionType, pronoun) {

    const cleanReason = reason.trim();

    if (!cleanReason) {
        return "";
    }

    const lowerReason = cleanReason.toLowerCase();

    /*
        If the agent already entered a complete sentence,
        do not add another grammatical structure.
    */
    const alreadyComplete = /^(?:he|she|they|i|we|caller|member|the member|the caller)\b/i.test(cleanReason) || /[.!?]$/.test(cleanReason);

    if (alreadyComplete) {
        return "Reason: " + cleanReason.replace(/[.!?]+$/, "") + ".\n";
    }

    /*
        Specific sentence patterns
    */
    if (lowerReason.startsWith("needs to ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} needs to ${cleanReason.substring(9).replace(/[.!?]+$/, "")}.\n`;

    }

    if (lowerReason.startsWith("would like to ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} would like to ${cleanReason.substring(14).replace(/[.!?]+$/, "")}.\n`;

    }

    if (lowerReason.startsWith("wants to ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} wants to ${cleanReason.substring(9).replace(/[.!?]+$/, "")}.\n`;

    }

    if (lowerReason.startsWith("is requesting ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} is requesting ${cleanReason.substring(14).replace(/[.!?]+$/, "")}.\n`;

    }

    if (lowerReason.startsWith("is looking for ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} is looking for ${cleanReason.substring(15).replace(/[.!?]+$/, "")}.\n`;

    }

    if (lowerReason.startsWith("has questions about ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} has questions about ${cleanReason.substring(20).replace(/[.!?]+$/, "")}.\n`;

    }

    if (lowerReason.startsWith("is asking about ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} is asking about ${cleanReason.substring(16).replace(/[.!?]+$/, "")}.\n`;

    }

    if (lowerReason.startsWith("needs ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} needs ${cleanReason.substring(6).replace(/[.!?]+$/, "")}.\n`;

    }

    /*
        If the agent starts with "to ...",
        interpret it as an action they would like to complete.
    */
    if (lowerReason.startsWith("to ")) {

        return `Reason: ${interactionType} is calling us because ${pronoun} would like to ${cleanReason.substring(3).replace(/[.!?]+$/, "")}.\n`;

    }

    /*
        Default:
        Treat the entered information as an action/request.
    */
    return `Reason: ${interactionType} is calling us because ${pronoun} would like to ${cleanReason.replace(/[.!?]+$/, "")}.\n`;
}

function buildAutomaticResolutionSummary(){
    const clean = value => String(value ?? "").trim().replace(/\s+/g, " ");
    const excludedLabels = /(?:claim|authorization) number|service from|service to|provider name|amount billed|member id|member name|interaction id|phone|address|\bnpi\b|date of birth|zip code|email|medicaid id|medicare id|social security|\bssn\b/i;
    const multiTypes = new Set(["multiClaims", "multiAuthorization", "multiBenefits", "multiDemographic", "multiPreference", "multiProvider"]);

    // Summarize notes without copying the structured identifiers already shown in the note body.
    const summarizeNote = value => {
        let note = String(value ?? "").trim();
        if(!note) return "";
        note = note
            .replace(/(?:Claim|Authorization|Auth)\s*(?:number|#)\s*:\s*[^\n;]+/gi, " ")
            .replace(/(?:Service From|Service To|Provider Name|Amount Billed|Member ID|Member Name|Interaction ID|Phone(?: Number)?|Address|NPI|Date of Birth|ZIP Code|Email|Medicaid ID|Medicare ID|Social Security|SSN)\s*:\s*[^\n;]+/gi, " ")
            .replace(/\b(?:claim|authorization|auth)\s+(?:number\s*[:#]?\s*|#\s*)?([A-Z0-9-]{6,})\b(?:\s+(?:and|,)\s*)?/gi, (match, identifier) => /\d/.test(identifier) ? " " : match)
            .replace(/\b(?:Summary of Concerns|Education Text)\s*:?/gi, " ")
            .replace(/^(?:the\s+)?(?:member|caller)\s+(?:is\s+)?(?:calling|called|contacted us)\s+(?:because|to|about|due to)?\s*/i, "")
            .replace(/^(?:additional\s+)?notes?\s*:\s*/i, "")
            .replace(/[ \t]+/g, " ")
            .replace(/\s*\n\s*/g, " ")
            .replace(/\s{2,}/g, " ")
            .replace(/^[\s;,:.\-–—]+|[\s;,:.\-–—]+$/g, "")
            .trim();
        if(!note || /^(?:intent was opened|to assist the caller|no additional notes)/i.test(note)) return "";
        const useful = note.split(/(?<=[.!?])\s+/)
            .map(sentence => sentence.trim())
            .filter(sentence => sentence && !/^(?:intent was opened|to assist the caller)/i.test(sentence));
        const resolutionSignals = /\b(?:appeal|escalat\w*|warm[- ]transfer\w*|transfer\w*|provided|contact\w*|will be contacted|understood|no further questions|scheduled|completed|confirmed|denied|approved|covered|not covered|copay|co-pay|reward|authorization|out-of-network|in-network|terminat\w*|rollover|automatic|no action|requested|sent|rejected|exception|not offered|will be closed|assisted|unable)\b/i;
        const keySentences = useful.filter((sentence, index) => index < 2 || resolutionSignals.test(sentence));
        const excerpt = [...new Set(keySentences)].slice(0, 4).join(" ");
        return excerpt.length > 320 ? `${excerpt.slice(0, 317).trim()}...` : excerpt;
    };

    const originalReason = clean(document.getElementById("reasonForCall")?.value)
        .split(/\badditional details\b|claim\s*1\s*[-:]/i)[0]
        .replace(/[.!?]+$/, "");
    const deniedCount = originalReason.match(/\b(\d+)\s+(?:claims?\s+(?:that\s+)?(?:(?:have|has)\s+been\s+|(?:were|was|are|is)\s+)?denied|denied\s+claims?)\b/i);
    const approvedCount = originalReason.match(/\b(\d+)\s+(?:claims?\s+(?:that\s+)?(?:(?:have|has)\s+been\s+|(?:were|was|are|is)\s+)?approved|approved\s+claims?)\b/i);
    let subject = "";
    if(deniedCount) subject = `${deniedCount[1]} ${Number(deniedCount[1]) === 1 ? "denied claim" : "denied claims"}`;
    else if(approvedCount) subject = `${approvedCount[1]} ${Number(approvedCount[1]) === 1 ? "approved claim" : "approved claims"}`;
    else{
        subject = originalReason
            .replace(/^(?:(?:the )?(?:member|caller)\s+)?(?:(?:is|was)\s+)?(?:calling(?: us)?|called(?: us)?|contacting us)\s+(?:because|to|about|for)\s+/i, "")
            .replace(/^(?:the )?(?:member|caller)\s+(?:would like|wants|needs)\s+to\s+/i, "")
            .replace(/^(?:she|he|they)\s+(?:has|have)\s+/i, "")
            .replace(/^(?:she|he|they|the member|the caller)\s+(?:would like|wants|needs)\s+to\s+/i, "")
            .replace(/^(?:(?:would like|wants|needs)\s+to\s+)?(?:get|receive|seek|request)\s+(?:some\s+)?(?:assistance|help)\s+(?:with|for|regarding|due to|by)\s+/i, "")
            .replace(/^(?:assistance|help)\s+(?:with|for|regarding|due to|by)\s+/i, "")
            .replace(/^get\s+(.+?)\s+to\s+get\s+installed\s+on\s+(?:her|his|their|the member's)\s+phone$/i, "install $1")
            .replace(/^(?:to\s+)?(?:verify|check|review)\s+/i, "")
            .trim();
    }

    const recordSummary = (records, noun) => {
        const filled = records.filter(record => Object.entries(record).some(([key, value]) => key !== "id" && clean(value)));
        if(!filled.length) return "";
        const counts = {};
        filled.forEach(record => {
            const status = clean(record.status).toLowerCase();
            const normalized = /deny|denied/.test(status) ? "denied"
                : /approve|approved/.test(status) ? "approved"
                : /pend|pending/.test(status) ? "pending" : "";
            if(normalized) counts[normalized] = (counts[normalized] || 0) + 1;
        });
        const statusEntries = Object.entries(counts);
        if(statusEntries.length === 1 && statusEntries[0][1] === filled.length){
            return `${filled.length} ${statusEntries[0][0]} ${noun}${filled.length === 1 ? "" : "s"}`;
        }
        if(statusEntries.length){
            const statusText = statusEntries.map(([status, count]) => `${count} ${status}`).join(", ");
            return `${filled.length} ${noun}${filled.length === 1 ? "" : "s"} (${statusText})`;
        }
        return `${filled.length} ${noun}${filled.length === 1 ? "" : "s"}`;
    };

    const actionSummaries = [];
    const selectedIds = new Set(selectedActions.map(action => action.id));
    const addNote = (target, value) => {
        const note = summarizeNote(value);
        if(note) target.push(note);
    };

    selectedActions.forEach(action => {
        const id = action.id;
        if(id === "claimsinquiry"){
            const claims = recordSummary(claimsRecords, "claim");
            if(claims && clean(claims).toLowerCase() !== clean(subject).toLowerCase()) actionSummaries.push(`Claims reviewed: ${claims}`);
            addNote(actionSummaries, actionValues.claims_inquiry_notes);
            return;
        }
        if(id === "medicalauthorizationinquiry" || id === "pharmacyauthorizationinquiry"){
            const records = id === "medicalauthorizationinquiry" ? medicalAuthorizationRecords : pharmacyAuthorizationRecords;
            const noun = id === "medicalauthorizationinquiry" ? "medical authorization" : "pharmacy authorization";
            const summary = recordSummary(records, noun);
            if(summary) actionSummaries.push(`Authorization reviewed: ${summary}`);
            if(id === "pharmacyauthorizationinquiry"){
                if(/^yes$/i.test(clean(actionValues.pharmacy_auth_warm_transfer))) actionSummaries.push("warm transferred to the Part D team");
                if(clean(actionValues.pharmacy_auth_spoke_with)) actionSummaries.push(`spoke with ${clean(actionValues.pharmacy_auth_spoke_with)}`);
                addNote(actionSummaries, actionValues.pharmacy_auth_notes);
            }else addNote(actionSummaries, actionValues.medical_authentication_notes);
            return;
        }
        if(id === "benefitsEligibility"){
            const verified = clean(actionValues.be_active_verification);
            const planStatus = clean(actionValues.be_plan_status);
            if(verified) actionSummaries.push(`active plan verification: ${verified.toLowerCase()}`);
            if(planStatus) actionSummaries.push(`plan status: ${planStatus.toLowerCase()}`);
            return;
        }
        if(id === "updatepcp"){
            const details = [
                actionValues.pcp_name && clean(actionValues.pcp_name),
                actionValues.pcp_group && `medical group: ${clean(actionValues.pcp_group)}`,
                actionValues.pcp_effective_date && `effective ${clean(actionValues.pcp_effective_date)}`,
                actionValues.pcp_accepting_new && `accepting new patients: ${clean(actionValues.pcp_accepting_new).toLowerCase()}`,
                actionValues.pcp_retro_restriction && `retroactive date restriction: ${clean(actionValues.pcp_retro_restriction).toLowerCase()}`
            ].filter(Boolean);
            if(details.length) actionSummaries.push(`PCP information reviewed: ${details.join(", ")}`);
            addNote(actionSummaries, actionValues.pcp_notes);
            return;
        }
        if(id === "gaps"){
            const reminder = clean(actionValues.gaps_reminders);
            const status = clean(actionValues.gaps_status);
            if(reminder) actionSummaries.push(`healthy reminder reviewed: ${reminder}`);
            if(/scheduled by the agent/i.test(status)) actionSummaries.push("appointment scheduled by the agent");
            else if(/caller will schedule/i.test(status)) actionSummaries.push("member will schedule the appointment");
            addNote(actionSummaries, actionValues.gaps_notes);
            return;
        }
        if(id === "material"){
            const requested = clean(actionValues.materialRequested);
            const addressVerified = clean(actionValues.addressVerified);
            if(requested) actionSummaries.push(`materials requested: ${requested}`);
            if(addressVerified) actionSummaries.push(`address verification: ${addressVerified.toLowerCase()}`);
            return;
        }
        if(id === "Issues"){
            const issue = clean(actionValues.issues_reason).toLowerCase();
            const note = summarizeNote(actionValues.issues_notes);
            if(note) actionSummaries.push(note);
            else if(issue === "appeal") actionSummaries.push("appeal intent documented");
            else if(issue === "grievance") actionSummaries.push("grievance intent documented");
            return;
        }
        if(id === "memberdemographics"){
            const changes = memberDemographics.filter(block => block.updateType).map(block => {
                const note = summarizeNote(block.values?.member_demo_notes);
                return `${block.updateType} update${note ? `: ${note}` : ""}`;
            });
            if(changes.length) actionSummaries.push(`member information documented: ${changes.join("; ")}`);
            return;
        }
        if(id === "updatememberpreferences"){
            const changes = memberPreferences.filter(block => block.updateType).map(block => {
                const details = (action.fields || [])
                    .filter(field => field.dependsOn === "update_type" && field.showWhen === block.updateType && !excludedLabels.test(field.label || ""))
                    .map(field => {
                        const value = clean(block.values?.[field.id]);
                        return value ? `${field.label}: ${value}` : "";
                    })
                    .filter(Boolean);
                const note = summarizeNote(block.values?.member_preferences_notes);
                return `${block.updateType}${details.length ? ` (${details.join(", ")})` : ""}${note ? `: ${note}` : ""}`;
            });
            if(changes.length) actionSummaries.push(`member preferences documented: ${changes.join("; ")}`);
            return;
        }
        if(id === "providersearchinq"){
            const foundProviders = providers.map(provider => {
                const name = clean(provider.values?.name);
                const specialty = clean(provider.values?.specialty);
                if(!name && !specialty) return "";
                return [name, specialty].filter(Boolean).join(" — ");
            }).filter(Boolean);
            if(clean(actionValues.provider_address_reviewed)) actionSummaries.push(`provider address reviewed: ${clean(actionValues.provider_address_reviewed).toLowerCase()}`);
            if(foundProviders.length) actionSummaries.push(`providers reviewed: ${foundProviders.join("; ")}`);
            addNote(actionSummaries, actionValues.provider_notes);
            return;
        }

        const values = (action.fields || []).flatMap(field => {
            if(multiTypes.has(field.type) || excludedLabels.test(field.label || "") || /tools used/i.test(field.label || "")) return [];
            const value = clean(actionValues[field.id]);
            if(!value) return [];
            if(/notes/i.test(field.label || "")){
                const note = summarizeNote(value);
                return note ? [note] : [];
            }
            return [`${field.label}: ${value}`];
        });
        if(values.length) actionSummaries.push(`${action.name}: ${values.join("; ")}`);
    });

    const benefits = benefitRecords.map(record => {
        const name = clean(record.benefitName);
        const notes = summarizeNote(record.additionalNotes);
        const values = [
            record.authorizationRequired && `authorization required: ${clean(record.authorizationRequired)}`,
            record.coverage && `coverage ${clean(record.coverage)}`,
            record.copayment && `copay ${clean(record.copayment)}`,
            record.coinsurance && `coinsurance ${clean(record.coinsurance)}`,
            record.limit && `limit ${clean(record.limit)}`,
            record.vendorName && `vendor ${clean(record.vendorName)}`
        ].filter(Boolean);
        if(!name && !values.length && !notes) return "";
        const description = values.length ? ` (${values.join(", ")})` : "";
        return `${name || "benefit details"}${description}${notes ? `: ${notes}` : ""}`;
    }).filter(Boolean);
    if(selectedIds.has("benefitsEligibility") && benefits.length) actionSummaries.push(`benefits reviewed: ${benefits.join("; ")}`);

    const uniqueActions = [...new Set(actionSummaries)];
    const cleanSubject = subject
        ? subject.charAt(0).toLowerCase() + subject.slice(1)
        : "";
    const summary = [cleanSubject, ...uniqueActions].filter(Boolean);
    return summary.length ? summary.join("; ") : "No additional details were entered";
}

function generate(){

    let text = "";

let caller = document.getElementById("caller").checked;
let member = document.getElementById("member").checked;

const reason = document
    .getElementById("reasonForCall")
    .value
    .trim();
    const reasonError = document.getElementById("reasonError");

const reasonLetterCount = (
    reason.match(/\p{L}/gu) || []
).length;

if(reason !== "" && reasonLetterCount < 10){

    reasonError.textContent =
        "⚠ Reason must contain at least 10 letters.";

    reasonError.classList.add("show");

}else{

    reasonError.textContent = "";
    reasonError.classList.remove("show");

}

const male = document.getElementById("male").checked;
const female = document.getElementById("female").checked;

let pronoun = "they";

if(male){
    pronoun = "he";
}else if(female){
    pronoun = "she";
}

let interactionType = "";

if(caller){
    interactionType = "Caller";
}else if(member){
    interactionType = "Member";
}


/* =========================
   REASON
========================= */

if(reason !== ""){

    if(interactionType !== ""){

        text += buildReason(
            reason,
            interactionType,
            pronoun
        );

    }else{

        // Generate information even when
        // Caller/Member has not been selected yet.
        text += "Reason: " +
                reason.replace(/[.!?]+$/, "") +
                ".\n";

    }

}

    if(document.getElementById("hipaa_failed").checked){

    text += "HIPAA Verification: HIPAA Failed.\n";

}else{

    let hipaa=[];

    if(document.getElementById("hipaa_mid").checked) hipaa.push("Member ID");
    if(document.getElementById("hipaa_dob").checked) hipaa.push("Date Of Birth");
    if(document.getElementById("hipaa_address").checked) hipaa.push("Address");
    if(document.getElementById("hipaa_phone").checked) hipaa.push("Phone Number");
    if(document.getElementById("hipaa_ivr").checked) hipaa.push("IVR Verified with MID and DOB");

    if(hipaa.length){
        text += "HIPAA Verification: " + hipaa.join(", ") + ".\n";
    }

}

    let firstTime = document.querySelector('input[name="firstTime"]:checked');
    if(firstTime) text += "Is this the first time calling us about this matter?: " + firstTime.value + ".\n";

    let personal = document.querySelector('input[name="personalChange"]:checked');
    if(personal) text += "Has any of your personal information changed recently?: " + personal.value + ".\n";

    let contact = document.querySelector('input[name="contactValid"]:checked');
    if(contact) text += "Is your email address and phone number still valid?: " + contact.value + ".\n";

    let website = document.querySelector('input[name="website"]:checked');
    if(website) text += "Website: " + website.value + ".\n";

  if(selectedActions.length){

    text += "Actions:\n";

    selectedActions.forEach(action=>{

        text += action.note + "\n";

        if(action.fields){

    const appendField = action.fields.find(field => field.appendToNote);

    if(appendField){

        const value = actionValues[appendField.id];

        if(value){

            text = text.trimEnd() + " " + value + "\n";

        }

    }    
}
if(action.id==="claimsinquiry"){

    text += formatRepeatedRecordNotes("claims", "Claim");

}else if(action.id==="medicalauthorizationinquiry"){

    text += formatRepeatedRecordNotes("medicalAuthorization", "Authorization");

}else if(action.id==="pharmacyauthorizationinquiry"){

    text += formatRepeatedRecordNotes("pharmacyAuthorization", "Authorization");

}

if(action.id==="memberdemographics"){

    text += generateMemberDemographics();

}else if(action.id==="updatememberpreferences"){

    text += generateMemberPreferences();

}else if(action.id==="providersearchinq"){

    // Address Reviewed
    const addressReviewed = actionValues["provider_address_reviewed"] || "";

    if(addressReviewed){
        text += "Address Reviewed: " + addressReviewed + "\n";
    }

    // Provider Search Results
    text += generateProviders();

    // Additional Notes
    const providerNotes = actionValues["provider_notes"] || "";

    if(providerNotes){
        text += "Notes: " + providerNotes + "\n";
    }

   }else if(action.id==="benefitsEligibility"){

    /*
        =========================
        B&E - ACTIVE PLAN
        =========================
    */

    const activeVerification =
        actionValues["be_active_verification"] || "";

    if(activeVerification){

        const memberName =
            (actionValues["be_active_member_name"] || "").trim();

        const effectiveDate =
            (actionValues["be_active_effective_date"] || "").trim();

        const endDate =
            (actionValues["be_active_end_date"] || "").trim();

        const planName =
            (actionValues["be_active_plan_name"] || "").trim();

        const pcp =
            (actionValues["be_active_pcp"] || "").trim();

        const medicalGroup =
            (actionValues["be_active_medical_group"] || "").trim();

        const planStatus =
            actionValues["be_plan_status"] || "";

        /*
            Si seleccionó Yes, generar el Disclaimer
        */

        if(activeVerification === "Yes"){

            let activePlanText =
                "Disclaimer: Our records indicate that " +
                (memberName || "[Member Name]") +
                " is currently " +
                (planStatus || "Active") +
                ".";

            if(effectiveDate || endDate){

                activePlanText +=
                    " Effective date of " +
                    (effectiveDate || "[Effective Date]") +
                    " and end date of " +
                    (endDate || "[End Date]") +
                    ".";

            }

            if(planName){

                activePlanText +=
                    " under " +
                    planName +
                    ".";

            }

            if(pcp){

                activePlanText +=
                    " PCP is " +
                    pcp;

                if(medicalGroup){

                    activePlanText +=
                        " with " +
                        medicalGroup;

                }

                activePlanText += ".";

            }else if(medicalGroup){

                activePlanText +=
                    " Medical Group is " +
                    medicalGroup +
                    ".";

            }

            text += activePlanText + "\n";

        }else{

            /*
                Si respondió No, registrar la respuesta
            */

            text +=
                "Active Plan Verification: " +
                activeVerification +
                ".\n";

        }

    }


    /*
        =========================
        B&E DETAILS
        =========================

        TODOS los campos capturados
        deben aparecer en la nota.
    */

    const benefitFields = [

        ["be_tools", "Tools Used"]

    ];

    benefitFields.forEach(([id, label])=>{

        const value =
            (actionValues[id] || "").trim();

        if(value !== ""){

            text +=
                label +
                ": " +
                value +
                "\n";

        }

    });

    text += formatRepeatedRecordNotes("benefits", "Benefit");

}else if(action.fields){

    action.fields.forEach(field=>{

        if(field.type === "multiClaims" || field.type === "multiAuthorization" || field.type === "multiBenefits") return;

        const value = actionValues[field.id] || "";

        if(value !== ""){

            if(field.appendToNote) return;

            if(field.excludeFromNote) return;

            text += field.label + ": " + value + "\n";

        }

    });

}

        text += "\n";

    });

}

const callerName = document
    .getElementById("callerNameInput")
    .value
    .trim();

if(callerName !== ""){
    text += "Caller Name: " + callerName + "\n";
}

    const interactionId = document
    .getElementById("interactionInput")
    .value
    .trim();

if(interactionId !== ""){
    text += "Interaction ID: " + interactionId + "\n";
}

const metInteractionId = document
    .getElementById("metInteractionInput")
    .value
    .trim();

if(metInteractionId !== ""){
    text += "Met Interaction ID: " + metInteractionId + "\n";
}



    let inHome = [...document.querySelectorAll('input[name="inHome"]:checked')].map(i => i.value);
    if(inHome.length) text += "In Home Assessment: " + inHome.join(", ") + ".\n";

    const resolution =
    document.querySelector('input[name="resolution"]:checked');

if(resolution){

    text += "Resolution: " + resolution.value;

    const resolutionNotesField = document.getElementById("resolutionNotes");
    const editResolutionSummary = document.getElementById("editResolutionSummary").checked;
    resolutionNotesField.readOnly = !editResolutionSummary;
    if(!editResolutionSummary) resolutionNotesField.value = buildAutomaticResolutionSummary();
    const resolutionNotes = resolutionNotesField.value.trim();

    if(resolutionNotes !== ""){

        text += " " + resolutionNotes.replace(/[.!?]+$/, "");

    }

    text += ".\n";

};
const mid = document.getElementById("hipaa_mid").checked;
const dob = document.getElementById("hipaa_dob").checked;
const addr = document.getElementById("hipaa_address").checked;
const phone = document.getElementById("hipaa_phone").checked;
const ivr = document.getElementById("hipaa_ivr").checked;
const failed = document.getElementById("hipaa_failed").checked;

const addressVerifier = addr && phone;

const hipaaCompleted =
    failed ||
    ivr ||
    (mid && dob) ||
    (mid && addressVerifier) ||
    (dob && addressVerifier);

document.querySelectorAll(".hipaa label").forEach(label=>{
    label.classList.toggle("warning", !hipaaCompleted);
});

    document.getElementById("nota").value = text;
}

function toggleHipaa(){

    if(document.getElementById("hipaa_failed").checked){

        ["hipaa_mid","hipaa_dob","hipaa_address","hipaa_phone","hipaa_ivr"]
        .forEach(id=>{
            document.getElementById(id).checked=false;
            document.getElementById(id).disabled=true;
        });

    }else{

        ["hipaa_mid","hipaa_dob","hipaa_address","hipaa_phone","hipaa_ivr"]
        .forEach(id=>{
            document.getElementById(id).disabled=false;
        });

    }

    if(
        document.getElementById("hipaa_mid").checked ||
        document.getElementById("hipaa_dob").checked ||
        document.getElementById("hipaa_address").checked ||
        document.getElementById("hipaa_phone").checked ||
        document.getElementById("hipaa_ivr").checked
    ){
        document.getElementById("hipaa_failed").checked=false;
    }

    generate();

}

function addDemographicBlock(){

    // Máximo de 6 updates
    if(memberDemographics.length >= 6){
        return;
    }

    demographicCounter++;

    memberDemographics.push({
        id: demographicCounter,
        updateType: "",
        values: {}
    });

    renderActionDetails();
    generate();
}


function updateDemographicType(id, value){

    const block = memberDemographics.find(d => d.id === id);

    if(!block) return;

    // Limpiar todos los datos del update anterior
    block.values = {};

    // Asignar el nuevo tipo
    block.updateType = value;

    // Volver a dibujar los campos
    renderActionDetails();
generate();

}


function renderDemographicBlocks(){

    const container =
        document.getElementById("memberDemographicBlocks");

    if(!container) return;

    container.innerHTML = "";

    if(memberDemographics.length === 0){

    container.innerHTML = `
        <div class="empty-actions">
            <div class="empty-title">
                No demographic updates have been added.
            </div>

            <div class="empty-subtitle">
                Press <strong>+ Add Update</strong>.
            </div>
        </div>
    `;

    return;
}


    const memberAction =
        actions.find(a => a.id === "memberdemographics");

    memberDemographics.forEach((block, index)=>{

        const usedTypes = memberDemographics
            .filter(d => d.id !== block.id)
            .map(d => d.updateType);

        let card = `

<div class="action-detail-card">

    <div class="action-detail-header">

        <div class="action-detail-title">
            Demographic ${index + 1}
        </div>

        <button
            type="button"
            class="remove-demographic"
            onclick="removeDemographic(${block.id})">

            🗑 Remove

        </button>

    </div>

    <label class="detail-label">
        Update Type
    </label>

    <select
        class="text-input"
        onchange="updateDemographicType(${block.id}, this.value)">

        <option value=""
            ${block.updateType===""?"selected":""}>
            Select...
        </option>

        ${[
            "Address",
            "Authorized Contacts",
            "Date of Birth",
            "Gender",
            "Name",
            "Phone Number"
        ]
        .filter(option =>
            !usedTypes.includes(option) ||
            option===block.updateType
        )
        .map(option=>`
            <option
                value="${option}"
                ${block.updateType===option?"selected":""}>
                ${option}
            </option>
        `).join("")}

    </select>
`;

        memberAction.fields.forEach(field=>{

            if(field.dependsOn !== "update_type") return;

            if(field.showWhen !== block.updateType) return;

            card += `

<label class="detail-label">
    ${field.label}
</label>

<textarea
    class="detail-textarea ${field.size || "small"}"
    placeholder="${field.label}"
    oninput="
    memberDemographics.find(d=>d.id===${block.id})
    .values['${field.id}']=this.value;
    generate();
">${block.values[field.id] || ""}</textarea>

`;

        });

        card += `

<label class="detail-label">
    Notes
</label>

<textarea
    class="detail-textarea large"
    placeholder="Additional notes"
    oninput="
    memberDemographics.find(d=>d.id===${block.id})
    .values['member_demo_notes']=this.value;
    generate();
">${block.values["member_demo_notes"] || ""}</textarea>

</div>

`;

        container.innerHTML += card;

    });

}

function renderPreferenceBlocks(){

    const container =
        document.getElementById("memberPreferenceBlocks");

    if(!container) return;

    container.innerHTML = "";

    if(memberPreferences.length === 0){

        container.innerHTML = `
        <div class="empty-actions">
            <div class="empty-title">
                No preference updates have been added.
            </div>

            <div class="empty-subtitle">
                Press <strong>+ Add Preference</strong>.
            </div>
        </div>
        `;

        return;
    }

    const memberAction =
        actions.find(a => a.id === "updatememberpreferences");

    memberPreferences.forEach((block,index)=>{

        const usedTypes = memberPreferences
            .filter(p => p.id !== block.id)
            .map(p => p.updateType);

        let card = `

<div class="action-detail-card">

    <div class="action-detail-header">

        <div class="action-detail-title">
            Preference ${index + 1}
        </div>

        <button
            type="button"
            class="remove-demographic"
            onclick="removePreference(${block.id})">

            🗑 Remove

        </button>

    </div>

    <label class="detail-label">
        Update Type
    </label>

    <select
        class="text-input"
        onchange="updatePreferenceType(${block.id}, this.value)">

        <option value=""
            ${block.updateType===""?"selected":""}>
            Select...
        </option>

        ${[
            "Alternate Format Preferences",
            "Electronic Document Delivery Option",
            "Email",
            "Member Language",
            "Member Engagement Management",
            "Race or Ethnicity",
            "Pronoun"
        ]
        .filter(option =>
            !usedTypes.includes(option) ||
            option===block.updateType
        )
        .map(option=>`
            <option
                value="${option}"
                ${block.updateType===option?"selected":""}>
                ${option}
            </option>
        `).join("")}

    </select>
`;

        memberAction.fields.forEach(field=>{

            if(field.dependsOn !== "update_type") return;

            if(field.showWhen !== block.updateType) return;

            card += renderPreferenceField(field, block);

        });

        card += `

<label class="detail-label">
    Notes
</label>

<textarea
    class="detail-textarea large"
    placeholder="Additional notes"
    oninput="
    memberPreferences.find(p=>p.id===${block.id})
    .values['member_preferences_notes']=this.value;
    generate();
">${block.values["member_preferences_notes"] || ""}</textarea>

</div>

`;

        container.innerHTML += card;

    });

}

function renderProviderBlocks(){

    const container = document.getElementById("providerBlocks");

    if(!container) return;

    container.innerHTML = "";

    if(providers.length === 0){

        container.innerHTML = `
            <div class="empty-actions">
                <div class="empty-title">
                    No providers have been added.
                </div>

                <div class="empty-subtitle">
                    Press <strong>+ Add Provider</strong>.
                </div>
            </div>
        `;

        return;
    }

    providers.forEach((provider,index)=>{

        container.innerHTML += `

<div class="action-detail-card">

    <div class="action-detail-header">

        <div class="action-detail-title">
            Provider ${index+1}
        </div>

        <button
            type="button"
            class="remove-demographic"
            onclick="removeProvider(${provider.id})">

            🗑 Remove

        </button>

    </div>

    <label class="detail-label">
        Provider Name
    </label>

    <textarea
        class="detail-textarea small"
        oninput="
            providers.find(p=>p.id===${provider.id}).values.name=this.value;
            generate();
        "
    >${provider.values.name || ""}</textarea>

    <label class="detail-label">
        Address
    </label>

    <textarea
        class="detail-textarea small"
        oninput="
            providers.find(p=>p.id===${provider.id}).values.address=this.value;
            generate();
        "
    >${provider.values.address || ""}</textarea>

    <label class="detail-label">
        Phone Number
    </label>

    <textarea
        class="detail-textarea small"
        oninput="
            providers.find(p=>p.id===${provider.id}).values.phone=this.value;
            generate();
        "
    >${provider.values.phone || ""}</textarea>

    <label class="detail-label">
        Specialty
    </label>

    <textarea
        class="detail-textarea small"
        oninput="
            providers.find(p=>p.id===${provider.id}).values.specialty=this.value;
            generate();
        "
    >${provider.values.specialty || ""}</textarea>

    <label class="detail-label">
        NPI
    </label>

    <textarea
        class="detail-textarea small"
        oninput="
            providers.find(p=>p.id===${provider.id}).values.npi=this.value;
            generate();
        "
    >${provider.values.npi || ""}</textarea>

</div>

`;

    });

}

function renderPreferenceField(field, block){

    const value = block.values[field.id] || "";

    // TEXTAREA
    if(field.type==="textarea"){

        return `
<label class="detail-label">
    ${field.label}
</label>

<textarea
    class="detail-textarea ${field.size || ""}"
    placeholder="${field.label}"
    oninput="
memberPreferences.find(p=>p.id===${block.id}).values['${field.id}']=this.value;
generate();
">${value}</textarea>
`;

    }

    // SELECT
    if(field.type==="select"){

        return `
<label class="detail-label">
    ${field.label}
</label>

<select
    class="text-input"
    onchange="
memberPreferences.find(p=>p.id===${block.id}).values['${field.id}']=this.value;
generate();
">

<option value="">Select...</option>

${field.options.map(option=>`

<option
value="${option}"
${value===option?"selected":""}>
${option}
</option>

`).join("")}

</select>
`;

    }

    // RADIO
    if(field.type==="radio"){

        return `
<label class="detail-label">
${field.label}
</label>

<div class="detail-radio-group">

${field.options.map(option=>`

<label>

<input
type="radio"
name="${field.id}_${block.id}"
value="${option}"
${value===option?"checked":""}

onchange="
memberPreferences.find(p=>p.id===${block.id}).values['${field.id}']=this.value;
generate();
">

${option}

</label>

`).join("")}

</div>
`;

    }

    return "";

}

function generateMemberDemographics(){

    let text = "";

    memberDemographics.forEach(block=>{

        if(block.updateType==="") return;

        text += "Update Type: " + block.updateType + "\n";

        const memberAction =
            actions.find(a=>a.id==="memberdemographics");

        memberAction.fields.forEach(field=>{

            if(field.dependsOn!=="update_type") return;

            if(field.showWhen!==block.updateType) return;

            const value = block.values[field.id];

            if(value){

                text += field.label + ": " + value + "\n";

            }

        });

        const notes = block.values["member_demo_notes"];

if(notes){
    text += `Notes: ${notes}\n`;
}

        text += "\n";

    });


    return text;

}

function removeDemographic(id){

    memberDemographics = memberDemographics.filter(
        d => d.id !== id
    );

    renderActionDetails();
    generate();

}
function generateMemberPreferences(){

    let text = "";

    memberPreferences.forEach(block=>{

        if(block.updateType==="") return;

        text += "Update Type: " + block.updateType + "\n";

        const memberAction =
            actions.find(a=>a.id==="updatememberpreferences");

        memberAction.fields.forEach(field=>{

            if(field.dependsOn!=="update_type") return;

            if(field.showWhen!==block.updateType) return;

            const value = block.values[field.id];

            if(value){

                text += field.label + ": " + value + "\n";

            }

        });

        const notes = block.values["member_preferences_notes"];

        if(notes){
            text += `Notes: ${notes}\n`;
        }

        text += "\n";

    });

    return text;

}

function generateProviders(){

    let text = "";

    if(providers.length === 0){
        return text;
    }

    text += "Provider Search Results:\n";

    providers.forEach((provider,index)=>{

        text += `Provider ${index + 1}\n`;

        if(provider.values.name){
            text += `Name: ${provider.values.name}\n`;
        }

        if(provider.values.address){
            text += `Address: ${provider.values.address}\n`;
        }

        if(provider.values.phone){
            text += `Phone Number: ${provider.values.phone}\n`;
        }

        if(provider.values.specialty){
            text += `Specialty: ${provider.values.specialty}\n`;
        }

        if(provider.values.npi){
            text += `NPI: ${provider.values.npi}\n`;
        }

        text += "\n";

    });

    return text;

}

function filterActions(){

    const search = document
        .getElementById("actionSearch")
        .value
        .toLowerCase();

    const labels = document.querySelectorAll(".actions-grid label");

    labels.forEach(label => {

        const checkbox = label.querySelector("input");

        const visibleText = label.textContent.toLowerCase();

        const valueText = checkbox.value.toLowerCase();

        if(
            visibleText.includes(search) ||
            valueText.includes(search)
        ){
            label.style.display = "flex";
        }else{
            label.style.display = "none";
        }

    });

}
function addPreferenceBlock(){

    // Máximo de 7 updates
    if(memberPreferences.length >= 7){
        return;
    }

    preferenceCounter++;

    memberPreferences.push({
        id: preferenceCounter,
        updateType:"",
        values:{}
    });

    renderActionDetails();
    generate();

}
function updatePreferenceType(id, value){

    const block = memberPreferences.find(p => p.id === id);

    if(!block) return;

    block.values = {};
    block.updateType = value;

    renderActionDetails();
    generate();

}
function removePreference(id){

    memberPreferences =
        memberPreferences.filter(p => p.id !== id);

    renderActionDetails();
    generate();

}
function addProvider(){

    if(providers.length >= 10){
        return;
    }

    providerCounter++;

    providers.push({
        id:providerCounter,
        values:{}
    });

    renderActionDetails();
    generate();

}

function removeProvider(id){

    providers = providers.filter(p=>p.id!==id);

    renderActionDetails();
    generate();

}

let modalAction = null;


function openModal({
    icon = "⚠️",
    title = "Confirm Action",
    message = "",
    confirmText = "Confirm",
    showCancel = true,
    action = null
}){

    const modal = document.getElementById("customModal");

    document.getElementById("modalIcon").textContent = icon;

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalMessage").textContent = message;

    const cancelButton =
        document.getElementById("modalCancel");

    const confirmButton =
        document.getElementById("modalConfirm");

    cancelButton.style.display =
        showCancel ? "block" : "none";

    confirmButton.textContent = confirmText;

    modalAction = action;

    modal.classList.add("show");
}


function closeModal(){

    document
        .getElementById("customModal")
        .classList.remove("show");

    modalAction = null;
}


function confirmModalAction(){

    const action = modalAction;

    closeModal();

    if(typeof action === "function"){
        action();
    }

}

function copiar(){

    const reason = document
        .getElementById("reasonForCall")
        .value
        .trim();

    const reasonLetterCount = (
        reason.match(/\p{L}/gu) || []
    ).length;

    const reasonError =
        document.getElementById("reasonError");


    /*
        Reason validation
    */

    if(reasonLetterCount < 10){

        reasonError.textContent =
            "⚠ Reason must contain at least 10 letters.";

        reasonError.classList.add("show");

        document
            .getElementById("reasonForCall")
            .focus();

        openModal({

            icon: "⚠️",

            title: "Unable to Copy",

            message:
                "The note cannot be copied because the Reason must contain at least 10 letters.",

            confirmText: "Close",

            showCancel: false

        });

        return;
    }


    /*
        Copy note
    */

    navigator.clipboard
        .writeText(
            document.getElementById("nota").value
        )
        .then(() => {

            let toast =
                document.getElementById("toast");

            toast.textContent = "📋 Copied";

            toast.style.opacity = "1";

            setTimeout(() => {

                toast.style.opacity = "0";

            }, 1500);

        })
        .catch(() => {

            openModal({

                icon: "⚠️",

                title: "Unable to Copy",

                message:
                    "The note could not be copied to the clipboard. Please try again.",

                confirmText: "Close",

                showCancel: false

            });

        });

}

function resetForm(){

    openModal({

        icon: "🔄",

        title: "Reset Form",

        message:
            "Are you sure you want to reset all information in this form?",

        confirmText: "Reset",

        showCancel: true,

        action: performReset

    });

}


function performReset(){

    // Vaciar todos los valores del motor
    Object.keys(actionValues).forEach(key=>{
        delete actionValues[key];
    });


    // Limpiar acciones
    selectedActions = [];
    expandedAction = null;


    // Limpiar Demographics
    memberDemographics = [];
    demographicCounter = 0;


    // Limpiar Preferences
    memberPreferences = [];
    preferenceCounter = 0;


    // Limpiar Providers
    providers = [];
    providerCounter = 0;

    // Limpiar registros repetibles
    claimsRecords = [];
    medicalAuthorizationRecords = [];
    pharmacyAuthorizationRecords = [];
    benefitRecords = [];
    recordIdCounter = 0;


    // Limpiar todos los inputs
    document.querySelectorAll("input").forEach(input=>{

        if(
            input.type === "radio" ||
            input.type === "checkbox"
        ){

            input.checked = false;

        }else{

            input.value = "";

        }

    });


    // Limpiar todos los textarea
    document.querySelectorAll("textarea").forEach(textarea=>{

        textarea.value = "";

    });


    // Limpiar todos los select
    document.querySelectorAll("select").forEach(select=>{

        select.value = "";

    });


    // Restore generated fields and transient UI to their clean state.
    const resolutionNotesField =
        document.getElementById("resolutionNotes");

    if(resolutionNotesField){
        resolutionNotesField.value = "";
        resolutionNotesField.readOnly = true;
    }

    const searchResults =
        document.getElementById("searchResults");

    if(searchResults){
        searchResults.innerHTML = "";
        searchResults.style.display = "none";
    }

    const toast = document.getElementById("toast");
    if(toast) toast.style.opacity = "0";


    // Ocultar Resolution Details
    const resolutionContainer =
        document.getElementById("resolutionContainer");

    if(resolutionContainer){

        resolutionContainer.style.display = "none";

    }


    // Limpiar mensaje de error de Reason
    const reasonError =
        document.getElementById("reasonError");

    if(reasonError){

        reasonError.textContent = "";

        reasonError.classList.remove("show");

    }


    // Limpiar búsqueda
    const favoriteActions = document.getElementById("favoriteActions");
    if(favoriteActions) favoriteActions.style.display = "grid";


    // Volver a dibujar todo
    renderFavoriteActions();

    renderSelectedActions();

    renderActionDetails();


    generate();

    // generate() updates validation styles; reset should show the neutral state.
    document.querySelectorAll(".hipaa label").forEach(label=>{
        label.classList.remove("warning");
    });

    const generatedNote = document.getElementById("nota");
    if(generatedNote) generatedNote.value = "";

}

function renderFavoriteActions(){

    const container = document.getElementById("favoriteActions");

    container.innerHTML = "";

    actions
    .filter(action => action.favorite)
    .filter(action => !selectedActions.some(a => a.id === action.id))
    .forEach(action=>{

        container.innerHTML += `

<label
class="small-option"
onclick="toggleAction('${action.id}')">

${action.name}

</label>

`;

    });

}

function renderSelectedActions(){

    const container = document.getElementById("selectedActions");

    container.innerHTML = "";

    if(selectedActions.length === 0){

        container.innerHTML = `
            <div class="empty-actions">
                <div class="empty-title">
                    No actions selected
                </div>
                <div class="empty-subtitle">
                    Search above or choose a Quick Action.
                </div>
            </div>
        `;

        return;

    }

    selectedActions.forEach(action => {

        container.innerHTML += `
            <div class="selected-chip">

                <span>${action.name}</span>

                <span class="remove-action"
                      onclick="toggleAction('${action.id}')">

                    ✕

                </span>

            </div>
        `;

    });

}
function renderBenefitsEligibilityDetails(detailContainer){

    const getValue = id =>
        actionValues[id] || "";

    const setValue = (id, value) => {

        actionValues[id] = value;

        generate();

    };

       
detailContainer.innerHTML += `

    <div class="be-section-title active">
        Active Plan Verification
    </div>

`;
    /*
        PLAN ACTIVE VERIFICATION
    */

    detailContainer.innerHTML += `

        <label class="detail-label">

            Is the member calling to verify the plan is active?

        </label>

        <div class="detail-radio-group">

            <label>

                <input
                    type="radio"
                    name="be_active_verification"
                    value="Yes"

                    ${getValue("be_active_verification") === "Yes"
                        ? "checked"
                        : ""}

                    onchange="
                        actionValues['be_active_verification']=this.value;
                        renderActionDetails();
                        generate();
                    "
                >

                Yes

            </label>


            <label>

                <input
                    type="radio"
                    name="be_active_verification"
                    value="No"

                    ${getValue("be_active_verification") === "No"
                        ? "checked"
                        : ""}

                    onchange="
                        actionValues['be_active_verification']=this.value;
                        renderActionDetails();
                        generate();
                    "
                >

                No

            </label>

        </div>

    `;

    /*
        ACTIVE PLAN INFORMATION
    */

    if(getValue("be_active_verification") === "Yes"){

            /*
        PLAN STATUS
    */

    if(getValue("be_active_verification") === "Yes"){

        const planStatus =
            getValue("be_plan_status") || "Active";

        detailContainer.innerHTML += `

            <label class="detail-label">

                Plan Status

            </label>

            <div class="detail-radio-group be-plan-status-group">

                <label>

                    <input
                        type="radio"
                        name="be_plan_status"
                        value="Active"

                        ${planStatus === "Active"
                            ? "checked"
                            : ""}

                        onchange="
                            actionValues['be_plan_status']=this.value;
                            generate();
                        "
                    >

                    Active

                </label>


                <label>

                    <input
                        type="radio"
                        name="be_plan_status"
                        value="Term"

                        ${planStatus === "Term"
                            ? "checked"
                            : ""}

                        onchange="
                            actionValues['be_plan_status']=this.value;
                            generate();
                        "
                    >

                    Term

                </label>


                <label>

                    <input
                        type="radio"
                        name="be_plan_status"
                        value="Void"

                        ${planStatus === "Void"
                            ? "checked"
                            : ""}

                        onchange="
                            actionValues['be_plan_status']=this.value;
                            generate();
                        "
                    >

                    Void

                </label>

            </div>

        `;

    }

        detailContainer.innerHTML += `

            <div class="benefit-active-plan-grid">

                <textarea
                    id="be_active_member_name"
                    class="detail-textarea small"
                    placeholder="Member Name"
                    oninput="
                        actionValues['be_active_member_name']=this.value;
                        generate();
                    "
                >${getValue("be_active_member_name")}</textarea>


                <div class="benefit-active-plan-row">

                    <textarea
                        id="be_active_effective_date"
                        class="detail-textarea xsmall"
                        placeholder="Effective Date"
                        oninput="
                            actionValues['be_active_effective_date']=this.value;
                            generate();
                        "
                    >${getValue("be_active_effective_date")}</textarea>


                    <textarea
                        id="be_active_end_date"
                        class="detail-textarea xsmall"
                        placeholder="End Date"
                        oninput="
                            actionValues['be_active_end_date']=this.value;
                            generate();
                        "
                    >${getValue("be_active_end_date")}</textarea>

                </div>


                <textarea
                    id="be_active_plan_name"
                    class="detail-textarea small"
                    placeholder="Plan Name"
                    oninput="
                        actionValues['be_active_plan_name']=this.value;
                        generate();
                    "
                >${getValue("be_active_plan_name")}</textarea>


                <textarea
                    id="be_active_pcp"
                    class="detail-textarea small"
                    placeholder="PCP"
                    oninput="
                        actionValues['be_active_pcp']=this.value;
                        generate();
                    "
                >${getValue("be_active_pcp")}</textarea>


                <textarea
                    id="be_active_medical_group"
                    class="detail-textarea small"
                    placeholder="Medical Group"
                    oninput="
                        actionValues['be_active_medical_group']=this.value;
                        generate();
                    "
                >${getValue("be_active_medical_group")}</textarea>

            </div>

        `;

    }

    /*
    BENEFIT INFORMATION
*/

detailContainer.innerHTML += `

    <div class="be-section-title benefits">
        Benefit Information
    </div>

`;

    /*
        TOOLS USED
    */

    detailContainer.innerHTML += `

        <textarea

            id="be_tools"

            class="detail-textarea small"

            placeholder="Tools Used"

            oninput="
                actionValues['be_tools']=this.value;
                generate();
            "

        >${getValue("be_tools")}</textarea>

    `;


    detailContainer.innerHTML += `
        <button type="button" class="copy" onclick="addRepeatedRecord('benefits')">
            + Add Benefit
        </button>
        <div id="benefitRecordsList"></div>
    `;

    renderRepeatedRecords("benefits", "benefitRecordsList");


}
function renderActionDetails(){

    const container = document.getElementById("actionDetails");

    container.innerHTML = "";

    selectedActions.forEach(action=>{

        container.innerHTML += `

    <div class="action-detail-card">

        <div
            class="action-detail-title"
            onclick="toggleAccordion('${action.id}')"
            style="cursor:pointer;display:flex;justify-content:space-between;align-items:center;">

            <span>${action.icon || "📌"} ${action.name}</span>

            <span>

                ${expandedAction === action.id ? "▼" : "▶"}

            </span>

        </div>

        <div id="details-${action.id}"></div>

    </div>

`;

        const detailContainer =
            document.getElementById(`details-${action.id}`);
            if(expandedAction !== action.id){

    return;

}

        if(!action.fields) return;

        if(action.id === "benefitsEligibility"){

    renderBenefitsEligibilityDetails(detailContainer);

    return;

}

        action.fields.forEach(field=>{

            // Hide conditional fields
if(field.showWhen){

    const dependsOn = field.dependsOn || "language_service";

    console.log(
    "Campo:",
    field.label,
    "| dependsOn:",
    dependsOn,
    "| Valor:",
    actionValues[dependsOn],
    "| showWhen:",
    field.showWhen
);

    if(actionValues[dependsOn] !== field.showWhen){
        return;
    }

}
if(field.type==="multiDemographic"){

    detailContainer.innerHTML += `
        ${memberDemographics.length < 6 ? `
<button
    type="button"
    class="copy"
    onclick="addDemographicBlock()">
    + Add Update
</button>
` : `
<div class="max-updates">
    ✓ Maximum of 6 updates reached
</div>
`}

        <div id="memberDemographicBlocks"></div>
    `;

    renderDemographicBlocks();

    return;
}
if(field.type==="multiPreference"){

    detailContainer.innerHTML += `
        ${memberPreferences.length < 7 ? `
<button
    type="button"
    class="copy"
    onclick="addPreferenceBlock()">
    + Add Preference
</button>
` : `
<div class="max-updates">
    ✓ Maximum of 7 preference updates reached
</div>
`}

        <div id="memberPreferenceBlocks"></div>
    `;

    renderPreferenceBlocks();

    return;
}
if(field.type==="multiProvider"){
    detailContainer.innerHTML += `
        <button
            type="button"
            class="copy"
            onclick="addProvider()">
            + Add Provider
        </button>

        <div id="providerBlocks"></div>
    `;

    renderProviderBlocks();

    // No hacer return aquí.
}
if(field.type === "multiClaims"){
    detailContainer.innerHTML += `
        <button type="button" class="copy" onclick="addRepeatedRecord('claims')">
            + Add Claim
        </button>
        <textarea id="bulkPaste-claims" class="detail-textarea small" onpaste="setTimeout(() => importRepeatedRecords('claims'), 0)" placeholder="Paste copied claim table rows here (include the column headings if possible)..."></textarea>
        <button type="button" class="copy" onclick="importRepeatedRecords('claims')">Import pasted claims</button>
        <div id="claimsRecordsList"></div>
    `;
    renderRepeatedRecords("claims", "claimsRecordsList");
    return;
}
if(field.type === "multiAuthorization"){
    const kind = action.id === "medicalauthorizationinquiry"
        ? "medicalAuthorization"
        : "pharmacyAuthorization";
    const containerId = action.id === "medicalauthorizationinquiry"
        ? "medicalAuthorizationRecordsList"
        : "pharmacyAuthorizationRecordsList";
    detailContainer.innerHTML += `
        <button type="button" class="copy" onclick="addRepeatedRecord('${kind}')">
            + Add Authorization
        </button>
        <textarea id="bulkPaste-${kind}" class="detail-textarea small" placeholder="Paste one or more authorizations here (Authorization number, Service From, Service To, Provider Name, Status, Amount Billed)..."></textarea>
        <button type="button" class="copy" onclick="importRepeatedRecords('${kind}')">Paste authorization details</button>
        <div id="${containerId}"></div>
    `;
    renderRepeatedRecords(kind, containerId);
    return;
}
if(field.type === "multiBenefits"){
    detailContainer.innerHTML += `
        <button type="button" class="copy" onclick="addRepeatedRecord('benefits')">
            + Add Benefit
        </button>
        <div id="benefitRecordsList"></div>
    `;
    renderRepeatedRecords("benefits", "benefitRecordsList");
    return;
}

if(
    action.id==="updatememberpreferences" &&
    field.id==="member_preferences_notes"
){
    return;
}
            if(field.type==="textarea"){

                detailContainer.innerHTML += `
                    <label class="detail-label">
                        ${field.label}
                    </label>

                    <textarea
    id="${field.id}"
    class="detail-textarea ${field.size || 'medium'}"
    rows="${field.rows || 3}"
    oninput="
        actionValues['${field.id}']=this.value;
        generate();
    "
>${actionValues[field.id] || ""}</textarea>
                `;
            }

            if(field.type==="radio"){

                detailContainer.innerHTML += `
                    <label class="detail-label">
                        ${field.label}
                    </label>

                    <div class="detail-radio-group">

                        ${field.options.map(option=>{

    const optionText =
        typeof option === "object"
            ? option.text
            : option;

    const optionValue =
        typeof option === "object"
            ? option.value
            : option;

    return `

        <label>

            <input
                type="radio"
                name="${field.id}"
                value="${optionValue}"
                ${actionValues[field.id]===optionValue ? "checked" : ""}
                onchange="
                    actionValues['${field.id}']=this.value;
                    renderActionDetails();
                    generate();
                ">

            ${optionText}

        </label>

    `;

}).join("")}

                    </div>
                `;
            }

            if(field.type==="select"){

    detailContainer.innerHTML += `
        <label class="detail-label">
            ${field.label}
        </label>

        <select
            class="text-input"
            onchange="
    actionValues['${field.id}']=this.value;
    renderActionDetails();
    generate();
">

            <option value="" ${!actionValues[field.id] ? "selected" : ""}>
                Select an issue...
            </option>

            ${field.options.map(option=>`
                <option
                    value="${option}"
                    ${actionValues[field.id]===option ? "selected" : ""}>
                    ${option}
                </option>
            `).join("")}

        </select>
    `;

}

        });

    });

}
function toggleAccordion(id){

    expandedAction = id;

    renderActionDetails();

    generate();

}

function toggleAction(id){

    const action = actions.find(a => a.id === id);

    const index = selectedActions.findIndex(a => a.id === id);

    if(index === -1){

    selectedActions.push(action);

    expandedAction = action.id;

}else{

    selectedActions.splice(index,1);

    if(action.fields){

    action.fields.forEach(field=>{

        delete actionValues[field.id];

    });

}

    if(action.id === "claimsinquiry") claimsRecords = [];
    if(action.id === "medicalauthorizationinquiry") medicalAuthorizationRecords = [];
    if(action.id === "pharmacyauthorizationinquiry") pharmacyAuthorizationRecords = [];
    if(action.id === "benefitsEligibility") benefitRecords = [];

    if(expandedAction === action.id){

        expandedAction = selectedActions.length
            ? selectedActions[selectedActions.length - 1].id
            : null;

    }

}

    renderFavoriteActions();
    renderSelectedActions();
    renderActionDetails();
    generate();

}
function searchActions(){

    const search = document
        .getElementById("actionSearch")
        .value
        .trim()
        .toLowerCase();

    const results = document.getElementById("searchResults");

    results.innerHTML = "";

    if(search === ""){

    results.style.display = "none";

    document.getElementById("favoriteActions").style.display = "grid";

    return;

}

    const filtered = actions.filter(action => {

        // No mostrar acciones ya seleccionadas
        if(selectedActions.some(a => a.id === action.id))
            return false;

        // Buscar por nombre
        if(action.name.toLowerCase().includes(search))
            return true;

        // Buscar por keywords
        return action.keywords.some(keyword =>
            keyword.toLowerCase().includes(search)
        );

    });

    if(filtered.length === 0){

        results.style.display = "none";

        return;

    }

    results.style.display = "block";
    document.getElementById("favoriteActions").style.display = "none";

    filtered.forEach(action=>{

        results.innerHTML += `
            <div class="search-item"
                onclick="selectSearchAction('${action.id}')">

                ${action.name}

            </div>
        `;

    });

}
function selectSearchAction(id){

    toggleAction(id);

    document.getElementById("actionSearch").value = "";

    document.getElementById("searchResults").style.display = "none";

    document.getElementById("favoriteActions").style.display = "grid";

}

renderFavoriteActions();
renderSelectedActions();
generate();
searchActions();
