

// function Button( {
//     return (
//         <button className= isOutline ?"outline_btn":"primary_btn"
//             {icon}
//             {text}

//         </button>
//     )
// }

// export default Button



function Button({ isOutline, icon, text }) {

    return (
        <button

            className={isOutline ? "outline_btn" : "primary_btn"}>
            {icon}
            {text}
        </button>
    );
}

export default Button;
