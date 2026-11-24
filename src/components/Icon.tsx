import {
  Activity,
  AppWindow,
  BadgeCheck,
  Code,
  Database,
  FileSearch,
  FileText,
  Languages,
  Layers,
  Lightbulb,
  ListChecks,
  Mail,
  MessageSquare,
  MessagesSquare,
  Network,
  Plug,
  Repeat,
  Scale,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Split,
  Store,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/site";

const icons: Record<IconName, LucideIcon> = {
  search: Search,
  code: Code,
  store: Store,
  workflow: Workflow,
  users: Users,
  shoppingBag: ShoppingBag,
  appWindow: AppWindow,
  plug: Plug,
  layers: Layers,
  languages: Languages,
  fileSearch: FileSearch,
  database: Database,
  messageSquare: MessageSquare,
  listChecks: ListChecks,
  lightbulb: Lightbulb,
  fileText: FileText,
  network: Network,
  repeat: Repeat,
  mail: Mail,
  shoppingCart: ShoppingCart,
  split: Split,
  activity: Activity,
  target: Target,
  sparkles: Sparkles,
  scale: Scale,
  badgeCheck: BadgeCheck,
  messagesSquare: MessagesSquare,
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return (
    <Component
      aria-hidden="true"
      focusable="false"
      strokeWidth={1.5}
      className={`h-6 w-6 text-champagne ${className}`}
    />
  );
}
