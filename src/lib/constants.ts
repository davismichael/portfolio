export const CHIPS = [
  { icon: "grid", label: "Admin Dashboard" },
  { icon: "layout", label: "Landing Page" },
  { icon: "pen", label: "Blog Platform" },
  { icon: "users", label: "Community Platform" },
  { icon: "store", label: "Online Store" },
] as const;

export const BUILD_STEPS = [
  { title: "Setting up user authentication", subtitle: "User authentication" },
  { title: "Building subscription database", subtitle: "Subscription database" },
  { title: "Configuring email notifications", subtitle: "Email notifications" },
  { title: "Configuring SMS notifications", subtitle: "SMS notifications" },
] as const;
