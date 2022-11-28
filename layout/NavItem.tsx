interface NavItemProps {
  href: string,
  label: string,
}

export default function NavItem(props: NavItemProps) {
    const {href, label} = props
    return (
        <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                  href={href}
                >
                  <i className="fab text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{label}</span>
                </a>
           </li>
    )
}