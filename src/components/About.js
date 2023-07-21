import React from 'react'

export default function About(props) {

    let mystyle = {
        color: props.mode === "dark" ? "black" : "grey",
        backgroundColor: props.mode === "dark" ? "#14417B" : "white",
    }
    return (
        <div className="container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Text Utils" is an intuitive and user-friendly application designed to simplify text manipulation and analysis tasks. With its straightforward interface and powerful features, this app is your go-to tool for transforming and understanding sentences with ease.</strong> <code></code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Key features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Text Case Conversion: "Text Utils" allows you to effortlessly switch between uppercase and lowercase formats. Whether you want to emphasize a point or maintain a formal tone, you can convert any sentence to uppercase or lowercase with just a tap.<br />
                                Clipboard Integration: Say goodbye to tedious copying and pasting! "Text Utils" streamlines the process of copying your modified text to the clipboard. With a single click, you can copy your transformed sentence and paste it into any desired application<br />Text Summarization: Understanding lengthy paragraphs or articles has never been simpler. "Text Utils" offers a powerful summarization feature that condenses your text into a concise and informative summary. You can specify the desired summary length, and the app will intelligently generate a summary that captures the essence of the original text.<br />

                                User-Friendly Interface: "Text Utils" prides itself on its sleek and intuitive design. The user interface is clean and straightforward, ensuring that anyone can easily navigate and utilize the app's features, regardless of their technological expertise.<br />

                                Instant Results: Save time and effort with real-time processing. As you input your sentences, the app instantly displays the results of case conversion and summarization, allowing you to make any necessary adjustments on the fly. <br />

                                Cross-Platform Compatibility: "Text Utils" is available for both iOS and Android devices, making it accessible to a wide range of users across different platforms.


                            </strong>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
