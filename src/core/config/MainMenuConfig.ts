const DocMenuConfig: object = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotone/Design/PenAndRuller.svg",
        fontIcon: "bi-app-indicator",
      },
      // {
      //   heading: "layoutBuilder",
      //   route: "/builder",
      //   svgIcon: "media/icons/duotone/Interface/Settings-02.svg",
      //   fontIcon: "bi-layers",
      // },
    ],
  },
  {
    heading: "Tekne & Kabin",
    pages: [
      {
        heading: "Tekneler",
        route: "/boatslist",
        svgIcon: "media/icons/duotone/Code/Code.svg",
        fontIcon: "bi-collection",
      },
      {
        heading: "Kabinler",
        route: "/cablist",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-card-list",
      },
    ],
  },
  {
    heading: "Yönetim",
    pages: [
      {
        heading: "Liman Yönetimi",
        route: "/ports",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-gear",
      },
      {
        heading: "Kullanıcı Yönetimi",
        route: "/userlist",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-person",
      },
      {
        sectionTitle: "Raporlar",
        route: "/report",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-file-earmark",
        sub: [
          {
            heading: "Banka İade Raporları",
            route: "/report/bankrefundreports",
          },
          {
            heading: "Ödeme Bekleyenler",
            route: "/report/pendingpayment",
          },
          {
            heading: "Satış Raporları",
            route: "/report/salereport",
          },
        ],
      },
      {
        heading: "Yorum Yönetimi",
        route: "/comments",
        svgIcon: "media/icons/duotone/Code/Code.svg",
        fontIcon: "bi-chat-left-dots",
      },
      {
        sectionTitle: "Site Yönetimi",
        route: "/management",
        svgIcon: "media/icons/duotone/Code/Code.svg",
        fontIcon: "bi-code-slash",
        sub: [
          {
            heading: "Site Bilgileri",
            route: "/management/website",
          },
          {
            heading: "Seo Yönetimi",
            route: "/management/seo",
          },
          {
            heading: "Banka Yönetimi",
            route: "/management/bank",
          },
          {
            heading: "Sayfa Yönetimi",
            route: "/management/pagemanagement",
          },
        ],
      },
      {
        heading: "Talepler",
        route: "/demands",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "Site Ayarları",
    pages: [
      {
        heading: "Genel Ayarlar",
        route: "/setting/details",
        svgIcon: "media/icons/duotone/Code/Code.svg",
        fontIcon: "bi-gear",
        // sub: [
        //   {
        //     heading: "Kullanıcı Arayüzü",
        //     route: "/setting/details",
        //   },
        //   {
        //     heading: "Seo Yönetimi",
        //     route: "/management/seo",
        //   },
        //   {
        //     heading: "Banka Yönetimi",
        //     route: "/management/bank",
        //   },
        //   {
        //     heading: "Sayfa Yönetimi",
        //     route: "/management/pagemanagement",
        //   },
        // ],
      },
      {
        heading: "Sosyal Medya",
        route: "/setting/social",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-instagram",
      },
      {
        heading: "Etiket Yönetimi",
        route: "/setting/tagmanager",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-code-slash",
      },
      {
        heading: "Acenta Yönetimi",
        route: "/setting/agent",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-percent",
      },
      {
        heading: "Admin Kullanıcı Yönetimi",
        route: "/setting/usermanagement",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-person",
      },{
        heading: "Sanal Pos Ayarları",
        route: "/setting/virtualpos",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-wallet2",
      },
    ],
  },
  {
    heading: "Bayilikler",
    pages: [
      {
        heading: "Bayilikler",
        route: "/dealers",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-gear",
      },
    ],
  },
  // {
  //   heading: "craft",
  //   route: "/crafted",
  //   pages: [
  //     {
  //       sectionTitle: "pages",
  //       route: "/pages",
  //       svgIcon: "media/icons/duotone/Code/Compiling.svg",
  //       fontIcon: "bi-archive",
  //       sub: [
  //         {
  //           sectionTitle: "profile",
  //           route: "/profile",
  //           sub: [
  //             {
  //               heading: "profileOverview",
  //               route: "/crafted/pages/profile/overview",
  //             },
  //             {
  //               heading: "projects",
  //               route: "/crafted/pages/profile/projects",
  //             },
  //             {
  //               heading: "campaigns",
  //               route: "/crafted/pages/profile/campaigns",
  //             },
  //             {
  //               heading: "documents",
  //               route: "/crafted/pages/profile/documents",
  //             },
  //             {
  //               heading: "connections",
  //               route: "/crafted/pages/profile/connections",
  //             },
  //             {
  //               heading: "activity",
  //               route: "/crafted/pages/profile/activity",
  //             },
  //           ],
  //         },
  //         {
  //           sectionTitle: "wizards",
  //           route: "/wizard",
  //           sub: [
  //             {
  //               heading: "horizontal",
  //               route: "/crafted/pages/wizards/horizontal",
  //             },
  //             {
  //               heading: "vertical",
  //               route: "/crafted/pages/wizards/vertical",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: "account",
  //       route: "/account",
  //       svgIcon: "media/icons/duotone/General/User.svg",
  //       fontIcon: "bi-person",
  //       sub: [
  //         {
  //           heading: "accountOverview",
  //           route: "/crafted/account/overview",
  //         },
  //         {
  //           heading: "settings",
  //           route: "/crafted/account/settings",
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: "authentication",
  //       svgIcon: "media/icons/duotone/Interface/Lock.svg",
  //       fontIcon: "bi-sticky",
  //       sub: [
  //         {
  //           sectionTitle: "basicFlow",
  //           sub: [
  //             {
  //               heading: "signIn",
  //               route: "/sign-in",
  //             },
  //             {
  //               heading: "signUp",
  //               route: "/sign-up",
  //             },
  //             {
  //               heading: "passwordReset",
  //               route: "/password-reset",
  //             },
  //           ],
  //         },
  //         {
  //           heading: "error404",
  //           route: "/404",
  //         },
  //         {
  //           heading: "error500",
  //           route: "/500",
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: "modals",
  //       route: "/modals",
  //       svgIcon: "media/icons/duotone/Design/Substract.svg",
  //       fontIcon: "bi-shield-check",
  //       sub: [
  //         {
  //           sectionTitle: "general",
  //           route: "/general",
  //           sub: [
  //             {
  //               heading: "inviteFriends",
  //               route: "/crafted/modals/general/invite-friends",
  //             },
  //             {
  //               heading: "viewUsers",
  //               route: "/crafted/modals/general/view-user",
  //             },
  //             {
  //               heading: "upgradePlan",
  //               route: "/crafted/modals/general/upgrade-plan",
  //             },
  //             {
  //               heading: "shareAndEarn",
  //               route: "/crafted/modals/general/share-and-earn",
  //             },
  //           ],
  //         },
  //         {
  //           sectionTitle: "forms",
  //           route: "/forms",
  //           sub: [
  //             {
  //               heading: "newTarget",
  //               route: "/crafted/modals/forms/new-target",
  //             },
  //             {
  //               heading: "newCard",
  //               route: "/crafted/modals/forms/new-card",
  //             },
  //             {
  //               heading: "newAddress",
  //               route: "/crafted/modals/forms/new-address",
  //             },
  //             {
  //               heading: "createAPIKey",
  //               route: "/crafted/modals/forms/create-api-key",
  //             },
  //           ],
  //         },
  //         {
  //           sectionTitle: "wizards",
  //           route: "/wizards",
  //           sub: [
  //             {
  //               heading: "twoFactorAuth",
  //               route: "/crafted/modals/wizards/two-factor-auth",
  //             },
  //             {
  //               heading: "createApp",
  //               route: "/crafted/modals/wizards/create-app",
  //             },
  //             {
  //               heading: "createAccount",
  //               route: "/crafted/modals/wizards/create-account",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: "widgets",
  //       route: "/widgets",
  //       svgIcon: "media/icons/duotone/Layout/Layout-4-blocks.svg",
  //       fontIcon: "bi-layers",
  //       sub: [
  //         {
  //           heading: "widgetsLists",
  //           route: "/crafted/widgets/lists",
  //         },
  //         {
  //           heading: "widgetsStatistics",
  //           route: "/crafted/widgets/statistics",
  //         },
  //         {
  //           heading: "widgetsCharts",
  //           route: "/crafted/widgets/charts",
  //         },
  //         {
  //           heading: "widgetsMixed",
  //           route: "/crafted/widgets/mixed",
  //         },
  //         {
  //           heading: "widgetsTables",
  //           route: "/crafted/widgets/tables",
  //         },
  //         {
  //           heading: "widgetsFeeds",
  //           route: "/crafted/widgets/feeds",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   heading: "apps",
  //   route: "/apps",
  //   pages: [
  //     {
  //       sectionTitle: "chat",
  //       route: "/chat",
  //       svgIcon: "media/icons/duotone/Communication/Group-chat.svg",
  //       fontIcon: "bi-chat-left",
  //       sub: [
  //         {
  //           heading: "privateChat",
  //           route: "/apps/chat/private-chat",
  //         },
  //         {
  //           heading: "groupChat",
  //           route: "/apps/chat/group-chat",
  //         },
  //         {
  //           heading: "drawerChat",
  //           route: "/apps/chat/drawer-chat",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default DocMenuConfig;
