export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <br />
            <div>
                <p>This layout applies to everything under /about route</p>
            </div>
            <br />
            { children }
        </div>
    )
}
