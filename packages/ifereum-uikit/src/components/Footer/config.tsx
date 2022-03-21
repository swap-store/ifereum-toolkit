import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.ifereum.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://ifereum.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.ifereum.com/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.ifereum.com/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://ifereum.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.ifereum.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.ifereum.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.ifereum.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/swap-store",
      },
      {
        label: "Documentation",
        href: "https://docs.ifereum.com",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@ifereum-1/s/ifereum/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.ifereum.com/help/faq#is-ifereum-safe-has-ifereum-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.ifereum.com/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/ifereum",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/ifereum",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/IFereumIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/IFereumSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/IFereumSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/ifereum_ita",
      },
      {
        label: "русский",
        href: "https://t.me/ifereum_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/ifereumturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/IFereumPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/IFereumEs",
      },
      {
        label: "日本語",
        href: "https://t.me/ifereumjp",
      },
      {
        label: "Français",
        href: "https://t.me/ifereumfr",
      },
      {
        label: "Datch",
        href: "https://t.me/IFereum_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/IFereum_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/IFereumGeorgia",
      },
      {
        label: "Announcements",
        href: "https://t.me/IFereumAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/ifereum",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/ifereum_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/swap-store/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/ifereum",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
