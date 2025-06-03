import React, { useState } from "react";
import axios from "axios";

function AuthForm({ onAuth }) {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isLogin) {
                // Iniciar sesión
                const res = await axios.post("/api/auth/login", { email, password });
                localStorage.setItem("token", res.data.token);
                onAuth(true);
            } else {
                // Registrar usuario
                await axios.post("/api/auth/register", { name, email, password });
                alert("Usuario registrado. Ahora puedes iniciar sesión.");
                setIsLogin(true);
            }
        } catch (err) {
            console.error("Error en autenticación:", err);
            alert(isLogin ? "Error al iniciar sesión" : "Error al registrar usuario");
        }
    };

    return (
        <div
            style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
            }}
        >
            <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ marginBottom: "10px" }}
                    />
                )}
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ marginBottom: "10px" }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ marginBottom: "10px" }}
                />
                <button type="submit" style={{ padding: "10px", width: "100%" }}>
                    {isLogin ? "Iniciar Sesión" : "Registrarse"}
                </button>
            </form>

            <p style={{ marginTop: "10px", textAlign: "center" }}>
                {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    style={{
                        marginLeft: "5px",
                        background: "none",
                        border: "none",
                        color: "#007bff",
                        cursor: "pointer",
                    }}
                >
                    {isLogin ? "Regístrate aquí" : "Inicia sesión"}
                </button>
            </p>
        </div>
    );
}

export default AuthForm;
