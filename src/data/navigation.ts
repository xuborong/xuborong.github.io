export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const navigation: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about/" },
  { title: "Blog", href: "/blog/" },
  { title: "Contact", href: "mailto:xuborong20001030@gmail.com", external: true }
];
