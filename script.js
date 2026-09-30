  (function() {
   var ACT= {
    "Security Log": ["Create",
     "Search",
     "Audit Report"],
     "Weekle Insights": ["Create Alert",
     "Search Alert",
     "Create Drill",
     "Search Drill",
     "Create Incident",
     "Search Incident"],
     "Government Check": ["Create",
     "Search"],
     "Work Assignment": ["Add new Log",
     "Search"],
     "Incident": ["Create",
     "Search",
     "Audit Report"],
     "Threat Level": ["Threat levels",
     "Search History"],
     "Weapon Mgt": ["Handover",
     "Audit"],
     "Equip Inventory": ["Add new Item",
     "Post Preference",
     "Mater List",
     "Search"],
     "PNG": ["Search",
     "Slideshow",
     "Slideshow Search",
     "Incident Types",
     "Restrictions",
     "Audit Report"],
     "Bulletin Board": ["Create",
     "Search",
     "Audit Report"],
     "Restricted Access": ["Check Access",
     "Search",
     "Employees Inside Plants",
     "Hospital Visits",
     "Rehab Visits",
     "Rabiyah Visits",
     "Contractor Access Report",
     "Main Admin",
     "PIN Change"],
     "Maintenance Item": ["Add new Item",
     "Search"],
     "Morning Report": ["Create",
     "Search"],
     "Stolen Vehicle": ["Create",
     "Search/Edit"],
     "Gate Register": ["Register Employees",
     "Search"],
     "K9 Services": ["Search Request",
     "Drill Request",
     "Explosives Inspection",
     "Explosive Withdrawal",
     "Weekly Training",
     "Daily Log",
     "Admin Portal",
     "Reports"],
     "Traffic Violations": ["Create","Search","Violation Types","Violation Type Audit"],
     "Fingerprint Mgt": ["Check","Update"],
     "Sticker Search": ["Search Sticker"],
     "User Management": ["Create User","Search Users","Security Tokens","Create Security Role","Search Security Roles","Audit Report"]
  }
   ;
   var ICONS= {
    "Security Log": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M29.1667 53.9583H5.83334V45.7917C12.9821 41.8106 20.9871 39.6162 29.1667 39.3954\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M36.4584 36.4583V55.4167L50.3125 64.1667L64.1667 55.4167V36.4583H36.4584Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M19.9019 22.9728C19.279 21.4689 18.9583 19.857 18.9583 18.2292C18.9583 14.9416 20.2643 11.7887 22.589 9.46398C24.9137 7.13931 28.0666 5.83333 31.3542 5.83333C34.6418 5.83333 37.7947 7.13931 40.1194 9.46398C42.444 11.7887 43.75 14.9416 43.75 18.2292C43.75 19.857 43.4294 21.4689 42.8064 22.9728C42.1835 24.4768 41.2704 25.8433 40.1194 26.9943C38.9683 28.1454 37.6018 29.0585 36.0979 29.6814C34.5939 30.3044 32.982 30.625 31.3542 30.625C29.7263 30.625 28.1144 30.3044 26.6105 29.6814C25.1066 29.0585 23.7401 28.1454 22.589 26.9943C21.4379 25.8433 20.5249 24.4768 19.9019 22.9728Z\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>",
     "Weekle Insights": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M20.4167 5.83333H23.3333C24.1069 5.83333 24.8487 6.14062 25.3957 6.6876C25.9427 7.23458 26.25 7.97645 26.25 8.74999V11.6667H40.8333V8.74999C40.8333 7.97645 41.1406 7.23458 41.6876 6.6876C42.2346 6.14062 42.9765 5.83333 43.75 5.83333H46.6667C47.4402 5.83333 48.1821 6.14062 48.7291 6.6876C49.276 7.23458 49.5833 7.97645 49.5833 8.74999V11.6667C51.904 11.6667 54.1296 12.5885 55.7705 14.2295C57.4115 15.8704 58.3333 18.096 58.3333 20.4167V52.5C58.3333 54.8206 57.4115 57.0462 55.7705 58.6872C54.1296 60.3281 51.904 61.25 49.5833 61.25H17.5C15.1794 61.25 12.9538 60.3281 11.3128 58.6872C9.67187 57.0462 8.75 54.8206 8.75 52.5V20.4167C8.75 18.096 9.67187 15.8704 11.3128 14.2295C12.9538 12.5885 15.1794 11.6667 17.5 11.6667V8.74999C17.5 7.97645 17.8073 7.23458 18.3543 6.6876C18.9013 6.14062 19.6431 5.83333 20.4167 5.83333ZM43.75 11.6667H46.6667V8.74999H43.75V11.6667ZM23.3333 11.6667V8.74999H20.4167V11.6667H23.3333ZM17.5 14.5833C15.9529 14.5833 14.4692 15.1979 13.3752 16.2919C12.2812 17.3858 11.6667 18.8696 11.6667 20.4167V23.3333H55.4167V20.4167C55.4167 18.8696 54.8021 17.3858 53.7081 16.2919C52.6142 15.1979 51.1304 14.5833 49.5833 14.5833H17.5ZM11.6667 52.5C11.6667 54.0471 12.2812 55.5308 13.3752 56.6248C14.4692 57.7187 15.9529 58.3333 17.5 58.3333H49.5833C51.1304 58.3333 52.6142 57.7187 53.7081 56.6248C54.8021 55.5308 55.4167 54.0471 55.4167 52.5V26.25H11.6667V52.5ZM35 37.9167H49.5833V52.5H35V37.9167ZM37.9167 40.8333V49.5833H46.6667V40.8333H37.9167Z\" fill=\"currentColor\"/></svg>",
     "Government Check": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M35 0L70 16.1538V23.3333H0V16.1538L35 0ZM50.5556 26.9231H66.1111V55.641H50.5556V26.9231ZM0 70V59.2308H70V70H0ZM27.2222 26.9231H42.7778V55.641H27.2222V26.9231ZM3.88889 26.9231H19.4444V55.641H3.88889V26.9231ZM3.88889 62.8205V66.4103H66.1111V62.8205H3.88889ZM7.77778 30.5128V52.0513H15.5556V30.5128H7.77778ZM31.1111 30.5128V52.0513H38.8889V30.5128H31.1111ZM54.4444 30.5128V52.0513H62.2222V30.5128H54.4444ZM3.88889 19.7436H66.1111V18.3077L35 3.87692L3.88889 18.3077V19.7436Z\" fill=\"currentColor\"/></svg>",
     "Work Assignment": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M63.4375 53.9933C63.4356 54.8347 63.0996 55.6409 62.5034 56.2346C61.9073 56.8283 61.0997 57.1609 60.2583 57.1594H9.73146C8.89009 57.1582 8.08362 56.823 7.48937 56.2274C6.89512 55.6317 6.56173 54.8245 6.5625 53.9831V16.0081C6.56327 15.5914 6.64611 15.1789 6.80629 14.7942C6.96647 14.4095 7.20086 14.0601 7.49607 13.7659C7.79129 13.4718 8.14154 13.2387 8.52684 13.0799C8.91214 12.9212 9.32494 12.8399 9.74167 12.8406L24.1821 12.8421C27.4735 12.8421 33.2602 18.865 36.1229 19.0225H60.7804C61.1293 19.0221 61.4749 19.0905 61.7974 19.2238C62.1198 19.3571 62.4128 19.5527 62.6596 19.7994C62.9064 20.046 63.1021 20.3389 63.2356 20.6613C63.3691 20.9837 63.4377 21.3292 63.4375 21.6781V53.9933Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M56.5338 37.9444C59.0177 37.9444 61.0313 35.9308 61.0313 33.4469C61.0313 30.963 59.0177 28.9494 56.5338 28.9494C54.0499 28.9494 52.0363 30.963 52.0363 33.4469C52.0363 35.9308 54.0499 37.9444 56.5338 37.9444Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M35.2814 46.1533C37.7653 46.1533 39.7789 44.1397 39.7789 41.6558C39.7789 39.1719 37.7653 37.1583 35.2814 37.1583C32.7975 37.1583 30.7839 39.1719 30.7839 41.6558C30.7839 44.1397 32.7975 46.1533 35.2814 46.1533Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M45.9084 42.0481C48.3923 42.0481 50.4059 40.0345 50.4059 37.5506C50.4059 35.0667 48.3923 33.0531 45.9084 33.0531C43.4245 33.0531 41.4109 35.0667 41.4109 37.5506C41.4109 40.0345 43.4245 42.0481 45.9084 42.0481Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M26.0735 57.1594V52.9696C26.0734 52.0854 26.3411 51.222 26.8415 50.4931C27.3419 49.7642 28.0513 49.2039 28.8764 48.8862L36.2702 46.0425M36.3124 57.1594V48.9767C36.3123 48.0925 36.5801 47.2291 37.0805 46.5002C37.5808 45.7713 38.2903 45.211 39.1154 44.8933L46.5091 42.0496M46.9379 57.1594V44.8729C46.9379 43.9886 47.2058 43.1251 47.7065 42.3961C48.2071 41.6672 48.9169 41.107 49.7422 40.7896L57.136 37.9458\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "Incident": "<svg viewBox=\"0 0 72 70\" fill=\"none\"><path d=\"M0 70L36 0L72 70H0ZM66.0686 66.1517L36 7.69654L5.93143 66.1517H66.0686ZM34.2857 43.0621V27.669H37.7143V43.0621H34.2857ZM34.2857 50.7587H37.7143V58.4552H34.2857V50.7587Z\" fill=\"currentColor\"/></svg>",
     "Threat Level": "<svg viewBox=\"0 0 52 46\" fill=\"none\"><path d=\"M44.75 38.9167V25.7917C44.75 22.0488 43.6421 18.3897 41.566 15.2755C39.4898 12.1612 36.5383 9.73122 33.0833 8.29167C33.0833 6.3578 32.3151 4.50313 30.9477 3.13568C29.5802 1.76823 27.7255 1 25.7917 1C23.8578 1 22.0031 1.76823 20.6357 3.13568C19.2682 4.50313 18.5 6.3578 18.5 8.29167C15.0451 9.73122 12.0935 12.1612 10.0174 15.2755C7.94122 18.3897 6.83333 22.0488 6.83333 25.7917V38.9167C6.83333 40.4638 6.21875 41.9475 5.12479 43.0415C4.03083 44.1354 2.5471 44.75 1 44.75H50.5833C49.0362 44.75 47.5525 44.1354 46.4585 43.0415C45.3646 41.9475 44.75 40.4638 44.75 38.9167Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "Weapon Mgt": "<svg viewBox=\"0 0 145 143\" fill=\"none\"><path d=\"M61.9685 101.904L62.4404 102.977C65.6657 101.141 69.7739 98.6446 71.3583 97.6755C71.5367 97.5657 71.665 97.3918 71.7162 97.1906C71.7673 96.9894 71.7374 96.7765 71.6327 96.5965L71.5471 96.4503L61.9685 101.904Z\" fill=\"currentColor\"/><path d=\"M73.3676 58.3993L75.9634 58.9763L94.8217 48.2387L93.9194 46.6974L73.3676 58.3993Z\" fill=\"currentColor\"/><path d=\"M92.3818 44.071L71.6574 55.8712L73.0671 58.2792L93.7915 46.479L92.3818 44.071Z\" fill=\"currentColor\"/><path d=\"M41.8153 66.2641L87.3549 40.3344L88.5382 37.8181L87.1657 38.5996L86.0294 38.2365C85.9789 38.2213 85.9258 38.2165 85.8734 38.2223C85.821 38.2281 85.7703 38.2445 85.7245 38.2704L83.8429 39.3418C83.7877 39.3732 83.7474 39.4249 83.7309 39.4856C83.7145 39.5463 83.7231 39.611 83.755 39.6655L84.1384 40.3204L66.8939 50.1392L67.4409 51.0736L59.4805 55.6061L58.9348 54.6739L46.1397 61.9592L45.0037 61.7328C44.6491 61.6604 44.2799 61.7184 43.9658 61.8959L42.093 62.9622C42.03 63.001 41.9844 63.0621 41.9656 63.1329C41.9467 63.2037 41.9559 63.2789 41.9913 63.3432L42.385 64.0156L40.8885 64.8677L38.3749 71.6054L38.9846 72.6467L41.8153 66.2641Z\" fill=\"currentColor\"/><path d=\"M59.5775 55.2626L67.0819 50.9898L66.6627 50.2737L59.1583 54.5466L59.5775 55.2626Z\" fill=\"currentColor\"/><path d=\"M72.9391 58.5647L71.4361 55.9973L39.7806 74.0215L40.9487 76.0169C40.9487 76.0169 41.4917 77.1108 39.8575 78.3527C39.1001 78.9295 40.3465 80.1963 41.1611 79.7325C41.9757 79.2687 44.9359 78.4011 46.5635 78.7814C48.1911 79.1616 49.0853 80.1195 49.9941 83.9305C50.9029 87.7415 51.7914 93.5347 54.0254 99.0246C56.2114 104.422 56.8177 105.352 58.2494 105.11C58.7084 105.032 60.2883 104.197 62.2256 103.1L61.6525 101.793L71.4193 96.2319L71.2723 95.9809C71.4986 95.5711 71.5715 95.0957 71.478 94.6383C71.3048 93.9189 69.1021 91.9916 68.5449 90.7574C67.3484 88.1086 67.9314 87.1886 67.5616 85.6847C67.1918 84.1808 65.2611 80.6257 64.8304 79.89C64.3997 79.1542 64.0389 77.4036 66.0175 76.6845C67.2356 76.2442 68.8986 75.7776 69.9838 75.4886C70.7461 75.2854 71.4785 74.9858 72.1627 74.5972L79.1137 70.6395C79.7454 70.2565 79.9162 69.6004 79.6248 69.1026L76.7744 64.1732C76.497 63.6929 76.3849 63.1369 76.4546 62.5884C76.5051 62.1986 76.6459 61.8254 76.8663 61.498C77.0867 61.1706 77.3807 60.8977 77.7254 60.7005L79.0691 59.9354L72.9391 58.5647Z\" stroke=\"currentColor\" stroke-width=\"2.4\"/></svg>",
     "Equip Inventory": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M17.5 14.5833H24.7917C24.7917 12.2627 25.7135 10.0371 27.3545 8.39616C28.9954 6.75522 31.221 5.83334 33.5417 5.83334C35.8623 5.83334 38.0879 6.75522 39.7289 8.39616C41.3698 10.0371 42.2917 12.2627 42.2917 14.5833H49.5833C51.904 14.5833 54.1296 15.5052 55.7705 17.1462C57.4115 18.7871 58.3333 21.0127 58.3333 23.3333V55.4167C58.3333 57.7373 57.4115 59.9629 55.7705 61.6039C54.1296 63.2448 51.904 64.1667 49.5833 64.1667H17.5C15.1794 64.1667 12.9538 63.2448 11.3128 61.6039C9.67187 59.9629 8.75 57.7373 8.75 55.4167V23.3333C8.75 21.0127 9.67187 18.7871 11.3128 17.1462C12.9538 15.5052 15.1794 14.5833 17.5 14.5833ZM17.5 17.5C15.9529 17.5 14.4692 18.1146 13.3752 19.2086C12.2812 20.3025 11.6667 21.7862 11.6667 23.3333V55.4167C11.6667 56.9638 12.2812 58.4475 13.3752 59.5415C14.4692 60.6354 15.9529 61.25 17.5 61.25H49.5833C51.1304 61.25 52.6142 60.6354 53.7081 59.5415C54.8021 58.4475 55.4167 56.9638 55.4167 55.4167V23.3333C55.4167 21.7862 54.8021 20.3025 53.7081 19.2086C52.6142 18.1146 51.1304 17.5 49.5833 17.5H46.6667V26.25H20.4167V17.5H17.5ZM23.3333 23.3333H43.75V17.5H23.3333V23.3333ZM33.5417 8.75001C31.9946 8.75001 30.5108 9.36459 29.4169 10.4586C28.3229 11.5525 27.7083 13.0362 27.7083 14.5833H39.375C39.375 13.0362 38.7604 11.5525 37.6665 10.4586C36.5725 9.36459 35.0888 8.75001 33.5417 8.75001ZM50.0208 33.8333L29.1667 54.6875L19.8333 45.3542L21.875 43.2833L29.1667 50.575L47.95 31.7625L50.0208 33.8333Z\" fill=\"currentColor\"/></svg>",
     "PNG": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M30.625 40.8333C42.7 40.8333 52.5 45.4125 52.5 51.0416V58.3333H8.75V51.0416C8.75 45.4125 18.55 40.8333 30.625 40.8333ZM49.5833 51.0416C49.5833 47.0166 41.0958 43.75 30.625 43.75C20.1542 43.75 11.6667 47.0166 11.6667 51.0416V55.4166H49.5833V51.0416ZM30.625 14.5833C33.3324 14.5833 35.9289 15.6588 37.8434 17.5733C39.7578 19.4877 40.8333 22.0842 40.8333 24.7916C40.8333 27.4991 39.7578 30.0956 37.8434 32.01C35.9289 33.9245 33.3324 35 30.625 35C27.9176 35 25.3211 33.9245 23.4066 32.01C21.4922 30.0956 20.4167 27.4991 20.4167 24.7916C20.4167 22.0842 21.4922 19.4877 23.4066 17.5733C25.3211 15.6588 27.9176 14.5833 30.625 14.5833ZM30.625 17.5C28.6911 17.5 26.8365 18.2682 25.469 19.6357C24.1016 21.0031 23.3333 22.8578 23.3333 24.7916C23.3333 26.7255 24.1016 28.5802 25.469 29.9476C26.8365 31.3151 28.6911 32.0833 30.625 32.0833C32.5589 32.0833 34.4135 31.3151 35.781 29.9476C37.1484 28.5802 37.9167 26.7255 37.9167 24.7916C37.9167 22.8578 37.1484 21.0031 35.781 19.6357C34.4135 18.2682 32.5589 17.5 30.625 17.5ZM58.3333 46.6666V43.75H61.25V46.6666H58.3333ZM58.3333 37.9166V20.4166H61.25V37.9166H58.3333Z\" fill=\"currentColor\"/></svg>",
     "Bulletin Board": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M8.75 11.6667H58.3333V14.5834H8.75V11.6667ZM35 23.3334H58.3333V26.25H35V23.3334ZM35 35H58.3333V37.9167H35V35ZM8.75 46.6667H46.6667V49.5834H8.75V46.6667ZM58.3333 58.3334V61.25H8.75V58.3334H58.3333ZM8.75 20.4167H29.1667V40.8334H8.75V20.4167ZM26.25 23.3334H11.6667V37.9167H26.25V23.3334Z\" fill=\"currentColor\"/></svg>",
     "Restricted Access": "<svg viewBox=\"0 0 74 73\" fill=\"none\"><path d=\"M38.5417 63.875H21.5834C19.9479 63.875 18.3793 63.2341 17.2229 62.0932C16.0664 60.9524 15.4167 59.405 15.4167 57.7916V39.5416C15.4167 37.9282 16.0664 36.3809 17.2229 35.2401C18.3793 34.0992 19.9479 33.4583 21.5834 33.4583H52.4167C53.5166 33.4577 54.5966 33.7473 55.5448 34.2971C56.493 34.8469 57.2749 35.6369 57.8094 36.5851\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M33.9167 48.6667C33.9167 49.4734 34.2415 50.247 34.8198 50.8175C35.398 51.3879 36.1823 51.7083 37 51.7083C37.8178 51.7083 38.602 51.3879 39.1803 50.8175C39.7585 50.247 40.0834 49.4734 40.0834 48.6667C40.0834 47.86 39.7585 47.0863 39.1803 46.5159C38.602 45.9455 37.8178 45.625 37 45.625C36.1823 45.625 35.398 45.9455 34.8198 46.5159C34.2415 47.0863 33.9167 47.86 33.9167 48.6667Z\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M24.6667 33.4583V21.2917C24.6667 18.0649 25.9661 14.9702 28.279 12.6885C30.592 10.4068 33.729 9.125 37 9.125C40.271 9.125 43.4081 10.4068 45.721 12.6885C48.034 14.9702 49.3334 18.0649 49.3334 21.2917V33.4583\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M49.3333 57.7917C49.3333 60.2118 50.3079 62.5328 52.0426 64.244C53.7773 65.9553 56.1301 66.9167 58.5833 66.9167C61.0366 66.9167 63.3893 65.9553 65.1241 64.244C66.8588 62.5328 67.8333 60.2118 67.8333 57.7917C67.8333 55.3716 66.8588 53.0506 65.1241 51.3393C63.3893 49.6281 61.0366 48.6667 58.5833 48.6667C56.1301 48.6667 53.7773 49.6281 52.0426 51.3393C50.3079 53.0506 49.3333 55.3716 49.3333 57.7917Z\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M52.4167 63.875L64.75 51.7083\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "Maintenance Item": "<svg viewBox=\"0 0 70 71\" fill=\"none\"><g clip-path=\"url(#mclip)\"><path d=\"M18.9 37.0383L17.5 45.8542L11.725 47.2742L1.45837 57.6875V69.5208H13.125L23.3917 59.1075L24.7917 53.25L33.4834 51.83L18.9 37.0383Z\" stroke=\"currentColor\" stroke-width=\"3\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M26.1917 44.4342L52.5 17.75\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M52.5 17.75L64.1667 14.7917L68.5417 5.91669L64.1667 1.47919L55.4167 5.91669L52.5 17.75Z\" stroke=\"currentColor\" stroke-width=\"3\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M33.5417 28.1042L23.3334 17.75L21.875 7.39585L16.0417 1.47919H7.29171L13.125 7.39585V13.3125H7.29171L1.45837 7.39585V16.2709L5.83337 22.1875L17.5 23.6667L27.7084 34.0209\" stroke=\"currentColor\" stroke-width=\"3\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M42.2917 36.9792L52.5 47.3334L62.7084 48.8125L68.5417 54.7292V63.6042L62.7084 57.6875H56.875V63.6042L62.7084 69.5209H53.9584L48.125 65.0834L46.6667 53.25L36.4584 42.8959\" stroke=\"currentColor\" stroke-width=\"3\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17.5 45.8542L24.7917 53.25\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g><defs><clipPath id=\"mclip\"><rect width=\"70\" height=\"71\" fill=\"white\"/></clipPath></defs></svg>",
     "Morning Report": "<svg viewBox=\"0 0 72 72\" fill=\"none\"><path d=\"M16.5556 8.36835H8.77778C6.71498 8.36835 4.73667 9.14466 3.27806 10.5265C1.81944 11.9084 1 13.7825 1 15.7368V59.9473C1 61.9015 1.81944 63.7757 3.27806 65.1576C4.73667 66.5394 6.71498 67.3157 8.77778 67.3157H30.9328M55.4444 41.5262V56.2631H71M55.4444 30.4736V15.7368C55.4444 13.7825 54.625 11.9084 53.1664 10.5265C51.7078 9.14466 49.7295 8.36835 47.6667 8.36835H39.8889\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M16.5555 30.4737H32.1111M16.5555 45.2105H28.2222M16.5555 8.36842C16.5555 6.41419 17.375 4.54001 18.8336 3.15816C20.2922 1.77631 22.2705 1 24.3333 1H32.1111C34.1739 1 36.1522 1.77631 37.6108 3.15816C39.0694 4.54001 39.8889 6.41419 39.8889 8.36842C39.8889 10.3226 39.0694 12.1968 37.6108 13.5787C36.1522 14.9605 34.1739 15.7368 32.1111 15.7368H24.3333C22.2705 15.7368 20.2922 14.9605 18.8336 13.5787C17.375 12.1968 16.5555 10.3226 16.5555 8.36842ZM39.8889 56.2632C39.8889 60.1716 41.5278 63.92 44.445 66.6837C47.3622 69.4474 51.3188 71 55.4444 71C59.57 71 63.5266 69.4474 66.4439 66.6837C69.3611 63.92 71 60.1716 71 56.2632C71 52.3547 69.3611 48.6063 66.4439 45.8426C63.5266 43.0789 59.57 41.5263 55.4444 41.5263C51.3188 41.5263 47.3622 43.0789 44.445 45.8426C41.5278 48.6063 39.8889 52.3547 39.8889 56.2632Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "Stolen Vehicle": "<svg viewBox=\"0 0 82 80\" fill=\"none\"><path d=\"M60.8164 16.6667C61.6706 16.6667 62.4253 16.8892 63.0801 17.3337C63.7348 17.7782 64.2045 18.3889 64.4893 19.1667L71.75 40.4997V67.4997C71.75 68.208 71.5045 68.8021 71.0137 69.2809C70.5222 69.7604 69.9135 69.9997 69.1875 69.9997H67.3936C66.6534 69.9997 66.0552 69.7604 65.5996 69.2809C65.1441 68.8021 64.917 68.208 64.917 67.4997V62.9997H17.083V67.4997C17.083 68.208 16.8375 68.8021 16.3467 69.2809C15.8553 69.7603 15.2464 69.9997 14.5205 69.9997H12.8125C12.0865 69.9997 11.4781 69.7604 10.9873 69.2809C10.4959 68.8021 10.25 68.208 10.25 67.4997V40.4997L17.5107 19.1667C17.7955 18.3889 18.2652 17.7782 18.9199 17.3337C19.5747 16.8892 20.3294 16.6667 21.1836 16.6667H60.8164ZM15.375 57.9997H66.625V40.4997H15.375V57.9997ZM24.4287 44.6667C25.7098 44.6667 26.7995 45.1201 27.6963 46.027C28.5932 46.9349 29.042 48.0375 29.042 49.3337C29.0419 50.5835 28.6004 51.6463 27.7178 52.5212C26.8351 53.3961 25.7316 53.8337 24.4082 53.8337C23.0858 53.8336 21.9614 53.4026 21.0352 52.5417C20.1092 51.6805 19.6455 50.6043 19.6455 49.3132C19.6456 48.0228 20.1113 46.9259 21.041 46.0222C21.9714 45.1189 23.1003 44.6668 24.4287 44.6667ZM57.6768 44.6667C58.9994 44.6667 60.1244 45.12 61.0508 46.027C61.9767 46.9349 62.4395 48.0375 62.4395 49.3337C62.4394 50.5835 61.9747 51.6463 61.0449 52.5212C60.1144 53.3961 58.9848 53.8337 57.6562 53.8337C56.375 53.8337 55.2855 53.4029 54.3887 52.5417C53.4919 51.6806 53.0439 50.6042 53.0439 49.3132C53.044 48.0228 53.4855 46.9259 54.3682 46.0222C55.2509 45.1188 56.3533 44.6667 57.6768 44.6667ZM17.3398 35.4997H64.6602L59.9629 21.6667H22.0371L17.3398 35.4997Z\" fill=\"currentColor\" fill-opacity=\"0.85\"/></svg>",
     "Gate Register": "<svg viewBox=\"0 0 72 72\" fill=\"none\"><path d=\"M5.76562 3.51562V68.4844H12.2344V9.98438H16.6359C15.3703 9.44578 14.4844 8.19281 14.4844 6.75C14.4844 5.30719 15.3703 4.05422 16.6359 3.51562H5.76562ZM19.3641 3.51562C20.6297 4.05422 21.5156 5.30719 21.5156 6.75C21.5156 8.19281 20.6297 9.44578 19.3641 9.98438H24.4828C23.85 9.06047 23.4844 7.94672 23.4844 6.75C23.4844 5.55328 23.85 4.43953 24.4828 3.51562H19.3641ZM29.25 3.51562C27.45 3.51562 26.0156 4.94859 26.0156 6.75C26.0156 8.55141 27.45 9.98438 29.25 9.98438C31.05 9.98438 32.4844 8.55141 32.4844 6.75C32.4844 4.94859 31.05 3.51562 29.25 3.51562ZM34.0172 3.51562C34.65 4.43953 35.0156 5.55328 35.0156 6.75C35.0156 7.94672 34.65 9.06047 34.0172 9.98438H39.1359C37.8703 9.44578 36.9844 8.19281 36.9844 6.75C36.9844 5.30719 37.8703 4.05422 39.1359 3.51562H34.0172ZM41.8641 3.51562C43.1297 4.05422 44.0156 5.30719 44.0156 6.75C44.0156 8.19281 43.1297 9.44578 41.8641 9.98438H46.2656V68.4844H52.7344V3.51562H41.8641ZM66.3188 8.10563L61.8188 12.6056L63.6187 14.4L68.1187 9.89437L66.3188 8.10563ZM55.2656 17.0156V23.4844H60.7359C61.4531 23.4844 61.4531 23.3156 61.5797 23.0625C61.7203 22.7953 61.7344 22.5 61.7344 22.5V18C61.7344 18 61.7203 17.7047 61.5797 17.4375C61.4531 17.1844 61.4531 17.0156 60.75 17.0156H55.2656ZM64.9688 18.9844V21.5156H69.4688V18.9844H64.9688ZM28.7156 20.8547C26.325 21.1641 24.1453 23.9625 24.1453 27.6047C24.1453 29.6016 24.8625 31.3734 25.875 32.5828L27.0703 34.0312L25.2 34.3828C23.8922 34.6359 22.9359 35.3531 22.1062 36.4781C21.2766 37.6031 20.6578 39.1922 20.2078 41.0203C19.3922 44.2969 19.2234 48.3469 19.1953 51.9047H23.6109L24.8062 68.0625C27.8719 68.7375 31.1203 68.6953 34.0734 68.0625L35.1281 51.9047H39.3047C39.3047 48.3047 39.2484 44.2125 38.5312 40.8797C38.1234 39.0656 37.5187 37.4766 36.6891 36.3656C35.8453 35.2266 34.8188 34.5375 33.3422 34.2984L31.4297 34.0172L32.6672 32.4984C33.5953 31.2891 34.2422 29.5453 34.2422 27.6047C34.2422 23.7375 31.8375 20.8547 29.2078 20.8547H28.7156ZM63.6187 26.1L61.8188 27.9L66.3188 32.4L68.1187 30.6L63.6187 26.1Z\" fill=\"currentColor\"/></svg>",
     "K9 Services": "<svg viewBox=\"0 0 70 70\" fill=\"none\"><path d=\"M42 21.3629L52.5 32.5869V70H45.5V47.5521H21L14 58.7761V70H7V47.5521L10.5 43.8108V32.5869L0 21.3629L3.5 17.6216L10.5 25.1042H17.5V36.3282C17.5 37.3204 17.8687 38.272 18.5251 38.9737C19.1815 39.6753 20.0717 40.0695 21 40.0695H35C35.9283 40.0695 36.8185 39.6753 37.4749 38.9737C38.1312 38.272 38.5 37.3204 38.5 36.3282V25.1042L42 21.3629ZM59.5 10.139V2.65633L45.5 17.6216L56 28.8455L59.5 25.1042L63 28.8455L70 21.3629L59.5 10.139ZM33.25 26.9749L8.75 0.785676C7.805 -0.261892 6.265 -0.261892 5.25 0.785676C4.27 1.79583 4.27 3.44201 5.25 4.52699L29.75 30.7162C30.695 31.7638 32.235 31.7638 33.25 30.7162C34.23 29.706 34.23 28.0599 33.25 26.9749Z\" fill=\"currentColor\"/></svg>"
  }
   ;
   var mega=document.getElementById('mega'),
  acct=document.getElementById('acct'),
  pop=document.getElementById('pop') ;
   function closeAll(except) {
      if(except!=='mega')mega.classList.remove('open') ;
      if(except!=='acct')acct.classList.remove('open') ;
      if(except!=='pop') {
      pop.classList.remove('open') ;
      document.querySelectorAll('.tile.active').forEach(function(t) {
        t.classList.remove('active') ;
      }
      ) ;
    }
     
  }
   // mega
   document.getElementById('menuBtn').addEventListener('click',
  function(e) {
    e.stopPropagation() ;
    var o=mega.classList.contains('open') ;
    closeAll('mega') ;
    mega.classList.toggle('open',
    !o) ;
  }
  ) ;
   document.getElementById('megaClose').addEventListener('click',
  function() {
    mega.classList.remove('open') ;
  }
  ) ;
   mega.querySelector('.scrim').addEventListener('click',
  function() {
    mega.classList.remove('open') ;
  }
  ) ;
   // account
   var acctBtn=document.getElementById('acctBtn') ;
   acctBtn.addEventListener('click',
  function(e) {
    e.stopPropagation() ;
    var o=acct.classList.contains('open') ;
    closeAll('acct') ;
    if(!o) {
      var r=acctBtn.getBoundingClientRect() ;
      acct.style.top=(r.bottom+8)+'px' ;
      acct.style.left=Math.min(r.right-230,
      window.innerWidth-238)+'px' ;
      acct.classList.add('open') ;
    }
  }
  ) ;
   acct.addEventListener('click',
  function(e) {
    e.stopPropagation() ;
  }
  ) ;
   // dark mode
   function setDark(on) {
    document.documentElement.setAttribute('data-theme',
    on?'dark':'light') ;
    document.getElementById('darkSw').classList.toggle('on',
    on) ;
  }
   document.getElementById('darkRow').addEventListener('click',
  function() {
    setDark(document.documentElement.getAttribute('data-theme')!=='dark') ;
  }
  ) ;
   // requests toggle
   document.getElementById('reqBtn').addEventListener('click',
  function(e) {
    e.stopPropagation() ;
    this.classList.toggle('on') ;
  }
  ) ;
   // tiles -> popover
   document.querySelectorAll('.tile').forEach(function(tile) {
      tile.addEventListener('click',
    function(e) {
         e.stopPropagation() ;
         var mod=tile.getAttribute('data-mod') ;
         if(tile.classList.contains('active')) {
        closeAll() ;
        return ;
      }
         closeAll('pop') ;
      tile.classList.add('active') ;
         document.getElementById('popT').textContent=mod ;
         document.getElementById('popIc').innerHTML=ICONS[mod]||'' ;
         var g=document.getElementById('popG') ;
      g.innerHTML='' ;
         var acts=ACT[mod]||['Open'] ;
         acts.forEach(function(a) {
        var b=document.createElement('button') ;
        b.className='p-b'+(acts.length%2&&a===acts[acts.length-1]?' full':'') ;
        b.textContent=a ;
        g.appendChild(b) ;
      }
      ) ;
         pop.classList.add('open') ;
         var r=tile.getBoundingClientRect() ;
         var top=r.bottom+10,
       left=r.left ;
         if(left+300>window.innerWidth-12)left=window.innerWidth-312 ;
         if(top+pop.offsetHeight>window.innerHeight-12)top=Math.max(12,
      r.top-pop.offsetHeight-10) ;
         pop.style.top=top+'px' ;
      pop.style.left=left+'px' ;
        
    }
    ) ;
     
  }
  ) ;
   pop.addEventListener('click',
  function(e) {
    e.stopPropagation() ;
  }
  ) ;
   // dismiss notifications
   function bindClose(btn) {
    btn.addEventListener('click',
    function() {
      var c=btn.closest('.ncard') ;
      c.style.transition='opacity .2s,transform .2s' ;
      c.style.opacity='0' ;
      c.style.transform='translateX(-10px)' ;
      setTimeout(function() {
        c.remove() ;
        checkEmpty() ;
      }
      ,
      200) ;
    }
    ) ;
  }
   document.querySelectorAll('.nclose').forEach(bindClose) ;
   function checkEmpty() {
    var f=document.getElementById('feed') ;
    if(!f.querySelector('.ncard')&&!f.querySelector('.feed-empty')) {
      var d=document.createElement('div') ;
      d.className='feed-empty' ;
      d.textContent='No new notifications' ;
      f.appendChild(d) ;
    }
  }
   document.getElementById('delAll').addEventListener('click',
  function() {
    document.querySelectorAll('#feed .ncard').forEach(function(c) {
      c.remove() ;
    }
    ) ;
    checkEmpty() ;
  }
  ) ;
   // global dismiss
   document.addEventListener('click',
  function() {
    closeAll() ;
  }
  ) ;
   document.addEventListener('keydown',
  function(e) {
    if(e.key==='Escape')closeAll() ;
  }
  ) ;
   window.addEventListener('scroll',
  function() {
    pop.classList.remove('open') ;
    document.querySelectorAll('.tile.active').forEach(function(t) {
      t.classList.remove('active') ;
    }
    ) ;
  }
  ,
  true) ;
   requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      document.body.classList.add('loaded') ;
    }
    ) ;
  }) ;
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.adv-track');
    const cards = document.querySelectorAll('.adv-card');
    const leftArrow = document.querySelector('.adv-left');
    const rightArrow = document.querySelector('.adv-right');
    const slider = document.querySelector('.adv-slider');
    
    const globalViewer = document.getElementById('adv-global-viewer');
    let viewerCard = null;
    let vImg, vTitle, vText, vDate, vLeft, vRight;

    if (globalViewer) {
        viewerCard = globalViewer.querySelector('.viewer-card');
        vImg = globalViewer.querySelector('.viewer-img');
        vTitle = globalViewer.querySelector('.viewer-title');
        vText = globalViewer.querySelector('.viewer-text');
        vDate = globalViewer.querySelector('.viewer-date');
        vLeft = globalViewer.querySelector('.viewer-left');
        vRight = globalViewer.querySelector('.viewer-right');
    }

    let currentIndex = 0;
    let activeCardIndex = 0;
    const totalCards = cards.length;
    let autoPlayInterval;

    if (totalCards === 0) return;

   
    // ==========================================
    function updateSlider() {
        if (track) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateSlider();
    }

    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 3500);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
        });
    }
    if (leftArrow) {
        leftArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
        });
    }

    if (slider) {
        slider.addEventListener('mouseenter', stopAutoPlay);
        slider.addEventListener('mouseleave', () => {
            if (!globalViewer || !globalViewer.classList.contains('adv-viewer-active')) {
                startAutoPlay();
            }
        });
    }

    startAutoPlay();

    function populateViewer(index) {
        if (!globalViewer || index < 0 || index >= totalCards) return;
        activeCardIndex = index;
        
        const card = cards[index];
        const img = card.querySelector('.adv-img')?.src || '';
        const title = card.querySelector('.adv-title')?.textContent || '';
        const text = card.querySelector('.adv-text')?.textContent || '';
        const date = card.querySelector('.adv-date')?.textContent || '';
        const nativeLink = card.querySelector('.adv-link')?.href || '#';

        if (vImg) vImg.src = img;
        if (vTitle) vTitle.textContent = title;
        if (vText) vText.textContent = text;
        if (vDate) vDate.textContent = date;

       
        if (vImg) {
            vImg.onclick = () => {
                window.location.href = nativeLink;
            };
            vImg.style.cursor = 'pointer';
        }
    }

   
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            stopAutoPlay();
            currentIndex = index; 
            updateSlider();
            
            populateViewer(index);
            if (globalViewer) globalViewer.classList.add('adv-viewer-active');
        });
    });

    if (viewerCard) {
        viewerCard.addEventListener('mouseleave', () => {
            if (globalViewer) globalViewer.classList.remove('adv-viewer-active');
            startAutoPlay();
        });
    }

    if (globalViewer) {
        globalViewer.addEventListener('click', (e) => {
            if (e.target === globalViewer) {
                globalViewer.classList.remove('adv-viewer-active');
                startAutoPlay();
            }
        });
    }

    if (vLeft) {
        vLeft.addEventListener('click', (e) => {
            e.stopPropagation(); 
            prevSlide(); 
            populateViewer(currentIndex); 
        });
    }

    if (vRight) {
        vRight.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide(); 
            populateViewer(currentIndex); 
        });
    }
});
}
)() ;
  