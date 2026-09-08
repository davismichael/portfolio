import { redirect } from "next/navigation";

// Side projects now live on the portfolio page alongside client work.
// Permanent redirect keeps old links and bookmarks working.
export default function ProjectsPage() {
  redirect("/portfolio");
}
