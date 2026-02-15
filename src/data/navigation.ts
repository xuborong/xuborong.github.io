export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const navigation: NavItem[] = [
  { title: "首页", href: "/" },
  { title: "我", href: "/about/" },
  { title: "日记", href: "/blog/" },
  { title: "视频", href: "/videos/" },
  { title: "音乐", href: "/music/" },
  { title: "联系", href: "mailto:xuborong20001030@gmail.com", external: true }
];
