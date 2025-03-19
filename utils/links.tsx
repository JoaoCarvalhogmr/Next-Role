import { FilePlus, ClipboardList, Activity  } from "lucide-react"

type NavLink = {
    href: string;
    label: string;
    icon: React.ReactNode;
}

const links: NavLink[] = [
    {
        href: "/add-job",
        label: "add job",
        icon: <FilePlus />
    },
    {
        href: "/jobs",
        label: "jobs",
        icon: <ClipboardList /> 
    },
    {
        href: "/stats",
        label: "stats",
        icon: <Activity />
    }
]

export default links;

