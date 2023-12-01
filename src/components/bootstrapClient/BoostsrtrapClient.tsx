"use client"
import { useEffect } from "react";

const BootstrapClient = (): null => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return null; // Retornando null, pois este componente não renderiza nada diretamente
}

export default BootstrapClient;