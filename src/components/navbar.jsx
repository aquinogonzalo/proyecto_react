export function Navbar() {
    return (
        <>
            <header class="container header">
            <nav class="nav">
                <div class="logo">
                <h2>Centinela</h2>
                </div>
                <div class="nav_menu" id="nav_menu">
                <button class="close_btn" id="close_btn">
                    <i class="ri-close-fill"></i>
                </button>
                <ul class="nav_menu_list">
                    <li class="nav_menu_item">
                    <a href="/cuenta" class="nav_menu_link">cuenta</a>
                    </li>
                    <li class="nav_menu_item">
                    <a href="/acercade" class="nav_menu_link">formularios</a>
                    </li>
                    <li class="nav_menu_item">
                    <a href="/servicios" class="nav_menu_link">servicios</a>
                    </li>
                    <li class="nav_menu_item">
                    <a href="/contacto" class="nav_menu_link">contacto</a>
                    </li>
                    <li class="nav_menu_item">
                    <a href="/proyectos" class="nav_menu_link">proyectos</a>
                    </li>
                </ul>
                </div>
                <button class="toggle_btn" id="toggle_btn">
                <i class="ri-menu-line"></i>
                </button>
            </nav>
            </header>
        </>
    )
}