export const states = [
    {
        instructionText: "Drag the certificate icon from Google.com to the target directory to get the certificate file. <br/>In this example, the certificate is <b>DER-encrypted</b>.",
        certificateFileImg: {opacity: 0},
        certificateIssuerImg: {opacity: 0},
        certificateIssuerPubKeyImg: {opacity: 0},
        certificateHexBinImg: {opacity: 0},
        certificateHashedImg: {opacity: 0},
        certificateView: {opacity: 0},
        hashes: {
            certificateWrapper: {opacity: 0},
            signatureWrapper: {opacity: 0},
            signature: {
                y: 0,
                fontSize: "12pt"
            },
            certificate: {
                y: 0,
                fontSize: "12pt"
            }
        },
        modal: {
            display: "none",
            backgroundColor: "rgba(255,255,255,0)",
            backdropFilter: "none",
        },
        equalsSign: {display: "none"}
    },
    {
        instructionText: "Drag the certificate icon from Google.com to the target directory to get the certificate file. <br/>In this example, the certificate is <b>DER-encrypted</b>.",
        certificateFileImg: {opacity: 1},
    },
    {
        instructionText: "Extract the encrypted hexadecimal signature from the certificate and store it as a binary file.<br/>(The signature is highlighted in pink in the certificate above.)",
        consoleText: "openssl x509 -in *.google.com.cer -inform DER -text -noout -certopt ca_default -certopt no_validity -certopt no_serial -certopt no_subject -certopt no_extensions -certopt no_signame | grep -v 'Signature Algorithm' | tr -d '[:space:]:' | xxd -r -p > cert-signature-hex.bin",
        certificateView: {opacity: 1}
    },
    {
        instructionText: "Extract the encrypted hexadecimal signature from the certificate and store it as a binary file.<br/>(The signature is highlighted in pink in the certificate above.)",
        consoleText: "openssl x509 -in *.google.com.cer -inform DER -text -noout -certopt ca_default -certopt no_validity -certopt no_serial -certopt no_subject -certopt no_extensions -certopt no_signame | grep -v 'Signature Algorithm' | tr -d '[:space:]:' | xxd -r -p > cert-signature-hex.bin",
        certificateHexBinImg: {opacity: 1}
    },
    {
        instructionText: "Extract the CA Issuer URL from the certificate.<br/>(The URL is highlighted in green in the certificate above.)",
        consoleText: "openssl x509 -in *.google.com.cer -inform DER -text -noout | grep -o 'CA Issuers - URI:.*' | cut -d ':' -f2-",
        consoleOutputText: "http://pki.goog/gsr2/GTS1O1.crt"
    },
    {
        instructionText: "Save the CA Issuer certificate using this URL. <br/>In this example, the saved certificate is <b>DER-encrypted</b>.",
        consoleText: "curl http://pki.goog/gsr2/GTS1O1.crt > issuer.cer",
    },
    {
        instructionText: "Save the CA Issuer certificate using this URL. <br/>In this example, the saved certificate is <b>DER-encrypted</b>.",
        consoleText: "curl http://pki.goog/gsr2/GTS1O1.crt > issuer.cer",
        certificateIssuerImg: {opacity: 1}
    },
    {
        instructionText: "Obtain and save the CA Issuer's public key in <b>PEM</b> format.",
        consoleText: "openssl x509 -in issuer.cer -inform DER -noout -pubkey > issuer-pubkey.pem"
    },
    {
        instructionText: "Obtain and save the CA Issuer's public key in <b>PEM</b> format.",
        consoleText: "openssl x509 -in issuer.cer -inform DER -noout -pubkey > issuer-pubkey.pem",
        certificateIssuerPubKeyImg: {opacity: 1}
    },
    {
        instructionText: "Decrypt the hexadecimal signature using the CA Issuer's public key.",
        consoleText: "openssl rsautl -verify -inkey issuer-pubkey.pem -in cert-signature-hex.bin -pubin | openssl asn1parse -inform DER | grep -o '\\[HEX DUMP\\]:.*' | cut -d \":\"  -f2",
        consoleOutputText: "CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505"
    },
    {
        instructionText: "Decrypt the hexadecimal signature using the CA Issuer's public key.",
        consoleText: "openssl rsautl -verify -inkey issuer-pubkey.pem -in cert-signature-hex.bin -pubin | openssl asn1parse -inform DER | grep -o '\\[HEX DUMP\\]:.*' | cut -d \":\"  -f2",
        consoleOutputText: "CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505",
        hashes: {
            certificateWrapper: {opacity: 1}
        }
    },
    {
        instructionText: "Create and store a binary file representing the Google.com certificate.",
        consoleText: "openssl asn1parse -in *.google.com.cer -inform DER -strparse 4 -out certificate-hash.bin -noout"
    },
    {
        instructionText: "Create and store a binary file representing the Google.com certificate.",
        consoleText: "openssl asn1parse -in *.google.com.cer -inform DER -strparse 4 -out certificate-hash.bin -noout",
        certificateHashedImg: {opacity: 1}
    },
    {
        instructionText: "Create a hash from the binary file, based on the hashing algorithm given in the certificate.<br/>The algorithm used here is <b>SHA-256</b> (highlighted in red on the certificate above).",
        consoleText: "openssl dgst -sha256 certificate-hash.bin | cut -d \" \" -f2 | tr '[:lower:]' '[:upper:]'",
        consoleOutputText: "CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505"
    },
    {
        instructionText: "Create a hash from the binary file, based on the hashing algorithm given in the certificate.<br/>The algorithm used here is <b>SHA-256</b> (highlighted in red on the certificate above).",
        consoleText: "openssl dgst -sha256 certificate-hash.bin | cut -d \" \" -f2 | tr '[:lower:]' '[:upper:]'",
        consoleOutputText: "CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505",
        hashes: {
            signatureWrapper: {opacity: 1}
        }
    },
    {
        instructionText: "Create a hash from the binary file, based on the hashing algorithm given in the certificate.<br/>The algorithm used here is <b>SHA-256</b> (highlighted in red on the certificate above).",
        consoleText: "openssl dgst -sha256 certificate-hash.bin | cut -d \" \" -f2 | tr '[:lower:]' '[:upper:]'",
        consoleOutputText: "CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505",
        modal: {
            display: "block",
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(2px)",
            transition: {
                duration: 0.5
            }
        },
        hashes: {
            signature: {
                y: 80,
                fontSize: "20pt",
                transition: {
                    delay: 1,
                    duration: 0.75,
                }
            },
            certificate: {
                y: -80,
                fontSize: "20pt",
                transition: {
                    delay: 1,
                    duration: 0.75
                }
            }
        },
        equalsSign: {
            display: "block",
            transition: {
                delay: 2
            }
        }
    }
]