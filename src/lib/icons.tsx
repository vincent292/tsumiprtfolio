import type { SVGProps } from "react";

import { cn } from "./utils";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
      aria-hidden="true"
      {...props}
    />
  );
}

function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </BaseIcon>
  );
}

function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </BaseIcon>
  );
}

function PanelIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M9 4v16" />
      <path d="M13 9h4" />
      <path d="M13 13h4" />
    </BaseIcon>
  );
}

function PulseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </BaseIcon>
  );
}

function UtensilsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 3v7a2 2 0 0 0 2 2v9" />
      <path d="M8 3v7" />
      <path d="M12 3v7" />
      <path d="M18 3c-1.7 1.1-3 3.2-3 5.5S16.3 13 18 14v7" />
    </BaseIcon>
  );
}

function BuildingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 13h.01" />
      <path d="M16 13h.01" />
    </BaseIcon>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="3" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 7.75" />
    </BaseIcon>
  );
}

function WorkflowIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h6" />
      <path d="M12 10v4" />
    </BaseIcon>
  );
}

function BotIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 3h6" />
      <path d="M12 3v3" />
      <rect x="4" y="6" width="16" height="12" rx="4" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M8 16h8" />
    </BaseIcon>
  );
}

function PlugIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M7 7h10v3a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V7Z" />
      <path d="M12 15v6" />
    </BaseIcon>
  );
}

export type IconName =
  | "spark"
  | "layers"
  | "panel"
  | "pulse"
  | "utensils"
  | "building"
  | "users"
  | "workflow"
  | "bot"
  | "plug";

export function AppIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const props = { className };

  switch (name) {
    case "spark":
      return <SparkIcon {...props} />;
    case "layers":
      return <LayersIcon {...props} />;
    case "panel":
      return <PanelIcon {...props} />;
    case "pulse":
      return <PulseIcon {...props} />;
    case "utensils":
      return <UtensilsIcon {...props} />;
    case "building":
      return <BuildingIcon {...props} />;
    case "users":
      return <UsersIcon {...props} />;
    case "workflow":
      return <WorkflowIcon {...props} />;
    case "bot":
      return <BotIcon {...props} />;
    case "plug":
      return <PlugIcon {...props} />;
    default:
      return <SparkIcon {...props} />;
  }
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 13 4 4L19 7" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </BaseIcon>
  );
}
