const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "HomePage",
  },
  {
    path: ["/under-construction"],
    exact: true,
    component: "UnderConstruction",
  },
  {
    path: ["/product"],
    exact: false,
    component: "ProductPage",
  },
  {
    path: ["/marketplace"],
    exact: true,
    component: "MarketPlacePage",
  },
  {
    path: ["/drops"],
    exact: true,
    component: "DropsPage",
  },
  {
    path: ["/blog"],
    exact: true,
    component: "Blog",
  },
  // {
  //   path: ["/superfans"],
  //   exact: true,
  //   component: "SuperfansPage",
  // },
  // {
  //   path: ["/superfan-profile"],
  //   exact: false,
  //   component: "SuperfanProfilePage",
  // },
  {
    path: ["/connect-wallet"],
    exact: true,
    component: "ConnectWallet",
  },
  {
    path: ["/upload"],
    exact: true,
    component: "Upload",
  },
  {
    path: ["/product"],
    exact: false,
    component: "ProductPage",
  },
  {
    path: ["/my-collections"],
    exact: false,
    component: "MyCollections",
  },
  {
    path: ["/history"],
    exact: false,
    component: "HistoryPage",
  },
  {
    path: ["/settings"],
    exact: false,
    component: "SettingsPage",
  },
  {
    path: ["/payment-success"],
    exact: false,
    component: "SuccessfullPaymentPage",
  },
  {
    path: ["/user/change-password"],
    exact: false,
    component: "ChangePasswordPage",
  },
  {
    path: ["/privacy-policy"],
    exact: true,
    component: "PrivacyPolicyPage",
  },
  {
    path: ["/terms-and-conditions"],
    exact: true,
    component: "TandCPage",
  },
  {
    path: ["/terms-of-sale"],
    exact: true,
    component: "TermsofSalePage",
  },
];

export default routes;
