import React from 'react';

function BannerComponent({ title, description, imageUrl, color = "gray" }) {

    return (
        <div style={{
            fontFamily:"system-ui",
            backgroundColor: color,
            padding: "1rem",
            textAlign: "center",
            color: "rgb(223, 223, 214)",
            borderRadius: "5px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            width: "75%",
            margin: "40px auto",
            maxWidth: "1200px",
        }}>
            {imageUrl && <img src={imageUrl} alt="Banner" style={{ width: "100%", objectFit: "contain", borderRadius: "5px" }} />}
            <h1 style={{ textTransform: "uppercase" }}>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default BannerComponent;

// Ejemplo para usar el Banner: 
// <BannerComponent
// title="Bienvenidos"
// description="Este es un banner informativo"
// imageUrl="https://img.freepik.com/free-vector/realistic-cellphone-different-perspectives_23-2148790732.jpg?t=st=1746048120~exp=1746051720~hmac=3198c43bc75ccc96c909e84b6c38690521d8b9604a133d241de623d246fc2370&w=1800"
// />