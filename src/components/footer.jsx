export function Footer(){
    return(
        <footer className="mt-4 py-2 flex bg-neutral-700 justify-center">
        <p><a href="https://github.com/tia-porota" className="underline">Verónica Oviedo</a> © {new Date().getFullYear().toString()}</p>
        </footer>
    )
}