import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/Builder.vue"),
      },
      {
        path: "/boat/create",
        name: "boatcreate",
        component: () => import("@/views/pages/tekne/boatCreate.vue"),
      },
      {
        path: "/cabin/create",
        name: "cabincreate",
        component: () => import("@/views/pages/kabin/kabinCreate.vue"),
      },
      {
        path: "management/bank/create",
        name: "bankcreate",
        component: () => import("@/views/pages/management/bankCreate.vue"),
      },
      {
        path: "management/pagemanagement",
        name: "pageManagement",
        component: () => import("@/views/pages/management/pageManagement.vue"),
      },
      {
        path: "setting/details",
        name: "details",
        component: () => import("@/views/pages/setting/details.vue"),
      },
      {
        path: "setting/social",
        name: "social",
        component: () => import("@/views/pages/setting/social.vue"),
      },
      {
        path: "setting/tagmanager",
        name: "tagmanager",
        component: () => import("@/views/pages/setting/tagmanager.vue"),
      },
      {
        path: "setting/agent",
        name: "agent",
        component: () => import("@/views/pages/setting/agent.vue"),
      },
      {
        path: "setting/usermanagement",
        name: "usermanagement",
        component: () => import("@/views/pages/setting/usermanagement.vue"),
      },

      {
        path: "setting/virtualpos",
        name: "virtualpos",
        component: () => import("@/views/pages/setting/virtualpos.vue"),
      },
      {
        path: "/boatslist",
        name: "teknetable",
        component: () => import("@/views/pages/tekne/tekneTable.vue"),
      },
      {
        path: "/cablist",
        name: "cablist",
        component: () => import("@/views/pages/kabin/cabTable.vue"),
      },
      {
        path: "/userlist",
        name: "userlist",
        component: () => import("@/views/pages/user/userList.vue"),
      },

      {
        path: "/rez-boat",
        name: "rezBoat",
        component: () => import("@/views/pages/rezBoat/rezBoat.vue"),
      },
      {
        path: "/comments",
        name: "comments",
        component: () => import("@/views/pages/comments/comments.vue"),
      },
      {
        path: "/dealers",
        name: "dealers",
        component: () => import("@/views/pages/dealers/dealers.vue"),
      },
      {
        path: "/demands",
        name: "demands",
        component: () => import("@/views/pages/demands/demands.vue"),
      },
      {
        path: "/ports",
        name: "ports",
        component: () => import("@/views/pages/ports/ports.vue"),
      },
      {
        path: "/ports/create",
        name: "portsCreate",
        component: () => import("@/views/pages/ports/portCreate.vue"),
      },
      {
        path: "/report/salereport",
        name: "classicReport",
        component: () => import("@/views/pages/report/classicSaleReport.vue"),
      },
      {
        path: "/report/bankrefundreports",
        name: "bankRefundReports",
        component: () => import("@/views/pages/report/bankRefundReports.vue"),
      },
      {
        path: "/report/pendingpayment",
        name: "BoatOwnersPendingPayment",
        component: () =>
          import("@/views/pages/report/BoatOwnersPendingPayment.vue"),
      },

      {
        path: "/rez-cab",
        name: "rezCab",
        component: () => import("@/views/pages/rezCab/rezCab.vue"),
      },
      {
        path: "/management/seo",
        name: "seo",
        component: () => import("@/views/pages/management/seo.vue"),
      },
      {
        path: "/management/website",
        name: "website",
        component: () => import("@/views/pages/management/website.vue"),
      },
      {
        path: "/management/bank",
        name: "bank",
        component: () => import("@/views/pages/management/bank.vue"),
      },
      {
        path: "/crafted/pages/profile",
        name: "profile",
        component: () => import("@/views/pages/Profile.vue"),
        children: [
          {
            path: "overview",
            name: "profile-overview",
            component: () => import("@/views/pages/profile/Overview.vue"),
          },
          {
            path: "projects",
            name: "profile-projects",
            component: () => import("@/views/pages/profile/Projects.vue"),
          },
          {
            path: "campaigns",
            name: "profile-campaigns",
            component: () => import("@/views/pages/profile/Campaigns.vue"),
          },
          {
            path: "documents",
            name: "profile-documents",
            component: () => import("@/views/pages/profile/Documents.vue"),
          },
          {
            path: "connections",
            name: "profile-connections",
            component: () => import("@/views/pages/profile/Connections.vue"),
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () => import("@/views/pages/profile/Activity.vue"),
          },
        ],
      },
      {
        path: "/crafted/pages/wizards/horizontal",
        name: "horizontal-wizard",
        component: () => import("@/views/pages/wizards/Horizontal.vue"),
      },
      {
        path: "/crafted/pages/wizards/vertical",
        name: "vertical-wizard",
        component: () => import("@/views/pages/wizards/Vertical.vue"),
      },
      {
        path: "/crafted/account",
        name: "account",
        component: () => import("@/views/account/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/account/Overview.vue"),
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/account/Settings.vue"),
          },
        ],
      },
      {
        path: "/apps/chat/private-chat",
        name: "apps-private-chat",
        component: () => import("@/views/chat/Chat.vue"),
      },
      {
        path: "/apps/chat/group-chat",
        name: "apps-group-chat",
        component: () => import("@/views/chat/Chat.vue"),
      },
      {
        path: "/apps/chat/drawer-chat",
        name: "apps-drawer-chat",
        component: () => import("@/views/chat/DrawerChat.vue"),
      },
      {
        path: "/crafted/modals/general/invite-friends",
        name: "modals-general-invite-friends",
        component: () => import("@/views/modals/general/InviteFriends.vue"),
      },
      {
        path: "/crafted/modals/general/view-user",
        name: "modals-general-view-user",
        component: () => import("@/views/modals/general/ViewUsers.vue"),
      },
      {
        path: "/crafted/modals/general/upgrade-plan",
        name: "modals-general-upgrade-plan",
        component: () => import("@/views/modals/general/UpgradePlan.vue"),
      },
      {
        path: "/crafted/modals/general/share-and-earn",
        name: "modals-general-share-and-earn",
        component: () => import("@/views/modals/general/ShareAndEarn.vue"),
      },
      {
        path: "/crafted/modals/forms/new-target",
        name: "modals-forms-new-target",
        component: () => import("@/views/modals/forms/NewTarget.vue"),
      },
      {
        path: "/crafted/modals/forms/new-card",
        name: "modals-forms-new-card",
        component: () => import("@/views/modals/forms/NewCard.vue"),
      },
      {
        path: "/crafted/modals/forms/new-address",
        name: "modals-forms-new-address",
        component: () => import("@/views/modals/forms/NewAddress.vue"),
      },
      {
        path: "/crafted/modals/forms/create-api-key",
        name: "modals-forms-create-api-key",
        component: () => import("@/views/modals/forms/CreateApiKey.vue"),
      },
      {
        path: "/crafted/modals/wizards/two-factor-auth",
        name: "modals-wizards-two-factor-auth",
        component: () => import("@/views/modals/wizards/TwoFactorAuth.vue"),
      },
      {
        path: "/crafted/modals/wizards/create-app",
        name: "modals-wizards-create-app",
        component: () => import("@/views/modals/wizards/CreateApp.vue"),
      },
      {
        path: "/crafted/modals/wizards/create-account",
        name: "modals-wizards-create-account",
        component: () => import("@/views/modals/wizards/CreateAccount.vue"),
      },
      {
        path: "/crafted/widgets/lists",
        name: "widgets-list",
        component: () => import("@/views/widgets/Lists.vue"),
      },
      {
        path: "/crafted/widgets/statistics",
        name: "widgets-statistics",
        component: () => import("@/views/widgets/Statistics.vue"),
      },
      {
        path: "/crafted/widgets/charts",
        name: "widgets-charts",
        component: () => import("@/views/widgets/Charts.vue"),
      },
      {
        path: "/crafted/widgets/mixed",
        name: "widgets-mixed",
        component: () => import("@/views/widgets/Mixed.vue"),
      },
      {
        path: "/crafted/widgets/tables",
        name: "widgets-tables",
        component: () => import("@/views/widgets/Tables.vue"),
      },
      {
        path: "/crafted/widgets/feeds",
        name: "widgets-feeds",
        component: () => import("@/views/widgets/Feeds.vue"),
      },
    ],
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/auth/SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/auth/SignUp.vue"),
  },
  {
    path: "/password-reset",
    name: "password-reset",
    component: () => import("@/views/auth/PasswordReset.vue"),
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/error/Error404.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/Error500.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
